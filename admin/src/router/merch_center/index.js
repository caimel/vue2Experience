import ITable from '../ITable'
import IMutiForm from '../IMutiForm'
const Configurator = {
  merch_conf: function () {
    return new IMutiForm({
      path: 'merch_conf'
    })
  },
  merch_order: function () {
    return new ITable({
      path: 'merch_order'
    })
  },
  merch_settle: function () {
    return new ITable({
      path: 'merch_settle'
    })
  }
}
export default Configurator
