const lista=document.getElementById("lista")

function add(){
    const textousuario=document.getElementById("textousuario")
    const li = document.createElement("li")
    const a = document.createElement("a")
    const span =document.createElement("span")
    const p=document.createElement("p")
    const input=document.createElement("input")
    if(textousuario.value ==""){
        alert("añade texto")
    }else{
        span.setAttribute("class","material-symbols-outlined botontrash")
        input.setAttribute("type","checkbox")
        span.innerText="delete"
        p.innerText=textousuario.value
        a.append(span)
        li.append(input)
        li.append(p)
        li.append(a)
        lista.append(li)
        textousuario.value=""
    }
    const elementoa=document.querySelectorAll("a")
    for (const elemento of elementoa) {

        const botontrash=elemento.querySelector(".botontrash")
        botontrash.addEventListener("click",()=>{
            let padre = botontrash.parentElement.parentElement
        padre.remove()
        })
    }
}
textousuario.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        add()
    }
})
//9:30PM 26/12/2023

//aqui me tarde en resolver el problema de eliminar a cada una de las tareas
//de manera individual, el for of me lo dio bard ia , se que existe
//pero no lo habia usado antes es un poco confusa la logica
//primera vez que hago esta practica supongo que es normal 
//que me tome tiempo entender
   
    
//tengo pensado hacer una version mejorada

