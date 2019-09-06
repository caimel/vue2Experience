
const ExecutionHistoryOfSQLPattern = [
  {label: 'Current Time', prop: 'Current_Time'},
  {label: 'Session', prop: 'Session'},
  {label: 'Process ID', prop: 'Process_ID'},
  {label: 'User', prop: 'User'},
  {label: 'TTY', prop: 'TTY'},
  {label: 'Host', prop: 'Host'},
  {label: 'Database', prop: 'Database'},
  {label: 'Estimated Cost', prop: 'Estimated_Cost'},
  {label: 'Estimated Rows', prop: 'Estimated_Rows'},
  {label: 'Sequential Scan', prop: 'Sequential_Scan'}
]

const TopBusySession = [
  { id: 'click', widget: 'click', position: 'right', label: '', type: 'primary', icon: 'el-icon-refresh' }
  // { id: 'checks', widget: 'checks', position: 'right', props: { label: 'label', value: 'visible' } }
]

const TopBusySessionFoot = [
  { id: 'Active_SQL',
    widget: 'routerLink',
    position: 'right',
    label: 'Active SQL',
    type: 'primary',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: true,
    checkQueryNotNullErrorMessage: '请选择数据行',
    to: {
      path: 'Active_SQL'
    }
  }
  // {
  //   id: 'Start_Analysis_Session',
  //   widget: 'routerLink',
  //   position: 'right',
  //   label: 'Start Analysis Session',
  //   type: 'primary',
  //   size: 'mini',
  //   icon: 'el-icon-arrow-down',
  //   checkQueryNotNull: true,
  //   checkQueryNotNullErrorMessage: '请选择数据行',
  //   to: {
  //     path: 'Start_Analysis_Session'
  //   }
  // }
]
const TopIOSessionFoot = [
  { id: 'Active_SQL',
    widget: 'routerLink',
    position: 'right',
    label: 'Active SQL',
    type: 'primary',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: true,
    checkQueryNotNullErrorMessage: '请选择数据行',
    to: {
      path: 'Active_SQL'
    }
  }
]
const ActiveSqlTreeDiagram = [
  {
    id: 'SQL_Evaluator',
    widget: 'routerLink',
    position: 'right',
    label: 'SQL Evaluator',
    type: 'primary',
    size: 'mini',
    icon: 'el-icon-caret-bottom',
    checkQueryNotNull: false,
    checkQueryNotNullErrorMessage: '请选择数据行',
    to: {
      path: './SQL_Evaluator'
      // fullpath: '/Session_Connection/Top_IO_Session/SQL_Evaluator'
    }
  } // ,
  // {
  //   id: 'Start_Analysis_Session',
  //   widget: 'routerLink',
  //   position: 'right',
  //   label: 'Start Analysis Session',
  //   type: 'primary',
  //   size: 'mini',
  //   icon: 'el-icon-caret-bottom',
  //   checkQueryNotNull: false,
  //   checkQueryNotNullErrorMessage: '请选择数据行',
  //   to: {
  //     path: 'Start_Analysis_Session'
  //   }
  // }
]
const ListAnalysisResult = [
  {
    'id': 'SQL_Evaluator',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'SQL Evaluator',
    'type': 'primary',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'SQL_Evaluator' }
  },
  {
    'id': 'Execution_History_Of_SQL_Pattern',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'Execution History Of SQL Pattern',
    'type': 'primary',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'Execution_History_Of_SQL_Pattern' }
  }
]

const TrendAnalysis = [
  {
    'id': 'SQL_POINT_IN_TIME',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'SQL POINT IN TIME',
    'type': 'primary',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'SQL_POINT_IN_TIME' }
  },
  {
    'id': 'CLEAN_ALL_CHARTS',
    'widget': 'click',
    'position': 'right',
    'label': 'Clean ALL Charts',
    'type': 'primary'
  }
]
const HeavySQLStatistics = [
  { id: 'click', widget: 'click', position: 'right', label: '', type: 'primary', size: 'mini', icon: 'el-icon-refresh' }
]

const HeavySQLStatisticsFoot = [
  {
    'id': 'SQL_Evaluator',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'SQL Evaluator',
    'type': 'primary',
    'size': 'mini',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'SQL_Evaluator' }
  },
  {
    'id': 'Execution_History_Of_SQL_Pattern',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'Execution History Of SQL Pattern',
    'type': 'primary',
    'size': 'mini',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'Execution_History_Of_SQL_Pattern' }
  }
]
const FrequentSQLStatistics = [
  { id: 'click', widget: 'click', position: 'right', label: '', type: 'primary', size: 'mini', icon: 'el-icon-refresh' }
  // { id: 'checks', widget: 'checks', position: 'right', props: { label: 'label', value: 'visible' } }
]

const FrequentSQLStatisticsFoot = [
  {
    'id': 'SQL_Evaluator',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'SQL Evaluator',
    'type': 'primary',
    'size': 'mini',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'SQL_Evaluator' }
  },
  {
    'id': 'Execution_History_Of_SQL_Pattern',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'Execution History Of SQL Pattern',
    'type': 'primary',
    'size': 'mini',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'Execution_History_Of_SQL_Pattern' }
  }
]
const SequentialScanSQLStatistics = [
  { id: 'click', widget: 'click', position: 'right', label: '', type: 'primary', icon: 'el-icon-refresh' }
  // { id: 'checks', widget: 'checks', position: 'right', props: { label: 'label', value: 'visible' } }
]
const SequentialScanSQLStatisticsFoot = [
  {
    'id': 'SQL_Evaluator',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'SQL Evaluator',
    'type': 'primary',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'SQL_Evaluator' }
  },
  {
    'id': 'Execution_History_Of_SQL_Pattern',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'Execution History Of SQL Pattern',
    'type': 'primary',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'Execution_History_Of_SQL_Pattern' }
  }
]

const UnresolvedEventList = [
  { id: 'click', widget: 'click', position: 'right', label: '', type: 'primary', icon: 'el-icon-refresh' }
]
const UnresolvedEventListFoot = [
  {
    'id': 'Show_Detected_Event_Details',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'Show Detected Event Details',
    'type': 'primary',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'Show_Detected_Event_Details' }
  },
  {
    'id': 'Get_Event_Notification_List',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'Get Event Notification List',
    'type': 'primary',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'Get_Event_Notification_List' }
  }
]
const ResolvedEventList = [
  { id: 'click', widget: 'click', position: 'right', label: '', type: 'primary', icon: 'el-icon-refresh' }
]
const ResolvedEventListFoot = [
  {
    'id': 'Show_Detected_Event_Details',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'Show Detected Event Details',
    'type': 'primary',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'Show_Detected_Event_Details' }
  },
  {
    'id': 'Show_Resolved_Event_Details',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'Show Resolved Event Details',
    'type': 'primary',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'Show_Resolved_Event_Details' }
  },
  {
    'id': 'Get_Event_Notification_List',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'Get Event Notification List',
    'type': 'primary',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'Get_Event_Notification_List' }
  }
]
const EventList = [
  { id: 'click', widget: 'click', position: 'right', label: '', type: 'primary', icon: 'el-icon-refresh' }
]
const EventListFoot = [
  {
    'id': 'Show_Detected_Event_Details',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'Show Detected Event Details',
    'type': 'primary',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'Show_Detected_Event_Details' }
  },
  {
    'id': 'Show_Resolved_Event_Details',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'Show Resolved Event Details',
    'type': 'primary',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'Show_Resolved_Event_Details' }
  },
  {
    'id': 'Get_Event_Notification_List',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'Get Event Notification List',
    'type': 'primary',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'Get_Event_Notification_List' }
  }
]
const AlertDeliveryHistory = [
  { id: 'click', widget: 'click', position: 'right', label: '', type: 'primary', icon: 'el-icon-refresh' }
]
const AlertDeliveryHistoryFoot = [
  {
    'id': 'Get_Event_Notification_List',
    'widget': 'routerLink',
    'position': 'right',
    'label': 'Get Event Notification List',
    'type': 'primary',
    'icon': 'el-icon-caret-bottom',
    'checkQueryNotNull': true,
    'checkQueryNotNullErrorMessage': '请选择数据行',
    'to': { 'path': 'Get_Event_Notification_List' }
  }
]

export default {
  TopBusySession: config => {
    return TopBusySession
  },
  TopBusySessionFoot: config => {
    return TopBusySessionFoot
  },
  TopIOSessionFoot: config => {
    return TopIOSessionFoot
  },
  ActiveSqlTreeDiagram: config => {
    return ActiveSqlTreeDiagram
  },
  ListAnalysisResult: config => {
    return ListAnalysisResult
  },
  ExecutionHistoryOfSQLPattern: config => {
    return ExecutionHistoryOfSQLPattern
  },
  TrendAnalysis: config => {
    return TrendAnalysis
  },
  HeavySQLStatistics: config => {
    return HeavySQLStatistics
  },
  HeavySQLStatisticsFoot: config => {
    return HeavySQLStatisticsFoot
  },
  FrequentSQLStatistics: config => {
    return FrequentSQLStatistics
  },
  FrequentSQLStatisticsFoot: config => {
    return FrequentSQLStatisticsFoot
  },
  SequentialScanSQLStatistics: config => {
    return SequentialScanSQLStatistics
  },
  SequentialScanSQLStatisticsFoot: config => {
    return SequentialScanSQLStatisticsFoot
  },
  UnresolvedEventList: config => {
    return UnresolvedEventList
  },
  UnresolvedEventListFoot: config => {
    return UnresolvedEventListFoot
  },
  ResolvedEventList: config => {
    return ResolvedEventList
  },
  ResolvedEventListFoot: config => {
    return ResolvedEventListFoot
  },
  EventList: config => {
    return EventList
  },
  EventListFoot: config => {
    return EventListFoot
  },
  AlertDeliveryHistory: config => {
    return AlertDeliveryHistory
  },
  AlertDeliveryHistoryFoot: config => {
    return AlertDeliveryHistoryFoot
  }
}
