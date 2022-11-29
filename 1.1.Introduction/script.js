console.log(document.title)
document.title = "Modifying the DOM";
console.log(document.title)


function randomcolor(){
    r=Math.floor(Math.random()*256)
    g=Math.floor(Math.random()*256)
    b=Math.floor(Math.random()*256)
    color="rgb(" + r + "," + g + "," + b + ")"
    document.body.style.backgroundColor= color;
}

randomcolor()

let myElement = document.body;
for (let child of myElement.children) {
  console.log(child);
}

