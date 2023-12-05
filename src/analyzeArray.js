const analyzeArray = {
    average: (array) => {
        if (!Array.isArray(array) || array.length === 0) {
            throw new Error("Input must be a non-empty array of numbers");
        }

        const sum = array.reduce((acc, num) => acc + num, 0);
        return sum / array.length;
    },

    min: (array) => {
        if (!Array.isArray(array) || array.length === 0) {
            throw new Error("Input must be a non-empty array of numbers");
        }

        return Math.min(...array);
    },

    max: (array) => {
        if (!Array.isArray(array) || array.length === 0) {
            throw new Error("Input must be a non-empty array of numbers");
        }

        return Math.max(...array);
    },

    length: (array) => {
        if (!Array.isArray(array) || array.length === 0) {
            throw new Error("Input must be a non-empty array of numbers");
        }

        return array.length;
    }

}



module.exports = { analyzeArray }