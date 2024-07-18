// import "dotenv/config";

// /**
//  * This function checks if all the required environment variables are set.
//  */
// export default function () {
//   const {
//     DB_PORT,
//     DB_DATABASE,
//     DB_HOST,
//     DB_PASSWORD,
//     DB_USER,
//     EMAIL_CONFIRMATION_URL,
//     MAIL_USER,
//     MAIL_PASS,
//     MAIL_HOST,
//     CLOUDINARY_CLOUD_NAME,
//     CLOUDINARY_API_KEY,
//     CLOUDINARY_API_SECRET,
//     OPEN_AI_API_KEY,
//   } = process.env;

//   // Check for MySql Connection parameters like port, host, user, password, database
//   if (!DB_PORT) {
//     throw new Error("FATAL ERROR: DB_PORT is not defined");
//   }

//   if (!DB_USER) {
//     throw new Error("FATAL ERROR: DB_USER is not defined");
//   }

//   if (!DB_HOST) {
//     throw new Error("FATAL ERROR: DB_HOST is not defined");
//   }

//   if (!DB_DATABASE) {
//     throw new Error("FATAL ERROR: DB_DATABASE is not defined");
//   }

//   if (!DB_PASSWORD) {
//     throw new Error("FATAL ERROR: DB_PASSWORD is not defined");
//   }

//   if (!CLOUDINARY_CLOUD_NAME) {
//     throw new Error("FATAL ERROR: CLOUDINARY_CLOUD_NAME is not defined");
//   }

//   if (!CLOUDINARY_API_KEY) {
//     throw new Error("FATAL ERROR: CLOUDINARY_API_KEY is not defined");
//   }

//   if (!CLOUDINARY_API_SECRET) {
//     throw new Error("FATAL ERROR: CLOUDINARY_API_SECRET is not defined");
//   }

//   if (!EMAIL_CONFIRMATION_URL) {
//     throw new Error("FATAL ERROR: EMAIL_CONFIRMATION_URL is not defined");
//   }

//   if (!OPEN_AI_API_KEY) {
//     throw new Error("FATAL ERROR: OPEN_AI_API_KEY is not defined");
//   }
//   if (!MAIL_USER) {
//     throw new Error("FATAL ERROR: MAIL_USER is not defined");
//   }
//   if (!MAIL_PASS) {
//     throw new Error("FATAL ERROR: MAIL_PASS is not defined");
//   }
//   if (!MAIL_HOST) {
//     throw new Error("FATAL ERROR: MAIL_HOST is not defined");
//   }
// }
