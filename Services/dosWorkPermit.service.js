const dosWorkPermit = require("../func/dosData");

class DosWorkPermitService {
    getDosAll() {
        return dosWorkPermit;
    }
    getDosOne(id) {
        if (!id) {
            throw new Error("id не указан");
        }
        const equipmentOne = dosWorkPermit.find((s) => s.numberDos === id);
        if (!equipmentOne) {
            throw new Error("Наряд не найден");
        }
        return equipmentOne;
    }
    postDos(
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
    ) {
        if (
            !numberDos &&
            !name &&
            !title &&
            !note &&
            !executor &&
            !outstanding &&
            !custromer &&
            !startPlan &&
            !endPlan &&
            !startFact &&
            !endFact &&
            !status &&
            !codeWork &&
            !codeEquipment &&
            !codeSystem &&
            !siz &&
            !tehEvent &&
            !brigade &&
            !workplace
        ) {
            throw new Error("Не все данные введены!");
        }
        const dosWorkPermitIndex = dosWorkPermit.findIndex((s) => s.numberDos === numberDos);
        if (dosWorkPermitIndex !== -1) {
            //console.log("Такой есть");
            throw new Error("Объект с таким номером уже существует");
        }

        const petrovExists = brigade.some((person) => person.fio === "Петров. П. П");
        if (petrovExists) {
            throw new Error("Нельзя добавить на наряд");
        }

        const newDosWorkPermit = {
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
        };

        // Добавляем новый объект в массив
        dosWorkPermit.push(newDosWorkPermit);
    }
    patchDosStatus(id, date) {
        if (!id) {
            throw new Error("Номер наряда не указан");
        }
        const index = dosWorkPermit.findIndex((s) => s.numberDos === id);
        if (index === -1) {
            throw new Error("Объект с данным номером не найден");
        }

        dosWorkPermit[index].status = "Закрыт";
        dosWorkPermit[index].endFact = date;
        dosWorkPermit[index].endPlan = date;

        return dosWorkPermit[index];
    }

    patchPreparation(id, note, workplaces, siz, tex) {
        //console.log(id, note, workplaces, siz, tex);
        if (!id) {
            throw new Error("Номер наряда не указан");
        }
        const index = dosWorkPermit.findIndex((s) => s.numberDos === id);
        if (index === -1) {
            throw new Error("Объект с данным номером не найден");
        }

        dosWorkPermit[index].status = "Подготовлен";
        dosWorkPermit[index].note = note;
        dosWorkPermit[index].siz = siz;
        dosWorkPermit[index].tehEvent = tex;

        // Найти рабочее место с указанным id в массиве workplace
        workplaces.forEach((workplace) => {
            const workplaceToUpdate = dosWorkPermit[index].workplace.find((wp) => wp.id === workplace.id);
            if (!workplaceToUpdate) {
                throw new Error(`Рабочее место с id ${workplace.id} не найдено`);
            }
            workplaceToUpdate.radiationParameter = workplace.radiationParameter;
        });

        return dosWorkPermit[index];
    }
}

module.exports = new DosWorkPermitService();
