'use strict'

const qclone = require('./qclone');
const qcloneStrict = require('./qcloneStrict');
const qcloneCircular = require('./qcloneCircular');
const qcloneStrictCircular = require('./qcloneStrictCircular');
const qcloneJson = require('./qcloneJson');

module.exports = {
  qclone,
  qcloneStrict,
  qcloneCircular,
  qcloneStrictCircular,
  qcloneJson,
  clone: qclone,
  strict: qcloneStrict,
  circular: qcloneCircular,
  strictCircular: qcloneStrictCircular,
  json: qcloneJson
};