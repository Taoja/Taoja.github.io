# button按钮组件

## 基础用法
按钮样式分为大中小三种，默认尺寸为中型按钮
+ 大按钮宽度为100%
+ 中按钮离左右边距为 30px/750
+ 小按钮为以内容为准自适应大小
```html
<example>
  <t-button size="big">大按钮</t-button>
  <p></p>
  <t-button>中按钮</t-button>
  <p></p>
  <t-button size="small">小按钮</t-button>
</example>
<!-- button-demo-1.vue -->
```

### 禁用按钮
给按钮添加disabled属性即可实现按钮禁用效果

按钮禁用后无法传递点击事件
```html
<example>
  <t-button size="big" disabled>大按钮</t-button>
  <p></p>
  <t-button disabled>中按钮</t-button>
  <p></p>
  <t-button size="small" disabled>小按钮</t-button>
</example>
<!-- button-demo-2.vue -->
```

### 自定义皮肤
可以通过设置css样式实现按钮组件皮肤化
```html
<example>
  <t-button size="big" scheme="red">大按钮</t-button>
  <p></p>
  <t-button scheme="red">中按钮</t-button>
  <p></p>
  <t-button size="small" scheme="red">小按钮</t-button>
</example>
<style>
  .vuti-button[scheme=red]{
    --main-color: red;
    --main-color-anti: white;
  }
</style>
<!-- button-demo-3.vue -->
```

### 反按钮
可以通过设置plain属性来实现反色按钮
```html
<example>
  <t-button size="big" plain>大按钮</t-button>
  <p></p>
  <t-button plain>中按钮</t-button>
  <p></p>
  <t-button size="small" plain>小按钮</t-button>
  <t-button size="small" scheme="red" plain>小按钮</t-button>
</example>
<!-- button-demo-4.vue -->
```
## 参数
  | 参数      | 说明    | 类型      | 枚举值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | size     | 类型   | String  |   small / normal / big   |   normal   |
  | disabled     | 禁用状态   | Boolean    |   -  |     false    |
  | plain     | 反色   | Boolean    | - |  false  |
  | scheme     | 自定义皮肤   | string    | — |  —   |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | submit     | 点击确认按钮回调   |
  | hide     | 组件关闭回调   |

