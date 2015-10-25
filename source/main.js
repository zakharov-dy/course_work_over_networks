var show = 150;
var delay = 1000;
$( document ).ready(function() {

   $(window).scroll(function() {
      if ($(this).scrollTop() > show) $('#cs-footer').fadeIn();
      else $('#cs-footer').fadeOut();
   });
   $('#cs-footer').click(function () {
      $('body, html').animate({
         scrollTop: 0
      }, delay);
   });

   $(".cs-head").on( "click", function() {
      var id = $(this)[0].id;
      paragraphHeader = $('#'+id.slice(2) + ' .paragraph-header').html();
      paragraphBody = $('#'+id.slice(2) + ' .paragraph-body').html();
      $("#paragraph-title").text(paragraphHeader);
      $("#paragraph-content").html(paragraphBody);
   });
   $("#p-title-page").click();
});