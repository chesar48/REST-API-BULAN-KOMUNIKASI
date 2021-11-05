'use strict';
var mysql = require('mysql');
var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi Berjalan",res)
}
exports.dataPengunjung = function (req,res){
    var post= {
        user_name : req.body.user_name,
        email : req.body.email
    }
    var query = "SELECT * FROM ?? WHERE ??=? ";
    var table = ["data_pengunjung","email",req.body.email];
    query = mysql.format(query,table);
    connection.query(query,function(error,rows){
        if(error){
            console.log(error)
        }
        else if (rows.length==0){
            var query = "INSERT INTO ?? SET ?";
            var table = ["data_pengunjung"]
            query = mysql.format(query,table)
            connection.query(query,post,function(error,rows){
                if (error){
                    console.log(error)
                }else{
                    console.log("data Berhasil di ubah")
                    response.ok("data Berhasil di ubah",res)
                }
            })
        }
        else{
            response.notOk("email sudah terdaftar",res)
        }
    })
}