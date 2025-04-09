fetch('https://reqres.in/api/users/23').then((res) =>
  console.log(res.json()).then((data) => console.log(data))
);
