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
        const date = new Data (timestamp)
        //2020 ano
        const year = date.getFullYear()
        //04 mm
        const month = date.getMonth() +1
        //21 dias
        const day = date.getDate()

        console.log(`${year}-${month}-${day}`)
    }
    
}


 