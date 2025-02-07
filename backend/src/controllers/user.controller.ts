
// import jwt from "jsonwebtoken";
// import { prisma } from "../server.ts";
// import { NextFunction, Request, RequestHandler, Response } from "express";

// import { UserData } from "../interfaces/user.data.ts";

// import ErrorResponse from "../utils/error.response.ts";

// const registerUser: RequestHandler = async(
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => {
//     const { name, email, password, confirmPassword } = req.body;

//     if(!name || !email || !password || !confirmPassword){
//         return next(new ErrorResponse("Incorrect Data", 400));
//     }
//     if(confirmPassword !== password) return next(new ErrorResponse("Passwords do not match", 400));

// }


// export {
//     registerUser
// }