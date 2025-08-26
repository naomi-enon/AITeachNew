// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Initialize demos
    initializeRegressionDemo();
    initializeContactForm();
    initializeChatbot();
    initializeTrainerDemo();
    initializeGuessBotDemo();
    initializeHireOrFireDemo();
});

// Tutorial functionality
const tutorials = {
    'fundamentals': {
        title: 'AI Fundamentals',
        content: `
            <h2>AI Fundamentals Tutorial</h2>
            <div class="tutorial-step">
                <h3>Step 1: What is Artificial Intelligence?</h3>
                <p>Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn like humans.</p>
                <ul>
                    <li><strong>Narrow AI:</strong> AI designed for specific tasks (like voice assistants)</li>
                    <li><strong>General AI:</strong> AI with human-level intelligence across all domains</li>
                    <li><strong>Super AI:</strong> AI that surpasses human intelligence</li>
                </ul>
            </div>
            <div class="tutorial-step">
                <h3>Step 2: History of AI</h3>
                <p>AI has evolved through several key periods:</p>
                <ul>
                    <li><strong>1950s:</strong> Alan Turing proposes the Turing Test</li>
                    <li><strong>1960s-70s:</strong> Early AI programs and expert systems</li>
                    <li><strong>1980s-90s:</strong> Machine learning emerges</li>
                    <li><strong>2000s-present:</strong> Deep learning revolution</li>
                </ul>
            </div>
            <div class="tutorial-step">
                <h3>Step 3: Applications of AI</h3>
                <p>AI is used in many areas today:</p>
                <ul>
                    <li>Healthcare: Medical diagnosis and drug discovery</li>
                    <li>Transportation: Autonomous vehicles</li>
                    <li>Finance: Fraud detection and algorithmic trading</li>
                    <li>Entertainment: Recommendation systems</li>
                </ul>
            </div>
            <button class="btn btn-primary" onclick="completeTutorial('fundamentals')">Complete Tutorial</button>
        `
    },
    'ml-basics': {
        title: 'Machine Learning Basics',
        content: `
            <h2>Machine Learning Basics Tutorial</h2>
            <div class="tutorial-step">
                <h3>Step 1: Types of Machine Learning</h3>
                <p>There are three main types of machine learning:</p>
                <ul>
                    <li><strong>Supervised Learning:</strong> Learning from labeled examples</li>
                    <li><strong>Unsupervised Learning:</strong> Finding patterns in unlabeled data</li>
                    <li><strong>Reinforcement Learning:</strong> Learning through trial and error</li>
                </ul>
            </div>
            <div class="tutorial-step">
                <h3>Step 2: Supervised Learning</h3>
                <p>In supervised learning, we train models on input-output pairs:</p>
                <ul>
                    <li><strong>Classification:</strong> Predicting categories (spam vs. not spam)</li>
                    <li><strong>Regression:</strong> Predicting continuous values (house prices)</li>
                </ul>
            </div>
            <div class="tutorial-step">
                <h3>Step 3: Model Training Process</h3>
                <p>The typical ML workflow:</p>
                <ol>
                    <li>Collect and prepare data</li>
                    <li>Choose a model architecture</li>
                    <li>Train the model on training data</li>
                    <li>Evaluate on test data</li>
                    <li>Deploy and monitor</li>
                </ol>
            </div>
            <button class="btn btn-primary" onclick="completeTutorial('ml-basics')">Complete Tutorial</button>
        `
    },
    'neural-networks': {
        title: 'Neural Networks',
        content: `
            <h2>Neural Networks Tutorial</h2>
            <div class="tutorial-step">
                <h3>Step 1: What are Neural Networks?</h3>
                <p>Neural networks are computing systems inspired by biological neural networks:</p>
                <ul>
                    <li><strong>Neurons:</strong> Basic processing units</li>
                    <li><strong>Layers:</strong> Groups of neurons</li>
                    <li><strong>Weights:</strong> Connection strengths between neurons</li>
                    <li><strong>Activation Functions:</strong> Determine neuron output</li>
                </ul>
            </div>
            <div class="tutorial-step">
                <h3>Step 2: Network Architecture</h3>
                <p>Common neural network components:</p>
                <ul>
                    <li><strong>Input Layer:</strong> Receives data</li>
                    <li><strong>Hidden Layers:</strong> Process information</li>
                    <li><strong>Output Layer:</strong> Produces predictions</li>
                </ul>
            </div>
            <div class="tutorial-step">
                <h3>Step 3: Training Process</h3>
                <p>Neural networks learn through:</p>
                <ol>
                    <li><strong>Forward Propagation:</strong> Data flows through network</li>
                    <li><strong>Loss Calculation:</strong> Measure prediction error</li>
                    <li><strong>Backpropagation:</strong> Update weights to reduce error</li>
                    <li><strong>Iteration:</strong> Repeat until convergence</li>
                </ol>
            </div>
            <button class="btn btn-primary" onclick="completeTutorial('neural-networks')">Complete Tutorial</button>
        `
    }
};

function startTutorial(tutorialId) {
    const modal = document.getElementById('tutorial-modal');
    const content = document.getElementById('tutorial-content');
    const tutorial = tutorials[tutorialId];
    
    if (tutorial) {
        content.innerHTML = tutorial.content;
        modal.style.display = 'block';
    }
}

function completeTutorial(tutorialId) {
    // Update progress bar
    const tutorialCards = document.querySelectorAll('.tutorial-card');
    tutorialCards.forEach(card => {
        const button = card.querySelector('button');
        if (button && button.onclick && button.onclick.toString().includes(tutorialId)) {
            const progressFill = card.querySelector('.progress-fill');
            const progressText = card.querySelector('.tutorial-progress span');
            progressFill.style.width = '100%';
            progressText.textContent = '100% Complete';
            button.textContent = 'Completed ✓';
            button.style.background = '#10b981';
        }
    });
    
    // Close modal
    document.getElementById('tutorial-modal').style.display = 'none';
    
    // Show completion message
    alert('Congratulations! You have completed the tutorial.');
}

// Demo functionality
const demos = {
    'regression': {
        title: 'Linear Regression Visualizer',
        content: `
            <h2>Linear Regression Demo</h2>
            <p>Click on the canvas to add data points. The red line shows the best fit linear regression.</p>
            <canvas id="demo-regression-canvas" width="600" height="400" style="border: 1px solid #ccc; cursor: crosshair;"></canvas>
            <div style="margin-top: 1rem;">
                <button class="btn btn-secondary" onclick="clearRegressionData()">Clear Data</button>
                <button class="btn btn-outline" onclick="addRandomData()">Add Random Data</button>
            </div>
            <div id="regression-stats" style="margin-top: 1rem; font-family: monospace;"></div>
        `
    },
    'neural-network': {
        title: 'Neural Network Playground',
        content: `
            <h2>Neural Network Playground</h2>
            <p>Experiment with different network architectures and see how they affect learning.</p>
            <div class="network-builder">
                <div class="network-controls">
                    <label>Hidden Layers: <input type="range" id="layers-slider" min="1" max="4" value="2" onchange="updateNetwork()"></label>
                    <label>Neurons per Layer: <input type="range" id="neurons-slider" min="2" max="8" value="4" onchange="updateNetwork()"></label>
                    <label>Learning Rate: <input type="range" id="lr-slider" min="0.01" max="1" step="0.01" value="0.1" onchange="updateNetwork()"></label>
                </div>
                <div id="network-visualization" style="height: 300px; display: flex; align-items: center; justify-content: center; background: #f8f9fa; border-radius: 8px; margin: 1rem 0;"></div>
                <button class="btn btn-primary" onclick="trainNetwork()">Start Training</button>
                <button class="btn btn-secondary" onclick="resetNetwork()">Reset</button>
            </div>
        `
    },
    'decision-tree': {
        title: 'Decision Tree Builder',
        content: `
            <h2>Decision Tree Demo</h2>
            <p>Build a decision tree to classify data points based on their features.</p>
            <div class="tree-builder">
                <div class="data-input">
                    <h4>Training Data</h4>
                    <table id="data-table" style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                        <thead>
                            <tr style="background: #f8f9fa;">
                                <th style="border: 1px solid #ddd; padding: 8px;">Feature 1</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">Feature 2</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">Class</th>
                            </tr>
                        </thead>
                        <tbody id="data-tbody">
                            <tr><td style="border: 1px solid #ddd; padding: 8px;">Low</td><td style="border: 1px solid #ddd; padding: 8px;">High</td><td style="border: 1px solid #ddd; padding: 8px;">A</td></tr>
                            <tr><td style="border: 1px solid #ddd; padding: 8px;">High</td><td style="border: 1px solid #ddd; padding: 8px;">Low</td><td style="border: 1px solid #ddd; padding: 8px;">B</td></tr>
                            <tr><td style="border: 1px solid #ddd; padding: 8px;">Low</td><td style="border: 1px solid #ddd; padding: 8px;">Low</td><td style="border: 1px solid #ddd; padding: 8px;">B</td></tr>
                            <tr><td style="border: 1px solid #ddd; padding: 8px;">High</td><td style="border: 1px solid #ddd; padding: 8px;">High</td><td style="border: 1px solid #ddd; padding: 8px;">A</td></tr>
                        </tbody>
                    </table>
                </div>
                <div id="tree-visualization" style="height: 200px; display: flex; align-items: center; justify-content: center; background: #f8f9fa; border-radius: 8px; margin: 1rem 0;">
                    <div class="decision-tree">
                        <div class="tree-node">Feature 1 > threshold?</div>
                        <div style="display: flex; justify-content: space-around; margin-top: 2rem;">
                            <div class="tree-node">Class A</div>
                            <div class="tree-node">Class B</div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary" onclick="buildTree()">Build Tree</button>
                <button class="btn btn-secondary" onclick="addDataPoint()">Add Data Point</button>
            </div>
        `
    }
};

function openDemo(demoId) {
    const modal = document.getElementById('demo-modal');
    const content = document.getElementById('demo-content');
    const demo = demos[demoId];
    
    if (demo) {
        content.innerHTML = demo.content;
        modal.style.display = 'block';
        
        // Initialize specific demo functionality
        if (demoId === 'regression') {
            setTimeout(() => initializeDemoRegression(), 100);
        } else if (demoId === 'neural-network') {
            setTimeout(() => initializeNetworkDemo(), 100);
        }
    }
}

// Modal close functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close')) {
        e.target.closest('.modal').style.display = 'none';
    }
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Linear Regression Demo
let regressionData = [];

function initializeRegressionDemo() {
    const canvas = document.getElementById('regression-canvas');
    if (canvas) {
        drawRegressionPlot(canvas);
    }
}

function initializeDemoRegression() {
    const canvas = document.getElementById('demo-regression-canvas');
    if (canvas) {
        regressionData = [];
        canvas.addEventListener('click', addDataPoint);
        drawRegressionPlot(canvas);
    }
}

function addDataPoint(event) {
    const canvas = event.target;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Convert to data coordinates
    const dataX = (x / canvas.width) * 10;
    const dataY = ((canvas.height - y) / canvas.height) * 10;
    
    regressionData.push({x: dataX, y: dataY});
    drawRegressionPlot(canvas);
    updateRegressionStats();
}

function drawRegressionPlot(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
        const x = (i / 10) * canvas.width;
        const y = (i / 10) * canvas.height;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
    
    // Draw data points
    ctx.fillStyle = '#6366f1';
    regressionData.forEach(point => {
        const x = (point.x / 10) * canvas.width;
        const y = canvas.height - (point.y / 10) * canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    });
    
    // Draw regression line if we have enough points
    if (regressionData.length >= 2) {
        const {slope, intercept} = calculateLinearRegression(regressionData);
        
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        const y1 = intercept;
        const y2 = slope * 10 + intercept;
        const canvasY1 = canvas.height - (y1 / 10) * canvas.height;
        const canvasY2 = canvas.height - (y2 / 10) * canvas.height;
        
        ctx.moveTo(0, canvasY1);
        ctx.lineTo(canvas.width, canvasY2);
        ctx.stroke();
    }
}

function calculateLinearRegression(data) {
    const n = data.length;
    const sumX = data.reduce((sum, point) => sum + point.x, 0);
    const sumY = data.reduce((sum, point) => sum + point.y, 0);
    const sumXY = data.reduce((sum, point) => sum + point.x * point.y, 0);
    const sumXX = data.reduce((sum, point) => sum + point.x * point.x, 0);
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
    
    return {slope, intercept};
}

function updateRegressionStats() {
    const statsDiv = document.getElementById('regression-stats');
    if (statsDiv && regressionData.length >= 2) {
        const {slope, intercept} = calculateLinearRegression(regressionData);
        statsDiv.innerHTML = `
            <strong>Regression Line:</strong> y = ${slope.toFixed(3)}x + ${intercept.toFixed(3)}<br>
            <strong>Data Points:</strong> ${regressionData.length}
        `;
    }
}

function clearRegressionData() {
    regressionData = [];
    const canvas = document.getElementById('demo-regression-canvas');
    if (canvas) {
        drawRegressionPlot(canvas);
    }
    const statsDiv = document.getElementById('regression-stats');
    if (statsDiv) {
        statsDiv.innerHTML = '';
    }
}

function addRandomData() {
    for (let i = 0; i < 5; i++) {
        const x = Math.random() * 10;
        const y = Math.random() * 10;
        regressionData.push({x, y});
    }
    const canvas = document.getElementById('demo-regression-canvas');
    if (canvas) {
        drawRegressionPlot(canvas);
        updateRegressionStats();
    }
}

// Neural Network Demo
function initializeNetworkDemo() {
    updateNetwork();
}

function updateNetwork() {
    const layers = document.getElementById('layers-slider')?.value || 2;
    const neurons = document.getElementById('neurons-slider')?.value || 4;
    const lr = document.getElementById('lr-slider')?.value || 0.1;
    
    const visualization = document.getElementById('network-visualization');
    if (visualization) {
        visualization.innerHTML = `
            <div style="display: flex; gap: 3rem; align-items: center;">
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div style="width: 20px; height: 20px; background: #6366f1; border-radius: 50%;"></div>
                    <div style="width: 20px; height: 20px; background: #6366f1; border-radius: 50%;"></div>
                </div>
                ${Array(parseInt(layers)).fill().map(() => `
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        ${Array(parseInt(neurons)).fill().map(() => `
                            <div style="width: 20px; height: 20px; background: #8b5cf6; border-radius: 50%;"></div>
                        `).join('')}
                    </div>
                `).join('')}
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div style="width: 20px; height: 20px; background: #10b981; border-radius: 50%;"></div>
                </div>
            </div>
            <div style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
                Layers: ${layers} | Neurons: ${neurons} | Learning Rate: ${lr}
            </div>
        `;
    }
}

function trainNetwork() {
    alert('Training simulation started! In a real implementation, this would train the network with your data.');
}

function resetNetwork() {
    updateNetwork();
}

// Decision Tree Demo
function buildTree() {
    alert('Decision tree built! This would analyze your data and create an optimal decision tree.');
}

function addDataPoint() {
    const tbody = document.getElementById('data-tbody');
    if (tbody) {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td style="border: 1px solid #ddd; padding: 8px;">
                <select><option>Low</option><option>High</option></select>
            </td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <select><option>Low</option><option>High</option></select>
            </td>
            <td style="border: 1px solid #ddd; padding: 8px;">
                <select><option>A</option><option>B</option></select>
            </td>
        `;
    }
}

// Contact Form
function initializeContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('Thank you for your message! We\'ll get back to you soon.');
                form.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
}

// Scroll animations
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    const cards = document.querySelectorAll('.about-card, .tutorial-card, .demo-card');
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
document.addEventListener('scroll', handleScrollAnimations);

// Chatbot functionality with cute personality
let chatbotKnowledgeBase = {
    'what is ai': '🤖 Artificial Intelligence (AI) is like teaching computers to think and learn just like humans do! It includes machine learning, natural language processing, computer vision, and so much more! Pretty cool, right? ✨',
    'what is machine learning': '📚 Machine Learning is my favorite! It\'s when computers learn patterns from data without being told exactly what to do. There are three main types: supervised (learning with examples), unsupervised (finding hidden patterns), and reinforcement learning (learning through trial and error)! 🎯',
    'what is deep learning': '🧠 Deep Learning is like having a super-powered brain with lots of layers! It uses neural networks with multiple layers to learn really complex patterns. It\'s amazing at recognizing images and understanding language! 🌟',
    'what is neural network': '🕸️ A neural network is inspired by how our brains work! It has lots of connected nodes (like neurons) that work together to process information and learn patterns. Think of it as a digital brain! 🧠✨',
    'how to start learning ai': '🚀 Yay! I\'m so excited you want to learn AI! Start with our Tutorials section - begin with AI Fundamentals, then Machine Learning Basics, and finally Neural Networks. Don\'t forget to play our Interactive Games too! They\'re super fun! 🎮',
    'what are the tutorials': '📖 We have 3 awesome tutorials for you! 🌟 AI Fundamentals (perfect for beginners! 🌱), Machine Learning Basics (getting more exciting! 🚀), and Neural Networks (for the brave adventurers! 💪). Each one has step-by-step explanations that are easy to follow!',
    'what games do you have': '🎮 Oh, you\'re going to LOVE our games! We have: 📊 Linear Regression Visualizer (click and watch the magic happen!), 🧠 Neural Network Playground (build your own AI brain!), and 🌳 Decision Tree Builder (create smart decision trees!). They\'re all super interactive and fun! ✨',
    'what is supervised learning': '👨‍🏫 Supervised learning is like having a teacher! The computer learns from examples with the right answers. It\'s great for things like detecting spam emails 📧 or predicting house prices 🏠. Pretty neat, huh?',
    'what is unsupervised learning': '🔍 Unsupervised learning is like being a detective! The computer finds hidden patterns in data without any hints. It can group customers 👥 or reduce complex data dimensions. It\'s like magic! ✨',
    'what is reinforcement learning': '🎯 Reinforcement learning is like training a pet! The computer learns by trying things and getting rewards or penalties. It\'s used in game AI 🎮, robots 🤖, and self-driving cars 🚗. So cool!',
    'applications of ai': '🌍 AI is everywhere! It helps doctors diagnose diseases 🏥, powers self-driving cars 🚗, catches fraud in banks 💳, recommends your favorite movies 🎬, and so much more! The possibilities are endless! 🚀',
    'how does linear regression work': '📈 Linear regression is like drawing the perfect line through scattered dots! It finds the best straight line that gets as close as possible to all the data points. Try our Linear Regression game - it\'s super satisfying to watch! 🎯',
    'what is computer vision': '👁️ Computer Vision teaches computers to \'see\' and understand images and videos! It can recognize faces 😊, read text 📝, and even help doctors analyze medical scans 🏥. It\'s like giving computers superpowers! ⚡',
    'what is nlp': '💬 Natural Language Processing (NLP) helps computers understand human language! That\'s how I can chat with you right now! 😊 It powers chatbots, translators 🌐, and sentiment analysis. Language is amazing! ✨',
    'help': '🤗 I\'m here to help you learn about AI in the most fun way possible! Ask me about AI concepts, our tutorials, games, or anything that makes you curious about artificial intelligence! Let\'s explore together! 🚀✨'
};

function initializeChatbot() {
    const chatbotFab = document.getElementById('chatbot-fab');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotInput = document.getElementById('chatbot-input-field');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMic = document.getElementById('chatbot-mic');
    const chatbotMessages = document.getElementById('chatbot-messages');
    
    // Initialize speech recognition and synthesis
    let recognition = null;
    let synthesis = window.speechSynthesis;
    let isListening = false;
    
    // Check for speech recognition support
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onstart = function() {
            isListening = true;
            chatbotMic.classList.add('listening');
            chatbotMic.innerHTML = '<i class="fas fa-stop"></i>';
            chatbotMic.title = 'Click to stop listening';
        };
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            chatbotInput.value = transcript;
            sendMessage();
        };
        
        recognition.onend = function() {
            isListening = false;
            chatbotMic.classList.remove('listening');
            chatbotMic.innerHTML = '<i class="fas fa-microphone"></i>';
            chatbotMic.title = 'Click to speak';
        };
        
        recognition.onerror = function(event) {
            console.log('Speech recognition error:', event.error);
            isListening = false;
            chatbotMic.classList.remove('listening');
            chatbotMic.innerHTML = '<i class="fas fa-microphone"></i>';
            chatbotMic.title = 'Click to speak';
            if (event.error === 'not-allowed') {
                alert('🎤 Please allow microphone access to use voice chat with Aiden!');
            }
        };
    } else {
        // Hide mic button if not supported
        chatbotMic.style.display = 'none';
    }

    // Toggle chatbot visibility
    chatbotFab.addEventListener('click', () => {
        chatbotContainer.classList.add('active');
        chatbotFab.style.display = 'none';
        chatbotInput.focus();
    });

    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
        chatbotFab.style.display = 'block';
    });

    // Send message functionality
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';
        chatbotSend.disabled = true;

        // Show typing indicator
        showTypingIndicator();

        // Generate bot response
        setTimeout(() => {
            hideTypingIndicator();
            const response = generateBotResponse(message);
            addMessage(response, 'bot');
            
            // Make Aiden speak the response with his cute voice
            setTimeout(() => {
                speakResponse(response);
            }, 300); // Small delay to let the message appear first
            
            chatbotSend.disabled = false;
        }, 1000 + Math.random() * 1000); // Random delay for realism
    }

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Microphone button event listener
    chatbotMic.addEventListener('click', () => {
        if (recognition) {
            if (isListening) {
                recognition.stop();
            } else {
                recognition.start();
            }
        }
    });

    // Enable/disable send button based on input
    chatbotInput.addEventListener('input', () => {
        chatbotSend.disabled = !chatbotInput.value.trim();
    });
    
    // Speech synthesis function for Aiden's cute voice
    function speakResponse(text) {
        // Stop any ongoing speech
        synthesis.cancel();
        
        // Clean text of emojis for better speech
        const cleanText = text.replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '');
        
        const utterance = new SpeechSynthesisUtterance(cleanText);
        
        // Configure Aiden's cute voice
        utterance.rate = 1.1; // Slightly faster, more energetic
        utterance.pitch = 1.3; // Higher pitch for cuteness
        utterance.volume = 0.8;
        
        // Try to find a female voice for extra cuteness
        const voices = synthesis.getVoices();
        const femaleVoice = voices.find(voice => 
            voice.name.toLowerCase().includes('female') ||
            voice.name.toLowerCase().includes('zira') ||
            voice.name.toLowerCase().includes('hazel') ||
            voice.name.toLowerCase().includes('samantha') ||
            voice.gender === 'female'
        );
        
        if (femaleVoice) {
            utterance.voice = femaleVoice;
        }
        
        // Add some personality to the speech
        utterance.onstart = () => {
            // Add a subtle animation to show Aiden is speaking
            const mascotFaces = document.querySelectorAll('.mascot-face, .mini-face');
            mascotFaces.forEach(face => {
                face.style.animation = 'headBob 0.5s ease-in-out infinite';
            });
        };
        
        utterance.onend = () => {
            // Reset animation when done speaking
            const mascotFaces = document.querySelectorAll('.mascot-face, .mini-face');
            mascotFaces.forEach(face => {
                face.style.animation = 'headBob 3s ease-in-out infinite';
            });
        };
        
        synthesis.speak(utterance);
    }
}

function addMessage(content, sender) {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    if (sender === 'bot') {
        avatar.className += ' mascot-message-avatar';
        avatar.innerHTML = `
            <div class="mini-mascot">
                <div class="mini-face">
                    <div class="mini-eyes">
                        <div class="mini-eye"></div>
                        <div class="mini-eye"></div>
                    </div>
                    <div class="mini-mouth"></div>
                </div>
            </div>
        `;
    } else {
        avatar.innerHTML = '<i class="fas fa-user"></i>';
    }
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = content;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageContent);
    chatbotMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typing-indicator';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = '<i class="fas fa-robot"></i>';
    
    const typingContent = document.createElement('div');
    typingContent.className = 'typing-indicator';
    typingContent.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    
    typingDiv.appendChild(avatar);
    typingDiv.appendChild(typingContent);
    chatbotMessages.appendChild(typingDiv);
    
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function generateBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(chatbotKnowledgeBase)) {
        if (message.includes(key)) {
            return response;
        }
    }
    
    // Check for partial matches and keywords
    if (message.includes('tutorial') || message.includes('learn') || message.includes('course')) {
        return 'Our tutorials cover AI Fundamentals, Machine Learning Basics, and Neural Networks. Click on "Tutorials" in the navigation to get started!';
    }
    
    if (message.includes('game') || message.includes('demo') || message.includes('interactive') || message.includes('play')) {
        return 'Try our Interactive Games! We have a Linear Regression Visualizer, Neural Network Playground, and Decision Tree Builder. Click "Interactive Games" to play!';
    }
    
    if (message.includes('contact') || message.includes('help') || message.includes('support')) {
        return 'You can reach us through the Contact section at the bottom of the page, or keep asking me questions about AI and machine learning!';
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
        return 'You\'re welcome! I\'m here to help you learn about AI. Feel free to ask more questions!';
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return 'Hello! I\'m your AI learning assistant. Ask me anything about artificial intelligence, machine learning, or our tutorials and games!';
    }
    
    // Default responses for unrecognized queries
    const defaultResponses = [
        'That\'s an interesting question! Try asking about AI basics, machine learning, neural networks, or our tutorials and games.',
        'I\'d love to help! You can ask me about AI concepts, our interactive games, tutorials, or anything related to machine learning.',
        'Great question! I can explain AI topics like machine learning, deep learning, neural networks, and guide you through our learning materials.',
        'I\'m here to help you learn AI! Ask me about specific concepts, our tutorials, or try our interactive games to learn by doing.'
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// AI Trainer - Cats vs Dogs Classification Game
let trainingData = { cats: [], dogs: [] };
let modelTrained = false;
let currentTestImage = null;
let testImages = [];
let gameStats = { correct: 0, total: 0 };

// Sample images data (using emojis and icons for simplicity)
const sampleImages = {
    cats: [
        { id: 'cat1', icon: '🐱', type: 'cat' },
        { id: 'cat2', icon: '😸', type: 'cat' },
        { id: 'cat3', icon: '😺', type: 'cat' },
        { id: 'cat4', icon: '🙀', type: 'cat' },
        { id: 'cat5', icon: '😻', type: 'cat' },
        { id: 'cat6', icon: '😼', type: 'cat' }
    ],
    dogs: [
        { id: 'dog1', icon: '🐶', type: 'dog' },
        { id: 'dog2', icon: '🐕', type: 'dog' },
        { id: 'dog3', icon: '🦮', type: 'dog' },
        { id: 'dog4', icon: '🐕‍🦺', type: 'dog' },
        { id: 'dog5', icon: '🐩', type: 'dog' },
        { id: 'dog6', icon: '🌭', type: 'dog' }
    ]
};

function initializeTrainerDemo() {
    if (document.getElementById('training-images')) {
        setupTrainingImages();
        setupDragAndDrop();
        updateTrainingStats();
        updateTip('Start by dragging some cat and dog images into their respective boxes to begin training!');
    }
}

function setupTrainingImages() {
    const container = document.getElementById('training-images');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Create a mix of cat and dog images
    const allImages = [...sampleImages.cats, ...sampleImages.dogs];
    const shuffledImages = allImages.sort(() => Math.random() - 0.5).slice(0, 12);
    
    shuffledImages.forEach(image => {
        const imageElement = document.createElement('div');
        imageElement.className = 'draggable-image';
        imageElement.draggable = true;
        imageElement.dataset.imageId = image.id;
        imageElement.dataset.imageType = image.type;
        imageElement.innerHTML = image.icon;
        
        imageElement.addEventListener('dragstart', handleDragStart);
        imageElement.addEventListener('dragend', handleDragEnd);
        
        container.appendChild(imageElement);
    });
}

function setupDragAndDrop() {
    const dropZones = document.querySelectorAll('.drop-zone');
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
        zone.addEventListener('dragenter', handleDragEnter);
        zone.addEventListener('dragleave', handleDragLeave);
    });
}

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.imageId);
    e.dataTransfer.setData('image/type', e.target.dataset.imageType);
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDragEnter(e) {
    e.preventDefault();
    e.target.closest('.category-box').classList.add('drag-over');
}

function handleDragLeave(e) {
    if (!e.target.closest('.category-box').contains(e.relatedTarget)) {
        e.target.closest('.category-box').classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    const categoryBox = e.target.closest('.category-box');
    categoryBox.classList.remove('drag-over');
    
    const imageId = e.dataTransfer.getData('text/plain');
    const imageType = e.dataTransfer.getData('image/type');
    const category = categoryBox.dataset.category;
    
    // Find the original image element
    const originalImage = document.querySelector(`[data-image-id="${imageId}"]`);
    if (!originalImage) return;
    
    // Add to training data
    trainingData[category].push({
        id: imageId,
        type: imageType,
        icon: originalImage.innerHTML
    });
    
    // Create dropped image in the drop zone
    const droppedImage = document.createElement('div');
    droppedImage.className = 'dropped-image';
    droppedImage.innerHTML = originalImage.innerHTML;
    droppedImage.title = `${imageType} (classified as ${category})`;
    e.target.appendChild(droppedImage);
    
    // Remove original image
    originalImage.remove();
    
    updateTrainingStats();
    updateTrainButton();
    updateTip();
}

function updateTrainingStats() {
    const totalCats = trainingData.cats.length;
    const totalDogs = trainingData.dogs.length;
    const totalImages = totalCats + totalDogs;
    
    // Update counts
    document.getElementById('cats-count').textContent = `${totalCats} image${totalCats !== 1 ? 's' : ''}`;
    document.getElementById('dogs-count').textContent = `${totalDogs} image${totalDogs !== 1 ? 's' : ''}`;
    document.getElementById('total-training').textContent = totalImages;
    
    // Update balance
    let balance = 'Not trained';
    if (totalImages > 0) {
        const ratio = Math.min(totalCats, totalDogs) / Math.max(totalCats, totalDogs, 1);
        if (ratio > 0.8) balance = 'Well balanced ✅';
        else if (ratio > 0.5) balance = 'Moderately balanced ⚖️';
        else balance = 'Imbalanced ⚠️';
    }
    document.getElementById('data-balance').textContent = balance;
    
    // Update model status
    const status = modelTrained ? 'Trained ✅' : (totalImages >= 6 ? 'Ready to train' : 'Need more data');
    document.getElementById('model-status').textContent = status;
}

function updateTrainButton() {
    const trainBtn = document.getElementById('train-btn');
    const totalImages = trainingData.cats.length + trainingData.dogs.length;
    const hasMinimumData = trainingData.cats.length >= 2 && trainingData.dogs.length >= 2;
    
    trainBtn.disabled = !hasMinimumData;
    trainBtn.innerHTML = hasMinimumData ? 
        '<i class="fas fa-brain"></i> Train AI Model' : 
        '<i class="fas fa-brain"></i> Need more data (min 2 per category)';
}

function updateTip(customTip = null) {
    const tipElement = document.getElementById('current-tip');
    if (!tipElement) return;
    
    const totalCats = trainingData.cats.length;
    const totalDogs = trainingData.dogs.length;
    const totalImages = totalCats + totalDogs;
    
    let tip = customTip;
    
    if (!tip) {
        if (totalImages === 0) {
            tip = 'Start by dragging some cat and dog images into their respective boxes to begin training!';
        } else if (totalCats === 0) {
            tip = 'You need some cat images! Drag cat emojis to the Cats box.';
        } else if (totalDogs === 0) {
            tip = 'You need some dog images! Drag dog emojis to the Dogs box.';
        } else if (totalCats < 2 || totalDogs < 2) {
            tip = 'Add at least 2 images to each category to train your AI model.';
        } else if (!modelTrained) {
            tip = 'Great! You have enough data. Click "Train AI Model" to teach your AI.';
        } else {
            tip = 'Your AI is trained! Switch to the prediction phase to test it.';
        }
    }
    
    tipElement.innerHTML = `<i class="fas fa-info-circle"></i><p>${tip}</p>`;
}

function trainModel() {
    const totalCats = trainingData.cats.length;
    const totalDogs = trainingData.dogs.length;
    
    if (totalCats < 2 || totalDogs < 2) {
        alert('You need at least 2 images in each category to train the model!');
        return;
    }
    
    // Simulate training process
    const trainBtn = document.getElementById('train-btn');
    trainBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Training...';
    trainBtn.disabled = true;
    
    setTimeout(() => {
        modelTrained = true;
        trainBtn.innerHTML = '<i class="fas fa-check"></i> Model Trained!';
        
        // Switch to prediction phase
        setTimeout(() => {
            document.getElementById('training-phase').style.display = 'none';
            document.getElementById('prediction-phase').style.display = 'block';
            
            // Generate test images
            generateTestImages();
            updateTip('Your AI is now trained! Click "New Test Image" to start testing predictions.');
        }, 1500);
    }, 2000);
}

function generateTestImages() {
    // Create test images that include both correct and potentially confusing examples
    testImages = [
        ...sampleImages.cats.slice(0, 4),
        ...sampleImages.dogs.slice(0, 4)
    ].sort(() => Math.random() - 0.5);
}

function getNewTestImage() {
    if (testImages.length === 0) {
        generateTestImages();
    }
    
    currentTestImage = testImages.pop();
    const testImageElement = document.getElementById('test-image');
    
    testImageElement.innerHTML = currentTestImage.icon;
    testImageElement.classList.add('has-image');
    
    document.getElementById('predict-btn').disabled = false;
    document.getElementById('prediction-label').textContent = 'Ready to predict...';
    document.getElementById('prediction-label').className = 'prediction-label';
    
    // Reset confidence bars
    document.getElementById('cat-confidence').style.width = '0%';
    document.getElementById('dog-confidence').style.width = '0%';
    document.getElementById('cat-percentage').textContent = '0%';
    document.getElementById('dog-percentage').textContent = '0%';
}

function makePrediction() {
    if (!currentTestImage) return;
    
    const predictBtn = document.getElementById('predict-btn');
    predictBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
    predictBtn.disabled = true;
    
    setTimeout(() => {
        // Simulate AI prediction based on training data bias
        const totalCats = trainingData.cats.length;
        const totalDogs = trainingData.dogs.length;
        const totalTraining = totalCats + totalDogs;
        
        // Base prediction on actual image type with some bias from training data
        let catConfidence, dogConfidence;
        
        if (currentTestImage.type === 'cat') {
            // Correct prediction influenced by training data balance
            catConfidence = 0.7 + (totalCats / totalTraining) * 0.25 + Math.random() * 0.05;
            dogConfidence = 1 - catConfidence;
        } else {
            // Correct prediction influenced by training data balance
            dogConfidence = 0.7 + (totalDogs / totalTraining) * 0.25 + Math.random() * 0.05;
            catConfidence = 1 - dogConfidence;
        }
        
        // Add some randomness for educational purposes
        if (Math.abs(totalCats - totalDogs) > 3) {
            // Heavily biased training data - show bias in predictions
            if (totalCats > totalDogs) {
                catConfidence += 0.15;
                dogConfidence -= 0.15;
            } else {
                dogConfidence += 0.15;
                catConfidence -= 0.15;
            }
        }
        
        // Ensure values are between 0 and 1
        catConfidence = Math.max(0, Math.min(1, catConfidence));
        dogConfidence = Math.max(0, Math.min(1, dogConfidence));
        
        // Normalize to 100%
        const total = catConfidence + dogConfidence;
        catConfidence = catConfidence / total;
        dogConfidence = dogConfidence / total;
        
        // Update UI
        const catPercentage = Math.round(catConfidence * 100);
        const dogPercentage = Math.round(dogConfidence * 100);
        
        document.getElementById('cat-confidence').style.width = `${catPercentage}%`;
        document.getElementById('dog-confidence').style.width = `${dogPercentage}%`;
        document.getElementById('cat-percentage').textContent = `${catPercentage}%`;
        document.getElementById('dog-percentage').textContent = `${dogPercentage}%`;
        
        // Determine prediction
        const prediction = catConfidence > dogConfidence ? 'cat' : 'dog';
        const isCorrect = prediction === currentTestImage.type;
        
        // Update prediction label
        const labelElement = document.getElementById('prediction-label');
        labelElement.textContent = `Prediction: ${prediction.toUpperCase()} ${isCorrect ? '✅' : '❌'}`;
        labelElement.className = `prediction-label ${isCorrect ? 'correct' : 'incorrect'}`;
        
        // Update stats
        gameStats.total++;
        if (isCorrect) gameStats.correct++;
        
        // Update tip with educational content
        let tip = `The AI predicted ${prediction} with ${Math.max(catPercentage, dogPercentage)}% confidence. `;
        if (isCorrect) {
            tip += 'Correct! ';
        } else {
            tip += 'Incorrect! ';
        }
        
        if (Math.abs(totalCats - totalDogs) > 2) {
            tip += `Notice how training data bias affects predictions - you trained with ${totalCats} cats and ${totalDogs} dogs.`;
        } else {
            tip += 'Your balanced training data helps the AI make better predictions!';
        }
        
        updateTip(tip);
        
        predictBtn.innerHTML = '<i class="fas fa-search"></i> Predict';
        predictBtn.disabled = true;
    }, 1500);
}

function resetTraining() {
    trainingData = { cats: [], dogs: [] };
    modelTrained = false;
    
    // Clear drop zones
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.innerHTML = '';
    });
    
    // Reset training images
    setupTrainingImages();
    updateTrainingStats();
    updateTrainButton();
    updateTip('Training data cleared! Start dragging images to train your AI again.');
}

function backToTraining() {
    document.getElementById('prediction-phase').style.display = 'none';
    document.getElementById('training-phase').style.display = 'block';
    updateTip('Back to training! You can add more data or retrain your model.');
}

function resetAll() {
    resetTraining();
    gameStats = { correct: 0, total: 0 };
    currentTestImage = null;
    testImages = [];
    
    document.getElementById('prediction-phase').style.display = 'none';
    document.getElementById('training-phase').style.display = 'block';
    
    updateTip('Everything reset! Start fresh by dragging images to train your AI.');
}

// AI GuessBot - Word Association Game
let guessBotStats = { rounds: 0, currentClue: '', bestMatch: '' };
let currentCandidates = [];

// Word association database (simplified for demo)
const wordAssociations = {
    ocean: {
        candidates: ['water', 'blue', 'waves', 'fish', 'deep', 'salt', 'beach', 'whale'],
        scores: [0.95, 0.88, 0.85, 0.82, 0.78, 0.75, 0.72, 0.68]
    },
    music: {
        candidates: ['sound', 'melody', 'song', 'instrument', 'rhythm', 'harmony', 'dance', 'concert'],
        scores: [0.92, 0.89, 0.86, 0.83, 0.80, 0.77, 0.74, 0.71]
    },
    technology: {
        candidates: ['computer', 'digital', 'innovation', 'future', 'software', 'internet', 'robot', 'science'],
        scores: [0.94, 0.90, 0.87, 0.84, 0.81, 0.78, 0.75, 0.72]
    },
    food: {
        candidates: ['eat', 'delicious', 'cooking', 'restaurant', 'hungry', 'recipe', 'flavor', 'nutrition'],
        scores: [0.93, 0.89, 0.86, 0.83, 0.80, 0.77, 0.74, 0.71]
    },
    love: {
        candidates: ['heart', 'romance', 'family', 'care', 'emotion', 'happiness', 'together', 'forever'],
        scores: [0.96, 0.91, 0.88, 0.85, 0.82, 0.79, 0.76, 0.73]
    },
    nature: {
        candidates: ['trees', 'green', 'forest', 'animals', 'earth', 'environment', 'wild', 'peaceful'],
        scores: [0.91, 0.88, 0.85, 0.82, 0.79, 0.76, 0.73, 0.70]
    },
    space: {
        candidates: ['stars', 'universe', 'planets', 'galaxy', 'astronaut', 'rocket', 'moon', 'cosmic'],
        scores: [0.94, 0.90, 0.87, 0.84, 0.81, 0.78, 0.75, 0.72]
    },
    art: {
        candidates: ['painting', 'creative', 'beauty', 'colors', 'canvas', 'artist', 'museum', 'expression'],
        scores: [0.92, 0.88, 0.85, 0.82, 0.79, 0.76, 0.73, 0.70]
    },
    travel: {
        candidates: ['journey', 'adventure', 'explore', 'destination', 'vacation', 'culture', 'experience', 'discover'],
        scores: [0.93, 0.89, 0.86, 0.83, 0.80, 0.77, 0.74, 0.71]
    },
    happiness: {
        candidates: ['joy', 'smile', 'laughter', 'positive', 'cheerful', 'content', 'bliss', 'delight'],
        scores: [0.95, 0.91, 0.88, 0.85, 0.82, 0.79, 0.76, 0.73]
    }
};

function initializeGuessBotDemo() {
    const clueInput = document.getElementById('clue-input');
    if (clueInput) {
        clueInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                makeGuess();
            }
        });
        updateGuessBotStats();
    }
}

function makeGuess() {
    const clueInput = document.getElementById('clue-input');
    const clue = clueInput.value.trim().toLowerCase();
    
    if (!clue) {
        alert('Please enter a clue word!');
        return;
    }
    
    const guessBtn = document.getElementById('guess-btn');
    guessBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
    guessBtn.disabled = true;
    
    setTimeout(() => {
        processGuess(clue);
        guessBtn.innerHTML = '<i class="fas fa-search"></i> Get Guesses';
        guessBtn.disabled = false;
    }, 1500);
}

function processGuess(clue) {
    // Find best match or generate synthetic associations
    let associations = findBestAssociation(clue);
    
    if (!associations) {
        // Generate synthetic associations for unknown words
        associations = generateSyntheticAssociations(clue);
    }
    
    currentCandidates = associations.candidates.map((word, index) => ({
        word: word,
        score: associations.scores[index],
        rank: index + 1
    }));
    
    // Update stats
    guessBotStats.rounds++;
    guessBotStats.currentClue = clue;
    guessBotStats.bestMatch = currentCandidates[0].word;
    
    // Show results
    displayResults();
    updateGuessBotStats();
    updateGuessBotTip();
}

function findBestAssociation(clue) {
    // Direct match
    if (wordAssociations[clue]) {
        return wordAssociations[clue];
    }
    
    // Partial match (find similar words)
    const keys = Object.keys(wordAssociations);
    for (let key of keys) {
        if (key.includes(clue) || clue.includes(key)) {
            return wordAssociations[key];
        }
    }
    
    // Check if clue appears in any candidate lists
    for (let key of keys) {
        const candidates = wordAssociations[key].candidates;
        if (candidates.includes(clue)) {
            // Return associations for the category this word belongs to
            return wordAssociations[key];
        }
    }
    
    return null;
}

function generateSyntheticAssociations(clue) {
    // Generate plausible word associations based on common patterns
    const commonAssociations = {
        // Colors
        red: ['fire', 'blood', 'rose', 'apple', 'hot', 'danger', 'stop', 'love'],
        blue: ['sky', 'ocean', 'sad', 'cold', 'calm', 'water', 'ice', 'peace'],
        green: ['grass', 'nature', 'money', 'go', 'fresh', 'leaf', 'environment', 'growth'],
        
        // Animals
        cat: ['meow', 'purr', 'fluffy', 'pet', 'whiskers', 'cute', 'independent', 'feline'],
        dog: ['bark', 'loyal', 'fetch', 'pet', 'tail', 'friend', 'puppy', 'canine'],
        bird: ['fly', 'wings', 'tweet', 'nest', 'sky', 'feathers', 'song', 'freedom'],
        
        // Weather
        rain: ['wet', 'clouds', 'umbrella', 'storm', 'drops', 'puddle', 'weather', 'water'],
        sun: ['bright', 'warm', 'light', 'day', 'yellow', 'energy', 'solar', 'shine'],
        snow: ['cold', 'white', 'winter', 'freeze', 'ice', 'flakes', 'skiing', 'snowman']
    };
    
    if (commonAssociations[clue]) {
        return {
            candidates: commonAssociations[clue],
            scores: [0.90, 0.85, 0.80, 0.75, 0.70, 0.65, 0.60, 0.55]
        };
    }
    
    // Generate generic associations
    const genericWords = ['related', 'similar', 'connected', 'associated', 'linked', 'relevant', 'corresponding', 'matching'];
    const randomScores = Array.from({length: 8}, (_, i) => 0.85 - (i * 0.05) + (Math.random() * 0.1 - 0.05));
    
    return {
        candidates: genericWords,
        scores: randomScores
    };
}

function displayResults() {
    const resultsSection = document.getElementById('results-section');
    const topGuessWord = document.getElementById('top-guess-word');
    const topConfidenceBar = document.getElementById('top-confidence-bar');
    const topConfidenceText = document.getElementById('top-confidence-text');
    const wordsGrid = document.getElementById('words-grid');
    
    // Show results section
    resultsSection.style.display = 'block';
    
    // Display top guess
    const topCandidate = currentCandidates[0];
    topGuessWord.textContent = topCandidate.word;
    
    const confidencePercentage = Math.round(topCandidate.score * 100);
    topConfidenceBar.style.width = `${confidencePercentage}%`;
    topConfidenceText.textContent = `${confidencePercentage}%`;
    
    // Display all candidates
    wordsGrid.innerHTML = '';
    
    currentCandidates.forEach((candidate, index) => {
        const tile = document.createElement('div');
        tile.className = 'word-tile';
        
        // Add confidence-based styling
        if (candidate.score > 0.85) {
            tile.classList.add('high-confidence');
        } else if (candidate.score > 0.70) {
            tile.classList.add('medium-confidence');
        } else {
            tile.classList.add('low-confidence');
        }
        
        if (index === 0) {
            tile.classList.add('top-match');
        }
        
        const scorePercentage = Math.round(candidate.score * 100);
        
        tile.innerHTML = `
            <div class="rank-badge">${candidate.rank}</div>
            <div class="word-text">${candidate.word}</div>
            <div class="word-score">${scorePercentage}% match</div>
        `;
        
        tile.addEventListener('click', () => {
            showWordExplanation(candidate.word, candidate.score);
        });
        
        wordsGrid.appendChild(tile);
    });
}

function showWordExplanation(word, score) {
    const explanation = `"${word}" has a ${Math.round(score * 100)}% similarity to your clue. AI determined this connection by analyzing patterns in language data where these words frequently appear together or in similar contexts.`;
    alert(explanation);
}

function updateGuessBotStats() {
    const roundsElement = document.getElementById('rounds-played');
    const currentClueElement = document.getElementById('current-clue');
    const bestMatchElement = document.getElementById('best-match');
    
    if (roundsElement) roundsElement.textContent = guessBotStats.rounds;
    if (currentClueElement) currentClueElement.textContent = guessBotStats.currentClue || 'None';
    if (bestMatchElement) bestMatchElement.textContent = guessBotStats.bestMatch || '---';
}

function updateGuessBotTip() {
    const tipElement = document.getElementById('current-game-tip');
    if (!tipElement) return;
    
    const tips = [
        'Try abstract concepts like "freedom" or "creativity" to see how AI handles complex ideas!',
        'Notice how AI finds connections you might not expect - this shows how it learns from vast text data.',
        'Compare results for similar words like "happy" vs "joy" to see subtle differences in AI associations.',
        'The confidence scores show how certain the AI is about each connection based on training data.',
        'Try words from different categories (emotions, objects, actions) to explore AI\'s language understanding!'
    ];
    
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipElement.innerHTML = `<i class="fas fa-info-circle"></i><p>${randomTip}</p>`;
}

function newRound() {
    const clueInput = document.getElementById('clue-input');
    const resultsSection = document.getElementById('results-section');
    
    clueInput.value = '';
    resultsSection.style.display = 'none';
    currentCandidates = [];
    
    clueInput.focus();
    updateGuessBotTip();
}

function showExample() {
    const examples = ['ocean', 'music', 'technology', 'love', 'nature'];
    const randomExample = examples[Math.floor(Math.random() * examples.length)];
    
    const clueInput = document.getElementById('clue-input');
    clueInput.value = randomExample;
    
    setTimeout(() => {
        makeGuess();
    }, 500);
}

function tryExample(word) {
    const clueInput = document.getElementById('clue-input');
    clueInput.value = word;
    makeGuess();
}

// Hire or Fire - AI Bias Simulation Game
let simulationState = {
    currentCandidate: 0,
    candidates: [],
    decisions: [],
    gameStarted: false
};

// Candidate database with intentional bias patterns
const candidatePool = [
    {
        name: 'Alex Johnson', gender: 'Male', age: 28, education: 'MIT', experience: 5,
        skills: ['JavaScript', 'Python', 'React'], gpa: 3.8, previousCompany: 'Google',
        avatar: 'AJ', details: 'Software Engineer with strong technical background'
    },
    {
        name: 'Sarah Chen', gender: 'Female', age: 26, education: 'Stanford', experience: 4,
        skills: ['Java', 'Machine Learning', 'AWS'], gpa: 3.9, previousCompany: 'Microsoft',
        avatar: 'SC', details: 'AI Engineer with excellent academic record'
    },
    {
        name: 'Michael Brown', gender: 'Male', age: 45, education: 'State University', experience: 15,
        skills: ['C++', 'System Design', 'Leadership'], gpa: 3.5, previousCompany: 'IBM',
        avatar: 'MB', details: 'Senior Developer with extensive experience'
    },
    {
        name: 'Jennifer Davis', gender: 'Female', age: 35, education: 'Harvard', experience: 10,
        skills: ['Product Management', 'Strategy', 'Analytics'], gpa: 3.7, previousCompany: 'Apple',
        avatar: 'JD', details: 'Product Manager with leadership experience'
    },
    {
        name: 'David Wilson', gender: 'Male', age: 24, education: 'Community College', experience: 2,
        skills: ['HTML', 'CSS', 'Basic JavaScript'], gpa: 3.2, previousCompany: 'Startup',
        avatar: 'DW', details: 'Junior Developer eager to learn'
    },
    {
        name: 'Maria Rodriguez', gender: 'Female', age: 29, education: 'UC Berkeley', experience: 6,
        skills: ['Data Science', 'Python', 'SQL'], gpa: 3.6, previousCompany: 'Netflix',
        avatar: 'MR', details: 'Data Scientist with strong analytical skills'
    },
    {
        name: 'Robert Taylor', gender: 'Male', age: 52, education: 'Yale', experience: 20,
        skills: ['Architecture', 'Mentoring', 'Strategy'], gpa: 3.4, previousCompany: 'Oracle',
        avatar: 'RT', details: 'Senior Architect with decades of experience'
    },
    {
        name: 'Lisa Wang', gender: 'Female', age: 31, education: 'Caltech', experience: 8,
        skills: ['Cybersecurity', 'Network Security', 'Compliance'], gpa: 3.8, previousCompany: 'Cisco',
        avatar: 'LW', details: 'Security Expert with specialized knowledge'
    },
    {
        name: 'James Miller', gender: 'Male', age: 27, education: 'Georgia Tech', experience: 3,
        skills: ['Mobile Development', 'Swift', 'Kotlin'], gpa: 3.5, previousCompany: 'Uber',
        avatar: 'JM', details: 'Mobile Developer with modern tech stack'
    },
    {
        name: 'Amanda Foster', gender: 'Female', age: 42, education: 'Northwestern', experience: 12,
        skills: ['DevOps', 'Cloud Architecture', 'Automation'], gpa: 3.6, previousCompany: 'Amazon',
        avatar: 'AF', details: 'DevOps Engineer with cloud expertise'
    }
];

function initializeHireOrFireDemo() {
    if (document.getElementById('instructions-panel')) {
        resetSimulation();
    }
}

function startSimulation() {
    simulationState.gameStarted = true;
    simulationState.currentCandidate = 0;
    simulationState.decisions = [];
    
    // Select 8 random candidates
    simulationState.candidates = candidatePool.sort(() => Math.random() - 0.5).slice(0, 8);
    
    // Hide instructions and show candidate review
    document.getElementById('instructions-panel').style.display = 'none';
    document.getElementById('candidate-review').style.display = 'block';
    
    showCurrentCandidate();
}

function showCurrentCandidate() {
    const candidate = simulationState.candidates[simulationState.currentCandidate];
    const progress = ((simulationState.currentCandidate + 1) / simulationState.candidates.length) * 100;
    
    // Update progress
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `Candidate ${simulationState.currentCandidate + 1} of ${simulationState.candidates.length}`;
    
    // Update candidate card
    const candidateCard = document.getElementById('candidate-card');
    candidateCard.innerHTML = `
        <div class="candidate-header">
            <div class="candidate-avatar">${candidate.avatar}</div>
            <div class="candidate-info">
                <h3>${candidate.name}</h3>
                <div class="candidate-details">${candidate.details}</div>
            </div>
        </div>
        <div class="candidate-attributes">
            <div class="attribute-item">
                <div class="attribute-label">Education</div>
                <div class="attribute-value">${candidate.education}</div>
            </div>
            <div class="attribute-item">
                <div class="attribute-label">Experience</div>
                <div class="attribute-value">${candidate.experience} years</div>
            </div>
            <div class="attribute-item">
                <div class="attribute-label">Age</div>
                <div class="attribute-value">${candidate.age}</div>
            </div>
            <div class="attribute-item">
                <div class="attribute-label">GPA</div>
                <div class="attribute-value">${candidate.gpa}</div>
            </div>
            <div class="attribute-item">
                <div class="attribute-label">Previous Company</div>
                <div class="attribute-value">${candidate.previousCompany}</div>
            </div>
            <div class="attribute-item">
                <div class="attribute-label">Skills</div>
                <div class="attribute-value">${candidate.skills.join(', ')}</div>
            </div>
        </div>
    `;
    
    // Generate AI recommendation with bias
    setTimeout(() => {
        generateAIRecommendation(candidate);
    }, 1000);
}

function generateAIRecommendation(candidate) {
    // Simulate biased AI scoring
    let baseScore = 0.5;
    
    // Education bias (favor prestigious schools)
    const prestigiousSchools = ['MIT', 'Stanford', 'Harvard', 'Yale', 'Caltech'];
    if (prestigiousSchools.includes(candidate.education)) {
        baseScore += 0.2;
    } else if (candidate.education === 'Community College') {
        baseScore -= 0.15;
    }
    
    // Age bias (favor younger candidates, discriminate against older)
    if (candidate.age < 30) {
        baseScore += 0.15;
    } else if (candidate.age > 40) {
        baseScore -= 0.2;
    }
    
    // Gender bias (subtle bias against women in tech)
    if (candidate.gender === 'Male') {
        baseScore += 0.1;
    } else {
        baseScore -= 0.05;
    }
    
    // Experience and GPA adjustments
    baseScore += (candidate.experience / 20) * 0.1;
    baseScore += (candidate.gpa - 3.0) * 0.1;
    
    // Add some randomness
    baseScore += (Math.random() - 0.5) * 0.1;
    
    // Ensure score is between 0 and 1
    const finalScore = Math.max(0.1, Math.min(0.95, baseScore));
    const confidence = Math.round(finalScore * 100);
    const recommendation = finalScore > 0.6 ? 'hire' : 'pass';
    
    // Update UI
    const badge = document.getElementById('recommendation-badge');
    const confidenceBar = document.getElementById('confidence-bar');
    const confidenceText = document.getElementById('confidence-text');
    
    badge.textContent = recommendation === 'hire' ? 'RECOMMEND HIRE' : 'RECOMMEND PASS';
    badge.className = `recommendation-badge ${recommendation}`;
    
    confidenceBar.style.width = `${confidence}%`;
    confidenceText.textContent = `${confidence}%`;
}

function makeDecision(decision) {
    const candidate = simulationState.candidates[simulationState.currentCandidate];
    
    // Record decision
    simulationState.decisions.push({
        candidate: candidate,
        decision: decision,
        timestamp: Date.now()
    });
    
    // Move to next candidate or show results
    simulationState.currentCandidate++;
    
    if (simulationState.currentCandidate < simulationState.candidates.length) {
        showCurrentCandidate();
    } else {
        showResults();
    }
}

function showResults() {
    // Hide candidate review and show results
    document.getElementById('candidate-review').style.display = 'none';
    document.getElementById('results-analysis').style.display = 'block';
    
    analyzeDecisions();
}

function analyzeDecisions() {
    const hired = simulationState.decisions.filter(d => d.decision === 'hire');
    const passed = simulationState.decisions.filter(d => d.decision === 'pass');
    
    // Gender bias analysis
    const maleHired = hired.filter(d => d.candidate.gender === 'Male').length;
    const femaleHired = hired.filter(d => d.candidate.gender === 'Female').length;
    const totalMale = simulationState.decisions.filter(d => d.candidate.gender === 'Male').length;
    const totalFemale = simulationState.decisions.filter(d => d.candidate.gender === 'Female').length;
    
    const maleHireRate = totalMale > 0 ? (maleHired / totalMale * 100).toFixed(1) : 0;
    const femaleHireRate = totalFemale > 0 ? (femaleHired / totalFemale * 100).toFixed(1) : 0;
    
    document.getElementById('gender-bias').innerHTML = `
        <div class="bias-indicator ${Math.abs(maleHireRate - femaleHireRate) > 20 ? 'high' : Math.abs(maleHireRate - femaleHireRate) > 10 ? 'medium' : 'low'}">
            ${Math.abs(maleHireRate - femaleHireRate) > 20 ? 'High Bias' : Math.abs(maleHireRate - femaleHireRate) > 10 ? 'Medium Bias' : 'Low Bias'}
        </div>
        <p>Male hire rate: ${maleHireRate}% (${maleHired}/${totalMale})</p>
        <p>Female hire rate: ${femaleHireRate}% (${femaleHired}/${totalFemale})</p>
    `;
    
    // Age bias analysis
    const youngHired = hired.filter(d => d.candidate.age < 35).length;
    const oldHired = hired.filter(d => d.candidate.age >= 35).length;
    const totalYoung = simulationState.decisions.filter(d => d.candidate.age < 35).length;
    const totalOld = simulationState.decisions.filter(d => d.candidate.age >= 35).length;
    
    const youngHireRate = totalYoung > 0 ? (youngHired / totalYoung * 100).toFixed(1) : 0;
    const oldHireRate = totalOld > 0 ? (oldHired / totalOld * 100).toFixed(1) : 0;
    
    document.getElementById('age-bias').innerHTML = `
        <div class="bias-indicator ${Math.abs(youngHireRate - oldHireRate) > 25 ? 'high' : Math.abs(youngHireRate - oldHireRate) > 15 ? 'medium' : 'low'}">
            ${Math.abs(youngHireRate - oldHireRate) > 25 ? 'High Bias' : Math.abs(youngHireRate - oldHireRate) > 15 ? 'Medium Bias' : 'Low Bias'}
        </div>
        <p>Under 35 hire rate: ${youngHireRate}% (${youngHired}/${totalYoung})</p>
        <p>35+ hire rate: ${oldHireRate}% (${oldHired}/${totalOld})</p>
    `;
    
    // Education bias analysis
    const prestigiousSchools = ['MIT', 'Stanford', 'Harvard', 'Yale', 'Caltech'];
    const eliteHired = hired.filter(d => prestigiousSchools.includes(d.candidate.education)).length;
    const nonEliteHired = hired.filter(d => !prestigiousSchools.includes(d.candidate.education)).length;
    const totalElite = simulationState.decisions.filter(d => prestigiousSchools.includes(d.candidate.education)).length;
    const totalNonElite = simulationState.decisions.filter(d => !prestigiousSchools.includes(d.candidate.education)).length;
    
    const eliteHireRate = totalElite > 0 ? (eliteHired / totalElite * 100).toFixed(1) : 0;
    const nonEliteHireRate = totalNonElite > 0 ? (nonEliteHired / totalNonElite * 100).toFixed(1) : 0;
    
    document.getElementById('education-bias').innerHTML = `
        <div class="bias-indicator ${Math.abs(eliteHireRate - nonEliteHireRate) > 30 ? 'high' : Math.abs(eliteHireRate - nonEliteHireRate) > 15 ? 'medium' : 'low'}">
            ${Math.abs(eliteHireRate - nonEliteHireRate) > 30 ? 'High Bias' : Math.abs(eliteHireRate - nonEliteHireRate) > 15 ? 'Medium Bias' : 'Low Bias'}
        </div>
        <p>Elite school hire rate: ${eliteHireRate}% (${eliteHired}/${totalElite})</p>
        <p>Other school hire rate: ${nonEliteHireRate}% (${nonEliteHired}/${totalNonElite})</p>
    `;
    
    // Generate insights
    generateInsights(maleHireRate, femaleHireRate, youngHireRate, oldHireRate, eliteHireRate, nonEliteHireRate);
}

function generateInsights(maleHireRate, femaleHireRate, youngHireRate, oldHireRate, eliteHireRate, nonEliteHireRate) {
    const insights = [];
    
    if (Math.abs(maleHireRate - femaleHireRate) > 20) {
        insights.push({
            type: 'critical',
            text: `Significant gender bias detected: ${maleHireRate > femaleHireRate ? 'Male' : 'Female'} candidates were hired at a much higher rate. This could indicate discriminatory patterns in the AI system.`
        });
    }
    
    if (Math.abs(youngHireRate - oldHireRate) > 25) {
        insights.push({
            type: 'critical',
            text: `Age discrimination detected: ${youngHireRate > oldHireRate ? 'Younger' : 'Older'} candidates were strongly favored. This violates age discrimination laws in many jurisdictions.`
        });
    }
    
    if (Math.abs(eliteHireRate - nonEliteHireRate) > 30) {
        insights.push({
            type: 'warning',
            text: `Educational elitism detected: The AI system heavily favors candidates from prestigious universities, potentially missing qualified candidates from other backgrounds.`
        });
    }
    
    if (insights.length === 0) {
        insights.push({
            type: 'normal',
            text: 'Your hiring decisions showed relatively low bias across demographic groups. However, remember that even small biases can compound over time and affect workplace diversity.'
        });
    }
    
    insights.push({
        type: 'normal',
        text: 'AI bias in hiring is a real problem affecting millions of job seekers. Companies must actively monitor and correct these systems to ensure fair opportunities for all candidates.'
    });
    
    const insightsList = document.getElementById('insights-list');
    insightsList.innerHTML = insights.map(insight => 
        `<div class="insight-item ${insight.type}">${insight.text}</div>`
    ).join('');
}

function restartSimulation() {
    resetSimulation();
    startSimulation();
}

function resetSimulation() {
    simulationState = {
        currentCandidate: 0,
        candidates: [],
        decisions: [],
        gameStarted: false
    };
    
    // Show instructions panel
    document.getElementById('instructions-panel').style.display = 'block';
    document.getElementById('candidate-review').style.display = 'none';
    document.getElementById('results-analysis').style.display = 'none';
}

function showDetailedResults() {
    const details = simulationState.decisions.map((decision, index) => {
        const candidate = decision.candidate;
        return `${index + 1}. ${candidate.name} (${candidate.gender}, ${candidate.age}, ${candidate.education}) - ${decision.decision.toUpperCase()}`;
    }).join('\n');
    
    alert(`Detailed Results:\n\n${details}\n\nThis simulation demonstrates how AI systems can perpetuate historical biases present in training data, leading to unfair hiring practices.`);
}

// Add initial styles for animation
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.about-card, .tutorial-card, .demo-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial check
    setTimeout(handleScrollAnimations, 100);
});
