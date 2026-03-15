# gltf-viewer

gltf-viewerは、GLB/GLTF形式のモデルデータを表示するHTMLElementです。

## デモ
[デモページ](https://code4fukui.github.io/gltf-viewer/)

## 機能
- GLB/GLTF形式のモデルデータを表示できる
- モデルの位置を調整できる

## 使い方
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

## ライセンス
MIT License