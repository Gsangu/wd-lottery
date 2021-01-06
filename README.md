<center>
<h1>wd-lottery 抽奖插件</h1>
<p>一个基于 vue 的抽奖插件</p>

  [![npm](https://img.shields.io/npm/v/wd-lottery.svg)](https://www.npmjs.com/package/wd-lottery)
  [![npm](https://img.shields.io/npm/dt/wd-lottery.svg)](https://www.npmjs.com/package/wd-lottery)
  [![install size](https://packagephobia.now.sh/badge?p=wd-lottery)](https://packagephobia.now.sh/result?p=wd-lottery)
  [![GitHub license](https://img.shields.io/github/license/gsangu/wd-lottery.svg)](https://github.com/gsangu/wd-lottery/blob/master/LICENSE)
</center>

## 在 vue2.x / vue3.x 中使用

### 方式 1：通过 import 引入

1. 首先安装插件

```shell
# npm 安装：
npm install wd-lottery

# yarn 安装：
yarn add wd-lottery
```

2. 然后找到 `main.js` 引入插件并 `use`

```js
// vue2.x
import { LuckyWheel } from 'wd-lottery'

// TODO: vue3.x 
import { LuckyWheel } from 'wd-lottery/vue3'
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
    </LuckWheel>
  </div>
</template>
```

<br />

### 方式 2：通过 script 标签引入

> 为了避免 CDN 链接出现异常或波动，我非常建议你**缓存到本地或服务器**

- **vue2.x：**
  - **最新版本：** [https://cdn.jsdelivr.net/npm/wd-lottery/dist/wd-lottery.min.js](https://cdn.jsdelivr.net/npm/wd-lottery/dist/wd-lottery.min.js)


## Attributes

| 参数 | 必输 | 默认 | 类型 | 说明 | 备注 |
|-----|------|-----|-----|-----|------|
| prizeList | 是 | | array | 奖品列表 | |
| width | 是 | | string | 转盘宽度| |
| height | 否 | =width | string | 转盘高度| |
| turnsNumber | 否 | 5 | int | 转动的圈数| | |
| turnsTime | 否 | 5 | int | 转动持续时间（秒）| |
| showBg | 否 | true | boolean | 是否启用内置转盘背景| |
| prizeBgColors | 否 | ['#F47F45', '#FFA468'] | array | 内置转盘背景颜色| 每一块扇形的背景色，循环填充 |
| borderColor | 否 | #ff9800 | string | 内置转盘背景每一块扇形的外边框颜色| |

## Methods
| 方法名 | 说明 | 参数 |
|-----|------|-----|
| rotate | 转盘开始转动方法 | Function(index) |

## Events
| 方法名 | 说明 | 回调参数 |
|-----|------|-----|
| over | 转盘停止转动 | 当前奖品信息 |

## Slot
| name | 说明 |
|-----|------|
| bg | 转盘背景 |
| item | 转盘 Item 的内容 |