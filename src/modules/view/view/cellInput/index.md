# cellInput表单输入框组件
基于cell封装的input组件，cell组件部分属性适用于此组件

## 使用方式
+ title属性用于显示表单组件标题
+ placeholder属性用于显示输入框提示语
+ type属性与input标签一致
+ maxlength属性与input标签一致
+ readonly属性与input标签一致
```html
<example>
  <t-cell-input title="表单输入框" placeholder="请输入您的姓名"></t-cell-input>
  <t-cell-input title="数字输入框" type="number"></t-cell-input>
  <t-cell-input title="密码输入框" type="password" placeholder="请输入您的密码"></t-cell-input>
  <t-cell-input title="请输入验证码" type="number" maxlength="6" placeholder="请输入您的验证码"></t-cell-input>
  <t-cell-input title="readonly" readonly :value="123"></t-cell-input>
</example>
<!-- cell-input-demo-1.vue -->
```

## 标题扩展
+ icon属性可以设置标题栏图标，值为iconfont对应class名
+ tips可以设置第二行文案
```html
<example>
  <t-cell-input :icon="{name: 'icon-QRcode',color: 'red'}" title="扫码点餐"></t-cell-input>
  <t-cell-input tips="请输入您的订单号" title="扫码点餐"></t-cell-input>
</example>
<!-- cell-input-demo-2.vue -->
```

## 插槽
+ right为右侧图标区域
+ left为title区域
```html
<example>
  <t-cell-input placeholder="请输入需要提交的信息"><t-button slot="left" size="small">提交</t-button></t-cell-input>
  <t-cell-input title="请输入验证码">
    <div slot="right" style="cursor:pointer;font-size: var(--size-font-t3); color: var(--color-t1);">
      点击获取验证码
    </div>
  </t-cell-input>
</example>
<!-- cell-input-demo-3.vue -->
```

## 参数
  | 参数      | 说明    | 类型      | 枚举值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | title     | 标题   | String  |   -   |   -   |
  | tips     | 提示信息   | String    |   -  |     -    |
  | icon     | 图标   | Object    |   {name, color}  |     -    |
  | readonly     | 禁用   | Boolean    |   -  |     -    |
  | placeholder     | 提示语   | String    |   -  |     -    |
  | maxlength     | 长度   | Number    |   -  |     -    |
  | type     | 类型   | String    |   -  |     string    |

## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | click     | 点击输入框回调   |
  | blur     | 失去焦点回调   |
  | focus     | 获取焦点   |
  | keyup     | 键盘按下回调   |
  | keydown     | 键盘弹起回调   |
  | change     | 值改变时回调   |
## 插槽
  | 插槽名      | 说明    |
  |---------- |-------- |
  | left     | 左侧标题区域插槽  |
  | right     | 右侧图标区域插槽  |
