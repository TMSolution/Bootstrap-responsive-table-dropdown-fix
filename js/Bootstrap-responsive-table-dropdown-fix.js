
$(".table-responsive .dropdown").on("show.bs.dropdown", function () {
  
  
  if($('body').find('.dropdown-temp-container').length==0){
    var container='<span class="dropdown-temp-container open"></span>';
    $('body').append(container);
  }

      var container=$('body').find('.dropdown-temp-container');
      $(container).find('.dropdown-temporary').remove()
 
  
  var dropdownMenu = $(this).find(".dropdown-menu:first");
  var dropdownButtonPosition = $(this).position();
                      
  var dropdownButtonHeight = $(this).height();
  var dropdownButtonOffset = $(this).offset();
  var dropdownMenu = $(this).find(".dropdown-menu:first");
  var dropdownMenuHeight = dropdownMenu.height();
  var dropdownMenuWidth =dropdownMenu.width() ;
  var element=dropdownMenu.clone();
  dropdownMenu.css('display','none')
  element
         .css("right",($(window).width()-parseInt(dropdownButtonOffset.left)-$(this).width())+'px')
         .css("top",(parseInt(dropdownButtonOffset.top)+dropdownButtonHeight)+'px')
         .css('display','block')
         .css('position','absolute') 
         .addClass('dropdown-temporary');
 $(container).append(element)
  
                });
