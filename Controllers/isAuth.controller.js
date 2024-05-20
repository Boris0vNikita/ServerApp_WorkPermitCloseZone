const isAuthService = require("../Services/isAuth.service");

class AuthController {
    async registration(req, res) {
        try {
            const { login, showname, identifier, code } = req.body;
            const peopleData = await isAuthService.registration(login, showname, identifier, code);

            return res.status(200).json(peopleData);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async login(req, res) {
        try {
            const { login, identifier } = req.body;
            const peopleData = await isAuthService.login(login, identifier);
            return res.status(200).json(peopleData);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async ChekToken(req, res) {
        try {
            const check = await isAuthService.checkToken(req.user);
            return res.status(200).json(check);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new AuthController();
