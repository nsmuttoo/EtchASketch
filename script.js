

const container = document.querySelector("#container")
var divList = []


function fillDivList(height,width){
size = height*width
for(i =0; i<size; i++){
divList[i] = document.createElement("div") 
divList[i].classList.add("pixel")
divList[i].innerHTML ="_"
container.appendChild(divList[i])
console.log(divList[i])
}

}

fillDivList(16,16)