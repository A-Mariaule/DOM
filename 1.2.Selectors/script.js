/*exo1*/
listimportant=document.querySelectorAll(".important")
for (elem of listimportant){
    elem.title="This is an important item"
}


/*exo2*/
listimg=document.querySelectorAll("img")
console.log(listimg)
for(elem of listimg){
    if (elem.className!="important"){
        elem.style.display="none"
    }
}

/*exo3 +exo4 */

function randomcolor(){
    r=Math.floor(Math.random()*256)
    g=Math.floor(Math.random()*256)
    b=Math.floor(Math.random()*256)
    color="rgb(" + r + "," + g + "," + b + ")"
    return color;
}


listp=document.querySelectorAll("p")
for (elem of listp){
    console.log(elem.className,elem.innerText)
    if(elem.className=="")
    elem.style.color=randomcolor()
}