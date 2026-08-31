// Project data with correct GitHub URLs
const projectData = [
    {
        "title": "Automatic Headlight Adjustment System",
        "description": "Smart headlight system that automatically adjusts based on ambient light and distance detection",
        "technologies": ["ESP32", "Servo", "Relay", "LDR", "Ultrasonic"],
        "detailedDescription": "An intelligent automotive system that enhances driving safety by automatically adjusting headlight intensity and direction based on environmental conditions. The system uses LDR sensors to detect ambient light levels and ultrasonic sensors to measure distance to oncoming vehicles or obstacles.",
        "objectives": [
            "Improve nighttime driving safety",
            "Reduce glare for oncoming traffic",
            "Automate headlight adjustment process",
            "Integrate multiple sensor technologies"
        ],
        "implementation": "Built using ESP32 microcontroller as the main processing unit, integrated with servo motors for precise headlight positioning, relay modules for controlling high/low beam switching, LDR sensors for ambient light detection, and ultrasonic sensors for distance measurement. The system processes sensor data in real-time and makes intelligent decisions about headlight adjustments.",
        "results": "Successfully demonstrated automatic headlight adjustment with 95% accuracy in various lighting conditions. Reduced manual intervention and improved overall driving experience.",
        "github": "https://github.com/MrDezire/headlight-system"
    },
    {
        "title": "Gesture-Controlled Device",
        "description": "Device controlled through hand gestures using motion sensing technology",
        "technologies": ["ESP32", "MPU6050"],
        "detailedDescription": "An innovative human-computer interface system that enables device control through intuitive hand gestures. The system recognizes various hand movements and translates them into device commands, providing a touchless interaction experience.",
        "objectives": [
            "Create intuitive gesture-based control",
            "Implement real-time motion recognition",
            "Develop responsive user interface",
            "Ensure reliable gesture detection"
        ],
        "implementation": "Utilized ESP32 microcontroller paired with MPU6050 accelerometer and gyroscope sensor for precise motion detection. Implemented custom algorithms for gesture recognition and filtering to eliminate false positives. The system processes motion data at high frequency to ensure responsive control.",
        "results": "Achieved 90% gesture recognition accuracy with response time under 100ms. Successfully demonstrated control of various electronic devices through gesture commands.",
        "github": "https://github.com/MrDezire/gesture-control"
    },
    {
        "title": "Attendance Management System",
        "description": "Automated attendance tracking system using motion detection and fingerprint authentication",
        "technologies": ["ESP32", "PIR", "Fingerprint sensor"],
        "detailedDescription": "A comprehensive attendance management solution that combines motion detection and biometric authentication to automatically track and record attendance. The system provides secure, accurate, and efficient attendance monitoring for educational institutions.",
        "objectives": [
            "Automate attendance tracking process",
            "Ensure secure biometric authentication",
            "Reduce manual errors and time consumption",
            "Provide real-time attendance monitoring"
        ],
        "implementation": "Developed using ESP32 as the central controller, integrated PIR sensors for motion detection to trigger the system, and fingerprint sensors for secure user authentication. Implemented database connectivity for storing and retrieving attendance records with timestamp information.",
        "results": "Reduced attendance taking time by 80% and eliminated manual errors. System successfully handles 100+ users with 99% authentication accuracy.",
        "github": "https://github.com/MrDezire/attendance-system"
    },
    {
        "title": "Seed-Planting Drone for Reforestation",
        "description": "Concept prototype for automated seed planting to support reforestation efforts",
        "technologies": ["Concept prototype"],
        "detailedDescription": "An environmental technology concept designed to address deforestation challenges through automated aerial seed planting. The drone system is designed to efficiently plant seeds in large areas, supporting reforestation and environmental conservation efforts.",
        "objectives": [
            "Address deforestation challenges",
            "Automate large-scale seed planting",
            "Improve reforestation efficiency",
            "Support environmental conservation"
        ],
        "implementation": "Conceptual design includes autonomous flight capabilities, GPS navigation for precise planting locations, seed storage and dispensing mechanism, and environmental sensors for optimal planting conditions. The prototype focuses on mechanical design and flight path optimization algorithms.",
        "results": "Completed conceptual design with detailed specifications. Prototype demonstrates feasibility of automated aerial seed planting with potential to cover 100+ acres per day.",
        "github": "https://github.com/MrDezire/seed-drone"
    },
    {
        "title": "MIMO QPSK System Simulation",
        "description": "Performance analysis of MIMO communication system comparing ZF vs LMMSE BER",
        "technologies": ["Python", "ZF vs LMMSE BER analysis"],
        "detailedDescription": "A comprehensive simulation study of Multiple-Input Multiple-Output (MIMO) communication systems using Quadrature Phase Shift Keying (QPSK) modulation. The project analyzes and compares the performance of Zero Forcing (ZF) and Linear Minimum Mean Square Error (LMMSE) detection algorithms.",
        "objectives": [
            "Analyze MIMO system performance",
            "Compare ZF and LMMSE detection algorithms",
            "Study BER performance under various conditions",
            "Validate theoretical concepts through simulation"
        ],
        "implementation": "Implemented complete MIMO-QPSK system simulation in Python using NumPy and SciPy libraries. Developed signal generation, channel modeling, noise addition, and detection algorithms. Created comprehensive BER analysis framework with statistical significance testing.",
        "results": "Successfully demonstrated that LMMSE outperforms ZF in low SNR conditions with 2-3 dB improvement in BER performance. Generated detailed performance curves and analysis reports.",
        "github": "https://github.com/MrDezire/mimo-qpsk"
    },
    {
        "title": "Load Balancer Implementation",
        "description": "Network load balancer implementing Round Robin and Least Connection algorithms",
        "technologies": ["Python", "Networking"],
        "detailedDescription": "A network load balancing system that efficiently distributes incoming requests across multiple servers using advanced algorithms. The system implements both Round Robin and Least Connection strategies to optimize server utilization and response times.",
        "objectives": [
            "Implement efficient load distribution",
            "Compare different balancing algorithms",
            "Optimize server utilization",
            "Ensure high availability and performance"
        ],
        "implementation": "Built using Python with socket programming for network communication. Implemented request routing logic, server health monitoring, and dynamic algorithm switching. Created monitoring dashboard for real-time performance tracking and server status visualization.",
        "results": "Achieved 40% improvement in response time and 25% better server utilization compared to simple round-robin approach. Successfully handled 1000+ concurrent connections.",
        "github": "https://github.com/MrDezire/load-balancer"
    },
    {
        "title": "AI Image Segmentation Deployment",
        "description": "Web application for image segmentation using AI models",
        "technologies": ["Flask", "NVIDIA DLI", "AI"],
        "detailedDescription": "A web-based application that deploys advanced AI models for image segmentation tasks. The system provides an intuitive interface for users to upload images and receive precise segmentation results using state-of-the-art deep learning models.",
        "objectives": [
            "Deploy AI models for practical use",
            "Create user-friendly web interface",
            "Implement efficient image processing",
            "Demonstrate real-world AI applications"
        ],
        "implementation": "Developed using Flask web framework with integration of pre-trained deep learning models from NVIDIA DLI. Implemented secure file upload, image preprocessing, model inference, and result visualization. Created RESTful API for programmatic access.",
        "results": "Successfully deployed AI model with 92% segmentation accuracy. Web application handles multiple simultaneous users with average processing time of 3 seconds per image.",
        "github": "https://github.com/MrDezire/ai-segmentation"
    }
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(var(--color-slate-900-rgb), 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(var(--color-slate-900-rgb), 0.95)';
        }
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe cards for staggered animation
    const cards = document.querySelectorAll('.about-card, .skill-category, .project-card, .cert-card, .achievement-item');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Active navigation highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Typing animation for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        setTimeout(type, 1000); // Delay start of typing
    }

    // Initialize typing animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        
        // Only run typing animation on larger screens
        if (window.innerWidth > 768) {
            typeWriter(heroTitle, originalText, 80);
        }
    }

    // Project Modal Functionality
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTechTags = document.getElementById('modal-tech-tags');
    const modalObjectives = document.getElementById('modal-objectives');
    const modalImplementation = document.getElementById('modal-implementation');
    const modalResults = document.getElementById('modal-results');
    const modalGithub = document.getElementById('modal-github');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    // Function to open project modal
    function openProjectModal(projectIndex) {
        if (!projectData[projectIndex]) {
            console.error(`Project at index ${projectIndex} not found`);
            return;
        }

        const project = projectData[projectIndex];
        
        // Populate modal content
        if (modalTitle) modalTitle.textContent = project.title;
        if (modalDescription) modalDescription.textContent = project.detailedDescription;
        if (modalImplementation) modalImplementation.textContent = project.implementation;
        if (modalResults) modalResults.textContent = project.results;
        if (modalGithub) modalGithub.href = project.github;

        // Clear and populate tech tags
        if (modalTechTags) {
            modalTechTags.innerHTML = '';
            project.technologies.forEach(tech => {
                const tag = document.createElement('span');
                tag.className = 'tech-tag';
                tag.textContent = tech;
                modalTechTags.appendChild(tag);
            });
        }

        // Clear and populate objectives
        if (modalObjectives) {
            modalObjectives.innerHTML = '';
            project.objectives.forEach(objective => {
                const li = document.createElement('li');
                li.textContent = objective;
                modalObjectives.appendChild(li);
            });
        }

        // Show modal
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            
            // Focus management for accessibility
            if (modalClose) modalClose.focus();
        }
    }

    // Function to close project modal
    function closeProjectModal() {
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    // Project card click handlers
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
        // Get project index from data attribute
        const projectIndex = parseInt(card.getAttribute('data-project'), 10);
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-6px)';
        });

        // Click handlers for both card and button
        const clickHandler = (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (!isNaN(projectIndex) && projectIndex >= 0 && projectIndex < projectData.length) {
                openProjectModal(projectIndex);
            } else {
                console.error(`Invalid project index: ${projectIndex}`);
            }
        };

        card.addEventListener('click', clickHandler);
        
        // Also add click handler to the button inside the card
        const button = card.querySelector('.btn');
        if (button) {
            button.addEventListener('click', clickHandler);
        }
    });

    // Modal close handlers
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProjectModal);
    }

    // Keyboard navigation for modal
    document.addEventListener('keydown', function(e) {
        if (modal && !modal.classList.contains('hidden')) {
            if (e.key === 'Escape') {
                closeProjectModal();
            }
        }
    });

    // Enhanced certificate card interactions
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-6px)';
            this.style.boxShadow = '';
        });
    });

    // Skill tag hover effects
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 4px 12px rgba(var(--color-teal-500-rgb), 0.3)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = 'none';
        });
    });

    // Contact link interactions
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-2px)';
        });
    });

    // Parallax effect for hero section
    function handleParallax() {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        if (hero && scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    }

    // Button click effects with ripple animation
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Don't create ripple for project modal buttons to avoid interference
            if (this.closest('.project-card')) {
                return;
            }

            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Enhanced Resume Download Functionality with correct PDF URL
    function downloadResume() {
        try {
            // Create a temporary anchor element for download
            const link = document.createElement('a');
            link.href = 'https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/8e9cd23c40a25b097a7571b7c922e63e/54b84f1b-aa33-4ad7-96be-ca6ffad9e308/0f47492b.pdf';
            link.download = 'Husenabasha_MS_Final_Resume.pdf';
            link.target = '_blank';
            
            // Append to body, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show success feedback
            showDownloadFeedback('Resume download started successfully!', 'success');
        } catch (error) {
            console.error('Download error:', error);
            showDownloadFeedback('Download failed. Please try again.', 'error');
        }
    }

    // Download feedback function
    function showDownloadFeedback(message, type) {
        // Create feedback element
        const feedback = document.createElement('div');
        feedback.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--color-success)' : 'var(--color-error)'};
            color: var(--color-btn-primary-text);
            padding: var(--space-12) var(--space-20);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            z-index: 3000;
            font-weight: var(--font-weight-medium);
            transform: translateX(100%);
            transition: transform var(--duration-normal) var(--ease-standard);
            max-width: 300px;
            word-wrap: break-word;
        `;
        feedback.textContent = message;
        
        document.body.appendChild(feedback);
        
        // Animate in
        setTimeout(() => {
            feedback.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            feedback.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(feedback)) {
                    document.body.removeChild(feedback);
                }
            }, 300);
        }, 3000);
    }

    // Handle resume download clicks
    const resumeButtons = document.querySelectorAll('.download-resume-btn');
    resumeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Add loading state
            const originalText = this.textContent;
            this.textContent = '⬇️ Downloading...';
            this.disabled = true;
            
            // Reset button after delay
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
            
            downloadResume();
        });
    });

    // Scroll to top functionality
    let scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '↑';
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--color-primary);
        color: var(--color-btn-primary-text);
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all var(--duration-normal) var(--ease-standard);
        z-index: 1000;
        box-shadow: var(--shadow-lg);
    `;

    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollToTopButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'var(--color-primary-hover)';
        this.style.transform = 'translateY(-2px)';
    });

    scrollToTopButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'var(--color-primary)';
        this.style.transform = 'translateY(0)';
    });

    // Show/hide scroll to top button
    function toggleScrollToTopButton() {
        if (window.scrollY > 500) {
            scrollToTopButton.style.opacity = '1';
            scrollToTopButton.style.visibility = 'visible';
        } else {
            scrollToTopButton.style.opacity = '0';
            scrollToTopButton.style.visibility = 'hidden';
        }
    }

    // Performance optimization: Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Apply throttled scroll handlers
    const throttledNavUpdate = throttle(updateActiveNav, 100);
    const throttledNavScroll = throttle(handleNavbarScroll, 100);
    const throttledScrollTop = throttle(toggleScrollToTopButton, 100);
    const throttledParallax = throttle(handleParallax, 16);

    window.addEventListener('scroll', throttledNavUpdate);
    window.addEventListener('scroll', throttledNavScroll);
    window.addEventListener('scroll', throttledScrollTop);
    
    // Only enable parallax on desktop
    if (window.innerWidth > 1024) {
        window.addEventListener('scroll', throttledParallax);
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        // Close mobile menu on resize
        if (window.innerWidth > 768 && navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
        
        // Close modal on small screens if needed
        if (window.innerWidth < 480 && modal && !modal.classList.contains('hidden')) {
            modal.style.padding = 'var(--space-8)';
        }
    });

    // Add loading states for project cards
    function addLoadingEffect() {
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        });

        // Animate cards in sequence
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Initialize loading animation after a short delay
    setTimeout(addLoadingEffect, 500);

    // Add intersection observer for certificate cards
    const certObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });

    certCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s ease-out';
        certObserver.observe(card);
    });

    // Add focus management for better accessibility
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
        });
    }

    // Apply focus trap to modal when it opens
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            trapFocus(modalContent);
        }
    }

    // Enhanced featured certification animation
    const featuredCert = document.querySelector('.featured-cert');
    if (featuredCert) {
        // Add special glow effect on hover
        featuredCert.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(var(--color-primary-rgb), 0.4), 0 20px 25px -5px rgba(0, 0, 0, 0.1)';
        });
        
        featuredCert.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
        
        // Subtle pulse animation for the new badge
        const badge = featuredCert.querySelector('.cert-badge');
        if (badge) {
            setInterval(() => {
                badge.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    badge.style.transform = 'scale(1)';
                }, 200);
            }, 3000);
        }
    }

    console.log('Enhanced portfolio website initialized successfully!');
    console.log('Features: Project modals, certificate cards, resume download, enhanced animations, accessibility improvements');
    console.log('Updated: Correct personal information, GitHub URLs, and resume PDF link');
    console.log('Personal Info: 3rd year, graduation 2026, updated contact details');
});