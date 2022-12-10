ul=document.querySelector("ul")
list=ul.childNodes


for (let elem of list){
    if(elem.nodeType===1){
        //on supprime les doublons
        for(i=0;i<ul.children.length;i++){
            if(elem==ul.children[i]){
                continue
            }
            else if(elem.isEqualNode(ul.children[i])){
               ul.removeChild(ul.children[i])
            }
        }
        //on met le noeud "Fast..." en haut de la liste
        if(elem.textContent=="Fast and Furious"){
            elem.classList.add("important")
            ul.insertBefore(elem,ul.firstElementChild)
        }
        //création des événements 
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

//return random list 
function randomlist(list){
    listrandom=[];
    length=list.length;
        for( i=1;i<=length;i++){
            random=Math.floor(Math.random()*length);
            while (listrandom.includes(list[random])){
                random=Math.floor(Math.random()*length);
            }
            listrandom.push(list[random]);
        }
        return listrandom
    }
// evenement sur la touche e(random list) et d(create "Fast and ..." node)
document.body.addEventListener("keyup",(e)=>{
    if(e.key=="r"){
        for (let elem of randomlist(ul.children)){
            if(elem.textContent=="Fast and Furious"){
                ul.insertBefore(elem,ul.firstElementChild)
            }
            else{
                ul.appendChild(elem)
            }
        }
    }
    else if(e.key=="d"){
        clone=ul.firstElementChild.cloneNode(true)
        ul.insertBefore(clone,ul.firstElementChild)
    }   
})

//select option
newDiv=document.createElement("div")
document.body.insertBefore(newDiv,ul)
select=document.createElement("select")
newDiv.append(select)
option1=document.createElement("option")
option2=document.createElement("option")
option1.value="important franchises"
option2.value="normal franchises"
option1.textContent="important franchises"
option2.textContent="normal franchises"
select.appendChild(option1)
select.appendChild(option2)
list_li=document.querySelectorAll("li")

select.addEventListener("change",(e) =>{
    if(e.target.value=="important franchises"){
        for(let li of list_li){
            if(li.className!="important"){
                li.style.visibility="hidden"
            }
        }
    }
    else{
        for(let li of list_li){
            li.style.visibility="visible"
    }
}
})