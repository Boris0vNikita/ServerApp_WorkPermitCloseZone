const workService = require("../Services/work.service");

class WorkController {
    getAll(req, res, next) {
        try {
            const worksAll = workService.getWorklAll();
            res.json(worksAll);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    getOne(req, res, next) {
        try {
            const { id } = req.params;
            const workOne = workService.getWorkOne(id);
            return res.status(200).json(workOne);
        } catch (e) {
            res.status(500).json("" + e);
        }
    }
}

module.exports = new WorkController();
