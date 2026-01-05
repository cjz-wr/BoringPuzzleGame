const gogoHome = document.getElementById("gogoHome");
const level6_img = document.getElementById("level6-img");
const goHome = document.getElementById("goHome");
const nextTo7 = document.getElementById("nextTo7");

//碰撞检测
function isColliding(el1, el2) {
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();

    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}




if (level6_img) {
    let isDragging = false;
    let offsetX, offsetY;

    // 鼠标按下（开始拖拽）
    level6_img.addEventListener("mousedown", function (event) {
        isDragging = true;
        const rect = level6_img.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        level6_img.style.position = "absolute";
        level6_img.style.zIndex = "1";
        event.preventDefault(); // 阻止拖拽图片默认行为（如显示禁止图标）
    });

    // 全局 mousemove（确保鼠标移出图片也能继续拖）
    document.addEventListener("mousemove", function (event) {
        if (!isDragging) return;

        level6_img.style.left = (event.clientX - offsetX) + "px";
        level6_img.style.top = (event.clientY - offsetY) + "px";

        if(isColliding(level6_img,gogoHome)){
            alert("恭喜你，猜错了，哈哈哈哈哈，不行啊")
        }else if(isColliding(level6_img,goHome)){
            window.location.href = "level6.html"
        }else if(isColliding(level6_img,nextTo7)){
            alert("太棒了，你帮助doro回家了，她要给你橘子吃呐")
            window.location.href = "level7.html"
        }

    });

    // 全局 mouseup（确保任何地方松开都能结束拖拽）
    document.addEventListener("mouseup", function () {
        isDragging = false;
    });
}