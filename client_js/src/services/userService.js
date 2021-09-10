import http from '../common/http';

export const userService = {
    Login(data) {
        return http.post(`/user/login`, data);
    },
    GetUser() {
        return http.get(`/user`);
    },
    AddUser(data) {
        return http.post(`/user/add`, data);
    },
    UpdateUser(data) {
        return http.post(`/user/update`, data);
    },
    DeleteUser(id) {
        return http.delete(`/user/del/`+ id);
    }
};
