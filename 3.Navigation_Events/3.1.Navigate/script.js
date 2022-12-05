
//select the last element and push it to the top
const ol=document.querySelector("ol");
ol_lastChild=ol.lastElementChild;
ol_firstChild=ol.firstElementChild;
ol.insertBefore(ol_lastChild,ol_firstChild)

//Move the <h2> of the third section in the second one and vice-versa
const list_section=document.querySelectorAll("section");
section2=list_section[1];
section3=list_section[2];
titre2=section2.firstElementChild
titre3=section3.firstElementChild.firstElementChild
section2.insertBefore(titre3,titre2)
div=section3.firstElementChild
section3.insertBefore(titre2,div)

//Delete the last section from the DOM, we don't need it anyways

section3.remove()




