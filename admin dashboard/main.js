let toggler = document.querySelector(".toggler");
let sidebar = document.querySelector(".sidebar");
let main = document.querySelector(".main");

toggler.addEventListener("click",()=>{
    sidebar.classList.toggle("active");
    main.classList.toggle("active");
    toggler.classList.toggle("active");
})






