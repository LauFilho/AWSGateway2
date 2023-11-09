const BmiCalcService = require("../../src/service/BmiCalcService").BmiCalcService;

test('Teste pra calcular W = 16,6 e H = 99,1', () => {
    let weight = 16.6;
    let height = 99.1;
    let bmi = new BmiCalcService().performBmiCalculation(weight, height)
    expect(bmi).toEqual("16.90");
//    console.log(bmi);
});

test('Teste pra calcular W = 16,6 e H = 0', () => {
    let weight = 16.6;
    let height = 0;
    expect(() => {
        new BmiCalcService().performBmiCalculation(weight, height)
    }).toThrow();
//    console.log(bmi);
});
