$(document).ready(function() {
  $('#list_all').click((event) => {
    event.preventDefault()
    $.get('/list-all', {
    }, (data) => {
      $('#ajax_list_all').html(data)
    })
  })

  $('#search').click((event) => {
    event.preventDefault()
    $.get('/search-ID', {
      searchID: $('#search_ID').val(),
    }, (data) => {
      $('#ajax_search').html(data)
    })
  })

  $('#add').click((event) => {
    event.preventDefault()
    $.get('/add-ID', {
      addID: $('#add_ID').val(),
      addName: $('#add_name').val(),
    }, (data) => {
      $('#list_all').trigger('click')
      console.log(data)
    })
  })

  $('#delete').click((event) => {
    event.preventDefault()
    $.get('/delete-ID', {
      deleteID: $('#delete_ID').val(),
    }, (data) => {
      $('#list_all').trigger('click')
      console.log(data)
    })
  })

});
