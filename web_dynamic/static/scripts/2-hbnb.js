<<<<<<< HEAD
=======
<<<<<<< HEAD
$(function () {
  const amenStor = {};
  $(':checkbox').change(function (event) {
    let amenId = $(this).attr('data-id');
    let amenName = $(this).attr('data-name');
    if (this.checked) {
      amenStor[amenId] = amenName;
    } else {
      delete amenStor[amenId];
    }
    let amenStr = '';
    let first_flag = 0;
    let first_key = '';
    for (key in amenStor) {
      if (first_flag === 0) {
        first_key = key;
        amenStr += amenStor[key];
        first_flag = 1;
      }	else if (first_flag === 1) {
        if (key === first_key) {
          continue;
        }
        amenStr += ', ' + amenStor[key];
      }
    }
    $('.amenities h4').text(amenStr);
  });

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    type: 'GET',
    success: function (data) {
      $('#api_status').addClass('available');
    },
    error: function (e) {
      $('#api_status').removeClass('available');
    }
  });
});
=======
>>>>>>> refs/remotes/origin/master
$( document ).ready(function () {

    /*****************************************************
      display list of checkboxes clicked
     *****************************************************/
    let ls_amen = [];
    $('input[type=checkbox]').change (function () {
      let name = $(this).attr('data-name');
        if ($(this).is(':checked')) {
      ls_amen.push(name);
        } else {
      ls_amen = ls_amen.filter(amen => amen !== name);
        }
      $('.amenities h4').text(ls_amen.join(', '));
    });
  
    /*******************************************************
      display red circle on top right of page if status ok
     *******************************************************/
    $.ajax({
      type: 'GET',
      url: 'http://0.0.0.0:5001/api/v1/status/',
      dataType: 'json',
      success: function (data) {
        if (data.status === 'OK') {
      $('#api_status').addClass('available');
        } else {
      $('#api_status').removeClass('available');
        }
      }
    });
  
  });
<<<<<<< HEAD
=======
>>>>>>> 4908bd8 (All_Task)
>>>>>>> refs/remotes/origin/master
