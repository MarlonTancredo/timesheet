declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DB_PORT: string;
    }
  }
}
export {};
