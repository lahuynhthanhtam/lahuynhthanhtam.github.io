// Slider
var myIndex = 0;
carousel();
function carousel() {
var i;
var x = document.getElementsByClassName("text-container");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
setTimeout(carousel, 3000); // Change image every 2 seconds
}
// Section header
var header = document.getElementById("header");
var mobileMenu = document.querySelector(".menu-btn");
var currentHeight= header.clientHeight;
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight;
    // Nếu chiều cao hiện tại đang bằng 46px thì
    //  kích vào chiều cao thành auto
    if(isClosed === currentHeight){
        header.style.height = 'auto';
    }
    else{
        header.style.height = null;
    }
}
var menuItems = document.querySelectorAll("#nav li a[href*='#']");
for(var i = 0; i < menuItems.length;i++){
    menuItems = menuItems[i];

    menuItems.onclick = function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");
        if(isParentMenu){
            event.preventDefault();
        }    
        else{
            header.style.height = null;
        }
    }
}

// Show modal when onclick

const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal')
const iconClose = document.querySelector('.js-close') 
const btnClose = document.querySelector('.modal-footer-close') 
const preModal = document.querySelector('.modal-container')
function handleClickOpen(){
    modal.classList.add('open')
}

function handleClickClose(){
    modal.classList.remove('open')
}

for(let i = 0; i < buyBtns.length; i++){
    buyBtns[i].onclick = handleClickOpen
}

btnClose.onclick = handleClickClose
iconClose.addEventListener('click',handleClickClose)
modal.onclick = handleClickClose;

preModal.onclick = (e)=>{
    e.stopPropagation();
}