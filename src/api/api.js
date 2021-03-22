// DAL - data access layer
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "f6d122c0-e13a-41a0-8a89-732f8ec98129",
    },
});

export const usersAPI = {
    // получаем пользователей -> UserContainer
    getUsers: (currentPage, pageSize) =>
        instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => res.data),

    // подписываемся -> User
    unfollowUser: (userId) =>
        instance.delete(`follow/${userId}`).then((res) => res.data),

    // отписываемся -> User
    followUser: (userId) =>
        instance.post(`follow/${userId}`).then((res) => res.data),
};

export const profileAPI = {
    // получаем иноформацию о пользователе на страницу профиля -> ProfileContainer
    getProfile: (userId) =>
        instance.get(`profile/${userId}`).then((res) => res.data),

    // получаем статус пользователя ->
    getStatus: (userId) => instance.get(`profile/status/${userId}`),

    // обновляем статус ->
    updateStatus: (status) => instance.put(`profile/status`, { status }),
};

export const authAPI = {
    // авторизация -> HeaderContainer
    me: () => instance.get(`auth/me`),
};
