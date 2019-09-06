import ITable from '../ITable'
const Configurator = {
  all_merch: function () {
    return new ITable({
      path: 'all_merch'
    })
  },
  all_merch_order: function () {
    return new ITable({
      path: 'all_merch_order'
    })
  },
  all_merch_settle: function () {
    return new ITable({
      path: 'all_merch_settle'
    })
  }
}
export default Configurator
