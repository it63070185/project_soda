const back1 = document.querySelector(".door_in")
const door_last = document.querySelector(".door4")
function back(){
    var link1 = window.location.href
    var MyArry1 = link1.split("?")
    var num = MyArry1[1]
    if(num == ""){
        window.location.href ="home.html?"
        door_last.classList.remove("preloader-hidden")
        door_last.classList.add("preloader-show")
        
    }else{
        window.location.href ="home.html?"+num
        door_last.classList.remove("preloader-show")
        door_last.classList.add("preloader-hidden")
        
    }
}



