const tips = [
"Drink enough water before urine tests.",
"Fasting blood sugar requires 8–10 hours fasting.",
"Avoid heavy exercise before lipid profile test.",
"Carry previous reports for better diagnosis.",
"Stay hydrated before sample collection.",
"Do not consume alcohol 24 hours before liver function tests.",
"Avoid taking biotin supplements before thyroid tests unless advised.",
"Morning samples are preferred for hormone tests for accurate results.",
"Inform the lab about any medicines you are currently taking.",
"Do not smoke at least 1 hour before blood tests.",
"Complete urine sample should be midstream for best accuracy.",
"Get enough sleep before hormone and cortisol tests.",
"Avoid fatty meals before lipid profile testing.",
"Women should mention pregnancy before X-ray or certain tests.",
"Drink normal water before blood tests unless fasting is instructed.",
"Stop vitamin supplements 12 hours before some blood investigations.",
"Collect early morning sputum sample for better infection detection.",
"Reach 10 minutes early to rest before blood pressure related tests.",
"Repeat tests at same lab for consistent comparison of results.",
"Carry doctor prescription to avoid unnecessary repeat testing."
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
