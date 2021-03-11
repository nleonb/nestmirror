import {executeFetch} from "./utils.js";

const apiKeyMediastack = '5e1e6a96b3d7a102dcb68318b10dec4b';
const date = new Date();
const nowString = new Date().toISOString().slice(0,10);
const yesterdayDate = date.setDate(date.getDate() - 3);
const yesterdayString = new Date(yesterdayDate).toISOString().slice(0,10);
const countires = 'us,es,ve';
const languages = 'es';
const sources = 'elpais';
const limit = 50;

const supportedLanguages = {
    ar: 'ar',
    de: 'de',
    en: 'en',
    es: 'es',
    fr: 'fr',
    he: 'he',
    it: 'it',
    nl: 'nl',
    no: 'no',
    pt: 'pt',
    ru: 'ru',
    se: 'se',
    zh: 'zh',
}

export const getNews = async () => {
    console.log('yesterdayString ' + yesterdayString);
    console.log('nowString ' + nowString);
    const request = new Request(
        `http://api.mediastack.com/v1/news?access_key=${apiKeyMediastack}&countries=${countires}&languages=${languages}&date=${yesterdayString},${nowString}&sources=${sources}&limit=${limit}`,
        { method: 'GET' }
    );
    return await executeFetch(request);
}