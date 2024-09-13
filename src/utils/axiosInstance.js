// axiosInstance.js
import axios from 'axios';
import { BASE_URL } from '../utils/constant';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, // กำหนดเวลาในการรอการตอบกลับ
    headers: { 'Content-Type': 'application/json' }
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    config => {
        // เพิ่ม token หรือข้อมูลอื่นๆ ก่อนทำคำขอ
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        // จัดการกับข้อผิดพลาด
        console.error('Response error:', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
