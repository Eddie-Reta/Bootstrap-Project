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