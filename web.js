let menu_item=document.getElementById("menu-item")
let bars=document.getElementById("bars");

bars.addEventListener('click',()=>{
    if(menu_item.style.opacity==="0"){
        menu_item.style.opacity="1"
        menu_item.style.height="50vh";
    }else{
        menu_item.style.opacity="0"
        menu_item.style.height="0vh";
    }

})