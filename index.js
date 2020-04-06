var list = document.querySelector(".list");
var textInput = document.querySelector("#todoInput");

document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("strikeout");
    setTimeout(() => {
      item.remove();
    }, 2000);
  });
});

var submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function (e) {
  var newListItem = document.createElement("li");
  newListItem.innerText = textInput.value;
  list.appendChild(newListItem);
  textInput.value = "";
});
