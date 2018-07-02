console.log('hi');

window.addEventListener("load", function() {
// setTimeout(function() {
    document.getElementById('preloader').classList.toggle('fade');
    setTimeout(function(){
        document.getElementById('preloader').classList.toggle('hidden');
    }, 500);
// }, 800);
});