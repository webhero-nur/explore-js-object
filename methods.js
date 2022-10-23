const student = {
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

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('Algebra');
// console.log(reExam);
const remaining = student.treatDe(900, 100);
console.log(remaining);
const dolaRemaining = student.treatDe(500, 50);
console.log(dolaRemaining);