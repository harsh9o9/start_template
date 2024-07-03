import mongoose from 'mongoose';
import { CustomError } from '../Utils/CustomError.js';



/**
 * @description This middleware is responsible to catch the errors from any request handler wrapped inside the {@link asyncHandler}
 */

const errorHandler = (err, req, res, next) => {
    let error = err;

    /**
     * if error is not instance of {@link CustomError} then create a instance to maitain consistency
     */
    if ((!error) instanceof CustomError) {
        console.log('!error instanceof CustomError');
        // if error related to mongoose then 400 (Bad Request) else 500 (Server Error)
        const statusCode = error instanceof mongoose.Error ? 400 : 500;

        const message = error?.message || 'something went wrong';
        error = new CustomError(message, statusCode);
    }

    // creating response to send to user in case of error
    const response = {
        message: error?.cause || error?.message
    };

    return res.status(error.status || 500).json(response);
};

export default errorHandler;
