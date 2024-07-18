import { InferAttributes } from "sequelize";

export type MailOptions = {
  to: string;
  subject: string;
  text?: string;
  html?: string;
};

// export type UserAttributes = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// };

// declare module "express" {
//   interface Request {
//     user?: UserAttributes;
//   }
// }


export type ExceptionDetails = {
  message?: string | null;
  error?: any;
};

export type BaseExceptionType = {
  message: string | null;
  error?: any;
  code: number;
};

export interface CompletionResponse  {
  choices: {
    message: {
      content: {
        content: string | null;
      };
    };
  }[];
};

export type ApiResponseT = {
  success: boolean;
  message: string;
  error?: any;
  data?: any;
};


export interface Note {
  fileName: string;
  url: string;
}

export type NodeEnvironment = "development" | "test" | "production";
