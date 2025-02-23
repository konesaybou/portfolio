// Script to switch between two texts
const textSwitcher = () => {
    const element = document.getElementById('switch-text');
    if (element) {
        element.textContent = element.textContent === 'Développeur Informatique'
            ? 'Employé Polyvalent'
            : 'Développeur Informatique';
    }
};

// Switch text every 3 seconds
setInterval(textSwitcher, 3000);
