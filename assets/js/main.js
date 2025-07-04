// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function toggleTheme() {
    document.documentElement.classList.toggle('dark-theme');
    const isDark = document.documentElement.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = `<i class="fas fa-${isDark ? 'sun' : 'moon'}"></i>`;
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    document.documentElement.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', toggleTheme);

// Mobile Navigation
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            navMenu.classList.remove('active');
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
});

// Project Cards Data
const projects = [
    {
        title: 'Portfolio Website',
        description: 'Modern portfolio website built with HTML5, CSS3, and JavaScript. Features responsive design and smooth animations.',
        image: 'portfolio_project_ss.jpg',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        github: 'https://github.com/sn-singh/sn-singh.github.io',
        demo: '#'
    },
    {
        title: 'Connect 4 Game',
        description: 'Interactive Connect 4 game built with JavaFX. Features a clean UI and challenging computer opponent.',
        image: 'connect4_project.jpg',
        tags: ['Java', 'JavaFX', 'Game Development'],
        github: 'https://github.com/sn-singh/connect-4',
        demo: '#'
    }
    // Add more projects here
];

// Render Project Cards
const projectsGrid = document.querySelector('.projects__grid');
projects.forEach(project => {
    const projectCard = document.createElement('article');
    projectCard.className = 'project-card';
    projectCard.setAttribute('data-aos', 'fade-up');
    
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-card__image">
        <div class="project-card__content">
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__description">${project.description}</p>
            <div class="project-card__tags">
                ${project.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
            </div>
            <div class="hero__buttons">
                <a href="${project.github}" target="_blank" rel="noopener" class="button button--primary">
                    <i class="fab fa-github"></i> View Code
                </a>
                ${project.demo !== '#' ? `
                    <a href="${project.demo}" target="_blank" rel="noopener" class="button button--secondary">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thanks for your message! I\'ll get back to you soon.');
    contactForm.reset();
}); 