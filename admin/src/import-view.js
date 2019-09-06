/**
 * 注册业务组件(view)
 */
import Vue from 'vue'

const imports = [
  // {name: 'SqlEvaluator', from: 'Business/Horizontal/SqlEvaluator'},
  // {name: 'LockHoldingConnection', from: 'Business/Horizontal/LockHoldingConnection'},
  // {name: 'SqlCursorHeldInfo', from: 'Business/Horizontal/SqlCursorHeldInfo'},
  // {name: 'TableInfo', from: 'Business/Horizontal/TableInfo'},
  // {name: 'ListAnalysisResult', from: 'Business/Horizontal/ListAnalysisResult'},
  // {name: 'ExecutionHistoryOfSQLPattern', from: 'Business/Horizontal/ExecutionHistoryOfSQLPattern'},
  // {name: 'ConfigAlarmStrategy', from: 'Business/Event/Config'},
  // {name: 'ProcessAlarm', from: 'Business/Event/Process'},
  // {name: 'HealthCheckReportDetail', from: 'Business/HealthCheck/ReportDetail'},
  // {name: 'HealthCheckStrategyConfig', from: 'Business/HealthCheck/StrategyConfig'},
  // {name: 'HealthCheckTaskConfig', from: 'Business/HealthCheck/TaskConfig'},
  // {name: 'InstanceUpdateConfig', from: 'Business/HealthCheck/InstancesConfig'},
  // {name: 'SqlPointInTime', from: 'Business/DrillDown/SqlPointInTime'},
  // {name: 'ActiveSqlTreeDiagram', from: 'Business/DrillDown/ActiveSqlTreeDiagram'},
  // {name: 'ActiveSql', from: 'Business/DrillDown/ActiveSql'},
  // {name: 'StartAnalysis', from: 'Business/DrillDown/StartAnalysis'},
  // {name: 'IODeviceCapture', from: 'Business/Settings/IODeviceCaptureList'},
  // {name: 'dataCapture', from: 'Business/Settings/Data/DataCapture'},
  // {name: 'dataRecycle', from: 'Business/Settings/Data/DataRecycle'},
  // {name: 'NotificationAssignment', from: 'Business/Event/NotificationAssignment'},
  // {name: 'ConfigSmtpEmail', from: 'Business/Settings/SmtpEmailConfig'},
  // {name: 'TaskList', from: 'Business/Event/TaskList'},
  // {name: 'DiffSqlPattern', from: 'Business/DrillDown/DiffSqlPattern'},
  // {name: 'TableApi', from: 'comps/TableApi'},
  {name: 'Table', from: 'comps/Table'},
  {name: 'Form', from: 'comps/Form'}
]
function importComponent (imports) {
  imports.forEach(item => {
    Vue.component(item.name, () => import('@/views/' + item.from))
  })
}
importComponent(imports)
