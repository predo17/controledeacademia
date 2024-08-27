
function poka (timestamp){
        const date = new Date (timestamp)

        const year = date.getUTCFullYear()

        const month = `0${ date.getUTCMonth() +1}`.slice(-2)

        const day = `0${date.getUTCDate() }`.slice(-2)

        console.log(`${year}-${month}-${day}`)

}
poka (1182816000000)

