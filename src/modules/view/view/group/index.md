# group表单组组件
用于分隔不同cell表单组

## 使用方式
```html
<example>
  <t-group title="基础信息">
    <t-cell-input title="姓名"></t-cell-input>
    <t-cell-input title="身份证"></t-cell-input>
  </t-group>
  <t-group title="其他信息">
    <t-cell-input title="住址"></t-cell-input>
    <t-cell-input title="性别"></t-cell-input>
  </t-group>
</example>
<!-- group-demo-1.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 枚举值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | title     | 标题   | String  |  -   |   -   |

