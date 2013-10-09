jQuery(function() {
  $('#pins').imagesLoaded(function() {});
  return $('#pins').masonry({
    itemSelector: ".box"
  });
});
