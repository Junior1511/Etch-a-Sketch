const btn = document.querySelector("#btn")
const btn2 = document.querySelector("#ChangeGrid")
const reset = document.querySelector("#reset")
const container = document.querySelector("#container")
const black = document.querySelector("#blackBtn")
const rainbow = document.querySelector("#rainbowBtn")

function makeOne (){
    const div = document.createElement("div");
    div.classList.add("grid")
    div.addEventListener("mouseover", function(e){
        div.classList.add("makeDivBlack")
    })
    container.appendChild(div)
}

btn.addEventListener("click",function(e){
    for (i = 0; i < 256; i++) {
        makeOne()
    }
})

reset.addEventListener("click",function(e){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    })