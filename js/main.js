// menu nav start
$(function () {
    if (screen.width < 768){
    $(".mobile-menu").click(function () {
        var effect = 'slide';
        var options = {
            direction: $('left').val()
        };
        var duration = 500;
        $('.sidebar').toggle(effect, options, duration);                 
    });
}
    "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }
});
// menu nav end

if (screen.width > 767){
    $(".mobile-menu").click(function () {
        $('.sidebar').toggleClass('wide-sidebar');
        $('.container-fluid').toggleClass('contnt-right');

    });
}


/* content scroll start */
if (screen.width > 1400){
    $('.slim-id').slimscroll({
        height: 'calc(100vh - 265px)',
        disableFadeOut: true
    });
}
else if (screen.width > 767){
	$('.slim-id').slimscroll({
	    height: 'calc(100vh - 180px)'   
	});
}
else {
    $('.slim-id').slimscroll({
        height: 'auto',    
    });
}
/* content scroll end */


/* nav scroll start */
if (screen.width > 1400){
    $('.nav-slim').slimscroll({
        height: 'calc(100vh - 290px)',
        disableFadeOut: true
    });
}
else if (screen.width < 767){
    $('.nav-slim').slimscroll({
        height: 'calc(100vh - 40px)'   
    });
}
else {
    $('.nav-slim').slimscroll({
        height: 'calc(100vh - 230px)',
        disableFadeOut: true  
    });
}
/* nav scroll end */