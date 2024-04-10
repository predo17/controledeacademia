const fs = require ("fs")
const data = require ("./data.json")
const { name } = require("browser-sync")

exports.show = function(req,res){
    const {id} = req.params

    const foundInstructor = data.instructors.find (function(instructor){
        return instructor.id == id
    })
    if (!foundInstructor) return res.send("Instructor não encontrado")

    return res.render ("instructors/show",{instructor:foundInstructor})
}

exports.post = function(req,res){
   
    const keys = Object.keys (req.body)

    for(key of keys){
        if(req.body[key]== ""){
        return res.send ("Responda todo os dados")
        }
    }
    let {avatar_URL,birth,gender,services,created_at} = req.body

    birth = Date.parse (req.body.birth)
    created_at = Date.now()
    id = Number (data.instructors.length)+1

    data.instructors.push({id,avatar_URL,birth,gender,services,created_at})


    fs.writeFile("data.json",JSON.stringify(data,null,2),function(err){
        if(err) return res.send ("Erro ao salvar o arquivo")
        return res.redirect("/instructors")
    })
}