import './string'
import uuidv1 from 'uuid/v1'

export function generateTemplate (layout, layoutPropName, components) {
  const temp = parseLayout(layout, layoutPropName, '')
  return parseComponent(temp, components)
}
const containerMap = {
  panel: {
    prefix: `<x-panel :items="{items}" slot="{slot}">`,
    suffix: `</x-panel>`
  },
  tabs: {
    prefix: `<x-tabs :items="{items}" slot="{slot}">`,
    suffix: `</x-tabs>`
  }
}

export function parseLayout (layout, layoutPropName, slotName) {
  const container = layout.container
  let layoutTmp = containerMap[container].prefix.format({
    items: layoutPropName,
    slot: slotName
  })
  layout.layouts.forEach(function (row, rIndex) {
    switch (container) {
      case 'panel':
        row.cols.forEach(function (col, index) {
          if (col.slot === undefined) {
            col.slot = uuidv1()
          }
          if (col.child !== undefined) { // 嵌入布局子组件
            layoutTmp += parseLayout(col.child, layoutPropName + `[${rIndex}].cols[${index}].child.layouts`, col.slot)
          } else { // 嵌入component
            layoutTmp += '{' + `${col.slot}` + '}'
          }
        })
        break
      case 'tabs':
        layoutTmp += '{' + `${row.slot.label}` + '}{' + `${row.slot.content}` + '}'
    }
  })
  layoutTmp += containerMap[container].suffix
  return layoutTmp
}

const componentsMap = {
  tree: {
    template: `<el-tree :data="{data}" :props="{props}" show-checkbox slot="{slot}"></el-tree>`
  },
  grid: {
    template: `<x-table :toolbar="{toolbar}" :searchs="{searchs}" :columns="{columns}" :data="data" 
                :total="{total}" highlightCurrentRow slot="{slot}"></x-table>`
  }
}

export function parseComponent (temp, components) {
  let slots = {}
  for (var slot in components) {
    const component = components[slot]
    const componentTemp = componentsMap[component.component]
    switch (component.component) {
      case 'tree':
        slots[slot] = componentTemp.template.format({
          data: `components.${slot}.data.data`,
          props: `components.${slot}.data.props`,
          slot: slot
        })
        break
      case 'grid':
        slots[slot] = componentTemp.template.format({
          toolbar: `components.${slot}.data.toolbar`,
          searchs: `components.${slot}.data.searchs`,
          columns: `components.${slot}.data.columns`,
          total: `components.${slot}.data.total`,
          slot: slot
        })
        break
    }
  }
  return temp.format(slots)
}
