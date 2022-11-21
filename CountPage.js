const back1 = document.querySelector(".door_in")

function back(){
    var link1 = window.location.href
    var MyArry1 = link1.split("?")
    var num = MyArry1[1]
    // console.log("Show")
    if(num == ""){
        console.log("Show")
        window.location.href ="home.html?"
        
    }else{
        console.log("NotShow")
        // door_last.classList.remove("preloader-show")
        // door_last.classList.add("preloader-hidden")
        window.location.href ="home.html?"+num
    }
}



