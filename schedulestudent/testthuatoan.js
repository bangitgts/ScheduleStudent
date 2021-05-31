var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
    'nameStudent': '12',
    'dateBirth': '06-06-2000',
    'userName': 'bang1212popo12',
    'passWord': 'test1',
    'khoaHoc': 'test1',
    'phoneNumber': '00383828'
});
var config = {
    method: 'post',
    url: 'http://localhost:3500/add-student',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
};

axios(config)
    .then(function(response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function(error) {
        console.log(error);
    });