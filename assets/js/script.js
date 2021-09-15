//Discussed this challenge with TA/tutor and informed him that I accidentally submitted the wrong folder of code to github
//This is what I had written myself and I understand it is not working fully
//Previous commits will have the history of plagiarism that has already been flagged and discussed
//Will resubmit with fully working code when I have time to complete it, please grade as-is for now
//please disregard earlier commits
//current day shows at top of page
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY h:mm a"));

// create object array to save for localStorage
var hours = {
    "9am":[],
    "10am":[],
    "11am":[],
    "12pm":[],
    "1pm":[],
    "2pm":[],
    "3pm":[],
    "4pm":[],
    "5pm":[],
};
//function saveOnClick(){}
function addToLocalStorage(hours) {
    var task = document.getElementById(".text-box").value;
    console.log(task);
    document.getElementById("saveBtn").addEventListener("click", addToLocalStorage(hours));
    // get input from localStorage
    var taskInput = JSON.parse(localStorage.getItem("task"));
    if (taskInput) {
        hours = taskInput

        // create task
        $.each(hours, function(hour, task) {
            var eachHour = $("#" + hour);
            createTask(task, eachHour);
        })

        // audit for current time
        auditTime()
    }
    //save input to localStorage
    localStorage.setItem("hours", JSON.stringify(hours));
};
// audit time function
var auditTime = function () {
    var currentHour = moment().hour();
    $(".task-details").each(function() {
        var hourEl = parseInt($(this).attr("id"));
        if (hourEl < currentHour) {
            $(this).removeClass(["present", "future"]).addClass("past");
        } else if (hourEl === currentHour) {
            $(this).removeClass(["past", "future"]).addClass("present");
        } else {
            $(this).removeClass(["past", "present"]).addClass("future");
        }
    })
}

// save tasks function
var createTask = function(taskText, taskList) {
    var taskLi = $("<li>").addClass("list-group-item");
  
    var taskSpan = $("<span>")
      .addClass("badge badge-primary badge-pill")
      .text(taskDate);
  
    var taskP = $("<p>")
      .addClass("description")
      .text(taskText);
  
    // append span and p element to parent li
    taskLi.append(taskSpan, taskP);
  
  
    // append to ul list on the page
    $("#list-" + taskList).append(taskLi);
  };

// input task text using .textContent
var replaceText = function(textEl) {
    var taskDetails = textEl.closest(".task-details");
    var textArea = taskDetails.find("textarea");
    var time = eachTask.attr("id");
    var text = textArea.val().trim();
    hours[time] = [text];
    hoursSet();
    saveTask(text, taskDetails);

}
// Add Event Listeners

// task entry
$(".task-input").click(function() {
    $("textbox").each(function() {
        textAreaEl($(this));
    })
    var time = $(this).closest(".task-input").attr("id");
    if (parseInt(time) >= moment().hour()) {
        var text = $(this).text();
        var textDiv = $("<Textarea>")
            .addClass("form-control")
            .val(text);
        
            $(this).html(textDiv);
            textDiv.trigger("focus");
    }
})

// update tasks on the hour
timeToHour = 3600000 - today.milliseconds();
setTimeout(function() {
    setInterval(auditTasks, 3600000)
}, timeToHour);
