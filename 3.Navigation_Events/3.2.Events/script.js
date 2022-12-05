const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

//fonction newsquare + log
const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  newdiv(e)
  newli(e)
  //clicks on a generated square an alert pops-up with the color of that square
  let displayedsquare = document.querySelectorAll('.displayedsquare')
  for (let Square of displayedsquare) {
    Square.addEventListener('click', click_generated_square)
  }
}

//fonction pour l'alertbox
function click_generated_square(e){
  alert(e.target.classList[1])
}  

// event square
const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

//fonction pour l'alertbox
function click_generated_square(e){
  alert(e.target.classList[1])
}  

//creation d'une div dans la section
function newdiv(e){
  displayedsquare=document.createElement("div")
  displayedsquare.classList.add("displayedsquare",e.target.classList[1])
  list_section=document.querySelectorAll("section")
  list_section[0].appendChild(displayedsquare)  
}

//creation li
function newli(e){
  li_log=document.createElement("li")
  li_log.ClassName="li_log"
  list_ul=document.querySelectorAll("ul")
  list_ul[0].appendChild(li_log)
  li_log.textContent="["+getElapsedTime()+"]"+" Created a new "+e.target.classList[1]+" square "
  li_log.style.fontWeight="900"
}

//creation li-spacebar
function newli_spacebar(color){
  li_log=document.createElement("li")
  li_log.ClassName="li_log"
  list_ul=document.querySelectorAll("ul")
  list_ul[0].appendChild(li_log)
  li_log.textContent=" [ "+getElapsedTime()+" ] " +" The spacebar was used and the background-color is now "+ color
}


//génère une couleur aléatoire
function randomcolor(){
  r=Math.floor(Math.random()*256)
  g=Math.floor(Math.random()*256)
  b=Math.floor(Math.random()*256)
  color="rgb(" + r + "," + g + "," + b + ")"
  return color
}

//event body
document.body.addEventListener("keypress",keyboard);
function keyboard(e){
  // change la couleur du background
  if(e.key==" "){
    color=randomcolor();
    document.body.style.background=color;
    newli_spacebar(color);
  }
  //efface le dernier log
  else if(e.key=="i"){
    //un log à la fois
    /*
    list_ul=document.querySelectorAll("ul");
    list_ul[0].lastElementChild.remove();
    */
   //tous les logs
   list_section=document.querySelectorAll("ul")
   i=list_section[0].children.length
   while (i!=0){
     list_section[0].lastElementChild.remove()
     i--
   }
   let displayedsquare = document.querySelectorAll('.displayedsquare')
for (let Square of displayedsquare) {
  Square.addEventListener('click', click_generated_square)
}
    
  }
  //efface tous les carrés générés
  else if(e.key=="s"){
    list_section=document.querySelectorAll("section")
    i=list_section[0].children.length
    while (i!=0){
      list_section[0].lastElementChild.remove()
      i--
    } 
  }
}








