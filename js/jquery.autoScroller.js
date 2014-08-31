function autoScroller(contentDiv, speed)
{
    contentDiv = "#"+contentDiv;
    var scrollSpeed = (speed==null) ? 5 : parseInt(speed);
    
    // double make sure the autoScroller-container has the correct css position and overflow property
    $(contentDiv).parent().css({position:'relative',overflow:'hidden'});
    
    // set contentDiv style
    $(contentDiv).css({position:'absolute',top:0});
    // get contentDiv height
    contentDivHeight = $(contentDiv).height();
    
   // call periodical
   $(contentDiv).everyTime(20, function(i){
        if (parseInt($(this).css('top'))>(contentDivHeight*(-1)+8))
        {
            // move scroller upwards
            offset = parseInt($(this).css('top'))-scrollSpeed+"px";
            $(this).css({'top':offset});
        }
        // reset to original position
        else
        {
            // reset to original position
            offset = parseInt($(this).parent().height())+8+"px";
            $(this).css({'top':offset});
        }
    });
    
    // on mouse over event, pause the scroller
   /* $(contentDiv).mouseover(function ()
    {
        speed = scrollSpeed;
        scrollSpeed = 100;       
    });
    */
	setInterval(function() {
      scrollSpeed+=5;
}, 10000);

    // on mouse out event, start the scroller
    $(contentDiv).mouseout(function ()
    {
        scrollSpeed = speed;
    });
}