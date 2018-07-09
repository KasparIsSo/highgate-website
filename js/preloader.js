window.addEventListener("load", function() {
    document.getElementById('preloader').classList.toggle('fade');
    setTimeout(function(){
        document.getElementById('preloader').classList.toggle('hidden');
    }, 500);
});