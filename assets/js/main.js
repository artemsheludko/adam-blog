$(document).ready(function() {

  // Menu Settings
  $('.menu-icon, .menu-icon-close').click(function(e) {
    e.preventDefault();
    $('.flex-container').toggleClass('active');
  });

  // Search Settings
  $('.search-icon').on('click', function(e){
    e.preventDefault();
    $('.search-box').toggleClass('search-active');

    if ($('.search-box').hasClass('search-active')) {
      $('.search-icon-close').on('click', function(e){
  		e.preventDefault();
  		$('.search-box').removeClass('search-active');
  	});
  }
  });

  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{site.baseurl}}/search.json',
    searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
    noResultsText: 'No results found',
    fuzzy: false,
    exclude: ['Welcome']
  });

});
