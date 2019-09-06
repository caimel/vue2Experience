<script>
import renders from './renders'
export default {
  name: 'ColumnRender',
  functional: true,
  render: (createElement, ctx) => {
    const column = ctx.props.column
    const widget = column.widget ? column.widget : ''
    const render = renders[widget]
    if (!render) { throw new Error(`This Widget [${widget}] is not supported, you can extend it. `) }
    return render(createElement, ctx, ctx.props.emitFunc)
  }
}
</script>
