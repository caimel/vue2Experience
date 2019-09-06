import IRoute from '../IRoute'
import ITable from '../ITable'
import IConditionTable from '../IConditionTable'
// import moment from 'moment'
const Analysis = {
  HealthCheck: {
    Reports: function () {
      return new ITable({
        path: 'Health_Check_Reports'
      })
    },
    Task: function () {
      return new IRoute({
        path: 'Health_Check_Task',
        component: () => import('@/views/Business/HealthCheck/Task')
      })
    },
    Strategy: function () {
      return new IRoute({
        path: 'Health_Check_Strategy',
        component: () => import('@/views/Business/HealthCheck/Strategy')
      })
    }
  },
  SQL: {
    Heavy_SQL_Statistics: function () {
      return new IConditionTable({
        path: 'Heavy_SQL_Statistics'
      })
    },
    Frequent_SQL_Statistics: function () {
      return new IConditionTable({
        path: 'Frequent_SQL_Statistics'
      })
    },
    Sequential_Scan_SQL_Statistics: function () {
      return new IConditionTable({
        path: 'Sequential_Scan_SQL_Statistics'
      })
    }
  }

}
export default Analysis
