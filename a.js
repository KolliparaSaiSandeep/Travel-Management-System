const express=require("express")
const app=express()
const mysql=require("mysql2")

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"cruddatabase"
});

db.query(`SELECT * FROM cruddatabase.travels`,(err,res)=>{
  return console.log(res)
})
