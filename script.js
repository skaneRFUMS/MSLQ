const questionsPerPage = 9;
let currentPage = 0;
const answers = new Array(questions.length).fill(0);
const totalPages = Math.ceil(questions.length / questionsPerPage);

$(document).ready(function() {
    renderQuestions();

});

function renderQuestions() {
    const startIndex = currentPage * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, questions.length);
    let html = '';

    for (let i = startIndex; i < endIndex; i++) {
        html += `
            <div class="question-row">
                <div class="question-text">${i + 1}. ${questions[i]}</div>
                <div class="radio-group">
                    ${[1, 2, 3, 4, 5, 6, 7].map(value => `
                        <label>
                            <input type="radio" name="q${i}" value="${value}" ${answers[i] === value ? 'checked' : ''} onchange="saveAnswers(); setSubmitVisibility();">
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }

    $('#question-container').html(html);
    updateNavigation();
    updatePageIndicator();
}

function updateNavigation() {
	$('#prev').prop('disabled', currentPage === 0);
	if (currentPage === totalPages - 1) {
		$('#next').addClass('d-none');
	} else {
		$('#next').removeClass('d-none');
	}
}

function setSubmitVisibility() {
	if (answers.filter(x => x == 0).length) {
		$('#submit').addClass('d-none');
	} else {
		$('#submit').removeClass('d-none');
	}
}

function updatePageIndicator() {
	let indicatorHtml = '';
	for (let i = 0; i < totalPages; i++) {
		indicatorHtml += `<span class="page-number ${i === currentPage ? 'active' : ''}">${i + 1}</span>`;
	}
	$('#page-indicator').html(indicatorHtml);

	$('.page-number').click(function() {
		const newPage = parseInt($(this).text()) - 1;
		if (newPage !== currentPage) {
			saveAnswers();
			currentPage = newPage;
			renderQuestions();
		}
	});
}

$('#prev').click(function() {
	if (currentPage > 0) {
		saveAnswers();
		currentPage--;
		renderQuestions();
	}
});

$('#next').click(function() {
	if (currentPage < totalPages - 1) {
		saveAnswers();
		currentPage++;
		renderQuestions();
	}
});

$('#submit').click(function() {
	saveAnswers();
	calculateScores();
});

function renderResults(component_filtered) {
	const accordionContainer = $('<div>').addClass('accordion');

	component_filtered.forEach((component, index) => {
		const isFirst = index === 0;
		const isLast = index === component_filtered.length - 1;
		const shouldExpand = isFirst || isLast;
		
		const accordionItem = $('<div>').addClass('accordion-item');
		const accordionHeader = $('<h2>').addClass('accordion-header');
		const accordionButton = $('<button>')
			.addClass('accordion-button')
			.attr({
				type: 'button',
				'data-bs-toggle': 'collapse',
				'data-bs-target': `#collapse${index}`,
				'aria-expanded': shouldExpand,
				'aria-controls': `collapse${index}`
			})
			.html(`<strong>${component.name}</strong> &nbsp; (score ${Math.round(component.score*10)/10})`);

		if (!shouldExpand) {
			accordionButton.addClass('collapsed bg-light bg-opacity-50');
		} else {
			if (isLast) { accordionButton.addClass('bg-danger text-danger bg-opacity-10'); }
			if (isFirst) { accordionButton.addClass('bg-success text-success bg-opacity-10'); }
		}

		const accordionContent = $('<div>')
			.addClass('accordion-collapse collapse')
			.attr({
				id: `collapse${index}`
			});

		if (shouldExpand) {
			accordionContent.addClass('show');
		}

		const accordionBody = $('<div>').addClass('accordion-body');
		const componentInfo = $('<div>')
			.addClass('card')
			.append(
				$('<div>').addClass('card-body')
					.append($('<h5>').addClass('card-title').text(`${component.name}`))
					.append($('<p>').addClass('card-text').text(component.description))
					.append($('<p>').addClass('card-text').html(`<strong>Score:</strong> ${Math.round(component.score*10)/10}`))
			);

		accordionBody.append(componentInfo);
		accordionContent.append(accordionBody);
		accordionHeader.append(accordionButton);
		accordionItem.append(accordionHeader, accordionContent);
		accordionContainer.append(accordionItem);
	});

	return accordionContainer;
}

function saveAnswers() {
	const startIndex = currentPage * questionsPerPage;
	const endIndex = Math.min(startIndex + questionsPerPage, questions.length);

	for (let i = startIndex; i < endIndex; i++) {
		const selectedValue = $(`input[name="q${i}"]:checked`).val();
		answers[i] = selectedValue ? parseInt(selectedValue) : 0;
	}
}

function FillRandomly() {
	for (let i = 0; i < answers.length; i++) {
	  answers[i] = Math.floor(Math.random() * 7) + 1;
	}
	renderQuestions();
}

function calculateScores() {
	// Implement your MSLQ score calculation logic here
	//return answers.reduce((sum, value) => sum + value, 0);
	
	components.forEach(component => {
		
		let sum = 0;
		component.items.forEach(qnum => {
			let arr_index = qnum - 1;
			let value = answers[arr_index];
			if (items_reversed.includes(qnum)) {
				value = 8-value;
			}
			sum += value;
		});
		component.score = sum/component.items.length;
	});
	
	// Motivation
	let motivation = components.filter(item => item.type == 'motivation');
	motivation.sort((a,b) => b.score - a.score);

	// Learning strategies
	let learning_strategies = components.filter(item => item.type == 'learning_strategies');
	learning_strategies.sort((a,b) => b.score - a.score);
	
	
	let results1 = renderResults(motivation,);
	let results2 = renderResults(learning_strategies,"Learning Strategy Scales");
	
	$('#result').html('<hr /> <h1 class="mt-4">Results</h1>');
	$('#result').append('<h2 class="mt-4">Motivation Scales</h2>');
	$('#result').append('<p>These motivation scales describe how you are motivated towards learning and what makes you want to engage more in the classroom. Scores range from 7 (very true of me) to 1 (not true of me).</p>');
	$('#result').append(results1);
	$('#result').append('<hr />');
	$('#result').append('<h2 class="mt-4">Learning Strategy Scales</h2>');
	$('#result').append('<p>These learning strategy scales describe the methods you tend to use to understand course content. Scores range from 7 (very true of me) to 1 (not true of me).</p>');
	$('#result').append(results2);
	$('#result').show();
	
	$('html, body').animate({
		scrollTop: $('#submit').offset().top
	}, 200);
	
}