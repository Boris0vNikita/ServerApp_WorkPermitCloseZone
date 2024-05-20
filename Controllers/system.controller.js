const systemService = require("../Services/system.service");

class WorkController {
    getAll(req, res, next) {
        try {
            const systemAll = systemService.getSystemlAll();
            return res.status(200).json(systemAll);
        } catch (e) {
            return res.status(500).json(e);
        }
    }
    getOne(req, res, next) {
        try {
            const { id } = req.params;
            const systemOne = systemService.getSystemOne(id);
            return res.status(200).json(systemOne);
        } catch (e) {
            return res.status(500).json("" + e);
        }
    }
}

module.exports = new WorkController();
