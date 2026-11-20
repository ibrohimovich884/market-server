export function success(res, msg, data) {
    return res.json({ success: true, message: msg, data });
}

export function error(res, msg) {
    return res.status(400).json({ success: false, message: msg });
}
