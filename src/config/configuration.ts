// export default {
//   // port: parseInt(process.env.PORT, 10) || 8080,
//   // useNewUrlParser: true,
//   mongoUri: process.env.DATABASE_URI,
//   secretKey: process.env.SECRET_KEY,
// };

export default () => ({
  mongoUri: process.env.DATABASE_URI,
  secretKey: process.env.SECRET_KEY,
  port: parseInt(process.env.PORT, 10) || 8080,
});
