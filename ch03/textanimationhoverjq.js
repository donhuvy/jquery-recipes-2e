$(document).ready(function () {
    $('.books').hide();
    $('.movies').hide();
    $('.music').hide();
    $('#booksbutton').mouseover(function () {
        $('.books').show('slow');
        $('.movies').hide();
        $('.music').hide();
    });
    $('#moviesbutton').mouseover(function () {
        $('.movies').show('slow');
        $('.books').hide();
        $('.music').hide();
    });
    $('#musicbutton').mouseover(function () {
        $('.music').show('slow');
        $('.books').hide();
        $('.movies').hide();
    });
});
