import Mock from 'mockjs'
import i18n from './i18n'

import MENU from './menu/mock_menu'

import MOCK_TABLE_METADATA from './mock_table_metadata'
import MOCK_TOOLBAR_METADATA from './mock_toolbar_metadata'
import MOCK_FORM_METADATA from './mock_form_metadata'
import MOCK_TREE_DATA from './mock_tree_data'

Mock.setup({
  timeout: '50-100'
})

Mock.mock(/\/MOCK\/TABLE_METADATA/, 'get', MOCK_TABLE_METADATA.GET)
Mock.mock(/\/MOCK\/TOOLBAR_METADATA/, 'get', MOCK_TOOLBAR_METADATA.GET)
Mock.mock(/\/MOCK\/FORM_METADATA/, 'get', MOCK_FORM_METADATA.GET)
Mock.mock(/\/MOCK\/TREE_DATA/, 'get', MOCK_TREE_DATA.GET)
// Mock.mock(/\/org\/meta\.*/, 'get', org.meta)
// Mock.mock(/\/org/, 'get', org.list)

Mock.mock(/\/i18n/, 'get', i18n.get)

Mock.mock(/\/menu/, 'get', MENU.GET)
export default Mock
