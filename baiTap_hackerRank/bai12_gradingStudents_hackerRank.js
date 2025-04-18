function gradingStudents(grades) {
    // Write your code here
    // return grades.map(grade => {
    //     if (grade < 38) return grade;
    //     let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
    //     if (nextMultipleOf5 - grade < 3) {
    //         return nextMultipleOf5;
    //     } else {
    //         return grade;
    //     }
    // });
    function lamTronDiem(diem) {
        if (diem < 38) return diem;
        let boiSoGanNhat = Math.ceil(diem / 5) * 5;
        return (boiSoGanNhat - diem < 3) ? boiSoGanNhat : diem;
    }

    for (let i = 0; i < grades.length; i++) {
        console.log(lamTronDiem(grades[i]));
    }
}

gradingStudents([74, 67, 38, 33])
console.log(Math.ceil(74/5))