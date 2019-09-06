import MutiForm from '@/views/comps/MutiForm'
import { connector } from '@/store'
import IRoute from './IRoute'

class IMutiForm extends IRoute {
  constructor (r) {
    const key = r.path
    r.component = function () {
      return new Promise(function (resolve, reject) {
        resolve(connector.connect({
          mapStateToProps: {
            tabPosition: state => state.views[key].props.tabPosition,
            type: state => state.views[key].props.type,
            closable: state => state.views[key].props.closable,
            addable: state => state.views[key].props.addable,
            editable: state => state.views[key].props.editable,
            stretch: state => state.views[key].props.stretch,
            value: state => state.views[key].props.value,
            tabs: state => state.views[key].props.tabs
          }
        })(MutiForm))
      })
    }
    super('menu_item', r)
  }
}

export default IMutiForm
