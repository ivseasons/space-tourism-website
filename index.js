const toggleBtn = document.getElementById('open-btn');
const nav = document.getElementById('primary-navigation');
const changeAria = document.getElementById('aria')


toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-transform');
    toggleBtn.classList.toggle('change-background');

    const visibility = toggleBtn.getAttribute('data-visible');
    if(visibility === "false") {
        toggleBtn.setAttribute('data-visible', true)
        changeAria.setAttribute('aria-expanded', true)
    } else {
        toggleBtn.setAttribute('data-visible', false)
        changeAria.setAttribute('aria-expanded', false)
    }
})