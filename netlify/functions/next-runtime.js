// netlify/functions/next-runtime.js
const { builder } = require('@netlify/functions');
const { default: handler } = require('./.netlify/edge-functions/handler');

exports.handler = builder(handler);
