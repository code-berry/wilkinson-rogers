function scrollto1() {
    let aTag = $("a[name='" + 'services_1' + "']");
    $('html').animate({scrollTop: aTag.offset().top}, 'slow');
}

function scrollto2() {
    let aTag = $("a[name='" + 'services_2' + "']");
    $('html').animate({scrollTop: aTag.offset().top}, 'slow');
}

function scrollto3() {
    let aTag = $("a[name='" + 'services_3' + "']");
    $('html').animate({scrollTop: aTag.offset().top}, 'slow');
}

$('.serv_slide_1').click(()=> scrollto1());
$('.serv_slide_2').click(()=> scrollto2());
$('.serv_slide_3').click(()=> scrollto3());