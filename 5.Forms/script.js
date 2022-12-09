list_input=document.getElementsByTagName("input")
//prénom
list_input[0].addEventListener("keyup", () => {
    firstname=document.getElementById("display-firstname")
    firstname.textContent=list_input[0].value
})


//age
list_input[1].addEventListener("keyup", () => {
    age=document.getElementById("age")
    hard_thruth = document.getElementById("a-hard-truth");
    hard_thruth.style.visibility="hidden"
    if(age.value>=18){
       hard_thruth.style.visibility="visible"
    }
})

//mot de passe
list_input[2].addEventListener("keyup", () => {
    if(list_input[2].value.length<6){
        list_input[2].style.backgroundColor="red"
    }
    else{
        list_input[2].style.backgroundColor="white"
    }    
})

list_input[3].addEventListener("keyup", () => {
    if(list_input[3].value.length<6 || list_input[2].value!=list_input[3].value){
        list_input[3].style.backgroundColor="red"
    }
    else{
        list_input[3].style.backgroundColor="white"
    }        
})

//dark mode
select=document.getElementById("toggle-darkmode")
select.addEventListener("change", (e) => {
    if(e.target.value=="dark"){
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
    }
    else{
        document.body.style.backgroundColor="white"
        document.body.style.color="black"  
    }
})