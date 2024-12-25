import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"

import dotenv from "dotenv";
dotenv.config({});

const app= express();

// mongodb+srv://anandkumar012020:qVFOxgbrUnUGl49E@cluster0.eipmt.mongodb.net/
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
  origin:'http//localhost:5173',
  Credentials:true
}
app.use(cors(corsOptions));
const PORT=  process.env.PORT || 8000;

//api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);



app.listen(PORT,()=>{
  connectDB();
  console.log(`server running at port ${PORT}`);
})