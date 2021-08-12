var enter = document.getElementById("enter");
var input = document.getElementById("userinput");
var items = document.getElementById("items");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function deleteButton(listitem) {
	var button = document.createElement("button");
	button.innerHTML = "Delete";
	button.classList.add("donotcross");
	listitem.appendChild(button);
}

function deleteitems(event){
	var child = event.target;
	if(child.className === "donotcross"){
		child.parentNode.remove();
	}
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	deleteButton(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleList(event) {
	var target = event.target;
	if(target.className !== "donotcross") {
		target.classList.toggle("done");
	}
}

for(var i = 0; i < items.children.length; i++){
	var button = document.createElement("button");
	button.innerHTML = "Delete";
	button.classList.add("donotcross");
	var childitem = items.children[i];
	childitem.appendChild(button);

}


enter.addEventListener("click",addListAfterClick);

input.addEventListener("keydown", addListAfterKeypress);

items.addEventListener("click", toggleList);

items.addEventListener("click", deleteitems);