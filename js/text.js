

  /**************SOURCE: plug in from SlidesJS plugin***********/
    
    $(function() {
      event.preventDefault();  
      $('#slides').slidesjs({
          play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true,
        }
      });
    });

$(document).ready(function() {
   var gallery = new $.ThumbnailGallery($('#gallery'));
});
