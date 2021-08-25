$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
        //add product name
        var productName = $(this).attr("data-product");
        $('#productName').text(productName);
        //add discount code
        var codeNumber = $(this).attr("data-code")
        $('#codeNumber').text(codeNumber);
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');
    });

    //make toast disappear when you click escape
    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $('#toast').toast('hide')
       }
   });
});

