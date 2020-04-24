// get and display current day 
$("#currentDay").text("Today is: " + moment().format("MMMM Do YYYY"));

// get current hour 

let hr = moment().format('HH');


// create timeblock divs
for (let i = 9; i <= 17; i++) {
    let newDiv = $("<div>").addClass("row time-block")
    let timeElm = $("<p>").text(moment(i, "HH").format("h:00 A")).addClass("col-1 hour");
    let textAreaElm = $("<textarea>").addClass("col-10").attr("id", i);
    let saveBtn = $("<button>").addClass("col-1 saveBtn").attr("btnId", i);
    let icon = $("<i>").addClass("far fa-save ");
    // <i class="far fa-save"></i>
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
    saveBtn.append(icon);
    newDiv.append(timeElm, textAreaElm, saveBtn);
    $(".container").append(newDiv);
}


$(document).on("click",".saveBtn", saveSchedule);

// get current button's id and save corresponding textarea's value to local storage 
function saveSchedule(){
    let id = $(this).attr("btnId");
    localStorage.setItem(id, $("#"+id).val());
    alert(id+ ":00 Saved!");
}