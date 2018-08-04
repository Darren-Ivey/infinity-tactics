export const catchError = (response) => {

    // Error states
    const UNAUTHORIZED = 'UNAUTHORIZED';
    const FORBIDDEN = 'FORBIDDEN';
    const NOT_FOUND = 'NOT_FOUND';
    const UNKNOWN_API_ERROR = 'UNKNOWN_API_ERROR';

    if (!response.ok) {
        let error;
        switch (response.status) {
            case 401:
                throw error = { code: UNAUTHORIZED };
            case 403:
                throw error = { code: FORBIDDEN };
            case 404:
                throw error = { code: NOT_FOUND };
            default:
                throw error = { code: UNKNOWN_API_ERROR };
        }
    }
    return response;
};