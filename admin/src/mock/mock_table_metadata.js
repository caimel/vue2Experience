import {param2Obj} from '@/utils/param2Obj'
import { syncHttpGet } from '@/utils/http'

let systemConfig = {}
syncHttpGet('./static/config/system.json', {}, (data, textStatus, jqXHR) => {
  systemConfig = data
})

const ApiProject = systemConfig.api_project

const Operations = {
  SQL_Evaluator: {
    element: 'dialog-component-link-button',
    // prop: '',
    props: {
      type: 'text',
      size: 'mini',
      label: 'SQL Evaluator',
      $label: 'SQL_Evaluator',
      // icon: 'el-icon-arrow-right',
      component: 'SqlEvaluator',
      compProps: {
        url: '/' + ApiProject + '/immediatelyCommand/evalSql'
      },
      checkQueryNotNull: false,
      checkQueryNotNullErrorMessage: '',
      title: 'SQL Evaluator',
      $title: 'table_operations.SQL_Evaluator',
      queryKeys: ['database', 'hashcode', 'seqscan', 'host vars', 'sql'],
      queryKeyMap: {database: 'database', hashcode: 'hashCode', seqscan: 'seqScan', 'host vars': 'hostVars', sql: 'sql'}
    }
  },
  Table_Info: {
    element: 'dialog-component-link-button',
    // prop: '',
    props: {
      type: 'text',
      size: 'mini',
      label: 'Table Info',
      $label: 'Table_Info',
      // icon: 'el-icon-arrow-right',
      component: 'TableInfo',
      title: 'Table Info',
      $title: 'table_operations.Table_Info',
      // height: '600px',
      width: '60%',
      queryKeys: ['database', 'table']
    }
  },
  Lock_Holding_Connection: {
    element: 'dialog-component-link-button',
    // prop: '',
    props: {
      type: 'text',
      size: 'mini',
      label: 'Lock Holding Connection',
      $label: 'Lock_Holding_Connection',
      // icon: 'el-icon-arrow-right',
      component: 'LockHoldingConnection',
      checkQueryNotNull: false,
      checkQueryNotNullErrorMessage: '',
      title: 'Lock Holding Connection',
      $title: 'table_operations.Lock_Holding_Connection',
      width: '1100px',
      queryKeys: ['session']
    }
  },
  Terminate_Session: {
    element: 'x-confirm-button',
    // prop: '',
    props: {
      id: 'terminateSession',
      type: 'text',
      size: 'mini',
      label: 'Terminate Session',
      $label: 'Terminate_Session',
      // icon: 'el-icon-arrow-right',
      checkParamsNotNull: false,
      checkParamsNotNullErrorMessage: '',
      promptMessage: 'Do you really want to terminate the session ？',
      $promptMessage: 'confirm.Session_Message',
      confirmMessage: '',
      $confirmMessage: 'confirm.Terminate_Success',
      cancelMessage: '',
      confirmButtonText: 'Confirm',
      $confirmButtonText: 'confirm.Confirm',
      cancelButtonText: 'Cancel',
      $cancelButtonText: 'confirm.Cancel',
      url: '/app-sonar-0.1/immediatelyCommand/terminateSession',
      httpMethod: 'get',
      params: {},
      queryKeys: ['session']
    }
  },
  List_Analysis_Result: {
    element: 'dialog-component-link-button',
    // prop: '',
    props: {
      type: 'text',
      size: 'mini',
      label: 'List Analysis Result',
      $label: 'List_Analysis_Result',
      // icon: 'el-icon-arrow-right',
      component: 'ListAnalysisResult',
      title: 'List Analysis Result',
      $title: 'table_operations.List_Analysis_Result',
      // height: '600px',
      width: '60%',
      queryKeys: ['id']
    }
  },
  Clear_Analysis_Result: {
    element: 'x-confirm-button',
    // prop: '',
    props: {
      id: 'clearAnalysisResult',
      type: 'text',
      size: 'mini',
      label: 'Clear Analysis Result',
      $label: 'Clear_Analysis_Result',
      // icon: 'el-icon-arrow-right',
      checkParamsNotNull: false,
      checkParamsNotNullErrorMessage: '',
      promptMessage: 'Do you really want to clear this analysis result ？',
      $promptMessage: 'confirm.Analysis_Message',
      confirmMessage: '',
      $confirmMessage: 'confirm.Clear_Success',
      cancelMessage: '',
      confirmButtonText: 'Confirm',
      $confirmButtonText: 'confirm.Confirm',
      cancelButtonText: 'Cancel',
      $cancelButtonText: 'confirm.Cancel',
      url: '/' + ApiProject + '/immediatelyCommand/clearAnalysisResult',
      httpMethod: 'get',
      params: {},
      queryKeys: ['id']
    }
  },
  Stop_Analysis_Session: {
    element: 'x-confirm-button',
    // prop: '',
    props: {
      id: 'stopAnalysisSession',
      type: 'text',
      size: 'mini',
      label: 'Stop Analysis Session',
      $label: 'Stop_Analysis_Session',
      // icon: 'el-icon-arrow-right',
      checkParamsNotNull: false,
      checkParamsNotNullErrorMessage: '',
      promptMessage: 'Do you really want to stop analysis session ？',
      $promptMessage: 'confirm.Session_Stop_Message',
      confirmMessage: '',
      $confirmMessage: 'confirm.Stop_Success',
      cancelMessage: '',
      confirmButtonText: 'Confirm',
      $confirmButtonText: 'confirm.Confirm',
      cancelButtonText: 'Cancel',
      $cancelButtonText: 'confirm.Cancel',
      url: '/app-sonar-0.1/immediatelyCommand/stopApAnalysis',
      httpMethod: 'get',
      params: {},
      queryKeys: ['id']
    }
  },

  SQL_Cursor_Held_Info: {
    element: 'dialog-component-link-button',
    // prop: '',
    props: {
      type: 'text',
      size: 'mini',
      label: 'SQL Cursor Held Info',
      $label: 'SQL_Cursor_Held_Info',
      // icon: 'el-icon-arrow-right',
      component: 'SqlCursorHeldInfo',
      // checkQueryNotNull: false,
      // checkQueryNotNullErrorMessage: '请选择数据行',
      title: 'SQL Cursor Held Info',
      $title: 'table_operations.SQL_Cursor_Held_Info',
      width: '60%',
      queryKeys: ['session']
    }
  },
  Execution_history_of_sql_pattern: {
    element: 'dialog-component-link-button',
    // prop: '',
    props: {
      type: 'text',
      size: 'mini',
      label: 'Execution history of sql pattern',
      $label: 'Execution_history_of_sql_pattern',
      // icon: 'el-icon-arrow-right',
      component: 'ExecutionHistoryOfSQLPattern',
      checkQueryNotNull: false,
      checkQueryNotNullErrorMessage: '',
      title: 'Execution history of sql pattern',
      $title: 'table_operations.Execution_history_of_sql_pattern',
      queryKeys: ['database', 'hashcode', 'seqscan', 'host vars', 'sql'],
      queryKeyMap: {database: 'database', hashcode: 'hashCode', seqscan: 'seqScan', 'host vars': 'hostVars', sql: 'sql'}
    }
  },

  Chunk_Information: {
    element: 'dialog-component-link-button',
    // prop: '',
    props: {
      type: 'text',
      size: 'mini',
      label: 'Chunk Information',
      $label: 'Chunk_Information',
      // icon: 'el-icon-arrow-right',
      checkQueryNotNull: false,
      checkQueryNotNullErrorMessage: '',
      title: 'Chunk Information',
      $title: 'table_operations.Chunk_Information',
      queryKeys: ['dbsnum'],
      component: 'Table',
      compProps: {
        table: {
          showSelectCheckbox: false,
          url: '/' + ApiProject + '/DBSystemOptimization/chunkInformation',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=Chunk_Information'
          },
          pagination: {
            enable: false,
            layout: undefined
          },
          heightFit: false
        }
      }
    }
  },
  Chunk_IO_Information: {
    element: 'dialog-component-link-button',
    // prop: '',
    props: {
      type: 'text',
      size: 'mini',
      label: 'Chunk_I/O_Information',
      $label: 'Chunk_IO_Information',
      // icon: 'el-icon-arrow-right',
      checkQueryNotNull: false,
      checkQueryNotNullErrorMessage: '',
      title: 'Chunk I/O Information',
      $title: 'table_operations.Chunk_IO_Information',
      queryKeys: ['dbsnum'],
      component: 'Table',
      compProps: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=Columns',
            children: []
          }
        ],
        table: {
          showSelectCheckbox: false,
          url: '/' + ApiProject + '/DBSystemOptimization/chunkIOInformation',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=Chunk_IO_Information'
          },
          pagination: {
            enable: false,
            layout: undefined
          },
          heightFit: false
        }
      }
    }
  },

  Remark: {
    element: 'dialog-component-link-button',
    // prop: '',
    props: {
      id: 'remark',
      type: 'text',
      size: 'mini',
      label: 'Remark',
      $label: 'Remark',
      // icon: 'el-icon-arrow-right',
      component: 'ProcessAlarm',
      title: 'Remark',
      $title: 'table_operations.Remark',
      width: '60%',
      queryKeys: ['id']
    }
  },
  Get_Event_Notification_Recipient_List: {
    element: 'dialog-component-link-button',
    // prop: '',
    props: {
      type: 'text',
      size: 'mini',
      label: 'Get Event Notification Recipient List',
      $label: 'Get_Event_Notification_Recipient_List',
      // icon: 'el-icon-arrow-right',
      checkQueryNotNull: false,
      checkQueryNotNullErrorMessage: '',
      title: 'Get Event Notification Recipient List',
      $title: 'table_operations.Get_Event_Notification_Recipient_List',
      queryKeys: ['id'],
      component: 'Table',
      compProps: {
        table: {
          showSelectCheckbox: false,
          url: '/' + ApiProject + '/eventManager/getEventRecipientList',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=Get_Event_Notification_Recipient_List'
          },
          pagination: {
            enable: false,
            layout: undefined
          },
          heightFit: false
        }
      }
    }
  },
  Get_Event_Notification_List: {
    element: 'dialog-component-link-button',
    // prop: '',
    props: {
      type: 'text',
      size: 'mini',
      label: 'Get_Event_Notification_List',
      $label: 'Get_Event_Notification_List',
      // icon: 'el-icon-arrow-right',
      checkQueryNotNull: false,
      checkQueryNotNullErrorMessage: '',
      title: 'Get Event Notification List',
      $title: 'table_operations.Get_Event_Notification_List',
      queryKeys: ['id', 'ts.id'],
      queryKeyMap: {'ts.id': 'agentId'},
      component: 'Table',
      compProps: {
        table: {
          showSelectCheckbox: false,
          url: '/' + ApiProject + '/eventManager/getEventNotificationList',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=Get_Event_Notification_List'
          },
          pagination: {
            enable: false,
            layout: undefined
          },
          heightFit: false
        }
      }
    }
  },

  Top_Busy_Table_In_DBSpace: {
    element: 'dialog-component-link-button',
    // prop: '',
    props: {
      type: 'text',
      size: 'mini',
      label: 'Top Busy Table In DBSpace',
      $label: 'Top_Busy_Table_In_DBSpace',
      // icon: 'el-icon-arrow-right',
      checkQueryNotNull: false,
      checkQueryNotNullErrorMessage: '',
      title: 'Top Busy Table In DBSpace',
      $title: 'table_operations.Top_Busy_Table_In_DBSpace',
      queryKeys: ['dbsnum'],
      component: 'Table',
      compProps: {
        toolbar: [
          {
            id: 'top_toolbar',
            url: '/MOCK/TOOLBAR_METADATA?id=Common',
            children: []
          }
        ],
        table: {
          showSelectCheckbox: false,
          url: '/' + ApiProject + '/DBSystemOptimization/topBusyTable',
          columns: {
            url: '/MOCK/TABLE_METADATA?id=Top_Busy_Table'
          },
          pagination: {
            enable: false,
            layout: undefined
          },
          export: {
            output: 'Top_Busy_Table_In_DBSpace_'
          },
          heightFit: false
        }
      }
    }
  }
}

const Connection_Operations = {
  label: 'Operations',
  prop: 'operations',
  width: 100,
  fixed: 'right',
  widget: 'operations',
  $label: 'Operations',
  props: {
    type: 'dropdown',
    options: [
      // Operations.List_Analysis_Result,
      Operations.SQL_Cursor_Held_Info,
      Operations.Terminate_Session
    ]
  }
}

const METADATA = {
  Temp_Tables: [
    {label: 'User', $label: 'User', prop: 'user', showOverflowTooltip: true},
    {label: 'DBSpace', $label: 'DBSpace', prop: 'dbspace', minWidth: 100, showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', minWidth: 100, showOverflowTooltip: true},
    {label: 'Table', $label: 'Table', prop: 'table', minWidth: 100, showOverflowTooltip: true},
    {label: 'Partnum', $label: 'Partnum', prop: 'partnum', minWidth: 100, showOverflowTooltip: true},
    {label: 'N Extents', $label: 'N_Extents', prop: 'n extents', minWidth: 100, showOverflowTooltip: true},
    {label: 'Table Size(KB)', $label: 'Table_Size', prop: 'table size(kb)', minWidth: 150, showOverflowTooltip: true},
    {label: 'Disk I/O', $label: 'Disk_I_O', prop: 'disk i/o', minWidth: 120, showOverflowTooltip: true},
    {label: 'Disk Reads', $label: 'Disk_Reads', prop: 'disk reads', minWidth: 120, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Disk Writes', $label: 'Disk_Writes', prop: 'disk writes', minWidth: 120, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Buf Writes', $label: 'Buf_Writes', prop: 'buf writes', minWidth: 120, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Buf Reads', $label: 'Buf_Reads', prop: 'buf reads', minWidth: 120, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Page Lock', $label: 'Page_Lock', prop: 'page lock', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'SeqScan', $label: 'SeqScan', prop: 'seqscan', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {
      label: 'Temp Table',
      $label: 'Temp_Table',
      prop: 'temp table',
      minWidth: 150,
      showOverflowTooltip: true,
      visible: false
    },
    {
      label: 'PERM SYS TMP TBL',
      $label: 'PERM_SYS_TMP_TBL',
      prop: 'perm_sys_tmp_tbl',
      minWidth: 200,
      showOverflowTooltip: true,
      visible: false
    },
    {
      label: 'Sort File',
      $label: 'Sort_File',
      prop: 'sort file',
      minWidth: 100,
      showOverflowTooltip: true,
      visible: false
    },
    {
      label: 'Create Time',
      $label: 'Create_Time',
      prop: 'create time',
      minWidth: 150,
      showOverflowTooltip: true,
      visible: false
    }
  ],
  Outdated_Update_Statistics_Table: [
    {label: 'Database', $label: 'Database', prop: 'database', showOverflowTooltip: true},
    {label: 'Table', $label: 'Table', prop: 'table', showOverflowTooltip: true},
    {label: 'Changed%', $label: 'Changed', prop: 'changed%', minWidth: 100, showOverflowTooltip: true},
    {label: 'Actual Rows', $label: 'Actual_Rows', prop: 'actual rows', minWidth: 110, showOverflowTooltip: true},
    {
      label: 'Rows Estimated',
      $label: 'Rows_Estimated',
      prop: 'rows estimated',
      minWidth: 130,
      showOverflowTooltip: true
    },
    {label: 'Buf Reads', $label: 'Buf_Reads', prop: 'buf reads', minWidth: 100, showOverflowTooltip: true},
    {label: 'Buf Writes', $label: 'Buf_Writes', prop: 'buf writes', minWidth: 100, showOverflowTooltip: true},
    {label: 'Seqscans', $label: 'Seqscans', prop: 'seqscans', minWidth: 110, showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        options: [
          Operations.Table_Info
        ]
      }
    }
  ],
  Incompleted_Update_Statistics_Table: [
    {label: 'Database', $label: 'Database', prop: 'database', minWidth: 100, showOverflowTooltip: true},
    {label: 'Table', $label: 'Table', prop: 'table', minWidth: 100, showOverflowTooltip: true},
    {label: 'Index', $label: 'Index', prop: 'index', minWidth: 100, showOverflowTooltip: true},
    {label: 'distribution', $label: 'distribution', prop: 'distribution', minWidth: 100, showOverflowTooltip: true},
    {label: 'N Rows', $label: 'N_Rows', prop: 'n rows', minWidth: 100, showOverflowTooltip: true},
    {label: 'Buf Reads', $label: 'Buf_Reads', prop: 'buf reads', minWidth: 100, showOverflowTooltip: true},
    {label: 'Buf Writes', $label: 'Buf_Writes', prop: 'buf writes', minWidth: 100, showOverflowTooltip: true},
    {label: 'Seqscans', $label: 'Seqscans', prop: 'seqscans', minWidth: 100, showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        options: [
          Operations.Table_Info
        ]
      }
    }
  ],
  Table_Extent_List: [
    {label: 'DBSpace', $label: 'DBSpace', prop: 'dbspace', minWidth: 100, showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', minWidth: 100, showOverflowTooltip: true},
    {label: 'N Extents', $label: 'N_Extents', prop: 'n extents', minWidth: 100, showOverflowTooltip: true},
    {label: 'N Rows', $label: 'N_Rows', prop: 'n rows', minWidth: 100, showOverflowTooltip: true},
    {label: 'RowSize', $label: 'RowSize', prop: 'rowsize', minWidth: 100, showOverflowTooltip: true},
    {label: 'Size(KB)', $label: 'Size(KB)', prop: 'size(kb)', minWidth: 100, showOverflowTooltip: true},
    {label: 'Used(KB)', $label: 'Used(KB)', prop: 'used(kb)', minWidth: 100, showOverflowTooltip: true},
    {label: 'Page Lock', $label: 'Page_Lock', prop: 'page lock', minWidth: 100, showOverflowTooltip: true},
    {label: 'Table/Index', $label: 'Table/Index', prop: 'table/index', minWidth: 150, showOverflowTooltip: true},
    {label: 'Temp Table', $label: 'Temp_Table', prop: 'temp table', minWidth: 150, showOverflowTooltip: true},
    {
      label: 'PERM SYS TMP TBL',
      $label: 'PERM_SYS_TMP_TBL',
      prop: 'perm_sys_tmp_tbl',
      minWidth: 200,
      showOverflowTooltip: true
    },
    {
      label: 'Sort File',
      $label: 'Sort_File',
      prop: 'sort file',
      minWidth: 100,
      showOverflowTooltip: true,
      visible: false
    },
    {label: 'Create Time', $label: 'Create_Time', prop: 'create time', minWidth: 150, showOverflowTooltip: true}
  ],

  Top_Busy_Table: [
    {label: 'DBSpace', $label: 'DBSpace', prop: 'dbspace', minWidth: 100, showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', minWidth: 100, showOverflowTooltip: true},
    {label: 'Table', $label: 'Table', prop: 'table', showOverflowTooltip: true},
    {label: 'Size(KB)', $label: 'Size', prop: 'size(kb)', showOverflowTooltip: true},
    {label: 'N Rows', $label: 'N_Rows', prop: 'n rows', showOverflowTooltip: true},
    {label: 'Buf Reads', $label: 'Buf_Reads', prop: 'buf reads', minWidth: 100, showOverflowTooltip: true},
    {label: 'Buf Writes', $label: 'Buf_Writes', prop: 'buf writes', minWidth: 100, showOverflowTooltip: true},
    {label: 'Seqscans', $label: 'Seqscans', prop: 'seqscans', minWidth: 90, showOverflowTooltip: true},
    {label: 'Temp Table', $label: 'Temp_Table', prop: 'temp table', minWidth: 110, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Sort File', $label: 'Sort_File', prop: 'sort file', showOverflowTooltip: true, visible: false}, // visible before
    {label: 'PermSysTmpTbl', $label: 'PermSysTmpTbl', prop: 'permsystmptbl', minWidth: 120, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Page Lock', $label: 'Page_Lock', prop: 'page lock', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Re-Hit%', $label: 'Re-Hit', prop: 're-hit%', showOverflowTooltip: true, visible: false}, // visible before
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        options: [
          Operations.Table_Info
        ]
      }
    }
  ],
  Top_Lock_Wait_Tables: [
    {label: 'Database', $label: 'Database', prop: 'database', showOverflowTooltip: true},
    {label: 'Table', $label: 'Table', prop: 'table', showOverflowTooltip: true},
    {label: 'Lock Mode', $label: 'Lock_Mode', prop: 'lock mode', showOverflowTooltip: true},
    {label: 'Lock Reqs', $label: 'Lock_Reqs', prop: 'lock reqs', showOverflowTooltip: true},
    {label: 'Lock Waits', $label: 'Lock_Waits', prop: 'lock waits', showOverflowTooltip: true},
    {label: 'Lock Timeouts', $label: 'Lock_Timeouts', prop: 'lock timeouts', showOverflowTooltip: true},
    {label: 'Disk Reads', $label: 'Disk_Reads', prop: 'disk reads', minWidth: 100, showOverflowTooltip: true},
    {label: 'Disk Writes', $label: 'Disk_Writes', prop: 'disk writes', minWidth: 120, showOverflowTooltip: true},
    {label: 'Buf Reads', $label: 'Buf_Reads', prop: 'buf reads', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Buf Writes', $label: 'Buf_Writes', prop: 'buf writes', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Seqscans', $label: 'Seqscans', prop: 'seqscans', showOverflowTooltip: true, visible: false} // visible before
    // {
    //   label: 'Operations',
    //   $label: 'Operations',
    //   prop: 'operations',
    //   width: 100,
    //   fixed: 'right',
    //   widget: 'operations',
    //   props: {
    //     options: [
    //       Operations.Table_Info
    //     ]
    //   }
    // }
  ],
  Table_Related_SQL: [
    {label: 'SEQ', $label: 'SEQ', prop: 'seq'},
    {label: 'Database', $label: 'Database', prop: 'database', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Max Cost', $label: 'Max_Cost', prop: 'max cost', showOverflowTooltip: true},
    {label: 'Min Cost', $label: 'Min_Cost', prop: 'min cost', showOverflowTooltip: true},
    {label: 'Ret Rows', $label: 'Ret_Rows', prop: 'ret rows', showOverflowTooltip: true},
    {label: 'SeqScan', $label: 'SeqScan', prop: 'seqscan', showOverflowTooltip: true},
    {label: 'Frequency', $label: 'Frequency', prop: 'frequency', showOverflowTooltip: true},
    {label: 'Weight', $label: 'Weight', prop: 'weight', showOverflowTooltip: true},
    // {label: 'Brief SQL', $label: 'Brief_SQL', prop: 'brief sql', minWidth: 200, showOverflowTooltip: true},
    {label: 'SQL', $label: 'SQL', prop: 'sql', minWidth: 200, visible: true, showOverflowTooltip: true},
    // {label: 'HashCode', $label: 'HashCode', prop: 'hashcode', showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.SQL_Evaluator,
          Operations.Execution_history_of_sql_pattern
        ]
      }
    }
  ],
  ActiveSQL: [
    {label: 'SEQ', $label: 'SEQ', prop: 'seq', minWidth: 60, showOverflowTooltip: true},
    {label: 'Session', $label: 'Session', prop: 'session', showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', minWidth: 90, showOverflowTooltip: true},
    {label: 'Host', $label: 'Host', prop: 'host', showOverflowTooltip: true},
    {label: 'User', $label: 'User', prop: 'user', showOverflowTooltip: true},
    {label: 'Cost', $label: 'Cost', prop: 'cost', showOverflowTooltip: true},
    // {label: 'Brief SQL', $label: 'Brief_SQL', prop: 'brief sql', minWidth: 100, showOverflowTooltip: true},
    {label: 'SQL', $label: 'SQL', prop: 'sql', showOverflowTooltip: true},
    {label: 'Ret Rows', $label: 'Ret_Rows', prop: 'ret rows', minWidth: 100, showOverflowTooltip: true},
    {label: 'Seqscan', $label: 'Seqscan', prop: 'seqscan', showOverflowTooltip: true},
    {
      label: 'Host Vars',
      $label: 'Host_Vars',
      prop: 'host vars',
      minWidth: 100,
      showOverflowTooltip: true,
      visible: false
    },
    // {label: 'HashCode', $label: 'HashCode', prop: 'hashcode', minWidth: 100, showOverflowTooltip: true, visible: false},
    {label: 'PID', $label: 'PID', prop: 'pid', showOverflowTooltip: true, visible: false},
    {label: 'TTY', $label: 'TTY', prop: 'tty', showOverflowTooltip: true, visible: false},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.SQL_Evaluator,
          Operations.Execution_history_of_sql_pattern
        ]
      }
    }
  ],

  Least_Used_Indexes: [
    {label: 'DBSpace', $label: 'DBSpace', prop: 'dbspace', showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', showOverflowTooltip: true},
    {label: 'Table', $label: 'Table', prop: 'table', showOverflowTooltip: true},
    {label: 'Index', $label: 'Index', prop: 'index', showOverflowTooltip: true},
    {label: 'Size(KB)', $label: 'Size', prop: 'size(kb)', showOverflowTooltip: true},
    {label: 'N Cols', $label: 'N_Cols', prop: 'n cols', showOverflowTooltip: true},
    {label: 'Disk Reads', $label: 'Disk_Reads', prop: 'disk reads', minWidth: 100, showOverflowTooltip: true},
    {label: 'Disk Writes', $label: 'Disk_Writes', prop: 'disk writes', minWidth: 120, showOverflowTooltip: true},
    {label: 'Buf Reads', $label: 'Buf_Reads', prop: 'buf reads', minWidth: 100, showOverflowTooltip: true},
    {label: 'Buf Writes', $label: 'Buf_Writes', prop: 'buf writes', minWidth: 100, showOverflowTooltip: true},
    {label: 'keyLen', $label: 'keyLen', prop: 'keylen', showOverflowTooltip: true, visible: false} // visible before
  ],
  Top_Busy_Indexes: [
    {label: 'DBSpace', $label: 'DBSpace', prop: 'dbspace', showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', showOverflowTooltip: true},
    {label: 'Table', $label: 'Table', prop: 'table', showOverflowTooltip: true},
    {label: 'Index', $label: 'Index', prop: 'index', showOverflowTooltip: true},
    {label: 'Size(KB)', $label: 'Size', prop: 'size(kb)', showOverflowTooltip: true},
    {label: 'N Cols', $label: 'N_Cols', prop: 'n cols', showOverflowTooltip: true},
    {label: 'Disk Reads', $label: 'Disk_Reads', prop: 'disk reads', minWidth: 100, showOverflowTooltip: true},
    {label: 'Disk Writes', $label: 'Disk_Writes', prop: 'disk writes', minWidth: 120, showOverflowTooltip: true},
    {label: 'Buf Reads', $label: 'Buf_Reads', prop: 'buf reads', minWidth: 100, showOverflowTooltip: true},
    {label: 'Buf Writes', $label: 'Buf_Writes', prop: 'buf writes', minWidth: 100, showOverflowTooltip: true},
    {label: 'keyLen', $label: 'keyLen', prop: 'keylen', showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Re-Hit%', $label: 'Re-Hit', prop: 're-hit%', showOverflowTooltip: true, visible: false} // visible before
  ],

  Top_Busy_Session: [
    {label: 'Session', $label: 'Session', prop: 'session', showOverflowTooltip: true},
    {label: 'User', $label: 'User', prop: 'user', showOverflowTooltip: true},
    {label: 'Connected', $label: 'Connected', prop: 'connected', showOverflowTooltip: true, minWidth: 100},
    {label: 'ToTal OP', $label: 'ToTal_OP', prop: 'total op', showOverflowTooltip: true, minWidth: 100},
    {label: 'OP+', $label: 'OP', prop: 'op+', showOverflowTooltip: true},
    {label: 'Cost', $label: 'Cost', prop: 'cost', showOverflowTooltip: true},
    {label: 'Seqscans', $label: 'Seqscans', prop: 'seqscans', showOverflowTooltip: true, minWidth: 100},
    {label: 'SEQ+', $label: 'SEQ', prop: 'seq+', showOverflowTooltip: true},
    {label: 'Lock Reqs', $label: 'Lock_Reqs', prop: 'lock reqs', showOverflowTooltip: true, minWidth: 100, visible: false}, // visible before
    {label: 'LCK+', $label: 'LCK', prop: 'lck+', showOverflowTooltip: true, minWidth: 100, visible: false}, // visible before
    {label: 'Lock Held', $label: 'Lock_Held', prop: 'lock held', showOverflowTooltip: true, minWidth: 100, visible: false}, // visible before
    {label: 'Database', $label: 'Database_Program', prop: 'database program', showOverflowTooltip: true, minWidth: 100, visible: false}, // visible before
    {label: 'Host', $label: 'Host', prop: 'host', showOverflowTooltip: true, visible: false},
    {label: 'PID', $label: 'PID', prop: 'pid', showOverflowTooltip: true, visible: false},
    {label: 'TTY', $label: 'TTY', prop: 'tty', showOverflowTooltip: true, visible: false},
    Connection_Operations
  ],
  Top_IO_Session: [
    {label: 'Session', $label: 'Session', prop: 'session', showOverflowTooltip: true},
    {label: 'User', $label: 'User', prop: 'user', showOverflowTooltip: true},
    {label: 'Connected', $label: 'Connected', prop: 'connected', showOverflowTooltip: true, minWidth: 100},
    {label: 'ToTal RW', $label: 'ToTal_RW', prop: 'total rw', showOverflowTooltip: true, minWidth: 100},
    {label: 'RW+', $label: 'RW', prop: 'rw+', showOverflowTooltip: true},
    {label: 'Disk Reads', $label: 'Disk_Reads', prop: 'disk reads', showOverflowTooltip: true, minWidth: 100},
    {label: 'DskR+', $label: 'DskR', prop: 'dskr+', showOverflowTooltip: true},
    {label: 'Disk Writes', $label: 'Disk_Writes', prop: 'disk writes', showOverflowTooltip: true, minWidth: 120, visible: false}, // visible before
    {label: 'DskW+', $label: 'DskW', prop: 'dskw+', showOverflowTooltip: true, visible: false}, // visible before
    {label: 'SeqScan', $label: 'SeqScan', prop: 'seqscan', showOverflowTooltip: true, minWidth: 100, visible: false}, // visible before
    {label: 'Database', $label: 'Database', prop: 'database', showOverflowTooltip: true, minWidth: 100, visible: false}, // visible before
    {label: 'TTY', $label: 'TTY', prop: 'tty', showOverflowTooltip: true, visible: false},
    {label: 'Host', $label: 'Host', prop: 'host', showOverflowTooltip: true, visible: false},
    Connection_Operations
  ],
  Top_Memory_Consuming_Session: [
    {label: 'Session', $label: 'Session', prop: 'session', showOverflowTooltip: true},
    {label: 'User', $label: 'User', prop: 'user', showOverflowTooltip: true},
    {label: 'Connected', $label: 'Connected', prop: 'connected', showOverflowTooltip: true, minWidth: 100, visible: false}, // visible before
    {label: 'Mem Allocated', $label: 'Mem_Allocated', prop: 'mem allocated', showOverflowTooltip: true, minWidth: 150},
    {
      label: '% of DB Virtual Memory',
      $label: 'DB_Virtual_Memory',
      prop: '% of db virtual memory',
      showOverflowTooltip: true,
      minWidth: 200,
      visible: false
    },
    {label: 'Mem Used', $label: 'Mem_Used', prop: 'mem used', showOverflowTooltip: true, minWidth: 100},
    {label: 'Sort Mem', $label: 'Sort_Mem', prop: 'sort mem', showOverflowTooltip: true, minWidth: 100},
    {label: 'Lock Hold', $label: 'Lock_Hold', prop: 'lock hold', showOverflowTooltip: true, minWidth: 100, visible: false}, // visible before
    {
      label: 'File Opened',
      $label: 'File_Opened',
      prop: 'file opened',
      showOverflowTooltip: true,
      minWidth: 120,
      visible: false
    },
    {label: 'Buf Reads', $label: 'Buf_Reads', prop: 'buf reads', showOverflowTooltip: true, minWidth: 100},
    {label: 'Buf Writes', $label: 'Buf_Writes', prop: 'buf writes', showOverflowTooltip: true, minWidth: 100},
    {label: 'SeqScans', $label: 'SeqScans', prop: 'seqscans', showOverflowTooltip: true, minWidth: 100, visible: false}, // visible before
    {label: 'Database', $label: 'Database', prop: 'database', showOverflowTooltip: true, minWidth: 100, visible: false}, // visible before
    {label: 'TTY', $label: 'TTY', prop: 'tty', showOverflowTooltip: true, visible: false},
    {label: 'Host', $label: 'Host', prop: 'host', showOverflowTooltip: true, visible: false},
    Connection_Operations
  ],
  ShowIdleSession: [
    {label: 'Session', $label: 'Session', prop: 'session', minWidth: 70, showOverflowTooltip: true},
    {label: 'Host', $label: 'Host', prop: 'host', showOverflowTooltip: true},
    {label: 'PID', $label: 'PID', prop: 'pid', minWidth: 60, showOverflowTooltip: true},
    {label: 'TTY', $label: 'TTY', prop: 'tty', minWidth: 60, showOverflowTooltip: true},
    {label: 'User', $label: 'User', prop: 'user', minWidth: 60, showOverflowTooltip: true},
    {label: 'Idle Time', $label: 'Idle_Time', prop: 'idle time', minWidth: 100, showOverflowTooltip: true},
    {label: 'Lock Hold', $label: 'Lock_Hold', prop: 'lock hold', minWidth: 100, showOverflowTooltip: true},
    {label: 'Lock Wait', $label: 'Lock_Wait', prop: 'lock wait', minWidth: 100, showOverflowTooltip: true},
    {label: 'Buf Reads', $label: 'Buf_Reads', prop: 'buf reads', minWidth: 100, showOverflowTooltip: true},
    {label: 'Buf Writes', $label: 'Buf_Writes', prop: 'buf writes', minWidth: 100, showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', minWidth: 90, showOverflowTooltip: true}
  ],
  DeadLocked_Connections: [
    {label: 'Database', $label: 'Database', prop: 'database', minWidth: 80, showOverflowTooltip: true},
    {label: 'Table', $label: 'Table', prop: 'table', minWidth: 80, showOverflowTooltip: true},
    {label: 'PID', $label: 'PID', prop: 'pid', minWidth: 60, showOverflowTooltip: true},
    {label: 'Session', $label: 'Session', prop: 'session', minWidth: 100, showOverflowTooltip: true},
    {label: 'Lock Holder', $label: 'Lock_Holder', prop: 'lock holder', minWidth: 130, showOverflowTooltip: true, visible: false}, // visible before
    {
      label: 'Locked Session',
      $label: 'Locked_Session',
      prop: 'locked session',
      minWidth: 130,
      showOverflowTooltip: true
    },
    {label: 'Locked User', $label: 'Locked_User', prop: 'locked user', minWidth: 110, showOverflowTooltip: true},
    {label: 'Lock Type', $label: 'Lock_Type', prop: 'lock type', minWidth: 100, showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.Lock_Holding_Connection
        ]
      }
    }
  ],
  Active_Connections: [
    {label: 'Session', $label: 'Session', prop: 'session', showOverflowTooltip: true},
    {label: 'User', $label: 'User', prop: 'user', showOverflowTooltip: true},
    {label: 'Connect Time', $label: 'Connect_Time', prop: 'connect time', minWidth: 180, showOverflowTooltip: true},
    {label: 'Idle Time', $label: 'Idle_Time', prop: 'idle time', minWidth: 120, showOverflowTooltip: true},
    {label: 'Lock Held', $label: 'Lock_Held', prop: 'lock held', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Lock Wait', $label: 'Lock_Wait', prop: 'lock wait', minWidth: 100, showOverflowTooltip: true},
    {label: 'Buf Reads', $label: 'Buf_Reads', prop: 'buf reads', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Buf Writes', $label: 'Buf_Writes', prop: 'buf writes', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Host', $label: 'Host', prop: 'host', showOverflowTooltip: true, visible: false},
    {label: 'PID', $label: 'PID', prop: 'pid', showOverflowTooltip: true, visible: false},
    Connection_Operations
  ],
  DB_Engine_Wait_Conditions: [
    {label: 'Condition Id', $label: 'Condition_Id', prop: 'condition id', showOverflowTooltip: true},
    {label: 'Address', $label: 'Address', prop: 'address', showOverflowTooltip: true},
    {label: 'Name', $label: 'Name', prop: 'name', showOverflowTooltip: true},
    {label: 'Waiter', $label: 'Waiter', prop: 'waiter', showOverflowTooltip: true},
    {label: 'Wait Time', $label: 'Wait_Time', prop: 'wait time', showOverflowTooltip: true}
  ],

  Table_In_Used: [
    {label: 'Session', $label: 'Session', prop: 'session', showOverflowTooltip: true},
    {label: 'Host', $label: 'Host', prop: 'host', showOverflowTooltip: true},
    {label: 'PID', $label: 'PID', prop: 'pid', showOverflowTooltip: true},
    {label: 'TTY', $label: 'TTY', prop: 'tty', showOverflowTooltip: true},
    {label: 'User', $label: 'User', prop: 'user', showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', showOverflowTooltip: true},
    {label: 'Table/index', $label: 'Table_index', prop: 'table/index', showOverflowTooltip: true}
  ],
  List_Analysis_Jobs: [
    {
      label: 'Analysis Start Time',
      $label: 'Analysis_Start_Time',
      prop: 'analysis start time',
      showOverflowTooltip: true,
      minWidth: 170
    },
    {
      label: 'Analysis Duration',
      $label: 'Analysis_Duration',
      prop: 'analysis duration',
      showOverflowTooltip: true,
      minWidth: 150
    },
    {label: 'Buf Reads', $label: 'Buf_Reads', prop: 'buf reads', showOverflowTooltip: true, minWidth: 100},
    {label: 'Buf Writes', $label: 'Buf_Writes', prop: 'buf writes', showOverflowTooltip: true, minWidth: 100},
    {label: 'Mem Size', $label: 'Mem_Size', prop: 'mem size', showOverflowTooltip: true, minWidth: 90},
    {label: 'Max Locks', $label: 'Max_Locks', prop: 'max locks', showOverflowTooltip: true, minWidth: 100},
    {label: 'User', $label: 'User', prop: 'user', showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Session', $label: 'Session', prop: 'session', showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Status', $label: 'Status', prop: 'status', showOverflowTooltip: true},
    {label: 'ID', $label: 'ID', prop: 'id', showOverflowTooltip: true, visible: false}, // visible before
    {label: 'SeqScans', $label: 'SeqScans', prop: 'seqscans', showOverflowTooltip: true, minWidth: 100, visible: false}, // visible before
    {label: 'Host', $label: 'Host', prop: 'host', showOverflowTooltip: true, visible: false},
    {label: 'PID', $label: 'PID', prop: 'pid', showOverflowTooltip: true, visible: false},
    {label: 'Process', $label: 'Process', prop: 'process', showOverflowTooltip: true, visible: false},
    {label: 'TTY', $label: 'TTY', prop: 'tty', showOverflowTooltip: true, visible: false},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.List_Analysis_Result,
          Operations.Clear_Analysis_Result,
          Operations.Stop_Analysis_Session
        ]
      }
    }
  ],
  List_Analysis_Result_JobProfile: [
    {label: 'SessionID', $label: 'SessionID', prop: 'Session ID', showOverflowTooltip: true},
    {
      label: 'Analysis Job ID',
      $label: 'Analysis_Job_ID',
      prop: 'Analysis Job ID',
      showOverflowTooltip: true,
      minWidth: 150
    },
    {label: 'User', $label: 'User', prop: 'User', showOverflowTooltip: true},
    {label: 'Host', $label: 'Host', prop: 'Host', showOverflowTooltip: true},
    {label: 'PID', $label: 'PID', prop: 'PID', showOverflowTooltip: true},
    {label: 'Program', $label: 'Program', prop: 'Program', showOverflowTooltip: true},
    {label: 'TTY', $label: 'TTY', prop: 'TTY', showOverflowTooltip: true},
    {
      label: 'Analysis Status',
      $label: 'Analysis_Status',
      prop: 'Analysis Status',
      showOverflowTooltip: true,
      minWidth: 150
    }
  ],
  List_Analysis_Result_AnalysisPeriod: [
    {label: 'Duration', $label: 'Duration', prop: 'Duration', showOverflowTooltip: true},
    {label: 'Start', $label: 'Start', prop: 'Start', showOverflowTooltip: true},
    {label: 'End', $label: 'End', prop: 'End', showOverflowTooltip: true}
  ],
  List_Analysis_Result_ProgramExecutionPeriod: [
    {label: 'Duration', $label: 'Duration', prop: 'Duration', showOverflowTooltip: true},
    {label: 'Start', $label: 'Start', prop: 'Start', showOverflowTooltip: true}
    // {label: 'End', prop: 'End', showOverflowTooltip: true}
  ],
  List_Analysis_Result_ResourceUtilization: [
    {label: 'Buf Readss', $label: 'Buf_Readss', prop: 'Buf Readss', showOverflowTooltip: true},
    {label: 'Buf Writess', $label: 'Buf_Writess', prop: 'Buf Writess', showOverflowTooltip: true, minWidth: 150},
    {label: 'Mem Size', $label: 'Mem_Size', prop: 'Mem Size', showOverflowTooltip: true},
    {label: 'Seqscans', $label: 'Seqscans', prop: 'Seqscans', showOverflowTooltip: true},
    {label: 'Max Locks', $label: 'Max_Locks', prop: 'Max Locks', showOverflowTooltip: true}
  ],
  List_Analysis_Result_Analyzed: [
    {label: 'SEQ', $label: 'SEQ', prop: 'seq', showOverflowTooltip: true},
    {label: 'Process Time', $label: 'Process_Time', prop: 'process time', showOverflowTooltip: true, minWidth: 120},
    {label: 'Time%', $label: 'Time', prop: 'time%', showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', showOverflowTooltip: true, minWidth: 100},
    {label: 'Cost', $label: 'Cost', prop: 'cost', showOverflowTooltip: true},
    {label: 'Rows', $label: 'Rows', prop: 'rows', showOverflowTooltip: true},
    {label: 'SeqScan', $label: 'SeqScan', prop: 'seqscan', showOverflowTooltip: true},
    {label: 'Brief SQL', $label: 'Brief_SQL', prop: 'brief sql', showOverflowTooltip: true, minWidth: 100},
    {label: 'HostVars', $label: 'HostVars', prop: 'host vars', showOverflowTooltip: true, minWidth: 100},
    // {label: 'HashCode', $label: 'HashCode', prop: 'hashcode', showOverflowTooltip: true, minWidth: 80},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.SQL_Evaluator,
          Operations.Execution_history_of_sql_pattern
        ]
      }
    }
  ],
  LockWaitedConnections: [
    {label: 'Condition ID', $label: 'Condition_ID', prop: 'condition id', showOverflowTooltip: true},
    {label: 'Name', $label: 'Name', prop: 'name', showOverflowTooltip: true},
    {label: 'Waiter', $label: 'Waiter', prop: 'waiter', showOverflowTooltip: true},
    {label: 'Wait Time', $label: 'Wait_Time', prop: 'wait time', showOverflowTooltip: true}
  ],

  Table_With_Multiple_Extents: [
    {label: 'Database', $label: 'Database', prop: 'database', minWidth: 100, showOverflowTooltip: true},
    {label: 'Table/Index', $label: 'Table_Index', prop: 'table/index', minWidth: 150, showOverflowTooltip: true},
    {label: 'Partnum', $label: 'Partnum', prop: 'partnum', minWidth: 100, showOverflowTooltip: true},
    {label: 'N Extents', $label: 'N_Extents', prop: 'n extents', minWidth: 100, showOverflowTooltip: true},
    {label: 'N Rows', $label: 'N_Rows', prop: 'n rows', minWidth: 100, showOverflowTooltip: true},
    {label: 'Used Pages', $label: 'Used_Pages', prop: 'used pages', minWidth: 150, showOverflowTooltip: true},
    {
      label: 'Allocated Pages',
      $label: 'Allocated_Pages',
      prop: 'allocated pages',
      minWidth: 150,
      showOverflowTooltip: true
    },
    {label: 'Data Pages', $label: 'Data_Pages', prop: 'data pages', minWidth: 130, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Object Type', $label: 'Object_Type', prop: 'object type', minWidth: 120, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Temp Table', $label: 'Temp_Table', prop: 'temp table', minWidth: 120, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Sort File', $label: 'Sort_File', prop: 'sort file', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {
      label: 'PERM SYS TMP TBL',
      $label: 'PERM_SYS_TMP_TBL',
      prop: 'perm_sys_tmp_tbl',
      minWidth: 200,
      showOverflowTooltip: true,
      visible: false
    }, // visible before
    {label: 'Page Lock', $label: 'Page_Lock', prop: 'page lock', minWidth: 120, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Create Time', $label: 'Create_Time', prop: 'create time', minWidth: 150, showOverflowTooltip: true, visible: false} // visible before
  ],
  Un_backup_Logical_Log: [
    {label: 'Num', $label: 'Num', prop: 'num', showOverflowTooltip: true},
    {label: 'UniqueID', $label: 'UniqueID', prop: 'uniqueid', showOverflowTooltip: true},
    {label: 'Size', $label: 'Size', prop: 'size', showOverflowTooltip: true},
    {label: 'Used Size', $label: 'Used_Size', prop: 'used size', showOverflowTooltip: true},
    {label: 'Backup Status', $label: 'Backup_Status', prop: 'backup status', showOverflowTooltip: true, minWidth: 150},
    {label: 'New(Unused)', $label: 'New', prop: 'new(unused)', showOverflowTooltip: true},
    {
      label: 'Transaction In Used',
      $label: 'Transaction_In_Used',
      prop: 'transaction in used',
      showOverflowTooltip: true
    },
    {label: 'Current', $label: 'Current', prop: 'current', showOverflowTooltip: true}
  ],
  Active_Transaction_In_Logical_Log: [
    {label: 'Session', $label: 'Session', prop: 'session', showOverflowTooltip: true},
    {label: 'User', $label: 'User', prop: 'user', showOverflowTooltip: true},
    {label: 'PID', $label: 'PID', prop: 'pid', showOverflowTooltip: true},
    {label: 'Host', $label: 'Host', prop: 'host', showOverflowTooltip: true},
    {label: 'Connect Time', $label: 'Connect_Time', prop: 'connect time', showOverflowTooltip: true},
    {
      label: 'Start Log UniqueID',
      $label: 'Start_Log_UniqueID',
      prop: 'start log uniqueid',
      showOverflowTooltip: true,
      minWidth: 150
    },
    {label: 'Long Transaction', $label: 'Long_Transaction', prop: 'long transaction', showOverflowTooltip: true},
    {label: 'N Locks', $label: 'N_Locks', prop: 'n locks', showOverflowTooltip: true},
    {label: 'Lock Wait', $label: 'Lock_Wait', prop: 'lock wait', showOverflowTooltip: true},
    {label: 'Lock request', $label: 'Lock_request', prop: 'lock request', showOverflowTooltip: true}
  ],
  Logical_Log_Used_In_Active_Transactions: [
    {label: 'Num', $label: 'Num', prop: 'num', showOverflowTooltip: true},
    {label: 'UniqueID', $label: 'UniqueID', prop: 'uniqueid', showOverflowTooltip: true},
    {label: 'Size', $label: 'Size', prop: 'size', showOverflowTooltip: true},
    {label: 'Used Size', $label: 'Used_Size', prop: 'used size', showOverflowTooltip: true},
    {label: 'Backup Status', $label: 'Backup_Status', prop: 'backup status', showOverflowTooltip: true},
    {label: 'New(Unused)', $label: 'New', prop: 'new (unused)', showOverflowTooltip: true},
    {label: 'In Used', $label: 'In_Used', prop: 'transaction in used', showOverflowTooltip: true},
    {label: 'Current', $label: 'Current', prop: 'current', showOverflowTooltip: true}
  ],
  All_Logical_Logs: [
    {label: 'Num', $label: 'Num', prop: 'num', minWidth: 60, showOverflowTooltip: true},
    {label: 'UniqueID', $label: 'UniqueID', prop: 'uniqueid', minWidth: 100, showOverflowTooltip: true},
    {label: 'Size', $label: 'Size', prop: 'size', showOverflowTooltip: true},
    {label: 'Used Size', $label: 'Used_Size', prop: 'used size', minWidth: 120, showOverflowTooltip: true},
    {label: 'Backup Status', $label: 'Backup_Status', prop: 'backup status', minWidth: 120, showOverflowTooltip: true},
    {label: 'New(Unused)', $label: 'New', prop: 'new (unused)', minWidth: 120, showOverflowTooltip: true},
    {
      label: 'Transaction In Used',
      $label: 'Transaction_In_Used',
      prop: 'transaction in used',
      minWidth: 160,
      showOverflowTooltip: true
    },
    {label: 'In Used', $label: 'In_Used', prop: 'in used', showOverflowTooltip: true},
    {label: 'Current', $label: 'Current', prop: 'current', showOverflowTooltip: true}
  ],
  SQL_Point_In_Time: [
    {label: 'SEQ', $label: 'SEQ', prop: 'seq', showOverflowTooltip: true, minWidth: 50},
    {label: 'Database', $label: 'Database', prop: 'database', showOverflowTooltip: true, minWidth: 90},
    {label: 'Max Cost', $label: 'Max_Cost', prop: 'max cost', showOverflowTooltip: true, minWidth: 90},
    {label: 'Min Cost', $label: 'Min_Cost', prop: 'min cost', showOverflowTooltip: true, minWidth: 90},
    {label: 'Ret Rows', $label: 'Ret_Rows', prop: 'ret rows', showOverflowTooltip: true, minWidth: 90},
    {label: 'SeqScan', $label: 'SeqScan', prop: 'seqscan', showOverflowTooltip: true, minWidth: 80},
    {label: 'Frequency', $label: 'Frequency', prop: 'frequency', showOverflowTooltip: true, minWidth: 100},
    {label: 'Weight', $label: 'Weight', prop: 'weight', showOverflowTooltip: true, minWidth: 80},
    // {label: 'Brief SQL', $label: 'Brief_SQL', prop: 'brief sql', showOverflowTooltip: true, minWidth: 100},
    {label: 'HashCode', $label: 'HashCode', prop: 'hashcode', showOverflowTooltip: true, minWidth: 100, visible: false}, // visible before
    {label: 'SQL', $label: 'SQL', prop: 'sql', showOverflowTooltip: true, minWidth: 100, expand: { formatter: 'sql', code: true }}, // visible: false
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.SQL_Evaluator,
          Operations.Execution_history_of_sql_pattern
        ]
      }
    }
  ],

  Memory_Segment: [
    {label: 'Address', $label: 'Address', prop: 'address', showOverflowTooltip: true},
    {label: 'Type', $label: 'Type', prop: 'type', showOverflowTooltip: true},
    {label: 'Size(MB)', $label: 'Size', prop: 'size(mb)', showOverflowTooltip: true},
    {label: 'Used(MB)', $label: 'Used', prop: 'used(mb)', showOverflowTooltip: true},
    {label: 'Free(MB)', $label: 'Free', prop: 'free(mb)', showOverflowTooltip: true},
    {
      label: 'Used%',
      $label: 'Use',
      prop: 'used(%)',
      widget: 'progress',
      props: {
        gradient: [
          {status: 'success', min: 0, max: 90},
          {status: 'exception', min: 90, max: 100}
        ]
      }
    }
  ],

  DBSystem_Memory_Pool: [
    {label: 'Pool', $label: 'Pool', prop: 'pool', minWidth: 100, showOverflowTooltip: true},
    {label: 'Mem Allocated', $label: 'Mem_Allocated', prop: 'mem allocated', minWidth: 150, showOverflowTooltip: true},
    {
      label: '% of BD Virtual Memory',
      $label: 'BD_Virtual_Memory',
      prop: '% of db virtual memory',
      minWidth: 200,
      showOverflowTooltip: true
    },
    {label: 'Free Mem', $label: 'Free_Mem', prop: 'free mem', minWidth: 100, showOverflowTooltip: true},
    {
      label: '# Allocated Fragment',
      $label: 'Allocated_Fragment',
      prop: '# allocated fragment',
      minWidth: 180,
      showOverflowTooltip: true
    },
    {
      label: '# Free Fragment',
      $label: 'Free_Fragment',
      prop: '# free fragment',
      minWidth: 160,
      showOverflowTooltip: true
    }
  ],
  DBSpace_Information: [
    {label: 'DBSNum', $label: 'DBSNum', prop: 'dbsnum', showOverflowTooltip: true},
    {label: 'DBSpace', $label: 'DBSpace', prop: 'dbspace', showOverflowTooltip: true},
    {label: 'Type', $label: 'Type', prop: 'type', showOverflowTooltip: true},
    {label: 'N Chunks', $label: 'N_Chunks', prop: 'n chunks', showOverflowTooltip: true},
    {label: 'Size(MB)', $label: 'Size', prop: 'size(mb)', showOverflowTooltip: true},
    {label: 'Used(MB)', $label: 'Used', prop: 'used(mb)', showOverflowTooltip: true},
    {label: 'Free(MB)', $label: 'Free', prop: 'free(mb)', showOverflowTooltip: true},
    {
      label: 'used(%)',
      $label: 'used',
      prop: 'used(%)',
      minWidth: 100,
      widget: 'progress',
      props: {gradient: [{status: 'success', min: 0, max: 90}, {status: 'exception', min: 90, max: 100}]},
      showOverflowTooltip: true,
      expand: {
        width: '400px'
      }
    },
    {label: 'Alert Threshold(%)', $label: 'Alert_Threshold', prop: 'alert threshold(%)', showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.Chunk_Information,
          Operations.Chunk_IO_Information,
          Operations.Top_Busy_Table_In_DBSpace
        ]
      }
    }
  ],
  DBSpace_IO_Information: [
    {label: 'DBSNum', $label: 'DBSNum', prop: 'dbsnum', showOverflowTooltip: true},
    {label: 'DBSpace', $label: 'DBSpace', prop: 'dbspace', showOverflowTooltip: true},
    {label: 'Type', $label: 'Type', prop: 'type', showOverflowTooltip: true},
    {label: 'Size(MB)', $label: 'Size', prop: 'size(mb)', showOverflowTooltip: true},
    {label: 'Used(MB)', $label: 'Used', prop: 'used(mb)', showOverflowTooltip: true},
    {label: 'Free(MB)', $label: 'Free', prop: 'free(mb)', showOverflowTooltip: true},
    {label: 'Disk Reads', $label: 'Disk_Reads', prop: 'disk reads', showOverflowTooltip: true},
    {label: 'Disk Writes', $label: 'Disk_Writes', prop: 'disk writes', showOverflowTooltip: true},
    {label: 'Disk Read(MB)', $label: 'Disk_Read', prop: 'disk read(mb)', showOverflowTooltip: true},
    {label: 'Disk Writes(MB)', $label: 'Disk_Write', prop: 'disk write(mb)', showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.Chunk_Information,
          Operations.Chunk_IO_Information,
          Operations.Top_Busy_Table_In_DBSpace
        ]
      }
    }
  ],
  Chunk_Information: [
    {label: 'DBSNum', $label: 'DBSNum', prop: 'dbsnum', showOverflowTooltip: true},
    {label: 'DBSpace', $label: 'DBSpace', prop: 'dbspace', showOverflowTooltip: true},
    {label: 'Type', $label: 'Type', prop: 'type', showOverflowTooltip: true},
    {label: 'ChunkNum', $label: 'ChunkNum', prop: 'chunknum', minWidth: 100, showOverflowTooltip: true},
    {label: 'Status', $label: 'Status', prop: 'status', showOverflowTooltip: true},
    {label: 'Used(MB)', $label: 'Used', prop: 'used(mb)', minWidth: 100, showOverflowTooltip: true},
    {label: 'Free(MB)', $label: 'Free', prop: 'free(mb)', minWidth: 100, showOverflowTooltip: true},
    {
      label: 'used(%)',
      $label: 'used',
      prop: 'used(%)',
      minWidth: 100,
      widget: 'progress',
      props: {gradient: [{status: 'success', min: 0, max: 90}, {status: 'exception', min: 90, max: 100}]},
      showOverflowTooltip: true
    },
    {label: 'File', $label: 'File', prop: 'file', showOverflowTooltip: true}
  ],
  Chunk_IO_Information: [
    {label: 'DBSNum', $label: 'DBSNum', prop: 'dbsnum', showOverflowTooltip: true},
    {label: 'DBSpace', $label: 'DBSpace', prop: 'dbspace', showOverflowTooltip: true},
    {label: 'Type', $label: 'Type', prop: 'type', showOverflowTooltip: true},
    {label: 'ChunkNum', $label: 'ChunkNum', prop: 'chunknum', showOverflowTooltip: true},
    {label: 'Status', $label: 'Status', prop: 'status', showOverflowTooltip: true},
    {label: 'Size(MB)', $label: 'Size', prop: 'size(mb)', minWidth: 100, showOverflowTooltip: true},
    {label: 'Used(MB)', $label: 'Used', prop: 'used(mb)', minWidth: 100, showOverflowTooltip: true},
    {label: 'Free(MB)', $label: 'Free', prop: 'free(mb)', showOverflowTooltip: true},
    {label: 'Disk Reads', $label: 'Disk_Reads', prop: 'disk reads', showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Disk Writes', $label: 'Disk_Writes', prop: 'disk writes', showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Disk Read(MB)', $label: 'Disk_Read', prop: 'disk read(mb)', showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Disk Write(MB)', $label: 'Disk_Write', prop: 'disk write(mb)', showOverflowTooltip: true, visible: false}, // visible before
    {label: 'File', $label: 'File', prop: 'file', showOverflowTooltip: true}
  ],

  File_System_Disk_Space_Utilization: [
    {label: 'File System', $label: 'File_System', prop: 'filesystem', showOverflowTooltip: true},
    {label: '1K-blocks', $label: '1K-blocks', prop: '1k-blocks', showOverflowTooltip: true},
    {label: 'Used', $label: 'Used', prop: 'used', showOverflowTooltip: true},
    {label: 'Use(%)', $label: 'Use', prop: 'use%', showOverflowTooltip: true},
    {label: 'Available', $label: 'Available', prop: 'available', showOverflowTooltip: true},
    {label: 'Mounted on', $label: 'Mounted_on', prop: 'mounted on', showOverflowTooltip: true}
  ],
  Virtual_Processes: [
    {label: 'VP ID', $label: 'VP_ID', prop: 'vp id', showOverflowTooltip: true},
    {label: 'Ready Queue', $label: 'Ready_Queue', prop: 'ready queue', showOverflowTooltip: true},
    {label: 'VP Class', $label: 'VP_Class', prop: 'vp class', showOverflowTooltip: true},
    {label: 'System Time(sec)', $label: 'System_Time(sec)', prop: 'system time(sec)', showOverflowTooltip: true},
    {label: 'User Time(sec)', $label: 'User_Time(sec)', prop: 'user time(sec)', showOverflowTooltip: true}
  ],
  Top_Busy_OS_Processes: [
    {label: 'PID', $label: 'PID', prop: 'pid', showOverflowTooltip: true},
    {label: 'USER', $label: 'USER', prop: 'user', showOverflowTooltip: true},
    {label: 'PR', $label: 'PR', prop: 'pr', showOverflowTooltip: true},
    {label: 'VIRT', $label: 'VIRT', prop: 'virt', showOverflowTooltip: true},
    {label: 'SHR', $label: 'SHR', prop: 'shr', showOverflowTooltip: true},
    {label: 'S', $label: 'S', prop: 's', showOverflowTooltip: true},
    {label: '%CPU', $label: 'CPU', prop: '%cpu', showOverflowTooltip: true},
    {label: '%MEM', $label: 'MEM', prop: '%mem', showOverflowTooltip: true},
    {label: 'TIME+', $label: 'TIME', prop: 'time+', showOverflowTooltip: true},
    {label: 'COMMAND', $label: 'COMMAND', prop: 'command', showOverflowTooltip: true, minWidth: 100}
  ],
  Top_Running_SQL: [
    {label: 'SEQ', $label: 'SEQ', prop: 'seq', minWidth: 60, showOverflowTooltip: true},
    {label: 'Session', $label: 'Session', prop: 'session', minWidth: 100, showOverflowTooltip: true},
    {label: 'User', $label: 'User', prop: 'user', minWidth: 100, showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', minWidth: 100, showOverflowTooltip: true},
    {label: 'Cost', $label: 'Cost', prop: 'cost', minWidth: 80, showOverflowTooltip: true},
    {label: 'Ret Rows', $label: 'Ret_Rows', prop: 'ret rows', minWidth: 100, showOverflowTooltip: true},
    {label: 'SeqScan', $label: 'SeqScan', prop: 'seqscan', minWidth: 100, showOverflowTooltip: true},
    // {label: 'Brief SQL', $label: 'Brief_SQL', prop: 'brief sql', minWidth: 100, showOverflowTooltip: true},
    {label: 'Host Vars', $label: 'Host_Vars', prop: 'host vars', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Host', $label: 'Host', prop: 'host', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'PID', $label: 'PID', prop: 'pid', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'SQL', $label: 'SQL', prop: 'sql', minWidth: 100, showOverflowTooltip: true},
    // {label: 'HashCode', $label: 'HashCode', prop: 'hashcode', minWidth: 100, showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.SQL_Evaluator,
          Operations.Execution_history_of_sql_pattern
        ]
      }
    }
  ],
  Heavy_SQL_Statistics: [
    {label: 'SEQ', $label: 'SEQ', prop: 'seq', minWidth: 60, showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', minWidth: 100, showOverflowTooltip: true},
    {label: 'Max Cost', $label: 'Max_Cost', prop: 'max cost', minWidth: 100, showOverflowTooltip: true},
    {label: 'Min Cost', $label: 'Min_Cost', prop: 'min cost', minWidth: 100, showOverflowTooltip: true},
    {label: 'Ret Rows', $label: 'Ret_Rows', prop: 'ret rows', minWidth: 100, showOverflowTooltip: true},
    {label: 'SeqScan', $label: 'SeqScan', prop: 'seqscan', minWidth: 100, showOverflowTooltip: true},
    {label: 'Frequency', $label: 'Frequency', prop: 'frequency', minWidth: 100, showOverflowTooltip: true},
    {label: 'Weight', $label: 'Weight', prop: 'weight', minWidth: 100, showOverflowTooltip: true},
    // {label: 'Brief SQL', $label: 'Brief_SQL', prop: 'brief sql', minWidth: 100, showOverflowTooltip: true},
    {label: 'Host Vars', $label: 'Host_Vars', prop: 'host vars', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'SQL', $label: 'SQL', prop: 'sql', minWidth: 100, showOverflowTooltip: true},
    // {label: 'Hash Code', $label: 'Hash_Code', prop: 'hashcode', minWidth: 100, showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.SQL_Evaluator,
          Operations.Execution_history_of_sql_pattern
        ]
      }
    }
  ],
  Frequent_SQL_Statistics: [
    {label: 'SEQ', $label: 'SEQ', prop: 'seq', minWidth: 60, showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', minWidth: 100, showOverflowTooltip: true},
    {label: 'Max Cost', $label: 'Max_Cost', prop: 'max cost', minWidth: 100, showOverflowTooltip: true},
    {label: 'Min Cost', $label: 'Min_Cost', prop: 'min cost', minWidth: 100, showOverflowTooltip: true},
    {label: 'Ret Rows', $label: 'Ret_Rows', prop: 'ret rows', minWidth: 100, showOverflowTooltip: true},
    {label: 'SeqScan', $label: 'SeqScan', prop: 'seqscan', minWidth: 100, showOverflowTooltip: true},
    {label: 'Frequency', $label: 'Frequency', prop: 'frequency', minWidth: 100, showOverflowTooltip: true},
    {label: 'Weight', $label: 'Weight', prop: 'weight', minWidth: 100, showOverflowTooltip: true},
    // {label: 'Brief SQL', $label: 'Brief_SQL', prop: 'brief sql', minWidth: 100, showOverflowTooltip: true},
    {label: 'Host Vars', $label: 'Host_Vars', prop: 'host vars', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'SQL', $label: 'SQL', prop: 'sql', minWidth: 100, showOverflowTooltip: true},
    // {label: 'Hash Code', $label: 'Hash_Code', prop: 'hashcode', minWidth: 100, showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.SQL_Evaluator,
          Operations.Execution_history_of_sql_pattern
        ]
      }
    }
  ],

  Sequential_Scan_SQL_Statistics: [
    {label: 'SEQ', $label: 'SEQ', prop: 'seq', minWidth: 60, showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', minWidth: 100, showOverflowTooltip: true},
    {label: 'Max Cost', $label: 'Max_Cost', prop: 'max cost', minWidth: 100, showOverflowTooltip: true},
    {label: 'Min Cost', $label: 'Min_Cost', prop: 'min cost', minWidth: 100, showOverflowTooltip: true},
    {label: 'Ret Rows', $label: 'Ret_Rows', prop: 'ret rows', minWidth: 100, showOverflowTooltip: true},
    {label: 'SeqScan', $label: 'SeqScan', prop: 'seqscan', minWidth: 100, showOverflowTooltip: true},
    {label: 'Frequency', $label: 'Frequency', prop: 'frequency', minWidth: 100, showOverflowTooltip: true},
    {label: 'Weight', $label: 'Weight', prop: 'weight', minWidth: 100, showOverflowTooltip: true},
    // {label: 'Brief SQL', $label: 'Brief_SQL', prop: 'brief sql', minWidth: 100, showOverflowTooltip: true},
    {label: 'Host Vars', $label: 'Host_Vars', prop: 'host vars', minWidth: 100, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'SQL', $label: 'SQL', prop: 'sql', minWidth: 100, showOverflowTooltip: true},
    // {label: 'Hash Code', $label: 'Hash_Code', prop: 'hashcode', minWidth: 100, showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.SQL_Evaluator,
          Operations.Execution_history_of_sql_pattern
        ]
      }
    }
  ],

  Thread: [
    {label: 'Thread ID', $label: 'Thread_ID', prop: 'thread id', showOverflowTooltip: true},
    {label: 'Thread Name', $label: 'Thread_Name', prop: 'thread name', minWidth: 120, showOverflowTooltip: true},
    {label: 'VP ID', $label: 'VP_ID', prop: 'vp id', showOverflowTooltip: true},
    {label: 'VP class', $label: 'VP_class', prop: 'vp class', showOverflowTooltip: true},
    {label: 'prioirity', $label: 'prioirity', prop: 'prioirity', showOverflowTooltip: true},
    {label: 'Tcb address', $label: 'Tcb_address', prop: 'tcb address', minWidth: 120, showOverflowTooltip: true},
    {label: 'Rstcb address', $label: 'Rstcb_address', prop: 'rstcb address', minWidth: 120, showOverflowTooltip: true},
    {label: 'Status', $label: 'Status', prop: 'status', showOverflowTooltip: true}
  ],

  Long_Transaction: [
    {label: 'Host', $label: 'Host', prop: 'host', showOverflowTooltip: true, minWidth: 100, visible: false}, // visible before
    {label: 'Session', $label: 'Session', prop: 'session', showOverflowTooltip: true},
    {label: 'Starting Log', $label: 'Starting_Log', prop: 'starting log', showOverflowTooltip: true, minWidth: 150, visible: false}, // visible before
    {label: 'Log Pos', $label: 'Log_Pos', prop: 'log pos', showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Long Trans', $label: 'Long_Trans', prop: 'long trans', showOverflowTooltip: true, minWidth: 120},
    {label: 'Log Uniq ID', $label: 'Log_Uniq_ID', prop: 'log uniq id', showOverflowTooltip: true, minWidth: 150, visible: false}, // visible before
    {label: 'N Locks', $label: 'N_Locks', prop: 'n locks', showOverflowTooltip: true},
    {label: 'Used Logs', $label: 'Used_Logs', prop: 'used logs', showOverflowTooltip: true, minWidth: 120},
    {label: 'Log Recs', $label: 'Log_Recs', prop: 'log recs', showOverflowTooltip: true, minWidth: 120},
    {label: 'Buf Reads', $label: 'Buf_Reads', prop: 'buf reads', showOverflowTooltip: true, minWidth: 120},
    {label: 'Buf Writes', $label: 'Buf_Writes', prop: 'buf writes', showOverflowTooltip: true, minWidth: 120},
    {label: 'Page Reads', $label: 'Page_Reads', prop: 'Page Reads', showOverflowTooltip: true, minWidth: 120, visible: false}, // visible before
    {label: 'Page Writes', $label: 'Page_Writes', prop: 'Page Writes', showOverflowTooltip: true, minWidth: 120, visible: false}, // visible before
    {label: 'PID', $label: 'PID', prop: 'pid', showOverflowTooltip: true, visible: false}, // visible before
    {label: 'User', $label: 'User', prop: 'user', showOverflowTooltip: true, visible: false} // visible before
  ],

  Event_List: [
    {label: 'ID', $label: 'ID', prop: 'id', minWidth: 60, showOverflowTooltip: true},
    {
      label: 'Occurrence',
      $label: 'Occurrence',
      prop: 'otm',
      minWidth: 100,
      formatter: 'timestampToDate',
      showOverflowTooltip: true
    },
    {
      label: 'Resolution',
      $label: 'Resolution',
      prop: 'rtm',
      minWidth: 100,
      formatter: 'timestampToDate',
      showOverflowTooltip: true
    },
    {label: 'Agent ID', $label: 'Agent_ID', prop: 'ts.id', minWidth: 90, showOverflowTooltip: true},
    {label: 'dbSonar Agent', $label: 'dbSonar_Agent', prop: 'ts.agentName', minWidth: 140, showOverflowTooltip: true},
    {label: 'Severity', $label: 'Severity', prop: 'severity', minWidth: 80, showOverflowTooltip: true},
    {label: 'Event', $label: 'Event', prop: 'eventName', minWidth: 80, showOverflowTooltip: true},
    {label: 'Status', $label: 'Status', prop: 'eventStatus', minWidth: 80, showOverflowTooltip: true},
    {label: 'Remark', $label: 'Remark', prop: 'remark', minWidth: 80, showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.Remark,
          Operations.Get_Event_Notification_List
        ]
      }
    }
  ],
  Alert_Delivery_History: [
    {label: 'ID', $label: 'ID', prop: 'id', minWidth: 60, showOverflowTooltip: true},
    {
      label: 'Delivered Time',
      $label: 'Delivered_Time',
      prop: 'DeliveredTime',
      minWidth: 100,
      showOverflowTooltip: true
    },
    {label: 'dbSonar Agent', $label: 'dbSonar_Agent', prop: 'dbSonarAgent', showOverflowTooltip: true},
    {label: 'IP', $label: 'IP', prop: 'Ip', showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Instance', $label: 'Instance', prop: 'Instance', minWidth: 80, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Event', $label: 'Event', prop: 'Event', minWidth: 80, showOverflowTooltip: true},
    {label: 'Severity', $label: 'Severity', prop: 'Severity', minWidth: 80, showOverflowTooltip: true},
    {label: 'Type', $label: 'Type', prop: 'Type', minWidth: 80, showOverflowTooltip: true, visible: false}, // visible before
    {label: 'Method', $label: 'Method', prop: 'Method', minWidth: 80, showOverflowTooltip: true},
    {label: 'Recipient', $label: 'Recipient', prop: 'Recipient', minWidth: 80, showOverflowTooltip: true},
    {label: 'Target', $label: 'Target', prop: 'Target', minWidth: 80, showOverflowTooltip: true},
    {label: 'Retry', $label: 'Retry', prop: 'Retry', minWidth: 80, showOverflowTooltip: true},
    {label: 'Status', $label: 'Status', prop: 'Status', minWidth: 80, showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.Get_Event_Notification_Recipient_List
        ]
      }
    }
  ],
  Event_Setup: [
    {label: 'ID', $label: 'ID', prop: 'id', visible: false},
    {label: 'Name', $label: 'Name', prop: 'instanceName', showOverflowTooltip: true},
    {label: 'Description', $label: 'Description', prop: 'repDescription', showOverflowTooltip: true},
    {label: 'Host', $label: 'Host', prop: 'dbServerIp', showOverflowTooltip: true},
    {label: 'Status', $label: 'Status', prop: 'status', showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          {
            element: 'dialog-component-link-button',
            // prop: '',
            props: {
              id: 'update',
              type: 'text',
              size: 'mini',
              label: 'Update',
              $label: 'Update',
              // icon: 'el-icon-arrow-right',
              component: 'ConfigAlarmStrategy',
              title: 'Event Setup',
              $title: 'form.EventUpdate.Event_Setup',
              width: '70%',
              queryKeys: ['id', 'instanceName']
            }
          },
          {
            element: 'dialog-component-link-button',
            // prop: '',
            props: {
              id: 'taskList',
              type: 'text',
              size: 'mini',
              label: 'Task List',
              $label: 'Task_List',
              // icon: 'el-icon-arrow-right',
              component: 'TaskList',
              title: 'Task List',
              $title: 'form.TaskListUpdate.Task_List',
              width: '70%',
              queryKeys: ['id', 'agentName']
            }
          },
          {
            element: 'dialog-component-link-button',
            // prop: '',
            props: {
              id: 'notificationAssignment',
              type: 'text',
              size: 'mini',
              label: 'Notification Assignment',
              $label: 'Notification_Assignment',
              // icon: 'el-icon-arrow-right',
              component: 'NotificationAssignment',
              title: 'Notification Assignment',
              $title: 'table_operations.Notification_Assignment',
              width: '70%',
              queryKeys: ['id', 'agentName']
            }
          }
        ]
      }
    }
  ],
  HealthCheck_Strategy: [
    // {label: 'ID', $label: 'ID', prop: 'id', visible: false},
    {label: 'Name', $label: 'Name', prop: 'name', showOverflowTooltip: true},
    // {label: 'Schedule', $label: 'Schedule', prop: 'schedule', showOverflowTooltip: true},
    {label: 'CreateDate', $label: 'CreateDate', prop: 'dateCreated', showOverflowTooltip: true},
    {
      label: 'Enable',
      $label: 'Enable',
      prop: 'enable',
      showOverflowTooltip: true,
      widget: 'icon',
      props: {
        trueIcon: 'el-icon-check',
        trueStyle: {color: 'green'},
        falseIcon: 'el-icon-close',
        falseStyle: {color: 'red'}
      }
    },
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        options: [
          {
            element: 'dialog-component-link-button',
            // prop: '',
            props: {
              id: 'update',
              type: 'text',
              size: 'mini',
              label: 'Update',
              $label: 'Update',
              // icon: 'el-icon-arrow-right',
              component: 'HealthCheckStrategyConfig',
              title: 'Update Strategy',
              $title: 'form.AddStrategy.Update_Strategy',
              height: '600px',
              width: '70%',
              queryKeys: ['id']
            }
          }
          /*
          { element: 'x-confirm-button',
            // prop: '',
            props: {
              id: 'delete',
              type: 'text',
              size: 'mini',
              label: 'Delete',
              // icon: 'el-icon-arrow-right',
              checkParamsNotNull: false,
              checkParamsNotNullErrorMessage: '',
              promptMessage: 'Click the "Confirm" button to delete this Strategy？',
              confirmMessage: '',
              cancelMessage: '',
              confirmButtonText: 'Confirm',
              cancelButtonText: 'Cancel',
              url: '/app-sonar-0.1/examinationStrage/delete',
              httpMethod: 'delete',
              params: {},
              queryKeys: ['id']
            }
          }
          */
        ]
      }
    }
  ],
  Health_Check_Report: [
    // {label: 'ID', $label: 'ID', prop: 'id', visible: false},
    {label: 'JobName', $label: 'JobName', prop: 'examinationJobName', showOverflowTooltip: true},
    {label: 'StartDate', $label: 'StartDate', prop: 'dateCreated', showOverflowTooltip: true},
    {label: 'EndDate', $label: 'EndDate', prop: 'endDate', showOverflowTooltip: true},
    {label: 'Fail Item Count', $label: 'Fail_Item_Count', prop: 'failItemCount', showOverflowTooltip: true},
    {label: 'Status', $label: 'Status', prop: 'jobStatus.name', showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        options: [
          {
            element: 'dialog-component-link-button',
            // prop: '',
            props: {
              type: 'text',
              size: 'mini',
              label: 'Detail',
              $label: 'Detail',
              // icon: 'el-icon-arrow-right',
              component: 'HealthCheckReportDetail',
              title: 'HealthCheck Detail',
              $title: 'form.AddTask.HealthCheck_Detail',
              width: '60%',
              queryKeys: ['id', 'examinationJobId']
            }
          }
        ]
      }
    }
  ],
  HealthCheck_Task: [
    // {label: 'ID', $label: 'ID', prop: 'id', visible: false},
    {label: 'JobName', $label: 'JobName', prop: 'jobName', showOverflowTooltip: true},
    // {label: 'Type', $label: 'Type', prop: 'type', showOverflowTooltip: true},
    {label: 'Schedule', $label: 'Schedule', prop: 'pattern', showOverflowTooltip: true},
    {label: 'CreateDate', $label: 'CreateDate', prop: 'dateCreated', showOverflowTooltip: true},
    {label: 'Status', $label: 'Status', prop: 'jobStatus.name', showOverflowTooltip: true},
    // {label: 'UpdateDate', $label: 'UpdateDate', prop: 'updateDate', showOverflowTooltip: true},
    {
      label: 'Enable',
      $label: 'Enable',
      prop: 'enable',
      showOverflowTooltip: true,
      widget: 'icon',
      props: {
        trueIcon: 'el-icon-check',
        trueStyle: {color: 'green'},
        falseIcon: 'el-icon-close',
        falseStyle: {color: 'red'}
      }
    },
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        options: [
          {
            element: 'dialog-component-link-button',
            // prop: '',
            props: {
              id: 'update',
              type: 'text',
              size: 'mini',
              label: 'Update',
              $label: 'Update',
              // icon: 'el-icon-arrow-right',
              component: 'HealthCheckTaskConfig',
              title: 'Update Task',
              $title: 'form.AddTask.Update_Task',
              height: '600px',
              width: '70%',
              queryKeys: ['id']
            }
          }
          /*
          { element: 'x-confirm-button',
            // prop: '',
            props: {
              id: 'delete',
              type: 'text',
              size: 'mini',
              label: 'Delete',
              // icon: 'el-icon-arrow-right',
              checkParamsNotNull: false,
              checkParamsNotNullErrorMessage: '',
              promptMessage: 'Click the "Confirm" button to delete this Task？',
              confirmMessage: '',
              cancelMessage: '',
              confirmButtonText: 'Confirm',
              cancelButtonText: 'Cancel',
              url: '/app-sonar-0.1/examinationJob/delete',
              httpMethod: 'delete',
              params: {},
              queryKeys: ['id']
            }
          }
          */
        ]
      }
    }
  ],
  Setting_User: [
    {label: 'User Account', $label: 'User_Account', prop: 'loginName', showOverflowTooltip: true},
    {label: 'E-Mail', $label: 'E-Mail', prop: 'email', showOverflowTooltip: true},
    {label: 'CellPhone', $label: 'CellPhone', prop: 'cellphone', showOverflowTooltip: true},
    {
      label: 'Enabled',
      $label: 'Enabled',
      prop: 'enabled',
      showOverflowTooltip: true,
      widget: 'icon',
      minWidth: 100,
      props: {
        trueValue: 'Y',
        trueIcon: 'el-icon-check',
        trueStyle: {color: 'green'},
        falseValue: 'N',
        falseIcon: 'el-icon-close',
        falseStyle: {color: 'red'}
      }
    },
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          {
            element: 'click-button',
            // prop: '',
            props: {
              id: 'update',
              type: 'text',
              size: 'mini',
              label: 'Update',
              $label: 'Update',
              // icon: 'el-icon-arrow-right',
              queryKeys: ['id']
            }
          },
          {
            element: 'click-button',
            // prop: '',
            props: {
              id: 'detail',
              type: 'text',
              size: 'mini',
              label: 'Detail',
              $label: 'Detail',
              // icon: 'el-icon-arrow-right',
              queryKeys: ['id']
            }
          },
          {
            element: 'click-button',
            // prop: '',
            props: {
              id: 'reset',
              type: 'text',
              size: 'mini',
              label: 'Reset Pwd',
              $label: 'Reset_Pwd',
              // icon: 'el-icon-arrow-right',
              queryKeys: ['id']
            }
          },
          {
            element: 'click-button',
            // prop: '',
            props: {
              id: 'authorization',
              type: 'text',
              size: 'mini',
              label: 'Authorization',
              $label: 'Authorization',
              // icon: 'el-icon-arrow-right',
              queryKeys: ['id']
            }
          },
          {
            element: 'x-confirm-button',
            // prop: '',
            props: {
              id: 'delete',
              type: 'text',
              size: 'mini',
              label: 'Delete',
              $label: 'Delete',
              // icon: 'el-icon-arrow-right',
              checkParamsNotNull: false,
              checkParamsNotNullErrorMessage: '',
              promptMessage: 'Click the "Confirm" button to delete this user？',
              $promptMessage: 'confirm.User_Message',
              confirmMessage: '',
              $confirmMessage: 'confirm.delete_Success',
              cancelMessage: '',
              confirmButtonText: 'Confirm',
              $confirmButtonText: 'confirm.Confirm',
              cancelButtonText: 'Cancel',
              $cancelButtonText: 'confirm.Cancel',
              url: '/app-sonar-0.1/targetServer/delUser',
              httpMethod: 'delete',
              params: {},
              queryKeys: ['id'],
              validate: 'isAdmin'
            }
          }
        ]
      }
    }
  ],
  Setting_Email: [
    {label: 'ID', $label: 'ID', prop: 'id', visible: false},
    {label: 'Name', $label: 'Name', prop: 'msName', showOverflowTooltip: true},
    {label: 'E-Mail Account', $label: 'E-Mail_Account', prop: 'msAcct', showOverflowTooltip: true},
    {label: 'IP', $label: 'IP', prop: 'msHost', showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          {
            element: 'dialog-component-link-button',
            // prop: '',
            props: {
              id: 'update',
              type: 'text',
              size: 'mini',
              label: 'Update',
              $label: 'Update',
              // icon: 'el-icon-arrow-right',
              component: 'ConfigSmtpEmail',
              title: 'Update Email Server',
              $title: 'form.SmtpEmail.Update_Email_Server',
              height: '600px',
              width: '70%',
              queryKeys: ['id', 'instanceName']
            }
          },
          {
            element: 'x-confirm-button',
            // prop: '',
            props: {
              id: 'delete',
              type: 'text',
              size: 'mini',
              label: 'Delete',
              $label: 'Delete',
              // icon: 'el-icon-arrow-right',
              checkParamsNotNull: false,
              checkParamsNotNullErrorMessage: '',
              promptMessage: 'Click the "Confirm" button to delete this email？',
              $promptMessage: 'confirm.Email_Message',
              confirmMessage: '',
              $confirmMessage: 'confirm.delete_Success',
              cancelMessage: '',
              confirmButtonText: 'Confirm',
              $confirmButtonText: 'confirm.Confirm',
              cancelButtonText: 'Cancel',
              $cancelButtonText: 'confirm.Cancel',
              url: '/app-sonar-0.1/mailServer/delete',
              httpMethod: 'delete',
              params: {},
              queryKeys: ['id']
            }
          }
        ]
      }
    }
  ],
  Instance_List: [
    {label: 'ID', $label: 'ID', prop: 'id', visible: false},
    {label: 'Agent Name', $label: 'Agent_Name', prop: 'agentName', showOverflowTooltip: true},
    {label: 'Instances Name', $label: 'Instances_Name', prop: 'instanceName', showOverflowTooltip: true},
    {label: 'Description', $label: 'Description', prop: 'tsDescription', showOverflowTooltip: true},
    {label: 'Host', $label: 'Host', prop: 'dbServerIp', showOverflowTooltip: true},
    {label: 'Status', $label: 'Status', prop: 'status', showOverflowTooltip: true},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          {
            element: 'dialog-component-link-button',
            // prop: '',
            props: {
              id: 'update',
              type: 'text',
              size: 'mini',
              label: 'Update',
              $label: 'Update',
              // icon: 'el-icon-arrow-right',
              component: 'InstanceUpdateConfig',
              title: 'Update Instance',
              $title: 'form.InstanceUpdate.Update_Instance',
              height: '600px',
              width: '70%',
              queryKeys: ['id']
            }
          },
          {
            element: 'x-confirm-button',
            // prop: '',
            props: {
              id: 'delete',
              type: 'text',
              size: 'mini',
              label: 'Delete',
              $label: 'Delete',
              // icon: 'el-icon-arrow-right',
              checkParamsNotNull: false,
              checkParamsNotNullErrorMessage: '',
              promptMessage: 'Click the "Confirm" button to delete this instance and the data will be lost？',
              $promptMessage: 'confirm.Instance_Message',
              confirmMessage: '',
              $confirmMessage: 'confirm.delete_Success',
              cancelMessage: '',
              confirmButtonText: 'Confirm',
              $confirmButtonText: 'confirm.Confirm',
              cancelButtonText: 'Cancel',
              $cancelButtonText: 'confirm.Cancel',
              url: '/app-sonar-0.1/targetServer/delServer',
              httpMethod: 'delete',
              params: {},
              queryKeys: ['id'],
              validate: 'isCurrentInstance'
            }
          },
          {
            element: 'dialog-component-link-button',
            // prop: '',
            props: {
              id: 'deviceUpdate',
              type: 'text',
              size: 'mini',
              label: 'I/O Device Capture',
              $label: 'I_O_Device_Capture',
              // icon: 'el-icon-arrow-right',
              component: 'IODeviceCapture',
              title: 'I/O Device Capture List',
              $title: 'form.IODeviceCaptureList.IODeviceCaptureList',
              height: '600px',
              width: '50%',
              queryKeys: ['id', 'agentName']
            }
          },
          {
            element: 'dialog-component-link-button',
            // prop: '',
            props: {
              id: 'dataCapture',
              type: 'text',
              size: 'mini',
              label: 'Data Capture Threshold',
              $label: 'Data_Capture_Threshold',
              // icon: 'el-icon-arrow-right',
              component: 'dataCapture',
              title: 'Data Capture Threshold',
              $title: 'form.DataCapture.DataCaptureThreshold',
              width: '50%',
              queryKeys: ['id', 'agentName']
            }
          },
          {
            element: 'dialog-component-link-button',
            // prop: '',
            props: {
              id: 'dataRecycle',
              type: 'text',
              size: 'mini',
              label: 'Data Recycle',
              $label: 'Data_Recycle',
              // icon: 'el-icon-arrow-right',
              component: 'dataRecycle',
              title: 'Data Recycle',
              $title: 'form.DataCapture.Data_Recycle',
              height: '600px',
              width: '50%',
              queryKeys: ['id', 'agentName']
            }
          }
        ]
      }
    }
  ],
  List_Of_Opened_Table_In_Session: [
    {label: 'Partnum', $label: 'Partnum', prop: 'partnum', showOverflowTooltip: true},
    {label: 'DBSpace', $label: 'DBSpace', prop: 'dbspace', showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', showOverflowTooltip: true},
    {label: 'Table/Index', $label: 'Table_Index', prop: 'table/index', showOverflowTooltip: true},
    {label: 'N Rows', $label: 'N_Rows', prop: 'n rows', showOverflowTooltip: true},
    {label: 'RowSize(KB)', $label: 'RowSize', prop: 'rowsize(kb)', showOverflowTooltip: true},
    {label: 'Usage Count', $label: 'Usage_Count', prop: 'usage count', showOverflowTooltip: true},
    {label: 'Open Count', $label: 'Open_Count', prop: 'open count', showOverflowTooltip: true},
    {label: 'Temp Table', $label: 'Temp_Table', prop: 'temp table', showOverflowTooltip: true},
    {label: 'Sort File', $label: 'Sort_File', prop: 'sort file', showOverflowTooltip: true},
    {label: 'Perm_Sys_tmp_Tbl', $label: 'Perm_Sys_tmp_Tbl', prop: 'perm_sys_tmp_tbl', showOverflowTooltip: true},
    {label: 'Page Lock', $label: 'Page_Lock', prop: 'page lock', showOverflowTooltip: true, visible: false} // visible before
  ],
  License_Info: [
    {label: 'Config Name', $label: 'Config_Name', prop: 'config name', showOverflowTooltip: true},
    {label: 'Server Machine', $label: 'Server_Machine', prop: 'server machine', showOverflowTooltip: true},
    {label: 'Host IP', $label: 'Host_IP', prop: 'host ip', showOverflowTooltip: true},
    {label: 'DB Server', $label: 'DB_Server', prop: 'db server', showOverflowTooltip: true},
    {
      label: 'Days before expiration',
      $label: 'Days_before_expiration',
      prop: 'days before expiration',
      showOverflowTooltip: true
    }
  ],
  Lock_Waits: [
    {label: 'Session', $label: 'Session', prop: 'session', showOverflowTooltip: true},
    {label: 'Host', $label: 'Host', prop: 'host', showOverflowTooltip: true},
    {label: 'PID', $label: 'PID', prop: 'pid', showOverflowTooltip: true},
    {label: 'TTY', $label: 'TTY', prop: 'tty', showOverflowTooltip: true},
    {label: 'Database', $label: 'Database', prop: 'database', showOverflowTooltip: true},
    {label: 'Table/Index', $label: 'Table_Index', prop: 'table/index', showOverflowTooltip: true},
    {label: 'Lock Type', $label: 'Lock_Type', prop: 'lock type', showOverflowTooltip: true}
  ],

  Get_Event_Notification_Recipient_List: [
    {label: 'Event', $label: 'Event', prop: 'event', showOverflowTooltip: true},
    {label: 'Login Name', $label: 'Login_Name', prop: 'login name', showOverflowTooltip: true},
    {label: 'Last Name', $label: 'Last_Name', prop: 'last name', showOverflowTooltip: true},
    {label: 'First Name', $label: 'First_Name', prop: 'first name', showOverflowTooltip: true},
    {label: 'E-Mail', $label: 'E_Mail', prop: 'e-mail', showOverflowTooltip: true},
    {label: 'Cellphone', $label: 'Cellphone', prop: 'cellphone', showOverflowTooltip: true}
  ],
  Get_Event_Notification_List: [
    {label: 'Event', $label: 'Event', prop: 'event', showOverflowTooltip: true},
    {label: 'dbSonar Instance', $label: 'dbSonar_Instance', prop: 'dbsonar instance', showOverflowTooltip: true},
    {label: 'IP', $label: 'IP', prop: 'ip', showOverflowTooltip: true},
    {label: 'Severity', $label: 'Severity', prop: 'severity', showOverflowTooltip: true},
    {label: 'Type', $label: 'Type', prop: 'type', showOverflowTooltip: true},
    {label: 'Recipient', $label: 'Recipient', prop: 'recipient', showOverflowTooltip: true},
    {label: 'Target', $label: 'Target', prop: 'target', showOverflowTooltip: true},
    {label: 'Time', $label: 'Time', prop: 'time', showOverflowTooltip: true},
    {label: 'Status', $label: 'Status', prop: 'status', showOverflowTooltip: true}
  ],
  DB_Parameter_Analysis_Report: [
    {label: 'DB Parameter Name', $label: 'DB_Parameter_Name', prop: 'DB Parameter Name', minWidth: '20%', showOverflowTooltip: true},
    {label: 'Effective Value', $label: 'Effective_Value', prop: 'Effective Value', minWidth: '20%', showOverflowTooltip: true},
    {label: 'Original Value', $label: 'Original_Value', prop: 'Original Value', minWidth: '20%', showOverflowTooltip: true},
    {label: 'Suggestions', $label: 'Suggestions', prop: 'Suggestions', minWidth: '40%', widget: 'html'}
  ],
  Diff_Cost_Sql_Pattern: [
    {$label: 'database', prop: 'database', minWidth: 100, showOverflowTooltip: true},
    {$label: 'max_cost', prop: 'max_cost', minWidth: 100, showOverflowTooltip: true, widget: 'compare', props: { a: 'max_cost', b: 't_max_cost', colors: ['#F56C6C', '#409EFF', '#67C23A'] }},
    {$label: 'min_cost', prop: 'min_cost', minWidth: 100, showOverflowTooltip: true, widget: 'compare', props: { a: 'min_cost', b: 't_min_cost', colors: ['#F56C6C', '#409EFF', '#67C23A'] }},
    {$label: 't_max_cost', prop: 't_max_cost', minWidth: 100, showOverflowTooltip: true},
    {$label: 't_min_cost', prop: 't_min_cost', minWidth: 100, showOverflowTooltip: true},
    // {$label: 'brief_sql', prop: 'brief_sql', minWidth: 100, showOverflowTooltip: true},
    {$label: 'sql', prop: 'sql', minWidth: 100, showOverflowTooltip: true, expand: { formatter: 'sql', code: true }},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.SQL_Evaluator,
          Operations.Execution_history_of_sql_pattern
        ]
      }
    }
  ],
  Diff_Frequency_Sql_Pattern: [
    {$label: 'database', prop: 'database', minWidth: 100, showOverflowTooltip: true},
    {$label: 'freq', prop: 'freq', minWidth: 100, showOverflowTooltip: true, widget: 'compare', props: { a: 'freq', b: 't_freq', colors: ['#F56C6C', '#409EFF', '#67C23A'] }},
    {$label: 't_freq', prop: 't_freq', minWidth: 100, showOverflowTooltip: true},
    // {$label: 'Brief_SQL', prop: 'brief sql', minWidth: 100, showOverflowTooltip: true},
    {$label: 'sql', prop: 'sql', minWidth: 100, showOverflowTooltip: true, expand: { formatter: 'sql', code: true }},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.SQL_Evaluator,
          Operations.Execution_history_of_sql_pattern
        ]
      }
    }
  ],
  Diff_Weight_Sql_Pattern: [
    {$label: 'database', prop: 'database', minWidth: 100, showOverflowTooltip: true},
    {$label: 'weight', prop: 'weight', minWidth: 100, showOverflowTooltip: true, widget: 'compare', props: { a: 'weight', b: 't_weight', colors: ['#F56C6C', '#409EFF', '#67C23A'] }},
    {$label: 't_weight', prop: 't_weight', minWidth: 100, showOverflowTooltip: true},
    // {$label: 'Brief_SQL', prop: 'brief sql', minWidth: 100, showOverflowTooltip: true},
    {$label: 'sql', prop: 'sql', minWidth: 100, showOverflowTooltip: true, expand: { formatter: 'sql', code: true }},
    {
      label: 'Operations',
      $label: 'Operations',
      prop: 'operations',
      width: 100,
      fixed: 'right',
      widget: 'operations',
      props: {
        type: 'dropdown',
        options: [
          Operations.SQL_Evaluator,
          Operations.Execution_history_of_sql_pattern
        ]
      }
    }
  ]

}
const i18n_namespace = 'table'

export default {
  GET: config => {
    const {id} = param2Obj(config.url)
    if (id) {
      const columns = JSON.parse(JSON.stringify(METADATA[id]))
      columns.forEach(column => {
        if (column.$label) {
          column.$label = i18n_namespace + '.' + id + '.' + column.$label
        }
        if (column.prop === 'operations') {
          column.props.options.forEach(opt => {
            if (opt.props.$label) {
              opt.props.$label = i18n_namespace + '_' + 'operations' + '.' + opt.props.$label
            }
          })
        }
      })
      return columns
    }
    return []
  }
}
