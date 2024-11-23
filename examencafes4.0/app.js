const  bd_juego =[
    {
        id:0,
        pregunta:"¿Cual es el nombre del café que se prepara con espresso y leche vaporizada?",
        op0:"Cappuccino",
        op1:"Latte",
        op2:"Mocha",
        op3:"Americano",
        correcta:"0"
    },
    {
        id:1,
        pregunta:"¿Que es un shot de espresso?",
        op0:"2 onzas de espresso",
        op1:"1 onza de espresso",
        op2:"3 onzas de espresso",
        op3:"4 onzas de espresso",
        correcta:"1"
    },
    {
        id:2,
        pregunta:"¿Cual es el metodo de preparacion de cafe que implica verter agua caliente sobre granos de cafe molidos en un filtro?",
        op0:"Drip brewing",
        op1:"French press",
        op2:"Pour-over",
        op3:"Chemex",
        correcta:"0"
    },
    {
        id:3,
        pregunta:"¿Que es la crema en un espresso?",
        op0:"La capa inferior de espuma",
        op1:"La capa superior de espuma",
        op2:"El liquido del espresso",
        op3:"El aroma del espresso",
        correcta:"1"
    },
    {
        id:4,
        pregunta:"¿Cual es el tipo de leche mas comunmente utilizado en la preparacion de lattes y cappuccinos?",
        op0:"Leche entera",
        op1:"Leche descremada",
        op2:"Leche de almendras",
        op3:"Leche de soja",
        correcta:"0"
    },
    {
        id:5,
        pregunta:"¿Que es un macchiato?",
        op0:"Un espresso con leche vaporizada",
        op1:"Un espresso con una pequeña cantidad de leche",
        op2:"Un latte con espresso",
        op3:"Un cappuccino con espresso",
        correcta:"1"
    },
    {
        id:6,
        pregunta:"¿Cual es el origen del cafe?",
        op0:"Brasil",
        op1:"Colombia",
        op2:"Etiopia",
        op3:"Kenia",
        correcta:"2"
    },
    {
        id:7,
        pregunta:"¿Que es la torrefaccion en la produccion de cafe ?",
        op0:"El proceso de molturar los granos de cafe",
        op1:"El proceso de tostar los granos de cafe",
        op2:"El proceso de fermentar los granos de cafe",
        op3:"El proceso de secar los granos de cafe",
        correcta:"1"
    },
    {
        id:8,
        pregunta:"¿Cual es el tipo de cafe mas fuerte?",
        op0:"Espresso",
        op1:"Latte",
        op2:"Capuccino",
        op3:"Mocha",
        correcta:"0"
    },
    {
        id:9,
        pregunta:"¿Que es un cold brew?",
        op0:"Un tipo de cafe que se prepara con agua caliente",
        op1:"Un tipo de cafe que se prepara con agua fria",
        op2:"Un tipo de cafe que se prepara con leche",
        op3:"Un tipo de cafe que se prepara con espresso",
        correcta:"1"
    }
]
// para guardar las respuestas elegidas
let respuestas = [];
let cantiCorrectas = 0;
let numPregunta = 0;
function cargarPreguntas(){
    const pregunta = bd_juego[numPregunta];
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 +"-"+pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");
    //vamos a vrear los tres labels
    const label1 = crearLabel("0",pregunta.op0);
    const label2 = crearLabel("1",pregunta.op1);
    const label3 = crearLabel("2",pregunta.op2);

    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);

    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}
//creo la funcion que retomara el label con todo su contenido
function crearLabel(num, txtOpcion){
    const label = document.createElement("label");
    label.id = "l" + numPregunta + num;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.setAttribute("onclick", "seleccionar(" + numPregunta + "," + num+")" );
    const span = document.createElement("span");
    const correccion =document.createElement("span");
    correccion.id = "p" + numPregunta + num;
    span.textContent = txtOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

for(i=0;i < bd_juego.length;i++){
    cargarPreguntas();

    numPregunta++;
}
function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
}

let corregir = document.getElementById("corregir");
corregir.onclick = function(){
    for(i=0;i<bd_juego.length;i++){
        const pregunta = bd_juego[i];
        if(pregunta.correcta == respuestas[i]){
            cantiCorrectas++;
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }else{
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }
    }
    let inputs = document.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].disabled = true;
    }

    window.scrollTo(0,0);
    h2= document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS -" +(10-cantiCorrectas) + "INCORRECTAS";
    document.getElementById("juego").appendChild(h2);
    if(cantiCorrectas>=8){
        h2.textContent = cantiCorrectas+"CORRECTAS -"+"Ganaste un Capuccino Gratis"
    }else{
        h2.textContent = (10-cantiCorrectas) +"INCORRECTAS-"+ "Vuelve a intentarlo"
    }
}