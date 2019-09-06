import ITable from '../ITable'
const Configurator = {
  user: function () {
    return new ITable({
      path: 'user'
    })
  },
  role: function () {
    return new ITable({
      path: 'role'
    })
  },
  authority: function () {
    return new ITable({
      path: 'authority'
    })
  }
}
export default Configurator
