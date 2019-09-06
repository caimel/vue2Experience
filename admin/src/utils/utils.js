#!/usr/bin/env node --harmony

const uuidv1 = require('uuid/v1')

exports.generateUuId = function (key) {
  return key + uuidv1().toString().replace(/-/g, '')
}

exports.sleep = function (d) {
  const t = Date.now()
  while (Date.now() - t <= d) {}
}
