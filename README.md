# gltf-viewer

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple Web Component (`<gltf-viewer>`) for displaying 3D models (GLB/GLTF) on a web page.

## Demo

[View Demo](https://code4fukui.github.io/gltf-viewer/)

## Features

-   **Easy to Use:** Renders a 3D model with a single HTML tag.
-   **Web Component:** No framework needed, works in any modern browser.
-   **Supported Formats:** Displays both GLB and GLTF files.
-   **Animated:** The model automatically rotates on its vertical axis.
-   **Customizable:** Adjust the model's initial position using HTML attributes.
-   **Self-Contained:** Automatically loads its `three.js` dependency from a CDN.

## Usage

1.  Place the `<gltf-viewer>` element in your HTML file.
2.  Import the `gltf-viewer.js` script as a module.

The component will automatically fill its container. You can style it with CSS like any other HTML element.

```html
<style>
  /* Style the viewer container */
  gltf-viewer {
    display: inline-block;
    width: 100%;
    height: 50dvh;
    background-color: #000;
  }
</style>

<!-- Import the component's script -->
<script type="module" src="./gltf-viewer.js"></script>

<!-- Use the component -->
<gltf-viewer src="./kaniinu.glb" y="-0.12" z="-0.25"></gltf-viewer>
```

## Attributes

You can configure the component using the following HTML attributes:

-   `src` (required): The path or URL to your `.glb` or `.gltf` model file.
-   `x` (optional): The initial position of the model on the X-axis. Defaults to `0`.
-   `y` (optional): The initial position of the model on the Y-axis. Defaults to `0`.
-   `z` (optional): The initial position of the model on the Z-axis. Defaults to `0`.

## License

MIT License — see [LICENSE](LICENSE).