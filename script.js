if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);
document.addEventListener("DOMContentLoaded", () => {
    const splash = document.querySelector('.splash-text');
    const subtitle = document.querySelector('.subtitle');
    const bgMap = document.querySelector('.bg-map');
    const arrow = document.querySelector('.arrow');

    const text = "K.R.L. Research Lab";
    let i = 0;
    let typingTimer;
    let stopped = false;

    splash.textContent = "";

    function typeLetter() {
        if (stopped) return;
        if (i < text.length) {
            splash.textContent += text[i];
            i++;
            typingTimer = setTimeout(typeLetter, 135);
        } else {
            revealElements();
        }
    }

    function revealElements() {
        bgMap.style.opacity = "0.3";
        subtitle.style.opacity = "1";
        arrow.style.opacity = "1";
    }

    function finishIntro() {
        if(stopped) return; 
        stopped = true;
        clearTimeout(typingTimer);
        splash.textContent = text;
        revealElements();
    }

    typeLetter();

    ["click", "keydown", "touchstart"].forEach(evt => {
        window.addEventListener(evt, finishIntro, { once: true });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) finishIntro();
    }, { once: true });
});
