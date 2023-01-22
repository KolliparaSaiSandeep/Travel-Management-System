const express=require("express")
const app=express()
const cors=require('cors')
const mysql=require("mysql2")
const bodyParser=require("body-parser");
const { urlencoded } = require("body-parser");
app.use(cors({origin: true, credentials: true}));
var a
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"cruddatabase"
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/get",(req,res)=>{
    const sqlSelect="SELECT * FROM travels"
    db.query(sqlSelect,(err,result)=>{
    res.send(result);});
})

app.get("/Delete",(req,res)=>{
    const sqlS="SELECT * FROM bus"
    db.query(sqlS,(err,result)=>{
        console.log("Delete")
        console.log(result)
        res.send(result);});
})

app.post("/api",(req,res)=>{
    const sqlS="SELECT * FROM bus"
    db.query(sqlS,(err,result)=>{
        console.log("Delete")
        console.log(result)
        res.send(result);});
})

app.get("/View",(req,res)=>{
    const sqlSe="SELECT * FROM bus"
    db.query(sqlSe,(err,result)=>{
        res.send(result);});
})

app.get("/apians",(req,res)=>{
    const sqlSe="SELECT * FROM bus"
    db.query(sqlSe,(err,result)=>{
        res.send(result);});
})

app.get("/passenger",(req,res)=>{
    const sqlS="SELECT * FROM passenger"
    db.query(sqlS,(err,result)=>{
        res.send(result);});
})

app.post("/passengeradd",(req,res)=>{
    const fullname=req.body.fullname
    const age=req.body.age
    const phno=req.body.phno
    const cardno=req.body.cardno
    const gender=req.body.gender
    console.log(fullname,age,phno,gender,cardno)
    const sqlInsert="INSERT INTO passenger(fullname,age,phno,gender,cardno) VALUES (?,?,?,?,?)"
    db.query(sqlInsert,[fullname,age,phno,gender,cardno],(err,result)=>{
    res.send(result)
})})


app.get("/Add",(req,res)=>{
    const sqlS="SELECT * FROM bus"
    db.query(sqlS,(err,result)=>{
        res.send(result);});
})


app.get("/Adddriversq",(req,res)=>{
    const sqlS="SELECT * FROM busdriver"
    db.query(sqlS,(err,result)=>{
        res.send(result);});
})


app.post("/Userhi",(req,res)=>{
    const sqlS="SELECT * FROM bus"
    console.log("ss")
    db.query(sqlS,(err,result)=>{
        console.log(result)
        res.send(result);});
})

app.post("/Adddriver",(req,res)=>{
    const bus_no=req.body.bus_no
    const drivername=req.body.drivername
    const driverage=req.body.driverage
    const driverexperience=req.body.driverexperience
    const driverbloodgroup=req.body.driverbloodgroup
    const sqlInsert="INSERT INTO busdriver(bus_no,drivername,driverage,driverexperience,driverbloodgroup) VALUES (?,?,?,?,?)"
    db.query(sqlInsert,[bus_no,drivername,driverage,driverexperience,driverbloodgroup],(err,result)=>{
    res.send(result)
})})

app.post("/Addbuses",(req,res)=>{
    const Busno=req.body.Busno
    const Source=req.body.Source
    const Destination=req.body.Destination
    const Travelsid=req.body.Travelsid
    const Seats=req.body.Seats
    const Arrivaltime=req.body.Arrivaltime
    const Price=req.body.Price
    const Date=req.body.Date
    console.log(Busno,Source,Destination)
    const sqlInsert="INSERT INTO bus(bus_no,from_station,destination,arrival_time,travels_id,seats,price,Date) VALUES (?,?,?,?,?,?,?,?)"
    db.query(sqlInsert,[Busno,Source,Destination,Arrivaltime,Travelsid,Seats,Price,Date],(err,result)=>{
    res.send(result)
})})

app.post("/check", (req,res)=>{
    const Busno=req.body.bus_no
    console.log(Busno)
    const noofseats=req.body.noofseats
    console.log(noofseats)
    const sqlDelete="select * from bus where bus_no=(?) and (?)<seats"
    db.query(sqlDelete,[Busno,noofseats],(err,resultone)=>{
    console.log(resultone)
    a=resultone
    res.send(resultone)
    });
});

app.get("/checks", (req,res)=>{
    console.log(a)
    res.send(a)
    });



app.post("/Deletebuses", (req,res)=>{
    const Busno=req.body.Busno
    console.log(Busno)
    const sqlDelete="DELETE FROM bus WHERE bus_no=?"
    db.query(sqlDelete,[Busno],(err,result)=>{
    res.send(result)
    });
});


app.post("/Viewtickets", (req,res)=>{
    const travels_name=req.body.travels_name
    console.log(travels_name)
    const travels_id=req.body.travels_id
    const sqlInsert="INSERT INTO travels(travels_name,travels_id) VALUES (?,?)"
    db.query(sqlInsert,[travels_name,travels_id],(err,result)=>{
    res.send(result)
    });
});
app.listen(3001,()=>{
    console.log("running on port 3001");
});