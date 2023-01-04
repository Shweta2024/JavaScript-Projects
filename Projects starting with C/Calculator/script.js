

var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        if (btntext == 'x') {
            btntext = '*';
        }

        if (btntext == '/') {
            btntext = '/';
        }


        screen.value += btntext;
    });
}



function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value=f;

}
function square() {
    
    num = screen.value;
    f=num*num;

    screen.value=f;

}
function cube() {
    
    num = screen.value;
    f=num*num*num;

    screen.value=f;

}
function sqrtfunc() {
    
    num = screen.value;
    f=Math.sqrt(num);

    screen.value=f;

}
function cbrtfunc() {
    
    num = screen.value;
    f=Math.cbrt(num);

    screen.value=f;

}

function backsc(){
    screen.value=screen.value.substr(0,screen.value.length-1);
}
$(".btn").click(function(){
    $(this).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("button.mp3");
  audio.play();
});
