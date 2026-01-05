const level3 = document.getElementById("level3")
const level3_div = document.querySelector(".l3img")
const bn1 = document.getElementById("bn1")
const bn2 = document.getElementById("bn2")
const next = document.getElementById("next")

let chang = 80



//用于保存进度
function completeLevel(currentLevel) {
    // 2. 保存进度（保存的是“已完成”的关卡）
    localStorage.setItem("gameLevel", String(currentLevel));
}



function bigbn(){
    if(bn1){
        bn1.addEventListener("click",function(){
            chang +=10
            next.style.fontSize=chang+'px';
            console.log(chang);
            if (chang >=150){ window.location.href = "Level4.html"}

        })

    }
}
function smallbn(){
    if(bn2){
        bn2.addEventListener("click",function(){
            chang -=10
            next.style.fontSize=chang+'px';
        })
    }
}



//用于记录点击次数
let i = 0;
if (level3) {
    let hhh;
    level3.addEventListener("click", (e) => {
        i+=1
        switch (i){
            case 1:
                alert("你已经在第三关了,点它干嘛");
                hhh = document.createElement("img")
                hhh.src = "img/level3-1.png"
                hhh.id =  "level3-img"
                level3_div.appendChild(hhh)
                break;
            case 2:
                alert("没有答案的啦，不要点了")
                hhh = document.getElementById("level3-img")
                hhh.src = "img/level3-2.jpg"
                break;
            case 3:
                alert("还点,有意思吗?")
                hhh = document.getElementById("level3-img")
                hhh.src = "img/level3-3.jpg"
                hhh.style.width = "10%"
                hhh.style.height = "auto"
                break;
            default:
                alert("....")
                hhh = document.getElementById("level3-img")
                hhh.src = "img/level3-4.jpg"
                i = 3;
                break;

        }



    })
}
bigbn()
smallbn()
completeLevel(3)