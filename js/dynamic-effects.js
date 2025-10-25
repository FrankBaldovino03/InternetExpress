// Efectos dinámicos para InternetExpress
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== EFECTOS DE SCROLL PARALLAX ==========
    const parallaxElements = document.querySelectorAll('.hero, .coverage-section, .testimonials');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach((element, index) => {
            const speed = (index + 1) * 0.3;
            element.style.transform = `translateY(${rate * speed}px)`;
        });
    });

    // ========== CONTADORES ANIMADOS ==========
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseFloat(counter.textContent.replace(/[^\d.]/g, ''));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (counter.textContent.includes('$')) {
                        counter.textContent = `$${Math.floor(current).toLocaleString()}`;
                    } else if (counter.textContent.includes('%')) {
                        counter.textContent = `${Math.floor(current)}%`;
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    if (counter.textContent.includes('$')) {
                        counter.textContent = `$${target.toLocaleString()}`;
                    } else if (counter.textContent.includes('%')) {
                        counter.textContent = `${target}%`;
                    } else {
                        counter.textContent = target;
                    }
                }
            };
            
            updateCounter();
        });
        
        // Animar barras de progreso
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 500);
        });
    };

    // ========== ANIMACIONES DE ELEMENTOS ==========
    // Animar el logo con efectos más intensos
    const logo = document.querySelector('.logo h1');
    if (logo) {
        setInterval(() => {
            logo.style.transform = 'rotate(10deg) scale(1.1)';
            logo.style.textShadow = '0 0 20px rgba(59, 130, 246, 0.5)';
            setTimeout(() => {
                logo.style.transform = 'rotate(-10deg) scale(1.1)';
                logo.style.textShadow = '0 0 20px rgba(56, 189, 248, 0.5)';
                setTimeout(() => {
                    logo.style.transform = 'rotate(0deg) scale(1)';
                    logo.style.textShadow = 'none';
                }, 400);
            }, 400);
        }, 2500);
    }

    // Animar iconos del wifi con efectos de pulso
    const wifiIcon = document.querySelector('.logo i');
    if (wifiIcon) {
        setInterval(() => {
            wifiIcon.style.animation = 'wifiPulse 0.8s ease-in-out, wifiGlow 2s ease-in-out';
            wifiIcon.style.filter = 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))';
            setTimeout(() => {
                wifiIcon.style.filter = 'none';
            }, 2000);
        }, 3000);
    }

    // Agregar ondas de energía al logo
    const logoContainer = document.querySelector('.logo');
    if (logoContainer) {
        setInterval(() => {
            const wave = document.createElement('div');
            wave.className = 'energy-wave';
            wave.style.cssText = `
                position: absolute;
                width: 100px;
                height: 100px;
                border: 2px solid rgba(59, 130, 246, 0.6);
                border-radius: 50%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                animation: energyPulse 1s ease-out forwards;
                pointer-events: none;
            `;
            logoContainer.style.position = 'relative';
            logoContainer.appendChild(wave);
            
            setTimeout(() => {
                if (logoContainer.contains(wave)) {
                    logoContainer.removeChild(wave);
                }
            }, 1000);
        }, 4000);
    }

    // Animar elementos de navegación con efectos más intensos
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
        link.classList.add('navFloat');
        
        // Agregar efectos de brillo periódicos
        setInterval(() => {
            link.style.textShadow = '0 0 15px rgba(59, 130, 246, 0.8)';
            link.style.transform = 'scale(1.1)';
            setTimeout(() => {
                link.style.textShadow = 'none';
                link.style.transform = 'scale(1)';
            }, 800);
        }, 5000 + (index * 1000));
    });

    // Animar botones de la página con efectos más dramáticos
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach((button, index) => {
        // Efecto de flotación
        setInterval(() => {
            button.style.transform = 'translateY(-5px) scale(1.05)';
            button.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.4)';
            setTimeout(() => {
                button.style.transform = 'translateY(0) scale(1)';
                button.style.boxShadow = '';
            }, 600);
        }, 3500 + (index * 800));
        
        // Efecto de pulso energético
        setInterval(() => {
            const pulse = document.createElement('div');
            pulse.style.cssText = `
                position: absolute;
                top: -5px;
                left: -5px;
                right: -5px;
                bottom: -5px;
                border: 2px solid rgba(59, 130, 246, 0.6);
                border-radius: inherit;
                animation: buttonPulse 1s ease-out forwards;
                pointer-events: none;
                z-index: -1;
            `;
            button.style.position = 'relative';
            button.appendChild(pulse);
            
            setTimeout(() => {
                if (button.contains(pulse)) {
                    button.removeChild(pulse);
                }
            }, 1000);
        }, 6000 + (index * 1500));
    });

    // Animar iconos de características con efectos más intensos
    const featureIcons = document.querySelectorAll('.feature i');
    featureIcons.forEach((icon, index) => {
        // Efecto de rebote
        setInterval(() => {
            icon.style.animation = 'iconBounce 0.6s ease-in-out, iconGlow 2s ease-in-out';
            icon.style.filter = 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.8))';
            setTimeout(() => {
                icon.style.filter = 'none';
            }, 2000);
        }, 2500 + (index * 400));
        
        // Efecto de ondas de energía
        setInterval(() => {
            const feature = icon.closest('.feature');
            if (feature) {
                const wave = document.createElement('div');
                wave.style.cssText = `
                    position: absolute;
                    width: 80px;
                    height: 80px;
                    border: 2px solid rgba(59, 130, 246, 0.4);
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    animation: energyPulse 1.5s ease-out forwards;
                    pointer-events: none;
                    z-index: 1;
                `;
                feature.style.position = 'relative';
                feature.appendChild(wave);
                
                setTimeout(() => {
                    if (feature.contains(wave)) {
                        feature.removeChild(wave);
                    }
                }, 1500);
            }
        }, 8000 + (index * 2000));
    });

    // Animar elementos del hero con efectos más dramáticos
    const heroFeatures = document.querySelectorAll('.hero-feature');
    heroFeatures.forEach((feature, index) => {
        // Efecto de flotación intensa
        setInterval(() => {
            feature.style.transform = 'translateY(-10px) scale(1.1) rotate(2deg)';
            feature.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.3)';
            feature.style.background = 'rgba(255, 255, 255, 0.3)';
            setTimeout(() => {
                feature.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                feature.style.boxShadow = '';
                feature.style.background = '';
            }, 1000);
        }, 4000 + (index * 800));
        
        // Efecto de brillo periódico
        setInterval(() => {
            feature.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.6)';
            feature.style.border = '1px solid rgba(59, 130, 246, 0.4)';
            setTimeout(() => {
                feature.style.boxShadow = '';
                feature.style.border = '';
            }, 1500);
        }, 7000 + (index * 1500));
    });

    // Animar tarjetas de planes con efectos más intensos
    const planCards = document.querySelectorAll('.plan-preview-card');
    planCards.forEach((card, index) => {
        // Efecto de flotación dramática
        setInterval(() => {
            card.style.transform = 'translateY(-15px) rotate(3deg) scale(1.05)';
            card.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.4)';
            card.style.filter = 'brightness(1.1)';
            setTimeout(() => {
                card.style.transform = 'translateY(0) rotate(0deg) scale(1)';
                card.style.boxShadow = '';
                card.style.filter = '';
            }, 1200);
        }, 5000 + (index * 1200));
        
        // Efecto de pulso energético
        setInterval(() => {
            const pulse = document.createElement('div');
            pulse.style.cssText = `
                position: absolute;
                top: -10px;
                left: -10px;
                right: -10px;
                bottom: -10px;
                border: 3px solid rgba(59, 130, 246, 0.5);
                border-radius: inherit;
                animation: cardPulse 2s ease-out forwards;
                pointer-events: none;
                z-index: -1;
            `;
            card.style.position = 'relative';
            card.appendChild(pulse);
            
            setTimeout(() => {
                if (card.contains(pulse)) {
                    card.removeChild(pulse);
                }
            }, 2000);
        }, 8000 + (index * 2500));
    });

    // Animar testimonios con efectos más dramáticos
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        // Efecto de deslizamiento dramático
        setInterval(() => {
            card.style.transform = 'translateX(-10px) scale(1.05) rotate(-1deg)';
            card.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.3)';
            setTimeout(() => {
                card.style.transform = 'translateX(10px) scale(1.05) rotate(1deg)';
                setTimeout(() => {
                    card.style.transform = 'translateX(0) scale(1) rotate(0deg)';
                    card.style.boxShadow = '';
                }, 600);
            }, 600);
        }, 7000 + (index * 1800));
        
        // Efecto de brillo periódico
        setInterval(() => {
            card.style.boxShadow = '0 0 40px rgba(59, 130, 246, 0.6)';
            card.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95))';
            setTimeout(() => {
                card.style.boxShadow = '';
                card.style.background = '';
            }, 2000);
        }, 10000 + (index * 3000));
    });

    // ========== EFECTOS DE HOVER DINÁMICOS ==========
    const cards = document.querySelectorAll('.feature, .plan-preview-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');
            card.classList.add('hover-effect');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover-effect');
        });
    });

    // ========== EFECTOS DE TEXTO TYPING ==========
    const typeWriter = (element, text, speed = 100) => {
        let i = 0;
        element.textContent = '';
        
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        
        type();
    };

    // ========== EFECTOS DE PARTÍCULAS INTENSIFICADOS ==========
    const createParticles = () => {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particles-container';
        document.body.appendChild(particleContainer);

        // Crear más partículas con diferentes tamaños y colores
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 4 + 1;
            const colors = ['#3b82f6', '#38bdf8', '#1e40af', '#60a5fa'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                opacity: ${Math.random() * 0.6 + 0.2};
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                animation: float ${3 + Math.random() * 8}s infinite linear;
                box-shadow: 0 0 ${size * 2}px ${color};
            `;
            particleContainer.appendChild(particle);
        }
        
        // Agregar partículas especiales que brillan
        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                background: radial-gradient(circle, #fff 0%, transparent 70%);
                border-radius: 50%;
                opacity: 0.8;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                animation: sparkle ${2 + Math.random() * 4}s infinite ease-in-out;
            `;
            particleContainer.appendChild(sparkle);
        }
    };

    // ========== EFECTOS DE LOADING DINÁMICO ==========
    const showLoadingEffect = (element, text = 'Cargando...') => {
        const loader = document.createElement('div');
        loader.className = 'dynamic-loader';
        loader.innerHTML = `
            <div class="loader-spinner"></div>
            <span class="loader-text">${text}</span>
        `;
        
        element.style.position = 'relative';
        element.appendChild(loader);
        
        setTimeout(() => {
            if (element.contains(loader)) {
                element.removeChild(loader);
            }
        }, 2000);
    };

    // ========== EFECTOS DE SCROLL REVEAL ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Animar contadores cuando sean visibles
                if (entry.target.classList.contains('coverage-stats')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    document.querySelectorAll('.animate-on-scroll, .coverage-stats').forEach(el => {
        observer.observe(el);
    });

    // ========== EFECTOS DE NAVEGACIÓN DINÁMICA ==========
    const navigationLinks = document.querySelectorAll('nav a');
    const pageSections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        pageSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navigationLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ========== EFECTOS DE BÚSQUEDA DINÁMICA ==========
    const searchInput = document.getElementById('cedula');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value.length > 0) {
                searchInput.style.borderColor = 'var(--primary-color)';
                searchInput.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
            } else {
                searchInput.style.borderColor = '#d1d5db';
                searchInput.style.boxShadow = 'none';
            }
        });
    }

    // ========== EFECTOS DE NOTIFICACIONES DINÁMICAS ==========
    const showNotification = (message, type = 'info', duration = 3000) => {
        const notification = document.createElement('div');
        notification.className = `dynamic-notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">&times;</button>
        `;
        
        document.body.appendChild(notification);
        
        // Animación de entrada
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Auto-remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, duration);
        
        // Cerrar manual
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        });
    };

    // ========== EFECTOS DE BOTONES DINÁMICOS ==========
    const clickableButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    
    clickableButtons.forEach(button => {
        button.addEventListener('click', function(e) {
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
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (this.contains(ripple)) {
                    this.removeChild(ripple);
                }
            }, 600);
        });
    });

    // ========== EFECTOS DE ONDAS DE ENERGÍA ==========
    const createEnergyWaves = () => {
        setInterval(() => {
            const sections = document.querySelectorAll('section');
            const randomSection = sections[Math.floor(Math.random() * sections.length)];
            
            if (randomSection) {
                const wave = document.createElement('div');
                wave.style.cssText = `
                    position: absolute;
                    width: 200px;
                    height: 200px;
                    border: 2px solid rgba(59, 130, 246, 0.3);
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    animation: energyWave 3s ease-out forwards;
                    pointer-events: none;
                    z-index: 1;
                `;
                
                randomSection.style.position = 'relative';
                randomSection.appendChild(wave);
                
                setTimeout(() => {
                    if (randomSection.contains(wave)) {
                        randomSection.removeChild(wave);
                    }
                }, 3000);
            }
        }, 8000);
    };

    // ========== EFECTOS DE BRILO EN TÍTULOS ==========
    const animateTitles = () => {
        const titles = document.querySelectorAll('h1, h2, h3');
        titles.forEach((title, index) => {
            setInterval(() => {
                title.style.textShadow = '0 0 20px rgba(59, 130, 246, 0.8)';
                title.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    title.style.textShadow = '';
                    title.style.transform = '';
                }, 1000);
            }, 10000 + (index * 2000));
        });
    };

    // ========== EFECTOS DE ROTACIÓN EN ELEMENTOS ==========
    const rotateElements = () => {
        const elements = document.querySelectorAll('.feature, .plan-preview-card, .testimonial-card');
        elements.forEach((element, index) => {
            setInterval(() => {
                element.style.transform = 'rotate(1deg)';
                setTimeout(() => {
                    element.style.transform = 'rotate(-1deg)';
                    setTimeout(() => {
                        element.style.transform = 'rotate(0deg)';
                    }, 500);
                }, 500);
            }, 15000 + (index * 3000));
        });
    };

    // ========== INICIALIZAR EFECTOS ==========
    createParticles();
    createEnergyWaves();
    animateTitles();
    rotateElements();
    
    // Hacer disponible la función de notificación globalmente
    window.showNotification = showNotification;
    window.showLoadingEffect = showLoadingEffect;
});

// CSS para efectos dinámicos
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    /* Animaciones del logo */
    .logo h1 {
        transition: all 0.3s ease;
    }
    
    /* Animaciones del icono wifi */
    @keyframes wifiPulse {
        0%, 100% { 
            transform: scale(1) rotate(0deg);
            color: var(--primary-color);
        }
        50% { 
            transform: scale(1.2) rotate(180deg);
            color: var(--accent-color);
        }
    }
    
    @keyframes wifiGlow {
        0%, 100% { 
            filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.5));
        }
        50% { 
            filter: drop-shadow(0 0 20px rgba(59, 130, 246, 1));
        }
    }
    
    /* Animaciones de ondas de energía */
    @keyframes energyPulse {
        0% { 
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% { 
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
        }
    }
    
    /* Animaciones de botones */
    @keyframes buttonPulse {
        0% { 
            transform: scale(0.8);
            opacity: 1;
        }
        100% { 
            transform: scale(1.2);
            opacity: 0;
        }
    }
    
    /* Animaciones de iconos */
    @keyframes iconGlow {
        0%, 100% { 
            filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.5));
        }
        50% { 
            filter: drop-shadow(0 0 20px rgba(59, 130, 246, 1));
        }
    }
    
    /* Animaciones de tarjetas */
    @keyframes cardPulse {
        0% { 
            transform: scale(0.9);
            opacity: 1;
        }
        100% { 
            transform: scale(1.1);
            opacity: 0;
        }
    }
    
    /* Animaciones de navegación */
    .navFloat {
        animation: navFloat 3s ease-in-out infinite;
    }
    
    @keyframes navFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-3px); }
    }
    
    /* Animaciones de iconos */
    @keyframes iconBounce {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-10px) scale(1.1); }
    }
    
    /* Animaciones de botones */
    .btn-primary, .btn-secondary {
        transition: all 0.3s ease;
    }
    
    /* Animaciones continuas para elementos */
    .hero-feature {
        transition: all 0.8s ease;
    }
    
    .feature {
        transition: all 0.5s ease;
    }
    
    .plan-preview-card {
        transition: all 0.6s ease;
    }
    
    .testimonial-card {
        transition: all 0.7s ease;
    }
    
    /* Animación de las partículas flotantes */
    @keyframes float {
        0% { 
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% { 
            opacity: 0.6;
        }
        90% { 
            opacity: 0.6;
        }
        100% { 
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    /* Animación de brillos especiales */
    @keyframes sparkle {
        0%, 100% { 
            transform: scale(0.5) rotate(0deg);
            opacity: 0;
        }
        50% { 
            transform: scale(1.5) rotate(180deg);
            opacity: 1;
        }
    }
    
    /* Animación de ondas de energía */
    @keyframes energyWave {
        0% { 
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% { 
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
        }
    }
    
    /* Animación de texto brillante */
    .hero h2, .coverage-info h3, .testimonials h3 {
        animation: textShine 4s ease-in-out infinite;
    }
    
    @keyframes textShine {
        0%, 100% { 
            filter: hue-rotate(0deg) brightness(1);
        }
        50% { 
            filter: hue-rotate(30deg) brightness(1.1);
        }
    }
    
    /* Animación de gradientes en botones */
    .btn-primary {
        background-size: 200% 200%;
        animation: gradientShift 4s ease infinite;
    }
    
    @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    
    /* Efectos de hover en tarjetas */
    .hover-effect {
        background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.1) 0%, transparent 50%);
        transition: all 0.3s ease;
    }
    
    /* Partículas flotantes */
    .particles-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-100px) rotate(180deg); }
    }
    
    /* Loader dinámico */
    .dynamic-loader {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 10;
        border-radius: inherit;
    }
    
    .loader-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f4f6;
        border-top: 4px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .loader-text {
        color: var(--text-color);
        font-weight: 500;
    }
    
    /* Notificaciones dinámicas */
    .dynamic-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        padding: 1rem 1.5rem;
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 1rem;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        border-left: 4px solid var(--primary-color);
    }
    
    .dynamic-notification.show {
        transform: translateX(0);
    }
    
    .dynamic-notification.notification-success {
        border-left-color: #10b981;
    }
    
    .dynamic-notification.notification-error {
        border-left-color: #ef4444;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        color: #6b7280;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        color: var(--text-color);
    }
    
    /* Efecto ripple en botones */
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Animaciones de revelado */
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .animate-on-scroll.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Efectos de scroll suave */
    html {
        scroll-behavior: smooth;
    }
    
    /* Efectos de hover mejorados */
    .feature:hover,
    .plan-preview-card:hover,
    .testimonial-card:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    /* Efectos de texto brillante */
    .hero h2,
    .coverage-info h3,
    .testimonials h3 {
        background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textShine 3s ease-in-out infinite;
    }
    
    @keyframes textShine {
        0%, 100% { filter: hue-rotate(0deg); }
        50% { filter: hue-rotate(30deg); }
    }
    
    /* Efectos de gradiente animado */
    .btn-primary,
    .btn-secondary:hover {
        background-size: 200% 200%;
        animation: gradientShift 3s ease infinite;
    }
    
    @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    
    /* Efectos de carga para imágenes */
    img {
        transition: opacity 0.3s ease;
    }
    
    img[loading="lazy"] {
        opacity: 0;
    }
    
    img[loading="lazy"].loaded {
        opacity: 1;
    }
    
    /* Efectos de scroll personalizado */
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(var(--primary-color), var(--accent-color));
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(var(--accent-color), var(--primary-color));
    }
`;
document.head.appendChild(dynamicStyles);
