# gltf-viewer

gltf-viewer is a HTMLElement for GLB/GLTF model data.

## Demo
[DEMO](https://code4fukui.github.io/gltf-viewer/)

## Features
- Displays 3D models in a web page using the WebGL standard
- Supports GLB and GLTF file formats
- Adjustable model position and rotation

## Usage

```html
<style>
gltf-viewer {
  display: inline-block;
  width: 100%;
  height: 50dvh;
  background-color: #000;
}
</style>

<script type="module" src="./gltf-viewer.js"></script>
<gltf-viewer src="./kaniinu.glb" y=-0.12 z=-.25></gltf-viewer>
```

## License
MIT License