import http from 'k6/http';



export  function qr_bay_68() {
  const url = `https://loadtest-new-ops.inet.co.th/bay/api/v1/payment/qr`;

  const payload = JSON.stringify({
    accessToken:
      'SUBPg8JdTjQyyn6dO0yncKbUvC/0tXvnxk5vxQ7beAdjosxFMCgk5WYSHJmX04QSdRPirN4a83IZ0KevU9mdxDomMFlWq4sVJva9qhzBNi+wDzMzrWTeuwmIhOLSclqkex30+hnz1l+6vnsFAWagvjQfloMCa6mSXygFawJnY7Q/prg0qZQiiBLWlG+M/nR/25j9Sh0yAq9wt3bKIoqP9vprV009JhXD8TgqmIk16JU/U4HeMJAcEH2iVqxJ9VYQkpZVaIq2jPCIJRu5MJuxbjH28Z3VvcenZQkuzWa9nXlCHUVr5de7m99Yqw3FYFYi83Z/0NFrYdF/AaqbU4cMNA==',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  //console.log('Response body: ' + res.body);
  return res
}
