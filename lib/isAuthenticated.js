"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function isAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.json({ status: 0, message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    const secret = process.env.SECRET_KEY;
    jsonwebtoken_1.default.verify(token, secret, (err, hashedObj) => {
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
exports.default = isAuthenticated;
