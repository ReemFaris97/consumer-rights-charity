 $(document).ready(function () {
   
     /// loading website

     jQuery(window).load(function () {
         $(".loader").fadeOut(500, function () {
             $(".loading").fadeOut(500);
             $("body").css("overflow-y", "auto");
         });
     });


     /** Inside Ul **/
//     $(".inside-ul").slideUp();
//     
//     $("#ul-titile").click(function () {
//         $(".inside-ul").slideDown(500);
//     });
//     
     
     
     
     $(".inside-ul").slideUp();
    $(".ul-titile").on('click', function(){
        
        $(this).next(".inside-ul").slideToggle();
        $(this).children(".fa-plus").toggleClass("fa-minus");
    });
     
     
     
     
 });
