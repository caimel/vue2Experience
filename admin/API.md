# API DOC


## x-panel
布局组件，充满父组件并按行和列进行分割

| 参数  | 说明 | 类型  | 是否必须 | 默认值 |
| :-----: | :-----: | :-----: | :----: | :----: |
| items | 定义组件的分割方式 | Array | --       | []     |

items：
```json
[
  {
    gutter: 10,
    flex: 1,
    equally: true,
    cols: [
      { 
        span: 6,
        slot: 'left' }
    ]
  }
]
```
* gutter: 列间隔
* flex: 行占比
* equally : 是否等分
* span: 当equally=false 时，列占比将span 取值。列总份数为24
* slot：嵌入的slot name，嵌套时，子组件需要指定slot

## x-tabs
布局组件，标签页

| 参数  | 说明 | 类型  | 是否必须 | 默认值 |
| :-----: | :-----: | :-----: | :----: | :----: |
| type | 风格类型 | string | card/border-card | -- |
| closable  |  标签是否可关闭 | boolean  |	—	| false|
| addable |  标签是否可增加 | boolean	| — |	false|
| editable | 标签是否同时可增加和关闭 | boolean	| —	| false|
| value | 绑定值，选中选项卡的 name	| string	|—	|第一个选项卡的 name|
| tab-position	| 选项卡所在位置	| string	| top/right/bottom/left |	top|
| stretch	| 标签的宽度是否自撑开 |	boolean	| -	| false |
| before-leave |	切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。|	Function(activeName, oldActiveName)  | -- | -- |
| items | 定义组件tab | Array | -- | []|

items 实际上是定义tab-pane 的属性的包装

| 参数  | 说明 | 类型  | 是否必须 | 默认值 |
| :-----: | :-----: | :-----: | :----: | :----: |
| label	 | 选项卡标题	| string	| —	| —|
| disabled | 是否禁用	| boolean	 | —	| false|
| name | 与选项卡 activeName 对应的标识符，表示选项卡别名 | string | —	| 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1' |
| closable	| 标签是否可关闭	| boolean	 | —	| false |
| lazy	| 标签是否延迟渲染	| boolean |	—	| false |

 items在tab-pane的基础上增加了slot，定义label 的slot name 和content的slot name，如下
```json
[
 { slot: { label: 'label1', content: 'content1'}},
 { slot: { label: 'label2', content: 'content2'}}
]
```

| 事件名 | 说明 | 参数 |
| :----: |:----:|:----:|
|tab-click| tab 被选中时触发 | 被选中的标签 tab 实例 |
|tab-remove| 点击 tab 移除按钮后触发 | 被删除的标签的 name |
|tab-add| 点击 tabs 的新增按钮后触发 | -- |
|edit| 点击 tabs 的新增按钮或 tab 被关闭后触发 |(targetName, action) |


## x-collapse
布局组件，折叠面板组

| 参数  | 说明 | 类型  | 是否必须 | 默认值 |
| :-----: | :-----: | :-----: | :----: | :----: |
| accordion | 是否手风琴模式 | boolean | -- | false|
| value | 当前激活的面板(如果是手风琴模式，绑定值类型需要为`string`，否则为`array`) | string/array | -- | --|
| items | 定义组件collapse | Array | -- | [] |

items是collapse item属性的包装

| 参数  | 说明 | 类型  | 是否必须 | 默认值 |
| :-----: | :-----: | :-----: | :----: | :----: |
| name | 唯一标志符 | string/number | -- | -- |
| title | 面板标题 | string | -- | --|

items在此之上增加了slot定义title和content的slot name如下：

```json
[
 { slot: { title: 'title1', content: 'content1'}},
 { slot: { title: 'title2', content: 'content2'}}
]
```

| 事件名 | 说明 | 参数 |
| :-----: | :-----: | :-----: |
| change | 当前激活面板改变时触发(如果是手风琴模式，参数 `activeNames`类型为`string`，否则为`array`) | (activeNames: array|string) |





## x-form-item
x-form-item将form-item进行包装，通过items属性定义item类型：input,select,checkbox，radio，这些组件的属性
x-form-item

| 参数  | 说明 | 类型  | 是否必须 | 默认值 |
| :-----: | :-----: | :-----: | :----: | :----: |
| prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string | 传入 Form 组件的 `model` 中的字段 | -- |
| label | 标签文本 | string | -- | --|
| label-width | 表单域标签的的宽度，例如 '50px' | string | -- | --|
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | -- | false|
| rules | 表单验证规则 | object | -- | --|
| error | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息 | string | -- | -- |
| show-message | 是否显示校验错误信息 | boolean | -- | true |
| inline-message | 以行内形式展示校验信息 | boolean | -- | false |
| size | 用于控制该表单域下组件的尺寸 | string | medium / small / mini | - |
| hidden | 控制item 是否显示 | boolean | - | - |
| widget | 类型 | string | input/number/password/textarea/select/checkbox-group/radio-group/switch 等| - |
| model | 存储表单值 | object | 必须 | - |


目前支持的item组件：

 * input: ElInput
 * number: ElInput
 * password :ElInput
 * textarea : ElInput
 * select : ELSelect
 * checkbox-group: ElCheckboxGroup、ElCheckbox
 * radio-group: ElRadioGroup、ElRadio 
 * input-number ：ElInputNumber
 * switch: ElSwitch
 * slider: ElSlider
 * time-select : ElTimeSelect
 * time-picker: ElTimePicker
 * date-picler: ElDatePicker
 * color-picker: ElColorPicker
 * rate: ELRate



## x-form

| 参数  | 说明 | 类型  | 是否必须 | 默认值 |
| :-----: | :-----: | :-----: | :----: | :----: |
| model | 表单数据对象 | object | -- | -- |
| rules | 表单验证规则 | object | -- | -- |
| inline | 行内表单模式 | boolean | -- | false |
| label-position | 表单域标签的位置 | string | right/left/top | right |
| label-width | 表单域标签的宽度，作为 Form 直接子元素的 form-item 会继承该值 | string | -- | --|
| label-suffix | 表单域标签的后缀 | string | -- | --|
| show-message | 是否显示校验错误信息 | boolean | -- | true |
| inline-message | 是否以行内形式展示校验信息 | boolean | -- | false |
| status-icon | 是否在输入框中显示校验结果反馈图标 | boolean | -- | false |
| validate-on-rule-change | 是否在 `rules` 属性改变后立即触发一次验证 | boolean | -- | true |
| size | 用于控制该表单内组件的尺寸 | string | medium / small / mini | -- |
| disabled | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效 | boolean | -- | false |
| items | 定义组件items(x-form-item) | Array | | []|
其他属性定义参考element form

items：
```json


```

| 方法名 | 说明 | 参数 |
| :-----: | :-----: | :-----: |
| validate | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))|
| validateField | 对部分表单字段进行校验的方法 | Function(prop: string, callback: Function(errorMessage: string))|
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | --|
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性组成的数组，如不传则移除整个表单的校验结果 | Function(props: array)|


| 事件名称 | 说明 | 回调参数 |
| :-----: | :-----: | :-----: |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过 |



## x-show-dialog
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-----: | :-----: | :-----: | :----: | :----: |
| visible | 是否显示 Dialog，支持 .sync 修饰符 | boolean | -- | false|
| title | Dialog 的标题，也可通过具名 slot （见下表）传入 | string | -- | --|
| width | Dialog 的宽度 | string | -- | 50%|
| fullscreen | 是否为全屏 Dialog | boolean | -- | false|
| top | Dialog CSS 中的 margin-top 值 | string | -- | 15vh|
| modal | 是否需要遮罩层 | boolean | -- | true|
| modal-append-to-body | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 | boolean | -- | true|
| append-to-body | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | boolean | -- | false|
| lock-scroll | 是否在 Dialog 出现时将 body 滚动锁定 | boolean | -- | true|
| custom-class | Dialog 的自定义类名 | string | -- | --|
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | boolean | -- | true|
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog | boolean | -- | true|
| show-close | 是否显示关闭按钮 | boolean | -- | true|
| before-close | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialog | -- | --|
| center | 是否对头部和底部采用居中布局 | boolean | -- | false|
| items| x-form items| Array | -- | []|
| model| 用于显示的model | Object | -- |--|
| rules| x-form rules| Object | -- | -- |
|beforeOpen| 在dialog打开前执行 | Function | {model}|
|closeBtnText| Close按钮文本 | string | Close|


### Slot:

| name | 说明 |
| :-----: | :-----: |
| -- | Dialog 的内容 |
| title | Dialog 标题区的内容 |

## x-edit-dialog
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-----: | :-----: | :-----: | :----: | :----: |
| visible | 是否显示 Dialog，支持 .sync 修饰符 | boolean | -- | false|
| title | Dialog 的标题，也可通过具名 slot （见下表）传入 | string | -- | --|
| width | Dialog 的宽度 | string | -- | 50%|
| fullscreen | 是否为全屏 Dialog | boolean | -- | false|
| top | Dialog CSS 中的 margin-top 值 | string | -- | 15vh|
| modal | 是否需要遮罩层 | boolean | -- | true|
| modal-append-to-body | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 | boolean | -- | true|
| append-to-body | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | boolean | -- | false |
| lock-scroll | 是否在 Dialog 出现时将 body 滚动锁定 | boolean | -- | true |
| custom-class | Dialog 的自定义类名 | string | -- | -- |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | boolean | -- | true |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog | boolean | -- | true |
| show-close | 是否显示关闭按钮 | boolean | -- | true |
| before-close | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialog | -- | -- |
| center | 是否对头部和底部采用居中布局 | boolean | -- | false |
| items| x-form items| Array | -- | []|
| model| 用于显示的model | Object | -- |--|
| rules| x-form rules| Object | -- | -- |
| showCancel | 是否显示Cancel按钮| boolean | true/false | true |
| showReset | 是否显示Reset按钮| boolean | true/false | true |
| showConfirm | 是否显示Confirm按钮| boolean | true/false | true |
| beforeOpen | 在dialog打开前执行 | Function | {model}|
| cancelBtnText | Cancel按钮文本 | string | Close |
| resetBtnText | Reset按钮文本 | string | Reset |
| confirmBtnText | Cancel按钮文本 | string | Confirm |

### Slot:
| name | 说明 |
| :-----: | :-----: |
| -- | Dialog 的内容 |
| title | Dialog 标题区的内容 |



## x-confirm-button

​	复合类型的按钮，用于二次确认并执行动过

## x-edit-dialog-button

​	复合类型的按钮，用于弹出可编辑表单

## x-show-dialog-button

​	复合类型按钮，用于弹出表单

## x-trigger-button

​	复合类型按钮，用于直接触发某个动作

## x-single-select-input-button

​	复合类型按钮，用于选择类型-输出参数





## x-table

| 参数 | 说明 | 类型 | 是否必须 | 默认值 |
| :-----: | :-----: | :-----: | :----: | :----: |
| showToolbar | 是否显示工具栏 | Boolean |  | true |
| toolbar | x-toolbar items | Array |  | [] |
| showToolbarButtonNum | x-toolbar showButtonNum 按钮数量 | Number | | 4 |
| searchs |搜索条件 | Array |  | [] |
| singleSelect | 显示多选列 | Boolean | | true |
| indexed | 显示索引列 | Boolean | | false |
| detailView | 展示详细数据（暂时实现） | Boolean | | false |
| showPagination | 是否分页 | Boolean | | true |
| pageSize | 页大小 | Number | | 10 |
| currentPage | 当前页 | Number | | 1 |
| pageSizes | 可选页大小 | Array | | [10, 20, 30, 40, 50, 100] |
| dynamicComputedPageSize | 是否根据页面大小动态计算pageSize | Boolean | |  true |
| dynamicComputedPageSizesLength | 动态计算的pageSizes长度 pageSize= [pageSize, pageSize*2, ...  pageSize*n] | Number | | 3 |
| columns | 列头 | Array | true | [] |
| fetch | 封装好的获取数据的函数，返回一个promise，会获得搜索条件对象作为参数。若提供该属性，则不会再调用 url属性获取数据 | function | - | - |
| url | 后端数据接口 | String | - | - |

| 事件名 | 说明 | 参数 |
| :-----: | :-----: | :-----: |
| select |	当用户手动勾选数据行的 Checkbox 时触发的事件 |	selection, row |
| select-all |	当用户手动勾选全选 Checkbox 时触发的事件 | 	selection |
| selection-change |	当选择项发生变化时会触发该事件	| selection |
| cell-mouse-enter	| 当单元格 hover 进入时会触发该事件	 | row, column, cell, event |
| cell-mouse-leave	| 当单元格 hover 退出时会触发该事件	 | row, column, cell, event |
| cell-click	| 当某个单元格被点击时会触发该事件	| row, column, cell, event |
| cell-dblclick	 | 当某个单元格被双击击时会触发该事件	| row, column, cell, event |
| row-click	 | 当某一行被点击时会触发该事件	| row, event, column |
| row-contextmenu | 	当某一行被鼠标右键点击时会触发该事件	| row, event |
| row-dblclick	| 当某一行被双击时会触发该事件	| row, event |
| header-click	| 当某一列的表头被点击时会触发该事件	| column, event |
| header-contextmenu	| 当某一列的表头被鼠标右键点击时触发该事件	| column, event |
| sort-change	 | 当表格的排序条件发生变化的时候会触发该事件	| { column, prop, order } |
| filter-change	 | 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。 |	filters |
| current-change	| 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性	| currentRow, oldCurrentRow |
| header-dragend	| 当拖动表头改变了列的宽度的时候会触发该事件	| newWidth, oldWidth, column, event ||
| expand-change	 | 当用户对某一行展开或者关闭的时候会触发该事件	| row, expandedRows |

## x-toolbar
x-toolbar 作为x-table的子组件，默认集成了x-confirm-button、x-edit-dialog-button、x-show-dialog-button、x-single-select-button、x-trigger-button
x-toolabr 分为左右两栏

| 参数 | 说明 | 类型 | 是否必须 | 默认值 |
| :-----: | :-----: | :-----: | :----: | :----: |
| showButtonNum |  显示左侧按钮的数量,剩余的会被合并到下拉按钮菜单 | Number |  | 4|
| dropDownBtn |  下拉菜单名称 | String |  | 更多|
| showSearch |  是否显示搜索 | Boolean |  | true|
| searchs |  搜索条件，参考x-single-select-button | Array |  | [] |
| showRefresh |  是否显示刷新按钮 | Boolean |  | true|
| showChecksGroup |  是否显示列选择列表 | Boolean |  | true|
| getTableSelection |  加载table选择数据 | Function | 是 |
| items | 左侧按钮 | Array | | []|