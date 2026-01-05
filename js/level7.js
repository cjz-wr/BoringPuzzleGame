const music = document.getElementById("l7-d-p1")
const l7_input = document.getElementById("level7-input")
const l7_scroll = document.querySelector(".level7-div2")
const l7_ok = document.getElementById("l7-ok")
const l7_nok = document.getElementById("l7-nok")

const audio = new Audio("audio/level7-1.mp3");
audio.volume = 0.7

function play() {

    audio.play()
        .then((res) => console.log("播放成功"))
        .catch((err) => console.log("播放失败",err));
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}


let runMusic = true
if (music) {
    music.addEventListener("click", (e) => {
        if(runMusic) {
            runMusic = false
            play()
        }else{
            stop()
            runMusic = true
        }
    })
}
let creat_green = true;
if (l7_input){
    l7_input.addEventListener("blur",() =>{
        const  input_value = l7_input.value
        if (input_value === "橘子" && creat_green){
            creat_green = false
            const  new_color1 =  document.createElement("span")
            new_color1.textContent = " "
            new_color1.style.display = "inline-block";
            new_color1.style.width = "20px"
            new_color1.style.height = "20px"
            new_color1.style.backgroundColor = "#53f101"
            new_color1.style.borderRadius = "4px"
            new_color1.style.margin = "10px"
            l7_scroll.appendChild(new_color1)

        }
    })

}
const pl = new Audio("audio/level7-2.mp3");
let pll = false
if (l7_ok){
    l7_ok.addEventListener("click", () =>{
        if (!creat_green){
            alert("ok!你完成了任务")
            window.location.href = "level8.html"
        }
        if (pll){
            pl.pause()
        }
    })
}

if(l7_nok){
    l7_nok.addEventListener("click", () =>{

        pl.play()
            .then(() => console.log("播放成功"))
            .catch((err) => console.log("播放失败",err))
        pll = true
    })
}