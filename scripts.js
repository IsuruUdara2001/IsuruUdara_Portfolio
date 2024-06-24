// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form submitted!");
    });
});

// Add this to your scripts.js file or inside a <script> tag at the bottom of your HTML

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    const options = {
        threshold: 0.5 // Trigger animation when 50% of the section is in view
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Add this to your scripts.js file or inside a <script> tag at the bottom of your HTML

document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
});
// Add this to your scripts.js file or inside a <script> tag at the bottom of your HTML

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset();
                form.style.display = 'none';
                thankYouMessage.style.display = 'block';
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data['errors'].map(error => error['message']).join(", "));
                    } else {
                        alert('Oops! There was a problem submitting your form');
                    }
                });
            }
        }).catch(error => {
            alert('Oops! There was a problem submitting your form');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    const projects = document.querySelectorAll('.project');
    let currentProjectIndex = 0;

    function showProject(index) {
        projects.forEach((project, i) => {
            project.style.display = i === index ? 'block' : 'none';
        });
    }

    function navigateProjects(event) {
        if (event.type === 'click' || event.key === 'ArrowRight') {
            currentProjectIndex = (currentProjectIndex + 1) % projects.length;
            showProject(currentProjectIndex);
        } else if (event.key === 'ArrowLeft') {
            currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
            showProject(currentProjectIndex);
        }
    }

    document.addEventListener('keydown', navigateProjects);
    document.querySelector('.left-arrow').addEventListener('click', navigateProjects);
    document.querySelector('.right-arrow').addEventListener('click', navigateProjects);

    // Show the first project initially
    showProject(currentProjectIndex);
});

