const fetch = require('node-fetch');

(async () => {
  console.log('step 1');
  const response = await fetch('http://jsonplaceholder.typicode.com/posts/1')
  console.log('step 2');
  const json = await response.json()
  console.log('step 3');
  console.log(json)
})()