// CORS for different domain applications to interact with each other.
import express from "express";
import cors from "cors";
import db from "./db.js";

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // Instead of bodyParser go for this.
db.connect(() => {
  console.log("Successfully connected to db.");
});

// Routes:
// Create a Todo
app.post("/todos", async (req, res) => {
  try {
    // console.log("post request fired");
    const desc = req.body.description;
    if (desc === "") {
      null;
    } else {
      const result = await db.query(
        `INSERT INTO TODO(DESCRIPTION) VALUES($1) RETURNING *`,
        [desc]
      );
      const data = result.rows[0];
      // console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
});

// Get all Todos:
app.get("/todos", async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM TODO`);
    res.send(result.rows); // Send the data back to client side (Array of obj.)
  } catch (error) {
    console.error(error);
  }
});

// Get a Todo
app.get("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.query(`SELECT DESCRIPTION FROM TODO WHERE ID=$1`, [
      id,
    ]);
    // console.log(result.rows[0]);
  } catch (error) {
    console.error(error);
  }
});
// Update a Todo
app.put("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const desc = req.body["description"];
    const result = await db.query(
      "UPDATE TODO SET description= $1 WHERE id=$2 RETURNING * ",
      [desc, id]
    );
    // console.log(result.rows[0]);
  } catch (error) {
    console.error(error);
  }
});
// Delete a Todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.query(
      "DELETE FROM TODO WHERE ID = $1 RETURNING *",
      [id]
    );
    // console.log(result.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running successfully and at port ${port}.`);
});

