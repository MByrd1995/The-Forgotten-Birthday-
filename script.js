// =========================================
// THE FORGOTTEN BIRTHDAY
// GAME LOGIC OVERHAUL
// =========================================

const state = {
    meal: "",
    activity: ""
};

// -------------------------
// SCREEN HANDLER
// -------------------------

const screens = {
    intro: document.getElementById("intro"),
    title: document.getElementById("titleScreen"),
    main: document.getElementById("mainQuest"),
    side: document.getElementById("sideQuest"),
    reward: document.getElementById("rewardScreen"),
    treasure: document.getElementById("treasureScreen"),
    accepted: document.getElementById("acceptedScreen")
};

function showScreen(screen) {

    // fade out all screens first
    Object.values(screens).forEach(s => {
        s.classList.remove("active");
    });

    // small delay makes it feel like a scene transition
    setTimeout(() => {
        screen.classList.add("active");
    }, 150);
}
}

// -------------------------
// FIRELIGHT PARTICLES
// -------------------------

const particles = document.getElementById("particles");

function spawnFireflies() {
    for (let i = 0; i < 70; i++) {
        const f = document.createElement("div");
        f.className = "firefly";

        f.style.left = Math.random() * 100 + "vw";
        f.style.animationDuration = (6 + Math.random() * 8) + "s";
        f.style.animationDelay = Math.random() * 5 + "s";

        particles.appendChild(f);
    }
}

// -------------------------
// TYPEWRITER
// -------------------------

function typeText(element, text, speed = 30) {
    let i = 0;
    element.textContent = "";

    function type() {
        if (i < text.length) {
            element.textContent += text[i];
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// -------------------------
// INTRO FLOW
// -------------------------

window.addEventListener("load", () => {
    spawnFireflies();

    const introStory = document.getElementById("introStory");

    typeText(
        introStory,
`A strange energy fills the air...

A forgotten promise still lingers...

Only one hero has been chosen...`
    );
});

// Continue intro → title screen
document.getElementById("continueIntro").addEventListener("click", () => {
    showScreen(screens.title);
});

// -------------------------
// TITLE → STORY
// -------------------------

document.getElementById("startQuest").addEventListener("click", () => {
    showScreen(screens.main);
});

// -------------------------
// MAIN QUEST
// -------------------------

document.querySelectorAll(".meal").forEach(btn => {
    btn.addEventListener("click", () => {
        state.meal = btn.dataset.value;
        showScreen(screens.side);
    });
});

// -------------------------
// SIDE QUEST
// -------------------------

document.querySelectorAll(".activity").forEach(btn => {
    btn.addEventListener("click", () => {
        state.activity = btn.dataset.value;

        const summary = document.getElementById("summary");

        summary.innerHTML = `
            <p><strong>Main Quest:</strong></p>
            <p>${state.meal}</p>
            <br>
            <p><strong>Side Quest:</strong></p>
            <p>${state.activity}</p>
        `;

        showScreen(screens.reward);
    });
});

// -------------------------
// ACCEPT QUEST → TREASURE CHEST
// -------------------------

document.getElementById("acceptQuest").addEventListener("click", () => {
    showScreen(screens.treasure);
});

// -------------------------
// TREASURE CHEST REVEAL
// -------------------------

document.getElementById("treasureChest").addEventListener("click", () => {

    const final = document.getElementById("finalSummary");

    final.innerHTML = `
        <p><strong>Your Quest Path:</strong></p>
        <p>${state.meal}</p>
        <p>${state.activity}</p>
    `;

    showScreen(screens.accepted);
});
