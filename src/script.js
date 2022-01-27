document.addEventListener("keydown", function(event){
    if(event.code === "KeyA" || event.code === "KeyS" ||
        event.code === "KeyD" || event.code === "KeyF" ||
        event.code === "KeyG" || event.code === "KeyH" ||
        event.code === "KeyJ" || event.code === "KeyW" ||
        event.code === "KeyT" || event.code === "KeyY" ||
        event.code === "KeyE" || event.code === "KeyU"){
        let audio = new Audio("audio/" + event.key.toUpperCase() + ".mp3");
        audio.play();
    }else{
        console.log("Error");
    }
})