function randomRGBVal(){
    let randOne = Math.floor(Math.random() * (255 - 1) + 1);
    let randTwo = Math.floor(Math.random() * (255 - 1) + 1);
    let randThree = Math.floor(Math.random() * (255 - 1) + 1);

    let newColor = `rgb(${randOne},${randTwo},${randThree})`;
    
    let elem = document.getElementById("main-body");
    elem.style.backgroundColor = newColor;
    return console.log(newColor);

    // elem.style.background-color = rgb(randOne,randTwo, randThree);
    
}
