const tips = [
"Drink enough water before urine tests.",
"Fasting blood sugar requires 8–10 hours fasting.",
"Avoid heavy exercise before lipid profile test.",
"Carry previous reports for better diagnosis.",
"Stay hydrated before sample collection.",
];

let i = 0;

const tipElement = document.getElementById("tipText");

if (tipElement) {
    tipElement.classList.add("fade-tip");

    setInterval(() => {

        // Fade out
        tipElement.classList.add("fade-out");

        setTimeout(() => {
            i = (i + 1) % tips.length;
            tipElement.textContent = tips[i];

            // Fade in
            tipElement.classList.remove("fade-out");

        }, 800); // matches CSS transition time

    }, 6000); // Change tip every 6 seconds
}
