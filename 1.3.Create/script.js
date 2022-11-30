Keller5=["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde     Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"]

function randomcolor(){
    r=Math.floor(Math.random()*256)
    g=Math.floor(Math.random()*256)
    b=Math.floor(Math.random()*256)
    color="rgb(" + r + "," + g + "," + b + ")"
    return color;
}

function randomizelist(list){
    l=list.length
    randomlist=[]
    for( i=1;i<=l;i++){
        random=Math.floor(Math.random()*l);
        while (randomlist.includes(list[random])){
            random=Math.floor(Math.random()*l);
        }
        randomlist.push(list[random]);
    }
    return randomlist  
}


  function getTextColor(rgb) 
  {
      rgb = rgb.match(/\d+/g);
      if ((rgb[0] * 0.299) + (rgb[1] * 0.587) + (rgb[2] * 0.114) > 150) {
          return 'black';
      } else {
          return 'white';
      }
  }  

function create(list){
    Keller5=randomizelist(list)
    i=0
    for (elem of Keller5){
        learner_elem = document.createElement("section");
        backgroundcolor=randomcolor()
        learner_elem.style.backgroundColor= backgroundcolor;
        para=document.createElement("p")
        para.innerText=elem
        para.style.color=getTextColor(backgroundcolor)
        document.getElementsByTagName('article')[0].appendChild(learner_elem);
        document.getElementsByTagName('section')[i].appendChild(para)
        i++      
    }
}

create(Keller5)









