export function calculateInvestmentResults(
    {
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
    }
){
    const annualData=[];
    let investmentValue=initialInvestment;
    let totalInterest = 0;
    let investedCap = initialInvestment;

    for(let i = 0; i< duration; i++){
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        totalInterest += interestEarnedInYear;
        investedCap += annualInvestment;
        investmentValue += interestEarnedInYear + annualInvestment;
        annualData.push({
            year: i+1,
            interest: interestEarnedInYear,
            investmentValue: investmentValue,
            totalInterest: totalInterest,
            investedCapital: investedCap,
        });
    }
    return annualData
}