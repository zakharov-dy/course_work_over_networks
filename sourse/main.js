$( document ).ready(function() {
   $(".cs-head").on( "click", function() {
      var id = $(this)[0].id;
      paragraphHeader = $('#'+id.slice(2) + ' .paragraph-header').html();
      paragraphBody = $('#'+id.slice(2) + ' .paragraph-body').html();
      $("#paragraph-title").text(paragraphHeader);
      $("#paragraph-content").html(paragraphBody);
   });
   $("#p-home").click();
});