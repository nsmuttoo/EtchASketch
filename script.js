

const container = document.querySelector("#container")
var innerDivList = []
var outerDivList =[]
var store = []

var topButton = document.createElement("Button")
topButton.textContent = "Set Up Grid"
document.body.prepend(topButton)



function fillDivList(size){

for(j=0; j<size; j++) {
outerDivList[j] = document.createElement("div")
outerDivList[j].classList.add("pixelBox")
innerDivList = store
for(i =0; i<size; i++){
innerDivList[i] = document.createElement("div") 
innerDivList[i].classList.add("pixel")
innerDivList[i].innerHTML ="."
outerDivList[j].appendChild(innerDivList[i])
console.log(innerDivList[i])
}
container.appendChild(outerDivList[j])
}
listen()
}
function deleteAll(){
    var pixels = document.getElementsByClassName("pixel")

    for (var i =0; i<pixels.length; i++){
        pixels[i].remove()
    
}
}

function changeColour(){
    this.style.backgroundColor = "white"
}

function whenClick(){
    var store = prompt("Enter you grid size")
    console.log("click")
    if(store<=100 && store >0){
        deleteAll()
        fillDivList(store)
    }
    else{
        window.alert("Please enter a valid grid size (1-100)")
    }
}




topButton.addEventListener("click",whenClick,true)

function listen(){
    var pixels = document.getElementsByClassName("pixel")

for (var i =0; i<pixels.length; i++){
    pixels[i].addEventListener("mouseover", changeColour, false)
}
}