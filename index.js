// Navigation 
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

// Tabs

const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabContent)
})

let tabFocus = 0;

function changeTabFocus(event) {
    const keyLeft = 37;
    const keyRight = 39;

    if(event.keyCode === keyRight || event.keyCode === keyLeft) {
        tabs[tabFocus].setAttribute('tabindex', -1)

        if(event.keyCode === keyRight) {
            tabFocus++;
            if(tabFocus >= tabs.length) {
                tabFocus = 0;
            }
        } else {
            tabFocus--;
            if(tabFocus < 0) {
                tabFocus = tabs.length - 1;
            }
        }
    
        tabs[tabFocus].setAttribute('tabindex', 0);
        tabs[tabFocus].focus();
    }
    
}

function changeTabContent(event) {
    const targetTab = event.target;
    const targetContent = targetTab.getAttribute('aria-controls');
    const targetImage = targetTab.getAttribute('data-image');

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute('aria-selected', false);

    targetTab.setAttribute('aria-selected', true);

    hideContent(mainContainer, '[role="tabcontent"')
    showContent(mainContainer, targetContent)
    
    hideContent(mainContainer, '[role="tabimage"')
    showContent(mainContainer, targetImage)
}

function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, target) {
    parent
        .querySelector([`#${target}`])
        .removeAttribute('hidden');
}