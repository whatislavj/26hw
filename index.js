//  task1
fetch('https://jsonplaceholder.typicode.com/posts?_limit=15').
then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})

// task2 POST
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        userId: 16,
        title: 'New post',
        body: 'Some text around here'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).
then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})

// task2 PUT
fetch('https://jsonplaceholder.typicode.com/posts?_id=1', {
    method: 'PUT',
    body: JSON.stringify({
        userId: 1,
        title: 'Updated title',
        body: 'Updated body'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).
then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})

// task2 DELETE
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'DELETE',
}).
then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})