import nextVitals from "eslint-config-next/core-web-vitals";

// next/core-web-vitals 已经注册了 jsx-a11y 并把 alt-text 设为 warning。
// 这里复用它那一份 plugin 实例(flat config 不允许用另一个实例重复注册同名插件)，
// 只把 alt-text 升级为 error —— 装饰性背景图写 alt="" 仍然合法且必要，
// 这条挡的是"新加图片时整个忘了写 alt"。
const nextBase = nextVitals.find((entry) => entry.plugins?.["jsx-a11y"]);

const config = [
  ...nextVitals,
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: { "jsx-a11y": nextBase.plugins["jsx-a11y"] },
    rules: {
      "jsx-a11y/alt-text": ["error", { elements: ["img"], img: ["Image"] }]
    }
  }
];

export default config;
