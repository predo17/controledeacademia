const fs = require ("fs")
const data = require ("./data.json")
const {age,date} = require("./utils")



exports.put = function (req,res){
    const {id} = req.body
    let index = 0

const foundInstructor = data.instructors.find (function(instructor,foundIndex){
    if (id == instructor.id){
        index = foundIndex}
    })
    const instructor = {
        ...foundInstructor,
        ...req.body,
        birth:Date.parse(req.body.birth)
    }

    data.instructors[index] = instructor

    fs.writeFile ("data.json",JSON.stringify(data,null,2),function(err){
        if (err) return res.send ('erro ao gravar!')
        return res.redirect (`/instructors/${id}`)    
    })
}


exports.show = function(req,res){
    const {id} = req.params

    const foundInstructor = data.instructors.find (function(instructor){
        return instructor.id == id
    })

    const instructor = {
        ...foundInstructor,
        birth: age(foundInstructor.birth) + " anos",
        created_at: new Intl.DateTimeFormat("pt-br").format(foundInstructor.created_at),
    }

    return res.render ("instructors/show",{instructor})
}

exports.editNow= function(req,res){
    const {id} = req.params

    const foundInstructor = data.instructors.find (function(instructor){
        return instructor.id == id
    })

    const instructor = {
        ...foundInstructor,
        birth: date (foundInstructor.birth)
    
    }

    return res.render ("instructors/edit",{instructor})
}

exports.post = function(req,res){
   
    const keys = Object.keys (req.body)

    for(key of keys){
        if(req.body[key]== ""){
        return res.send ("Responda todo os dados")
        }
    }
    let {name,avatar_URL,birth,gender,services,created_at} = req.body

    birth = Date.parse (req.body.birth)
    created_at = Date.now()
    id = Number (data.instructors.length)+1

    data.instructors.push({id,name,avatar_URL,birth,gender,services,created_at})


    fs.writeFile("data.json",JSON.stringify(data,null,2),function(err){
        if(err) return res.send ("Erro ao salvar o arquivo")
        return res.redirect("/instructors")
    })
}
