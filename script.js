// =====================================
// The Forgotten Birthday
// Adventure Logic
// =====================================

const state = {
    meal: "",
    activity: ""
};

// ----------------------------
// Screen Navigation
// ----------------------------

const screens = {
    title: document.getElementById("titleScreen"),
    main: document.getElementById("mainQuest"),
    side: document.getElementById("sideQuest"),
    reward: document.getElementById("rewardScreen"),
    accepted: document.getElementById("acceptedScreen")
};

function showScreen(screen) {

    Object.values(screens).forEach(s => {

        s.classList.remove("active");

    });

    screen.classList.add("active");

}

// ----------------------------
// Fireflies
// ----------------------------

const particleContainer = document.getElementById("particles");

for(let i = 0; i < 80; i++){

    const firefly = document.createElement("div");

    firefly.className = "firefly";

    firefly.style.left = Math.random()*100 + "vw";

    firefly.style.animationDuration =
        (6 + Math.random()*8) + "s";

    firefly.style.animationDelay =
        Math.random()*8 + "s";

    particleContainer.appendChild(firefly);

}

// ----------------------------
// Begin Quest
// ----------------------------

document
.getElementById("startBtn")
.addEventListener("click",()=>{

    showScreen(screens.main);

});

// ----------------------------
// Main Quest
// ----------------------------

document
.querySelectorAll(".choice")
.forEach(button=>{

    button.addEventListener("click",()=>{

        state.meal = button.dataset.value;

        showScreen(screens.side);

    });

});

// ----------------------------
// Side Quest
// ----------------------------

document
.querySelectorAll(".activity")
.forEach(button=>{

    button.addEventListener("click",()=>{

        state.activity = button.dataset.value;

        const summary = document.getElementById("summary");

        summary.innerHTML = `

            <p><strong>Main Quest</strong></p>

            <p>${state.meal}</p>

            <br>

            <p><strong>Side Quest</strong></p>

            <p>${state.activity}</p>

        `;

        showScreen(screens.reward);

    });

});

// ----------------------------
// Accept Quest
// ----------------------------

document
.getElementById("acceptQuest")
.addEventListener("click",()=>{

    const finalSummary =
        document.getElementById("finalSummary");

    finalSummary.innerHTML = `

        <h2>Quest Accepted ✔</h2>

        <br>

        <p><strong>Main Quest</strong></p>

        <p>${state.meal}</p>

        <br>

        <p><strong>Side Quest</strong></p>

        <p>${state.activity}</p>

    `;

    showScreen(screens.accepted);

});
