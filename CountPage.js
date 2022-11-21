const back1 = document.querySelector(".door_in")

function back(){
    var link1 = window.location.href
    var MyArry1 = link1.split("?")
    var num = MyArry1[1]
    if(num == "4"){
        window.location.href ="home.html?0"
    }else{
        window.location.href ="home.html?"+num
    }
}



