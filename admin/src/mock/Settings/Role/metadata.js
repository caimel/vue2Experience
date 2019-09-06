export default {
  GridMetadata: config => {
    return [
      {'label': 'ID', 'prop': 'id'},
      {'label': 'Role Name', 'prop': 'roleName'},
      {'label': 'Description', 'prop': 'description', showOverflowTooltip: true},
      {'label': 'Enabled', 'prop': 'enabled'}
    ]
  },
  FormMetadata: config => {
    return {
      'items': [
        [
          {
            'label': 'Role Name',
            'prop': 'roleName',
            'widget': 'input'
          }
        ],
        [
          {
            'label': 'Description',
            'prop': 'description',
            'widget': 'input',
            'type': 'textarea'
          }
        ],
        [
          {
            'label': 'Enabled',
            'prop': 'enabled',
            'widget': 'switch'
          }
        ]
      ]
    }
  },
  ToolbarMetadata: config => {
    return [
      {
        'id': 'create',
        'widget': 'edit',
        'label': '新增',
        'title': '新增[角色信息]',
        'type': 'primary',
        'icon': 'el-icon-edit',
        'checkFormItemsParamsNotNull': false,
        'loadFormItems': true,
        'checkFormItemsParamsNotNullErrorMessage': '请选择数据行',
        'checkFormSourceParamsNotNull': false,
        'loadFormModel': false,
        'checkFormSourceParamsNotNullErrorMessage': '请选择数据行',
        'form': {
          'editable': true,
          'items': {
            'method': 'remote',
            'url': '/FormMetadata/Settings/Role',
            'params': {},
            'errorMessage': '加载表单项失败！'
          },
          'submit': {'url': '/Role', 'httpMethod': 'post', 'errorMessage': '提交数据失败！'}
        }
      },
      {
        'id': 'update',
        'widget': 'edit',
        'label': '修改',
        'title': '修改[角色信息]',
        'type': 'primary',
        'icon': 'el-icon-edit',
        'checkFormItemsParamsNotNull': false,
        'loadFormItems': true,
        'checkFormItemsParamsNotNullErrorMessage': '请选择数据行',
        'checkFormSourceParamsNotNull': true,
        'loadFormModel': true,
        'checkFormSourceParamsNotNullErrorMessage': '请选择数据行',
        'form': {
          'editable': true,
          'items': {
            'method': 'remote',
            'url': '/FormMetadata/Settings/Role',
            'params': {},
            'errorMessage': '加载表单项失败！'
          },
          'source': {'method': 'remote', 'autoLoad': true, 'url': '/Role', 'errorMessage': '加载数据失败！'}
        }
      },
      {
        'id': 'read',
        'widget': 'edit',
        'label': '查看',
        'title': '查看[角色信息]',
        'type': 'primary',
        'icon': 'el-icon-view',
        'checkFormItemsParamsNotNull': false,
        'loadFormItems': true,
        'checkFormItemsParamsNotNullErrorMessage': '请选择数据行',
        'checkFormSourceParamsNotNull': true,
        'loadFormModel': true,
        'checkFormSourceParamsNotNullErrorMessage': '请选择数据行',
        'form': {
          'editable': false,
          'items': {
            'method': 'remote',
            'url': '/FormMetadata/Settings/Role',
            'params': {},
            'errorMessage': '加载表单项失败！'
          },
          'source': {'method': 'remote', 'autoLoad': true, 'url': '/Role', 'errorMessage': '加载数据失败！'}
        }
      },
      {
        id: 'delete',
        widget: 'confirm',
        label: '删除',
        type: 'primary',
        icon: 'el-icon-delete',
        checkParamsNotNull: true,
        checkParamsNotNullErrorMessage: '请选择数据行',
        promptMessage: '确定以删除选中数据？',
        confirmMessage: '',
        cancelMessage: '',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        url: '/Role',
        httpMethod: 'delete',
        params: {}
      },
      {
        'id': 'privilege',
        'widget': 'edit',
        'label': '配置权限',
        'title': '配置角色权限',
        'type': 'primary',
        'icon': 'el-icon-edit',
        'checkFormItemsParamsNotNull': false,
        'loadFormItems': true,
        'checkFormItemsParamsNotNullErrorMessage': '请选择数据行',
        'checkFormSourceParamsNotNull': true,
        'loadFormModel': true,
        'checkFormSourceParamsNotNullErrorMessage': '请选择数据行',
        'form': {
          'editable': true,
          'items': {
            'method': 'remote',
            'url': '/FormMetadata/Settings/Privilege',
            'params': {},
            'errorMessage': '加载表单项失败！'
          },
          'source': {'method': 'remote', 'autoLoad': true, 'url': '/Privilege', 'errorMessage': '加载数据失败！'},
          'submit': {'url': '/Privilege', 'httpMethod': 'put', 'errorMessage': '提交数据失败！'}
        }
      }
    ]
  }
}
