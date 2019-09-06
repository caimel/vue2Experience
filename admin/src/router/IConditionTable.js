import ConditionTable from '@/views/comps/ConditionTable'
import { connector } from '@/store'
import IRoute from './IRoute'

class IConditionTable extends IRoute {
  constructor (r) {
    const key = r.path
    r.component = function () {
      return new Promise(function (resolve, reject) {
        resolve(connector.connect({
          mapStateToProps: {
            query: state => state.views[key].props.query,
            formItems: state => state.views[key].props.formItems,
            formRules: state => state.views[key].props.formRules,
            table: state => state.views[key].props.table
          }
        })(ConditionTable))
      })
    }
    super(r)
  }
}

export default IConditionTable
