const language_warpper = document.querySelector('.language_wrapper');
const languages = language_warpper.querySelectorAll('.language[data-code]');
languages.forEach(lang => {
    lang.addEventListener('click', () => {
        languages.forEach(l => l.classList.remove('active'));
        lang.classList.add('active');
        language_warpper.dataset.lang = lang.dataset.code;
    })
});