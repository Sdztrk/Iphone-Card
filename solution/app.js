//Selecting the elements
const container = document.querySelector(".container")
const card = document.querySelector(".card")
const img = document.querySelector(".container img")

//Moving animation event
container.addEventListener("mouseover", (e) => {
    let xAxis = (window.innerWidth/2 -e.pageX)/10
    let yAxis = (window.innerHeight/2-e.pageY)/10
    card.style.transform = `rotateY( ${xAxis}deg) rotateX( ${yAxis}deg )`;
    img.style.transform = `scale(1.1)`
    // img.style.transform = `rotateY( ${xAxis}deg) rotateX( ${yAxis}deg )`;
})

//Animate out
container.addEventListener("mouseout",() => {
    card.style.transform= `rotateY(0deg) rotateX(0deg)`
    img.style.transform= `scale(1)`
})