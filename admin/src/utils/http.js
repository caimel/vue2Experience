import $ from 'jquery'

export function syncHttpGet (url, data, successFun, errorFun) {
  $.ajax({
    url: url,
    type: 'GET',
    async: false,
    data: data,
    timeout: 1000 * 3,
    dataType: 'json',
    success: successFun,
    error: function (xhr, textStatus) {}
  }
  )
}
