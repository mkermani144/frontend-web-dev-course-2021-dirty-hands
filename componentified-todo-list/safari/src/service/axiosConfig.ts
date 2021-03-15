import axios from 'axios';
import {BASE_URL, ContentType, ApplicationJson} from './constant'

const instance = axios.create({baseURL: `${BASE_URL}`});

instance.defaults.headers.common[`${ContentType}`] = `${ApplicationJson}`;
instance.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';


export default instance;
