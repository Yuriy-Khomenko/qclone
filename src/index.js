'use strict'

const qclone = require('./qclone');
const qcloneStrict = require('./qcloneStrict');
const qcloneCircular = require('./qcloneCircular');
const qcloneStrictCircular = require('./qcloneStrictCircular');

module.exports = {
  qclone,
  qcloneStrict,
  qcloneCircular,
  qcloneStrictCircular,
  clone: qclone,
  strict: qcloneStrict,
  circular: qcloneCircular,
  strictCircular: qcloneStrictCircular
};