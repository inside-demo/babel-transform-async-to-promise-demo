const fetch = require('node-fetch');

(async () => {
  console.log('step 1', 'start');
  const response = await fetch('http://jsonplaceholder.typicode.com/posts/1')
  console.log('step 2', response);
  const json = await response.json()
  console.log('step 3', json);
  console.log('step 4', 'end')
})()