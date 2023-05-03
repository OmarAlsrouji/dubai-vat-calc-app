// code to display current date and time
var date = new Date();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var n = date.getDay()
var day = daylist[n]
document.getElementById("day").textContent = day;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById("date").textContent = today;

// ==============================================================================//
// ========================sales input code======================================//
// ==============================================================================//
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");
var input5 = document.getElementById("input5");
var addButton_sales = document.getElementById("add_button_sales");
var myUL = document.getElementById("myUL");

addButton_sales.addEventListener("click", addSales);


input1.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addSales();
    }
  });
  input2.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      addSales();
    }
  });
  input3.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addExpense();
    }
  });
  input4.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addExpense();
    }
  });
  input5.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addExpense();
    }
  });  
function addSales() {
  var inputValue1 = input1.value;
  var inputValue2 = input2.value;

  // Create a new container element
  var log_container = document.createElement("div");
  log_container.classList.add("log_container");

  // Create a new element for the first input value
  var div1 = document.createElement("div");
  div1.classList.add("value-container");
  var inputText1 = document.createTextNode(inputValue1);
  div1.appendChild(inputText1);
  log_container.appendChild(div1);
  if(inputValue1 === "") {
    log_container.removeChild(div1);
  }

  // Create a new element for the second input value
  var div2 = document.createElement("div");
  div2.classList.add("value-container-sale");
  var inputText2 = document.createTextNode(inputValue2);
  div2.appendChild(inputText2);
  log_container.appendChild(div2);
  if(inputValue2 === "") {
    log_container.removeChild(div2);
  }

  // Add a delete button to the container
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete"); // Add the "delete" class to the button
  deleteButton.onclick = function() {
    log_container.remove();
  };
  log_container.appendChild(deleteButton);

  // Add the container to the log
  myUL.appendChild(log_container);

  // Clear the input fields
  input1.value = "";
  input2.value = "";

  //Add event listener to the delete button
  deleteButton.addEventListener("click", function () {
    this.parentElement.remove();
  });
}
function addExpense() {
    var inputValue3 = input3.value;
    var inputValue4 = "-" + input4.value;
    var inputValue5 = input5.value;

  // Create a new container element
  var log_container = document.createElement("div");
  log_container.classList.add("log_container");
  
  // Create a new element for third input valuee
  var div3 = document.createElement("div");
  div3.classList.add("value-container");
  var inputText3 = document.createTextNode(inputValue3);
  div3.appendChild(inputText3);
  log_container.appendChild(div3);
  if(inputValue3 === "") {
    log_container.removeChild(div3);
  }

  //Create a new element for thfourth input valuee 
  var div4 = document.createElement("div");
  div4.classList.add("value-container-expense");
  var inputText4 = document.createTextNode(inputValue4);
  div4.appendChild(inputText4);
  log_container.appendChild(div4);
  if(inputValue4 === "-") {
    log_container.removeChild(div4);
  }

  //Create a new element for the fifth input value
  var div5 = document.createElement("div");
  div5.classList.add("value-container");
  var inputText5 = document.createTextNode(inputValue5);
  div5.appendChild(inputText5);
  log_container.appendChild(div5);
  if(inputValue5 === "") {
    log_container.removeChild(div5);
  }
  
  // Add a delete button to the container
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete"); // Add the "delete" class to the button
  deleteButton.onclick = function() {
    log_container.remove();
  };
  log_container.appendChild(deleteButton);

  // Add the container to the log
  myUL.appendChild(log_container);

  // Clear the input fields
  
  input3.value = "";
  input4.value = "";
  input5.value = "";

  //Add event listener to the delete button
  deleteButton.addEventListener("click", function () {
    this.parentElement.remove();
  });
}

// let logout = document.getElementById("logout_button")
// logout.addEventListener("click",consolelogger)

// function consolelogger(){
//   console.log("sales array"+addedSales)
//   console.log("deleted sales array"+removedSale)
//   console.log("********************")
//   console.log("expenses array"+expensesData)
// } 






