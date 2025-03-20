import axios from 'axios';
import Cookies from 'js-cookie';

const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
    timeout: 10000, // thời gian phản hồi nếu vượt quá thì axios sẽ trả về lỗi
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.request.use(
    async (config) => {
        // console.log(config);
        const token = Cookies.get('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

const handleRequestSuccess = (response) => {
    return response.data;
};

const handleRequestError = (error) => {
    return Promise.reject(error);
};

const handleresponseErr = async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = Cookies.get('refreshToken');
        const data = {
            refreshToken
        };
        const res = await axiosClient.post('/auth/refresh-token', data);
        if (res) {
            Cookies.set('token', res.accessToken);
            return axiosClient(originalRequest);
        }
    }
};

export default axiosClient;
