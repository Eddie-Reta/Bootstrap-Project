//tooltips toggle for reserve button 
// $(function (){
//     $("[data-toggle='tooltip']").tooltip()
// });
//es6 function on making sticky navbar change color at a certain point on the screen.
// (() => {
//     const nav = document.querySelector(".navbar");
//     const colorChange = document.getElementsByTagName('nav')[0].getAttribute("data-color");
//     console.log(colorChange)
//     window.onscroll = () => {
//         if(window.scrollY > 10) {
//             nav.classList.add(colorChange);
//         } else {
//             nav.classList.remove(colorChange);
//         }
//     }
// })();
// Had to clear out arrow function want working with usemin.
// $(function(){
//     $(".carousel").carousel({interval: 2000});
//     $("#carouselButton").on("click", () => {
        
//         const carouselBtn = $("#carouselButton ").children("i").hasClass("fa-pause");
//         const playBtn = $("#carouselButton").children("i").addClass("fa-play");
//         const pauseBtn = $("#carouselButton").children("i").addClass("fa-pause");

//         if (carouselBtn) {
//             $(".carousel").carousel("pause");
//             $("#carouselButton").children("i").removeClass("fa-pause");
//             playBtn;
//         } else {
//             $(".carousel").carousel("cycle");
//             $(".carouselButton").children("i").removeClass("fa-play");
//             pauseBtn;
//         } 
//     });
// });
$(function(){
    $(".carousel").carousel({interval: 2000});
    $("#carouselButton").on("click", function() {
        
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