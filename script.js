

const container = document.querySelector("#container")
var innerDivList = []
var outerDivList =[]
var store = []

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
}

var pixels = document.getElementsByClassName("pixel")

function changeColour(){
    this.style.backgroundColor = "white"
}




fillDivList(100)

for (var i =0; i<pixels.length; i++){
    pixels[i].addEventListener("mouseover", changeColour, false)
}