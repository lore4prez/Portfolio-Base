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
const sections = document.querySelectorAll("section[id].content");

function scrollTracker() {
    const currentYScroll = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const id = section.getAttribute("id");
        const currentNavLink = document.querySelector(`.navbar a[href*="#${id}"]`);

        if (currentYScroll > sectionTop && currentYScroll <= sectionTop + sectionHeight) {
            currentNavLink.classList.add("active");
        } else {
            currentNavLink.classList.remove("active");
        }
    })
}

window.addEventListener("scroll", scrollTracker);


// A fun little interactive game
const teddyBear = document.querySelector("#my-teddy-bear");
const teddyMsg = document.querySelector("#bear-message");
const msgLine = document.querySelector("#bear-msg-line");

const msgList = [
    "Hello",
    "You found me!",
    "Hi, It's Me!",
    "Name's Kuma.",
    "Have you found my paws yet?",
    "They'll wave at you if you do.",
    "I love honey, do you have any?",
    "None? You can go.",
    "Why are you clicking again?",
    "You just can't leave me alone.",
    "Oh, It's you again.",
    "Still here?",
    "Okay."
];
let currentMsg = 1;
let len = msgList.length;

teddyBear.addEventListener("click", () => {
    currentMsg += 1;

    let msg = msgList[(currentMsg) % len];
    let msgLen = msg.length;

    if (msgLen <= 20) {
        msgLine.style.width = (msgLen * 15) + "px";
    } else {
        msgLine.style.width = "100%";
    }
    teddyMsg.textContent = msg;
})