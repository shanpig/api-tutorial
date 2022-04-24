import $ from 'jquery';

const getList = ({
  offset = 0,
  limit = 10,
  sort = '',
  filters = '',
  q = '',
  fields = '',
}) => {
  return new Promise((resolve) => {
    const urlParams = new URLSearchParams();

    if (offset) {
      urlParams.set('offset', offset);
    }
    if (limit) {
      urlParams.set('limit', limit);
    }
    if (sort) {
      urlParams.set('sort', sort);
    }
    if (filters) {
      urlParams.set('filters', filters);
    }
    if (q) {
      urlParams.set('q', q);
    }
    if (fields) {
      urlParams.set('fields', fields);
    }

    $.ajax({
      url: `https://api.kcg.gov.tw/Api/Service/Get/7d211226-7972-431a-b822-2ed53f590d50?${urlParams.toString()}`,
      dataType: 'json',
      success: function (data) {
        console.log(
          `https://api.kcg.gov.tw/Api/Service/Get/7d211226-7972-431a-b822-2ed53f590d50?${urlParams.toString()}`
        );

        resolve(data);
      },
    });
  });
};

export default getList;
