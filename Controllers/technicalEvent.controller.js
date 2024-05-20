const technicalService = require("../Services/technicalEvent.service");

class TechnicalController {
    getAll(req, res, next) {
        try {
            const technicalAll = technicalService.getTechnicallAll();
            res.json(technicalAll);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    getOne(req, res, next) {
        try {
            const { label } = req.params;
            const technicalOne = technicalService.getTechnicalOne(label);
            return res.status(200).json(technicalOne);
        } catch (e) {
            res.status(500).json("" + e);
        }
    }
}

module.exports = new TechnicalController();
