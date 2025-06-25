import http from 'k6/http';

export  function oauth_bay_68() {
  const url = 'https://loadtest-new-ops.inet.co.th/oauth/api/v1/oauth-token';
  const payload = JSON.stringify({
    key: 'cQkSVpaRegca85zVwUnqrLfiJE6FmfZBL3Q2VmldoCa2xzoh6l65g5qtjEwWDTuUHtJA02WO5wlVndXPu2R7wfuSK89B4iFFNGNm397P4FqTgrfa2nai2uogUahclyqWxsDZFvN8bkow4HewrKb92Z49WbZmcYL3wp7vRVgVhvo=',
    orderId: 'LOADTEST-BAY-20250625',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 300000, // 5 minutes in milliseconds
  };

  const res = http.post(url, payload, params);
  //console.log(res.body);
  return res
}
