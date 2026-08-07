const express = require("express");

const app = express();

const PORT = 5000;

const employees = [
    {
        id: 101,
        name: "John Doe",
        department: "DevOps"
    },
    {
        id: 102,
        name: "Alice Smith",
        department: "HR"
    },
    {
        id: 103,
        name: "Bob Johnson",
        department: "Finance"
    }
];

app.get("/", (req, res) => {
    res.send("EMS Backend API Running");
});

app.get("/api/employees", (req, res) => {
    res.json(employees);
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "UP",
        service: "EMS Backend",
        version: "1.0.0"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
