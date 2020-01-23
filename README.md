## qclone
the fastest function for deep clone js objects compatible with es6 

### Install

npm install --save qclone

### Usage

const { qclone } = require('qclone');
	
or connect separate modules:

const qclone = require('qclone/src/qcloneStrictCircular');

```javascript
const newCloneObj = qclone( { foo: 1 } );
```

### Features

- support for all new classes ES6;
- very quickly clone(qclone);
- correctly clone(qcloneStrict / qcloneStrictCircular);
- support circular objects(qcloneCircular / qcloneStrictCircular);

For more than 90% of cases, the algorithm is suitable - qclone.
If you lack it, for example, for cyclic objects or strict copying, you can use the following algorithms:
- qcloneStrict - for strict cloning;
- qcloneCircular - for cyclic objects (without strict cloning);
- qcloneStrictCircular - for strict cloning of cyclic objects;

### Benchmarks

For more balanced testing of performance, tests of other projects were used

```
Nodejs - v13.3.0
Date - 22.01.2020
```

[rfdc](https://github.com/davidmarkclements/rfdc) project test result

```
benchDeepCopy*100: 7776.478ms
benchLodashCloneDeep*100: 20040.199ms
benchFastCopy*100: 10990.298ms
benchRfdc*100: 4435.846ms
benchQclone*100: 3481.686ms
benchQcloneCircular*100: 5113.696ms
benchQcloneStrict*100: 47226.868ms
benchQcloneStrictCircular*100: 48079.723ms
benchRfdcProto*100: 4354.412ms
benchRfdcCircles*100: 5461.455ms
benchRfdcCirclesProto*100: 5541.977ms
```

[fast-copy](https://github.com/planttheidea/fast-copy) project test result

| Name                 | Ops / sec |
| -------------------- | --------- |
| qclone               | 2,069.919 |
| qcloneCircular       |  1,092.98 |
| fast-copy            |  674.629  |
| lodash.cloneDeep     |  323.661  |
| clone                |  323.007  |
| ramda                |  206.035  |
| deepclone            |  175.292  |
| qcloneStrictCircular |  156.258  |
| fast-copy (strict)   |  151.173  |
| fast-clone           |  125.238  |
| qcloneStrict         |  121.703  |


### License

MIT Yuriy Khomenko