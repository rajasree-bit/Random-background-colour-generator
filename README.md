# Background Color Changer

A simple JavaScript project that uses ***event delegation*** to detect which child element is clicked and change the page background color based on the clicked element's `id`.

## How It Works
- A single click listener is added to the parent element.
- When any child is clicked, its `id` is captured.
- The background color of the page updates using that value.

## Key Code Snippet
```const parent=document.getElementById("parent")
parent.addEventListener('click',(e)=>{
console.log(e.target.id)
const a=e.target.id
const body=document.querySelector("body")
body.style.backgroundColor=a
})
