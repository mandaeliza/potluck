// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// assign button
const assignButton = document.querySelector(".assign");
// items to assign
const assignedItems = document.querySelector(".assigned-items")


addGuestButton.addEventListener("click", function() {
    const guest = guestInput.value;
    // console.log(guest);
    if  (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
} 
    
});

const clearInput = function() {
        guestInput.value = "";
};

const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);   
};

const updateGuestCount = function () {
  let guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  let potluckItems = ["Peach and Prosciutto Bruschetta", "Veggie Nori Rolls", 
  "Tomato & Mozzarella Caprese Skewers", "Stuffed Peppadews with Parmesan & Salami", 
  "3-Cheese Tomato Tart", "Lemon Cream Icebox Cake", "Pesto Pasta Salad", 
  "Tangy Cucumber Salad", "White Gazpacho", "Mini Ice Cream Cakes", "Ice", "Plates and Cutlery"];
};

const allGuests = document.querySelectorAll(".guest-list li");
for (let guest of allGuests) {
  const randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
  const randomPotluckItem = putluckItems[randomPotluckIndex];
  const listItem = document.createElement("li");
  listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
  assignItems.append(listItem); 
};



