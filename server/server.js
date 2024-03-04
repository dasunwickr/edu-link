import express from "express";
import cors from "cors";
import mysql, { createConnection } from "mysql";

const app = express();
app.use(cors());
app.use(express.json());

const db = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "edu_portal_db",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.post("/student", (req, res) => {
  const sql =
    "INSERT INTO student(`student_name`,`student_email`) VALUES(?, ?)";
  const values = [req.body.name, req.body.email];

  db.query(sql, values, (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.get("/read/:id", (req, res) => {
  const sql = "SELECT * FROM student WHERE student_id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.put("/update/:id", (req, res) => {
  const sql =
    "UPDATE student SET `student_name` = ?, `student_email` = ? WHERE `student_id` = ?";
  const id = req.params.id;
  const { name, email } = req.body;
  db.query(sql, [name, email, id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM student WHERE student_id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});
app.listen(8081, () => {
  console.log("Listening from port:8081");
});
