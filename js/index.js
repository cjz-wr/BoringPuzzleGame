//用于生成指定范围的随机数
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// //用于保存进度
// function completeLevel(currentLevel) {
//     // 2. 保存进度（保存的是“已完成”的关卡）
//     localStorage.setItem("gameLevel", String(currentLevel));
// }

function addStart(){
    sx = getRandomInt(6,700)
    sy = getRandomInt(400,800)
    console.log(`${sx},${sy}`)
    return [sx,sy]
}

function nextLevel(){
    const [nx,ny] = addStart();
    const next = document.querySelector(".descriptionAndStar")
    if(next){
        NextLevel = document.createElement("a")
        NextLevel.textContent = "下一关"
        NextLevel.href = "Level2.html"
        NextLevel.style.position = "absolute"
        NextLevel.style.left = nx +"px"
        NextLevel.style.top = ny +"px"
        NextLevel.style.color = "blue"
        NextLevel.style.zIndex = "1000"
        next.appendChild(NextLevel)
    }
}

const getMouse = document.querySelector(".descriptionAndStar")

if (getMouse) {
    const newp = document.createElement("p")
    const [sx,sy] = addStart()
    newp.textContent = "开始"
    newp.id ="start-text"
    newp.style.position = "absolute"
    newp.style.left = sx + 'px'
    newp.style.top = sy + 'px'
    newp.style.zIndex = '1000'
    getMouse.appendChild(newp)
}

const rightToStart =document.getElementById("start-text")
let i=0
if (rightToStart) {
    rightToStart.addEventListener("click", function(event) {

        i+=1
        switch (i){
            case 1:
                rightToStart.style.color = "red"
                break;
            case 2:
                rightToStart.style.color = "green"
                break;
            default:
                rightToStart.style.color = "blue"
                rightToStart.textContent ="事不过三，嘿嘿，恭喜你，快了"
                nextLevel()
                break;
        }
    })
}



//判断鼠标位置
document.addEventListener('mousedown', function(event){
    console.log(`mousedown: ${event.clientX}, mousedown: ${event.clientY}`);
})