# React + TypeScript + Vite

## Requirements

-   Node.js: 18.17.0
-   VS Code (Recommended)

## Installation

`npm install` でプロジェクトの依存関係にあるライブラリ等を全てインストールする。

Type `npm install` into your console to install all necessary dependencies for this project.

## Startup Local Host

`npm run dev` でローカルホストを立ち上げる。

Type `npm run dev` into your console to start your localhost.

## Git Rules

### Prefixes

```
fix: バグ等の修正
feat: 新機能
refactor: 動作に影響のないコード変更
docs: ドキュメントのみの変更
style: スタイルのみの変更
perf: パフォーマンス向上関連の変更
chore: ライブラリ等の変更
test: テスト関連の変更
**!: 破壊的変更
```

### Branch Name

```
ex) {your_name}/feat_***
```

### Commit Message

```
ex) feat: xxxx
```

Reference: https://www.conventionalcommits.org/en/v1.0.0/

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
    // other rules...
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
    },
};
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# taskmessenger
