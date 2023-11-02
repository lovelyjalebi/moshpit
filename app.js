const lightMode = document.querySelector("#beigeLightMode");
const darkMode = document.querySelector("#orangeDarkMode");

lightMode.addEventListener("click",function(){
    document.querySelector("main").classList.add("lightmain");
    document.querySelector(".navbar").classList.add("lightnavbar");
    document.querySelector(".title").classList.add("lighttitle");
    document.querySelector(".username").classList.add("lightusername");  
    console.log("light");  
})

darkMode.addEventListener("click",function(){
    document.querySelector("main").classList.remove("lightmain");
    document.querySelector(".navbar").classList.remove("lightnavbar");
    document.querySelector(".title").classList.remove("lighttitle");
    document.querySelector(".username").classList.remove("lightusername");
    console.log("dark");
})

