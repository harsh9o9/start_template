import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { corsOptions } from './constants/global-constants.js';
import errorHandler from './middlewares/error.middlewares.js';
import userRouter from './routes/user.routes.js';

/* 
  1. INITIALIZE EXPRESS APPLICATION 🏁
*/
const app = express();
const httpServer = createServer(app);

/* 
  2. APPLICATION MIDDLEWARES AND CUSTOMIZATIONS 🪛
*/

// enable CORS for all routes in the Express application
app.use(cors(corsOptions));
// any preflight OPTIONS requests are also handled by the CORS
app.options('*', cors(corsOptions));

// will parse the quesr string/url encoded data and attach it to req.body field
app.use(express.urlencoded({ extended: true }));

// will parse cookie and attach to req objects as object with key-value pairs i.e. req.cookies
app.use(cookieParser());

// will parse json data and attach it to req.body field
app.use(express.json());

/* 
  3. APPLICATION ROUTES 🛣️
*/
app.use('/api/users', userRouter);

/* 
4. APPLICATION ERROR HANDLING 🚔
*/
// Handle unregistered route for all HTTP Methods
app.all('*', function (req, res, next) {
    // Forward to next closest middleware
    next();
});
app.use(errorHandler);

const startServer = () => {
    httpServer.listen(process.env.PORT || 8080, () => {
        console.log(
            '⚙️  Server is running on port: ' + process.env.PORT || 8080
        );
    });
};

// connect to db if done then start server else don't
// connectDB()
//     .then(() => {
startServer();
// })
// .catch((e) => {
//     console.log('mongo db connect error: ', e);
// });

/**
 * file name convention
 * - functional-name.technological-type.js
 * - user.routes.js, user.service.js, user.model.js, user.controller.js
 */
