const canadianDollar = 0.91;

function randonTwo(amount) {
    //amount*100 取整数，就是精确到分
    return Math.round(amount * 100) / 100;
}

exports.canadianToUS = canadian => randonTwo(canadian * canadianDollar);
exports.USToCancdian = us => randonTwo(us / canadianDollar);