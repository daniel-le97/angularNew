import axios from 'axios';
import { baseURL } from 'env';


export const api = axios.create({
  baseURL,
  timeout: 8000,
});
