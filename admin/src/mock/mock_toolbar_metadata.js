import { param2Obj } from '@/utils/param2Obj'
// import ExportHtmlTable from './ExportHtmlTable'
import { syncHttpGet } from '@/utils/http'

let systemConfig = {}
syncHttpGet('./static/config/system.json', {}, (data, textStatus, jqXHR) => {
  systemConfig = data
})

const ApiProject = systemConfig.api_project
const Connection_Operactions = {
  Active_SQL: { id: 'Active_SQL',
    widget: 'emitEvent',
    position: 'right',
    subscribe: true,
    label: 'Active SQL',
    $label: 'Active_SQL',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: true,
    checkQueryNotNullErrorMessage: 'Please select the row data',
    $checkQueryNotNullErrorMessage: 'confirm.checkQuery',
    queryKeys: ['session'],
    eventArguments: {
      label: 'Active SQL',
      $label: 'button.Active_SQL',
      component: 'ActiveSql',
      props: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=Columns',
            children: []
          }
        ],
        table: {
          showSelectCheckbox: false,
          url: '/' + ApiProject + '/immediatelyCommand/activeSql',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=ActiveSQL'
          },
          pagination: {
            enable: false,
            layout: undefined
          }
        }
      }
    }
  },
  Active_SQL_Tree_Diagram: { id: 'Active_SQL_Tree_Diagram',
    widget: 'emitEvent',
    position: 'right',
    subscribe: true,
    label: 'Active SQL Tree Diagram',
    $label: 'Active_SQL_Tree_Diagram',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: true,
    checkQueryNotNullErrorMessage: 'Please select the row data',
    $checkQueryNotNullErrorMessage: 'confirm.checkQuery',
    queryKeys: ['session'],
    eventArguments: {
      label: 'Active SQl Tree Diagram',
      $label: 'button.Active_SQL_Tree_Diagram',
      component: 'ActiveSqlTreeDiagram',
      props: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=TreeGraph',
            children: []
          }
        ],
        url: '/' + ApiProject + '/immediatelyCommand/activeSqlTree'
      }
    }
  },
  Start_Analysis: { id: 'Start_Analysis',
    widget: 'emitEvent',
    position: 'right',
    subscribe: true,
    label: 'Start Analysis',
    $label: 'Start_Analysis',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: true,
    checkQueryNotNullErrorMessage: 'Please select the row data',
    $checkQueryNotNullErrorMessage: 'confirm.checkQuery',
    queryKeys: ['session'],
    eventArguments: {
      label: 'Start Analysis Session',
      $label: 'button.Start_Analysis',
      component: 'StartAnalysis',
      props: {
        // url: '/' + ApiProject + '/immediatelyCommand/listAnalysisJobs',
        // start_analysis_url: '/' + ApiProject + '/immediatelyCommand/apAnalysis',
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=CommonDrillDown',
            children: []
          }],
        table: {
          showSelectCheckbox: false,
          expand: {
            enable: true,
            labelWidth: '100px'
          },
          url: '/' + ApiProject + '/immediatelyCommand/listAnalysisJobs',
          start_analysis_url: '/' + ApiProject + '/immediatelyCommand/apAnalysis',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=List_Analysis_Jobs'
          },
          pagination: {
            enable: true
          },
          export: {
            output: 'Start_Analysis_Session_'
          }
        }
      }
    }
  },
  List_Of_Opened_Table_In_Session: { id: 'List_Of_Opened_Table_In_Session',
    widget: 'emitEvent',
    position: 'right',
    subscribe: true,
    label: 'List Of Opened Table In Session',
    $label: 'List_Of_Opened_Table_In_Session',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: true,
    checkQueryNotNullErrorMessage: 'Please select the row data',
    $checkQueryNotNullErrorMessage: 'confirm.checkQuery',
    queryKeys: ['session'],
    queryKeyMap: {session: 'sessionId'},
    eventArguments: {
      label: 'List Of Opened Table In Session',
      $label: 'button.List_Of_Opened_Table_In_Session',
      component: 'Table',
      props: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=ColumnsDrillDown',
            children: []
          }
        ],
        table: {
          showSelectCheckbox: false,
          url: '/' + ApiProject + '/immediatelyCommand/getSesTables',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=List_Of_Opened_Table_In_Session'
          },
          pagination: {
            enable: false,
            layout: undefined
          }
        }
      }
    }
  }
}

const Operations = {
  SQL_Point_In_Time: { id: 'SQL_Point_In_Time',
    widget: 'emitEvent',
    position: 'right',
    subscribe: true,
    label: 'SQL Point In Time',
    $label: 'SQL_Point_In_Time',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: true,
    checkQueryNotNullErrorMessage: 'Please select a time point on the chart',
    $checkQueryNotNullErrorMessage: 'confirm.checkQueryChart',
    tooltipDisabled: true,
    tooltipContent: 'Please select a time point on the chart',
    eventArguments: {
      label: 'SQL Point In Time',
      $label: 'button.SQL_Point_In_Time',
      component: 'SqlPointInTime',
      props: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=CommonDrillDown',
            children: []
          }
        ],
        table: {
          showSelectCheckbox: false,
          expand: {
            enable: true,
            labelWidth: '100px'
          },
          url: '/' + ApiProject + '/trendAnalysis/sqlPointInTime',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=SQL_Point_In_Time'
          },
          pagination: {
            enable: false
          },
          export: {
            output: 'SQL_Point_In_Time_'
          }
        }
      }
    }
  },
  Top_Busy_OS_Processes: { id: 'Top_Busy_OS_Processes',
    widget: 'emitEvent',
    position: 'right',
    label: 'Top Busy OS Processes',
    $label: 'Top_Busy_OS_Processes',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: false,
    checkQueryNotNullErrorMessage: '',
    eventArguments: {
      label: 'Top Cpu Busy OS Processes',
      $label: 'button.Top_Busy_OS_Processes',
      component: 'TableApi',
      props: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=RealTime',
            children: []
          }
        ],
        table: {
          url: '/' + ApiProject + '/immediatelyCommand/getOsStatistics',
          columns: {
            data: [
              {label: 'PID', $label: 'table.Top_Busy_OS_Processes.PID', prop: 'pid', showOverflowTooltip: true},
              {label: 'USER', $label: 'table.Top_Busy_OS_Processes.USER', prop: 'user', showOverflowTooltip: true},
              {label: 'PR', $label: 'table.Top_Busy_OS_Processes.PR', prop: 'pr', showOverflowTooltip: true},
              {label: 'VIRT', $label: 'table.Top_Busy_OS_Processes.VIRT', prop: 'virt', showOverflowTooltip: true},
              {label: 'SHR', $label: 'table.Top_Busy_OS_Processes.SHR', prop: 'shr', showOverflowTooltip: true},
              {label: 'S', $label: 'table.Top_Busy_OS_Processes.S', prop: 's', showOverflowTooltip: true},
              {label: '%CPU', $label: 'table.Top_Busy_OS_Processes.CPU_', prop: '%cpu', showOverflowTooltip: true},
              {label: '%MEM', $label: 'table.Top_Busy_OS_Processes.MEM', prop: '%mem', showOverflowTooltip: true},
              {label: 'TIME+', $label: 'table.Top_Busy_OS_Processes.TIME_', prop: 'time+', showOverflowTooltip: true},
              {label: 'COMMAND', $label: 'table.Top_Busy_OS_Processes.COMMAND', prop: 'command', showOverflowTooltip: true, minWidth: 100},
              {label: 'UserName', $label: 'table.Top_Busy_OS_Processes.UserName', prop: 'username', showOverflowTooltip: true},
              {label: 'PRI', $label: 'table.Top_Busy_OS_Processes.PRI', prop: 'pri', showOverflowTooltip: true},
              {label: 'NICE', $label: 'table.Top_Busy_OS_Processes.NICE', prop: 'nice', showOverflowTooltip: true},
              {label: 'SIZE', $label: 'table.Top_Busy_OS_Processes.SIZE', prop: 'size', showOverflowTooltip: true},
              {label: 'RES', $label: 'table.Top_Busy_OS_Processes.RES', prop: 'res', showOverflowTooltip: true},
              {label: 'STATE', $label: 'table.Top_Busy_OS_Processes.STATE', prop: 'state', showOverflowTooltip: true},
              {label: 'TIME', $label: 'table.Top_Busy_OS_Processes.TIME', prop: 'time', showOverflowTooltip: true},
              {label: 'WCPU', $label: 'table.Top_Busy_OS_Processes.WCPU', prop: 'wcpu', showOverflowTooltip: true},
              {label: 'CPU', $label: 'table.Top_Busy_OS_Processes.CPU', prop: 'cpu', showOverflowTooltip: true},
              {label: 'TTY', $label: 'table.Top_Busy_OS_Processes.TTY', prop: 'tty', showOverflowTooltip: true},
              {label: 'NI', $label: 'table.Top_Busy_OS_Processes.NI', prop: 'ni', showOverflowTooltip: true},
              {label: '%WCPU', $label: 'table.Top_Busy_OS_Processes.WCPU_P', prop: '%wcpu', showOverflowTooltip: true}
            ],
            url: '/MOCK/TABLE_METADATA?id=Top_Busy_OS_Processes'
          },
          pagination: {
            enable: false,
            layout: undefined
          },
          export: {
            output: 'Top_Busy_OS_Processes_'
          }
        }
      }
    }
  },
  Top_Busy_Session: { id: 'Top_Busy_Session',
    widget: 'emitEvent',
    position: 'right',
    label: 'Current Busy Session',
    $label: 'Top_Busy_Session',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: false,
    checkQueryNotNullErrorMessage: '',
    eventArguments: {
      label: 'Top Busy Session',
      $label: 'button.Top_Busy_Session',
      component: 'Table',
      props: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=RealTimeDrillDown',
            children: []
          }
        ],
        table: {
          showSelectCheckbox: false,
          url: '/' + ApiProject + '/immediatelyCommand/topBusySession',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=Top_Busy_Session'
          },
          pagination: {
            enable: false,
            layout: undefined
          },
          export: {
            output: 'Top_Busy_Session_'
          }
        }
      }
    }
  },
  DB_Engine_Wait_Conditions: { id: 'DB_Engine_Wait_Conditions',
    widget: 'emitEvent',
    position: 'right',
    label: 'DB Engine Wait Conditions',
    $label: 'DB_Engine_Wait_Conditions',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: false,
    checkQueryNotNullErrorMessage: '',
    eventArguments: {
      label: 'DB Engine Wait Conditions',
      $label: 'button.DB_Engine_Wait_Conditions',
      component: 'Table',
      props: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=CommonDrillDown',
            children: []
          }
        ],
        table: {
          showSelectCheckbox: false,
          url: '/' + ApiProject + '/immediatelyCommand/onstatGconn',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=DB_Engine_Wait_Conditions'
          },
          pagination: {
            enable: false,
            layout: undefined
          },
          export: {
            output: 'DB_Engine_Wait_Conditions_'
          }
        }
      }
    }
  },
  Table_Related_SQL: { id: 'Table_Related_SQL',
    widget: 'emitEvent',
    position: 'right',
    subscribe: true,
    label: 'Table Related SQL',
    $label: 'Table_Related_SQL',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: true,
    checkQueryNotNullErrorMessage: 'Please select the row data',
    $checkQueryNotNullErrorMessage: 'confirm.checkQuery',
    queryKeys: ['database', 'table'],
    eventArguments: {
      label: 'Table Related SQL',
      $label: 'button.Table_Related_SQL',
      component: 'Table',
      props: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=ColumnsDrillDown',
            children: []
          }
        ],
        table: {
          showSelectCheckbox: false,
          url: '/' + ApiProject + '/DBSystemOptimization/tableRelatedSQL',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=Table_Related_SQL'
          },
          pagination: {
            enable: false,
            layout: undefined
          }
        }
      }
    }
  },
  Active_Connections: { id: 'Active_Connections',
    widget: 'emitEvent',
    position: 'right',
    label: 'Active Connections',
    $label: 'Active_Connections',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: false,
    checkQueryNotNullErrorMessage: '',
    eventArguments: {
      label: 'Active Connections',
      $label: 'button.Active_Connections',
      component: 'Table',
      props: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=RealTimeDrillDown',
            children: []
          }
        ],
        table: {
          showSelectCheckbox: false,
          url: '/' + ApiProject + '/immediatelyCommand/activeConnection',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=Active_Connections'
          },
          pagination: {
            enable: false,
            layout: undefined
          },
          export: {
            output: 'Active_Connections_'
          }
        }
      }
    }
  },
  Top_Memory_Session: { id: 'Top_Memory_Session',
    widget: 'emitEvent',
    position: 'right',
    label: 'Top Memory Session',
    $label: 'Top_Memory_Session',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: false,
    checkQueryNotNullErrorMessage: '',
    eventArguments: {
      label: 'Top Memory Session',
      $label: 'button.Top_Memory_Session',
      component: 'Table',
      props: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=RealTimeDrillDown',
            children: []
          }
        ],
        table: {
          showSelectCheckbox: false,
          url: '/' + ApiProject + '/immediatelyCommand/topMemSes',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=Top_Memory_Consuming_Session'
          },
          pagination: {
            enable: false,
            layout: undefined
          },
          export: {
            output: 'Top_Memory_Consuming_Session_'
          }
        }
      }
    }
  },
  DB_System_Memory_Pool: { id: 'DB_System_Memory_Pool',
    widget: 'emitEvent',
    position: 'right',
    label: 'DB System Memory Pool',
    $label: 'DB_System_Memory_Pool',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: false,
    checkQueryNotNullErrorMessage: '',
    eventArguments: {
      label: 'DB System Memory Pool',
      $label: 'button.DB_System_Memory_Pool',
      component: 'Table',
      props: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=CommonDrillDown',
            children: []
          }
        ],
        table: {
          showSelectCheckbox: false,
          url: '/' + ApiProject + '/immediatelyCommand/sysMemPool',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=DBSystem_Memory_Pool'
          },
          pagination: {
            enable: false,
            layout: undefined
          },
          export: {
            output: 'DBSystem_Memory_Pool_'
          }
        }
      }
    }
  }
}
const DiffOperations = {
  Diff_Cost_Sql_Pattern: { id: 'Diff_Cost_Sql_Pattern',
    widget: 'emitEvent',
    position: 'right',
    subscribe: false,
    label: 'Diff Cost Sql Pattern',
    $label: 'Diff_Cost_Sql_Pattern',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: true,
    checkQueryNotNullErrorMessage: 'Parameter cannot be empty',
    queryKeys: [],
    eventArguments: {
      label: 'Diff Cost Sql Pattern',
      $label: 'button.Diff_Cost_Sql_Pattern',
      component: 'DiffSqlPattern',
      props: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=CommonDrillDown',
            children: []
          }
        ],
        table: {
          showSelectCheckbox: false,
          expand: {
            enable: true,
            labelWidth: '100px'
          },
          url: '/' + ApiProject + '//acmJob/sqlAcm',
          params: {
            orderby: 'costt'
          },
          columns: {
            url: '/MOCK/TABLE_METADATA?id=Diff_Cost_Sql_Pattern'
          },
          pagination: {
            enable: false,
            layout: undefined
          },
          export: {
            output: 'Diff_Cost_Sql_Pattern_'
          }
        }
      }
    }
  },
  Diff_Frequency_Sql_Pattern: { id: 'Diff_Frequency_Sql_Pattern',
    widget: 'emitEvent',
    position: 'right',
    subscribe: false,
    label: 'Diff Frequency Sql Pattern',
    $label: 'Diff_Frequency_Sql_Pattern',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: true,
    checkQueryNotNullErrorMessage: 'Parameter cannot be empty',
    queryKeys: [],
    eventArguments: {
      label: 'Diff Frequency Sql Pattern',
      $label: 'button.Diff_Frequency_Sql_Pattern',
      component: 'DiffSqlPattern',
      props: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=CommonDrillDown',
            children: []
          }
        ],
        table: {
          showSelectCheckbox: false,
          expand: {
            enable: true,
            labelWidth: '100px'
          },
          url: '/' + ApiProject + '//acmJob/sqlAcm',
          params: {
            orderby: 'freq'
          },
          columns: {
            url: '/MOCK/TABLE_METADATA?id=Diff_Frequency_Sql_Pattern'
          },
          pagination: {
            enable: false,
            layout: undefined
          },
          export: {
            output: 'Diff_Frequency_Sql_Pattern_'
          }
        }
      }
    }
  },
  Diff_Weight_Sql_Pattern: { id: 'Diff_Weight_Sql_Pattern',
    widget: 'emitEvent',
    position: 'right',
    subscribe: false,
    label: 'Diff Weight Sql Pattern',
    $label: 'Diff_Weight_Sql_Pattern',
    type: 'text',
    size: 'mini',
    icon: 'el-icon-arrow-down',
    checkQueryNotNull: true,
    checkQueryNotNullErrorMessage: 'Parameter cannot be empty',
    queryKeys: [],
    eventArguments: {
      label: 'Diff Weight Sql Pattern',
      $label: 'button.Diff_Weight_Sql_Pattern',
      component: 'DiffSqlPattern',
      props: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=CommonDrillDown',
            children: []
          }
        ],
        table: {
          showSelectCheckbox: false,
          expand: {
            enable: true,
            labelWidth: '100px'
          },
          url: '/' + ApiProject + '//acmJob/sqlAcm',
          params: {
            orderby: 'weight'
          },
          columns: {
            url: '/MOCK/TABLE_METADATA?id=Diff_Weight_Sql_Pattern'
          },
          pagination: {
            enable: false,
            layout: undefined
          },
          export: {
            output: 'Diff_Weight_Sql_Pattern_'
          }
        }
      }
    }
  }
}

const TOOLBAR = {
  REFRESH: { id: 'refresh', widget: 'click', position: 'right', label: '', type: 'primary', size: 'mini', icon: 'el-icon-refresh', tooltipDisabled: false, tooltipContent: 'Refresh', tooltipPlacement: 'bottom', tooltipEffect: 'dark' },
  ADD: { id: 'add', widget: 'click', position: 'left', label: 'ADD', $label: 'ADD', type: 'primary', size: 'mini', icon: 'el-icon-edit' },
  COLUMNS_SELECT: { id: 'checks', widget: 'checks', size: 'mini', position: 'right', props: {'label': 'label', 'value': 'visible'}, tooltipDisabled: false, tooltipContent: 'Columns_Select', tooltipPlacement: 'bottom', tooltipEffect: 'dark' },
  Help: { id: 'help', widget: 'dialogIframe', type: 'primary', size: 'mini', position: 'right', icon: 'el-icon-question', title: 'dbSonar  Online Help', $title: 'form.dbSonarOnlineHelp', src: './static/help/en/hint/mainIndex.htm', tooltipDisabled: false, tooltipContent: 'help', tooltipPlacement: 'bottom', tooltipEffect: 'dark' },
  ExportExcel: { id: 'exportTable', widget: 'exportTable', type: 'primary', size: 'mini', position: 'right', icon: 'el-icon-cn-shangchuandaochu', tooltipDisabled: false, tooltipContent: 'exportTable', tooltipPlacement: 'bottom', tooltipEffect: 'dark' },
  AUTO_REFRESH: { id: 'auto_refresh', widget: 'reapeatCountDownTimer', type: 'primary', size: 'mini', position: 'right', label: '', icon: 'el-icon-material-replay30', tooltipDisabled: false, tooltipContent: 'Auto_Refresh', tooltipPlacement: 'bottom', tooltipEffect: 'dark' },
  AUTO_REFRESH1: { id: 'auto_refresh', widget: 'reapeatCountDownTimer', type: 'primary', size: 'mini', position: 'right', label: '', icon: 'el-icon-material-replay30', options: [{value: 0, label: '00'}, {value: 10, label: '10'}, {value: 15, label: '15'}], tooltipDisabled: false, tooltipContent: 'Auto_Refresh', tooltipPlacement: 'bottom', tooltipEffect: 'dark' },
  Enlarge: { id: 'enlarge', widget: 'emitEvent', position: 'right', label: '', type: 'primary', size: 'mini', tooltipDisabled: false, tooltipPlacement: 'bottom', tooltipEffect: 'dark', collapseStatus: { dis_icons: { icon: 'el-icon-zoom-out', tooltipContent: 'Zoom_Out' }, enl_icons: { icon: 'el-icon-zoom-in', tooltipContent: 'Enlarge' }, zoom_icons: {icon: 'el-icon-zoom-out', tooltipContent: 'Zoom_Out'} } }
}

const METADATA = {
  Common: [TOOLBAR.COLUMNS_SELECT, TOOLBAR.REFRESH, TOOLBAR.ExportExcel, TOOLBAR.Help],
  CommonDrillDown: [TOOLBAR.COLUMNS_SELECT, TOOLBAR.REFRESH, TOOLBAR.ExportExcel, TOOLBAR.Help, TOOLBAR.Enlarge],
  Refresh: [TOOLBAR.REFRESH],
  TreeGraph: [TOOLBAR.AUTO_REFRESH, TOOLBAR.REFRESH, TOOLBAR.Enlarge],
  Columns: [TOOLBAR.COLUMNS_SELECT],
  ColumnsDrillDown: [TOOLBAR.COLUMNS_SELECT, TOOLBAR.Enlarge],
  RealTime: [TOOLBAR.AUTO_REFRESH, TOOLBAR.COLUMNS_SELECT, TOOLBAR.REFRESH, TOOLBAR.ExportExcel, TOOLBAR.Help],
  RealTime1: [TOOLBAR.AUTO_REFRESH1, TOOLBAR.COLUMNS_SELECT, TOOLBAR.REFRESH, TOOLBAR.ExportExcel, TOOLBAR.Help],
  RealTimeDrillDown: [TOOLBAR.AUTO_REFRESH, TOOLBAR.COLUMNS_SELECT, TOOLBAR.REFRESH, TOOLBAR.ExportExcel, TOOLBAR.Help, TOOLBAR.Enlarge],
  Empty: [],
  ActiveSQL_Bottom: [],

  Session_DrillDown: [
    Connection_Operactions.Active_SQL,
    Connection_Operactions.Active_SQL_Tree_Diagram,
    Connection_Operactions.Start_Analysis
  ],

  TableInUsed: [
    TOOLBAR.REFRESH
  ],
  RelatedSQL_Bottom: [],
  CpuBusyRate_Bottom: [
    Operations.SQL_Point_In_Time,
    { id: 'Active_DB_Connection',
      widget: 'routerLink',
      position: 'right',
      label: 'Active DB Connection',
      $label: 'Active_DB_Connection',
      type: 'text',
      size: 'mini',
      icon: 'el-icon-arrow-down',
      checkQueryNotNull: true,
      checkQueryNotNullErrorMessage: '请设置参数',
      to: {
        path: 'Active_DB_Connection'
      }
    },
    { id: 'DB_VP_Busy_Rate',
      widget: 'routerLink',
      position: 'right',
      label: 'DB VP Busy Rate',
      type: 'text',
      size: 'mini',
      icon: 'el-icon-arrow-down',
      checkQueryNotNull: true,
      checkQueryNotNullErrorMessage: '请设置参数',
      to: {
        path: 'DB_VP_Busy_Rate'
      }
    },
    { id: 'VP_Queue',
      widget: 'routerLink',
      position: 'right',
      label: 'VP Queue',
      type: 'text',
      size: 'mini',
      icon: 'el-icon-arrow-down',
      checkQueryNotNull: true,
      checkQueryNotNullErrorMessage: '请设置参数',
      to: {
        path: 'VP_Queue'
      }
    }
  ],
  CpuBusyRate_Bottom2: [
    Operations.SQL_Point_In_Time,
    Operations.Top_Busy_OS_Processes,
    Operations.Top_Busy_Session
  ],
  Memory_Segment_DrillDown: [
    Operations.Active_Connections,
    Operations.Top_Busy_Session,
    Operations.Top_Memory_Session,
    Operations.DB_System_Memory_Pool
  ],
  Trend_Analysis_Bottom: [
    Operations.SQL_Point_In_Time
  ],
  HealthCheck_Task: [
    TOOLBAR.ADD, TOOLBAR.COLUMNS_SELECT, TOOLBAR.REFRESH
  ],
  HealthCheck_Strategy: [
    TOOLBAR.ADD, TOOLBAR.REFRESH
  ],

  Real_Time: [
    { id: 'Top_Busy_OS_Processes',
      widget: 'routerLink',
      position: 'right',
      label: 'Top Busy OS Processes',
      $label: 'Top_Busy_OS_Processes',
      type: 'text',
      size: 'mini',
      icon: 'el-icon-arrow-down',
      checkQueryNotNull: false,
      checkQueryNotNullErrorMessage: '',
      to: {
        path: 'Top_Busy_OS_Processes'
      }
    },
    { id: 'Top_Busy_Session',
      widget: 'routerLink',
      position: 'right',
      label: 'Top Busy Session',
      type: 'text',
      size: 'mini',
      icon: 'el-icon-arrow-down',
      checkQueryNotNull: false,
      checkQueryNotNullErrorMessage: '',
      to: {
        path: 'Top_Busy_Session'
      }
    }
  ],

  DeadLocked_Connections_DrillDown: [
    Connection_Operactions.Active_SQL,
    Connection_Operactions.Active_SQL_Tree_Diagram,
    Connection_Operactions.Start_Analysis,
    Operations.DB_Engine_Wait_Conditions
  ],
  Top_IO_Session_DrillDown: [
    Connection_Operactions.Active_SQL,
    Connection_Operactions.Active_SQL_Tree_Diagram,
    Connection_Operactions.Start_Analysis,
    Connection_Operactions.List_Of_Opened_Table_In_Session
  ],
  Setting_Email: [
    TOOLBAR.ADD, TOOLBAR.REFRESH
  ],
  Top_Running_SQL_DrillDown: [
    Connection_Operactions.Active_SQL_Tree_Diagram,
    Connection_Operactions.Start_Analysis
  ],
  Table_DrillDown: [
    Operations.Table_Related_SQL
  ],
  Acm_Analysis: [
    DiffOperations.Diff_Cost_Sql_Pattern,
    DiffOperations.Diff_Frequency_Sql_Pattern,
    DiffOperations.Diff_Weight_Sql_Pattern,
    Operations.SQL_Point_In_Time
  ]
}
const i18n_namespace = 'button'

export default {
  GET: config => {
    const { id } = param2Obj(config.url)
    if (id) {
      const buttons = JSON.parse(JSON.stringify(METADATA[id]))
      buttons.forEach(bt => {
        if (bt.$label) {
          bt.$label = i18n_namespace + '.' + bt.$label
        }
      })
      return buttons
    }
    return []
  }
}
