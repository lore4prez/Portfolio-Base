// How to handle contact reach out to me form 
const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const msgEl = document.querySelector('#message');
const sendMsgBtn = document.querySelector('#send-msg-btn');

sendMsgBtn.addEventListener("click", () => {
    let senderName = nameEl.value;
    let senderEmail = emailEl.value;
    let senderMsg = msgEl.value;

    // obviously temporary since there is no server/backend
    if (!senderName || !senderEmail || !senderMsg) {
        alert("Input(s) cannot be empty.");
    } else {
        alert(`Your message "${senderMsg}" has been sent! \n\n Name: ${senderName} \n Email: ${senderEmail}`);
    }
})

// active navigation link on scroll
// const sections = document.querySelectorAll("section[id].nav-content");

// function scrollTracker() {
//     const currentYScroll = window.scrollY;

//     sections.forEach((section) => {
//         const sectionHeight = section.offsetHeight;
//         const sectionTop = section.offsetTop - 100;
//         const id = section.getAttribute("id");
//         const currentNavLink = document.querySelector(`.navbar a[href*="#${id}"]`);

//         if (currentYScroll > sectionTop && currentYScroll <= sectionTop + sectionHeight) {
//             currentNavLink.classList.add("active");
//         } else {
//             currentNavLink.classList.remove("active");
//         }
//     })
// }

// window.addEventListener("scroll", scrollTracker);

// active navigation link on scroll (newer than above)
const observerNav = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const id = entry.target.id;
        const navLink = document.querySelector(`.nav-link[data-target="${id}"]`);

        if (entry.isIntersecting) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
}, {
    threshold: 0.31
});

const mainContents = document.querySelectorAll(".nav-content");
mainContents.forEach((section) => observerNav.observe(section));

// A fun little interactive game
const teddyBear = document.querySelector("#my-teddy-bear");
const teddyMsg = document.querySelector("#bear-message");
const msgLine = document.querySelector("#bear-msg-line");

const msgList = [
    "Hello There!",
    "You found me!",
    "Hi, It's Me!",
    "Name's Kuma.",
    "Not original, right?",
    "Look for my paws.",
    "I love honey.",
    "Do you have any?",
    "None? You can go.",
    "Clicking again?",
    "...",
    "Leave me alone.",
    "Oh, It's you again.",
    "Still no honey?",
    "Okay, bye.",
];
let currentMsg = 1;
let len = msgList.length;

teddyBear.addEventListener("click", () => {
    currentMsg += 1;
    let msg = msgList[(currentMsg) % len];
    teddyMsg.textContent = msg;

    msgLine.style.width = teddyMsg.offsetWidth + "px";

})

// To have the line underneath about me to match its size, as well as the first Hello Msg in about page 
const aboutMeTextEl = document.querySelector("#about-me");
const aboutMeLineEl = document.querySelector("#about-me-line");
window.addEventListener("DOMContentLoaded", () => {
    msgLine.style.width = teddyMsg.offsetWidth + "px";
    aboutMeLineEl.style.width = aboutMeTextEl.offsetWidth + "px";
});

// transition for the profile info after DOM loads
window.addEventListener('DOMContentLoaded', () => {
    const profileInfo = document.querySelector("#profile-container");
    const about = document.querySelector("#about");
    profileInfo.classList.remove('opacity-0', '-translate-x-20');
    profileInfo.classList.add('opacity-100', 'translate-x-0');
    about.classList.remove('opacity-0', '-translate-y-20');
    about.classList.add('opacity-100', 'translate-y-0');
});


// animate on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll(".content");
hiddenElements.forEach((el) => observer.observe(el));


// change animation delay of each project 
const projects = document.querySelectorAll(".project");

projects.forEach((project, index) => {
    if (!(index === 1)) {
        project.classList.add("delay-" + (220*index));
    }
})