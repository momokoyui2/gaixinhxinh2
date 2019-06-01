$(window).on("load", function() {
  $.when(
    $.getScript("//cdn.jsdelivr.net/npm/lightgallery@1/dist/js/lightgallery.min.js"),
    $.getScript("//cdn.jsdelivr.net/npm/lg-zoom@1/dist/lg-zoom.min.js"),
    $.getScript("//cdn.jsdelivr.net/npm/lg-thumbnail@1/dist/lg-thumbnail.min.js"),
	$.getScript("//cdn.jsdelivr.net/npm/lg-share@1/dist/lg-share.min.js"),
	$.getScript("//cdn.jsdelivr.net/npm/lg-video@1/dist/lg-video.min.js"),
	$.getScript("//cdn.jsdelivr.net/npm/lg-autoplay@1/dist/lg-autoplay.min.js"),
    $.Deferred(function(deferred) {
      $(deferred.resolve);
    })
  ).done(function() {
    $('#lightgallery').lightGallery({
      selector: "a[imageanchor]"
    });

  });
})
