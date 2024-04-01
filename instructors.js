const fs = require ("fs")
const data = require ("./data.json")

exports.post = function(req,res){
   
    const keys = Object.keys (req.body)

    for(key of keys){
        if(req.body[key]== ""){
        return res.send ("Responda todo os dados")
        }
        
   
    }
    data.instructors.push(req.body)

    fs.writeFile("data.json",JSON.stringify(data,null,2),function(err){
        if(err) return res.send ("Erro ao salvar o arquivo")
        return res.redirect("/instructos")
        
    })

    return res.send (req.body)
  
}