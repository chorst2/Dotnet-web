$(function(){

    //Task # 1 -Randomize the attention seeker in balloons.html. Choose a random 
    //animate.css attention seeker and apply when the page loads using JavaScript.

    //create array of animation class names
    const animation_classes = ["animate__bounce", "animate__flash", "animate__pulse",
     "animate__rubberBand", "animate__shakeX", "animate__shakeY",
     "animate__headShake", "animate__swing", "animate__tada", "animate__wobble",
      "animate__jello", "animate__heartBeat"];
    //generate random num from 0 to array.length
    var randomNum = Math.floor(Math.random() * ((animation_classes.length - 1) + 1));
    var randomClass = animation_classes[randomNum];
    //apply class to h1 element
    var element = document.getElementById("randomAnimatedElement");
    element.classList.add(randomClass);

    
    

    //Task # 4 - Hovering the mouse over a checkbox label should change the 
    //color of the h1 element (Happy Birthday!) to the balloon color indicated in the label.
    // Moving the mouse out of the label should reset the color.
    
    let hoverCheckbox1 = document.getElementById("blueGreenLabel");
    hoverCheckbox1.addEventListener("mouseenter", function( event ) {
    // style the h1 element blue green
    document.getElementById("randomAnimatedElement").style.color = "CadetBlue";
    });
    hoverCheckbox1.addEventListener("mouseleave", function( event ) {
    //put it back to original color
    document.getElementById("randomAnimatedElement").style.color = "SlateGray";
    });
    

    let hoverCheckbox2 = document.getElementById("greenLabel");
    hoverCheckbox2.addEventListener("mouseenter", function( event ) {
    // style the h1 element green
    document.getElementById("randomAnimatedElement").style.color = "Chartreuse";
    });
    hoverCheckbox2.addEventListener("mouseleave", function( event ) {
    //put it back to original color
    document.getElementById("randomAnimatedElement").style.color = "SlateGray";
    });
    
    

    let hoverCheckbox3 = document.getElementById("blueLabel");
    hoverCheckbox3.addEventListener("mouseenter", function( event ) {
    // style the h1 element blue
    document.getElementById("randomAnimatedElement").style.color = "DarkBlue";
    });
    hoverCheckbox3.addEventListener("mouseleave", function( event ) {
    //put it back to original color
    document.getElementById("randomAnimatedElement").style.color = "SlateGray";
    });


    //Task # 2 - Create a toast when the submit button is clicked only if there are no balloons selected.

    $('#submit').click(function(){
        let isChecked = false;
        $('.form-check-input').each(function () {
            if ($(this).is(':checked')) {
                isChecked = true 
            }
        });
        if(!isChecked) $('#toast').toast('show');
    });

    //make toast disappear when you click escape
    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $('#toast').toast('hide')
       }
   });
    


    //Task # 3 - Add ability to check / uncheck all balloons with a single click (using a button, checkbox, link, etc…)

    $('#select-all').click(function () {
        $('.form-check-input').each(function () {
            $(this).prop('checked', true);
            $('#' + this.id + 'Img').css('visibility', 'visible')
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown')
        });
    });

    $('#deselect-all').click(function () {
        $('.form-check-input').each(function () {
            $(this).prop('checked', false);
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
        });
    });
    
        
    




    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false); 
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
    // make the image visible
    $('#' + this.id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    $(this).is(':checked') ?
     $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
     $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });




});