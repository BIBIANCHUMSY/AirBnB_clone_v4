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
    let firstFlag = 0;
    let firstKey = '';
    for (let key in amenStor) {
      if (firstFlag === 0) {
        firstKey = key;
        amenStr += amenStor[key];
        firstFlag = 1;
      } else if (firstFlag === 1) {
        if (key === firstKey) {
          continue;
        }
        amenStr += ', ' + amenStor[key];
      }
    }
    $('.amenities h4').text(amenStr);
  });
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    type: 'POST',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      console.log(data);
      for (let obj of data) {
        $('.places').append('<article><div class="title"><h2>' + obj['name'] + '</h2> <div class="price_by_night">' + obj['price_by_night'] + '</div></div> <div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria hidden="true"></i><br />' + obj['max_guest'] + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria hidden="true"></i><br />' + obj['number_rooms'] + ' Bedrooms</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + obj['number_bathrooms'] + ' Bathroom</div></div><div class="description"><br />' + obj['description'] + '</div></article>');
      }
    },
    error: function (e) {
      console.log('Failed response');
    }
  });
  statusAPI();
  // $.ajax({
  //   url: 'http://0.0.0.0:5001/api/v1/status/',
  //   type: 'GET',
  //   success: function (data) {
  //     $('#api_status').addClass('available');
  //   },
  //   error: function (e) {
  //     $('#api_status').removeClass('available');
  //   }
  // });
});

// refactor of check API status for Task 3
function statusAPI () {
  $.getJSON('http://localhost:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
}
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
  
    /*******************************************************
      populate Places from frontend, instead of backend jinja
     *******************************************************/
      $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        data: JSON.stringify({}),
        contentType: 'application/json',
        success: function (data) {
      for (let i = 0; i < data.length; i++) {
        $('section.places').append('<article><div class="title"><h2>' + data[i].name + '</h2><div class="price_by_night">' + data[i].price_by_night + '</div></div><div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' + data[i].max_guest + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' + data[i].number_rooms + ' Bedrooms</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + data[i].number_bathrooms + ' Bathroom</div></div><div class="description">' + data[i].description + '</div></article>');
      }
        }
      });
  
  });
<<<<<<< HEAD
=======
>>>>>>> 4908bd8 (All_Task)
>>>>>>> refs/remotes/origin/master
