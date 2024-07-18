import "express-async-errors";
import cors from "cors";
import { Express } from "express";

// Any other import that is from our source code should be imported here
import mumblyRouter from "../mumbly/router"
export default function (app: Express) {
  app.use(
    cors({
      origin: process.env.CORS_ALLOWED_ORIGINS?.split(","),
      methods: "GET,POST,PUT,DELETE",
      allowedHeaders: "Content-Type",
      exposedHeaders: "x-auth-token",
      credentials: true,
    })
  );
  // TODO: ADD Auth Middleware
  app.use("/mumbly", mumblyRouter);
 

}
