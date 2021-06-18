const fs = require('fs')
fs.readFile("text.txt", {encoding:"utf-8"}, (error, data) => {
    if(error){
        console.log("Error:", error)
    }else{
        console.log("Data:", data)
    }
})