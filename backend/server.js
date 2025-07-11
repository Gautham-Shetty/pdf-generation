const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const assessmentData = require("./data");
const config = require("./config/assessments.json");
const buildHtmlReport = require("./utils/templateBuilder");
const generatePdf = require("./utils/pdfGenerator");

const app = express();
app.use(cors())
app.use(bodyParser.json());


const users = []; // In-memory user store
const SECRET = "your_jwt_secret";

// User Signup
app.post("/signup", async (req, res) => {
  console.log("Signup request received", req.body);
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send("Missing fields");

  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).send("User already exists");

  const hashed = await bcrypt.hash(password, 10);
  users.push({ email, password: hashed });
  res.send({ status: "Signup successful" });
});

// User Login
app.post("/login", async (req, res) => {
    console.log("login request received", req.body);

  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).send("Invalid credentials");

  const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
  res.send({ token });
});

// Auth Middleware
function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("No token provided");

  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(403).send("Invalid token");
  }
}

// Generate PDF Report
app.post("/generate-report", auth, async (req, res) => {
  const { session_id } = req.body;
  const session = assessmentData.find(s => s.session_id === session_id);
  if (!session) return res.status(404).send("Session not found");

  const assessmentId = session.assessment_id;
  const templateConfig = config[assessmentId];
  if (!templateConfig) return res.status(400).send("No config for this assessment type");

  const html = buildHtmlReport(session, templateConfig);
  const fileName = `${session_id}.pdf`;
  const filePath = await generatePdf(html, fileName);

  res.send({ status: "PDF Generated", filePath });
});

// Start Server
const PORT = 8080;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
