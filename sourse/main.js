$( document ).ready(function() {
   $(".cs-head").on( "click", function() {
      var id = $(this)[0].id;
      paragraphHeader = $('#'+id.slice(2) + ' .paragraph-header').html();
      paragraphSubheader = $('#'+id.slice(2) + ' .paragraph-subheader').html();
      paragraphBody = $('#'+id.slice(2) + ' .paragraph-body').html();
      $("#paragraph-title").text(paragraphHeader);
      $("#paragraph-subtitle").text(paragraphSubheader);
      $("#paragraph-content").html(paragraphBody);
   });
   $("#p-home").click();
});