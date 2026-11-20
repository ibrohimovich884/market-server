import * as AuthService from "../services/auth.service.js";
import { success, error } from "../utils/response.js";

export async function register(req, res, next) {
    try {
        const user = await AuthService.register(req.body);
        return success(res, "User registered", user);
    } catch (err) {
        next(err);
    }
}

export async function login(req, res, next) {
    try {
        const token = await AuthService.login(req.body);
        return success(res, "Login successful", { token });
    } catch (err) {
        next(err);
    }
}
