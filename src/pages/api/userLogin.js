import Users from "@/models/Users";
import db from "@/utils/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const jwtSecret = "#1Edsd515add";

export default async function handler(req, res) {
  let success = false;

  if (req.method === "POST") {
    await db.connect();
    const { email, password } = req.body;
    try {
      let user = await Users.findOne({ email: email });

      if (!user) {
        return res.status(400).json({ success, error: "User not found" });
      }

      const pwdCompare = await bcrypt.compare(password, user.password);
      if (!pwdCompare) {
        return res.status(400).json({ success, error: "Invalid Credentials" });
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
      res.status(500).json({ success, error: "Internal Server Error" });
    }
  }
  
}
