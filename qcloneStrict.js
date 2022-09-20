'use strict'

function qcloneStrict(o){
  const {
          getOwnPropertyNames: __gopn__,
          defineProperty: __dp__,
          getOwnPropertyDescriptor: __gopd__,
          getOwnPropertySymbols: __gops__,
          getPrototypeOf: __gpo__,
          create: __cr__
        } = Object;
  const __Generator__ = __gpo__(function*(){});
  const __qhop__ = Object.prototype.hasOwnProperty;

  function qclone(o){
    if (typeof o !== 'object' || o === null)return o;
    switch(o.constructor){
      case Object:
      case undefined:
        let c = (o.constructor) ? __cr__(__gpo__(o)) : __cr__(null);
        let keys = [...__gopn__(o), ...__gops__(o)], length = keys.length;
        for(let i = 0; i < length; i++){
          let nameKey = keys[i];
          if(nameKey !== 'callee'){
            let descVal = __gopd__(o, nameKey), value = o[nameKey];
            if(typeof value === 'object'){
              descVal.value = qclone(value);
            }
            __dp__(c, nameKey, descVal);
          }
        }
        return c;
      case Array:
        let p,j = o.length, a = new Array(j);
        for(let i = 0; i < j; i++){
          if(i in o){
            p = o[i];
            a[i] = (typeof p !== 'object' || p === null) ? p : qclone(p);
          }
        }
        return a;
      case Map:
        let b,m,x = new Map();
        for(b of o){
          m = b[1];
          (typeof m !== 'object' || m === null) ? x.set(b[0], m) : x.set(b[0], qclone(m));
        }
        return x;
      case Set:
        let v,n = new Set();
        for(v of o){
          (typeof v !== 'object' || v === null) ? n.add(v) : n.add(qclone(v));
        }
        return n;
      case Promise:
      case Symbol:
      case WeakMap:
      case WeakSet:
      case __Generator__:
        return o;
      case String:
        return String(o);
      case Number:
        return Number(o);
      case Date:
        return new Date(o);
      case Boolean:
        return Boolean(o);
      case RegExp:
        let r = new RegExp(o.source, o.flags &&
           (o.global ? 'g':'') +
           (o.ignoreCase ? 'i':'') +
           (o.multiline ? 'm':'') +
           (o.unicode ? 'u':'') +
           (o.sticky ? 'y':''));
        r.lastIndex = o.lastIndex;
        return r;
      // case BigInt:
      //   return Object(o.valueOf());
      case DataView:
        return new DataView(new Uint8Array(new Uint8Array(o.buffer)).buffer, o.byteOffset, o.byteLength);
      case ArrayBuffer:
        //case SharedArrayBuffer:
        return new Uint8Array(new Uint8Array(o)).buffer;
      case Error:
      case RangeError:
      case EvalError:
      case ReferenceError:
      case SyntaxError:
      case TypeError:
      case URIError:
        //case InternalError:
        //case AggregateError:
        return o;
      default:
        if(o.BYTES_PER_ELEMENT)return new o.constructor(o);
        let f = __cr__(__gpo__(o));
        let _keys = [...__gopn__(o), ...__gops__(o)], _length = _keys.length;
        for(let i = 0; i < _length; i++){
          let nameKey = _keys[i];
          if(nameKey !== 'callee'){
            let descVal = __gopd__(o, nameKey), value = o[nameKey];
            if(typeof value === 'object'){
              descVal.value = qclone(value);
            }
            __dp__(f, nameKey, descVal);
          }
        }
        return f;
    }
  }
  return qclone(o);
}

module.exports = qcloneStrict;