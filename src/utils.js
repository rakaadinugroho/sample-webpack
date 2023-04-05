const convertToRupiah = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);

const taxConfig = [
    { range: 50000000, percentage: 0.05 },
    { range: 250000000, percentage: 0.15 },
    { range: 500000000, percentage: 0.25 },
    { range: "all", percentage: 0.30 },
];

const pph21 = (pkp, tax = taxConfig) => {
    return tax.reduce((acc, cur) => {
        if(acc.pkp !== 0) {
            if (cur.range !== "all") {
                const calcTax = (cur.range - acc.result) > acc.pkp ? acc.pkp : (cur.range - acc.result);
                const resultTax = acc.resultTax + (calcTax * cur.percentage);
                const pkpNext = acc.pkp - calcTax;
                return { pkp: pkpNext, result: acc.result + calcTax, resultTax: resultTax };
            }

            const upperResultTax = acc.resultTax + (acc.pkp * cur.percentage);
            return { ...acc, resultTax:  upperResultTax};
        }
        return acc;
    }, { pkp: pkp, result: 0, resultTax: 0 });
};

export { pph21, convertToRupiah }