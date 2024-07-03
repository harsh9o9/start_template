
export const DB_NAME = 'ClusterChatApp';

export const corsOptions = {
  origin: function (origin, callback) {
      const allowedOrigins = [
          'http://localhost:3000',
          'https://chat-buddy-harsh9o9.vercel.app',
          'https://www.chatbuddy.online'
      ];
      if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  credentials: true,
  exposedHeaders: ['WWW-Authenticate']
};