document.addEventListener("DOMContentLoaded", () => {
    const btns = document.getElementsByClassName("main__discord-btn");
    
    for(let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("mouseover", () => {
            btns[i].style.transform = "scale(1.1)";
        });

        btns[i].addEventListener("mouseout", () => {
            btns[i].style.transform = "scale(1)";
        });
    }
});