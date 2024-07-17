// https://files.eric.ed.gov/fulltext/ED338122.pdf

const questions = [
"In a class like this, I prefer course material that really challenges me so I can learn new things.",
"If I study in appropriate ways, then I will be able to learn the material in this course.",
"When I take a test I think about how poorly I am doing compared with other students.",
"I think I will be able to use what I learn in this course in other courses.",
"I believe I will receive an excellent grade in this class.",
"I'm certain I can understand the most difficult material presented in the readings for this course.",
"Getting a good grade in this class is the most satisfying thing for me right now.",
"When I take a test I think about items on other parts of the test I can't answer.",
"It is my own fault if I don't learn the material in this course.",
"It is important for me to learn the course material in this class.",
"The most important thing for me right now is improving my overall grade point average, so my main concern in this class is getting a good grade.",
"I'm confident I can learn the basic concepts taught in this course.",
"If I can, I want to get better grades in this class than most of the other students.",
"When I take tests I think of the consequences of failing.",
"I'm confident I can understand the most complex material presented by the instructor in this course.",
"In a class like this, I prefer course material that arouses my curiosity, even if it is difficult to learn.",
"I am very interested in the content area of this course.",
"If I try hard enough, then I will understand the course material.",
"I have an uneasy, upset feeling when I take an exam.",
"I'm confident I can do an excellent job on the assignments and tests in this course.",
"I expect to do well in this class.",
"The most satisfying thing for me in this course is trying to understand the content as thoroughly as possible.",
"I think the course material in this class is useful for me to learn.",
"When I have the opportunity in this class, I choose course assignments that I can learn from even if they don't guarantee a good grade.",
"If I don't understand the course material, it is because I didn't try hard enough.",
"I like the subject matter of this course.",
"Understanding the subject matter of this course is very important to me.",
"I feel my heart beating fast when I take an exam.",
"I'm certain I can master the skills being taught in this class.",
"I want to do well in this class because it is important to show my ability to my family, friends, employer, or others.",
"Considering the difficulty of this course, the teacher, and my skills, I think I will do well in this class.",
"When I study the readings for this course, I outline the material to help me organize my thoughts.",
"During class time I often miss important points because I'm thinking of other things.",
"When studying for this course, I often try to explain the material to a classmate or friend.",
"I usually study in a place where I can concentrate on my course work.",
"When reading for this course, I make up questions to help focus my reading.",
"I often feel so lazy or bored when I study for this class that I quit before I finish what I planned to do.",
"I often find myself questioning things I hear or read in this course to decide if I find them convincing.",
"When I study for this class, I practice saying the material to myself over and over.",
"Even if I have trouble learning the material in this class, I try to do the work on my own, without help from anyone.",
"When I become confused about something I'm reading for this class, I go back and try to figure it out.",
"When I study for this course, I go through the readings and my class notes and try to find the most important ideas.",
"I make good use of my study time for this course.",
"If course readings are difficult to understand, I change the way I read the material.",
"I try to work with other students from this class to complete the course assignments.",
"When studying for this course, I read my class notes and the course readings over and over again.",
"When a theory, interpretation, or conclusion is presented in class or in the readings, I try to decide if there is good supporting evidence.",
"I work hard to do well in this class even if I don't like what we are doing.",
"I make simple charts, diagrams, or tables to help me organize course material.",
"When studying for this course, I often set aside time to discuss course material with a group of students from the class.",
"I treat the course material as a starting point and try to develop my own ideas about it.",
"I find it hard to stick to a study schedule.",
"When I study for this class, I pull together information from different sources, such as lectures, readings, and discussions.",
"Before I study new course material thoroughly, I often skim it to see how it is organized.",
"I ask myself questions to make sure I understand the material I have been studying in this class.",
"I try to change the way I study in order to fit the course requirements and the instructor's teaching style.",
"I often find that I have been reading for this class but don't know what it was all about.",
"I ask the instructor to clarify concepts I don't understand well.",
"I memorize key words to remind me of important concepts in this class.",
"When course work is difficult, I either give up or only study the easy parts.",
"I try to think through a topic and decide what I am supposed to learn from it rather than just reading it over when studying for this course.",
"I try to relate ideas in this subject to those in other courses whenever possible.",
"When I study for this course, I go over my class notes and make an outline of important concepts.",
"When reading for this class, I try to relate the material to what I already know.",
"I have a regular place set aside for studying.",
"I try to play around with ideas of my own related to what I am learning in this course.",
"When I study for this course, I write brief summaries of the main ideas from the readings and my class notes.",
"When I can't understand the material in this course, I ask another student in this class for help.",
"I try to understand the material in this class by making connections between the readings and the concepts from the lectures.",
"I make sure that I keep up with the weekly readings and assignments for this course.",
"Whenever I read or hear an assertion or conclusion in this class, I think about possible alternatives.",
"I make lists of important items for this course and memorize the lists.",
"I attend this class regularly.",
"Even when course materials are dull and uninteresting, I manage to keep working until I finish.",
"I try to identify students in this class whom I can ask for help if necessary.",
"When studying for this course I try to determine which concepts I don't understand well.",
"I often find that I don't spend very much time on this course because of other activities.",
"When I study for this class, I set goals for myself in order to direct my activities in each study period.",
"If I get confused taking notes in class, I make sure I sort it out afterwards.",
"I rarely find time to review my notes or readings before an exam.",
"I try to apply ideas from course readings in other class activities such as lecture and discussion."
];

// Motivation - questions 1-31
const items_intrinsic = [1,16,22,24];
const items_extrinisic = [7,11,13,30];
const items_task = [4,10,17,23,26,27];
const items_control_of_learning = [2,9,18,25];
const items_self_efficacy = [5,6,12,15,20,21,29,31];
const items_test_anxiety = [3,8,14,19,28];

// Learning strategies - questions 32-81
const items_rehearsal = [39,46,59,72];
const items_elaboration = [53,62,64,67,69,81];
const items_organization = [32,42,49,63];
const items_critical_thinking = [38,47,51,66,71];
const items_self_regulation = [33,36,41,44,54,55,56,57,61,76,78,79];
const items_time_study_environment = [35,43,52,65,70,73,77,80];
const items_effort = [37,48,60,74];
const items_peer_learning = [34,45,50];
const items_help_seeking = [40,58,68,75];

const items_reversed = [33,57,52,77,80,37,60,40];

const components = [
    {
        name: 'Intrinsic Goal Orientation',
        items: items_intrinsic,
        type: 'motivation',
        description: 'Intrinsic goal orientation is about doing a task because you find it fun or interesting. A high score indicates you participate in the task for its own sake, not just to achieve something else (such as a high grade).'
    },
    {
        name: 'Extrinsic Goal Orientation',
        items: items_extrinisic,
        type: 'motivation',
        description: 'Extrinsic goal orientation is about doing a task to get something else, like good grades, rewards, competition, or praise. A high score indicates you may be less focused on mastering course content and more focused on earning a high grade.'
    },
    {
        name: 'Task Value',
        items: items_task,
        type: 'motivation',
        description: 'Task value is about how interesting, important, and useful you think a task is. When you find a task valuable, you are more likely to put effort into it. A high score indicates you tend to find motivation in your coursework based on the value of the content.'
    },
    {
        name: 'Control of Learning Beliefs',
        items: items_control_of_learning,
        type: 'motivation',
        description: 'Control of learning beliefs is about believing that your efforts can lead to good results and that you alone are in control of your academic performance. A high score indicates that because you feel in control of your own learning, you may be more strategic in thinking about how to most effectively study for a course.'
    },
    {
        name: 'Self-Efficacy for Learning and Performance',
        items: items_self_efficacy,
        type: 'motivation',
        description: 'Self-efficacy is your confidence in your ability to do well on a task. It includes your confidence in your skills and your expectations of success. A high score indicates you are confident in your skills and believe you will perform well (as opposed to having doubts and expecting to struggle).'
    },
    {
        name: 'Test Anxiety',
        items: items_test_anxiety,
        type: 'motivation',
        description: 'Test anxiety measures how much you worry about tests and how often you get distracted during exams. A high score indicates a higher levels of anxiety in testing situations.'
    },
    {
        name: 'Rehearsal',
        items: items_rehearsal,
        type: 'learning_strategies',
        description: 'Rehearsal involves repeating information, rereading notes, and memorizing facts. It works well for simple tasks but does not help with deep understanding. A high score indicates you may focus on surface-level, memorization-type learning as opposed to emphasizing critical thinking.'
    },
    {
        name: 'Elaboration',
        items: items_elaboration,
        type: 'learning_strategies',
        description: 'Elaboration involves summarizing, paraphrasing, making analogies, and connecting new information to what you already know. This helps you understand and remember things better. A high score indicates you use elaboration to develop a deep, long-term understanding of course content.'
    },
    {
        name: 'Organization',
        items: items_organization,
        type: 'learning_strategies',
        description: 'Organization is about identifying main ideas and arranging them in a clear way. Examples include outlining, making charts, drawing diagrams, and creating tables. A high score indicates you tend to create study tools to help build a better understanding of the content.'
    },
    {
        name: 'Critical Thinking',
        items: items_critical_thinking,
        type: 'learning_strategies',
        description: 'Critical thinking is about using your existing knowledge to solve problems, make decisions, and evaluate situations. A high score indicates you are good at applying what you know to new problems or situations.'
    },
    {
        name: 'Metacognitive Self-Regulation',
        items: items_self_regulation,
        type: 'learning_strategies',
        description: 'Metacognitive self-regulation is about being aware of how you study, keeping track of your progress, and adjusting your methods if needed. A high score indicates you plan well, monitor your studying, and change strategies if your study plan is not working.'
    },
    {
        name: 'Time and Study Environment',
        items: items_time_study_environment,
        type: 'learning_strategies',
        description: 'This strategy is about managing your time and study space well. A high score mean you are good at planning, scheduling, and keeping your study area organized and free of distractions.'
    },
    {
        name: 'Effort Regulation',
        items: items_effort,
        type: 'learning_strategies',
        description: 'Effort regulation is about trying hard on schoolwork even when it is difficult or when you are distracted. A high score indicates grit and determination.'
    },
    {
        name: 'Peer Learning',
        items: items_peer_learning,
        type: 'learning_strategies',
        description: 'Peer learning is about working with your classmates to help you understand the material better and gain new insights. A high score indicates you favor collaborative studying with others to learn the course content.'
    },
    {
        name: 'Help Seeking',
        items: items_help_seeking,
        type: 'learning_strategies',
        description: 'Help seeking is about asking others for support, such as your peers or instructors, when you need it. A high score indicates you are comfortable reaching out to others for help, such as a small-group tutoring or attending instructors\' office hours.'
    }
];
