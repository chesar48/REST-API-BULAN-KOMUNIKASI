var mysql = require("mysql");

//database connection
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:"bulankomunikasi"
})

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi')
});

module.exports = conn;