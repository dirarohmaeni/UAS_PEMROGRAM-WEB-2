const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        Authorization: 'Bearer ELIBRARY_TOKEN_123'
    }
});