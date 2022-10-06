
$('button').click(function() {
   
   if($('#screen').val() == 0) {
      $('#screen').val('');
     }
     y = $('#screen').val()
     
   
   let x = $(this).attr('id').toLowerCase();
  
   
  


   

   switch(x) {
      
      case '=' : 
         if(y == '0' || y == '') {
            $('#screen').val('Nope!')

            setTimeout(function() {
               $('#screen').val('0')
            }, 500)
            break
         }

         else {
         let value = eval(y).toString();
         $('#screen').val("Ans = " + value)
         break
         }

      case 'del':
         if(y != '0') {
         $('#screen').val(y.slice(0, -1))
         }

         break
      case 'c':
         $('#screen').val(0)
         break
      default:
         $('#screen').val(y + x)

      
   }
});


$('input').on('keyup keydown', function() {
   let allowed = ['0','1','2','3','4','5','6','7','8','9','c','del','=','*','/'];
   x = $(this).val()
   if (allowed.indexOf($(this).val().slice(-1)) == -1) {
      $(this).val(x.slice(0,-1))
   }
})




