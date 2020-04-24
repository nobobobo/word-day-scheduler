// get and display current day 

let d = new Date();
$("#currentDay").text("Today is: " + d.toDateString());

// get current hour 

let hr = d.getHours();


// create timeblock divs
for (let i = 9; i <= 17; i++) {
    let newDiv = $("<div>").addClass("row time-block")
    let timeElm = $("<p>").text(i + ":00").addClass("col-1 hour");
    let textAreaElm = $("<textarea>").addClass("col-10").attr("id", i);
    let saveBtn = $("<button>").text("Save").addClass("col-1 saveBtn").attr("btnId", i);

    // check current time to display corrensponding background color on textarea
    if (hr > i){
        textAreaElm.addClass("past");
    } else if (hr === i){
        textAreaElm.addClass("present");
    } else {
        textAreaElm.addClass("future");
    }

    // read textarea value from localstorage if it exists
    if (localStorage.getItem(i) !== null){
        textAreaElm.val(localStorage.getItem(i));
    }

    // append all elems to container div
    newDiv.append(timeElm, textAreaElm, saveBtn);
    $(".container").append(newDiv);
}


$(document).on("click",".saveBtn", saveSchedule);

// get current button's id and save corresponding textarea's value to local storage 
function saveSchedule(){
    let id = $(this).attr("btnId");
    localStorage.setItem(id, $("#"+id).val());
}