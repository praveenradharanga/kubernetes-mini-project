const express = require("express");
const mysql = require("mysql2/promise");

const app = express();

const PORT = 5000;

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
});

app.get("/", (req, res) => {
    res.send("EMS Backend API Running");
});

app.get("/api/health", async (req, res) => {
    try {
        await db.query("SELECT 1");

        res.json({
            status: "UP",
            service: "EMS Backend",
            version: "1.0.0"
        });
    } catch (error) {
        res.status(503).json({
            status: "DOWN",
            service: "EMS Backend"
        });
    }
});

app.get("/api/employees", async (req, res) => {
    try {
        const [rows] = await db.query(
            "SELECT id, name, department FROM employees"
        );

        res.json(rows);
    } catch (error) {
        console.error("Database error:", error);

        res.status(500).json({
            error: "Unable to fetch employees"
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
