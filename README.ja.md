# gltf-viewer

Webページ上で3Dモデル（GLB/GLTF）を表示するためのシンプルなWebコンポーネント（`<gltf-viewer>`）です。

## デモ

[デモを見る](https://code4fukui.github.io/gltf-viewer/)

## 機能

- **使いやすい:** HTMLタグを1つ書くだけで3Dモデルをレンダリングします。
- **Webコンポーネント:** フレームワーク不要で、モダンブラウザで動作します。
- **サポートフォーマット:** GLBファイルとGLTFファイルの両方を表示できます。
- **アニメーション:** モデルは自動的に垂直軸を中心に回転します。
- **カスタマイズ可能:** HTML属性を使用してモデルの初期位置を調整できます。
- **自己完結型:** 依存する `three.js` をCDNから自動的に読み込みます。

## 使い方

1. HTMLファイルに `<gltf-viewer>` 要素を配置します。
2. `gltf-viewer.js` スクリプトをモジュールとして読み込みます。

コンポーネントは自動的にコンテナのサイズに合わせて表示されます。他のHTML要素と同様にCSSでスタイルを適用できます。

```html
<style>
  /* ビューアコンテナのスタイル */
  gltf-viewer {
    display: inline-block;
    width: 100%;
    height: 50dvh;
    background-color: #000;
  }
</style>

<!-- コンポーネントのスクリプトを読み込む -->
<script type="module" src="./gltf-viewer.js"></script>

<!-- コンポーネントを使用する -->
<gltf-viewer src="./kaniinu.glb" y="-0.12" z="-0.25"></gltf-viewer>
```

## 属性

以下のHTML属性を使用してコンポーネントを設定できます:

- `src`（必須）: `.glb` または `.gltf` モデルファイルのパスまたはURL。
- `x`（任意）: モデルのX軸上の初期位置。デフォルトは `0`。
- `y`（任意）: モデルのY軸上の初期位置。デフォルトは `0`。
- `z`（任意）: モデルのZ軸上の初期位置。デフォルトは `0`。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
