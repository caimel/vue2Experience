
export function generateVueComponent () {
  let comp = {
    template: `
    <x-panel :items="panelc08d1980a12311e8a5a34706d843fe08">
    <x-tree slot="left" ref="left"
            :props="treec0885e90a12311e8a5a34706d843fe08"
            :url="treec0885e92a12311e8a5a34706d843fe08"
            @node-click="treec0885e94a12311e8a5a34706d843fe08"></x-tree>
    <x-table slot="right" ref="right"
             :columns="gridc08b92e0a12311e8a5a34706d843fe08"
             :autoLoad="false"
             :url="gridc08b92e1a12311e8a5a34706d843fe08"
    ></x-table>
  </x-panel>`,
    data: function () {
      return {
        treec0885e90a12311e8a5a34706d843fe08: {'label': 'label', 'children': 'children'},
        treec0885e91a12311e8a5a34706d843fe08: true,
        treec0885e92a12311e8a5a34706d843fe08: '/tree',
        treec0885e93a12311e8a5a34706d843fe08: {},
        gridc08b92e0a12311e8a5a34706d843fe08: [{'label': '部门', 'prop': 'orgName'}, {
          'label': '姓名',
          'prop': 'name'
        }, {'label': '日期', 'prop': 'date'}, {'label': '地址', 'prop': 'address'}],
        gridc08b92e1a12311e8a5a34706d843fe08: '/treeTable',
        gridc08b92e2a12311e8a5a34706d843fe08: {},
        panelc08d1980a12311e8a5a34706d843fe08: [{
          'style': {'flex': 1},
          'equally': false,
          'cols': [{'span': 6, 'slot': 'left'}, {'span': 18, 'slot': 'right'}]
        }]
      }
    }
  }
  comp.methods = {}
  comp.methods['treec0885e94a12311e8a5a34706d843fe08'] = new Function('nodeData', 'node', 'vueComponent', "this.$refs['right'].loadDataHandler({orgId: nodeData.id})")
  return comp
}
