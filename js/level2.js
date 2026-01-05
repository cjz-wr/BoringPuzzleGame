// //用于保存进度
// function completeLevel(currentLevel) {
//     // 2. 保存进度（保存的是“已完成”的关卡）
//     localStorage.setItem("gameLevel", String(currentLevel));
// }


function nextLevel(){
    const next = document.getElementById("next");
    if (next) {
        next.addEventListener("click", function() {
            window.location.href="Level3.html";
        })
    }
}

const title = document.getElementById("title")
if (title) {
    const next = document.createElement("p")
    next.innerHTML = "next"
    next.id = "next"
    next.style.position = "absolute"
    next.style.top = "33%"
    next.style.left = "49%"
    next.style.fontSize = "16px"
    title.appendChild(next)
}
nextLevel()

// completeLevel(2)