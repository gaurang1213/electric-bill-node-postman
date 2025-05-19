// frontend/scripts.js
$(document).ready(function() {
  $('#consumerForm').submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/api/consumer',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        name: $('#name').val(),
        address: $('#address').val(),
        email: $('#email').val()
      }),
      success: function(data) {
        $('#result').html(`<div class="alert alert-info">Consumer registered. ID: ${data.id}</div>`);
      },
      error: function(err) {
        $('#result').html(`<div class="alert alert-danger">${err.responseJSON.error}</div>`);
      }
    });
  });

  $('#billForm').submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/api/bill',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        consumer_id: $('#consumerId').val(),
        units: $('#units').val()
      }),
      success: function(data) {
        $('#result').html(`<div class="alert alert-success">Bill Amount: ₹${data.amount}</div>`);
      },
      error: function(err) {
        $('#result').html(`<div class="alert alert-danger">${err.responseJSON.error}</div>`);
      }
    });
  });
});
