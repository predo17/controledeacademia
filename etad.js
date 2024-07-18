
 function poka (timestamp){
        const date =  (timestamp)

        const year = date.getFullYear()

        const month = date.getMonth() +1

        const day = date.getDate() 

        console.log(`${year}-${month}-${day}`)
    
}
poka (1148688000000)
