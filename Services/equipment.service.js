const equipment = require("../func/equipmentData");

class EquipmentService {
    getEquipmentlAll() {
        return equipment;
    }
    getEquipmentOne(id) {
        if (!id) {
            throw new Error("Система не указана");
        }
        const equipmentOne = equipment.find((s) => s.id === id);
        if (!equipmentOne) {
            throw new Error("Система не найдена");
        }
        return equipmentOne;
    }
}

module.exports = new EquipmentService();
