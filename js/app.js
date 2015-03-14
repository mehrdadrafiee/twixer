var main = function() {};
var getDetail = function() {

   "use strict";
  
    var twt_id = $('#twt_id').val();
    console.log(twt_id);
    
   if(twt_id === '') {
      $('#results').html("<h3>Please provide a valid Twitter username.</h3>");
    } else {
      $('#results').html("<h3>Please wait a second</h3>");
      $.ajax({
        url: "http://twitcher.steer.me/user/"+twt_id+"?key=cg3pc6tg", data: {
          format: 'json'
        },
        error: function(){
          $('#results').html('<h3>'+twt_id+'is not a valid twitter user.');
        },
        dataType: 'json',
        success: function(data) {
          console.log(data);
          $('#results').html('<p>'+"User name is: "+data.name+'</p>'+
                              '<p>'+"Description: "+data.description+'</p>'+
                              '<p>'+"The user is located in "+data.location+'</p>'+
                              '<p>'+"This user has "+data.followers_count+" followers and is following "+data.friends_count+" users."+'</p>');
        },
        type: 'GET'
      });
    }
  return false;
};

$('#search').click(getDetail);


$(document).ready(main);