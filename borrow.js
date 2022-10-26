const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        return `${this.name} is participating in an exam`;
    },
    improveExam: function (subject = '') {
        console.log(this.exam());
        // this.money = this.money - 10;
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    treatDe: function (amount = 0, tips = 0) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const result = kodomAli.exam();

const badamAli = {
    name: 'kacha badam',
    money: 8000
}


const result2 = kodomAli.exam.call(badamAli);
// console.log(result2);
const badamMoney = kodomAli.treatDe.call(badamAli, 400, 40);
console.log(badamMoney);
const badamMoney2 = kodomAli.treatDe.apply(badamAli, [1000, 100])
console.log(badamMoney2);

const badamAliTreat = kodomAli.treatDe.bind(badamAli);
const remaining = badamAliTreat(1000, 100);
console.log(remaining);