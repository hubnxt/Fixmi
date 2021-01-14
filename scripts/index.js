$(document).ready(function(){

    $('#signup_card').hide();//hidden signup card

    $('#signup_link').click(function(){
        event.preventDefault();
        $('#login_card').hide();
        $('#signup_card').show();
        
    });

    $('#login_link').click(function(){
        event.preventDefault();
        $('#login_card').show();
        $('#signup_card').hide();
        
    });

    //Get signup form

    $('#signup').submit(function(){
        event.preventDefault();
        var form = new FormData(document.getElementById('signup'));

        var settings = {
            "url": ""+url+"signup",
            "method": "POST",
            "timeout": 0,
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "data": form
          };
          
          $.ajax(settings).done(function (response) {
              var msg = JSON.parse(response);
            alert(msg.message);
            location.reload();
          });

    });

    $('#login').submit(function(){
        event.preventDefault();
        var form = new FormData(document.getElementById('login'));

        var settings = {
            "url": ""+url+"login",
            "method": "POST",
            "timeout": 0,
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "data": form
          };
          
          $.ajax(settings).done(function (response) {
              var msg = JSON.parse(response);
            alert(msg.message);
          });

    });

});


