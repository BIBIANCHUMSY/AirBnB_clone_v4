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
});
=======
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
  
  });
>>>>>>> 4908bd8 (All_Task)
