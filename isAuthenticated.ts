import jwt from "jsonwebtoken";

export default async function isAuthenticated(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ status: 0, message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  const secret = process.env.SECRET_KEY;

  jwt.verify(token, secret!, (err: any, hashedObj: any) => {
    if (err) {
      return res.json({
        status: 0,
        message: "Unauthorized",
      });
    }
    req.user = hashedObj;
    next();
    return;
  });
}
