"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prod_1 = __importDefault(require("./prod"));
const dev_1 = __importDefault(require("./dev"));
const config = process.env.NODE_ENV === 'production' ? prod_1.default : dev_1.default;
exports.default = config;
