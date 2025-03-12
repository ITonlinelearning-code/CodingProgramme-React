import jsPDF from 'jspdf';

export function generatepdf(data){
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text('Investment Report', 10, 10);
    doc.setFontSize(12);
    doc.text(`Beginning Investment: ${data.initialInvestment}`, 10, 30);
    doc.text(`Annual Investment: ${data.annualInvestment}`, 10, 40);
    doc.text(`Return on Investment: ${data.expectedReturn}%`, 10, 50);
    doc.text(`Years of Investment: ${data.duration}`, 10, 60);

    let yOffset = 80;
    const linespacing = 10;
    const pageHeight = doc.internal.pageSize.height
    data.results.forEach((result) =>{
        if (yOffset+50 > pageHeight){
            doc.addPage();
            yOffset = 20;
        }
        doc.text(`Year: ${result.year}`, 10, yOffset)
        doc.text(`Interest (Year): ${result.interest.toFixed(2)}`,10, (yOffset+linespacing))
        doc.text(`Interest (Total): ${result.totalInterest.toFixed(2)}`,10, (yOffset+2*linespacing))
        doc.text(`Invested Capital: ${result.investedCap.toFixed(2)}`,10, (yOffset+3*linespacing))
        doc.text(`Total Investment Value: ${result.investmentValue.toFixed(2)}`,10, (yOffset+4*linespacing))

        yOffset+=60;
    })
    doc.save('Investment Report.pdf')
}