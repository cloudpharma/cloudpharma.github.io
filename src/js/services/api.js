import axios from 'axios';
const API_URL = 'http://localhost:8000'


class ApiService {
    async hasAuth(data) {
        const url = `${API_URL}/check_auth/`;
        return axios.post(url, data).then(response => response.data)
    }
    login(data) {
        const url = `${API_URL}/login/`;
        return axios.post(url, data).then(response => response.data)
    }
    logout(data) {
        const url = `${API_URL}/logout/`;
        return axios.post(url, data).then(response => response.data)
    }
    signUp(data) {
        const url = `${API_URL}/create_user/`;
        return axios.post(url, data).then(response => response.data)
    }
    getUser(data) {
        const url = `${API_URL}/get_user/`;
        return axios.post(url, data).then(response => response.data)
    }
    deleteUser(data) {
        const url = `${API_URL}/delete_user/`;
        return axios.post(url, data).then(response => response.data)
    }
    getMessages() {
        const url = `${API_URL}/api/access/messages/`;
        return axios.get(url).then(response => response.data);
    }
    getPosts() {
        const url = `${API_URL}/api/access/blog/`;
        return axios.get(url).then(response => response.data);
    }
    getPost(pk) {
        const url = `${API_URL}/api/access/blog/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    getImage(img) {
        const url = `${API_URL}/api/access/images/${img}`;
        return axios.get(url).then(response => response.data);
    }
    createTranscription(data) {
        const url = `${API_URL}/api/access/transcription/`;
        return axios.post(url, data).then(response => response.data);
    }
    createSubscriber(data) {
        const url = `${API_URL}/api/access/subscriber/`;
        return axios.post(url, data).then(response => response.data);
    }
    recoverPassword(data) {
        const url = `${API_URL}/recoverpassword/`;
        return axios.post(url, data).then(response => response.data);
    }
    validatePayment(data) {
        const  url = `${API_URL}/validate-payment/`
        return axios.post(url, data).then(response => response.data)
    }
    validatePasswordToken(data) {
        const  url = `${API_URL}/validate-password-token/`
        return axios.post(url, data).then(response => response.data)
    }
    changeEmail(data) {
        const  url = `${API_URL}/changeemail/`
        return axios.post(url, data).then(response => response.data)
    }
    changePassword(data) {
        const  url = `${API_URL}/changepassword/`
        return axios.post(url, data).then(response => response.data)
    }
    contact(data) {
        const  url = `${API_URL}/contact/`
        return axios.post(url, data).then(response => response.data)
    }
    deleteSubscription(data) {
        const  url = `${API_URL}/deletesubscription/`
        return axios.post(url, data).then(response => response.data)
    }
    getMeds(data){
        const  url = `${API_URL}/get-meds/`
        return axios.post(url, data).then(response => response.data)
    }
    createMed(data) {
        const  url = `${API_URL}/create-med/`
        return axios.post(url, data).then(response => response.data)
    }
    updateMed(data) {
        const  url = `${API_URL}/update-med/`
        return axios.post(url, data).then(response => response.data)
    }
    deleteMed(data) {
        const  url = `${API_URL}/delete-med/`
        return axios.post(url, data).then(response => response.data)
    }
}

export default ApiService;