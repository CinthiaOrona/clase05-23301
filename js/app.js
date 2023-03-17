//*********BUTTONS*********/

class Button {
    constructor(parentID, text, className) {
        this.parentID = parentID;
        this.text = text;
        this.className = className;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        let buttonContainer = document.createElement("div");
        buttonContainer.className = "justify-content mt-2 mx-auto border border-primary";
        myApp.append(buttonContainer);

        let myButtonHTML = document.createElement("button");
        myButtonHTML.setAttribute("type", "button"); //implicito en el elemento
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
obtenerLogin(manyButtons);



//**********INPUTS**************/
class Input {
    constructor(parentID, type) {
        this.parentID = parentID;
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        let InputContainer = document.createElement("div");
        InputContainer.className = "justify-content m-4 mx-auto border border-primary";
        myApp.append(InputContainer);


        let myInputHTML = document.createElement("input");
        myInputHTML.setAttribute("type", this.type);

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

const manyInputs = ["text", "password", "date", "number", "text", "text"];

//Mostrar cada input
//manyInputs.forEach(element => renderInput(element));

//Funcion que espera un array, lo guardo en una variable y luego la llamo
function obtenerInputs(manyInputs) {
    let arr = manyInputs.filter(element => element === "date").forEach(element => renderInput(element));
    return arr;
}
obtenerInputs(manyInputs);

//**********FORMULARIO**************/

class Formulario {
    constructor(parentID, className) {
        this.parentID = parentID;
        this.className = className;
    }

    render() {
        let myApp = document.getElementById(this.parentID);
        myApp.className = "container mx-auto d-flex flex-column";

        let formContainer = document.createElement("div");
        formContainer.className = "p-5 justify-content w-50 mx-auto border border-primary bg-light";
        myApp.append(formContainer);

        let myFormHTML = document.createElement("form");
        myFormHTML.className = this.className;
        formContainer.append(myFormHTML);

    }
}


const manyForms = ["form1", "form2", "form3", "form4"];

function renderForm() {
    let newForm = new Formulario("app", "form bg-light p-5 border border-primary");
    newForm.render();
}

//manyForms.forEach(element => renderForm(element));

//Funcion que espera un array, lo guardo en una variable y luego la llamo
function obtenerForm(manyForms) {
    let arr = manyForms.filter(element => element === "form1").forEach(element => renderForm(element));
    return arr;
}
obtenerForm(manyForms);
