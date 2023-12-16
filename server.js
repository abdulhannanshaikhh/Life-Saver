const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
<<<<<<< HEAD
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
// 1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
=======

//dot config
dotenv.config();

//rest object
const app = express();

//mongodb connection
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
//1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
>>>>>>> 0343f4a14f353a68ccb3b753adc6303f086eec92

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
<<<<<<< HEAD
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
=======
    `Node Server Running in ${process.env.DEV_MODE} Mode On Port ${process.env.PORT}`
>>>>>>> 0343f4a14f353a68ccb3b753adc6303f086eec92
      .bgBlue.white
  );
});
