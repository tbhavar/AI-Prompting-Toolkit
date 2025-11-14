// ================================
// Prompt Engineering Mastery
// Main JavaScript File
// ================================

// Game State Management
const gameState = {
    userName: '',
    xp: 0,
    level: 1,
    streak: 0,
    achievements: [],
    moduleProgress: {},
    quizScores: {},
    timeSpent: 0,
    lastVisit: null
};

// Modules Data
const modules = [
    {
        id: 1,
        title: 'Introduction to Prompt Engineering',
        icon: '🎯',
        description: 'Learn what prompt engineering is and why it matters',
        lessons: [
            {
                title: 'What is Prompt Engineering?',
                content: `Prompt engineering is the art and science of crafting effective inputs for large language models (LLMs) to generate desired outputs. You don't need to be a data scientist to write prompts, but creating effective prompts requires understanding how LLMs work.`,
                examples: [
                    { bad: 'Write about AI', good: 'Write a 300-word explanation of how transformer models work, suitable for beginners with no technical background.' }
                ]
            },
            {
                title: 'Why Prompt Engineering Matters',
                content: `The quality of your prompt directly influences the relevance, accuracy, and coherence of the AI's response. Many factors affect prompt efficacy: model choice, training data, configurations, word choice, style, tone, structure, and context.`,
                examples: []
            },
            {
                title: 'The Iterative Process',
                content: `Prompt engineering is iterative. Inadequate prompts lead to ambiguous or inaccurate responses. You'll test, refine, and optimize prompts to unlock the model's full potential.`,
                examples: []
            }
        ],
        quiz: [
            {
                question: 'What is the primary goal of prompt engineering?',
                options: [
                    'To make prompts as long as possible',
                    'To design inputs that guide LLMs to generate desired outputs',
                    'To confuse the AI model',
                    'To reduce the model\'s response time'
                ],
                correct: 1,
                explanation: 'Prompt engineering focuses on crafting effective inputs to guide models toward generating the outputs you want.'
            },
            {
                question: 'Which of the following affects prompt efficacy?',
                options: [
                    'Only the words you choose',
                    'Only the model configuration',
                    'Word choice, tone, structure, context, and model settings',
                    'None of the above'
                ],
                correct: 2,
                explanation: 'Multiple factors influence how well a prompt works, including language, structure, context, and technical settings.'
            }
        ],
        xpReward: 100,
        unlockLevel: 1
    },
    {
        id: 2,
        title: 'Core Prompting Principles',
        icon: '📝',
        description: 'Master the fundamental principles of effective prompting',
        lessons: [
            {
                title: 'Clarity and Specificity',
                content: `Clear and specific prompts yield better results. Instead of vague requests, provide precise instructions about what you want, how you want it formatted, and any constraints.`,
                examples: [
                    { bad: 'Explain machine learning', good: 'Explain machine learning in 3 bullet points, each under 50 words, for a business executive with no technical background.' }
                ]
            },
            {
                title: 'Providing Context',
                content: `Context helps the model understand your needs. Include relevant background information, the intended audience, and the purpose of the output.`,
                examples: [
                    { bad: 'Write a product description', good: 'Write a 100-word product description for eco-conscious millennials about bamboo toothbrushes, emphasizing sustainability and value.' }
                ]
            },
            {
                title: 'Setting Constraints',
                content: `Constraints guide the model's output. Specify length, format, tone, style, and any limitations to get exactly what you need.`,
                examples: []
            }
        ],
        quiz: [
            {
                question: 'Which prompt demonstrates better specificity?',
                options: [
                    'Tell me about dogs',
                    'Write 5 facts about Golden Retrievers for children aged 8-10',
                    'Dogs are nice',
                    'What about pets?'
                ],
                correct: 1,
                explanation: 'The second option specifies the topic, format, target audience, and quantity, making it much more effective.'
            },
            {
                question: 'Why is providing context important in prompts?',
                options: [
                    'To make the prompt longer',
                    'To confuse the model',
                    'To help the model understand your needs and generate relevant responses',
                    'It\'s not important'
                ],
                correct: 2,
                explanation: 'Context helps the model tailor its response to your specific situation and audience.'
            }
        ],
        xpReward: 150,
        unlockLevel: 1
    },
    {
        id: 3,
        title: 'Prompt Patterns & Techniques',
        icon: '🎨',
        description: 'Explore different prompting patterns and when to use them',
        lessons: [
            {
                title: 'Zero-Shot Prompting',
                content: `Zero-shot prompting involves asking the model to perform a task without providing examples. It relies on the model's pre-existing knowledge.`,
                examples: [
                    { bad: '', good: 'Translate "Hello, how are you?" to Spanish' }
                ]
            },
            {
                title: 'Few-Shot Prompting',
                content: `Few-shot prompting provides examples to guide the model. This is powerful for teaching specific patterns or formats.`,
                examples: []
            },
            {
                title: 'Chain-of-Thought Prompting',
                content: `Chain-of-thought prompting asks the model to show its reasoning step-by-step, improving accuracy for complex problems.`,
                examples: []
            },
            {
                title: 'Role-Based Prompting',
                content: `Assign the model a role or persona to influence its response style and expertise level.`,
                examples: [
                    { bad: 'Explain index funds', good: 'You are an expert financial advisor. Explain index funds to a beginner in simple terms.' }
                ]
            }
        ],
        quiz: [
            {
                question: 'Which technique provides examples to guide the model?',
                options: [
                    'Zero-shot prompting',
                    'Few-shot prompting',
                    'No-shot prompting',
                    'Many-shot prompting'
                ],
                correct: 1,
                explanation: 'Few-shot prompting includes examples in the prompt to demonstrate the desired pattern or format.'
            },
            {
                question: 'What is the benefit of chain-of-thought prompting?',
                options: [
                    'Makes prompts shorter',
                    'Reduces model accuracy',
                    'Shows reasoning step-by-step for complex problems',
                    'Only works with math problems'
                ],
                correct: 2,
                explanation: 'Chain-of-thought prompting improves accuracy by having the model explicitly work through its reasoning.'
            }
        ],
        xpReward: 200,
        unlockLevel: 2
    },
    {
        id: 4,
        title: 'Advanced Techniques',
        icon: '🚀',
        description: 'Master advanced prompting strategies for complex tasks',
        lessons: [
            {
                title: 'Prompt Chaining',
                content: `Break complex tasks into multiple prompts, where each output feeds into the next prompt. This improves accuracy and manageability.`,
                examples: []
            },
            {
                title: 'Task Decomposition',
                content: `Divide large tasks into smaller, manageable subtasks. Solve each independently, then combine results.`,
                examples: []
            },
            {
                title: 'Iterative Refinement',
                content: `Start with a basic prompt, evaluate the output, then refine your prompt based on what worked and what didn't.`,
                examples: []
            }
        ],
        quiz: [
            {
                question: 'What is prompt chaining?',
                options: [
                    'Using chains in your prompt',
                    'Breaking tasks into multiple prompts where outputs feed into subsequent prompts',
                    'Making very long prompts',
                    'Copying the same prompt multiple times'
                ],
                correct: 1,
                explanation: 'Prompt chaining breaks complex tasks into steps, using each output as input for the next prompt.'
            }
        ],
        xpReward: 250,
        unlockLevel: 3
    },
    {
        id: 5,
        title: 'Best Practices',
        icon: '⭐',
        description: 'Learn industry best practices for prompt engineering',
        lessons: [
            {
                title: 'Testing and Evaluation',
                content: `Always test your prompts with multiple inputs. Evaluate outputs for accuracy, relevance, and consistency.`,
                examples: []
            },
            {
                title: 'Optimization Strategies',
                content: `Fine-tune prompts by adjusting specificity, context, examples, and constraints. A/B test different versions.`,
                examples: []
            },
            {
                title: 'Documentation',
                content: `Document successful prompts, patterns, and learnings. Build your personal prompt library for reuse.`,
                examples: []
            }
        ],
        quiz: [
            {
                question: 'Why is testing prompts with multiple inputs important?',
                options: [
                    'It\'s not important',
                    'To waste time',
                    'To ensure consistency and reliability across different scenarios',
                    'To make work harder'
                ],
                correct: 2,
                explanation: 'Testing with varied inputs helps ensure your prompt works consistently and reliably.'
            }
        ],
        xpReward: 200,
        unlockLevel: 4
    },
    {
        id: 6,
        title: 'Real-World Applications',
        icon: '🌍',
        description: 'Apply prompt engineering across different domains',
        lessons: [
            {
                title: 'Content Creation',
                content: `Use prompts for blog posts, social media, marketing copy, and creative writing with specific brand voices and styles.`,
                examples: []
            },
            {
                title: 'Data Analysis',
                content: `Leverage prompts for summarizing data, extracting insights, and generating reports from complex datasets.`,
                examples: []
            },
            {
                title: 'Code Generation',
                content: `Write prompts to generate, debug, and explain code in various programming languages.`,
                examples: []
            }
        ],
        quiz: [
            {
                question: 'Which is a valid application of prompt engineering?',
                options: [
                    'Only writing stories',
                    'Content creation, data analysis, and code generation',
                    'Only technical tasks',
                    'None of these'
                ],
                correct: 1,
                explanation: 'Prompt engineering has diverse applications across creative, analytical, and technical domains.'
            }
        ],
        xpReward: 200,
        unlockLevel: 5
    },
    {
        id: 7,
        title: 'Common Pitfalls',
        icon: '⚠️',
        description: 'Identify and avoid common prompt engineering mistakes',
        lessons: [
            {
                title: 'Being Too Vague',
                content: `Vague prompts lead to generic, unhelpful responses. Always be specific about what you want.`,
                examples: [
                    { bad: 'Write something about technology', good: 'Write a 200-word LinkedIn post about AI\'s impact on healthcare, targeting medical professionals.' }
                ]
            },
            {
                title: 'Overloading Prompts',
                content: `Trying to do too much in one prompt reduces quality. Break complex tasks into smaller, focused prompts.`,
                examples: []
            },
            {
                title: 'Ignoring Model Limitations',
                content: `Understand what the model can and cannot do. Don't expect it to access real-time data or perform tasks beyond its capabilities.`,
                examples: []
            }
        ],
        quiz: [
            {
                question: 'What happens when prompts are too vague?',
                options: [
                    'Better results',
                    'Generic, unhelpful responses',
                    'Faster responses',
                    'More creative outputs'
                ],
                correct: 1,
                explanation: 'Vague prompts lack the specificity needed for the model to generate targeted, useful responses.'
            }
        ],
        xpReward: 200,
        unlockLevel: 6
    },
    {
        id: 8,
        title: 'Future of Prompting',
        icon: '🔮',
        description: 'Explore emerging trends in prompt engineering',
        lessons: [
            {
                title: 'Multimodal Prompting',
                content: `Future models will seamlessly integrate text, image, audio, and video prompts for richer interactions.`,
                examples: []
            },
            {
                title: 'Automated Prompt Optimization',
                content: `AI systems will help optimize prompts automatically, learning from successful patterns and failures.`,
                examples: []
            },
            {
                title: 'Personalized Prompting',
                content: `Models will adapt to individual user styles and preferences, requiring less explicit prompting over time.`,
                examples: []
            }
        ],
        quiz: [
            {
                question: 'What is multimodal prompting?',
                options: [
                    'Using multiple languages',
                    'Integrating text, image, audio, and video in prompts',
                    'Writing very long prompts',
                    'Using multiple models'
                ],
                correct: 1,
                explanation: 'Multimodal prompting combines different types of input (text, images, audio, video) for richer interactions.'
            }
        ],
        xpReward: 300,
        unlockLevel: 7
    }
];

// Achievements Definition
const achievements = [
    { id: 1, name: 'First Steps', icon: '👣', description: 'Complete your first module', condition: 'module_1' },
    { id: 2, name: 'Quick Learner', icon: '⚡', description: 'Complete a module in under 10 minutes', condition: 'speed' },
    { id: 3, name: 'Perfect Score', icon: '💯', description: 'Get 100% on any quiz', condition: 'perfect_quiz' },
    { id: 4, name: 'Dedicated', icon: '🔥', description: '7-day learning streak', condition: 'streak_7' },
    { id: 5, name: 'Prompt Master', icon: '👑', description: 'Complete all modules', condition: 'all_modules' },
    { id: 6, name: 'Knowledge Seeker', icon: '📚', description: 'Read all lessons in 3 modules', condition: 'read_3' },
    { id: 7, name: 'Rising Star', icon: '🌟', description: 'Reach level 5', condition: 'level_5' },
    { id: 8, name: 'Expert', icon: '🎓', description: 'Reach level 10', condition: 'level_10' },
    { id: 9, name: 'Quiz Champion', icon: '🏆', description: 'Complete 10 quizzes', condition: 'quiz_10' },
    { id: 10, name: 'Early Bird', icon: '🌅', description: 'Start learning before 8 AM', condition: 'early' },
    { id: 11, name: 'Night Owl', icon: '🦉', description: 'Study after 10 PM', condition: 'night' },
    { id: 12, name: 'Consistent', icon: '📅', description: 'Learn 3 days in a row', condition: 'streak_3' },
    { id: 13, name: 'XP Hunter', icon: '💰', description: 'Earn 1000 XP', condition: 'xp_1000' },
    { id: 14, name: 'Overachiever', icon: '🚀', description: 'Earn 5000 XP', condition: 'xp_5000' },
    { id: 15, name: 'Marathon Runner', icon: '🏃', description: 'Spend 5 hours learning', condition: 'time_5' },
    { id: 16, name: 'Explorer', icon: '🗺️', description: 'Start all modules', condition: 'start_all' },
    { id: 17, name: 'Accuracy Expert', icon: '🎯', description: 'Average 90%+ on quizzes', condition: 'accuracy_90' },
    { id: 18, name: 'Fast Finisher', icon: '⏱️', description: 'Complete 3 modules in one day', condition: 'fast_3' },
    { id: 19, name: 'Comeback Kid', icon: '💪', description: 'Return after 7 days', condition: 'comeback' },
    { id: 20, name: 'Social Sharer', icon: '📱', description: 'Share your progress', condition: 'share' },
    { id: 21, name: 'Lesson Lover', icon: '📖', description: 'Read 20 lessons', condition: 'read_20' },
    { id: 22, name: 'Quiz Master', icon: '🧠', description: 'Score 100% on 5 quizzes', condition: 'perfect_5' },
    { id: 23, name: 'Determined', icon: '💎', description: '14-day streak', condition: 'streak_14' },
    { id: 24, name: 'Legendary', icon: '⚔️', description: '30-day streak', condition: 'streak_30' },
    { id: 25, name: 'Ultimate Master', icon: '👑', description: 'Unlock all achievements', condition: 'all_achievements' }
];

// Quiz variables
let currentQuiz = [];
let timerInterval = null;

// ================================
// Initialization
// ================================
function init() {
    loadGameState();
    setupEventListeners();
    updateUI();
    renderModules();
    renderAchievements();
    updateLeaderboard();
    checkAndUpdateStreak();
    startTimeTracking();
    initParticles();
}

// Setup Event Listeners
function setupEventListeners() {
    const startBtn = document.getElementById('start-journey-btn');
    if (startBtn) {
        startBtn.addEventListener('click', startJourney);
    }

    const nameInput = document.getElementById('user-name-input');
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                startJourney();
            }
        });
    }
}

// ================================
// Local Storage Management
// ================================
function loadGameState() {
    const saved = localStorage.getItem('promptEngineeringGame');
    if (saved) {
        try {
            Object.assign(gameState, JSON.parse(saved));
            document.getElementById('welcome-modal').classList.add('hidden');
        } catch (error) {
            console.error('Error loading game state:', error);
        }
    }
}

function saveGameState() {
    try {
        localStorage.setItem('promptEngineeringGame', JSON.stringify(gameState));
    } catch (error) {
        console.error('Error saving game state:', error);
    }
}

// ================================
// Start Journey
// ================================
function startJourney() {
    const nameInput = document.getElementById('user-name-input');
    const name = nameInput.value.trim();

    if (name) {
        gameState.userName = name;
        gameState.lastVisit = new Date().toISOString();
        saveGameState();
        document.getElementById('welcome-modal').classList.add('hidden');
        showConfetti();
        updateUI();
    } else {
        alert('Please enter your name to begin!');
        nameInput.focus();
    }
}

// ================================
// Update UI
// ================================
function updateUI() {
    document.getElementById('user-level').textContent = gameState.level;
    document.getElementById('user-xp').textContent = gameState.xp;
    document.getElementById('user-streak').textContent = gameState.streak;

    const completedModules = Object.values(gameState.moduleProgress).filter(p => p === 100).length;
    document.getElementById('modules-completed').textContent = `${completedModules}/8`;

    const overallProgress = Object.values(gameState.moduleProgress).reduce((a, b) => a + b, 0) / modules.length || 0;
    document.getElementById('overall-percentage').textContent = `${Math.round(overallProgress)}%`;
    document.getElementById('overall-progress').style.width = `${overallProgress}%`;

    document.getElementById('achievements-count').textContent = `${gameState.achievements.length}/25`;
    document.getElementById('time-spent').textContent = `${Math.round(gameState.timeSpent / 60)}h`;
}

// ================================
// Render Modules
// ================================
function renderModules() {
    const container = document.getElementById('modules-container');
    container.innerHTML = '';

    modules.forEach(module => {
        const isLocked = gameState.level < module.unlockLevel;
        const progress = gameState.moduleProgress[module.id] || 0;

        const card = document.createElement('div');
        card.className = `module-card ${isLocked ? 'locked' : ''}`;
        card.innerHTML = `
            <div class="module-icon">${module.icon}</div>
            <div class="module-title">${module.title}</div>
            <div class="module-desc">${module.description}</div>
            <div class="module-progress">
                <div class="module-progress-fill" style="width: ${progress}%"></div>
            </div>
            <div class="module-stats">
                <span>${isLocked ? `🔒 Level ${module.unlockLevel} required` : `${progress}% Complete`}</span>
                <span>+${module.xpReward} XP</span>
            </div>
        `;

        if (!isLocked) {
            card.addEventListener('click', () => openModule(module));
        }

        container.appendChild(card);
    });
}

// ================================
// Open Module
// ================================
function openModule(module) {
    document.getElementById('dashboard-view').style.display = 'none';
    const learningView = document.getElementById('learning-view');
    learningView.classList.add('active');

    let lessonsHTML = '';
    module.lessons.forEach((lesson, index) => {
        let examplesHTML = '';
        if (lesson.examples && lesson.examples.length > 0) {
            examplesHTML = '<div class="prompt-builder">';
            lesson.examples.forEach(ex => {
                if (ex.bad && ex.good) {
                    examplesHTML += `
                        <div class="prompt-component" style="border-color: var(--error);">
                            <strong>❌ Bad:</strong> ${ex.bad}
                        </div>
                        <div class="prompt-component" style="border-color: var(--success);">
                            <strong>✅ Good:</strong> ${ex.good}
                        </div>
                    `;
                } else if (ex.good) {
                    examplesHTML += `
                        <div class="prompt-component" style="border-color: var(--success);">
                            <strong>✅ Example:</strong> ${ex.good}
                        </div>
                    `;
                }
            });
            examplesHTML += '</div>';
        }

        lessonsHTML += `
            <div class="lesson">
                <h3>${index + 1}. ${lesson.title}</h3>
                <p>${lesson.content}</p>
                ${examplesHTML}
            </div>
        `;
    });

    learningView.innerHTML = `
        <div class="content-header">
            <button class="back-btn" id="back-to-dashboard">
                <i class="fas fa-arrow-left"></i> Back to Dashboard
            </button>
            <h2>${module.icon} ${module.title}</h2>
            <p>${module.description}</p>
        </div>

        ${lessonsHTML}

        <div class="quiz-container">
            <div class="quiz-header">
                <h3><i class="fas fa-brain"></i> Knowledge Check</h3>
                <div class="quiz-timer">
                    <i class="fas fa-clock"></i>
                    <span id="quiz-timer">30</span>s
                </div>
            </div>
            <div id="quiz-content"></div>
            <div class="quiz-navigation">
                <button class="btn" id="submit-quiz-btn">Submit Quiz</button>
            </div>
        </div>
    `;

    // Add event listeners
    document.getElementById('back-to-dashboard').addEventListener('click', closeModule);
    document.getElementById('submit-quiz-btn').addEventListener('click', () => submitQuiz(module.id));

    renderQuiz(module.quiz);
    startQuizTimer();

    // Scroll to top
    window.scrollTo(0, 0);
}

// ================================
// Close Module
// ================================
function closeModule() {
    clearInterval(timerInterval);
    document.getElementById('learning-view').classList.remove('active');
    document.getElementById('dashboard-view').style.display = 'block';
    window.scrollTo(0, 0);
}

// ================================
// Render Quiz
// ================================
function renderQuiz(questions) {
    currentQuiz = questions;
    const container = document.getElementById('quiz-content');
    container.innerHTML = '';

    questions.forEach((q, qIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-card';
        questionDiv.innerHTML = `
            <div class="question-text">${qIndex + 1}. ${q.question}</div>
            <div class="options-grid">
                ${q.options.map((opt, oIndex) => `
                    <button class="option-btn" data-question="${qIndex}" data-option="${oIndex}">
                        ${opt}
                    </button>
                `).join('')}
            </div>
            <div class="quiz-explanation" id="explanation-${qIndex}">
                <strong>💡 Explanation:</strong> ${q.explanation}
            </div>
        `;
        container.appendChild(questionDiv);
    });

    // Add click handlers
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const qIndex = this.dataset.question;
            document.querySelectorAll(`[data-question="${qIndex}"]`).forEach(b => {
                b.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });
}

// ================================
// Quiz Timer
// ================================
function startQuizTimer() {
    let time = 30;
    const timerElement = document.getElementById('quiz-timer');

    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
        time--;
        if (timerElement) {
            timerElement.textContent = time;
        }

        if (time <= 0) {
            clearInterval(timerInterval);
            alert('Time\'s up! Submitting quiz...');
            const moduleId = modules.find(m => currentQuiz === m.quiz)?.id;
            if (moduleId) {
                submitQuiz(moduleId);
            }
        }
    }, 1000);
}

// ================================
// Submit Quiz
// ================================
function submitQuiz(moduleId) {
    clearInterval(timerInterval);

    let correctCount = 0;
    currentQuiz.forEach((q, qIndex) => {
        const selectedBtn = document.querySelector(`[data-question="${qIndex}"].selected`);
        const selectedOption = selectedBtn ? parseInt(selectedBtn.dataset.option) : -1;

        // Disable all buttons
        document.querySelectorAll(`[data-question="${qIndex}"]`).forEach(btn => {
            btn.disabled = true;
            const optIndex = parseInt(btn.dataset.option);

            if (optIndex === q.correct) {
                btn.classList.add('correct');
            } else if (optIndex === selectedOption) {
                btn.classList.add('incorrect');
            }
        });

        // Show explanation
        const explanation = document.getElementById(`explanation-${qIndex}`);
        if (explanation) {
            explanation.classList.add('visible');
        }

        if (selectedOption === q.correct) {
            correctCount++;
        }
    });

    const score = (correctCount / currentQuiz.length) * 100;
    const module = modules.find(m => m.id === moduleId);

    // Award XP
    const xpEarned = Math.round((score / 100) * module.xpReward);
    addXP(xpEarned);

    // Update progress
    gameState.moduleProgress[moduleId] = 100;
    gameState.quizScores[moduleId] = score;

    // Check achievements
    checkAchievements();

    // Show results
    setTimeout(() => {
        if (score === 100) {
            alert(`🎉 Perfect Score! You earned ${xpEarned} XP!`);
            showConfetti();
        } else {
            alert(`Quiz Complete! Score: ${score.toFixed(0)}%\nYou earned ${xpEarned} XP!`);
        }
    }, 500);

    saveGameState();
    updateUI();
    renderModules();
}

// ================================
// XP and Leveling
// ================================
function addXP(amount) {
    gameState.xp += amount;

    // Level up calculation
    const xpForNextLevel = gameState.level * 100;
    if (gameState.xp >= xpForNextLevel) {
        gameState.level++;
        showConfetti();
        alert(`🎉 Level Up! You\'re now level ${gameState.level}!`);
    }

    saveGameState();
    updateUI();
    renderModules();
}

// ================================
// Render Achievements
// ================================
function renderAchievements() {
    const container = document.getElementById('achievements-container');
    container.innerHTML = '';

    achievements.forEach(achievement => {
        const isUnlocked = gameState.achievements.includes(achievement.id);
        const badge = document.createElement('div');
        badge.className = `achievement-badge ${isUnlocked ? 'unlocked' : 'locked'}`;
        badge.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
        `;
        badge.title = achievement.description;
        container.appendChild(badge);
    });
}

// ================================
// Check Achievements
// ================================
function checkAchievements() {
    const newAchievements = [];

    achievements.forEach(achievement => {
        if (gameState.achievements.includes(achievement.id)) return;

        let unlocked = false;

        switch(achievement.condition) {
            case 'module_1':
                unlocked = gameState.moduleProgress[1] === 100;
                break;
            case 'perfect_quiz':
                unlocked = Object.values(gameState.quizScores).some(score => score === 100);
                break;
            case 'all_modules':
                unlocked = Object.keys(gameState.moduleProgress).length === 8 && 
                           Object.values(gameState.moduleProgress).every(p => p === 100);
                break;
            case 'level_5':
                unlocked = gameState.level >= 5;
                break;
            case 'level_10':
                unlocked = gameState.level >= 10;
                break;
            case 'xp_1000':
                unlocked = gameState.xp >= 1000;
                break;
            case 'xp_5000':
                unlocked = gameState.xp >= 5000;
                break;
            case 'streak_3':
                unlocked = gameState.streak >= 3;
                break;
            case 'streak_7':
                unlocked = gameState.streak >= 7;
                break;
            case 'streak_14':
                unlocked = gameState.streak >= 14;
                break;
            case 'streak_30':
                unlocked = gameState.streak >= 30;
                break;
        }

        if (unlocked) {
            gameState.achievements.push(achievement.id);
            newAchievements.push(achievement);
        }
    });

    if (newAchievements.length > 0) {
        newAchievements.forEach(ach => {
            setTimeout(() => {
                alert(`🏆 Achievement Unlocked: ${ach.name}\n${ach.description}`);
                showConfetti();
            }, 300);
        });
        renderAchievements();
        saveGameState();
    }
}

// ================================
// Confetti Animation
// ================================
function showConfetti() {
    const colors = ['#6366F1', '#EC4899', '#10B981', '#F59E0B'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.top = '-10px';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// ================================
// Theme Toggle
// ================================
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    const icon = document.querySelector('.theme-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// ================================
// Streak Management
// ================================
function checkAndUpdateStreak() {
    const today = new Date().toDateString();
    const lastVisit = gameState.lastVisit ? new Date(gameState.lastVisit).toDateString() : null;

    if (!lastVisit) {
        gameState.streak = 1;
    } else if (lastVisit !== today) {
        const daysDiff = Math.floor((new Date(today) - new Date(lastVisit)) / (1000 * 60 * 60 * 24));

        if (daysDiff === 1) {
            gameState.streak++;
        } else if (daysDiff > 1) {
            gameState.streak = 1;
        }
    }

    gameState.lastVisit = new Date().toISOString();
    saveGameState();
}

// ================================
// Time Tracking
// ================================
function startTimeTracking() {
    setInterval(() => {
        gameState.timeSpent++;
        if (gameState.timeSpent % 60 === 0) {
            saveGameState();
            updateUI();
        }
    }, 60000); // Every minute
}

// ================================
// Leaderboard
// ================================
function updateLeaderboard() {
    const container = document.getElementById('leaderboard-container');

    const leaderboardData = [
        { rank: 1, name: gameState.userName || 'You', score: gameState.xp },
        { rank: 2, name: 'Alex Chen', score: 3500 },
        { rank: 3, name: 'Priya Sharma', score: 3200 },
        { rank: 4, name: 'John Smith', score: 2800 },
        { rank: 5, name: 'Maria Garcia', score: 2500 }
    ].sort((a, b) => b.score - a.score).map((item, index) => ({...item, rank: index + 1}));

    container.innerHTML = leaderboardData.map(item => `
        <div class="leaderboard-item">
            <div class="leaderboard-rank">#${item.rank}</div>
            <div class="leaderboard-name">${item.name}${item.name === gameState.userName ? ' (You)' : ''}</div>
            <div class="leaderboard-score">${item.score} XP</div>
        </div>
    `).join('');
}

// ================================
// Particles.js Initialization
// ================================
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
}

// ================================
// Initialize on load
// ================================
window.addEventListener('DOMContentLoaded', init);
