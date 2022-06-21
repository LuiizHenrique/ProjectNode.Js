const path = require('path')

//Apenas o nme do arquivo atual
console.log(path.basename(__filename));

//Nome do Diretorio atual
console.log(path.dirname(__filename));

//extersão do arquivo
console.log(path.extname(__filename));

//criar objetos Path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos
console.log(path.join(__dirname , "test", "test.html"));