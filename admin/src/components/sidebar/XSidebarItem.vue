<template>
  <div class="menu-wrapper">
    <template v-for="(route,index) in routes" v-if="route.meta && !route.meta.hidden" >
    <router-link v-if="route.meta.type === 'single' && route.children && route.children.length > 0 " :key="route.name"
                 :to="route.path+'/'+route.children[0].path">
      <el-menu-item v-if="route.children[0].meta" :index="route.path+'/'+route.children[0].path">
          <i v-if="route.children[0].meta.iconClass" :class="route.children[0].meta.iconClass"></i>
          <span v-if="route.children[0].meta.labelKey">{{ $t(route.children[0].meta.labelKey) }}</span>
          <span v-else >{{ route.children[0].meta.label }}</span>
      </el-menu-item>
    </router-link>
     <el-submenu v-else :index="route.name || route.path" :key="route.name">
        <template slot="title">
          <i v-if="route.meta.iconClass" :class="route.meta.iconClass"></i>
          <span v-if="route.meta.labelKey">{{ $t(route.meta.labelKey) }}</span>
          <span v-else >{{ route.meta.label }}</span>
        </template>
        <el-menu-item-group v-for="(value,key) in grouping(route.children)" :title="key === 'default'? '':key" :key="key">
            <template v-for="(child,cIndex) in value">
             <router-link :to="route.path+'/'+child.path" :key="child.meta.label" v-if="!child.meta.hidden">
              <el-menu-item :index="index + '-'+ key + '-' + cIndex">
                <i v-if="child.meta.iconClass" :class="child.meta.iconClass"></i>
                <span v-if="child.meta.labelKey">{{ $t(child.meta.labelKey) }}</span>
                <span v-else>{{ child.meta.label }}</span>
              </el-menu-item>
            </router-link>
          </template>
        </el-menu-item-group >
     </el-submenu>
    </template>
  </div>
</template>

<script>
import ElSubMenu from 'element-ui/lib/submenu'
import ElMenuItemGroup from 'element-ui/lib/menu-item-group'
import ElMenuItem from 'element-ui/lib/menu-item'
export default {
  name: 'XSidebarItem',
  components: {
    [ElSubMenu.name]: ElSubMenu,
    [ElMenuItemGroup.name]: ElMenuItemGroup,
    [ElMenuItem.name]: ElMenuItem
  },
  props: {
    routes: {
      type: Array
    }
  },
  computed: {},
  methods: {
    grouping: function (routes) { // 分组
      const group = {
        default: []
      }
      routes.forEach(function (route) {
        if (route.meta.group) {
          if (!group[route.meta.group]) {
            group[route.meta.group] = []
          }
          group[route.meta.group].push(route)
        } else {
          group.default.push(route)
        }
      })
      return group
    }
  },
  watch: {}
}
</script>

<style scoped>
  /*去除router-link 下划线*/
  a {
    text-decoration: none;
  }
  .router-link-active{
    text-decoration: none;
  }
</style>
