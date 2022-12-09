ul=document.querySelector("ul")
list=ul.childNodes
console.log(ul)

for (let elem of list){
    if(elem.nodeType===1){
        if(elem.textContent=="Fast and Furious"){
            elem.classList.add("important")
            ul.insertBefore(elem,ul.firstElementChild)
        }
        elem.addEventListener("click", (e) => {
            if (e.target.textContent=="Fast and Furious"){
                alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
            }
            else{
                alert(e.target.textContent)
            }
    })
}
}

