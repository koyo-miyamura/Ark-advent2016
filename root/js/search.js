// root/js/search.js
$(document).ready(function()
{
  $('.search input[type="submit"]').hide();

  $('#search_keywords').keyup(function(key)
  {
    // this.value.lengthがあると全部消した時に更新されない
    if (this.value.length >= 3 || this.value == '')
    {
      $('#loader').show();
      $('#jobs').load(
        $(this).parents('form').attr('action'),
        { q: this.value },
        function() { $('#loader').hide(); }
      );
    }
  });
});