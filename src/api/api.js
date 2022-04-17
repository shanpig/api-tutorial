import $ from 'jquery';

const getList = (
  offset = 0,
  limit = 10,
  sort = '',
  filters = '',
  q = '',
  fields = ''
) => {
  return new Promise((resolve) => {
    let parameter = '';

    if (offset) {
      parameter += `offset=${offset}&`;
    }
    if (limit) {
      parameter += `limit=${limit}&`;
    }
    if (sort) {
      parameter += `sort=${sort}&`;
    }
    if (filters) {
      parameter += `filters=${filters}&`;
    }
    if (q) {
      parameter += `q=${q}&`;
    }
    if (fields) {
      parameter += `fields=${fields}`;
    }

    $.ajax({
      url: `https://api.kcg.gov.tw/Api/Service/Get/7d211226-7972-431a-b822-2ed53f590d50?${parameter}`,
      dataType: 'json',
      success: function (data) {
        resolve(data);
      },
    });
  });
};

export default getList;
