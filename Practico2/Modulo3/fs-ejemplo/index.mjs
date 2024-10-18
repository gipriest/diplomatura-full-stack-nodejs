import fs from 'fs';


fs.writeFile('./newFile.txt', 'Contenido nuevo',(err)=>{
    if(err) throw err;
    console.log("Archivo creado y escrito");
});

fs.readFile('./newFile.txt', 'utf8',(err, data)=>{
    if(err) throw err;
    console.log("Contenido del archivo: ", data);
});

fs.rename('./newFile.txt', './renamedfile.txt',(err)=>{
    if(err) throw err;
    console.log("Archivo renombrado");
});