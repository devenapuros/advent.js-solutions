const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];

function countHours(year, holidays) {
    let dayCount = 0;
    let hourCount = 0;
    holidays.map((holiday) => {
        const day = new Date(`${holiday}/${year}`).getDay();
        if (day >= 1 && day <= 5) {
            dayCount++;
            hourCount += 2;
        }
    });

    return { days: dayCount, hours: hourCount };
}

console.log(countHours(year, holidays));
