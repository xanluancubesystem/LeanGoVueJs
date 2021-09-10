
export const authService = {
    isAuthenticated() {
        if (this.getToken()) {
            return true;
        } else {
            return false;
        }
    },
    getToken() {
        return localStorage.getItem('demotoken');
    }
}
