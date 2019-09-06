export default {
  PrivilegeFormMetadata: config => {
    return {
      'items': [
        [
          //   {
          //   'label': 'Privilege',
          //   'prop': 'privilege',
          //   'widget': 'tree-transfer',
          //   'titles': ['Source', 'Target'],
          //   'filterable': true,
          //   'props': {
          //     key: 'id',
          //     label: 'label',
          //     disabled: 'disabled'
          //   },
          //   'data': [
          //     { label: '首选项1',
          //       id: 6,
          //       children: [
          //         {label: '首选项1-1', id: 61},
          //         {label: '首选项1-2', id: 62}
          //       ]
          //     },
          //     {label: '首选项2',
          //       id: 7,
          //       children: [
          //         {label: '首选项2-1', id: 71},
          //         {label: '首选项2-2', id: 72}
          //       ]
          //     },
          //     {label: '首选项3', id: 8}
          //   ]
          // }
          {
            'label': 'Privileges',
            'prop': 'privileges',
            'widget': 'tree',
            // 'filterable': true,
            'props': {
              label: 'label',
              children: 'children'
            },
            'show-checkbox': true,
            'default-expand-all': true,
            'node-key': 'id',
            'check-strictly': false,
            'filterable': true,
            'data': [
              { label: '权限1',
                id: 6,
                children: [
                  {label: '权限1-1', id: 61},
                  {label: '权限1-2', id: 62}
                ]
              },
              {label: '权限2',
                id: 7,
                children: [
                  {label: '权限2-1', id: 71},
                  {label: '权限2-2', id: 72}
                ]
              },
              {label: '权限3', id: 8}
            ]
          }
        ]
      ]
    }
  }
}
