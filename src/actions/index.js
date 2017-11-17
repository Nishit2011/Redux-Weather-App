import axios from 'axios';

const API_KEY = '9cbf290bcc80a345c0dcadbb6f556d15';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export  function fetchWeather(city){

	const url = `${ROOT_URL}&q=${city},in`;

	const request = axios.get(url);

	console.log('Request:', request);
	return{
		type:FETCH_WEATHER,
		payload: request
	}
}