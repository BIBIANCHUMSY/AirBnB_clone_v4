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

  let amenIDs = [];
  $('section button').click(function () {
    amenIDs = [];
    for (let item in amenStor) {
      amenIDs.push(item);
    }
    searchPlaces(amenIDs, 1);
  });
  searchPlaces(amenIDs, 0);
  // search places
  function searchPlaces (amenIDs, clickedNum) {
    let query = {'amenities': amenIDs};
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search',
      type: 'POST',
      data: JSON.stringify(query),
      dataType: 'json',
      contentType: 'application/json',
      success: function (data) {
        console.log('query', query);
        console.log('amenIDs', amenIDs);
        console.log('data', data);
        console.log('ClickedNUM', clickedNum);

        if (clickedNum === 1) {
          $('.places article').remove();
        }
        for (let obj of data) {
          $('.places').append('<article><div class="title"><h2>' + obj['name'] + '</h2> <div class="price_by_night">$' + obj['price_by_night'] + '</div></div> <div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria hidden="true"></i><br />' + obj['max_guest'] + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria hidden="true"></i><br />' + obj['number_rooms'] + ' Bedrooms</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + obj['number_bathrooms'] + ' Bathroom</div></div><div class="description"><br />' + obj['description'] + '</div></article>');
        }
      },
      error: function (e) {
        console.log('Failed response');
      }
    });
  }
  statusAPI();
});

// refactor of check API status for Task 3
function statusAPI () {
  $.getJSON('http://localhost:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
}
=======
let chosenAmens = {};
$(document).ready(function () {
  $('div.amenities ul.popover li input').click(function () {
    chosenAmens = {};
    $('div.amenities ul.popover li input:checked').each(function () {
      let amenity = $(this);
      chosenAmens[amenity.attr('data-id')] = amenity.attr('data-name');
    });
    if (!$.isEmptyObject(chosenAmens)) {
      $('div.amenities h4').text(Object.values(chosenAmens).join(', '));
    } else {
      $('div.amenities h4').text('\xA0');
    }
  });
  $.ajax({
    'url': 'http://0.0.0.0:5001/api/v1/status/',
    'type': 'GET',
    'success': function (data) {
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      }
    }
  });
  function sendData (a) {
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      type: 'POST',
      data: JSON.stringify(a),
      dataType: 'json',
      contentType: 'application/json',
      success: function (data) {
        let i;
        let dataLen;
        let pDict;
        data = data.sort(function (first, second) {
          if (first.name < second.name) {
            return (-1);
          } else if (first.name === second.name) {
            return (0);
          } else {
            return (1);
          }
        });
        $('section.places').empty();
        for (i = 0, dataLen = data.length; i < dataLen; i++) {
          pDict = data[i];
          let place = $('<article></article>');

          let title = $('<div class="title"></div>');
          title.append($('<h2></h2>').text(pDict.name));
          title.append($('<div class="price_by_night"></div>').text(pDict.price_by_night));

          let info = $('<div class="information"></div>');

          let guests = $('<div class="max_guest"></div>');
          guests.append($('<i class="fa fa-users fa-3x" aria-hidden="true"></i>'), $('<br />'), pDict.max_guest + ' Guests');

          let rooms = $('<div class="number_rooms"></div>');
          rooms.append($('<i class="fa fa-bed fa-3x" aria-hidden="true"></i>'), $('<br />'), pDict.number_rooms + ' Bedrooms');

          let bathrooms = $('<div class="number_bathrooms">');
          bathrooms.append($('<i class="fa fa-bath fa-3x" aria-hidden="true"></i>'), $('<br />'), pDict.number_bathrooms + ' Bathroom');

          info.append(guests, rooms, bathrooms);

          let desc = $('<div class="description"></div>').text(pDict.description);

          place.append(title, info, desc);
          $('SECTION.places').append(place);
        }
      }
    });
  }
  sendData({});
  $('button').click(function () {
    let amens = Object.keys(chosenAmens);
    let amen = {};
    amen['amenities'] = amens;
    sendData(amen);
  });
});
>>>>>>> 4908bd8 (All_Task)
