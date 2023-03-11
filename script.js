dragElement(document.getElementById("dialog"));
var bottomDrag = document.getElementById("bottom")
var exit = document.querySelector(".exit")
var okBtn = document.querySelector(".btn")

okBtn.addEventListener("click", function(){
    alert('Ok clicked!!!');
})

exit.addEventListener("click", function(){
    alert('Exit clicked!!!')
})

// okBtn.addEventListener("click", function(){
//     console.log('X-index:'+ pos3)
//     console.log('Y-index:'+ pos4)
// })



function dragElement(elmnt) {
    var pos1 = 0, pos2= 0, pos3 = 0, pos4 = 0;
    if(bottomDrag){
        bottomDrag.onmousedown = dragMouseDown;
    }else{
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e){
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log('X-index:'+ pos3)
        console.log('Y-index:'+ pos4)
        elmnt.style.top = (elmnt.offsetTop - pos2)+ "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1)+ "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
    
}