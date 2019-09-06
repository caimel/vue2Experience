export default {
  GridMetadata: config => {
    return [
      {'label': 'ID', 'prop': 'id'},
      {'label': 'First Name', 'prop': 'firstName'},
      {'label': 'Last Name', 'prop': 'lastName'},
      {'label': 'Department', 'prop': 'department'},
      {'label': 'Login Name', 'prop': 'loginName'},
      {'label': 'Email', 'prop': 'email'},
      {'label': 'CellPhone', 'prop': 'cellphone'},
      {'label': 'IsAdmin', 'prop': 'isAdmin'},
      {'label': 'Enabled', 'prop': 'enabled'}
    ]
  },
  FormMetadata: config => {
    return {
      'items': [
        [
          {
            'label': 'First Name',
            'prop': 'firstName',
            'widget': 'input'
          }
        ],
        [
          {
            'label': 'Last Name',
            'prop': 'lastName',
            'widget': 'input'
          }
        ],
        [
          {
            'label': 'Login Name',
            'prop': 'loginName',
            'widget': 'input'
          }
        ],
        [
          {
            'label': 'Email',
            'prop': 'email',
            'widget': 'input'
          }
        ],
        [
          {
            'label': 'Cell Phone',
            'prop': 'cellphone',
            'widget': 'input'
          }
        ],
        [
          {
            'label': 'Roles',
            'prop': 'roles',
            'widget': 'select',
            'multiple': true,
            'remote': true,
            'url': '/Role/Select',
            'params': {},
            'options': []
          }
        ],
        [
          {
            'label': 'IS Admin',
            'prop': 'isAdmin',
            'widget': 'switch'
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
        'title': '新增[用户信息]',
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
            'url': '/FormMetadata/Settings/User',
            'params': {},
            'errorMessage': '加载表单项失败！'
          },
          'submit': {'url': '/User', 'httpMethod': 'post', 'errorMessage': '提交数据失败！'}
        }
      },
      {
        'id': 'update',
        'widget': 'edit',
        'label': '修改',
        'title': '修改[用户信息]',
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
            'url': '/FormMetadata/Settings/User',
            'params': {},
            'errorMessage': '加载表单项失败！'
          },
          'source': {'method': 'remote', 'autoLoad': true, 'url': '/User', 'errorMessage': '加载数据失败！'},
          'submit': {'url': '/User', 'httpMethod': 'put', 'errorMessage': '提交数据失败！'}
        }
      },
      {
        'id': 'read',
        'widget': 'edit',
        'label': '查看',
        'title': '查看[用户信息]',
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
            'url': '/FormMetadata/Settings/User',
            'params': {},
            'errorMessage': '加载表单项失败！'
          },
          'source': {'method': 'remote', 'autoLoad': true, 'url': '/User', 'errorMessage': '加载数据失败！'}
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
        url: '/User',
        httpMethod: 'delete',
        params: {}
      }
    ]
  }
}
