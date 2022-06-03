const input = document.querySelector("#newItemInput");
console.log("hi");

input.addEventListener("keydown", event => {
  if(event.keyCode === 13){
    addItemToList();
  }
})

function addItemToList() {
  const inputVal = input.value;
  const listDiv = document.querySelector("#listItems");
  const para = document.createElement("p");
  const node = document.createTextNode(inputVal);
  para.append(node)
  listDiv.append(para);
}

function removeItemFromList() {

}
