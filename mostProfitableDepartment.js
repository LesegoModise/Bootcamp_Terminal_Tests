var salesData = [
    { department: 'hardware', sales: 4500, day: 'Monday' },
    { department: 'outdoor', sales: 1500, day: 'Monday' },
    { department: 'carpentry', sales: 5500, day: 'Monday' },
    { department: 'hardware', sales: 7500, day: 'Tuesday' },
    { department: 'outdoor', sales: 2505, day: 'Tuesday' },
    { department: 'carpentry', sales: 1540, day: 'Tuesday' },
    { department: 'hardware', sales: 1500, day: 'Wednesday' },
    { department: 'outdoor', sales: 8507, day: 'Wednesday' },
    { department: 'carpentry', sales: 8009, day: 'Wednesday' },
    { department: 'hardware', sales: 12000, day: 'Thursday' },
    { department: 'outdoor', sales: 18007, day: 'Thursday' },
    { department: 'carpentry', sales: 6109, day: 'Thursday' },
    { department: 'hardware', sales: 7005, day: 'Friday' },
    { department: 'outdoor', sales: 12006, day: 'Friday' },
    { department: 'carpentry', sales: 16109, day: 'Friday' }
];

export function mostProfitableDepartment(salesData) {
    var departmentSales = {};
    for (var i = 0; i < salesData.length; i++) {
        var department = salesData[i].department;
        if (departmentSales[department] = departmentSales[department] || 0);
        departmentSales[department] += salesData[i].sales;
    }

    var maxSales = 0;
    var mostProfitableDept = "";
    for (var department in departmentSales) {
        //console.log(department);
        //console.log(departmentSales[department]);
        if (departmentSales[department] > maxSales) {
            maxSales = departmentSales[department];
            mostProfitableDept = department;
        }
    }

    return mostProfitableDept;
}

// console.log("The winning department is *inserts drumroll*, " + mostProfitableDepartment(salesData) + "!");

