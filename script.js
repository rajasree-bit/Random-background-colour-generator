const parent=document.getElementById("parent")
parent.addEventListener('click',(e)=>{
    console.log(e.target.id)
    const a=e.target.id
    const body=document.querySelector("body")
    body.style.backgroundColor=a

})