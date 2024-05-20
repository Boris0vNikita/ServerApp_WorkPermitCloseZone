const statusService = require("../Services/status.service");

class StatusController {
    getAll(req, res, next) {
        try {
            const statusAll = statusService.getStatuslAll();
            res.json(statusAll);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    getOne(req, res, next) {
        try {
            const { name } = req.params;
            const statusOne = statusService.getStatusOne(name);
            return res.status(200).json(statusOne);
        } catch (e) {
            res.status(500).json("" + e);
        }
    }
}

module.exports = new StatusController();
