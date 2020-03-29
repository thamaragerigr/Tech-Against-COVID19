var quiz = document.getElementById("quiz");
var ques = document.getElementById("question");
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var opt4 = document.getElementById("option4");
var res = document.getElementById("result");
var nextButton = document.getElementById("next");
var q = document.getElementById('quit');

var totalPreguntas = preguntas.length;
var puntuacion = 0;
var indexPregunta = 0;
var numPregunta = 1;
var totalNumPreguntas = 5;

function quit() {         
	quiz.style.display = 'none';
	result.style.display = '';
	var f = puntuacion/totalNumPreguntas;
	result.textContent = "Puntuación =" + f*100;
	q.style.display = "none";
}

function give_ques(index) {
	ques.textContent = numPregunta+". "+preguntas[index][0];
	opt1.textContent = preguntas[index][1];
	opt2.textContent = preguntas[index][2];
	opt3.textContent = preguntas[index][3];
	opt4.textContent = preguntas[index][4];
	return;
};

give_ques(indexPregunta);


function nextques() {
	var resSeleccionada= document.querySelector('input[type=radio]:checked');
	if (!resSeleccionada) {
		alert("SELECT AN OPTION");
		return;
	}

	if(resSeleccionada.value==preguntas[indexPregunta][5]){
		puntuacion+=1;
	}

	numPregunta++;
	resSeleccionada.checked = false;
	indexPregunta = Math.floor(Math.random() * totalPreguntas);
	
	console.log(`indexPregunta ${indexPregunta}, numPregunta ${numPregunta}`)

	if(numPregunta == totalNumPreguntas) {
		console.log(`Finished: indexPregunta ${indexPregunta}, numPregunta ${numPregunta}`)
		nextButton.textContent = "Finish";
	}
	     	
	if (numPregunta == (totalNumPreguntas+1)) {
	var f = puntuacion/totalNumPreguntas;
	q.style.display = 'none';
	quiz.style.display = 'none';
	result.style.display = '';
	result.textContent = "Puntuación:"+(f*100).toFixed(2)+"%";
	return;
	}

	give_ques(indexPregunta);
}
