import accessConfig from '../../../static/config/access.json'
import Menu_Group from '../../../static/config/menu-group.json'
import Menu_Item from '../../../static/config/menu-item.json'

const GroupSplitter = '|'
const ItemSplitter = ','
const root = {}
accessConfig.access.forEach(item => {
  const _menus = []
  if (item.menus.include && item.menus.include.length > 0) {
    item.menus.include.forEach(i => {
      switch (typeof i) {
        case 'string':
          const groupNames = i.split(GroupSplitter)
          let leafNames = []
          if (groupNames.length > 1) {
            leafNames = groupNames.pop().split(ItemSplitter)
          }
          const leaves = []
          leafNames.forEach(leaf => {
            leaves.push(Menu_Item[leaf])
          })
          let group = {
            children: leaves
          }
          Object.assign(group, JSON.parse(JSON.stringify(Menu_Group[groupNames.pop()])))
          for (let i = groupNames.length - 1; i >= 0; i--) {
            const _group = JSON.parse(JSON.stringify(Menu_Group[groupNames[i]]))
            _group.children = []
            _group.children.push(JSON.parse(JSON.stringify(group)))
            group = _group
          }
          _menus.push(group)
          break
        case 'object':
          Object.keys(i).map((key) => {
            if (Object.prototype.toString.call(i[key]) === '[object Array]') {
              const topGroup = JSON.parse(JSON.stringify(Menu_Group[key]))
              topGroup.children = []
              i[key].forEach(item => {
                const groupNames = item.split(GroupSplitter)
                let leafNames = []
                leafNames = groupNames.pop().split(ItemSplitter)
                const leaves = []
                leafNames.forEach(leaf => {
                  leaves.push(Menu_Item[leaf])
                })
                if (groupNames.length > 0) {
                  let group = {
                    children: leaves
                  }
                  Object.assign(group, JSON.parse(JSON.stringify(Menu_Group[groupNames.pop()])))
                  for (let i = groupNames.length - 1; i >= 0; i--) {
                    const _group = JSON.parse(JSON.stringify(Menu_Group[groupNames[i]]))
                    _group.children = []
                    _group.children.push(JSON.parse(JSON.stringify(group)))
                    group = _group
                  }
                  topGroup.children.push(group)
                } else {
                  topGroup.children = topGroup.children.concat(leaves)
                }
              })
              _menus.push(topGroup)
            }
          })
          break
      }
    }
    )
  } else if (item.menus.exclude && item.menus.exclude.length > 0) {

  }
  root[item.level] = _menus
})
export default {
  GET: config => {
    const menu = [{
      index: 'illa',
      label: 'ilia',
      menus: root['100']
    }]
    return menu
  }
}
