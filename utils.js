function age (timestamp){
    const today = new Date() // xontrola a data de hoje
    const birthday = new Date (timestamp)// aniversario em segundos
    

    let age = today.getFullYear() - birthday.getFullYear()// ano de hoje - ano que ele nasceu
    let month = today.getMonth() - birthday.getMonth()//o mes atual - o mes q  ele nasceu (-2)

    if(month < 0 || month == 0 && today.getDate < birthday.getDate()){
        age = age -1
    }

    return age

}


console.log (age (1231977600000) )