<template>
  <el-tooltip :disabled="tooltipDisabled" :content="$t('toolbarTooltips.' +tooltipContent)" :placement="tooltipPlacement" :effect="tooltipEffect">
    <el-dropdown :trigger="trigger" :placement="placement" :hide-on-click="false">
      <el-button style="margin-left: 10px;margin-right: 10px" :type="type" :size="size">
        <i class="el-icon-menu"></i>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <template v-for="(option, index) in internalChecks" >
          <el-checkbox-group :key="index" v-model="internalChecks[index][props.value]">
            <el-dropdown-item>
              <el-checkbox @change="(checked)=> emitEventHandler('checks-change',checked)">{{$t(option[props.label])}}</el-checkbox>
            </el-dropdown-item>
          </el-checkbox-group>
        </template>
      </el-dropdown-menu>
    </el-dropdown>
  </el-tooltip>
</template>

<script>
export default {
  name: 'XChecksButton',
  props: {
    tooltipDisabled: {
      type: Boolean,
      default: true
    },
    tooltipContent: String,
    tooltipPlacement: String,
    tooltipEffect: String,
    type: {
      type: String,
      default: 'primary'
    },
    size: String,
    placement: String,
    trigger: {
      type: String,
      default: 'click'
    },
    props: {
      default () {
        return {
          label: 'label',
          value: 'value'
        }
      }
    },
    checks: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      internalChecks: this.checks
    }
  },
  computed: {},
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    setChecks (checks) {
      this.internalChecks = checks
    }
  }
}
</script>
