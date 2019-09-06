<template>
  <fragment>
    <template v-for="(menu,index) in menus" v-if="menu.meta && !menu.meta.hidden" >
    <router-link v-if="menu.meta.type === 'single' && menu.children && menu.children.length > 0 " :key="menu.name"
                 :to="menu.path+'/'+menu.children[0].path">
      <el-menu-item v-if="menu.children[0].meta" :index="menu.path+'/'+menu.children[0].path">
          <i v-if="menu.children[0].meta.iconClass" :class="menu.children[0].meta.iconClass"></i>
          <span>{{ $tl(menu.children[0].meta.label) }}</span>
      </el-menu-item>
    </router-link>
     <el-submenu class="x_submenu" v-else :index="menu.name || menu.path" :key="menu.name">
        <template slot="title">
          <i v-if="menu.meta.iconClass" :class="menu.meta.iconClass"></i>
          <span>{{ $tl(menu.meta.label) }}</span>
        </template>
        <el-menu-item-group v-for="(group,key) in grouping(menu.children)" :title="key === 'default'? '':key" :key="key">
          <template v-for="(child,cIndex) in group">
             <el-submenu class="el-submenu__icon-arrow__disabled" v-if="child.children && child.children.length > 0"  :key="child.name" :index="child.name || child.path">
                <template slot="title">
                  <i :class="['el-icon-caret-right', 'second-submenu__icon-arrow']" class=""></i>
                  <span>{{ $tl(child.meta.label) }}</span>
                </template>
               <el-menu-item-group v-for="(group,key) in grouping(child.children)" :title="key === 'default'? '':key" :key="key">
                 <template v-for="(grandson,gIndex) in group">
                   <template>
                     <router-link :to="getFullPath(menu.path,child.path,grandson.path)" :key="grandson.name" v-if="!grandson.meta.hidden">
                       <el-menu-item :index="index + '-'+ cIndex + '-'+ key + '-' + gIndex" class="text-in-line">
                         <!--<i v-if="child.meta.iconClass" :class="child.meta.iconClass"></i>-->
                         <!--<i class="el-icon-caret-right"></i>-->
                         <i style="margin-right: 12px"></i>
                         <template v-if="$tl(grandson.meta.label).length > maxLableLength">
                           <el-tooltip :content="$tl(grandson.meta.label)" effect="light" placement="right">
                             <span>{{ $tl(grandson.meta.label).substr(0,maxLableLength - 1) }}...</span>
                           </el-tooltip>
                         </template>
                         <template v-else>
                           <span>{{ $tl(grandson.meta.label) }}</span>
                         </template>
                       </el-menu-item>
                     </router-link>
                   </template>
                 </template>
               </el-menu-item-group>
            </el-submenu>
             <template v-else>
              <router-link :to="menu.path+'/'+child.path" :key="child.name" v-if="!child.meta.hidden">
              <el-menu-item :index="index + '-'+ key + '-' + cIndex" class="text-in-line">
                <!--<i v-if="child.meta.iconClass" :class="child.meta.iconClass"></i>-->
                <!--<i class="el-icon-caret-right"></i>-->
                <i style="margin-right: 12px"></i>
                <template v-if="$tl(child.meta.label).length > maxLableLength">
                  <el-tooltip :content="$tl(child.meta.label)" effect="light" placement="right">
                    <span>{{ $tl(child.meta.label).substr(0,maxLableLength - 1) }}...</span>
                  </el-tooltip>
                </template>
                <template v-else>
                  <span>{{ $tl(child.meta.label) }}</span>
                </template>
              </el-menu-item>
            </router-link>
             </template>
          </template>
        </el-menu-item-group >
     </el-submenu>
    </template>
  </fragment>
</template>

<script>
import ElSubMenu from 'element-ui/lib/submenu'
import ElMenuItemGroup from 'element-ui/lib/menu-item-group'
import ElMenuItem from 'element-ui/lib/menu-item'
export default {
  name: 'XMenuItem',
  components: {
    [ElSubMenu.name]: ElSubMenu,
    [ElMenuItemGroup.name]: ElMenuItemGroup,
    [ElMenuItem.name]: ElMenuItem
  },
  props: {
    menus: {
      type: Array
    },
    maxLableLength: Number
  },
  computed: {},
  methods: {
    grouping: function (menus) { // 分组
      const groups = {
        default: []
      }
      const vm = this
      menus.forEach(function (menu) {
        const _group = vm.$tl(menu.meta.group)
        if (_group) {
          if (!groups[_group]) {
            groups[_group] = []
          }
          groups[_group].push(menu)
        } else {
          groups.default.push(menu)
        }
      })
      return groups
    },
    getFullPath: function (...paths) {
      let fullPath = paths[0]
      paths.forEach((path, index) => {
        if (index === 0) return
        if (path) {
          fullPath += '/' + path
        }
      })
      return fullPath
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
<style>
  .x_submenu.is-opened>.el-submenu__title {
    border-left: 2px solid #409EFF;
    color: #409EFF !important;
  }
  .x_submenu.is-opened>.el-submenu__title i {
    color: #409EFF;
  }
</style>
