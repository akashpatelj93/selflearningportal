$(document).ready(function(){

  //alert("Boom!");  
  //Get current path and find target link
  //var path = window.location.pathname.split("/").pop();
  
  var url = window.location.href;
  
  var array = url.split('/');

  var lastsegment = array[array.length-1];
  
  //alert('Last Segment is '+lastsegment);
  
  // Account for home page with empty path
  if (lastsegment == '') {
    lastsegment = 'index.html';
  }
      
  var target = $('#menu_nav ul li a[href="#/'+lastsegment+'"]');
  // Add active class to target link
  target.parent().addClass('active');
     
});