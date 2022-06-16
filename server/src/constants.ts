export const PORT = process.env.PORT ?? '5000';
export const HOST = process.env.HOST ?? 'localhost';
export const DEBUG = process.env.DEBUG ? process.env.DEBUG.trim().toLowerCase() === 'true' : false;

export const CORS = DEBUG ? true : process.env.CORS ? { origin: [process.env.CORS] } : false;
