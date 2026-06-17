const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar');
const themeToggle = document.querySelector('#theme-toggle');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.navbar a');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggle.classList.remove('bx-moon');
        themeToggle.classList.add('bx-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.classList.remove('bx-sun');
        themeToggle.classList.add('bx-moon');
        localStorage.setItem('theme', 'light');
    }
});

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.classList.remove('bx-moon');
    themeToggle.classList.add('bx-sun');
}

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 80);

    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');

                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});