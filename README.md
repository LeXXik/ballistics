
# Ballistics

![Ballistics demo](https://forum-files-playcanvas-com.s3.dualstack.eu-west-1.amazonaws.com/original/2X/9/94cfe08a35dfc5d6c09ef81ce4696bcddf3bff34.jpeg)
<p align="center">
  <a href="https://playcanvas.com" target="_blank" rel="noopener"><img height="40" src="https://image4.owler.com/logo/playcanvas_owler_20180323_222343_original.png" alt="Playcanvas logo"></a> <img src="https://i.pinimg.com/originals/97/7b/cd/977bcdeaa028f7350095fa3d5d032584.png" height="40" />
  <a href="https://assemblyscript.org" target="_blank" rel="noopener"><img width="40" src="https://avatars1.githubusercontent.com/u/28916798?s=200&v=4" alt="AssemblyScript logo"></a>
</p>

Ever wondered, what impulse should I apply to the projectile so that it hits the target? This library will give you an answer. Ballistics is a WASM library that helps to calculate a proper velocity vector for projectiles.

[Playcanvas Project](https://playcanvas.com/project/709275/overview/ballistics)

[Live Demo](https://playcanv.as/p/QOb0M5Ud/)

<a href='https://ko-fi.com/P5P61Y9F7' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Grab Me a Coffee at ko-fi.com' /></a>

The library is based on the wonderful magic of trajectory calculations by Forrest Smith. Check out his [original post](https://www.forrestthewoods.com/blog/solving_ballistic_trajectories/) with the explanations.

Library features a low-level WASM binary and a high-level platform implementation.

  - Written in AssemblyScript and compiled to WASM for high performance
  - Features Playcanvas implementation, so it works with it out of the box
  - Magically produces a correct impulse vector against both static and moving targets

### Playcanvas Online Installation

1. Download and place anywhere in your project the contents of `dist/pc-ballistics` folder.
2. Wait for `ballistics:ready` event, or check if `Ballistics` is in the global scope.
See this [sample project](https://playcanvas.com/project/709275/overview/ballistics) for a simple setup.

### API
You can find following API specs in Wiki:
- Low level WASM binary API. You want this, if you are making your own implementation.
- High level Playcanvas implementation API. You want this, if you use this library with Playcanvas.

### Development

##### Building
For production release:
```sh
$ gulp build
```
##### Testing
The tests are simple. Cubic, quartic and quadratic equations are tested against [WolframAlpha](https://www.wolframalpha.com/) results. Links to the test inputs are inside the comments of tests.
```sh
$ npm run test
```

License
----

MIT