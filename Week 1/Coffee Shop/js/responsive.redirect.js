function redirectResponsive (mediascreen) {
    if (mediascreen.matches) {
        location.replace("pages/product.html");
    } else {}
}

let mediascreen = window.matchMedia("(max-width: 992px)");
redirectResponsive(mediascreen);
mediascreen.addListener(redirectResponsive);