
$('button').click(function() {
   
   let x = $(this).attr('id').toLowerCase();
   let y = $('#screen').val();

   switch(x) {
      
      case '=' : 
         let value = eval(y).toString();
         console.log(value);
         $('#screen').val("Ans = " + value)
         break

      case 'del':
         $('#screen').val(y.slice(0, -1))

         break
      case 'c':
         $('#screen').val('')
         break
      default:
         $('#screen').val(y + x)

      
   }
});





