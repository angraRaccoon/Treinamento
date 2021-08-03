const coll=document.getElementsByClassName("collapsible");
for(let l=0;l<coll.length;l++)
    coll[l].addEventListener("click",(()=>{
        "active"==coll[l].classList[1]?coll[l].classList.remove("active"):coll[l].classList.add("active");
        let e=coll[l].nextElementSibling;
        e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}
        ));

