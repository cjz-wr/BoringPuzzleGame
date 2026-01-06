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
    level6_img.addEventListener("mousedown", startDrag);

    // 触摸开始（移动端）
    level6_img.addEventListener("touchstart", function(event) {
        startDrag(event.touches[0]); // 使用第一个触摸点
    });

    // 开始拖拽的通用函数
    function startDrag(event) {
        isDragging = true;
        const rect = level6_img.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        level6_img.style.position = "absolute";
        level6_img.style.zIndex = "1";
        level6_img.style.touchAction = "none"; // 防止移动端的默认触摸行为
        event.preventDefault(); // 阻止拖拽图片默认行为
    }

    // 鼠标移动
    document.addEventListener("mousemove", handleMove);

    // 触摸移动
    document.addEventListener("touchmove", function(event) {
        handleMove(event.touches[0]);
        event.preventDefault(); // 防止页面滚动
    }, { passive: false });

    // 移动处理通用函数
    function handleMove(event) {
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
    }

    // 全局 mouseup（确保任何地方松开都能结束拖拽）
    document.addEventListener("mouseup", endDrag);

    // 触摸结束
    document.addEventListener("touchend", endDrag);
    document.addEventListener("touchcancel", endDrag); // 处理触摸取消的情况

    // 结束拖拽通用函数
    function endDrag() {
        isDragging = false;
    }

    // 防止移动端长按出现菜单
    level6_img.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        return false;
    });
}