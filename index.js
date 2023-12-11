import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"B29gs746",
    database:"test"
})

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

app.get("/users", (req,res)=>{
    const q = "SELECT * FROM users"
    db.query(q,(err,data)=>{
        if(err) return res.json("failed")
        return res.json(data)
    })
})

app.post("/users", (req,res)=>{
    const q = "INSERT INTO users ('name','age','counrty','position','wage') VALUES (?)"
    const values = [
        req.body.name,
        req.body.age,
        req.body.country,
        req.body.position,
        req.body.wage,
]

    db.query(q,[values], (err, data)=>{
        if(err) return res.json("failed")
        return res.json("User has been added successfully")
    })
})

app.delete("/users/:id", (req,res)=>{
    const userId = req.params.id
    const q = "DELETE FROM users WHERE id = ?"

    db.query(q,[userId], (err,data)=>{
        if (err) return res.json(err);
        return res.json("User has been deleted successfully.")
    })
})

app.listen(9800, ()=>{
    console.log("Connected to backend!")
})
