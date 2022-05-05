const container = document.querySelector(".container");
const box = document.querySelector(".box");
const btn = document.querySelector(".btn");
var c = 0
var rowNum;
var columnNum;

btn.addEventListener("click", () => {
	clearGrid();
	rowNum = Number(prompt("Enter grid size"));
    columnNum = rowNum
	grid(rowNum, columnNum);
});

function grid(row, column) {
	for (let c = 0, r = 0; c < column; r++) {
		if (r < row) {
			var col = document.querySelector(".col" + `${c}`);
			const div = document.createElement("div");
			div.classList.add("box");
			div.addEventListener("mouseover", (e) => {
				div.style.backgroundColor = "black";
			});
			col.appendChild(div);
			console.log(`r = ${r}`);
		} else {
			r = -1;
			c += 1;
			newCol = document.createElement("div");
			newCol.classList.add("col");
			newCol.classList.add("col" + `${c}`);
			container.appendChild(newCol);
			console.log(`c = ${c}`);
		}
	}
}

function clearGrid() {
	container.innerHTML = "";
	newCol = document.createElement("div");
	newCol.classList.add("col");
	newCol.classList.add("col" + `${c}`);
	container.appendChild(newCol);
}