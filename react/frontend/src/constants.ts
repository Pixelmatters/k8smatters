let API_SERVER_VAL = ''

switch (import.meta.env.MODE) {
    case 'development':
        API_SERVER_VAL = 'http://localhost:8000'
        break;
    case 'production':
        API_SERVER_VAL = import.meta.env.VITE_API_SERVER
        break;
    default:
        API_SERVER_VAL = 'http://localhost:8000'
        break;
}

export const API_SERVER = API_SERVER_VAL