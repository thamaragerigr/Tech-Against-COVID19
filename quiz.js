var quiz=document.getElementById("quiz");
var ques= document.getElementById("question");
var opt1=document.getElementById("option1");
var opt2=document.getElementById("option2");
var opt3=document.getElementById("option3");
var opt4=document.getElementById("option4");
var res=document.getElementById("result");
var nextButton= document.getElementById("next");
var q=document.getElementById('quit');

var totalPreguntas=preguntas.length;
var puntuacion=0;
var indexPregunta=0;

function quit() {         
	quiz.style.display='none';
	result.style.display='';
	var f=puntuacion/totalPreguntas;
	result.textContent="Puntuación ="+f*100;
	q.style.display="none";
}

function give_ques(indexPregunta) {
	ques.textContent=indexPregunta+1+". "+preguntas[indexPregunta][0];
	opt1.textContent=preguntas[indexPregunta][1];
	opt2.textContent=preguntas[indexPregunta][2];
	opt3.textContent=preguntas[indexPregunta][3];
	opt4.textContent=preguntas[indexPregunta][4];
	return;// body...
};

give_ques(0);

function nextques() {
	var resSeleccionada= document.querySelector('input[type=radio]:checked');
	if(!resSeleccionada){
		alert("SELECT AN OPTION");
		return;
	}

	if(resSeleccionada.value==preguntas[indexPregunta][5]){
		puntuacion+=1;
	}
	
	resSeleccionada.checked=false;
	indexPregunta++;
	     if(indexPregunta==totalPreguntas-1)
	     	nextbutton.textContent="Finish";
	     var f=puntuacion/totalPreguntas;
	     if (indexPregunta==totalPreguntas) {
			q.style.display='none';
			quiz.style.display='none';
			result.style.display='';
			result.textContent="Puntuación:"+(f*100).toFixed(2)+"%";
            return;
	     }
        give_ques(indexPregunta);

}
