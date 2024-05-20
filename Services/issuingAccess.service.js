const issuing = require("../func/issuingAccessData");
const itemsPerPage = 5;
class IssuingAccessService {
    getIssuingAccessAll(pageNumber) {
        console.log(pageNumber);
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const slicedData = issuing.slice(startIndex, endIndex);
        return [...slicedData];
    }

    getTrueIssuingAccessAll() {
        const trueData = issuing.filter((s) => s.license === true);

        return [...trueData];
    }

    getTotalPages() {
        console.log(Math.ceil(issuing.length / itemsPerPage));

        return Math.ceil(issuing.length / itemsPerPage); // Вычисляем общее количество страниц
    }
    getIssuingAccessOne(id) {
        if (!id) {
            throw new Error("Номер не указана");
        }
        const issuingOne = issuing.find((s) => s.number === id);
        if (!issuingOne) {
            throw new Error("Номер не найден");
        }
        return issuingOne;
    }
    addIssuing(fio, number, date, reason, license) {
        const existingIndex = issuing.findIndex((s) => s.number === number);
        if (existingIndex !== -1) {
            console.log("Такой есть");
            throw new Error("Объект с таким номером уже существует");
            // или можно просто вернуть исходный массив без изменений
            // return issuing;
        }
        issuing.push({ fio, number, date, reason, license });
        return issuing;
    }
    updateIssuing(id, license) {
        if (!id || license === undefined) {
            throw new Error("Номер и/или значение не указаны");
        }
        const index = issuing.findIndex((s) => s.number === id);
        if (index === -1) {
            throw new Error("Объект с данным номером не найден");
        }

        issuing[index].license = !license;
    }
    deleteIssuing(id) {
        if (!id === undefined) {
            throw new Error("Номер  не указан");
        }
        const index = issuing.findIndex((s) => s.number === id);
        if (index === -1) {
            throw new Error("Объект с данным номером не найден");
        }

        issuing.splice(index, 1);
    }
}

module.exports = new IssuingAccessService();
