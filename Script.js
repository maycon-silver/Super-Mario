
const form = document.querySelector(".formulario")
const mascaraform = document.querySelector(".mascara-formulario")

function cliqueinobutton(){
  form.style.left = "50%"
  form.style.transform = "translateX(-50%)"
  mascaraform.style.visibility = "visible"
}

function cliqueinamascara(){
  form.style.left = "-300px"
  form.style.transform = "translateX(0)"
  mascaraform.style.visibility = "hidden"
}