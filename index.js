const list = document.querySelector(".list");
const textInput = document.querySelector("#todoInput");

function deletableItem() {
  document.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      item.setAttribute('class', 'strikeout text-blur-out');
      setTimeout(() => {
        item.remove();
      }, 2000);
    });
  });
}

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function create(e) {
  const newListItem = document.createElement("li");
  newListItem.innerText = textInput.value;
  newListItem.setAttribute('class', 'text-focus-in');
  list.appendChild(newListItem);
  textInput.value = "";
  deletableItem();
});

textInput.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    const newListItem = document.createElement("li");
    newListItem.innerText = textInput.value;
    newListItem.setAttribute('class', 'text-focus-in');
    list.appendChild(newListItem);
    textInput.value = "";
    deletableItem();
  }
});
