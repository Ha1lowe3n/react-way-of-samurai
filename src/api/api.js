// DAL - data access layer
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "f6d122c0-e13a-41a0-8a89-732f8ec98129",
    },
});

// users
export const usersAPI = {
    // получаем пользователей
    getUsers: (currentPage, pageSize) => {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => res.data);
    },

    unfollowUser: (userId) => {
        return instance.delete(`follow/${userId}`).then((res) => res.data);
    },

    followUser: (userId) => {
        return instance.post(`follow/${userId}`).then((res) => res.data);
    },
};

// profile
