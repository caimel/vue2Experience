export default {
  GridMetadata: config => {
    return [
      {'label': 'ID', 'prop': 'id'},
      {'label': 'Name', 'prop': 'name'},
      {'label': 'Type', 'prop': 'type'},
      {'label': 'Parent', 'prop': 'parent'},
      {'label': 'Uri', 'prop': 'uri'},
      {'label': 'Enabled', 'prop': 'enabled'}
    ]
  },
  FormMetadata: config => {
    return {
      'items': [
        [
          {
            'label': 'Name',
            'prop': 'name',
            'widget': 'input'
          }
        ],
        [
          {
            'label': 'Type',
            'prop': 'type',
            'widget': 'select',
            'options': [
              {'value': 'Page', 'label': 'Page'},
              {'value': 'Table', 'label': 'Table'},
              {'value': 'Form', 'label': 'Form'},
              {'value': 'Button', 'label': 'Button'}
            ]
          }
        ],
        [
          {
            'label': 'Parent',
            'prop': 'parent',
            'widget': 'select',
            'filterable': false,
            'remote': true,
            'url': '/Resource/Select',
            'params': {},
            'options': []
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
        'title': '新增[资源信息]',
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
            'url': '/FormMetadata/Settings/Resource',
            'params': {},
            'errorMessage': '加载表单项失败！'
          },
          'submit': {'url': '/Resource', 'httpMethod': 'post', 'errorMessage': '提交数据失败！'}
        }
      },
      {
        'id': 'update',
        'widget': 'edit',
        'label': '修改',
        'title': '修改[资源信息]',
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
            'url': '/FormMetadata/Settings/Resource',
            'params': {},
            'errorMessage': '加载表单项失败！'
          },
          'source': {'method': 'remote', 'autoLoad': true, 'url': '/Resource', 'errorMessage': '加载数据失败！'}
        }
      },
      {
        'id': 'read',
        'widget': 'edit',
        'label': '查看',
        'title': '查看[资源信息]',
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
            'url': '/FormMetadata/Settings/Resource',
            'params': {},
            'errorMessage': '加载表单项失败！'
          },
          'source': {'method': 'remote', 'autoLoad': true, 'url': '/Resource', 'errorMessage': '加载数据失败！'}
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
        url: '/Resource',
        httpMethod: 'delete',
        params: {}
      }
    ]
  }
}
