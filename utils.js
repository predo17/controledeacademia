module.exports = {
    age: function  (timestamp){
        const today = new Date() // controla a data de hoje
        const birthday = new Date (timestamp)// aniversario em segundos
        
    
        let age = today.getFullYear() - birthday.getFullYear()// ano de hoje - ano que ele nasceu
        let month = today.getMonth() - birthday.getMonth()//o mes atual - o mes q ele nasceu (-2)
    
        if(month < 0 || month == 0 && today.getDate < birthday.getDate()){
            age = age -1
        }
    
        return age
    
    },
    date: function (timestamp){
        
        const date = new Date (timestamp)
        //2020 ano
        const year = date.getUTCFullYear()
        //04 mm
        const month = `0${ date.getUTCMonth() +1}`.slice(-2)
        //21 dias
        const day = `0${date.getUTCDate() }`.slice(-2)

        // console.log(`${year}-${month}-${day}`)
        return `${year}-${month}-${day}`
    }
    
}
