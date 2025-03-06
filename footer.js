const foot = document.querySelector('.footer-container');
fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    foot.innerHTML.data
})