$(function () {
    console.log('ready');

    
    $('#btn_work').click(function () {
        $('.page-nav').removeClass('active');
        $(this).addClass('active');
        $('#main_page').removeClass('toggle');        
        $('#work_slide').carousel('cycle');        
    });
    
    $('#btn_about').click(function () {
        $('.page-nav').removeClass('active');
        $(this).addClass('active');
        $('#main_page').addClass('toggle');
        $('#work_slide').carousel(0);
        $('#work_slide').carousel('pause');
    });
});