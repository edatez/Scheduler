// Printing the current date to the top of the page. 
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
console.log(currentDay);

// Getting the current hour and format it.
var currentHour = moment().hour();
console.log(currentHour);

// Adding onclick event on the saveBtn to capture action  
/// Getting the value on the this element

// Button
var saveButtons = $('.saveBtn'),
    tasks = JSON.parse(localStorage.getItem('tasks')) || {};
console.log(tasks)


for (var textareaid in tasks) {    /// loop an object (for (var key in obj){  console.log(key, obj[key])})
    console.log(textareaid, tasks[textareaid])

    $("#" + textareaid).val(tasks[textareaid])
}

 // getting the current hour and changing the colors by adding existing css classes.
for (var i = 9; i < 18; i++) {
    if (i < currentHour) {
        $("#task-" + i).parent().addClass("past")
    } else if (i === currentHour) {
        $("#task-" + i).parent().addClass("present")
    } else {
        $("#task-" + i).parent().addClass("future")
    }
}



saveButtons.on('click', function () {

    //Referencing that specific button by calling 'this' inside of a shared call back function ,
    // console.log(this);
    // var myClickedButton=$(this)
    // console.log('click', this);
    // To associate the button with the hour:
    var buttonHour = $(this).data('hour');
    // the same data function works as a setter and you can add a second value to set the hour. this single one works to get the value. 
    // console.log(myClickedButton.data('hour'));
    // event.preventDefault();
    var taskInput = ($('#task-' + buttonHour));
    var taskValue = taskInput.val();
    tasks['task-' + buttonHour] = taskValue;
    console.log(tasks)
    // localStorage.setItem ('task-' +buttonHour, taskInput.val() ); 
    localStorage.setItem('tasks', JSON.stringify(tasks));
});

// show the info on the DOM

// var storedTasks = J
SON.parse(localStorage.getItem('tasks') );
// if (storedTasks ) {
//     tasks = storedTasks;
// }

// $("textarea").each(function(){
//     let i  = parseInt($(this).attr("id").split("-")[1])
//     if (i < currentHour) {
//         $(this).parent().addClass("past")
//     } else if (i === currentHour) {
//         $(this).parent().addClass("present")
//     } else {
//         $(this).parent().addClass("future")
//     }

// })

// Storing as an object and put it into local storage and how to get that back and reassign them for storage

// var myClickedButton=$(this);
// // data-hour
// console.log (data)
//     // Read an attribute from the element to determine the hour it's supposed to represent
//     var hour =$(this).attr("hour")
// // Grab user input 
// var text = $(this).siblings("textarea").val()
// // saving this info in the localstorage  {9:txt,10:txt}  // loclstorage
// $(".saveBtn").on("click", function (event){
//     event.preventDefault();
//     localStorage.setItem("text", JSON.stringify(textarea));
// })


// // Get the current hour of the day and compare with the hour blocks on the page
// /// * Determine if each hour block is past, present or future
// $('.saveBtn').on('click', function(){
//         let saveID = $(this).attr('hour');
//         let saveText = $(this).parent().siblings().children('.description').val();
//         localStorage.setItem(saveID, saveText);
//     });
// });

// $('.saveBtn').on('click', function(){
//     value = $(this).siblings("textarea").val();
//     hourString = $(this).siblings("div").text();
//     saveSchedule(hourString, value);
//   });


// // Select all the elements with the "hour-block" class and loop over each one.
// $('.hour-block').each(function() {
//     hourBlock.addClass('present');
//     var hourBlock = $(this);

// }










