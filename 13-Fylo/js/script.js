const themeToggle = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if(
    localStorage.getItem('color-theme') === 'dark' || 
    (!('color-theme' in localStorage) && 
    window.matchMedia('(prefers-color-scheme: dark)').matches)){
    // Show light icon
    themeToggleLightIcon.classList.remove('hidden')
    } 
    else {
        themeToggleDarkIcon.classList.remove('hidden')
    }

themeToggle.addEventListener('click', toggleMode)

function toggleMode() {
    // Toggle Icon
    themeToggleDarkIcon.classList.toggle('hidden')
    themeToggleLightIcon.classList.toggle('hidden')

    if(localStorage.getItem('color-theme')) {
        // If light, make save dark and store in localStorage
        if(localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        }
    }
}