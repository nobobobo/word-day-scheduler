// get and display current day 

let d = new Date();
$("#currentDay").text("Today is: " + d.toDateString());

// get current hour 

let hr = 12;
//d.getHours();


// create timeblock divs

for (let i = 9; i <= 17; i++) {
    let newDiv = $("<div>").addClass("row time-block")
    let timeElm = $("<p>").text(i + ":00").addClass("col-1 hour");
    let textAreaElm = $("<textarea>").addClass("col-10").attr("id", i);
    let saveBtn = $("<button>").text("Save").addClass("col-1 saveBtn").attr("btnId", i);

    if (hr > i){
        textAreaElm.addClass("past");
    } else if (hr === i){
        textAreaElm.addClass("present");
    } else {
        textAreaElm.addClass("future");
    }

    newDiv.append(timeElm, textAreaElm, saveBtn);
    $(".container").append(newDiv);
}


$(document).on("click",".saveBtn", saveSchedule);


function saveSchedule(){
    //alert($(this).attr("btnId"));
    //console.log($("#"+$(this).attr("btnId")))
}