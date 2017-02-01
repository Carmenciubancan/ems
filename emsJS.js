$(document).ready(function(){
  var idCounter = 0;


// bind event to button
  $('#addItem').on('click', function(){
    idCounter++;
    var name = $('#employer-name').val();
    var skill = $('#employer-skill').val();
    var title = $('#employer-title').val();

    newItem(idCounter, name, skill, title);

    $('.say-yo').click(function(){
      alert('yo!');
    });

  });


$(document).on('click', '.fire-everyone', function(){
   $('.employer').not('.ceo').remove();
});

$(document).on('click','.last-check-in',function(){
var now = getCurrentDate();
  $('.check-in-status').html(now);

});


});



function newItem (idCounter, name,skill,title){

  var isCeo = '';
  if(title === 'CEO'){
    isCeo = 'ceo';
  }

  var container =
            '<div class="employer ' + isCeo + '">'+
            '<div class="fields">'+
            '<p class="id">ID: '+idCounter+'</p>'+
            '<p class="name">Name: ' + name + '</p>'+
            '<p class="skill">Skill:' + skill + '</p>'+
            '<p class="title">Title:'+ title +'</p>'+
            '<p class="last-check-in">Last Check-in:'+
          '</div>'+

            getButtons(title) +

            '<hr style="clear: both;">' +
        '</div>';

      $('.employee-list').prepend(container);

}


function getButtons(title){
  var buttons = '<div class="buttons">';

  if(title === 'Teacher'){
    buttons += '<button class="check-in">Check-in</button>';
  }

  if(title === 'Manager'){
    buttons += '<button class="check-in">Check-in</button>';
    buttons += '<button class="say-yo">Say Yo</button>';
  }

   if(title === 'CEO'){
     buttons += '<button class="check-in">Check-in</button>';
     buttons += '<button class="say-yo">Say Yo</button>';
     buttons += '<button class="fire-everyone">Fire Everyone</button>';
    }

  buttons += '</div>';

  return buttons;
}
