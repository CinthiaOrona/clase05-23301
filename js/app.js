//*********BUTTONS*********/

class Button {
    constructor(parentID, text, className, type) {
        this.parentID = parentID;
        this.text = text;
        this.className = className;
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        let buttonContainer = document.createElement("div");
        buttonContainer.className = "justify-content mt-2 mx-auto";
        myApp.append(buttonContainer);

        let myButtonHTML = document.createElement("button");
        myButtonHTML.setAttribute("type", this.type); //implicito en el elemento
        myButtonHTML.className = this.className;
        myButtonHTML.innerHTML = this.text;
        buttonContainer.append(myButtonHTML);
    }

}
const manyButtons = ["Login", "Close", "Visit", "Register"];

function renderButton(text) {
    let newButton = new Button("app", text, "btn btn-primary"); //lo que esta en el constructor
    newButton.render();
}

//Funcion donde el parametro es un array, lo guardo en una variable y luego la llamo
function obtenerLogin(manyButtons) {
    let arr = manyButtons.filter(element => element === "Login").forEach(element => renderButton(element));
    return arr;
}
//obtenerLogin(manyButtons);



//**********INPUTS**************/
class Input {
    constructor(parentID, type) {
        this.parentID = parentID;
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        let InputContainer = document.createElement("div");
        InputContainer.className = "justify-content m-4 mx-auto";
        myApp.append(InputContainer);


        let myInputHTML = document.createElement("input");
        myInputHTML.setAttribute("type", this.type);
        myInputHTML.setAttribute("placeholder", "Ingrese su " + this.type);
        myInputHTML.setAttribute("required", "");
        myInputHTML.className = "form-control";
        InputContainer.append(myInputHTML);

    }
}

function renderInput(type) {
    let input_type = "none";

    switch (type) {
        case "password":
            input_type = "password";
            break;
        case "date":
            input_type = "date";
            break;
        case "number":
            input_type = "number";
            break;
        default:
            input_type = "text";
            break;
    }
    let someInput = new Input("app", input_type);
    someInput.render();
}

const manyInputs = ["text", "password", "date", "number"];

//Mostrar cada input
//manyInputs.forEach(element => renderInput(element));

//Funcion que espera un array, lo guardo en una variable y luego la llamo
function filtrarInputs(arrInput, type) {
    let arr = arrInput.filter(element => element === type).forEach(element => renderInput(element));
    return arr;
}
//filtrarInputs(manyInputs, "date");

//Funcion que filtra por default hasta 3 parametros de input
function obtenerTresInputs(arrInput, type1, type2, type3) {
    let inputElegido = arrInput.filter(element => element === type1 && type2 && type3).forEach(element => renderInput(element));
    return inputElegido;
}
//obtenerTresInputs(manyInputs, "text", "password", "date");



//**********FORMULARIO**************/

class Formulario {
    constructor(parentID, className, elementID) {
        this.parentID = parentID;
        this.className = className;
        this.elementID = elementID;
    }

    render() {
        let myApp = document.getElementById(this.parentID);
        myApp.className = "container mx-auto d-flex flex-column";

        //Estilizado del formulario
        let formContainer = document.createElement("div");
        formContainer.className = "m-4";
        myApp.append(formContainer);

        let myFormHTML = document.createElement("form");
        myFormHTML.setAttribute("id", this.elementID);
        myFormHTML.setAttribute("novalidate", "");
        myFormHTML.className = this.className;
        myFormHTML.color = this.color;
        formContainer.append(myFormHTML);

    }
}
//Inicializacion de formulario
let formLogin = new Formulario("app", "form w-50 bg-light p-5 border border-primary rounded-3 needs-validation", "form1");
//formLogin.render();

function mostrarFormArmado() {
    let input1 = new Input("form1", "text");
    let input2 = new Input("form1", "password");
    let button1 = new Button("form1", "Login", "btn btn-primary", "submit");

    formLogin.render();
    input1.render();
    input2.render();
    button1.render();
}
mostrarFormArmado(); //

const manyForms = ["form1", "form2", "form3", "form4"];

function renderForm() {
    let newForm = new Formulario("app", "form bg-light p-5 border border-primary");
    newForm.render();
}

//manyForms.forEach(element => renderForm(element));

//Funcion que espera un array, lo guardo en una variable y luego la llamo
function obtenerForm(arrForm) {
    let arr = arrForm.filter(element => element === "form1").forEach(element => renderForm(element));
    return arr;
}
//obtenerForm(manyForms);

//Filtar inputs por tipo en cada formulario
function inputsSegunFormulario(arrInput, arrForm, type, elementID) {
    let arr = arrInput.filter(element => element === type).forEach(element => renderInput(element));
    let arr2 = arrForm.filter(element => element === elementID).forEach(element => renderForm(element));
    return arr, arr2;
}
//inputsSegunFormulario(manyInputs, manyForms, "date", "form1");

//*********VALIDACION FORMULARIO**************/
(() => {

    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated')
        }, false)
    });
})();
