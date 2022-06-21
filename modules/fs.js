const fs = require ('fs')
const { dirname } = require('path')
const path = require ('path')

// Criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), (error) =>{
//     if (error){
//       return  console.log ('Erro: ' , error)           
//     }   
//       console.log('Pasta criada com sucesso!');             
// });


//Criar um Arquivo
fs.writeFile(path.join(__dirname, '/test' , 'test.txt'), 'hello node!' , (error) =>{
   if (error){
      return console.log('Erro: ' , error)
   }

   console.log("Arquivo criado com suceso!! ")

   
    // Adicionar a um arquivo
    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'hello world!', (error)=>{
      if (error){
         return console.log('Erro: ', error)
      }

      console.log("Arquivo Modificado com sucesso!")
      })

      //Ler arquivo 
fs.readFile(
   path.join(__dirname, './test', 'test.txt'),
    "utf-8" ,
     (error, data )=>{
        if (error) {
                     return console.log("Erro:" , error)
        }      
        console.log(data);      
     })
     
})




    