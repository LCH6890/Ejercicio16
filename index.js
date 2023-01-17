const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo=> {
    parrafo.addEventListener("dragstart", event => {
        console.log("Inicio de arrastre")
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("draggin")
        event.dataTransfer.setData("id", parrafo.id)
    })
    parrafo.addEventListener("dragend", () => {
        //console.log("He terminado de arrastrar")
        parrafo.classList.remove("draggin")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event=> {
        event.preventDefault()
        //console.log("Drag over")
        //
    })
    seccion.addEventListener("drop", event=> {
    console.log("Drop")
    const id_parrafo = event.dataTransfer.getData("id")
    //console.log("Párrafo id: ", id_parrafo)
    const parrafo = document.getElementById(id_parrafo)
    seccion.appendChild(parrafo)
    })
})
const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})