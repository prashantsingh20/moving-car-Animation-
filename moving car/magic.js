$(document).ready(function(){

    //variables
    $surface=$('.surface');
    $car=$('.car');
    $img=$('.car img');
    let flag=true;

    const cars=['img_05.png','img_06.png'];

    //keypress event
    $(document).on('keypress',function(e){
        if(e.which==13){
            $("#surface").toggleClass("moveRight");
            $("#car").toggleClass("suspension");
           //$($surface),toggleclass('moveRight');
          // $($car),toggleclass('suspension');
        }
    });

    //lights
    $(document).on('keypress',function(e){
        if(e.which==119){
            if(flag){
                flag=false;
                $img.attr('src',cars[0]);
            }
            else if (!flag){
            flag=true;
            $img.attr('src',cars[1]);
            }
        }
    });
});