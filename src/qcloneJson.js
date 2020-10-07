'use strict'

function qcloneJson(o) {
    const s = Object.keys(o);
    const l = s.length;
    const c = o.constructor();
    for (let i = 0; i < l; i++) {
      const k = s[i];
      const v = o[k];
      if (typeof v === "object" && v !== null) {
        c[k] = qcloneJson(v);
      } else {
        c[k] = v;
      }
    }
    return c;
  }
  module.exports = qcloneJson;