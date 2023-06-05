const inputs=document.querySelectorAll(".formcontent");
inputs.forEach(item=>{
    item.addEventListener("focus",()=>{
        console.log(item.value);
    //    item.parentElement.previousSibling.classList.add("input_label_focussed")
    console.log(item.parentElement.previousElementSibling);
    item.parentElement.previousElementSibling.classList.add("input_label_focussed")
    // item.parentElement.previousElementSibling.classList.remove("input_label")
    })
    item.addEventListener("blur",()=>{
        if(item.value==""){
            item.parentElement.previousElementSibling.classList.remove("input_label_focussed")
        }
    })
})