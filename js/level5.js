const find_next = document.getElementById("find-next")
const next_p = document.getElementById("next-p")
const last_p = document.getElementById("last-p")

let where = 0

let say_list = ["首先呢，你能来到第五关是ok的(作弊的除外)","其次呢,这一关很简单的","你只要仔细看看就知道怎么进入下一关了","所以啊，要仔细","心急吃不了热豆腐","确实也不是什么故事，只是告诉你要仔细","嘿嘿"]

let canGoNext = false

if(find_next){
    find_next.addEventListener("click", function(){
        if(canGoNext){
            window.location.href = "level6.html"
        }
    })
}

if (next_p && last_p) {
    last_p.addEventListener("click", () => {
        where -=1

        if (where <0 ){
            where=0
            find_next.textContent = say_list[where]
            alert("上面已经没有了");
        }
        else {
            find_next.textContent = say_list[where]
        }
        canGoNext = (where === 2)

    })

    next_p.addEventListener("click", () => {
        where +=1
        if(where > say_list.length -1){
            where = say_list.length -1;
            find_next.textContent = say_list[where];
            alert("下面已经没有了");
        }else {
            find_next.textContent = say_list[where];
        }
        canGoNext = (where === 2)
    })

}
