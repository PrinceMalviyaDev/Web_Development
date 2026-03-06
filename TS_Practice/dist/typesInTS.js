"use strict";
// Type Inference in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let drink = "coffee"; // TypeScript infers the type of 'drink' as 'string'
let cups = Math.random() > 0.5 ? 2 : '2'; // TypeScript infers the type of 'cups' as 'string | number' (union type)
// Type Annotations in TypeScript
let tea = "green tea"; // Explicitly annotating the type of 'tea' as 'string'
let count = 5; // Explicitly annotating the type of 'count' as 'number'
let isHot = true; // Explicitly annotating the type of 'isHot' as 'boolean'
//# sourceMappingURL=typesInTS.js.map