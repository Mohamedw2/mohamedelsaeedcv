// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight active section in the navigation menu
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active class styling for navigation
document.querySelector('nav ul li a').classList.add('active');

// Toggle dark mode
const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'الوضع المظلم'; // النص الأول عند تحميل الصفحة
darkModeButton.style.position = 'fixed';
darkModeButton.style.bottom = '20px';
darkModeButton.style.right = '20px';
darkModeButton.style.padding = '10px 15px';
darkModeButton.style.background = '#007bff';
darkModeButton.style.color = 'white';
darkModeButton.style.border = 'none';
darkModeButton.style.cursor = 'pointer';
darkModeButton.style.borderRadius = '5px';
document.body.appendChild(darkModeButton);

// عند الضغط على الزر، تبديل الوضع المظلم والنص
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // تغيير النص حسب الوضع الحالي
    if (document.body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'الوضع النهاري'; // تغيير النص عندما يكون في الوضع المظلم
    } else {
        darkModeButton.textContent = 'الوضع المظلم'; // تغيير النص عندما يكون في الوضع النهاري
    }
});

// إضافة تنسيق الوضع المظلم بشكل ديناميكي
const darkModeStyles = `
    body.dark-mode {
        background-color: #121212;
        color:rgb(8, 8, 8);
    }
    body.dark-mode nav {
        background-color: #333;
    }
    body.dark-mode footer {
        background-color: #333;
    }
    body.dark-mode header {
        background-color: #444;
    }
    body.dark-mode nav ul li a {
        color: white;
    }
`;
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);

// Show "Back to Top" button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆ العودة لأعلي';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '80px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.background = '#007bff';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Animate sections on scroll
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    },
    { threshold: 0.5 }
);

sections.forEach(section => {
    observer.observe(section);
});
const whatsappButton = document.getElementById('whatsappButton');
const yourPhoneNumber = '201010759033';  // استبدل برقم هاتفك بدون فواصل

whatsappButton.addEventListener('click', () => {
    const whatsappURL = `https://wa.me/${yourPhoneNumber}`;
    window.open(whatsappURL, '_blank'); // فتح الرابط في نافذة جديدة
});
document.getElementById('facebookButton').addEventListener('click', () => {
    window.open('https://www.facebook.com/100001705257626', '_blank');
});
document.getElementById('behanceButton').addEventListener('click', () => {
    window.open('https://www.behance.net/mohamedabdelha10', '_blank');
});
document.getElementById('officialSiteButton').addEventListener('click', () => {
    window.open('https://mohamed-elsaeed-abd-elhafez.site123.me/', '_blank');
});




// Language Switcher
const languageButton = document.createElement('button');
languageButton.textContent = 'Change to Arabic'; // Initial text in English
languageButton.style.position = 'fixed';
languageButton.style.top = '20px';
languageButton.style.right = '20px';
languageButton.style.padding = '10px 15px';
languageButton.style.background = '#007bff';
languageButton.style.color = 'white';
languageButton.style.border = 'none';
languageButton.style.cursor = 'pointer';
languageButton.style.borderRadius = '5px';



