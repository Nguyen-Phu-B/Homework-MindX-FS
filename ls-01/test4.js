const employeesInfo = [
    { name: "David", workingTime: 98, salary: 10 },
    { name: "Luiz", workingTime: 78, salary: 20 },
    { name: "Silva", workingTime: 165, salary: 25 },
    { name: "Santos", workingTime: 215, salary: 30 },
    { name: "Alex", workingTime: 143, salary: 28 },
];

const getTotalSalaryOfCompany = (prEmployees) => {
    let countSalary = 0;
    prEmployees.map((item) => {
        countSalary += item.workingTime * item.salary;
    });
    console.log(`Tổng lương cty : ${countSalary}`);
};

const calculateBonus = (prWorkTime) => {
    let rsBonus = 0;

    if (prWorkTime >= 150) {
        return (rsBonus = 200);
    } else if (prWorkTime >= 100) {
        return (rsBonus = 150);
    } else if (prWorkTime >= 50) {
        return (rsBonus = 100);
    } else {
        return (rsBonus = 50);
    }

    return rsBonus;
};

const calculateSalary = (prEmploy) => {
    const bonus = calculateBonus(prEmploy.workingTime);
    const salary = prEmploy.workingTime * prEmploy.salary + bonus;

    console.log(
        `${prEmploy.name} tổng lương = thời gian: ${prEmploy.workingTime} * mức lương: ${prEmploy.salary} + bonus ${bonus} = ${salary}`
    );
};

const getTotalSalaryOfEmployees = (prName) => {
    let rs = employeesInfo.find((employ) => {
        return employ.name === prName;
    });

    if (rs) {
        calculateSalary(rs);
    } else {
        console.log(prName, " không tồn tại");
    }
};

getTotalSalaryOfEmployees("Santos");

getTotalSalaryOfCompany(employeesInfo);
