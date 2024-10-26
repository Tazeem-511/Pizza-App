import Users from "@/models/Users";
import db from "@/utils/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.ENV_SECRET;
export default async function handler(req, res) {
  // Log environment variables
  console.log("Database URL:", process.env.DB_URL);
  console.log(
    "JWT Secret:",
    process.env.ENV_SECRET || "ENV_SECRET is not defined"
  );

  console.log("Public Base URL:", process.env.NEXT_PUBLIC_BASE_URL);
  
  let success = false;
  const salt = await bcrypt.genSalt(10);

  let securePass = await bcrypt.hash(req.body.password, salt);

  if (req.method === "POST") {
    await db.connect();
    try {
      await Users.create({
        name: req.body.name,
        password: securePass,
        email: req.body.email,
        location: req.body.location,
      })
        .then(async (user) => {
          const data = {
            user: {
              id: user["_id"],
            },
          };
          const isAdmin = await user.isAdmin;
          const authToken = jwt.sign(data, jwtSecret);
          success = true;
          res.json({ success: success, authToken: authToken, isAdmin });
        })
        .catch((err) => {
          res.json({ error: err.message });
        });
    } catch (error) {
      console.log(error.message);
    }
  }
  await db.disconnect();

  res.status(200).json({ name: "John Doe" });
}
