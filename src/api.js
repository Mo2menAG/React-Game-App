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
let currenttMonth = getCurrentMonth();
if (currenttMonth < 10) {
    currenttMonth = "0" + currenttMonth;
}

let currentDay = getCurrentDay();
if (currentDay < 10) {
    currentDay = "0" + currentDay;
}
const currentDate = `${currentYear}-${currenttMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currenttMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currenttMonth}-${currentDay}`;
const numberOfGames = 6;

//popular Games

const popularGames = `games?&dates=${lastYear},${currentDate}&key=${process.env.REACT_APP_RAWG_API}&ordering=-rating&page_size=${numberOfGames}`;

//upcoming games

const upcomingGames = `games?dates=${currentDate},${nextYear}&key=${process.env.REACT_APP_RAWG_API}&ordering=-added&page_size=${numberOfGames}`;

//new games

const newGames = `games?dates=${lastYear},${currentDate}&key=${process.env.REACT_APP_RAWG_API}&ordering=-released&page_size=${numberOfGames}`;

export const popularGamesURL = () => `${baseURL}${popularGames}`;

export const upcomingGamesURL = () => `${baseURL}${upcomingGames}`;

export const newrGamesURL = () => `${baseURL}${newGames}`;

//games deatils url
export const gameDetailsUrl = (gameId) =>
    `${baseURL}games/${gameId}?key=${process.env.REACT_APP_RAWG_API}`;

export const gameScreenshotsUrl = (gameId) =>
    `${baseURL}games/${gameId}/screenshots?key=${process.env.REACT_APP_RAWG_API}`;
