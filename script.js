let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

let count =0 

function increment() {
	count += 1
	countEl.textContent = count
}

function save() {
	let countStr = count + " - "
	saveEl.textContent += countStr //human readable
	countEl.textContent = 0
	count = 0
	//console.log(count)
	console.log("Let's count people on the subway")
}
