const dot =document.body;
const color = document.querySelector(".color");
// const range = document.querySelector(".range");
let hex = "#000"
function handleInputChange(evt){
    hex =evt.target.value;
}
function print(evt){
    const x=evt.offsetX;
    const y=evt.offsetY;
    // const number=range.value
    dot.innerHTML+= `<div style="position:absolute;
    top:${y}px;
    left:${x}px;
    width:2px;
    height:2px;
    background-color:${hex};"></div>`;
    dot.addEventListener("mousedown",()=>{
        dot.addEventListener("mousemove",print);
    });
    dot.addEventListener("mouseup",()=>{
        dot.removeEventListener("mousemove",print);
    });
}
dot.addEventListener("click",print);