var clicks = 1
function decrementClicks(){
    clicks += 1
    console.log(clicks)
    if(clicks === 1){
        document.body.style.background = "url(./images.jpg) no-repeat"
        document.body.style.backgroundSize = "cover"
    }
    if(clicks === 2){
        document.body.style.background = "url(./1659684566_61-kartinkin-net-p-estetichnaya-osen-priroda-krasivo-foto-75.jpg) no-repeat"
        document.body.style.backgroundSize = "cover"
    }
    if(clicks === 3){
        document.body.style.background = "url(./nature-summer-1920x1200-wallpaper-preview.jpg) no-repeat"
        document.body.style.backgroundSize = "cover"
    }
    if(clicks === 4){
        document.body.style.background = "url(./1617427951_15-p-oboi-leto-plyazh-15.jpg) no-repeat"
        document.body.style.backgroundSize = "cover"
    }
    if(clicks >= 4){
        clicks = 0
    }
}