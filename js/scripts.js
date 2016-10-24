$(document).ready(function(){

  var tags = ["h1", "p", "img"];
  tags.forEach(function(tag){
    $(tag).click(function(){
    alert("This is a " + tag + " element.")
    });
  });


});
