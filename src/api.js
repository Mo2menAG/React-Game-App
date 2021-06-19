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

const popularGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}platforms=18,1,7&ordering=-rating&page_size=10`;

//upcoming games

const upcomingGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${currentDate},${nextYear}platforms=18,1,7,4,187&ordering=-added&page_size=10`;

//new games

const newGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}platforms=18,1,7&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${baseURL}${popularGames}`;

export const upcomingGamesURL = () => `${baseURL}${upcomingGames}`;

export const newrGamesURL = () => `${baseURL}${newGames}`;
