const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.todo-list');
const form = document.querySelector('.todoform');
const checkbox = document.querySelector('.check')


form.addEventListener("submit", addItem)
list.addEventListener("click", deleteItem)


function addItem(e){
	e.preventDefault()
	const item = document.createElement("li");
	const todoInput = document.getElementById('todo-input').value;
	const check = document.createElement('label')
	const checkbox = document.createElement('span')
	const checkInput = document.createElement('input')
	const dash = document.createElement('div');
	const text = document.createElement('div')	

	dash.className = "dash"
	checkbox.className = "checkbox"
	checkInput.type = 'checkbox'
	check.className = "check";
	item.className = "list-item"
	text.appendChild(document.createTextNode(todoInput))
	check.appendChild(checkInput)
	check.appendChild(checkbox)
	item.appendChild(text)
	text.appendChild(dash)
	item.appendChild(check)
	if (todoInput != ""){
		list.appendChild(item)
	}else{
		alert("Please enter a valid activity")
	}
}

function deleteItem(e){
	if (e.target.classList.contains("checkbox")){
		const listItem = e.target.parentElement;
		setTimeout(() => list.removeChild(listItem.parentElement), 2000)

	}	
	const dash = document.querySelector('.dash')
	dash.style.display = "block"
}
