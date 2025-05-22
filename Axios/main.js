//Get Request
function getTodos(){
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => showOutput(res))
    .catch(err => console.log(err));
}

//Post Request
function addTodo() {
    axios
    .post('https://jsonplaceholder.typicode.com/todos',{
        title: 'New todo',
        completed: false
    })
    .then(res => showOutput(res))
    .catch(err => console.log(err));
}

// PUT/ PATCH Request
function updateTodo(){
    axios.put('https://jsonplaceholder.typicode.com/todos/1',{
        title: 'Updated todo',
        completed: true 
    })
    .then(res => showOutput(res))
    .catch(err => console.log(err));
}

//DELETE Request
function removeTodo(){
    axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => showOutput(res))
    .catch(err => console.log(err));
}

//SIMULTANEOUS Data
function getData() {
axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
])
    .then(axios.spread((todos,posts) => showOutput(todos)))
    .catch(err => console.error(err));
}

//CUSTOM Headers
function customHeaders(){
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            Authentication: 'sometoken'
        }
    }    

    axios.post('https://jsonplaceholder.typicode.com/todos',{
        title: 'New Todo',
        completed: false
    },
    config
    )
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

//Error Handling
function errorHandle(){
    axios
    .get('https://jsonplaceholder.typicode.com/todoss')
    .then(res => showOutput(res))
    .catch(err => {
        if (err.response){
            //if server give Not Found Response
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);

            if(err.response.status === 404){
                alert('Page not Found!')
            }
            else if(err.request){
                // No Response for given Request
                console.error(err.request)
            }
            else{
                console.error(err.message)
            }
        }
    });
    
}
//INTERCEPTING Request and Responses
axios.interceptors.request.use(config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);
    return config
}, 
error =>{
    return Promise.reject(error)
}
);

// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  // Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('error').addEventListener('click', errorHandle);
