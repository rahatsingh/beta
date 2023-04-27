"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
var teacher_1 = require("./teacher");
var slog = new student_1.default();
console.log(slog.data);
var tlog = new teacher_1.default();
console.log(tlog.data);
