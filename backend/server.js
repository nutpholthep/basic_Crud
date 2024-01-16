import express from "express";
import cors from "cors";
import mysql from "mysql"
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

app.get("/", (req, res) => {
    db.query("SELECT * FROM students", (err, result, fields) => {
        if (err) return res.json("ERROR")
        return res.json(result)
    })

})

app.post("/create", (req, res) => {
    const sql = "INSERT INTO students (`Name`,`Email`) VALUES(?)"
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.put("/update/:id", (req, res) => {
    const sql = "UPDATE students set `Name` = ? ,`Email` = ? WHERE ID = ? ";
    const values = [
        req.body.name,
        req.body.email, req.params.id
    ];

    db.query(sql,values, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.delete("/student/:id", (req, res) => {
    const sql = "DELETE FROM students WHERE ID = ?";
  const id = req.params.id

    db.query(sql,[id], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.listen(8081, () => {
    console.log("server is running");
})