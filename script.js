const arrows = document.querySelectorAll(".arrow");
const sectionList = document.querySelectorAll(".section-list");
arrows.forEach((arrow,i) => {
    const itemNum = sectionList[i].querySelectorAll("img").length;
    let clickcount = 0;
    arrow.addEventListener("click", () => {
        const ratio =   Math.floor(window.innerWidth / 270);
        clickcount++;
        if (itemNum - (4 + clickcount) +(4-ratio)>= 0) {
            sectionList[i].style.transform = `translateX(${sectionList[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
           

        } else {
            sectionList[i].style.transform = "translateX(0)"
            clickcount = 0;
        }

    })
})
/////toggle 
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.movie-list-title,.navbar,.navbar-container,.logo,.sidebar,.left-menu-icon,.toggle,.toggle-ball"
);
ball.addEventListener("click", () => {
    items.forEach(item=>{
        item.classList.toggle("active");
    })
})