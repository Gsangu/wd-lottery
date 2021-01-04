
<div align="center">
  <h1>wd-lottery 抽奖插件</h1>
  <p>一个基于 vue 的抽奖插件</p>
</div>

<br />

## 在 vue2.x / vue3.x 中使用

### 方式 1：通过 import 引入

1. 首先安装插件

```shell
# npm 安装：
npm install vue-lottery

# yarn 安装：
yarn add vue-lottery
```

2. 然后找到 `main.js` 引入插件并 `use`

```js
// vue2.x
import { LuckDraw } from 'wd-lottery'

// TODO: vue3.x 
import { LuckDraw } from 'wd-lottery/vue3'
```

3. 最后在组件内使用 **`<LuckyWheel></LuckyWheel>`大转盘抽奖**

```vue
<template>
  <div>
    <!-- 大转盘抽奖 -->
    <LuckyWheel
      width="200px"
      height="200px"
    >
    <template v-slot:bg>
      <img src="转盘背景" class="bg" alt="">
    </template>
      <template v-slot:item="{ item }">
        <div class="info">
          <img class="prize-img" :src="item.image" />
          <div class="prize-name">{{item.name}}</div>
        </div>
      </template>
    </lucky-wheel>

    </LuckWheel>
  </div>
</template>
```

<br />

### 方式 2：通过 script 标签引入

> 为了避免 CDN 链接出现异常或波动，我非常建议你**缓存到本地或服务器**

- **vue2.x：**
  - **最新版本：** [https://cdn.jsdelivr.net/npm/wd-lottery/dist/wd-lottery.umd.min.js](https://cdn.jsdelivr.net/npm/wd-lottery/dist/wd-lottery.umd.min.js)

<span></span>

- **vue3.x：**
  - **最新版本：** [https://cdn.jsdelivr.net/npm/wd-lottery/vue3/wd-lottery.umd.min.js](https://cdn.jsdelivr.net/npm/wd-lottery/vue3/wd-lottery.umd.min.js)

