
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
         
  element.on('click', function (){ $(this).css('display','none')})        
 $(container).append(element)
  
                });
                
                
 $(document).mouseup(function (e)
                    {
                        
                        var container = $(".dropdown-temp-container .dropdown-temporary");

                        if (!container.is(e.target) // if the target of the click isn't the container...
                                && container.has(e.target).length === 0) // ... nor a descendant of the container
                        {
                            container.hide();
                        }
                    });                
