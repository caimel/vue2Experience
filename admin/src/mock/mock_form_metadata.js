import { param2Obj } from '@/utils/param2Obj'

const METADATA = {
  User: {
    items: [
      [
        {label: 'First Name', prop: 'firstName', widget: 'input'}
      ],
      [
        {label: 'Last Name', prop: 'lastName', widget: 'input'}
      ],
      [
        {label: 'Login Name', prop: 'loginName', widget: 'input'}
      ],
      [
        {label: 'Login Password', prop: 'loginPassword', widget: 'input'}
      ],
      [
        {label: 'Enter Password Again', prop: 'loginPasswordAgain', widget: 'input'}
      ],
      [
        {label: 'E-Mail Address', prop: 'email', widget: 'input'}
      ],
      [
        {label: 'Cell Phone', prop: 'cellphone', widget: 'input'}
      ],
      [
        {label: 'System Administrator?', prop: 'isAdmin', widget: 'switch'}
      ],
      [
        {label: 'Enabled', prop: 'enabled', widget: 'switch'}
      ]
    ],
    rules: {
      firstName: [{required: true, trigger: 'blur'}],
      lastName: [{required: true, trigger: 'blur'}],
      loginName: [{required: true, trigger: 'blur'}],
      loginPassword: [{required: true, trigger: 'blur'}],
      loginPasswordAgain: [{required: true, trigger: 'blur'}]
    }
  }
}

export default {
  GET: config => {
    const { id } = param2Obj(config.url)
    if (id) {
      return METADATA[id]
    }
    return []
  }
}
