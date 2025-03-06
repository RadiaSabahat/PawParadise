const nav= document.querySelector(".navbar-container");
fetch("/navbar.html")
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
}
)
