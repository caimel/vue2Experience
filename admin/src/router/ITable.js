import Table from '@/views/comps/Table'
import { connector } from '@/store'
import IRoute from './IRoute'

class ITable extends IRoute {
  constructor (r) {
    const key = r.path
    r.component = function () {
      return new Promise(function (resolve, reject) {
        resolve(connector.connect({
          mapStateToProps: {
            query: state => state.views[key].props.query,
            toolbar: state => state.views[key].props.toolbar,
            table: state => state.views[key].props.table
          }
        })(Table))
      })
    }
    super('menu_item', r)
  }
}

export default ITable
