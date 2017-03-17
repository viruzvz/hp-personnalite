var $ = require('jquery')
;!function () {
  $(document).ready(function() {
  $('.thumbnail').click(function(){
        $('.modal-body--js').empty();
      var title = $(this).parent('a').attr("title");
      $('.modal-title--js').html(title);
      $($(this).parents('div').html()).appendTo('.modal-body--js');
      $('#galeria1').modal({show:true});
  });
  });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-89184615-1', 'auto');
  ga('send', 'pageview');


}()

