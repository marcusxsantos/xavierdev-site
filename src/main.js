import { translations } from './translations.js';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

let currentLanguage = localStorage.getItem('language') || 'pt-BR';
let currentTheme = localStorage.getItem('theme') || 'light';

function initializeApp() {
    setTheme(currentTheme);
    setLanguage(currentLanguage);
    setupEventListeners();
    updateYear();
}

function setupEventListeners() {
    const themeToggle = document.getElementById('themeToggle');
    const languageSelector = document.getElementById('languageSelector');
    const contactForm = document.getElementById('contactForm');

    themeToggle.addEventListener('click', toggleTheme);

    if (languageSelector) {
        languageSelector.value = currentLanguage;
        languageSelector.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    contactForm.addEventListener('submit', handleFormSubmit);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
}

function setTheme(theme) {
    const html = document.documentElement;
    const themeIcon = document.querySelector('#themeToggle i');

    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
        themeIcon.classList.remove('bi-moon-fill');
        themeIcon.classList.add('bi-sun-fill');
    } else {
        themeIcon.classList.remove('bi-sun-fill');
        themeIcon.classList.add('bi-moon-fill');
    }
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

async function handleFormSubmit(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');
    const form = e.target;

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';
    formMessage.innerHTML = '';

    try {
        const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${supabaseAnonKey}`
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            formMessage.innerHTML = `<div class="alert alert-success">${translations[currentLanguage]['contact.form.success']}</div>`;
            form.reset();
        } else {
            throw new Error(data.error || 'Failed to send message');
        }
    } catch (error) {
        console.error('Error:', error);
        formMessage.innerHTML = `<div class="alert alert-danger">${translations[currentLanguage]['contact.form.error']}</div>`;
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span data-translate="contact.form.submit">${translations[currentLanguage]['contact.form.submit']}</span>`;
    }
}

function updateYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', initializeApp);
