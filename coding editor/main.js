const actualizar = () =>{
    const text_input = document.getElementById("text_input");
    const edit = document.getElementById("text_input");
    edit.srcdoc = text_input.value;
}
Welcome();

function Welcome() {
    alert("Welcome to XwLsCode Version 1.0 world's N°1 code editor for the entire Internet");
}
