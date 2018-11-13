const testConfig = {
    FS_DATA_USERS_PATH: process.env.FS_DATA_USERS_PATH || "./data/user.json",
    DATABASE: "mysql://localhost:3306/learn_test",
};

let config = {
    PORT: process.env.PORT,
    SECRET_TOKEN_KEY: process.env.TOKEN_SECRET || "#tokenSecret#",
    FS_DATA_USERS_PATH: process.env.FS_DATA_USERS_PATH || "./data/admin.json",
    DATABASE: process.env.DATABASE || "mysql://localhost:3306/learn",
    DB_NAME: process.env.DB_NAME || "learn",
    DB_USER: process.env.DB_USER || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "12345",
    DB_HOST: process.env.DB_HOST || "127.0.0.1",
    DB_DIALECT: process.env.DB_DIALECT || "mysql"
};

if (process.env.NODE_ENV === "test") {
    config = { ...config, ...testConfig };
}

export { config };
