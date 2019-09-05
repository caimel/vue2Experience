## 需求：dropdown下拉菜单点击空白处有效，而不是只有点击文字才有效

### 最初尝试：扩展dropdown组件
### 原理：
扩展dropdown组件(XDropdown)，在dropdown-item.vue组件（XDropdownItem）中的点击事件函数中加上一个广播函数broadcastNotComp（由原来的broadcast函数扩展而来，区别是不需要传组件名componentName）向子孙组件抛出menu-item-handleClick事件。

```
methods: {

handleClick(e) {

this.dispatch('XDropdown', 'menu-item-click', [this.command, this]);

this.broadcastNotComp('menu-item-handleClick')

  }

}
```
子组件DialogComponentLinkButton.vue监听menu-item-handleClick事件并执行click事件

```
mounted () {

this.$on('menu-item-handleClick', () => {

this.click()

  })

}
```
### 问题：
x-dropdown dropdown的z-index只在同类型的基础上累加，dialog也只在dialog的基础上累加，
所以，如果点击很多次dialog后，使得其z-index大于dropdown的z-index就会导致，dropdown被遮盖住

### 原因：dialog每次被打开/关闭都会调用方法updatePopper
```
updatePopper() {

this.broadcast('ElSelectDropdown', 'updatePopper');

this.broadcast('ElDropdownMenu', 'updatePopper');

},
```
updatePopper方法会在该dialog的z-index的基础上给组件ElDropdownMenu的z-index加1，
目的是为了使ElDropdownMenu的z-index大于dilog的z-index，避免被dialog遮盖。

### 解决办法：由于该项目多处引用了dialog组件，如果改动dialog组件，成本太大。所以放弃扩展dropdown组件，保留原来的。
### 最终解决方案：在cloumn/renders.js中实现广播抛出menu-item-handleClick事件。

#### 观察：
dropdown-item.vue组件被点击后向ElDropdown组件往上抛出menu-item-click事件

```
methods: {

handleClick(e) {

this.dispatch('ElDropdown', 'menu-item-click', [this.command, this]);

}

}
dropdown.vue（ElDropdown）组件监听menu-item-click事件执行handleMenuItemClick方法

mounted() {

this.$on('menu-item-click', this.handleMenuItemClick);

this.initEvent();

this.initAria();

},

handleMenuItemClick(command, instance) {

if (this.hideOnClick) {

this.visible = false;

}

this.$emit('command', command, instance);

},
handleMenuItemClick方法抛出command事件并带上,command和instance

handleMenuItemClick(command, instance) {

if (this.hideOnClick) {

this.visible = false;

}

this.$emit('command', command, instance);

}
```
此处的command和instance是ElDropdownItem中的对应command属性和ElDropdownItem实例(this)

### 实现：
在cloumn/renders.js中创建el-doropdown组件时监听command事件获得ElDropdownItem实例并调用广播函数抛出menu-item-handleClick事件。
将代码行：
```
return createElement('el-dropdown', {props: {trigger: 'click'}}, [dropdownButton, dropdownMenu])
```
改为：
```
return createElement('el-dropdown', {

props: {trigger: 'click'},

on: {

'command': (command, instance) => {

broadcastNotComp(instance, 'menu-item-handleClick')

    }

  }}, [dropdownButton, dropdownMenu])
  ```
注意：由于原组件ElDropdownItem中是没有broadcastNotComp广播函数的，这个是自己扩展的，所以需要在cloumn/renders.js中实现该方法
```
function broadcastNotComp (instance, eventName, params) {

  instance.$children[0].$emit.apply(instance.$children[0], [eventName].concat(params))

}
```
扩展方法broadcastNotComp
在文件emitter.js中的methods中增加方法broadcastNotComp
```
function broadcastNotComp (eventName, params) {

this.$children[0].$emit.apply(this.$children[0], [eventName].concat(params))

}

export default {

methods: {

dispatch (componentName, eventName, params) {

var parent = this.$parent || this.$root

var name = parent.$options.componentName


while (parent && (!name || name !== componentName)) {

        parent = parent.$parent

if (parent) {

          name = parent.$options.componentName

        }

      }

if (parent) {

        parent.$emit.apply(parent, [eventName].concat(params))

      }

    },

broadcast (componentName, eventName, params) {

broadcast.call(this, componentName, eventName, params)

    },

broadcastNotComp (eventName, params) {

broadcastNotComp.call(this, eventName, params)

    }

  }

}
```
### emitter与renders中的broadcastNotComp方法的区别：
renders中的broadcastNotComp方法多传入instance参数，因为renders无法使用this。所以需要将ElDropdownItem抛出的this实例（instance）作为入参。
