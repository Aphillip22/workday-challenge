//please disregard earlier commits
//current day shows at top of page
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY h:mm a"));

var currentLocalStorage = JSON.parse(localStorage.getItem("taskInput")) || [];
currentLocalStorage.forEach(obj => {
    $("#"+ obj.id).val(obj.value);
})

var textBox = $(".row")

var hour = moment().hour()

textBox.each(i => {
    var id = parseInt($(textBox[i]).attr("id"));
    if (id === hour) {
        $(textBox[i]).addClass("present").removeClass("future past");
    } else if (id > hour) {
        $(textBox[i]).addClass("future").removeClass("present past");
    } else {
        $(textBox[i]).addClass("past").removeClass("present future");
    }
});

$(".saveBtn").on("click", function(e) {
    var value = ($($(this).parents()[0]).find(".text-box")[0].value);
    var id = ($($(this).parents()[0]).find(".text-box")[0].getAttribute("id"));
    currentLocalStorage.push({
        value, id
    })
    localStorage.setItem("taskInput", JSON.stringify(currentLocalStorage));
})
