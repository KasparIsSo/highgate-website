document.querySelector('.nav__mobileMenuWrapper').addEventListener('click', function(){
    this.parentNode.querySelector('.nav__links').classList.toggle('active');
    var bars = this.querySelectorAll('.nav__mobileMenuBar');
    if (!bars[0].classList.contains('rotate')){
        for (var i = 0; i < bars.length; i++) {
        bars[i].classList.toggle('center');
        }
        setTimeout(function(){
        for (var i = 0; i < bars.length; i++) {
            bars[i].classList.toggle('rotate');
        }
        }, 300);
    } else {
        for (var i = 0; i < bars.length; i++) {
        bars[i].classList.toggle('rotate');
        }
        setTimeout(function(){
        for (var i = 0; i < bars.length; i++) {
            bars[i].classList.toggle('center');
        }
        }, 300);
    }
})
