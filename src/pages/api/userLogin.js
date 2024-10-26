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

  if (req.method === "POST") {
    await db.connect();
    const { email, password } = req.body;
    try {
      let user = await Users.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ success, error: "Try logging in with correct email" });
      }

      const pwdCompare = await bcrypt.compare(password, user.password);
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ success, error: "Try logging in with correct password" });
      }

      const data = {
        user: {
          id: user["_id"],
        },
      };

      const authToken = jwt.sign(data, jwtSecret);
      const isAdmin = await user.isAdmin;
      success = true;
      res.json({ success: success, authToken: authToken, isAdmin: isAdmin });
    } catch (error) {
      console.log("Error occurred:", error.message);
      res.send("Server Error");
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


