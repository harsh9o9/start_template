/**
 * This class extends native Error class to provide more functionality over it
 */
class CustomError extends Error {
    /**
     * Custom Error Constructor
     * @param {any} [message] - Optional error payload
     * @param {number} [statusCode] - Optional error http status code
     */
    constructor(message = 'Something went wrong', statusCode) {
        super(message);
        this.name = 'CustomError';
        this.status = statusCode;
    }
}

export { CustomError };
