const btn = document.querySelector("#btn")
const btn2 = document.querySelector("#ChangeGrid")
const reset = document.querySelector("#reset")
const container = document.querySelector("#container")
// const black = document.querySelector("#blackBtn")
// const rainbow = document.querySelector("#rainbowBtn")
// const yeahidk =  document.querySelector(".makeDivBlack")
function eraseAll (){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}

function makeOne (){
    const div = document.createElement("div");
    div.setAttribute("style", `height: 31.25px; width :31.25px;`)
    div.addEventListener("mouseover", function(e){
        div.classList.add("makeDivBlack")
    })
    container.appendChild(div)
}

btn.addEventListener("click",function(e){
    eraseAll()
    for (i = 0; i < 256; i++) {
        makeOne()
    }
})

btn2.addEventListener("click",function(e){
    eraseAll()
    let num = prompt ("How big do you want the grid to be? (2 - 100)")
    let sizeOfDiv = 500/num
    for (i = 0; i < (num**2); i++) {
        const div = document.createElement("div");
        div.setAttribute("style", `height:${sizeOfDiv}px; width : ${sizeOfDiv}px`)
        div.addEventListener("mouseover", function(e){
            div.classList.add("makeDivBlack")
        })
        container.appendChild(div)
    }
})

reset.addEventListener("click", eraseAll)

// extra credit

// rainbow.addEventListener("click",function(e){
//     while (yeahidk.classList.contains("makeDivBlack")) {
//         yeahidk.classList.remove("makeDivBlack");
//         yeahidk.classList.add("makeDivRainbow")
//       }
// })

// black.addEventListener("click",function(e){
//     while (yeahidk.classList.contains("makeDivRainbow")) {
//         yeahidk.classList.remove("makeDivRainbow");
//         yeahidk.classList.add("makeDivBlack")
//       }
// })