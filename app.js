// Project data (6 featured projects). `github: null` hides the repo link in the modal.
const projectData = [
    {
        "title": "Autonomous 5G Network Operations Center (NOC)",
        "description": "AI-driven NOC for a Free5GC and UERANSIM 5G network with a Llama 3.1 8B RAG layer and dual web dashboards",
        "technologies": ["Free5GC", "UERANSIM", "Llama 3.1", "RAG", "Python"],
        "detailedDescription": "A self-operating Network Operations Center that continuously monitors and manages a full 5G standalone network built on Free5GC core network functions and UERANSIM-simulated gNodeBs and UEs. A locally hosted Llama 3.1 8B model, augmented with a retrieval-augmented generation pipeline over 3GPP specifications, network configuration files, and live telemetry, interprets faults and recommends or applies corrective actions without operator intervention.",
        "objectives": [
            "Automate detection and diagnosis of 5G core and RAN faults",
            "Ground an on-premise LLM in network context using RAG for accurate remediation",
            "Provide operators and engineers with separate real-time monitoring dashboards",
            "Eliminate reliance on paid cloud AI services for network operations"
        ],
        "implementation": "Deployed Free5GC control-plane and user-plane functions alongside UERANSIM to emulate radio access and subscriber traffic. Built a Python monitoring service that collects metrics and logs from each network function and streams them into a vector store; a RAG pipeline retrieves relevant specification and configuration context and feeds it to a locally served Llama 3.1 8B model that produces structured remediation steps. Two web dashboards were developed - an operations view for live KPIs and alarms, and an engineering view for deep telemetry and AI decision logs.",
        "results": "Successfully demonstrated autonomous recovery from common core-network and session-establishment failures with minimal human input, running as a fully offline AI operations stack with no reliance on paid cloud services.",
        "github": null
    },
    {
        "title": "Open5GS 5G NOC & Web Dashboard",
        "description": "Independent Open5GS 5G Core deployment with a web-based NOC dashboard for monitoring and management",
        "technologies": ["Open5GS", "Flask", "Web Dashboard"],
        "detailedDescription": "A standalone 5G core network built on Open5GS, paired with a purpose-built Network Operations Center dashboard that gives a single-pane view of network health. The dashboard surfaces subscriber registrations, session activity, and network-function status, and provides controls for common administrative tasks such as subscriber provisioning and function restarts.",
        "objectives": [
            "Stand up a reproducible Open5GS 5G standalone core",
            "Expose real-time network-function and subscriber status through a web UI",
            "Enable routine network management tasks without command-line access",
            "Compare operational behavior against a parallel Free5GC deployment"
        ],
        "implementation": "Configured the full Open5GS control and user plane, including AMF, SMF, UPF, and the subscriber database. A Flask backend polls Open5GS management interfaces and its MongoDB store, normalizes the data, and serves it to a responsive dashboard through a REST API and periodic refresh. Administrative endpoints wrap subscriber CRUD operations and service control.",
        "results": "Delivered a working Open5GS core with end-to-end registration and data sessions, monitored and managed entirely through the dashboard instead of manual command-line workflows.",
        "github": null
    },
    {
        "title": "Autonomous Rover using ROS2 Jazzy",
        "description": "Autonomous ground rover built on ROS2 Jazzy with sensor fusion, navigation, and hardware/software integration",
        "technologies": ["ROS2 Jazzy", "Raspberry Pi 5", "Sensors", "Navigation"],
        "detailedDescription": "A four-wheeled autonomous rover that perceives its surroundings, builds a map, and navigates to goal positions while avoiding obstacles. The software stack is organized as ROS2 Jazzy nodes running on a Raspberry Pi 5, integrating motor control, sensor drivers, localization, and path planning.",
        "objectives": [
            "Integrate motors, sensors, and compute into a reliable robot platform",
            "Implement mapping, localization, and autonomous navigation with ROS2",
            "Achieve robust obstacle avoidance in indoor environments",
            "Build a modular architecture that supports adding new sensors"
        ],
        "implementation": "Assembled the drive base with motor drivers controlled through a ROS2 hardware interface node on a Raspberry Pi 5. Integrated range and inertial sensors, fused their data for odometry and obstacle detection, and used the ROS2 navigation stack for costmap generation, global planning, and local trajectory control. Nodes communicate over standard ROS2 topics and actions for teleoperation and autonomous goals.",
        "results": "Deployed and tested on a physical rover: it navigated cluttered indoor spaces to commanded waypoints while avoiding obstacles, and the modular node design allowed new sensors to be added with minimal changes to the rest of the stack.",
        "github": null
    },
    {
        "title": "SENTINEL-5G (Ongoing Capstone Project)",
        "description": "Ongoing capstone: telecom security framework combining honeypot deception, ML attacker profiling, and LLM-powered patch synthesis for 5G infrastructure",
        "technologies": ["free5GC", "Ollama", "Machine Learning", "Honeypot", "LLM"],
        "detailedDescription": "An in-progress capstone project building a defensive security framework for 5G core infrastructure. The intended design lures attackers into instrumented honeypots, profiles their behavior with machine learning, and uses a locally hosted LLM to draft candidate patches and mitigations. The stack is built entirely on free and open components - free5GC for the target core and Ollama running Llama 3 or Mistral for analysis - so it carries no paid dependencies.",
        "objectives": [
            "Detect and observe attacks against 5G core network functions using deception",
            "Classify attacker techniques and intent from captured interaction data",
            "Automatically synthesize candidate patches and configuration hardening",
            "Keep the whole pipeline free of paid or cloud-locked dependencies"
        ],
        "implementation": "free5GC is deployed as the target core. Current work is on the honeypot services that mimic vulnerable core interfaces and log every interaction, and on the machine learning pipeline that extracts features from session traces to profile attacker behavior. The planned final stage passes each incident summary to an Ollama-served Llama 3 or Mistral model that proposes code or configuration patches for review.",
        "results": "In development - currently building out the honeypot deception layer and ML-based attacker profiling. LLM-driven patch synthesis and end-to-end evaluation are planned next.",
        "github": null
    },
    {
        "title": "AI-Powered Messenger App (\"Current\")",
        "description": "Live in production on the Google Play Store. Privacy-first messenger with zero server-side message storage, end-to-end encryption, and WebRTC voice/video calling.",
        "technologies": ["React Native", "Expo", "WebRTC", "Supabase", "E2E Encryption"],
        "detailedDescription": "A production mobile messaging application, live on the Google Play Store, designed around a strict privacy model: messages are end-to-end encrypted and never persisted on the server, existing only in transit and on participating devices. The app supports one-to-one and group messaging, plus voice and video calling over WebRTC.",
        "objectives": [
            "Deliver a messaging experience with no server-side message persistence",
            "Implement end-to-end encryption for text, media, and calls",
            "Provide low-latency voice and video calling with WebRTC",
            "Ship and maintain a production release on the Google Play Store"
        ],
        "implementation": "Built with React Native and Expo for cross-platform delivery. Message payloads are encrypted client-side and relayed through ephemeral channels backed by Supabase for authentication, presence, and signaling only, with no message bodies written to the database. WebRTC handles peer-to-peer audio and video, using the backend purely for session negotiation and TURN fallback.",
        "results": "Live in production on the Google Play Store. Sustains real-time messaging and voice/video calls while keeping no readable message history on the server.",
        "github": null
    },
    {
        "title": "Drone ATC (Air Traffic Control) System",
        "description": "Air traffic control system integrating Pixhawk flight controller telemetry via MAVLink with a Flask backend and two web portals (pilot registration and flight request management)",
        "technologies": ["ESP8266", "Pixhawk", "MAVLink", "Flask", "Web Portals"],
        "detailedDescription": "A ground-side air traffic control system for small unmanned aircraft. Live telemetry from a Pixhawk flight controller is carried over MAVLink to a Flask backend, which presents it to controllers for airspace coordination. Two web portals sit on top of the backend: one where pilots register their aircraft, and one where flight requests are submitted, reviewed, and approved or denied against current traffic.",
        "objectives": [
            "Carry real-time Pixhawk telemetry over MAVLink into a central backend",
            "Let pilots register aircraft through a dedicated web portal",
            "Provide a separate portal to submit, review, and manage flight requests",
            "Give controllers a single view of active traffic and pending requests"
        ],
        "implementation": "An ESP8266 relays MAVLink telemetry from the Pixhawk to a Flask backend over Wi-Fi, where position, altitude, and status messages are parsed and stored. The Flask application serves two web portals against that data - a pilot portal for aircraft registration and a flight-request portal for submitting and managing requests - and records flight state and controller decisions for later review.",
        "results": "Successfully demonstrated end-to-end telemetry integration from Pixhawk through MAVLink to the backend, and the dual-portal workflow from aircraft registration through flight-request submission and controller approval.",
        "github": null
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
    const cards = document.querySelectorAll('.about-card, .skill-category, .experience-card, .achievement-card, .education-card, .project-card, .cert-card');
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
        if (modalGithub) {
            const linksWrap = modalGithub.closest('.project-links') || modalGithub;
            if (project.github) {
                modalGithub.href = project.github;
                linksWrap.hidden = false;
            } else {
                modalGithub.removeAttribute('href');
                linksWrap.hidden = true;
            }
        }

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

        // Hover lift is handled by CSS :hover

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

    // Certificate cards: hover lift is handled by CSS :hover
    const certCards = document.querySelectorAll('.cert-card');

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

    // Resume download — served from the local file in the repo
    function downloadResume() {
        try {
            // Create a temporary anchor element for download
            const link = document.createElement('a');
            link.href = 'Husenbasha_Sompur_Resume.pdf';
            link.download = 'Husenbasha_Sompur_Resume.pdf';
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