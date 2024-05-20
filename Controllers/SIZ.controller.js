const sizService = require("../Services/SIZ.service");

class SIZController {
    getAll(req, res, next) {
        try {
            const sizAll = sizService.getSIZlAll();
            res.json(sizAll);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    getOne(req, res, next) {
        try {
            const { label } = req.params;
            const sizOne = sizService.getSIZOne(label);
            return res.status(200).json(sizOne);
        } catch (e) {
            res.status(500).json("" + e);
        }
    }
}

module.exports = new SIZController();
