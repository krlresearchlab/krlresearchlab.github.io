document.addEventListener("DOMContentLoaded", () => {
    const splash = document.querySelector('.splash-text');
    const subtitle = document.querySelector('.subtitle');
    const bgMap = document.querySelector('.bg-map');
    const arrow = document.querySelector('.arrow');

    // --- Typing Animation Logic ---
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

    // --- User Interaction Logic ---
    ["click", "keydown", "touchstart"].forEach(evt => {
        window.addEventListener(evt, finishIntro, { once: true });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) finishIntro();
    }, { once: true });

    // --- NEW: Scroll Spy Logic ---
    // This updates the URL hash as you scroll so refresh stays in the right spot
    const sections = document.querySelectorAll("section[id]");

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                // Update URL without jumping the page or breaking the back button
                history.replaceState(null, null, `#${id}`);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    sections.forEach((section) => {
        scrollObserver.observe(section);
    });
});