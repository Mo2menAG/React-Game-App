//base url
const baseURL = "https://api.rawg.io/api/";

//geting data
const getCurrentMonth = () => {
    const Month = new Date().getMonth() + 1;
    if (Month > 10) {
        return `0${Month}`;
    }
    return Month;
};

const getCurrentDay = () => {
    const day = new Date().getDay() + 1;
    if (day > 10) {
        return `0${day}`;
    }
    return day;
};

const currentYear = new Date().getFullYear();
const currenttMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currenttMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currenttMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currenttMonth}-${currentDay}`;

//popular Games

const populerGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const populerGamesURL = () => `${baseURL}${populerGames}`;
