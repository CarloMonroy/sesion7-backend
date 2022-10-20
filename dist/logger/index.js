"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
exports.logger = (0, winston_1.createLogger)({
    level: "debug",
    format: winston_1.format.combine(winston_1.format.label({ label: "Graphql API" }), winston_1.format.timestamp({ format: "YYYY-MM-DDTHH:mm:ss" }), winston_1.format.printf(({ label, timestamp, level, message }) => `[${label}] ${timestamp} | ${level} | ${message}`)),
    transports: [
        new DailyRotateFile({
            level: "error",
            filename: "./logs/error-%DATE%.log",
            datePattern: "YYYY-MM-DD",
            zippedArchive: true,
            maxSize: "30m",
            maxFiles: "15d",
        }),
        new DailyRotateFile({
            filename: "./logs/combined-%DATE%.log",
            datePattern: "YYYY-MM-DD",
            zippedArchive: true,
            maxSize: "30m",
            maxFiles: "15d",
        }),
    ],
});
if (process.env.NODE_ENV !== "production") {
    exports.logger.add(new winston_1.transports.Console({
        format: winston_1.format.simple(),
    }));
}
