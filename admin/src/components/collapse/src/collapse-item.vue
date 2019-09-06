<template>
  <div class="x-collapse-item" :class="{'is-active': isActive}">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`el-collapse-content-${id}`"
      :aria-describedby ="`el-collapse-content-${id}`"
    >
      <!--<div-->
        <!--class="x-collapse-item__header"-->
        <!--@click="handleHeaderClick"-->
        <!--role="button"-->
        <!--:id="`el-collapse-head-${id}`"-->
        <!--tabindex="0"-->
        <!--@keyup.space.enter.stop="handleEnterClick"-->
        <!--:class="{-->
          <!--'focusing': focusing,-->
          <!--'is-active': isActive-->
        <!--}"-->
        <!--@focus="handleFocus"-->
        <!--@blur="focusing = false"-->
      <!--&gt;-->
        <!--<i-->
          <!--class="el-collapse-item__arrow el-icon-arrow-right"-->
          <!--:class="{'is-active': isActive}">-->
        <!--</i>-->
        <!--<slot name="title">{{title}}</slot>-->
      <!--</div>-->
    </div>
    <!--<el-collapse-transition>-->
      <div
        class="x-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`el-collapse-head-${id}`"
        :id="`el-collapse-content-${id}`"
      >
        <div class="x-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    <!--</el-collapse-transition>-->
  </div>
</template>
<script>
import { generateId } from 'element-ui/src/utils/util'
import Emitter from '@/components/mixins/emitter'
// import ElCollapseTransition from 'element-ui/src/transitions/collapse-transition'
import ELCollapseTransition from './transitions/collapse-transition'

export default {
  name: 'XCollapseItem',

  componentName: 'XCollapseItem',

  mixins: [Emitter],

  components: {ELCollapseTransition},

  data () {
    return {
      contentWrapStyle: {
        height: 'auto',
        display: 'block'
      },
      contentHeight: 0,
      focusing: false,
      isClick: false
    }
  },

  inject: ['collapse'],

  props: {
    title: String,
    name: {
      type: [String, Number],
      default () {
        return this._uid
      }
    }
  },

  computed: {
    isActive () {
      return this.collapse.activeNames.indexOf(this.name) > -1
    },
    id () {
      return generateId()
    }
  },

  methods: {
    handleFocus () {
      setTimeout(() => {
        if (!this.isClick) {
          this.focusing = true
        } else {
          this.isClick = false
        }
      }, 50)
    },
    handleHeaderClick () {
      this.dispatch('XCollapse', 'item-click', this)
      this.focusing = false
      this.isClick = true
    },
    handleEnterClick () {
      this.dispatch('XCollapse', 'item-click', this)
    }
  }
}
</script>
