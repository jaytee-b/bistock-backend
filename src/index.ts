/* eslint-disable @typescript-eslint/no-unused-vars */

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dashboardRoutes from "./routes/dashboardRoutes"
import productRoutes from "./routes/productRoutes"
import userRoutes from "./routes/userRoutes"
import expenseRoutes from "./routes/expenseRoutes"



// Route Imports



const app = express();

//cors configuration
const allowedOrigins: string[] = [
  'http://localhost:3000',
  'https://bistock-1jdb.vercel.app/'
];

app.use(cors({
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Other app configurations and routes...

export default app;

// Configurations
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors())

//Routes
app.use("/dashboard", dashboardRoutes)  //http://localhost:8000/dashboard
app.use("/products",productRoutes)//http://localhost:8000/products
app.use("/users",userRoutes) //http://localhost:8000/users
app.use("/expenses",expenseRoutes) //http://localhost:8000/expenses


//Server
const port = process.env.PORT|| 3001;
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
    
})
