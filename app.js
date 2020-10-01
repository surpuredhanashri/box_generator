let button = document.getElementById("theboxes");
button.addEventListener("click",myFunction);

var oldvalue = 0;
var i= 0;
function myFunction(){
    let n = document.getElementById('number').value;
    n = parseInt(oldvalue) + parseInt(n);
    for(i=1; i<=n; i++){
        var box = document.createElement('div');
        box.classList.add('mydiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML=1;
    }

    oldvalue = document.getElementById('box').lastElementChild.innerHTML;
    console.log(oldvalue)
}