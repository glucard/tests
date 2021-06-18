const fs = require('fs')

let readFile = async (file_name) =>{
    try{
        let data = await fs.promises.readFile(file_name, {encoding:"utf-8"})
        console.log(data)
    }catch(error){
        console.error(error)
    }
}

readFile('text.txt')