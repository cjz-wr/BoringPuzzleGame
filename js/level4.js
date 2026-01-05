const getNxet = document.getElementById("getNext")
const getTis = document.getElementById("level4-p3")
let tis = false

if (getNxet) {
    getNxet.addEventListener("blur",() =>{
        const next = getNxet.value;
        if (next === "流星"){
            window.location.href="level5.html"
        }
        else if(tis) {
            alert("你视乎发现了什么哎")
        }
    })
}
if (getTis){
    getTis.addEventListener("mouseenter",() =>{
        getTis.style.color = "white"
    })
    getTis.addEventListener("mouseleave",() =>{
        getTis.style.color = "coral"
    })
    getTis.addEventListener("click",() =>{
        alert("你似乎发现了什么?")
    })
}