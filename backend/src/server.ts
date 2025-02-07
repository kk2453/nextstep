import express, { Express, json} from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";

dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT || 5000;

export const prisma = new PrismaClient();
const app:Express = express();

async function main(){
    app.use(json())
    app.use(cookieParser());
    app.use(cors({
        origin: [process.env.CORS_ORIGIN || "http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }))
    
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`);
    });

    //app.use("/api/v1")
}


main().then(async() => {
    await prisma.$connect();
}).catch(async(e) => {
    await prisma.$disconnect();
    process.exit(1);
})
