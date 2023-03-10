import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '14389096-3138-44a4-a13b-8e136108be86'
    }
})


export const userApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {
            withCredentials: true
        }).then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`, {
            withCredentials: true
        }).then(response => response.data)
    }
}


