const meta =
{
  className: 'Employee',
  fields: [
    {editable: false,
      display: false,
      type: 'long',
      propertyName: 'id',
      locale: '编号',
      flex: 1,
      sortable: true,
      constraints: {unique: true}},
    {editable: true,
      display: true,
      type: 'String',
      propertyName: 'name',
      locale: '姓名',
      flex: 0,
      widget: 'input',
      constraints: {unique: false, blank: true}},
    {editable: true,
      display: true,
      type: 'boolean',
      propertyName: 'gender',
      locale: '性别',
      flex: 0,
      defaults: false,
      constraints: {unique: false}},
    {editable: true,
      display: true,
      type: 'String',
      propertyName: 'familyName',
      locale: '姓氏',
      flex: 0,
      widget: 'input',
      constraints: {
        size: { min: 1, max: 24 },
        unique: false,
        blank: true
      }
    },
    {editable: true,
      display: true,
      type: 'String',
      propertyName: 'givenName',
      locale: '名称',
      flex: 0,
      widget: 'input',
      constraints: {
        unique: false,
        size: { min: 1, max: 64 },
        blank: true
      }
    },
    {editable: true, display: true, type: 'int', propertyName: 'age', locale: '年龄', flex: 0, constraints: {unique: false}},
    {editable: true,
      display: true,
      type: 'Date',
      propertyName: 'birthday',
      locale: '生日',
      flex: 0,
      widget: 'date-picker',
      constraints: {unique: false, nullable: false, format: 'yyyy-MM-dd'}},
    {editable: true,
      display: true,
      type: 'Date',
      propertyName: 'dateCreated',
      locale: '创建时间',
      flex: 0,
      widget: 'date-picker',
      constraints: {unique: false, nullable: true, format: 'yyyy-MM-dd'}},
    {editable: true,
      display: true,
      type: 'Date',
      propertyName: 'lastUpdated',
      locale: '最后更新',
      flex: 0,
      widget: 'date-picker',
      constraints: {unique: false, nullable: true, format: 'yyyy-MM-dd'}}],
  locale: '员工',
  tabs: [
    {label: 'default', fields: [['department', 'gender'], ['familyName'], ['givenName']]},
    {label: '生日', fields: [['birthday']]},
    {label: '时间', fields: [['dateCreated'], ['lastUpdated']]}
  ],
  packageName: 'com.vgrails.demo',
  search: {
    type: 'standard',
    fields: [
      {
        name: 'name',
        op: ['eq', 'like']
      },
      {
        name: 'birthday',
        op: ['lt', 'le', 'eq', 'ge', 'gt', 'like', 'range']
      }
    ]
  },
  tools: [
    {
      type: 'create',
      label: '新增',
      name: 'create',
      action: 'create',
      confirm: false,
      controller: 'employee',
      url: '/employee',
      includes: [
        'name',
        'address'
      ],
      select: 'none'
    },
    {
      action: 'read',
      confirm: false,
      controller: 'employee',
      url: '/employee',
      includes: [
        'name',
        'manager',
        'subManager',
        'country',
        'province',
        'city',
        'address',
        'level',
        'parent'
      ],
      label: '详情',
      name: 'read',
      select: 'single',
      type: 'read'
    },
    {
      type: 'update',
      label: '更新',
      name: 'update',
      action: 'update',
      confirm: false,
      controller: 'employee',
      url: '/employee',
      includes: [
        'address'
      ],
      select: 'single'
    },
    {
      type: 'delete',
      name: 'delete',
      action: 'delete',
      confirm: true,
      controller: 'employee',
      url: '/employee',
      label: '删除',
      select: 'multi'
    },
    {
      type: 'simple',
      action: 'enable',
      confirm: false,
      controller: 'employee',
      url: '/employee',
      label: '禁用',
      name: 'enable',
      select: 'multi'
    }
  ],
  transients: ['age', 'name'],
  name: 'employee',
  associations: ['department']
}

const data = {

}
export default {
  meta: () => {
    return meta
  },
  list: config => {
    return data
  }
}
