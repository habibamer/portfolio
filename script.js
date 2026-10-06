const translations = {
    en: {
        "nav.about": "About",
        "nav.certificates": "Certificates",
        "nav.projects": "Projects",
        "nav.skills": "Skills",
        "nav.contact": "Contact",
        "hero.hello": "Hello, I'm Habib",
        "hero.sub": "Computer Science & Engineering Student",
        "hero.desc": "Exploring computer science and technology",
        "hero.btn": "View My Certificates",
        "about.title": "About Me",
        "certs.title": "Certificates",
        "projects.title": "Projects",
        "skills.title": "Skills & Technologies",
        "contact.title": "Contact Information"
    },
    ar: {
        "nav.about": "نبذة عني",
        "nav.certificates": "الشهادات",
        "nav.projects": "المشاريع",
        "nav.skills": "المهارات",
        "nav.contact": "التواصل",
        "hero.hello": "مرحباً، أنا حبيب",
        "hero.sub": "طالب علوم وحاسب وهندسة",
        "hero.desc": "أستكشف علوم الحاسوب والتكنولوجيا",
        "hero.btn": "عرض شهاداتي",
        "about.title": "نبذة عني",
        "certs.title": "الشهادات الأكاديمية",
        "projects.title": "المشاريع",
        "skills.title": "المهارات والتطبيقات",
        "contact.title": "معلومات التواصل"
    },
    ru: {
        "nav.about": "Обо мне",
        "nav.certificates": "Сертификаты",
        "nav.projects": "Проекты",
        "nav.skills": "Навыки",
        "nav.contact": "Контакты",
        "hero.hello": "Привет, я Хабиб",
        "hero.sub": "Студент компьютерных наук",
        "hero.desc": "Изучаю компьютерные науки и технологии",
        "hero.btn": "Посмотреть сертификаты",
        "about.title": "Обо мне",
        "certs.title": "Сертификаты",
        "projects.title": "Проекты",
        "skills.title": "Навыки и технологии",
        "contact.title": "Контактная информация"
    },
    es: {
        "nav.about": "Sobre mí",
        "nav.certificates": "Certificados",
        "nav.projects": "Proyectos",
        "nav.skills": "Habilidades",
        "nav.contact": "Contacto",
        "hero.hello": "Hola, soy Habib",
        "hero.sub": "Estudiante de Ciencias de la Computación",
        "hero.desc": "Explorando la informática y la tecnología",
        "hero.btn": "Ver mis certificados",
        "about.title": "Sobre mí",
        "certs.title": "Certificados",
        "projects.title": "Proyectos",
        "skills.title": "Habilidades y Tecnologías",
        "contact.title": "Información de contacto"
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('preferred_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    const savedLang = localStorage.getItem('preferred_lang') || 'en';
    
    langSelect.value = savedLang;
    changeLanguage(savedLang);

    langSelect.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });
});