   const questions = [{
   question: "Que veut dire HTML ?",
   reponses: ["L'HyperText Make Language","L'HyperText Markup Language","L'HyperText Make Link","L'HyperText Markup Link"],
   correct:"L'HyperText Markup Language"
   },
   {
   question: " Que veut dire CSS ?",
   reponses: ["Cascade Style Sheets","Cascading Style Shape","Cascade Science Sheets","Cascading Style Sheets"],
   correct:"Cascading Style Sheets"
   },
   {
    question: "Quelle balise permet de faire un texte",
   reponses: ["h1 ","p","link","nav"],
   correct:"p"
},
{
    question: "Quelle est l'extension de fichier correcte pour les fichiers JavaScript ?",
   reponses: ["jvs","jv","js","ja"],
   correct:"js"
},
{
   question: "quelle est capital Laquelle de ces syntaxes est correcte ?",
   reponses: ["if(a != 2){}","if a!= 2{}"," if(a <> 2){}","had  if a <> 2 {}"],
   correct:"if(a != 2){}"
},
{
    question: "Comment mettre un commentaire sur une seule ligne ?",
   reponses: ["//","*/","<!-- -->","##"],
   correct:"//"
}
];

const question = document.getElementById("question");
const rep1 = document.getElementById("rep1");
const rep2 = document.getElementById("rep2");
const rep3 = document.getElementById("rep3");
const rep4 = document.getElementById("rep4");
const next = document.getElementById("next");
const finish = document.getElementById("finish");
const resulta = document.getElementById("resulta");
const star = document.getElementById("star");
const back = document.getElementById("return");
const para = document.getElementById("para");


para.textContent = "Appuyez sur start pour commencer le jeu.";
star.textContent = "START";
next.textContent = "Suivant";
back.textContent = "Return";
finish.textContent ="Terminer";

let step = 0;
let scor = 0;

// function qui afficher les question 
function Afficher(){
    let q = questions[step];
    question.textContent = q.question;
    rep1.textContent = q.reponses[0];
    rep2.textContent = q.reponses[1];
    rep3.textContent = q.reponses[2];
    rep4.textContent = q.reponses[3];
}


// event pour star le quiz
star.onclick = function chang(){
if(step< questions.length){
    Afficher();
    rep1.style.display = "block";
    rep2.style.display = "block";
    rep3.style.display = "block";
    rep4.style.display = "block";
    para.style.display = "none";
    star.style.display = "none";
    next.style.display = "block";
}
}
// event pour switch les question
next.onclick = function chang(){
     rep1.style.background = "white"; 
     rep2.style.background = "white";
     rep3.style.background = "white";
     rep4.style.background = "white";
 if( choix === questions[step].correct){
    scor++;
 }   
  step++;
if(step< questions.length){
    Afficher();
}
if(step >= 1){
    back.style.display = "block"
}
if(step>questions.length-1){
    question.textContent = "QUIZ est Terminée, clique sur terminer pour voir le résultat.";
    rep1.style.display = "none";
    rep2.style.display = "none";
    rep3.style.display = "none";
    rep4.style.display = "none";
    next.style.display = "none"
    finish.style.display= "block"
    back.style.display = "none"

}
}

// even pour return question
back.onclick = function back(){
    step--;
    if(step < questions.length){
    Afficher();
}
}
let choix ="";
rep1.onclick = function(){
    choix = rep1.textContent;
    rep1.style.background = "#939393ac";
    rep2.style.background = "white";
    rep3.style.background = "white";
    rep4.style.background = "white";

}
rep2.onclick = function(){
     choix = rep2.textContent;
    rep2.style.background = "#939393ac";
    rep1.style.background = "white";
    rep3.style.background = "white";
    rep4.style.background = "white";
    }
rep3.onclick = function(){ 
    choix = rep3.textContent;
    rep3.style.background = "#939393ac";
    rep2.style.background = "white";
    rep1.style.background = "white";
    rep4.style.background = "white";
}
rep4.onclick = function(){
    choix = rep4.textContent;
    rep4.style.background = "#939393ac";
    rep2.style.background = "white";
    rep3.style.background = "white";
    rep1.style.background = "white";
}

// event de button finish

finish.onclick = function result(){
    rep1.style.display = "none";
    rep2.style.display = "none";
    rep3.style.display = "none";
    rep4.style.display = "none";
    finish.style.display = "none";
    question.textContent = "le résultat est: ";
    resulta.textContent = "votre score est :" + scor + "/" + questions.length ;

}

