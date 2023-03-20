import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '14389096-3138-44a4-a13b-8e136108be86'
    }
})


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {}).then(response => response.data)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`, {}).then(response => response.data)
    },
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`, {})
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}



// метод some