function back() {
    window.history.back(-1);
}
var phone = document.querySelector('#inputPhone').valueOf();
var btn = document.querySelector('#btn');
function submit(e) {
    var e = this;
    if(phone.value.length == '11'){
        btn.style.background = '#FF0924';
    }
}
var code = document.querySelector('.code');
var t = 30;
var bool = true;
code.addEventListener('touchstart',function () {
    if(bool == true){
        var timer = setInterval(function () {
            if(t>0){
                bool = false;
                code.innerHTML = t+'s后重新获取';
                t--;
            }
            if(t==0){
                code.innerHTML = '发送验证码';
                clearInterval(timer);
                t=30;
                bool=true;
            }
        },1000);
    }
},false)