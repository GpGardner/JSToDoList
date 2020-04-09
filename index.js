$(document).ready(deletableItem());

function deletableItem() {
  $("li").click(function () {
    $(this).addClass("strikeout text-blur-out");
    setTimeout(() => {
      $(this).remove();
    }, 1250);
  });
}

$("#submitBtn").click(function () {
  newItem();
});

$("#todoInput").keydown(function (event) {
  if (event.which == 13) {
    newItem();
  }
});

function newItem() {
  const adding = $("#todoInput").val();
  $(".list").append("<li>" + adding + "</li>");
  $("#todoInput").val("");
  deletableItem();
}
