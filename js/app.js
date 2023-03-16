/*******************INICIO*****************/
class App {
    constructor(parentID, className) {
        this.parentID = parentID;
        this.className = className;
    }

    render() {
        let myApp = document.getElementById(this.parentID);
        myApp.className = this.className;
    }
}

/***********FORMULARIO*************/
class Form {
    constructor(parentID, elementID, className) {
        this.parentID = parentID;
        this.elementID = elementID;
        this.className = className;
    }

    render() {
        let myApp = document.getElementById(this.parentID);
        let myFormHTML = document.createElement("form");
        myFormHTML.setAttribute("class", this.className);

        myApp.append(myFormHTML);
    }
}
/***********BOTON*************/

class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
    }

    render() {
        let myForm = document.getElementById(this.parentID);
        let myButtonHTML = document.createElement("button");
        myButtonHTML.setAttribute("type", "button");
        myButtonHTML.setAttribute("class", "btn btn-secondary");
        myButtonHTML.innerHTML = this.text;

        myForm.append(myButtonHTML);

        myButtonHTML.addEventListener('click', (e) => {
            e.preventDefault();
            const myInput = document.querySelector("input");
            let mensaje = document.createElement("div");

            mensaje.setAttribute("id", "texto");
            mensaje.className = "alert alert-success w-50 position-absolute top-50 start-50 translate-middle";
            mensaje.textContent = myInput.value
            myApp.append(mensaje);

            mensaje.addEventListener('click', function () {
                mensaje.remove();
            });
        });
    }
}

/***********INPUT*************/

class Input {
    constructor(parentID, type, elementID) {
        this.parentID = parentID;
        // if type != opciones validas... entonces poner un valor por default.
        this.type = type;
        this.elementID = elementID;
    }

    render() {
        let myForm = document.getElementById(this.parentID);
        let myInputHTML = document.createElement("input");
        myInputHTML.setAttribute("type", this.type);
        myInputHTML.setAttribute("class", "form-control");
        myInputHTML.setAttribute("id", this.elementID);
        myInputHTML.setAttribute("placeholder", "Rellenar casilla de " + this.type);

        const data = document.querySelectorAll("input").value;
        //console.log(data);

        myForm.append(myInputHTML);
    }
}

//Inicio dandoole forma al contenedor "App".
const myApp = new App("app", "container my-4 p-4 bg-light w-50");

//Dibujar el formulario
const miFormulario = new Form("app", "myForm", "form-group row");

/***********************/
/***********************/

//Dibujar los inputs
const myInput = new Input("app", "text", "myInput");

let mySuperArrayofTypes = ["text", "password", "email", "number", "text", "text"];

function RenderInput(type) {
    let myInput = new Input("app", type, "myInput");
    myInput.render();
}

//Mostrar cada input
mySuperArrayofTypes.forEach(element => RenderInput(element));

//Seleccionar por busqueda
const filtrarInputs = mySuperArrayofTypes.filter(element => element === "text").forEach(element => RenderInput(element));
console.log(filtrarInputs);

/***********************/
/***********************/

//Dibujar los botones
const myButton = new Button("app", "Login");

//Array con botones
let mySuperArrayofStrings = ["Login", "Signup", "Reset", "Cancel"];

function RenderButton(text) {
    let myButton = new Button("app", text);
    myButton.render();
}
//Mostrar cada boton 
mySuperArrayofStrings.forEach(element => RenderButton(element));  //Lento

//Seleccionar por busqueda
const filtrarBotones = mySuperArrayofStrings.filter(element => element === "Login").forEach(element => RenderButton(element)); //Rapido
console.log(filtrarBotones);







