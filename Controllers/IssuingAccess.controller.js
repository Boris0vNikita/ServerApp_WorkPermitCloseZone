const issuingAccessService = require("../Services/issuingAccess.service");

class IssuingAccessController {
    getAll(req, res) {
        try {
            const { pageNumber } = req.query;

            const issuingAccessAll = issuingAccessService.getIssuingAccessAll(pageNumber);
            res.json(issuingAccessAll);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    getTrueAll(req, res) {
        try {
            const issuingAccessAll = issuingAccessService.getTrueIssuingAccessAll();
            res.json(issuingAccessAll);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    getPage(req, res) {
        try {
            const issuingAccessAll = issuingAccessService.getTotalPages();
            res.json(issuingAccessAll);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    getOne(req, res) {
        try {
            const { number } = req.params;
            const issuingAccessAllOne = issuingAccessService.getIssuingAccessOne(number);
            return res.status(200).json(issuingAccessAllOne);
        } catch (e) {
            res.status(500).json("" + e);
        }
    }
    postAdd(req, res) {
        try {
            const { fio, number, date, reason, license } = req.body;
            const issuingAccessAdd = issuingAccessService.addIssuing(fio, number, date, reason, license);
            return res.status(200).json(issuingAccessAdd);
        } catch (e) {
            res.status(500).json("" + e);
        }
    }
    updateIssuing(req, res) {
        try {
            const { number, license } = req.body;
            const issuingAccessUpdata = issuingAccessService.updateIssuing(number, license);
            return res.status(200).json(issuingAccessUpdata);
        } catch (e) {
            res.status(500).json("" + e);
        }
    }
    deleteIssuing(req, res) {
        try {
            const { number } = req.body;
            const issuingAccessUpdata = issuingAccessService.deleteIssuing(number);
            return res.status(200).json(issuingAccessUpdata);
        } catch (e) {
            res.status(500).json("" + e);
        }
    }
}

module.exports = new IssuingAccessController();
