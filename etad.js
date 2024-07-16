
module.exports = {
    date: function (timestamp){
        const date = new Data (timestamp)
        const year = date.getFullYear()
        const month = date.getMonth() +1
        const day = date.getDate()

        console.log(`${year}-${month}-${day}`)
    }
}
