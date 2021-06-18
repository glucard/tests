const fs = require('fs')

let readFile = file_name => new Promise((resolve, reject) => {
    fs.readFile(file_name, {encoding:"utf-8"}, (error, data) => {
        if(error){
            reject(error)
        }else{
            resolve(data)
        }
    })
})

readFile("text.txt")
    .then(data => console.log(data))
    .catch(error => console.error(error))

// or

fs.promises
    .readFile("text.txt", {encoding:"utf-8"})
    .then(data => console.log(data))
    .catch(error => console.error(error))