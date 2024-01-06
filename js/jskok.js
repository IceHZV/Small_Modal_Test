$(document).ready(function(){
    $("#image-upload").on("change",function(){
        var $input = $(this),
            reader = new FileReader(); 
        reader.onload = function(){
          $("#image").attr("src", reader.result);
        } 
        reader.readAsDataURL($input[0].files[0]);
      });
  });

  document.addEventListener(
    'DOMContentLoaded',
    function() {
      document.getElementById('uk').onchange = toggleBilling
    },
    false
  )
  function toggleBilling() {
    var billingItems = document.querySelectorAll('#dis1 select, input[type="number"]')
    for (var i = 0; i < billingItems.length; i++) {
      billingItems[i].disabled = !billingItems[i].disabled
    }
  }


 

  
  
  
  