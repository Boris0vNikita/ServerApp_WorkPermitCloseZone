const dosWorkPermitService = require("../Services/dosWorkPermit.service");

class dosWorkPermitController {
    getAll(req, res) {
        try {
            const dosAll = dosWorkPermitService.getDosAll();
            res.json(dosAll);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    getOne(req, res) {
        try {
            const { id } = req.params;
            const dosOne = dosWorkPermitService.getDosOne(id);
            return res.status(200).json(dosOne);
        } catch (e) {
            res.status(500).json("" + e);
        }
    }
    postDosList(req, res) {
        try {
            const {
                numberDos,
                name,
                title,
                note,
                outstanding,
                custromer,
                executor,
                startPlan,
                endPlan,
                startFact,
                endFact,
                status,
                codeWork,
                codeEquipment,
                codeSystem,
                siz,
                tehEvent,
                brigade,
                workplace,
            } = req.body;
            const dosUpdata = dosWorkPermitService.postDos(
                numberDos,
                name,
                title,
                note,
                outstanding,
                custromer,
                executor,
                startPlan,
                endPlan,
                startFact,
                endFact,
                status,
                codeWork,
                codeEquipment,
                codeSystem,
                siz,
                tehEvent,
                brigade,
                workplace
            );
            return res.status(200).json(dosUpdata);
        } catch (e) {
            //console.log(e.message);
            res.status(500).json(e.message);
        }
    }
    patchStatus(req, res) {
        try {
            const { id, date } = req.body;
            const dosUpdata = dosWorkPermitService.patchDosStatus(id, date);
            return res.status(200).json(dosUpdata);
        } catch (e) {
            res.status(500).json("" + e);
        }
    }
    patchPreparation(req, res) {
        try {
            const { id, note, workplaces, siz, tex } = req.body;
            const dosUpdata = dosWorkPermitService.patchPreparation(id, note, workplaces, siz, tex);
            return res.status(200).json(dosUpdata);
        } catch (e) {
            res.status(500).json("" + e);
        }
    }
}

module.exports = new dosWorkPermitController();
