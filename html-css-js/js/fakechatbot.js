/*!
Name: FakeChatBot.JS
Dependencies: jQuery
Author: Michael Ambass
Author URL: http://ambass.me
Date Created: November 12, 2016
Licensed under the MIT license
Version: 1.0
*/
(function ( $ ) {

    $.fn.fakechatbot = function() {

      
      // Plugin settings
      var settings = $.extend({

        // Duration per word in miliseconds
        durationPerWord: 200
      });


      // Display typing message
      var typingStart = function(elt){
          elt.addClass('fakechatbot-typing-active');
      };

      // Remove typing message
      var typingStop = function(elt){
        elt.removeClass('fakechatbot-typing-active');
      };

       var restartButton = function (elt){
        elt.addClass('restart-btn-active')
      }


      // Save the current duration
      var currentDuration = 0;
      var countElements = $(this).children('.fakechatbot-message').length;
      var countElement = 0;

      // Start typing
      typingStart($(this).children('.fakechatbot-typing'));

      $(this).children('.fakechatbot-message').each(function(index, value){
   
        countElement++;

        // Count words
        var message = $(this).html();
        var messageWords = message.split(' ').length;
        var currentElement = $(this);
      

        // Update the current duration to create a sequence
        currentDuration = currentDuration + (messageWords * settings.durationPerWord);

        // Display the message
        setTimeout(function(){
          currentElement.addClass('fakechatbot-message-display');
        }, currentDuration);
        

        if($(this).attr('data-pause')){
          setTimeout(function(){
            typingStop($('.fakechatbot-typing'));
          }, currentDuration);

          currentDuration = currentDuration + parseInt($(this).attr('data-pause'));

          setTimeout(function(){
            typingStart($('.fakechatbot-typing'));

          }, currentDuration);
        }

        if(countElement == countElements && countElement != 0){
          setTimeout(function(){
            typingStop($('.fakechatbot-typing'));
          }, currentDuration);
          setTimeout(function(){
            restartButton($('.restart-btn'))
          },currentDuration)
        }
      });
    };


    $.fn.restartChat = function() {
      
      var restart = function (elt){
        elt.removeClass('fakechatbot-message-display')
       $( "button" ).even().removeClass( "restart-btn-active" )
      }
      restart($('.fakechatbot-message'))
      $('#chatbot').fakechatbot()

    }

    

}( jQuery ));
