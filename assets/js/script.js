// $(function (){
//     $("[data-toggle='tooltip']").tooltip()
// });

(() => {
    const nav = document.querySelector(".navbar");
    const colorChange = document.getElementsByTagName('nav')[0].getAttribute("data-color");
    console.log(colorChange)
    window.onscroll = () => {
        if(window.scrollY > 10) {
            nav.classList.add(colorChange);
        } else {
            nav.classList.remove(colorChange);
        }
    }
})();

$(function(){
    $(".carousel").carousel({interval: 2000});
    $("#carouselButton").on("click", () => {
        
        const carouselBtn = $("#carouselButton ").children("i").hasClass("fa-pause");
        const playBtn = $("#carouselButton").children("i").addClass("fa-play");
        const pauseBtn = $("#carouselButton").children("i").addClass("fa-pause");

        if (carouselBtn) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            playBtn;
        } else {
            $(".carousel").carousel("cycle");
            $(".carouselButton").children("i").removeClass("fa-play");
            pauseBtn;
        } 
    });
});