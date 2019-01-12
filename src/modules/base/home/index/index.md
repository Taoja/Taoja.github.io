# List 列表
常用于列表展示。

## 组件用法

muList，可与muGroup组件一起使用，完成list布局，也可单独使用。

:::demo 可使用type属性的 small、single、dubble 值，来设置list的类型：小标题列表、单行列表、双行列表；使用title、describle、sub-title属性，对标题和标题描述内容进行设置。

```html
<div class="m-code">
  <mu-group title="单行列表">
    <mu-list type="small" title="列表小标题"></mu-list>
    <mu-list type="single" title="单行列表" describle="标题描述"></mu-list>
  </mu-group>
  <mu-group title="双行列表">
    <mu-list type="dubble" title="双行标题" sub-title="标题描述"></mu-list>
  </mu-group>
</div>

```
:::

## 链接状态

为list设置链接状态。

:::demo 可设置is-link属性，设置list是否使用链接状态，在handle-list的回调函数中设置需要跳转的路径。

```html
<div class="m-code">
  <mu-group>
    <mu-list type="single" title="单行列表" is-link @click="sigHandleList1"></mu-list>
    <mu-list type="single" title="单行列表" describle="标题描述" is-link @click="sigHandleList2"></mu-list>
    <mu-list type="dubble" title="双行标题" sub-title="标题描述" is-link @click="dubHandleList"></mu-list>
  </mu-group>
</div>
<script>
  export default {
    methods: {
      sigHandleList1 () {
        console.log('单行列表点击1')
      },
      sigHandleList2 () {
        console.log('单行列表点击2')
      },
      dubHandleList () {
        console.log('双行列表点击')
      }
    }
  }
</script>
```
:::

## 选择状态

设置可选择的list。

:::demo 可设置is-select属性，设置list是否使用选择状态，selectValue属性设置list的选择状态，在handle-select的回调函数中获取到list的选中状态值。
```html
<div class="m-code">
    <mu-list type="single" title="单行列表" :select-value="value1" is-select @select="handleSelect"></mu-list>
</div>
<script>
  export default {
    methods: {
      data: function () {
        return {
          value1: true
        }
      },
      handleSelect (value) {
        console.log('select', value)
      }
    }
  }
</script>
```
:::

## 开关状态

设置带有开关按钮的list。

:::demo 可设置is-switch属性，设置list是否使用开关状态，switchValue属性设置list的开关状态，在switch-select的回调函数中获取到list的开关状态值。

```html
<div class="m-code">
  <mu-list type="single" title="单行列表" :switch-value="value2" is-switch @change="switchSelect"></mu-list>
</div>
<script>
  export default {
    methods: {
      data: function () {
        return {
          value2: true
        }
      },
      switchSelect (value) {
        console.log('change', value)
      }
    }
  }
</script>
```
:::
  ## 单独引用
  单独引入 `MuGroup, MuList`：
  ```javascript
  import { MuList, MuGroup } from 'max-ui'
  Vue.component(MuList.name, MuList)
  Vue.component(MuGroup.name, MuGroup)
  ```

  ## Options
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | type     | 类型   | string  |   small / single / dubble   |   —   |
  | title     | 标题   | string    |   —  |     —    |
  | subTitle     | 双行列表的副标题   | string    | — |  —  |
  | describle     | 标题描述   | string    | — |  —   |
  | isLink     | 是否使用链接状态   | boolean    | — | false   |
  | isSelect     | 是否使用选择状态   | boolean    | — | false   |
  | selectValue     | 选择状态   | boolean    | — | false   |
  | isSwitch  | 是否使用开关状态    | boolean   | —   | false   |
  | switchValue  | 开关按钮的状态 | boolean   |  —  |  true  |

  ## 事件
  | 参数      | 说明    |
  |---------- |-------- |
  | click     | 链接状态的回调函数   |
  | select     | 选择状态的回调函数   |
  | change     | 开关状态的回调函数   |

