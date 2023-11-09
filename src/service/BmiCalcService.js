class BmiCalcService {
    constructor() {
        this.performBmiCalculation = (w, h) => {
            if (h == 0){
                throw Error("Height precisa ser maior que 0");
            }
            let weight = parseFloat(w, 10);
            let height = parseFloat(h, 10);
            return (weight / height / height * 10000).toFixed(2)
        }
    }

}
exports.BmiCalcService = BmiCalcService;