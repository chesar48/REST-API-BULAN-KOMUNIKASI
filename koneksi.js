var mysql = require("mysql");

//database connection local
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:"bulankomunikasi"
})

//database connection cPanel
// const conn = mysql.createConnection({
//     host:'localhost',
//     user:'pameranb_chesar',
//     password:'Ilovejkt4848',
//     database:"pameranb_bulankomunikasi"
// })

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi')
});

module.exports = conn;