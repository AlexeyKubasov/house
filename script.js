const btn_theme = document.querySelector(".toogle_theme");
// Cмена темы и сохранение в localstorage
if (localStorage.getItem('scheme')=='dark'){
    document.body.classList.add("dark");
    btn_theme.innerHTML = "☽︎";
};

btn_theme.addEventListener("click", ()=>{
    if(btn_theme.textContent == "☼"){
        btn_theme.innerHTML == "☽︎";
        document.body.classList.toggle("dark");
        localStorage.setItem("scheme", "dark")
    } else {
        btn_theme.innerHTML == "☼";
        document.body.classList.toggle("dark");
        localStorage.setItem("scheme", "light")
    }
});

// Вывод данных с формы

const btn_form = document.querySelector(".forms_btn");
btn_form.addEventListener("click", (ev)=> {
    ev.preventDefault()
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    console.log(`Имя: ${name}, Email: ${email}`);    
})