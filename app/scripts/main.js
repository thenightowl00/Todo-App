//console.log('\'Allo \'Allo!');

 $(document).ready(function(){

    



        var start = '<div class="boxbox2 center outlinecolor outdiv"><div class="row" id="itemtodo2"><div class="col-xs-2"><button type="button" id="buttoncircle" class="buttonsize boxcolor no-outline buttons"><i class="fa fa-circle-thin circle buttonstyle"></i></button></div><div class="col-xs-10 hovertext boxcolor box-style3"><div class="col-xs-10" id="todotext"><p class="left text2 textfont todude" id="todolist">';
        //for adding todos
        var finish = '</p></div><div class="col-xs-2"> <button type="button" id="buttonexit" class="update buttonsize no-outline"><i class="material-icons">clear</i></button></div></div></div><div class="row"></div></div></div>';

        var itemsleftstart = '<p class="text3 textfont itemsleft">';  //for items counter
        var itemsleftfinish = ' items left</p>'

        var x = 0;
        var y= 0;

        var clearcompleted = '<i class="material-icons">clear</i>' //for clearing all



      var entityMap = {   //keeping texts in strings
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': '&quot;',
      "'": '&#39;',
      "/": '&#x2F;'
      };

      function escapeHtml(string) {
      return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
      });
      }

		
	


       	$('input').keypress(function(e) {   //adds todos

       	var textinput = $('#todoinput').val();
       	var textlength = $('#todoinput').val().length; //not used
        var text = escapeHtml(textinput);

     
      
        if(e.which == 13) {     

        	if ($.trim(text).length >= 3) {

        		 $('#itemtodo').prepend(start + text + finish);

        		$('#todoinput').val('');

            x++;
            $(".itemsleft").html(itemsleftstart+x+itemsleftfinish);

        	}

        	else {

        		alert('Todo input must be >= 3 characters. Not inlcuding spaces.');
        	}aisdfjaisj



    	}	
    	});

        if (x == 0 ) {  //hides clear completed x

            $(".clearcompleted").hide();
        }

        

        //if (x > 0 ) {   //for clearing all

          //$("#completed").append(clearcompleted);
        //}



        $('#itemtodo').on('click','#buttonexit', function(e){ //user click on remove text
          $(this).parents('div').eq(3).remove();


          if ($(this).parent().parent().prev().children().children().is(".fa-circle-thin")) {       
            x--;  
          }

          $(".itemsleft").html(itemsleftstart+x+itemsleftfinish);

          if (x == 0 ) {  //hides clear completed x

            $(".clearcompleted").hide();
        }

        y = $(".fa-check-circle-o").length;   //clear completed if statement
          if (y > 0 ) {  

            $(".clearcompleted").show();
          } 
          else {
            $(".clearcompleted").hide();
          };


        })
    
  
        $('body').on('click', '.buttonstyle', function() {   //checks boxes
          $(this).toggleClass("fa-circle-thin fa-check-circle-o");

          
          if ($(this).is(".fa-circle-thin")) {       
            x++;  
          }

          else if($(this).is(".fa-check-circle-o")) {       
            x--;
          };


          $(".itemsleft").html(itemsleftstart+x+itemsleftfinish);


          $(this).parent().parent().next().children().children().toggleClass("crossword"); //crosses out single word

          y = $(".fa-check-circle-o").length; //clear completed if statement
          if (y > 0 ) {  

            $(".clearcompleted").show();
          } 
          else {
            $(".clearcompleted").hide();
          };
 
        });


     


        $('body').on('click', '#downbutton', function() {     //checks all boxes.

          if ($(".buttonstyle").is(".fa-circle-thin")) {

            $(".fa-circle-thin").toggleClass("fa-circle-thin fa-check-circle-o");

             if ($(".todude").is(".todude")) {  //for word cross

                  $(".todude").addClass("crossword");
            
                }

              x = $(".fa-check-circle-o").length; //for counter
              $(".itemsleft").html(itemsleftstart+x+itemsleftfinish);

          }

          else if ($(".buttonstyle").is(".fa-check-circle-o")) {

                $(".fa-check-circle-o").toggleClass("fa-circle-thin fa-check-circle-o");  

                if ($(".todude").is(".crossword")) {  //for word cross

                  $(".todude").removeClass("crossword");
                }  

          };

         x = $(".fa-circle-thin").length; // for counter
        $(".itemsleft").html(itemsleftstart+x+itemsleftfinish);
          //$(".todude").toggleClass("crossword");     add class didnt work well

          y = $(".fa-check-circle-o").length; //clear completed if statement
          if (y > 0 ) {  

            $(".clearcompleted").show();
          } 
          else {
            $(".clearcompleted").hide();
          };

        });

        
        $('body').on('click','.clearcompleted', function() {  //clears all checked boxes

              $(".fa-check-circle-o").parent().parent().parent().remove();

              y = $(".fa-check-circle-o").length; //clear completed if statement
              if (y > 0 ) {  

                $(".clearcompleted").show();
              } 
              else {
              $(".clearcompleted").hide();
          };
        
        });

        $("body").on("dblclick",".todude", function(){ //for edit line

          
          
        });





       
        



        $("body").on("click", "#active", function() {        //hides checked boxes
          $(".fa-check-circle-o").parent().parent().parent().hide();      
        });

        $("body").on("click", "#active", function() {        //shows unchecked boxes
          $(".fa-circle-thin").parent().parent().parent().show();

            $(".clearcompleted").hide();      // hides clear completed
        });

        $("body").on("click", "#completed", function() {        //hides uncchecked boxes
          $(".fa-circle-thin").parent().parent().parent().hide();

          if (x > 0) {
          $(".clearcompleted").show(); //shows clear completed
          }

        });

        $("body").on("click", "#completed", function() {        //shows checked boxes
          $(".fa-check-circle-o").parent().parent().parent().show();      
        });

        $("body").on("click", "#all", function() {        //shows all boxes
          $(".fa-check-circle-o").parent().parent().parent().show();
          
          if (x > 0) {
          $(".clearcompleted").show(); //shows clear completed
          }

        });

        $("body").on("click", "#all", function() {        //shows all boxes
          $(".fa-circle-thin").parent().parent().parent().show();
          
          if (x > 0) {
          $(".clearcompleted").show(); //shows clear completed
          }

        });




/*
        $("#all").click(function(){

          $.toggle(

          function() {        //shows all boxes
          $(".fa-circle-thin").parent().parent().parent().show();
        },

        function() {        //shows all boxes
          $(".fa-check-circle-o").parent().parent().parent().show();

        })
        });


        if ($(fa-check-circle-o).length > 0 ) {  //shows clear completed x when todo is added 

            $(".clearcompleted").show();
          } 
*/


       





     });