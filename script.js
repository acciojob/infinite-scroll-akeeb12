//your code here!

const list = document.getElementById("infi-list");

function addListItems(count) {
	for(let i = 0; i < count; i++)
		{
	const listItem = document.createElement("li");
	listItem.textContent = `Item ${i + 1}`;
	list.appendChild(listItem);
	}
}

addListItems(10);