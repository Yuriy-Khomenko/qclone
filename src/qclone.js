'use strict'

const __qhop__ = Object.prototype.hasOwnProperty;
const {getPrototypeOf:__gpo__,create:__cr__} = Object;
const __Generator__ = __gpo__(function*(){});

function qclone(o){
  if (typeof o !== 'object' || o === null)return o;
  switch(o.constructor){
    case Object:
      let i,l,c = {};
      for(i in o){
        if(__qhop__.call(o, i)){
          l = o[i];
          if(typeof l !== 'object' || l === null){
            c[i] = l;
          }else{
            c[i] = qclone(l);
          }
        }
      }
      return c;
    case Array:
      let p,j = o.length, a = new Array(j);
      for(let i = 0; i < j; i++){
        if(i in o){
          p = o[i];
          if(typeof p !== 'object' || p === null){
            a[i] = p;
          }else{
            a[i] = qclone(p);
          }
        }
      }
      return a;
    case undefined:
      let q,y,d = Object.create(null);
      for(q in o){
        y = o[q];
        if(typeof y !== 'object' || y === null){
          d[q] = y;
        }else{
          d[q] = qclone(y);
        }
      }
      return d;
    case Map:
      let b,m,x = new Map();
      for(b of o){
        m = b[1];
        if(typeof m !== 'object' || m === null){
          x.set(b[0], m);
        }else{
          x.set(b[0], qclone(m));
        }
      }
      return x;
    case Set:
      let v,n = new Set();
      for(v of o){
        if(typeof v !== 'object' || v === null){
          n.add(v);
        }else{
          n.add(qclone(v));
        }
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
      return new DataView(o.buffer, o.byteLength, o.byteOffset)
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
      let s,u,f = __cr__(__gpo__(o));
      for(s in o){
        if(__qhop__.call(o, s)){
          u = o[s];
          if(typeof u !== 'object' || u === null){
            f[s] = u;
          }else{
            f[s] = qclone(u);
          }
        }
      }
      return f;
  }
}
module.exports = qclone;