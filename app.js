const inputs = [...document.querySelectorAll("input")];

inputs.forEach(input => {
    const label = input.previousElementSibling;
    const characters = label.textContent.split("");
    label.innerHTML = "";
    characters.forEach(char => {
        const span = `<span class="span">${char}</span>`
        label.innerHTML += span;
    })
});

const emailInput = document.getElementById("mail");
const passwordInput = document.getElementById("pass");

emailInput.addEventListener("focusin", () => {
    gsap.to(".mail span",{duration: .2 , top: "0px", ease: "power1", stagger: .05})
    emailInput.style.borderColor = "#ADD8E6"
    emailInput.previousElementSibling.style.color = "#ADD8E6";
});
emailInput.addEventListener("focusout", () => {
    gsap.to(".mail span",{duration: .2 , top: "25px", ease: "power1", stagger: .05})
    emailInput.style.borderColor = "white"
    emailInput.previousElementSibling.style.color = "white";
});


passwordInput.addEventListener("focusin", () => {
    gsap.to(".password span",{duration: .2 , top: "0px", ease: "power1", stagger: .05})
    passwordInput.style.borderColor = "#ADD8E6";
    passwordInput.previousElementSibling.style.color = "#ADD8E6";
});
passwordInput.addEventListener("focusout", () => {
    gsap.to(".password span",{duration: .2 , top: "25px", ease: "power1", stagger: .05})
    passwordInput.style.borderColor = "white";
    passwordInput.previousElementSibling.style.color = "white";
});




