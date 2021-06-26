import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://construction-log-bf01a-default-rtdb.firebaseio.com'
});

export default instance;
