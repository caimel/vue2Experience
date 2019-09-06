const DEFAULT_EN_WIDTH = 9.5
const DEFAULT_CHN_WIDTH = 11
const DEFAULT_PADDING = 10 // 这里有点奇怪 el-table的 header padding-left ：10 padding-right ：10 有时候这个padding又会被内容吃掉by zhenglincheng
const renders = {
  default: function (h, { column, $index }) {
    const width = column.realWidth || column.width
    const chn = column.label.match(/[\u4E00-\u9FA5]/g)
    const special_characters = column.label.match(/[\\(\\)]/g)
    const chn_len = chn ? chn.length : 0 // 包含中文的长度
    const special_characters_len = special_characters ? special_characters.length : 0
    // console.log(column.label, width - DEFAULT_PADDING, (column.label.length - chn_len))
    if (width - DEFAULT_PADDING < (column.label.length - chn_len) * DEFAULT_EN_WIDTH + chn_len * DEFAULT_CHN_WIDTH - special_characters_len * DEFAULT_EN_WIDTH / 2) {
      return h('el-tooltip', { props: {content: column.label, placement: 'top'} },
        [h('span', {class: {'table-head': true}, style: { 'white-space': 'nowrap', display: 'block', width: '100%', overflow: 'hidden', 'text-overflow': 'ellipsis', '-o-text-overflow': 'ellipsis' }}, [column.label])])
    }
    return column.label
  }
}
export default renders
