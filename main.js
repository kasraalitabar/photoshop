const dot =document.querySelector("div:nth-child(1)");
const color = document.querySelector(".color");
// const range = document.querySelector(".range");
let hex = "#000"
function handleInputChange(evt){
    hex =evt.target.value;
}
function print(evt){
    console.log("hi")
    const x=evt.x;
    const y=evt.y;
    // const number=range.value
    dot.innerHTML+= `<div style="position:absolute;
    top:${y}px;
    left:${x}px;
    width:2px;
    height;2px;
    border-radius:50%;
    background-color:${hex};"></div>`;
    dot.addEventListener("mousedown",()=>{
        dot.addEventListener("mousemove",print);
    });
    dot.addEventListener("mouseup",()=>{
        dot.removeEventListener("mousemove",print);
    });
}
dot.addEventListener("click",print);