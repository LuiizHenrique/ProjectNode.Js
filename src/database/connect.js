const mongoose = require ("mongoose") ;

const connectToDatabase = async ( ) =>{
       await mongoose.connect( 
      `mongodb+srv://dbUser:dbUser@projectnodejs.fhu93xb.mongodb.net/?retryWrites=true&w=majority`,
       (error) => {
           if (error) {
               return console.log(
                    'Ocorreu um erro ao se conectar com seu banco de dados:' , error
                    );
           }        
           return console.log('Conexão ao banco de dados realizados com sucesso!!') ;
       }) ;           
};

module.exports = connectToDatabase;