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

/* exo*/
function create(list){
    Keller5=randomizelist(list)
    i=0
    for (elem of Keller5){
        learner_elem = document.createElement("section");
        learner_elem.style.backgroundColor= randomcolor();
        para=document.createElement("p")
        para.innerText=elem
        document.getElementsByTagName('article')[0].appendChild(learner_elem);
        document.getElementsByTagName('section')[i].appendChild(para)
        i++
        /*
        if((red*0.299 + green*0.587 + blue*0.114) > 186){
            para.style.color= "white"
        }
        else{
            para.style.color="black"
        }
        */
    }
}

create(Keller5)








