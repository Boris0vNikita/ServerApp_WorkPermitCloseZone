const equipmentService = require("../Services/equipment.service");

class EquipmentController {
    getAll(req, res, next) {
        try {
            const equipmentAll = equipmentService.getEquipmentlAll();
            res.json(equipmentAll);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    getOne(req, res, next) {
        try {
            const { id } = req.params;
            const equipmentOne = equipmentService.getEquipmentOne(id);
            return res.status(200).json(equipmentOne);
        } catch (e) {
            res.status(500).json("" + e);
        }
    }
}

module.exports = new EquipmentController();
