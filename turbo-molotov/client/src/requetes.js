fetch('./turbo-molotov/server/src/enregMembre.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'param1=value1&param2=value2&param3=value3&param4=value4'
  })
  .then(response => response.text())
  .then(response => {
      console.log(response)
  })
  .catch(error => {
      console.log(error)
  });

