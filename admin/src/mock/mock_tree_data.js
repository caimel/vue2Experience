import { param2Obj } from '@/utils/param2Obj'

const ConnectionDatabase = {
  id: '#Connection_Database',
  label: 'Connection - Database',
  children: [
    {
      id: '#Connection_Database|DB_NEW_SESSIONS_TR',
      label: 'New DB Sessions',
      children: [],
      value: {
        id: 'DB_NEW_SESSIONS_TR',
        title: {
          text: 'New DB Sessions'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_NEW_SESSIONS_TR'
        }
      }
    },
    {
      id: '#Connection_Database|ACTIVE_DB_CONN_TR',
      label: 'Active DB Connections',
      children: [],
      value: {
        id: 'ACTIVE_DB_CONN_TR',
        settings: {
          type: 'line',
          metrics: ['Active DB Connections'],
          dimension: ['key']
        },
        title: {
          text: 'Active DB Connections',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'ACTIVE_DB_CONN_TR'
        }
      }
    },
    {
      id: '#Connection_Database|DB_CONNECTION_TM_TR',
      label: 'DB Connection Speed(secs)',
      children: [],
      value: {
        id: 'DB_CONNECTION_TM_TR',

        settings: {
          type: 'line',
          metrics: ['DB Connection Speed(secs)'],
          dimension: ['key']
        },
        title: {
          text: 'DB Connection Speed(secs)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_CONNECTION_TM_TR'
        }
      }
    },
    {
      id: '#Connection_Database|DB_IPCSHM_CONN_TR',
      label: 'DB Connection(ipcshm)',
      children: [],
      value: {
        id: 'DB_IPCSHM_CONN_TR',

        settings: {
          type: 'line',
          metrics: ['NETTYPE ipcshm'],
          dimension: ['key']
        },
        title: {
          text: 'DB Connection(ipcshm)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_IPCSHM_CONN_TR'
        }
      }
    },
    {
      id: '#Connection_Database|DB_IPCSTR_CONN_TR',
      label: 'DB Connections(ipcstr)',
      children: [],
      value: {
        id: 'DB_IPCSTR_CONN_TR',

        settings: {
          type: 'line',
          metrics: ['NETTYPW ipcstr'],
          dimension: ['key']
        },
        title: {
          text: 'DB Connections(ipcstr)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_IPCSTR_CONN_TR'
        }
      }
    },
    {
      id: '#Connection_Database|DB_SOCTCP_CONN_TR',
      label: 'DB Connections(soctcp)',
      children: [],
      value: {
        id: 'DB_SOCTCP_CONN_TR',

        settings: {
          type: 'line',
          metrics: ['NETTYPE soctcp'],
          dimension: ['key']
        },
        title: {
          text: 'DB Connections(soctcp)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_SOCTCP_CONN_TR'
        }
      }
    },
    {
      id: '#Connection_Database|DB_TLITCP_CONN_TR',
      label: 'DB Connections(tlitcp)',
      children: [],
      value: {
        id: 'DB_TLITCP_CONN_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['NETTYPE tlitcp'],
          dimension: ['key']
        },
        title: {
          text: 'DB Connections(tlitcp)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_TLITCP_CONN_TR'
        }
      }
    }
  ]
}
const ConnectionOS = {
  id: '#Connection_OS',
  label: 'Connection - OS',
  children: [
    {
      id: '#Connection_OS|NET_SEND_Q_TR',
      label: 'Network Sending Queue',
      children: [],
      value: {
        id: 'NET_SEND_Q_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Network Sending Queue'],
          dimension: ['key']
        },
        title: {
          text: 'Network Sending Queue',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'NET_SEND_Q_TR'
        }
      }
    },
    {
      id: '#Connection_OS|NET_WAIT_STATUS_TR',
      label: 'Network Wait Status',
      children: [],
      value: {
        id: 'NET_WAIT_STATUS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Network Connection Wait'],
          dimension: ['key']
        },
        title: {
          text: 'Network Wait Status',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'NET_WAIT_STATUS_TR'
        }
      }
    },
    {
      id: '#Connection_OS|NET_WAIT_FIN_TR',
      label: 'Network Fin_Wait + Fin_Wait 2',
      children: [],
      value: {
        id: 'NET_WAIT_FIN_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Network Fin Wait'],
          dimension: ['key']
        },
        title: {
          text: 'Network Fin_Wait + Fin_Wait 2',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'NET_WAIT_FIN_TR'
        }
      }
    },
    {
      id: '#Connection_OS|NET_CONN_TR',
      label: 'Network Connections',
      children: [],
      value: {
        id: 'NET_CONN_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Network Connections'],
          dimension: ['key']
        },
        title: {
          text: 'Network Connections',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'NET_CONN_TR'
        }
      }
    },
    {
      id: '#Connection_OS|NET_RECE_Q_TR',
      label: 'Network Receiving Queue',
      children: [],
      value: {
        id: 'NET_RECE_Q_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Network Receiving Queue'],
          dimension: ['key']
        },
        title: {
          text: 'Network Receiving Queue',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'NET_RECE_Q_TR'
        }
      }
    },
    {
      id: '#Connection_OS|NET_WAIT_TR',
      label: 'Network Connection Wait',
      children: [],
      value: {
        id: 'NET_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Network Connection Wait'],
          dimension: ['key']
        },
        title: {
          text: 'Network Connection Wait',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'NET_WAIT_TR'
        }
      }
    }
  ]
}
const CPUDatabase = {
  id: '#CPU_Database',
  label: 'CPU - Database',
  children: [
    {
      id: '#CPU_Database|DB_AVG_VP_BUSY_RATE_TR',
      label: 'DB VP Busy Rate(Avg)',
      children: [],
      value: {
        id: 'DB_AVG_VP_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB VP Busy Rate(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'DB VP Busy Rate(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_AVG_VP_BUSY_RATE_TR'
        }
      }
    },
    {
      id: '#CPU_Database|DB_VP_BUSY_RATE_TR',
      label: 'DB VP Busy Rate',
      children: [],
      value: {
        id: 'DB_VP_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB VP Busy Rate:cpu1'],
          dimension: ['key']
        },
        title: {
          text: 'DB VP Busy Rate',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_VP_BUSY_RATE_TR'
        }
      }
    },
    {
      id: '#CPU_Database|DB_MAX_VP_BUSY_RATE_TR',
      label: 'DB VP Busy Rate(Max)',
      children: [],
      value: {
        id: 'DB_MAX_VP_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB VP Busy Rate(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'DB VP Busy Rate(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_MAX_VP_BUSY_RATE_TR'
        }
      }
    }
  ]
}
const CPUOS = {
  id: '#CPU_OS',
  label: 'CPU - OS',
  children: [
    {
      id: '#CPU_OS|CPU_BUSY_RATE_AM_TR',
      label: 'CPU Busy Rate(Max)/(Avg)',
      children: [],
      value: {
        id: 'CPU_BUSY_RATE_AM_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Busy Rate: CPU(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'CPU Busy Rate(Max)/(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CPU_BUSY_RATE_AM_TR'
        }
      }
    },
    {
      id: '#CPU_OS|CPU_MAX_BUSY_RATE_TR',
      label: 'CPU Busy Rate(Max)',
      children: [],
      value: {
        id: 'CPU_MAX_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Busy Rate(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'CPU Busy Rate(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CPU_MAX_BUSY_RATE_TR'
        }
      }
    },
    {
      id: '#CPU_OS|CPU_BUSY_RATE_TR',
      label: 'CPU Busy Rate ',
      children: [],
      value: {
        id: 'CPU_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Busy-CPU:0'],
          dimension: ['key']
        },
        title: {
          text: 'CPU Busy Rate ',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CPU_BUSY_RATE_TR'
        }
      }
    },
    {
      id: '#CPU_OS|CPU_AVG_IO_WAIT_TR',
      label: 'CPU I/O Wait(Avg)',
      children: [],
      value: {
        id: 'CPU_AVG_IO_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Avg I/O Wait(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'CPU I/O Wait(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CPU_AVG_IO_WAIT_TR'
        }
      }
    },
    {
      id: '#CPU_OS|CPU_MAX_IO_WAIT_TR',
      label: 'CPU I/O Wait(Max)',
      children: [],
      value: {
        id: 'CPU_MAX_IO_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Avg I/O Wait(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'CPU I/O Wait(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CPU_MAX_IO_WAIT_TR'
        }
      }
    },
    {
      id: '#CPU_OS|CPU_IO_WAIT_TR',
      label: 'CPU I/O Wait ',
      children: [],
      value: {
        id: 'CPU_IO_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU I/O Wait-CPU:0'],
          dimension: ['key']
        },
        title: {
          text: 'CPU I/O Wait ',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CPU_IO_WAIT_TR'
        }
      }
    },
    {
      id: '#CPU_OS|CPU_AVG_BUSY_RATE_TR',
      label: 'CPU Busy Rate(Avg)',
      children: [],
      value: {
        id: 'CPU_AVG_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Busy Rate(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'CPU Busy Rate(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CPU_AVG_BUSY_RATE_TR'
        }
      }
    }
  ]
}
const DatabaseBuffer = {
  id: '#Database_Buffer',
  label: 'Database - Buffer',
  children: [
    {
      id: '#Database_Buffer|BUFFER_READ_CACHE_TR',
      label: 'Buf Reads Cache Rate ',
      children: [],
      value: {
        id: 'BUFFER_READ_CACHE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buf Reads Cache'],
          dimension: ['key']
        },
        title: {
          text: 'Buf Reads Cache Rate ',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'BUFFER_READ_CACHE_TR'
        }
      }
    },
    {
      id: '#Database_Buffer|BUFFER_WRITE_CACHE_TR',
      label: 'Buf Writes Cache Rate',
      children: [],
      value: {
        id: 'BUFFER_WRITE_CACHE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buf Writes Cache'],
          dimension: ['key']
        },
        title: {
          text: 'Buf Writes Cache Rate',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'BUFFER_WRITE_CACHE_TR'
        }
      }
    },
    {
      id: '#Database_Buffer|BUFFER_RWS_CACHE_TR',
      label: 'Buf Reads/Write Cache Rate',
      children: [],
      value: {
        id: 'BUFFER_RWS_CACHE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buf Reads Cache', 'Buf Writes Cache'],
          dimension: ['key']
        },
        title: {
          text: 'Buf Reads/Write Cache Rate',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'BUFFER_RWS_CACHE_TR'
        }
      }
    },
    {
      id: '#Database_Buffer|BUFFER_WAIT_TR',
      label: 'Buffer Waits/sec',
      children: [],
      value: {
        id: 'BUFFER_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buffer Waits/sec'],
          dimension: ['key']
        },
        title: {
          text: 'Buffer Waits/sec',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'BUFFER_WAIT_TR'
        }
      }
    },
    {
      id: '#Database_Buffer|LATCH_BUFFER_WAIT_TR',
      label: 'Buffer / Latch Wait/sec',
      children: [],
      value: {
        id: 'LATCH_BUFFER_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buffer Waits', 'Latch Waits'],
          dimension: ['key']
        },
        title: {
          text: 'Buffer / Latch Wait/sec',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'LATCH_BUFFER_WAIT_TR'
        }
      }
    },
    {
      id: '#Database_Buffer|BUFFER_READ_TR',
      label: 'Buf Readss',
      children: [],
      value: {
        id: 'BUFFER_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buf Readss/sec'],
          dimension: ['key']
        },
        title: {
          text: 'Buf Readss',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'BUFFER_READ_TR'
        }
      }
    },
    {
      id: '#Database_Buffer|BUFFER_WRITE_TR',
      label: 'Buf Writess',
      children: [],
      value: {
        id: 'BUFFER_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buf Writess'],
          dimension: ['key']
        },
        title: {
          text: 'Buf Writess',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'BUFFER_WRITE_TR'
        }
      }
    },
    {
      id: '#Database_Buffer|BUFFER_RWS_TR',
      label: 'Buf Readss/Writes',
      children: [],
      value: {
        id: 'BUFFER_RWS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buf Reads', 'Buf Writes'],
          dimension: ['key']
        },
        title: {
          text: 'Buf Readss/Writes',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'BUFFER_RWS_TR'
        }
      }
    }
  ]
}
const DatabaseConnection = {
  id: '#Database_Connection',
  label: 'Database - Connection',
  children: [
    {
      id: '#Database_Connection|DB_SOCTCP_CONN_TR',
      label: 'DB Connections(soctcp)',
      children: [],
      value: {
        id: 'DB_SOCTCP_CONN_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['NETTYPE soctcp'],
          dimension: ['key']
        },
        title: {
          text: 'DB Connections(soctcp)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_SOCTCP_CONN_TR'
        }
      }
    },
    {
      id: '#Database_Connection|DB_NEW_SESSIONS_TR',
      label: 'New DB Sessions',
      children: [],
      value: {
        id: 'DB_NEW_SESSIONS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['New DB Sessions'],
          dimension: ['key']
        },
        title: {
          text: 'New DB Sessions',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_NEW_SESSIONS_TR'
        }
      }
    },
    {
      id: '#Database_Connection|ACTIVE_DB_CONN_TR',
      label: 'Active DB Connections',
      children: [],
      value: {
        id: 'ACTIVE_DB_CONN_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Active DB Connections'],
          dimension: ['key']
        },
        title: {
          text: 'Active DB Connections',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'ACTIVE_DB_CONN_TR'
        }
      }
    },
    {
      id: '#Database_Connection|DB_CONNECTION_TM_TR',
      label: 'DB Connection Speed(secs)',
      children: [],
      value: {
        id: 'DB_CONNECTION_TM_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Connection Speed(secs)'],
          dimension: ['key']
        },
        title: {
          text: 'DB Connection Speed(secs)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_CONNECTION_TM_TR'
        }
      }
    },
    {
      id: '#Database_Connection|DB_IPCSHM_CONN_TR',
      label: 'DB Connection(ipcshm)',
      children: [],
      value: {
        id: 'DB_IPCSHM_CONN_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['NETTYPE ipcshm'],
          dimension: ['key']
        },
        title: {
          text: 'DB Connection(ipcshm)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_IPCSHM_CONN_TR'
        }
      }
    },
    {
      id: '#Database_Connection|DB_IPCSTR_CONN_TR',
      label: 'DB Connections(ipcstr)',
      children: [],
      value: {
        id: 'DB_IPCSTR_CONN_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['NETTYPW ipcstr'],
          dimension: ['key']
        },
        title: {
          text: 'DB Connections(ipcstr)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_IPCSTR_CONN_TR'
        }
      }
    },
    {
      id: '#Database_Connection|DB_TLITCP_CONN_TR',
      label: 'DB Connections(tlitcp)',
      children: [],
      value: {
        id: 'DB_TLITCP_CONN_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['NETTYPE tlitcp'],
          dimension: ['key']
        },
        title: {
          text: 'DB Connections(tlitcp)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_TLITCP_CONN_TR'
        }
      }
    }
  ]
}
const DatabaseDBSpace = {
  id: '#Database_DBSpace',
  label: 'Database - DBSpace',
  children: [
    {
      id: '#Database_DBSpace|DBSPACE_MAX_PAGE_RWS_TR',
      label: 'DBSpace Page Reads/Writes(Max)',
      children: [],
      value: {
        id: 'DBSPACE_MAX_PAGE_RWS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Page Read(Max)', 'DBSpace Page Write(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Reads/Writes(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_MAX_PAGE_RWS_TR'

        }
      }
    },
    {
      id: '#Database_DBSpace|DBSPACE_PAGE_READ_TR',
      label: 'DBSpace Page Reads',
      children: [],
      value: {
        id: 'DBSPACE_PAGE_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Page Reads'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Reads',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_PAGE_READ_TR'

        }
      }
    },
    {
      id: '#Database_DBSpace|DBSPACE_MAX_PAGE_READ_TR',
      label: 'DBSpace Page Reads(Max)',
      children: [],
      value: {
        id: 'DBSPACE_MAX_PAGE_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSPace Page Read(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Reads(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_MAX_PAGE_READ_TR'

        }
      }
    },
    {
      id: '#Database_DBSpace|DBSPACE_AVG_PAGE_READ_TR',
      label: 'DBSpace Page Reads(Avg)',
      children: [],
      value: {
        id: 'DBSPACE_AVG_PAGE_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSPace Page Read(AVG)'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Reads(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_AVG_PAGE_READ_TR'
        }
      }
    },
    {
      id: '#Database_DBSpace|DBSPACE_PAGE_WRITE_TR',
      label: 'DBSpace Page Writes',
      children: [],
      value: {
        id: 'DBSPACE_PAGE_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Page Write'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Writes',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_PAGE_WRITE_TR'
        }
      }
    },
    {
      id: '#Database_DBSpace|DBSPACE_AVG_PAGE_WRITE_TR',
      label: 'DBSpace Page Writes(Avg)',
      children: [],
      value: {
        id: 'DBSPACE_AVG_PAGE_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Page Writes(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Writes(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_AVG_PAGE_WRITE_TR'
        }
      }
    },
    {
      id: '#Database_DBSpace|DBSPACE_MAX_PAGE_WRITE_TR',
      label: 'DBSpace Page Writes(Max)',
      children: [],
      value: {
        id: 'DBSPACE_MAX_PAGE_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Page Writes(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Writes(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_MAX_PAGE_WRITE_TR'
        }
      }
    },
    {
      id: '#Database_DBSpace|DBSPACE_PAGE_RWS_TR',
      label: 'DBSpace Page Reads/Writes',
      children: [],
      value: {
        id: 'DBSPACE_PAGE_RWS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Page Read : blobdbs', 'DBSpace Page Read : rootdbs', 'DBSpace Page Read : sbdbs', 'DBSpace Page Read : sonar52dbs', 'DBSpace Page Read : testdbs', 'DBSpace Page Write : blobdbs', 'DBSpace Page Write : rootdbs', 'DBSpace Page Write : sbdbs', 'DBSpace Page Write : sonar52dbs', 'DBSpace Page Write : testdbs'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Reads/Writes',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_PAGE_RWS_TR'
        }
      }
    },
    {
      id: '#Database_DBSpace|DBSPACE_AVG_PAGE_RWS_TR',
      label: 'DBSpace Page Reads/Writes(Avg)',
      children: [],
      value: {
        id: 'DBSPACE_AVG_PAGE_RWS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Page Read(AVG)', 'DBSpace Page Write(AVG)'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Reads/Writes(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_AVG_PAGE_RWS_TR'
        }
      }
    },
    {
      id: '#Database_DBSpace|DBSPACE_UTIL_TR',
      label: 'DBSpace Utilization',
      children: [],
      value: {
        id: 'DBSPACE_UTIL_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Utilization: blobdbs', 'DBSpace Utilization: rootdbs', 'DBSpace Utilization: sbdbs', 'DBSpace Utilization: sonar52dbs', 'DBSpace Utilization: testdbs'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Utilization',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_UTIL_TR'
        }
      }
    },
    {
      id: '#Database_DBSpace|DBSPACE_AVG_UTIL_TR',
      label: 'DBSpace Utilization(Avg)',
      children: [],
      value: {
        id: 'DBSPACE_AVG_UTIL_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Average Utilization: blobdbs', 'DBSpace Average Utilization: rootdbs', 'DBSpace Average Utilization: sbdbs', 'DBSpace Average Utilization: sonar52dbs', 'DBSpace Average Utilization: testdbs'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Utilization(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_AVG_UTIL_TR'
        }
      }
    },
    {
      id: '#Database_DBSpace|DBSPACE_MAX_UTIL_TR',
      label: 'DBSpace Utilization(Max)',
      children: [],
      value: {
        id: 'DBSPACE_MAX_UTIL_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Maximum Utilization: blobdbs', 'DBSpace Maximum Utilization: rootdbs', 'DBSpace Maximum Utilization: sbdbs', 'DBSpace Maximum Utilization: sonar52dbs', 'DBSpace Maximum Utilization: testdbs'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Utilization(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_MAX_UTIL_TR'
        }
      }
    }
  ]
}
const DatabaseDisk = {
  id: '#Database_Disk',
  label: 'Database - Disk',
  children: [
    {
      id: '#Database_Disk|DB_PAGE_WRITE_TR',
      label: 'DB Page Writes',
      children: [],
      value: {
        id: 'DB_PAGE_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Page Writes/sec'],
          dimension: ['key']
        },
        title: {
          text: 'DB Page Writes',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_PAGE_WRITE_TR'
        }
      }
    },
    {
      id: '#Database_Disk|DB_DISK_RWS_TR',
      label: 'DB Disk Reads/Writes',
      children: [],
      value: {
        id: 'DB_DISK_RWS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Disk Reads', 'DB Disk Writes'],
          dimension: ['key']
        },
        title: {
          text: 'DB Disk Reads/Writes',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_DISK_RWS_TR'
        }
      }
    },
    {
      id: '#Database_Disk|DB_PAGE_READ_TR',
      label: 'DB Page Reads',
      children: [],
      value: {
        id: 'DB_PAGE_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Page Reads'],
          dimension: ['key']
        },
        title: {
          text: 'DB Page Reads',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_PAGE_READ_TR'
        }
      }
    },
    {
      id: '#Database_Disk|DB_SEQ_SCAN_TR',
      label: 'DB Seqscans/sec ',
      children: [],
      value: {
        id: 'DB_SEQ_SCAN_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Seqscans/sec'],
          dimension: ['key']
        },
        title: {
          text: 'DB Seqscans/sec ',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_SEQ_SCAN_TR'
        }
      }
    },
    {
      id: '#Database_Disk|DB_DISK_WRITE_TR',
      label: 'DB Disk Writes',
      children: [],
      value: {
        id: 'DB_DISK_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Disk Writes'],
          dimension: ['key']
        },
        title: {
          text: 'DB Disk Writes',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_DISK_WRITE_TR'
        }
      }
    },
    {
      id: '#Database_Disk|DB_DISK_READ_TR',
      label: 'DB Disk Reads',
      children: [],
      value: {
        id: 'DB_DISK_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Disk Reads'],
          dimension: ['key']
        },
        title: {
          text: 'DB Disk Reads',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_DISK_READ_TR'
        }
      }
    },
    {
      id: '#Database_Disk|LSW_CNT_TR',
      label: 'Log Switching Count ',
      children: [],
      value: {
        id: 'LSW_CNT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Log Switching Count'],
          dimension: ['key']
        },
        title: {
          text: 'Log Switching Count ',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'LSW_CNT_TR'
        }
      }
    },
    {
      id: '#Database_Disk|CKP_DUR_TR',
      label: 'Checkpoint Duration(Secs) ',
      children: [],
      value: {
        id: 'CKP_DUR_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Checkpoint Duration'],
          dimension: ['key']
        },
        title: {
          text: 'Checkpoint Duration(Secs) ',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CKP_DUR_TR'
        }
      }
    },
    {
      id: '#Database_Disk|DB_PAGE_RWS_TR',
      label: 'DB Page Reads/Writes',
      children: [],
      value: {
        id: 'DB_PAGE_RWS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Page Reads', 'DB Page Writes'],
          dimension: ['key']
        },
        title: {
          text: 'DB Page Reads/Writes',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_PAGE_RWS_TR'
        }
      }
    }
  ]
}
const DatabaseLock = {
  id: '#Database_Lock',
  label: 'Database - Lock',
  children: [
    {
      id: '#Database_Lock|ACTIVE_LOCK_TR',
      label: 'Active Locks/sec',
      children: [],
      value: {
        id: 'ACTIVE_LOCK_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Active Locks"'],
          dimension: ['key']
        },
        title: {
          text: 'Active Locks/sec',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'ACTIVE_LOCK_TR'
        }
      }
    },
    {
      id: 'LOCK_REQUEST_TR',
      label: 'Lock Reqs/sec',
      children: [],
      value: {
        id: 'LOCK_REQUEST_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Lock Reqs'],
          dimension: ['key']
        },
        title: {
          text: 'Lock Reqs/sec',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'LOCK_REQUEST_TR'
        }
      }
    }
  ]
}
const DatabaseMemory = {
  id: '#Database_Memory',
  label: 'Database - Memory',
  children: [
    {
      id: '#Database_Memory|DB_VIR_MEM_SIZE_TR',
      label: 'DB Virtual Memory Allocation(MB)',
      children: [],
      value: {
        id: 'DB_VIR_MEM_SIZE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Virtual Memory Allocation'],
          dimension: ['key']
        },
        title: {
          text: 'DB Virtual Memory Allocation(MB)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_VIR_MEM_SIZE_TR'
        }
      }
    },
    {
      id: '#Database_Memory|DB_VIR_MEM_USED_TR',
      label: 'DB Virtual Memory Utilization(MB)',
      children: [],
      value: {
        id: 'DB_VIR_MEM_USED_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Virtual Memory Utilization'],
          dimension: ['key']
        },
        title: {
          text: 'DB Virtual Memory Utilization(MB)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_VIR_MEM_USED_TR'
        }
      }
    },
    {
      id: '#Database_Memory|LATCH_WAIT_TR',
      label: 'Latch Waits/sec',
      children: [],
      value: {
        id: 'LATCH_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Latch Waits'],
          dimension: ['key']
        },
        title: {
          text: 'Latch Waits/sec',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'LATCH_WAIT_TR'
        }
      }
    },
    {
      id: '#Database_Memory|DB_VIR_MEM_AU_TR',
      label: 'DB Memory Allocted/Used(MB)',
      children: [],
      value: {
        id: 'DB_VIR_MEM_AU_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Virtual Memory Allocation', 'DB Virtual Memory Utilization'],
          dimension: ['key']
        },
        title: {
          text: 'DB Memory Allocted/Used(MB)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_VIR_MEM_AU_TR'

        }
      }
    }
  ]
}
const DatabaseTable = {
  id: '#Database_Table',
  label: 'Database - Table',
  children: [
    {
      id: '#Database_Table|TOP_TB_USED_SZ_TR',
      label: 'Top Table Used Size(KB) ',
      children: [],
      value: {
        id: 'TOP_TB_USED_SZ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Busy Rate(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'Top Table Used Size(KB) ',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'TOP_TB_USED_SZ_TR'
        }
      }
    },
    {
      id: '#Database_Table|TOP_TB_READ_TR',
      label: 'Top Table Reads',
      children: [],
      value: {
        id: 'TOP_TB_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Top Table Reads:demo1:values'],
          dimension: ['key']
        },
        title: {
          text: 'Top Table Reads ',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'TOP_TB_READ_TR'
        }
      }
    },
    {
      id: '#Database_Table|TOP_TB_WRITE_TR',
      label: 'Top Table Writes ',
      children: [],
      value: {
        id: 'TOP_TB_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Busy Rate(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'Top Table Writes ',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'TOP_TB_WRITE_TR'
        }
      }
    },
    {
      id: '#Database_Table|TOP_TB_LOCK_TR',
      label: 'Top Table Locks ',
      children: [],
      value: {
        id: 'TOP_TB_LOCK_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Busy Rate(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'Top Table Locks ',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'TOP_TB_LOCK_TR'
        }
      }
    }
  ]
}
const DatabaseTransaction = {
  id: '#Database_Transaction',
  label: 'Database - Transaction',
  children: [
    {
      id: '#Database_Transaction|DB_ROLLBACK_TR',
      label: 'DB Rollback',
      children: [],
      value: {
        id: 'DB_ROLLBACK_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Rollback'],
          dimension: ['key']
        },
        title: {
          text: 'DB Rollback',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_ROLLBACK_TR'
        }
      }
    },
    {
      id: '#Database_Transaction|ACTIVE_SQL_TR',
      label: 'Active SQL ',
      children: [],
      value: {
        id: 'ACTIVE_SQL_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Active SQL'],
          dimension: ['key']
        },
        title: {
          text: 'Active SQL ',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'ACTIVE_SQL_TR'
        }
      }
    },
    {
      id: '#Database_Transaction|DB_TRANS_TR',
      label: 'DB Transactions',
      children: [],
      value: {
        id: 'DB_TRANS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Transactions'],
          dimension: ['key']
        },
        title: {
          text: 'DB Transactions',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_TRANS_TR'
        }
      }
    },
    {
      id: '#Database_Transaction|DB_COMMIT_TR',
      label: 'DB Commits',
      children: [],
      value: {
        id: 'DB_COMMIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Commits'],
          dimension: ['key']
        },
        title: {
          text: 'DB Commits',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_COMMIT_TR'
        }
      }
    }
  ]
}
const DatabaseVirtualProcess = {
  id: '#Database_Virtual_Process',
  label: 'Database - Virtual Process',
  children: [
    {
      id: '#Database_Virtual_Process|DB_VP_BUSY_RATE_TR',
      label: 'DB VP Busy Rate',
      children: [],
      value: {
        id: 'DB_VP_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB VP Busy Rate:cpu1'],
          dimension: ['key']
        },
        title: {
          text: 'DB VP Busy Rate',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_VP_BUSY_RATE_TR'
        }
      }
    },
    {
      id: '#Database_Virtual_Process|VP_QUEUE_TR',
      label: 'VP Queue',
      children: [],
      value: {
        id: 'VP_QUEUE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['VP Queue'],
          dimension: ['key']
        },
        title: {
          text: 'VP Queue',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'VP_QUEUE_TR'
        }
      }
    },
    {
      id: '#Database_Virtual_Process|DB_MAX_VP_BUSY_RATE_TR',
      label: 'DB VP Busy Rate(Max)',
      children: [],
      value: {
        id: 'DB_MAX_VP_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB VP Busy Rate(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'DB VP Busy Rate(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_MAX_VP_BUSY_RATE_TR'
        }
      }
    },
    {
      id: '#Database_Virtual_Process|DB_AVG_VP_BUSY_RATE_TR',
      label: 'DB VP Busy Rate(Avg)',
      children: [],
      value: {
        id: 'DB_AVG_VP_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB VP Busy Rate(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'DB VP Busy Rate(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_AVG_VP_BUSY_RATE_TR'
        }
      }
    }
  ]
}
const DiskDatabase = {
  id: '#Disk_Database',
  label: 'Disk - Database',
  children: [
    {
      id: '#Disk_Database|DB_PAGE_READ_TR',
      label: 'DB Page Reads',
      children: [],
      value: {
        id: 'DB_PAGE_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Page Reads'],
          dimension: ['key']
        },
        title: {
          text: 'DB Page Reads',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_PAGE_READ_TR'
        }
      }
    },
    {
      id: '#Disk_Database|DB_DISK_WRITE_TR',
      label: 'DB Disk Writes',
      children: [],
      value: {
        id: 'DB_DISK_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Disk Writes'],
          dimension: ['key']
        },
        title: {
          text: 'DB Disk Writes',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_DISK_WRITE_TR'
        }
      }
    },
    {
      id: '#Disk_Database|CKP_DUR_TR',
      label: 'Checkpoint Duration(Secs)',
      children: [],
      value: {
        id: 'CKP_DUR_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Checkpoint Duration'],
          dimension: ['key']
        },
        title: {
          text: 'Checkpoint Duration(Secs)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CKP_DUR_TR'
        }
      }
    },
    {
      id: '#Disk_Database|LSW_CNT_TR',
      label: 'Log Switching Count',
      children: [],
      value: {
        id: 'LSW_CNT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Log Switching Count'],
          dimension: ['key']
        },
        title: {
          text: 'Log Switching Count',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'LSW_CNT_TR'
        }
      }
    },
    {
      id: '#Disk_Database|DB_DISK_READ_TR',
      label: 'DB Disk Reads',
      children: [],
      value: {
        id: 'DB_DISK_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Disk Reads'],
          dimension: ['key']
        },
        title: {
          text: 'DB Disk Reads',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_DISK_READ_TR'
        }
      }
    },
    {
      id: '#Disk_Database|DB_PAGE_WRITE_TR',
      label: 'DB Page Writes',
      children: [],
      value: {
        id: 'DB_PAGE_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Page Writes/sec'],
          dimension: ['key']
        },
        title: {
          text: 'DB Page Writes',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_PAGE_WRITE_TR'
        }
      }
    },
    {
      id: '#Disk_Database|DB_PAGE_RWS_TR',
      label: 'DB Page Reads/Writes',
      children: [],
      value: {
        id: 'DB_PAGE_RWS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Page Reads', 'DB Page Writes'],
          dimension: ['key']
        },
        title: {
          text: 'DB Page Reads/Writes',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_PAGE_RWS_TR'
        }
      }
    },
    {
      id: '#Disk_Database|DB_DISK_RWS_TR',
      label: 'DB Disk Reads/Writes',
      children: [],
      value: {
        id: 'DB_DISK_RWS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Disk Reads', 'DB Disk Writes'],
          dimension: ['key']
        },
        title: {
          text: 'DB Disk Reads/Writes',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_DISK_RWS_TR'
        }
      }
    }
  ]
}
const DiskDBSpace = {
  id: '#Disk_DBSpace',
  label: 'Disk - DBSpace',
  children: [
    {
      id: '#Disk_DBSpace|DBSPACE_MAX_UTIL_TR',
      label: 'DBSpace Utilization(Max)',
      children: [],
      value: {
        id: 'DBSPACE_MAX_UTIL_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Maximum Utilization: blobdbs', 'DBSpace Maximum Utilization: rootdbs', 'DBSpace Maximum Utilization: sbdbs', 'DBSpace Maximum Utilization: sonar52dbs', 'DBSpace Maximum Utilization: testdbs'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Utilization(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_MAX_UTIL_TR'
        }
      }
    },
    {
      id: '#Disk_DBSpace|DBSPACE_PAGE_READ_TR',
      label: 'DBSpace Page Reads',
      children: [],
      value: {
        id: 'DBSPACE_PAGE_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Page Reads:'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Reads',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_PAGE_READ_TR'
        }
      }
    },
    {
      id: '#Disk_DBSpace|DBSPACE_MAX_PAGE_READ_TR',
      label: 'DBSpace Page Reads(Max)',
      children: [],
      value: {
        id: 'DBSPACE_MAX_PAGE_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSPace Page Read(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Reads(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_MAX_PAGE_READ_TR'
        }
      }
    },
    {
      id: '#Disk_DBSpace|DBSPACE_AVG_PAGE_READ_TR',
      label: 'DBSpace Page Reads(Avg)',
      children: [],
      value: {
        id: 'DBSPACE_AVG_PAGE_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSPace Page Read(AVG)'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Reads(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_AVG_PAGE_READ_TR'
        }
      }
    },
    {
      id: '#Disk_DBSpace|DBSPACE_PAGE_WRITE_TR',
      label: 'DBSpace Page Writes',
      children: [],
      value: {
        id: 'DBSPACE_PAGE_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Page Write'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Writes',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_PAGE_WRITE_TR'
        }
      }
    },
    {
      id: '#Disk_DBSpace|DBSPACE_AVG_PAGE_WRITE_TR',
      label: 'DBSpace Page Writes(Avg)',
      children: [],
      value: {
        id: 'DBSPACE_AVG_PAGE_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Page Writes(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Writes(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_AVG_PAGE_WRITE_TR'
        }
      }
    },
    {
      id: '#Disk_DBSpace|DBSPACE_MAX_PAGE_WRITE_TR',
      label: 'DBSpace Page Writes(Max)',
      children: [],
      value: {
        id: 'DBSPACE_MAX_PAGE_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Page Writes(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Writes(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_MAX_PAGE_WRITE_TR'
        }
      }
    },
    {
      id: '#Disk_DBSpace|DBSPACE_PAGE_RWS_TR',
      label: 'DBSpace Page Reads/Writes',
      children: [],
      value: {
        id: 'DBSPACE_PAGE_RWS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Page Read : blobdbs', 'DBSpace Page Read : rootdbs', 'DBSpace Page Read : sbdbs', 'DBSpace Page Read : sonar52dbs', 'DBSpace Page Read : testdbs', 'DBSpace Page Write : blobdbs', 'DBSpace Page Write : rootdbs', 'DBSpace Page Write : sbdbs', 'DBSpace Page Write : sonar52dbs', 'DBSpace Page Write : testdbs'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Reads/Writes',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_PAGE_RWS_TR'
        }
      }
    },
    {
      id: '#Disk_DBSpace|DBSPACE_MAX_PAGE_RWS_TR',
      label: 'DBSpace Page Reads/Writes(Max)',
      children: [],
      value: {
        id: 'DBSPACE_MAX_PAGE_RWS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Page Read(Max)', 'DBSpace Page Write(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Reads/Writes(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_MAX_PAGE_RWS_TR'
        }
      }
    },
    {
      id: '#Disk_DBSpace|DBSPACE_AVG_PAGE_RWS_TR',
      label: 'DBSpace Page Reads/Writes(Avg)',
      children: [],
      value: {
        id: 'DBSPACE_AVG_PAGE_RWS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Page Read(AVG)', 'DBSpace Page Write(AVG)'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Page Reads/Writes(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_AVG_PAGE_RWS_TR'
        }
      }
    },
    {
      id: '#Disk_DBSpace|DBSPACE_UTIL_TR',
      label: 'DBSpace Utilization',
      children: [],
      value: {
        id: 'DBSPACE_UTIL_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Utilization: blobdbs', 'DBSpace Utilization: rootdbs', 'DBSpace Utilization: sbdbs', 'DBSpace Utilization: sonar52dbs', 'DBSpace Utilization: testdbs'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Utilization',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_UTIL_TR'
        }
      }
    },
    {
      id: '#Disk_DBSpace|DBSPACE_AVG_UTIL_TR',
      label: 'DBSpace Utilization(Avg)',
      children: [],
      value: {
        id: 'DBSPACE_AVG_UTIL_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DBSpace Average Utilization: blobdbs', 'DBSpace Average Utilization: rootdbs', 'DBSpace Average Utilization: sbdbs', 'DBSpace Average Utilization: sonar52dbs', 'DBSpace Average Utilization: testdbs'],
          dimension: ['key']
        },
        title: {
          text: 'DBSpace Utilization(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DBSPACE_AVG_UTIL_TR'
        }
      }
    }
  ]
}
const DiskOS = {
  id: '#Disk_OS',
  label: 'Disk - OS',
  children: [
    {
      id: '#Disk_OS|DISK_IO_BUSY_RATE_TR',
      label: 'Disk I/O Busy Rate',
      children: [],
      value: {
        id: 'DISK_IO_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk I/O Busy Rate:sda1', 'Disk I/O Busy Rate:sda2', 'Disk I/O Busy Rate:sda3'],
          dimension: ['key']
        },
        title: {
          text: 'Disk I/O Busy Rate',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_IO_BUSY_RATE_TR'
        }
      }
    },
    {
      id: '#Disk_OS|DISK_MAX_IO_WAIT_TR',
      label: 'Disk I/O Wait(Max)',
      children: [],
      value: {
        id: 'DISK_MAX_IO_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk IO Wait(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'Disk I/O Wait(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_MAX_IO_WAIT_TR'
        }
      }
    },
    {
      id: '#Disk_OS|DISK_MAX_IO_BUSY_RATE_TR',
      label: 'Disk I/O Busy Rate(Max)',
      children: [],
      value: {
        id: 'DISK_MAX_IO_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk I/O Busy Rate(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'Disk I/O Busy Rate(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_MAX_IO_BUSY_RATE_TR'
        }
      }
    },
    {
      id: '#Disk_OS|DISK_IO_WAIT_TR',
      label: 'Disk I/O Wait',
      children: [],
      value: {
        id: 'DISK_IO_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk IO Wait:sda1', 'Disk IO Wait:sda2', 'Disk IO Wait:sda3'],
          dimension: ['key']
        },
        title: {
          text: 'Disk I/O Wait',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_IO_WAIT_TR'
        }
      }
    },
    {
      id: '#Disk_OS|DISK_MAX_SORT_TR',
      label: 'Disk Sort(Max)',
      children: [],
      value: {
        id: 'DISK_MAX_SORT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk Sorts(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'Disk Sort(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_MAX_SORT_TR'
        }
      }
    },
    {
      id: '#Disk_OS|DISK_AVG_SORT_TR',
      label: 'Disk Sort(Avg)',
      children: [],
      value: {
        id: 'DISK_AVG_SORT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk Sorts(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'Disk Sort(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_AVG_SORT_TR'
        }
      }
    },
    {
      id: '#Disk_OS|DISK_SORT_TR',
      label: 'Disk Sort',
      children: [],
      value: {
        id: 'DISK_SORT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk Sorts'],
          dimension: ['key']
        },
        title: {
          text: 'Disk Sort',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_SORT_TR'
        }
      }
    },
    {
      id: '#Disk_OS|DISK_RWS_TR',
      label: 'Disk Read/Write(KB/sec)',
      children: [],
      value: {
        id: 'DISK_RWS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk Reads', 'Disk Writes'],
          dimension: ['key']
        },
        title: {
          text: 'Disk Read/Write(KB/sec)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_RWS_TR'
        }
      }
    },
    {
      id: '#Disk_OS|DISK_WRITE_TR',
      label: 'Disk Write(KB/sec)',
      children: [],
      value: {
        id: 'DISK_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk Writesda1', 'Disk Writesda2', 'Disk Writesda3'],
          dimension: ['key']
        },
        title: {
          text: 'Disk Write(KB/sec)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_WRITE_TR'
        }
      }
    },
    {
      id: '#Disk_OS|DISK_READ_TR',
      label: 'Disk Read(KB/sec)',
      children: [],
      value: {
        id: 'DISK_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk Read:sda1', 'Disk Read:sda2', 'Disk Read:sda3'],
          dimension: ['key']
        },
        title: {
          text: 'Disk Read(KB/sec)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_READ_TR'
        }
      }
    },
    {
      id: '#Disk_OS|DISK_AVG_IO_BUSY_RATE_TR',
      label: 'Disk I/O Busy Rate(Avg)',
      children: [],
      value: {
        id: 'DISK_AVG_IO_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk I/O Busy Rate(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'Disk I/O Busy Rate(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_AVG_IO_BUSY_RATE_TR'
        }
      }
    },
    {
      id: '#Disk_OS|DISK_AVG_IO_WAIT_TR',
      label: 'Disk I/O Wait(Avg) ',
      children: [],
      value: {
        id: 'DISK_AVG_IO_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk IO Wait(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'Disk I/O Wait(Avg) ',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_AVG_IO_WAIT_TR'
        }
      }
    }
  ]
}
const EventManagementEventOccurrence = {
  id: '##Event_Management_Event_Occurrence',
  label: 'Event Management - Event Occurrence',
  children: [
    {
      id: '##Event_Management_Event_Occurrence|EVENT_OTM_TR',
      label: 'Event Occurrence Track',
      children: [],
      value: {
        id: 'EVENT_OTM_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['-'],
          dimension: ['key']
        },
        title: {
          text: 'Event Occurrence Track',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'EVENT_OTM_TR'
        }
      }
    }
  ]
}

const MemoryDatabase = {
  id: '#Memory_Database',
  label: 'Memory - Database',
  children: [
    {
      id: '#Memory_Database|LATCH_BUFFER_WAIT_TR',
      label: 'Buffer / Latch Wait/sec',
      children: [],
      value: {
        id: 'LATCH_BUFFER_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buffer Waits', 'Latch Waits'],
          dimension: ['key']
        },
        title: {
          text: 'Buffer / Latch Wait/sec',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'LATCH_BUFFER_WAIT_TR'
        }
      }
    },
    {
      id: '#Memory_Database|BUFFER_READ_TR',
      label: 'Buf Readss',
      children: [],
      value: {
        id: 'BUFFER_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buf Readss/sec'],
          dimension: ['key']
        },
        title: {
          text: 'Buf Readss',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'BUFFER_READ_TR'
        }
      }
    },
    {
      id: '#Memory_Database|BUFFER_WRITE_TR',
      label: 'Buf Writess',
      children: [],
      value: {
        id: 'BUFFER_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buf Writess'],
          dimension: ['key']
        },
        title: {
          text: 'Buf Writess',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'BUFFER_WRITE_TR'
        }
      }
    },
    {
      id: '#Memory_Database|BUFFER_RWS_TR',
      label: 'Buf Readss/Writes',
      children: [],
      value: {
        id: 'BUFFER_RWS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buf Reads', 'Buf Writes'],
          dimension: ['key']
        },
        title: {
          text: 'Buf Readss/Writes',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'BUFFER_RWS_TR'
        }
      }
    },
    {
      id: '#Memory_Database|BUFFER_READ_CACHE_TR',
      label: 'Buf Reads Cache Rate',
      children: [],
      value: {
        id: 'BUFFER_READ_CACHE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buf Reads Cache'],
          dimension: ['key']
        },
        title: {
          text: 'Buf Reads Cache Rate',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'BUFFER_READ_CACHE_TR'
        }
      }
    },
    {
      id: '#Memory_Database|BUFFER_WRITE_CACHE_TR',
      label: 'Buf Writes Cache Rate',
      children: [],
      value: {
        id: 'BUFFER_WRITE_CACHE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buf Writes Cache'],
          dimension: ['key']
        },
        title: {
          text: 'Buf Writes Cache Rate',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'BUFFER_WRITE_CACHE_TR'
        }
      }
    },
    {
      id: '#Memory_Database|BUFFER_RWS_CACHE_TR',
      label: 'Buf Reads/Write Cache Rate',
      children: [],
      value: {
        id: 'BUFFER_RWS_CACHE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buf Reads Cache', 'Buf Writes Cache'],
          dimension: ['key']
        },
        title: {
          text: 'Buf Reads/Write Cache Rate',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'BUFFER_RWS_CACHE_TR'
        }
      }
    },
    {
      id: '#Memory_Database|BUFFER_WAIT_TR',
      label: 'Buffer Waits/sec',
      children: [],
      value: {
        id: 'BUFFER_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Buffer Waits/sec'],
          dimension: ['key']
        },
        title: {
          text: 'Buffer Waits/sec',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'BUFFER_WAIT_TR'
        }
      }
    },
    {
      id: '#Memory_Database|DB_VIR_MEM_AU_TR',
      label: 'DB Memory Allocted/Used(MB)',
      children: [],
      value: {
        id: 'DB_VIR_MEM_AU_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Virtual Memory Allocation', 'DB Virtual Memory Utilization'],
          dimension: ['key']
        },
        title: {
          text: 'DB Memory Allocted/Used(MB)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_VIR_MEM_AU_TR'
        }
      }
    },
    {
      id: '#Memory_Database|DB_VIR_MEM_SIZE_TR',
      label: 'DB Virtual Memory Allocation(MB)',
      children: [],
      value: {
        id: 'DB_VIR_MEM_SIZE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Virtual Memory Allocation'],
          dimension: ['key']
        },
        title: {
          text: 'DB Virtual Memory Allocation(MB)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_VIR_MEM_SIZE_TR'
        }
      }
    },
    {
      id: '#Memory_Database|DB_VIR_MEM_USED_TR',
      label: 'DB Virtual Memory Utilization(MB)',
      children: [],
      value: {
        id: 'DB_VIR_MEM_USED_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['DB Virtual Memory Utilization'],
          dimension: ['key']
        },
        title: {
          text: 'DB Virtual Memory Utilization(MB)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DB_VIR_MEM_USED_TR'
        }
      }
    },
    {
      id: '#Memory_Database|LATCH_WAIT_TR',
      label: 'Latch Waits/sec',
      children: [],
      value: {
        id: 'LATCH_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Latch Waits'],
          dimension: ['key']
        },
        title: {
          text: 'Latch Waits/sec',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'LATCH_WAIT_TR'
        }
      }
    }
  ]
}
const MemoryOS = {
  id: '#Memory_OS',
  label: 'Memory - OS',
  children: [
    {
      id: '#Memory_OS|OS_MEM_PAGE_IN_TR',
      label: 'OS Memory Page In',
      children: [],
      value: {
        id: 'OS_MEM_PAGE_IN_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['OS Memory Page In'],
          dimension: ['key']
        },
        title: {
          text: 'OS Memory Page In',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_MEM_PAGE_IN_TR'
        }
      }
    },
    {
      id: '#Memory_OS|OS_FREE_MEM_TR',
      label: 'OS Free Physical Memory(MB)',
      children: [],
      value: {
        id: 'OS_FREE_MEM_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['OS Free Physical Memory'],
          dimension: ['key']
        },
        title: {
          text: 'OS Free Physical Memory(MB)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_FREE_MEM_TR'
        }
      }
    },
    {
      id: '#Memory_OS|OS_PHY_MEM_AV_PER_TR',
      label: 'OS Physical Memory Available Percentage(%)',
      children: [],
      value: {
        id: 'OS_PHY_MEM_AV_PER_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Physical Memory available percentage'],
          dimension: ['key']
        },
        title: {
          text: 'OS Physical Memory Available Percentage(%)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_PHY_MEM_AV_PER_TR'
        }
      }
    },
    {
      id: '#Memory_OS|OS_USED_PHY_MEM_TR',
      label: 'OS Used Physical Memory(MB)',
      children: [],
      value: {
        id: 'OS_USED_PHY_MEM_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['OS Used Physical Memory'],
          dimension: ['key']
        },
        title: {
          text: 'OS Used Physical Memory(MB)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_USED_PHY_MEM_TR'
        }
      }
    },
    {
      id: '#Memory_OS|OS_MEM_FREE_TOTAL_TR',
      label: 'OS Physical Memory Free/Total(MB)',
      children: [],
      value: {
        id: 'OS_MEM_FREE_TOTAL_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Total memory'],
          dimension: ['key']
        },
        title: {
          text: 'OS Physical Memory Free/Total(MB)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_MEM_FREE_TOTAL_TR'
        }
      }
    },
    {
      id: '#Memory_OS|OS_MEM_PAGE_IN_OUT_TR',
      label: 'OS Memory Page In/Out',
      children: [],
      value: {
        id: 'OS_MEM_PAGE_IN_OUT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Page in', 'Page out'],
          dimension: ['key']
        },
        title: {
          text: 'OS Memory Page In/Out',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_MEM_PAGE_IN_OUT_TR'
        }
      }
    },
    {
      id: '#Memory_OS|OS_MEM_PAGE_OUT_TR',
      label: 'OS Memory Page Out',
      children: [],
      value: {
        id: 'OS_MEM_PAGE_OUT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['OS Memory Page Out'],
          dimension: ['key']
        },
        title: {
          text: 'OS Memory Page Out',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_MEM_PAGE_OUT_TR'
        }
      }
    },
    {
      id: '#Memory_OS|OS_PHY_MEM_TR',
      label: 'OS Physical Memory(MB)',
      children: [],
      value: {
        id: 'OS_PHY_MEM_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['OS Physical Memory'],
          dimension: ['key']
        },
        title: {
          text: 'OS Physical Memory(MB)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_PHY_MEM_TR'
        }
      }
    }
  ]
}
const OSConnection = {
  id: '#OS_Connection',
  label: 'OS - Connection',
  children: [
    {
      id: '#OS_Connection|NET_WAIT_FIN_TR',
      label: 'Network Fin_Wait + Fin_Wait 2',
      children: [],
      value: {
        id: 'NET_WAIT_FIN_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Network Fin Wait'],
          dimension: ['key']
        },
        title: {
          text: 'Network Fin_Wait + Fin_Wait 2',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'NET_WAIT_FIN_TR'
        }
      }
    },
    {
      id: '#OS_Connection|NET_CONN_TR',
      label: 'Network Connections',
      children: [],
      value: {
        id: 'NET_CONN_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Network Connections'],
          dimension: ['key']
        },
        title: {
          text: 'Network Connections',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'NET_CONN_TR'
        }
      }
    },
    {
      id: '#OS_Connection|NET_RECE_Q_TR',
      label: 'Network Receiving Queue',
      children: [],
      value: {
        id: 'NET_RECE_Q_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Network Receiving Queue'],
          dimension: ['key']
        },
        title: {
          text: 'Network Receiving Queue',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'NET_RECE_Q_TR'
        }
      }
    },
    {
      id: '#OS_Connection|NET_SEND_Q_TR',
      label: 'Network Sending Queue',
      children: [],
      value: {
        id: 'NET_SEND_Q_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Network Sending Queue'],
          dimension: ['key']
        },
        title: {
          text: 'Network Sending Queue',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'NET_SEND_Q_TR'
        }
      }
    },
    {
      id: '#OS_Connection|NET_WAIT_TR',
      label: 'Network Connection Wait',
      children: [],
      value: {
        id: 'NET_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Network Connection Wait'],
          dimension: ['key']
        },
        title: {
          text: 'Network Connection Wait',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'NET_WAIT_TR'
        }
      }
    },
    {
      id: '#OS_Connection|NET_WAIT_STATUS_TR',
      label: 'Network Wait Status',
      children: [],
      value: {
        id: 'NET_WAIT_STATUS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Network Connection Wait', 'Network Fin Wait'],
          dimension: ['key']
        },
        title: {
          text: 'Network Wait Status',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'NET_WAIT_STATUS_TR'
        }
      }
    }
  ]
}
const OSCPU = {
  id: '#OS_CPU',
  label: 'OS - CPU',
  children: [
    {
      id: '#OS_CPU|OS_AVG_LOAD_TR',
      label: 'OS Average Load',
      children: [],
      value: {
        id: 'OS_AVG_LOAD_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['OS Average Load'],
          dimension: ['key']
        },
        title: {
          text: 'OS Average Load',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_AVG_LOAD_TR'
        }
      }
    },
    {
      id: '#OS_CPU|CPU_MAX_BUSY_RATE_TR',
      label: 'CPU Busy Rate(Max)',
      children: [],
      value: {
        id: 'CPU_MAX_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Busy Rate(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'CPU Busy Rate(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CPU_MAX_BUSY_RATE_TR'
        }
      }
    },
    {
      id: '#OS_CPU|CPU_BUSY_RATE_TR',
      label: 'CPU Busy Rate ',
      children: [],
      value: {
        id: 'CPU_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Busy-CPU:0', 'CPU Busy-CPU:1'],
          dimension: ['key']
        },
        title: {
          text: 'CPU Busy Rate ',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CPU_BUSY_RATE_TR'
        }
      }
    },
    {
      id: '#OS_CPU|CPU_AVG_IO_WAIT_TR',
      label: 'CPU I/O Wait(Avg)',
      children: [],
      value: {
        id: 'CPU_AVG_IO_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Avg I/O Wait(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'CPU I/O Wait(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CPU_AVG_IO_WAIT_TR'
        }
      }
    },
    {
      id: '#OS_CPU|CPU_MAX_IO_WAIT_TR',
      label: 'CPU I/O Wait(Max)',
      children: [],
      value: {
        id: 'CPU_MAX_IO_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Avg I/O Wait(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'CPU I/O Wait(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CPU_MAX_IO_WAIT_TR'
        }
      }
    },
    {
      id: '#OS_CPU|CPU_IO_WAIT_TR',
      label: 'CPU I/O Wait ',
      children: [],
      value: {
        id: 'CPU_IO_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU I/O Wait-CPU:0', 'CPU I/O Wait-CPU:1'],
          dimension: ['key']
        },
        title: {
          text: 'CPU I/O Wait ',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CPU_IO_WAIT_TR'
        }
      }
    },
    {
      id: '#OS_CPU|CPU_BUSY_RATE_AM_TR',
      label: 'CPU Busy Rate(Max)/(Avg)',
      children: [],
      value: {
        id: 'CPU_BUSY_RATE_AM_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Busy Rate: CPU(Avg)', 'CPU Busy Rate: CPU(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'CPU Busy Rate(Max)/(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CPU_BUSY_RATE_AM_TR'
        }
      }
    },
    {
      id: '#OS_CPU|CPU_AVG_BUSY_RATE_TR',
      label: 'CPU Busy Rate(Avg)',
      children: [],
      value: {
        id: 'CPU_AVG_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['CPU Busy Rate(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'CPU Busy Rate(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'CPU_AVG_BUSY_RATE_TR'
        }
      }
    }
  ]
}
const OSDisk = {
  id: '#OS_Disk',
  label: 'OS - Disk',
  children: [
    {
      id: '#OS_Disk|DISK_READ_TR',
      label: 'Disk Read(KB/sec)',
      children: [],
      value: {
        id: 'DISK_READ_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk Read:sda1', 'Disk Read:sda2', 'Disk Read:sda3'],
          dimension: ['key']
        },
        title: {
          text: 'Disk Read(KB/sec)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_READ_TR'
        }
      }
    },
    {
      id: '#OS_Disk|DISK_AVG_IO_BUSY_RATE_TR',
      label: 'Disk I/O Busy Rate(Avg)',
      children: [],
      value: {
        id: 'DISK_AVG_IO_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk I/O Busy Rate(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'Disk I/O Busy Rate(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_AVG_IO_BUSY_RATE_TR'
        }
      }
    },
    {
      id: '#OS_Disk|DISK_MAX_IO_BUSY_RATE_TR',
      label: 'Disk I/O Busy Rate(Max)',
      children: [],
      value: {
        id: 'DISK_MAX_IO_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk I/O Busy Rate(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'Disk I/O Busy Rate(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_MAX_IO_BUSY_RATE_TR'
        }
      }
    },
    {
      id: '#OS_Disk|DISK_IO_BUSY_RATE_TR',
      label: 'Disk I/O Busy Rate',
      children: [],
      value: {
        id: 'DISK_IO_BUSY_RATE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk I/O Busy Rate:sda1', 'Disk I/O Busy Rate:sda2', 'Disk I/O Busy Rate:sda3'],
          dimension: ['key']
        },
        title: {
          text: 'Disk I/O Busy Rate',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_IO_BUSY_RATE_TR'
        }
      }
    },
    {
      id: '#OS_Disk|DISK_AVG_IO_WAIT_TR',
      label: 'Disk I/O Wait(Avg)',
      children: [],
      value: {
        id: 'DISK_AVG_IO_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk IO Wait(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'Disk I/O Wait(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_AVG_IO_WAIT_TR'
        }
      }
    },
    {
      id: '#OS_Disk|OS_AVG_LOAD_TR',
      label: 'OS Average Load',
      children: [],
      value: {
        id: 'OS_AVG_LOAD_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['OS Average Load'],
          dimension: ['key']
        },
        title: {
          text: 'OS Average Load',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_AVG_LOAD_TR'
        }
      }
    },
    {
      id: '#OS_Disk|DISK_MAX_IO_WAIT_TR',
      label: 'Disk I/O Wait(Max)',
      children: [],
      value: {
        id: 'DISK_MAX_IO_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk IO Wait(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'Disk I/O Wait(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_MAX_IO_WAIT_TR'
        }
      }
    },
    {
      id: '#OS_Disk|DISK_IO_WAIT_TR',
      label: 'Disk I/O Wait',
      children: [],
      value: {
        id: 'DISK_IO_WAIT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk IO Wait:sda1', 'Disk IO Wait:sda2', 'Disk IO Wait:sda3'],
          dimension: ['key']
        },
        title: {
          text: 'Disk I/O Wait',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_IO_WAIT_TR'
        }
      }
    },
    {
      id: '#OS_Disk|DISK_MAX_SORT_TR',
      label: 'Disk Sort(Max)',
      children: [],
      value: {
        id: 'DISK_MAX_SORT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk Sorts(Max)'],
          dimension: ['key']
        },
        title: {
          text: 'Disk Sort(Max)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_MAX_SORT_TR'
        }
      }
    },
    {
      id: '#OS_Disk|DISK_AVG_SORT_TR',
      label: 'Disk Sort(Avg)',
      children: [],
      value: {
        id: 'DISK_AVG_SORT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk Sorts(Avg)'],
          dimension: ['key']
        },
        title: {
          text: 'Disk Sort(Avg)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_AVG_SORT_TR'
        }
      }
    },
    {
      id: '#OS_Disk|DISK_SORT_TR',
      label: 'Disk Sort',
      children: [],
      value: {
        id: 'DISK_SORT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk Sorts'],
          dimension: ['key']
        },
        title: {
          text: 'Disk Sort',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_SORT_TR'
        }
      }
    },
    {
      id: '#OS_Disk|DISK_RWS_TR',
      label: 'Disk Read/Write(KB/sec)',
      children: [],
      value: {
        id: 'DISK_RWS_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk Reads', 'Disk Writes'],
          dimension: ['key']
        },
        title: {
          text: 'Disk Read/Write(KB/sec)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_RWS_TR'
        }
      }
    },
    {
      id: '#OS_Disk|DISK_WRITE_TR',
      label: 'Disk Write(KB/sec)',
      children: [],
      value: {
        id: 'DISK_WRITE_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Disk Writesda1', 'Disk Writesda2', 'Disk Writesda3'],
          dimension: ['key']
        },
        title: {
          text: 'Disk Write(KB/sec)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'DISK_WRITE_TR'
        }
      }
    }
  ]
}
const OSMemory = {
  id: '#OS_Memory',
  label: 'OS - Memory',
  children: [
    {
      id: '#OS_Memory|OS_USED_PHY_MEM_TR',
      label: 'OS Used Physical Memory(MB)',
      children: [],
      value: {
        id: 'OS_USED_PHY_MEM_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['OS Used Physical Memory'],
          dimension: ['key']
        },
        title: {
          text: 'OS Used Physical Memory(MB)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_USED_PHY_MEM_TR'
        }
      }
    },
    {
      id: '#OS_Memory|OS_PHY_MEM_TR',
      label: 'OS Physical Memory(MB)',
      children: [],
      value: {
        id: 'OS_PHY_MEM_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['OS Physical Memory'],
          dimension: ['key']
        },
        title: {
          text: 'OS Physical Memory(MB)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_PHY_MEM_TR'
        }
      }
    },
    {
      id: '#OS_Memory|OS_MEM_PAGE_IN_TR',
      label: 'OS Memory Page In',
      children: [],
      value: {
        id: 'OS_MEM_PAGE_IN_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['OS Memory Page In'],
          dimension: ['key']
        },
        title: {
          text: 'OS Memory Page In',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_MEM_PAGE_IN_TR'
        }
      }
    },
    {
      id: '#OS_Memory|OS_PHY_MEM_AV_PER_TR',
      label: 'OS Physical Memory Available Percentage(%)',
      children: [],
      value: {
        id: 'OS_PHY_MEM_AV_PER_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Physical Memory available percentage'],
          dimension: ['key']
        },
        title: {
          text: 'OS Physical Memory Available Percentage(%)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_PHY_MEM_AV_PER_TR'
        }
      }
    },
    {
      id: '#OS_Memory|OS_FREE_MEM_TR',
      label: 'OS Free Physical Memory(MB)',
      children: [],
      value: {
        id: 'OS_FREE_MEM_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['OS Free Physical Memory'],
          dimension: ['key']
        },
        title: {
          text: 'OS Free Physical Memory(MB)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_FREE_MEM_TR'
        }
      }
    },
    {
      id: '#OS_Memory|OS_MEM_PAGE_OUT_TR',
      label: 'OS Memory Page Out',
      children: [],
      value: {
        id: 'OS_MEM_PAGE_OUT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['OS Memory Page Out'],
          dimension: ['key']
        },
        title: {
          text: 'OS Memory Page Out',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_MEM_PAGE_OUT_TR'
        }
      }
    },
    {
      id: '#OS_Memory|OS_MEM_PAGE_IN_OUT_TR',
      label: 'OS Memory Page In/Out',
      children: [],
      value: {
        id: 'OS_MEM_PAGE_IN_OUT_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Page in', 'Page out'],
          dimension: ['key']
        },
        title: {
          text: 'OS Memory Page In/Out',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_MEM_PAGE_IN_OUT_TR'
        }
      }
    },
    {
      id: '#OS_Memory|OS_MEM_FREE_TOTAL_TR',
      label: 'OS Physical Memory Free/Total(MB)',
      children: [],
      value: {
        id: 'OS_MEM_FREE_TOTAL_TR',
        height: '300px',
        settings: {
          type: 'line',
          metrics: ['Free memory', 'Total memory'],
          dimension: ['key']
        },
        title: {
          text: 'OS Physical Memory Free/Total(MB)',
          x: 'center',
          y: 'bottom'
        },
        data: [],
        remote: true,
        url: '/app-sonar-0.1/trendAnalysis/cpu_busy_rate_tr',
        params: {
          id: 'OS_MEM_FREE_TOTAL_TR'
        }
      }
    }
  ]
}
const TrendAnalysis = {
  'data': [
    ConnectionDatabase,
    ConnectionOS,
    CPUDatabase,
    CPUOS,
    DatabaseBuffer,
    DatabaseConnection,
    DatabaseDBSpace,
    DatabaseDisk,
    DatabaseLock,
    DatabaseMemory,
    DatabaseTable,
    DatabaseTransaction,
    DatabaseVirtualProcess,
    DiskDatabase,
    DiskDBSpace,
    DiskOS,
    EventManagementEventOccurrence,
    MemoryDatabase,
    MemoryOS,
    OSConnection,
    OSCPU,
    OSDisk,
    OSMemory
  ]
}

const DATA = {
  TrendAnalysis: TrendAnalysis
}

export default {
  GET: config => {
    const { id } = param2Obj(config.url)
    if (id) {
      return DATA[id]
    }
    return []
  }
}
