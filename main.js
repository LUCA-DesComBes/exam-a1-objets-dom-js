const citationPara = document.getElementById("citation");
const namePara = document.getElementById("auteur");
const originePara = document.getElementById("origine");
const dateSpan = document.getElementById("date");
const changeBtn = document.getElementById("change");
const bodyContainer = document.body;

let second = 0;

let globalData = [];

let timer = setInterval(() => {
	second++;
	console.log(second);
	if (second === 10) {
		changeElement()
		second = 0
	}
}, 1000);

let i = 0;

function changeElement() {
	if (i < globalData.length - 1) {
		i++;
	} else {
		i = 0;
	}
	console.log(i);

	citationPara.textContent = globalData[i].citation;
	namePara.textContent = globalData[i].auteur;
	originePara.textContent = globalData[i].origine;
	dateSpan.textContent = globalData[i].date;
	bodyContainer.style.backgroundColor = globalData[i].couleurDeFond;
	changeBtn.style.backgroundColor = globalData[i].couleurDeLaPolice;
}

fetch("./data.json")
	.then((response) => response.json())
	.then((data) => {
		globalData = data;
	});

changeBtn.addEventListener("click", changeElement);
