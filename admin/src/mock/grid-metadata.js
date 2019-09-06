import '@/utils/date'

const DBSpaceInformation = [
  {'label': 'DBSNum', 'prop': 'dbsnum', width: '100px'},
  {'label': 'DBSpace', 'prop': 'dbspace', width: '100px'},
  {'label': 'Type', 'prop': 'type', width: '80px'},
  {'label': 'N Chunks', 'prop': 'nChunks', width: '100px'},
  {'label': 'SIZE(MB)', 'prop': 'size', width: '100px'},
  {'label': 'Used(MB)', 'prop': 'used_mb', width: '100px'},
  {'label': 'Free(MB)', 'prop': 'free', width: '100px'},
  {'label': 'used(%)', 'prop': 'used', widget: 'progress', props: { gradient: [{status: 'success', min: 0, max: 90}, {status: 'exception', min: 90, max: 100}] }},
  {'label': 'Alert Threshold(%)', 'prop': 'alertthreshold', widget: 'progress', props: { gradient: [{status: 'success', min: 0, max: 100}, {status: 'exception', min: 90, max: 100}] }}
]
const DBSpaceIOInformation = [
  {'label': 'DBSNum', 'prop': 'dbsnum'},
  {'label': 'DBSpace', 'prop': 'dbspace'},
  {'label': 'Type', 'prop': 'type'},
  {'label': 'SIZE(MB)', 'prop': 'size'},
  {'label': 'Used(MB)', 'prop': 'used_mb'},
  {'label': 'Free(MB)', 'prop': 'free'},
  {'label': 'Disk Reads', 'prop': 'diskReads'},
  {'label': 'Disk Writes', 'prop': 'diskWrites'},
  {'label': 'Disk Reads(MB)', 'prop': 'diskReads_mb'},
  {'label': 'Disk Writes(MB)', 'prop': 'diskWrite_mb'}
]
const ChunkInformation = [
  {'label': 'DBSNum', 'prop': 'dbsnum'},
  {'label': 'DBSpace', 'prop': 'dbspace'},
  {'label': 'Type', 'prop': 'type'},
  {'label': 'ChunkNum', 'prop': 'chunkNum'},
  {'label': 'Status', 'prop': 'status'},
  {'label': 'Used(MB)', 'prop': 'used_mb'},
  {'label': 'Free(MB)', 'prop': 'free'},
  {'label': 'used(%)', 'prop': 'used', widget: 'progress', props: { gradient: [{status: 'success', min: 0, max: 100}, {status: 'exception', min: 90, max: 100}] }},
  {'label': 'File', 'prop': 'file', showOverflowTooltip: true}
]

const ChunkIOInformation = [
  {'label': 'DBSNum', 'prop': 'dbsnum'},
  {'label': 'DBSpace', 'prop': 'dbspace'},
  {'label': 'Type', 'prop': 'type'},
  {'label': 'ChunkNum', 'prop': 'chunkNum'},
  {'label': 'Status', 'prop': 'status'},
  {'label': 'Size(MB)', 'prop': 'size'},
  {'label': 'Used(MB)', 'prop': 'used_mb'},
  {'label': 'Free(MB)', 'prop': 'free'},
  {'label': 'Disk Reads', 'prop': 'diskReads'},
  {'label': 'Disk Writes', 'prop': 'diskWrites'},
  {'label': 'Disk Reads(MB)', 'prop': 'diskReads_mb'},
  {'label': 'Disk Writes(MB)', 'prop': 'diskWrites_mb'},
  {'label': 'File', 'prop': 'file', showOverflowTooltip: true}
]

const TopLockWaitTable = [
  {'label': 'Database', 'prop': 'database'},
  {'label': 'Table', 'prop': 'table'},
  {'label': 'Lock Mode', 'prop': 'lockMode'},
  {'label': 'Lock Reqs', 'prop': 'lockReqs'},
  {'label': 'Lock Timeouts', 'prop': 'lockTimeouts'},
  {'label': 'Disk Reads', 'prop': 'diskReads'},
  {'label': 'Disk Writes', 'prop': 'diskWrites'},
  {'label': 'Buf Reads', 'prop': 'bufReads'},
  {'label': 'Buf Writes', 'prop': 'bufWrites'},
  {'label': 'SeqScan', 'prop': 'seqScan'}
]
const TopBusyTable = [
  {'label': 'DBSpace', 'prop': 'dbspace'},
  {'label': 'Database', 'prop': 'database'},
  {'label': 'Table', 'prop': 'table'},
  {'label': 'Size(KB)', 'prop': 'size'},
  {'label': 'N Rows', 'prop': 'rows'},
  {'label': 'Buf Reads', 'prop': 'bufReads'},
  {'label': 'Buf Writes', 'prop': 'bufWrites'},
  {'label': 'Seqscans', 'prop': 'seqscans'},
  {'label': 'Temp Table', 'prop': 'tempTable'},
  {'label': 'Sort File', 'prop': 'sortFile'},
  {'label': 'PermSysTmpTbl', 'prop': 'permSysTmptbl', width: '150px'},
  {'label': 'Page Lock', 'prop': 'pageLock'},
  {'label': 'Re-Hit%', 'prop': 'reHit'}
]

const OutdatedUpdateStatisticsTable = [
  {'label': 'Database', 'prop': 'database'},
  {'label': 'Table', 'prop': 'table'},
  {'label': 'Changed%', 'prop': 'change'},
  {'label': 'Actual Rows', 'prop': 'actualRows'},
  {'label': 'Rows Estimated', 'prop': 'rowsEstimated'},
  {'label': 'Buf Reads', 'prop': 'bufReads'},
  {'label': 'Buf Writes', 'prop': 'bufWrites'},
  {'label': 'Seqscans', 'prop': 'seqscans'}
]
const IncompletedUpdateStatisticsTable = [
  {'label': 'Database', 'prop': 'database'},
  {'label': 'Table', 'prop': 'table'},
  {'label': 'Index', 'prop': 'index'},
  {'label': 'distribution', 'prop': 'distribution'},
  {'label': 'N Rows', 'prop': 'nRows'},
  {'label': 'Buf Reads', 'prop': 'bufReads'},
  {'label': 'Buf Writes', 'prop': 'bufWrites'},
  {'label': 'Seqscans', 'prop': 'seqscans'}
]
const DBParameterAnalysisReport = [
  {label: 'DB Parameter Name', prop: 'DB Parameter Name', showOverflowTooltip: true},
  {label: 'Effective Value', prop: 'Effective Value', showOverflowTooltip: true},
  {label: 'Original Value', prop: 'Original Value', showOverflowTooltip: true},
  {label: 'Suggestions', prop: 'Suggestions', showOverflowTooltip: true}
]

const ActiveConnections = [
  {label: 'Session', prop: 'session', showOverflowTooltip: true},
  {label: 'User', prop: 'user', showOverflowTooltip: true},
  {label: 'Connect Time', prop: 'connectTime', showOverflowTooltip: true},
  {label: 'Idle Time', prop: 'idleTime', showOverflowTooltip: true},
  {label: 'Lock Held', prop: 'lockHeld', showOverflowTooltip: true},
  {label: 'Lock Wait', prop: 'lockWait', showOverflowTooltip: true},
  {label: 'Buf Reads', prop: 'bufReads', showOverflowTooltip: true},
  {label: 'Buf Writes', prop: 'bufWrites', showOverflowTooltip: true},
  {label: 'Host', prop: 'host', showOverflowTooltip: true},
  {label: 'PID', prop: 'pid', showOverflowTooltip: true}
]
const ListAnalysisJobs = [
  {label: 'Analysis Start Time', prop: 'analysisStartTime', showOverflowTooltip: true},
  {label: 'Analysis Duration', prop: 'analysisDuration', showOverflowTooltip: true},
  {label: 'Buf Reads', prop: 'bufReads', showOverflowTooltip: true},
  {label: 'Buf Writes', prop: 'bufWrites', showOverflowTooltip: true},
  {label: 'Mem Size', prop: 'memSize', showOverflowTooltip: true},
  {label: 'Max Locks', prop: 'maxLocks', showOverflowTooltip: true},
  {label: 'User', prop: 'user', showOverflowTooltip: true},
  {label: 'Session', prop: 'session', showOverflowTooltip: true},
  {label: 'Status', prop: 'status', showOverflowTooltip: true},
  {label: 'ID', prop: 'id', showOverflowTooltip: true}
]
const LockedSessions = [
  {label: 'Database', prop: 'database', showOverflowTooltip: true},
  {label: 'Table', prop: 'table', showOverflowTooltip: true},
  {label: 'PID', prop: 'pid', showOverflowTooltip: true},
  {label: 'Session', prop: 'session', showOverflowTooltip: true},
  {label: 'Lock Holder', prop: 'lockHolder', showOverflowTooltip: true},
  {label: 'Lock Session', prop: 'lockSession', showOverflowTooltip: true},
  {label: 'Lock User', prop: 'lockUser', showOverflowTooltip: true},
  {label: 'Lock Type', prop: 'lockType', showOverflowTooltip: true}
]
const ShowIdleSession = [
  {label: 'Session', prop: 'session', showOverflowTooltip: true},
  {label: 'Host', prop: 'host', showOverflowTooltip: true},
  {label: 'PID', prop: 'pid', showOverflowTooltip: true},
  {label: 'TTY', prop: 'tty', showOverflowTooltip: true},
  {label: 'User', prop: 'user', showOverflowTooltip: true},
  {label: 'Idle Time', prop: 'idleTime', showOverflowTooltip: true},
  {label: 'Lock Hold', prop: 'lockHold', showOverflowTooltip: true},
  {label: 'Lock Wait', prop: 'lockWait', showOverflowTooltip: true},
  {label: 'Buf Reads', prop: 'bufReads', showOverflowTooltip: true},
  {label: 'Buf Writes', prop: 'bufWrites', showOverflowTooltip: true},
  {label: 'Database', prop: 'database', showOverflowTooltip: true}
]
const ShowLockWaits = [
  {label: 'Session', prop: 'session', showOverflowTooltip: true},
  {label: 'Host', prop: 'host', showOverflowTooltip: true},
  {label: 'PID', prop: 'pid', showOverflowTooltip: true},
  {label: 'TTY', prop: 'tty', showOverflowTooltip: true},
  {label: 'User', prop: 'user', showOverflowTooltip: true},
  {label: 'Database', prop: 'database', showOverflowTooltip: true},
  {label: 'Table/Index', prop: 'table/index', showOverflowTooltip: true},
  {label: 'Lock Type', prop: 'lock type', showOverflowTooltip: true}
]
const TableInUsed = [
  {label: 'DB Parameter Name', prop: 'DB_Parameter_Name', showOverflowTooltip: true}
]
const TopBusySession = [
  {label: 'Session', prop: 'session', showOverflowTooltip: true},
  {label: 'User', prop: 'user', showOverflowTooltip: true},
  {label: 'Connected', prop: 'connected', showOverflowTooltip: true},
  {label: 'ToTal OP', prop: 'total op', showOverflowTooltip: true},
  {label: 'OP+', prop: 'op+', showOverflowTooltip: true},
  {label: 'Cost', prop: 'cost', showOverflowTooltip: true},
  {label: 'Seqscans', prop: 'seqscans', showOverflowTooltip: true},
  {label: 'SEQ+', prop: 'seq+', showOverflowTooltip: true},
  {label: 'Lock Reqs', prop: 'lock reqs', showOverflowTooltip: true},
  {label: 'LCK+', prop: 'lck+', showOverflowTooltip: true},
  {label: 'Lock Held', prop: 'lock held', showOverflowTooltip: true},
  {label: 'Database', prop: 'database', showOverflowTooltip: true},
  {label: 'Host', prop: 'host', showOverflowTooltip: true, visible: false},
  {label: 'PID', prop: 'pid', showOverflowTooltip: true, visible: false},
  {label: 'TTY', prop: 'tty', showOverflowTooltip: true, visible: false} // ,
  // {label: 'Operations',
  //   prop: 'operations',
  //   width: '200px',
  //   fixed: 'right',
  //   widget: 'operations',
  //   props: {
  //     options: [
  //       { element: 'dialog-router-link-button',
  //         // prop: '',
  //         props: {
  //           type: 'primary',
  //           size: 'mini',
  //           label: 'Start Analysis Session',
  //           icon: 'el-icon-arrow-down',
  //           checkQueryNotNull: false,
  //           checkQueryNotNullErrorMessage: '请选择数据行',
  //           title: 'Start Analysis Session',
  //           to: {
  //             path: 'Start_Analysis_Session'
  //           }
  //         }
  //       }
  //     ]
  //   }
  // }
]
const TopIOSession = [
  {label: 'Session', prop: 'session', showOverflowTooltip: true},
  {label: 'User', prop: 'user', showOverflowTooltip: true},
  {label: 'Connected', prop: 'connected', showOverflowTooltip: true},
  {label: 'ToTal RW', prop: 'totalRw', showOverflowTooltip: true},
  {label: 'RW+', prop: 'rw', showOverflowTooltip: true},
  {label: 'Disk Reads', prop: 'diskReads', showOverflowTooltip: true},
  {label: 'DskR+', prop: 'dskR', showOverflowTooltip: true},
  {label: 'Disk Writes', prop: 'diskWrites', showOverflowTooltip: true},
  {label: 'DskW+', prop: 'dskW', showOverflowTooltip: true},
  {label: 'SeqScan', prop: 'seqScan', showOverflowTooltip: true},
  {label: 'Database', prop: 'database', showOverflowTooltip: true}
]
const TopMemoryConsumingSession = [
  {label: 'Session', prop: 'session', showOverflowTooltip: true},
  {label: 'User', prop: 'user', showOverflowTooltip: true},
  {label: 'Connected', prop: 'connected', showOverflowTooltip: true},
  {label: 'Mem Allocated', prop: 'memAllocated', showOverflowTooltip: true},
  {label: '% of DB Virtual Memory', prop: 'DB_Virtual_Memory', showOverflowTooltip: true},
  {label: 'Mem Used', prop: 'memUsed', showOverflowTooltip: true},
  {label: 'Sort Mem', prop: 'sortMem', showOverflowTooltip: true},
  {label: 'Lock Hold', prop: 'lockHold', showOverflowTooltip: true},
  {label: 'File Opened', prop: 'fileOpened', showOverflowTooltip: true},
  {label: 'Buf Reads', prop: 'bufReads', showOverflowTooltip: true},
  {label: 'Buf Writes', prop: 'bufWrites', showOverflowTooltip: true},
  {label: 'SeqScan', prop: 'seqScan', showOverflowTooltip: true},
  {label: 'Database', prop: 'database', showOverflowTooltip: true}
]
const TopRunningSQL = [
  {label: 'SEQ', prop: 'seq', showOverflowTooltip: true},
  {label: 'Session', prop: 'session', showOverflowTooltip: true},
  {label: 'User', prop: 'user', showOverflowTooltip: true},
  {label: 'Database', prop: 'database', showOverflowTooltip: true},
  {label: 'Cost', prop: 'cost', showOverflowTooltip: true},
  {label: 'Ret Rows', prop: 'retRows', showOverflowTooltip: true},
  {label: 'SeqScan', prop: 'seqScan', showOverflowTooltip: true},
  {label: 'Brief SQL', prop: 'briefSQL', showOverflowTooltip: true},
  {label: 'Host Vars', prop: 'hostVars', showOverflowTooltip: true}
]

const TopOSProcessList = [
  {label: 'PID', prop: 'pid'},
  {label: 'USER', prop: 'user'},
  {label: 'PR', prop: 'pr'},
  {label: 'VIRT', prop: 'virt'},
  {label: 'SHR', prop: 'shr'},
  {label: 'S', prop: 's'},
  {label: '%CPU', prop: '%cpu'},
  {label: '%MEM', prop: '%mem'},
  {label: 'TIME+', prop: 'time'},
  {label: 'COMMAND', prop: 'command'}
]

const ActiveSqlTreeDiagram = [
  // {label: 'Current Time', prop: 'Current Time', showOverflowTooltip: true},
  {label: 'Session', prop: 'Session'},
  {label: 'Process ID', prop: 'Process ID'},
  {label: 'User', prop: 'User'},
  {label: 'TTY', prop: 'TTY'},
  {label: 'Host', prop: 'Host'},
  {label: 'Database', prop: 'Database'},
  {label: 'Estimated Cost', prop: 'Estimated Cost'},
  {label: 'Estimated Rows', prop: 'Estimated Rows'},
  {label: 'Sequential Scan', prop: 'Sequential Scan'}
]
const StartAnalysisSession = [
  {label: 'Analysis Start Time', prop: 'analysis start time'},
  {label: 'Analysis Duration', prop: 'analysis duration'},
  {label: 'Buf Reads', prop: 'buf reads'},
  {label: 'Buf Writes', prop: 'buf writes'},
  {label: 'Mem Size', prop: 'mem size'},
  {label: 'Max Locks', prop: 'max locks'},
  {label: 'User', prop: 'user'},
  {label: 'Session', prop: 'session'},
  {label: 'Status', prop: 'status', showOverflowTooltip: true},
  {label: 'ID', prop: 'id', width: '50px'},
  {label: 'Seqscans', prop: 'seqscans', visible: false},
  {label: 'Host', prop: 'host', visible: false},
  {label: 'PID', prop: 'pid', visible: false},
  {label: 'Process', prop: 'process', visible: false},
  {label: 'TTY', prop: 'tty', visible: false}
]
const StopAnalysisSession = [
  {label: 'Analysis Start Time', prop: 'analysis start time'},
  {label: 'Analysis Duration', prop: 'analysis duration'},
  {label: 'Buf Reads', prop: 'buf reads'},
  {label: 'Buf Writes', prop: 'buf writes'},
  {label: 'Mem Size', prop: 'mem size'},
  {label: 'Max Locks', prop: 'max locks'},
  {label: 'User', prop: 'user'},
  {label: 'Session', prop: 'session'},
  {label: 'Status', prop: 'status'},
  {label: 'ID', prop: 'id', width: '50px'},
  {label: 'Seqscans', prop: 'seqscans', visible: false},
  {label: 'Host', prop: 'host', visible: false},
  {label: 'PID', prop: 'pid', visible: false},
  {label: 'Process', prop: 'process', visible: false},
  {label: 'TTY', prop: 'tty', visible: false}
]
const ListAnalysisResult = [
  {label: 'SEQ', prop: 'seq'},
  {label: 'Process Time', prop: 'process time'},
  {label: 'Time%', prop: 'time%'},
  {label: 'Cost', prop: 'cost'},
  {label: 'Rows', prop: 'rows'},
  {label: 'SeqScan', prop: 'seqscan'},
  {label: 'Brief SQL', prop: 'brief sql'},
  {label: 'Host Vars', prop: 'host vars'},
  {label: 'Status', prop: 'status'},
  {label: 'HashCode', prop: 'hashcode'}
]

const ExecutionHistoryOfSQLPattern = [
  {label: 'SEQ', prop: 'seq'},
  {label: 'Exec Time', prop: 'exec time'},
  {label: 'Session', prop: 'session'},
  {label: 'User', prop: 'cost'},
  {label: 'Database', prop: 'database'},
  {label: 'Cost', prop: 'cost'},
  {label: 'Ret Rows', prop: 'ret rows'},
  {label: 'SeqScan', prop: 'seqscan'},
  {label: 'Host Vars', prop: 'host vars'},
  {label: 'HashCode', prop: 'hashcode'},
  {label: 'Host', prop: 'host', visible: false},
  {label: 'PID', prop: 'pid', visible: false},
  {label: 'TTY', prop: 'tty', visible: false},
  {label: 'Command', prop: 'command', visible: false}
]

const HeavySQLStatistics = [
  {label: 'SEQ', prop: 'seq'},
  {label: 'Database', prop: 'database'},
  {label: 'Max Cost', prop: 'max cost'},
  {label: 'Min Cost', prop: 'min cost'},
  {label: 'Ret Rows', prop: 'ret rows'},
  {label: 'SeqScan', prop: 'seqscan'},
  {label: 'Frequency', prop: 'frequency'},
  {label: 'Weight', prop: 'weight'},
  {label: 'Brief SQL', prop: 'brief sql'},
  {label: 'Host Vars', prop: 'host vars'},
  {label: 'Hash Code', prop: 'hashcode', visible: false},
  {label: 'SQL', prop: 'sql', visible: false}
]

const FrequentSQLStatistics = [
  {label: 'SEQ', prop: 'seq'},
  {label: 'Database', prop: 'database'},
  {label: 'Max Cost', prop: 'max cost'},
  {label: 'Min Cost', prop: 'min cost'},
  {label: 'Ret Rows', prop: 'ret rows'},
  {label: 'SeqScan', prop: 'seqscan'},
  {label: 'Frequency', prop: 'frequency'},
  {label: 'Weight', prop: 'weight'},
  {label: 'Brief SQL', prop: 'brief sql'},
  {label: 'Host Vars', prop: 'host vars'},
  {label: 'Hash Code', prop: 'hashcode', visible: false},
  {label: 'SQL', prop: 'sql', visible: false}
]

const SequentialScanSQLStatistics = [
  {label: 'SEQ', prop: 'seq'},
  {label: 'Database', prop: 'database'},
  {label: 'Max Cost', prop: 'max cost'},
  {label: 'Min Cost', prop: 'min cost'},
  {label: 'Ret Rows', prop: 'ret rows'},
  {label: 'SeqScan', prop: 'seqscan'},
  {label: 'Frequency', prop: 'frequency'},
  {label: 'Weight', prop: 'weight'},
  {label: 'Brief SQL', prop: 'brief sql'},
  {label: 'Host Vars', prop: 'host vars'},
  {label: 'Hash Code', prop: 'hashcode', visible: false},
  {label: 'SQL', prop: 'sql', visible: false}
]

const UnresolvedEventList = [
  {label: 'ID', prop: 'id'},
  {label: 'Occurrence', prop: 'occurrence'},
  {label: 'Resolution', prop: 'resolution'},
  {label: 'AgentID', prop: 'agentid'},
  {label: 'dbSonar Agent', prop: 'dbsonar agent'},
  {label: 'Severity', prop: 'severity'},
  {label: 'Event', prop: 'event'},
  {label: 'Status', prop: 'status'},
  {label: 'Remark', prop: 'remark'}
]
const ResolvedEventList = [
  {label: 'ID', prop: 'id'},
  {label: 'Occurrence', prop: 'occurrence'},
  {label: 'Resolution', prop: 'resolution'},
  {label: 'AgentID', prop: 'agentid'},
  {label: 'dbSonar Agent', prop: 'dbsonar agent'},
  {label: 'Severity', prop: 'severity'},
  {label: 'Event', prop: 'event'},
  {label: 'Status', prop: 'status'},
  {label: 'Remark', prop: 'remark'}
]
const EventList = [
  {label: 'ID', prop: 'id'},
  {label: 'Occurrence', prop: 'occurrence'},
  {label: 'Resolution', prop: 'resolution'},
  {label: 'AgentID', prop: 'agentid'},
  {label: 'dbSonar Agent', prop: 'dbsonar agent'},
  {label: 'Severity', prop: 'severity'},
  {label: 'Event', prop: 'event'},
  {label: 'Status', prop: 'status'},
  {label: 'Remark', prop: 'remark'}
]
const AlertDeliveryHistory = [
  {label: 'ID', prop: 'id'},
  {label: 'Delivered Time', prop: 'delivered time'},
  {label: 'dbSonar Agent', prop: 'dbsonar agent'},
  {label: 'IP', prop: 'ip'},
  {label: 'Instance', prop: 'instance'},
  {label: 'Event', prop: 'event'},
  {label: 'Severity', prop: 'severity'},
  {label: 'Type', prop: 'type'},
  {label: 'Method', prop: 'method'},
  {label: 'Recipient', prop: 'recipient'},
  {label: 'Target', prop: 'target'},
  {label: 'Retry', prop: 'retry'},
  {label: 'Status', prop: 'status'}
]

export default {
  DBSpaceInformation: config => {
    return DBSpaceInformation
  },
  DBSpaceIOInformation: config => {
    return DBSpaceIOInformation
  },
  ChunkInformation: config => {
    return ChunkInformation
  },
  ChunkIOInformation: config => {
    return ChunkIOInformation
  },
  TopLockWaitTable: config => {
    return TopLockWaitTable
  },
  TopBusyTable: config => {
    return TopBusyTable
  },
  IncompletedUpdateStatisticsTable: config => {
    return IncompletedUpdateStatisticsTable
  },
  OutdatedUpdateStatisticsTable: config => {
    return OutdatedUpdateStatisticsTable
  },
  DBParameterAnalysisReport: config => {
    return DBParameterAnalysisReport
  },

  ActiveConnections: config => {
    return ActiveConnections
  },
  ListAnalysisJobs: config => {
    return ListAnalysisJobs
  },
  LockedSessions: config => {
    return LockedSessions
  },
  ShowIdleSession: config => {
    return ShowIdleSession
  },
  ShowLockWaits: config => {
    return ShowLockWaits
  },
  TableInUsed: config => {
    return TableInUsed
  },
  TopBusySession: config => {
    return TopBusySession
  },
  TopIOSession: config => {
    return TopIOSession
  },
  TopMemoryConsumingSession: config => {
    return TopMemoryConsumingSession
  },
  TopRunningSQL: config => {
    return TopRunningSQL
  },
  TopOSProcessList: config => {
    return TopOSProcessList
  },
  ActiveSqlTreeDiagram: config => {
    return ActiveSqlTreeDiagram
  },
  StartAnalysisSession: config => {
    return StartAnalysisSession
  },
  StopAnalysisSession: config => {
    return StopAnalysisSession
  },
  ListAnalysisResult: config => {
    return ListAnalysisResult
  },
  ExecutionHistoryOfSQLPattern: config => {
    return ExecutionHistoryOfSQLPattern
  },
  HeavySQLStatistics: config => {
    return HeavySQLStatistics
  },
  FrequentSQLStatistics: config => {
    return FrequentSQLStatistics
  },
  SequentialScanSQLStatistics: config => {
    return SequentialScanSQLStatistics
  },
  UnresolvedEventList: config => {
    return UnresolvedEventList
  },
  ResolvedEventList: config => {
    return ResolvedEventList
  },
  EventList: config => {
    return EventList
  },
  AlertDeliveryHistory: config => {
    return AlertDeliveryHistory
  }
}
