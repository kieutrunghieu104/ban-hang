import { config } from "dotenv";
config({ path: ".env.development" });
const env = {
  PORT: Number(process.env.PORT),
  MONGODB_URI: process.env.MONGODB_URI,
  CLIENT_ORIGIN: Number(process.env.CLIENT_ORIGIN),
};
export default env;