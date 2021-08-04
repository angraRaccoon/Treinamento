
// Mobile Competence Container
const coll=document.getElementsByClassName("collapsible");
for(let l=0;l<coll.length;l++)
    coll[l].addEventListener("click",(()=>{
        "active"==coll[l].classList[1]?coll[l].classList.remove("active"):coll[l].classList.add("active");
        let e=coll[l].nextElementSibling;
        e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"
    }));

// Desktop Competence Container
const competence_container = document.getElementsByClassName('desktop-competence-container')[0]
const button_container = competence_container.firstElementChild
const competence_buttons = button_container.children

for(let i = 0; i < competence_buttons.length;i++){
    competence_buttons[i].addEventListener("click", () => {
        competence_buttons[i].classList.add("active")
        for(let j = 0; j < competence_buttons.length; j++){
            if(i != j && competence_buttons[j].classList[0] == "active"){
                competence_buttons[j].classList.remove("active")
            }
        }
    })
}