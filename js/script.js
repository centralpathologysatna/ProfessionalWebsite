function submitBooking() {
    alert("Booking submitted successfully (UI only)");
}

function toggleTests(button){

const card = button.closest(".service-card");

const extraTests = card.querySelectorAll(".extra-test");

extraTests.forEach(test => {

if(test.style.display === "list-item"){
test.style.display = "none";
button.innerText = "+ Show all";
}

else{
test.style.display = "list-item";
button.innerText = "Show less";
}

});

}
