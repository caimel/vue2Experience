import Main from '@/views/main'
// import TrendAnalysis from './historical/trend_analysis'
// import RealTime from './realtime/real_time'
// import Analysis from './analysis/index'
import Configurator from './config/configurator'
import Merch from './merch/index'
import MerchCenter from './merch_center/index'

const Home = { path: '',
  component: Main,
  redirect: 'home',
  meta: { label: 'ROOT', type: 'single' },
  children: [
    { name: 'Home',
      path: 'home',
      component: () => import('@/views/Business/Home'),
      meta: {
        labelKey: 'route.home.label', label: '$menu_group.Home', close: false
      }
    }
  ]
}
const Merch_Home = { path: '',
  component: Main,
  redirect: 'Merch_Home',
  meta: { label: 'ROOT', type: 'single' },
  children: [
    { name: 'Merch_Home',
      path: 'Merch_Home',
      component: () => import('@/views/Business/Home'),
      meta: {
        labelKey: 'route.home.label', label: '$menu_group.Merch_Home', close: false
      }
    }
  ]
}
const business = [
  Home,
  Merch_Home,
  { path: '/configurator',
    component: Main,
    name: 'configurator',
    meta: {
      $label: 'menu_group.configurator'
    },
    children: [
      Configurator.user(),
      Configurator.role(),
      Configurator.authority()
    ]
  },

  { path: '/merch',
    component: Main,
    name: 'merch',
    meta: {
      $label: 'menu_group.merch'
    },
    children: [
      Merch.all_merch(),
      Merch.all_merch_order(),
      Merch.all_merch_settle()
    ]
  },

  { path: '/merch_center',
    component: Main,
    name: 'merch_center',
    meta: {
      $label: 'menu_group.merch_center'
    },
    children: [
      MerchCenter.merch_conf(),
      MerchCenter.merch_order(),
      MerchCenter.merch_settle()
    ]
  }

]

export default business
