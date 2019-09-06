export const partials = [
  { name: 'x-panel',
    template:
    `{{#if items}}<div class="x-panel">{{#each items}}
      <el-row :gutter="{{gutter}}" :style="{ {{#if style.flex }} flex: {{style.flex}}{{#if style.minHeight}},minHeight: '{{style.minHeight}}'{{/if}}{{#if style.maxHeight}},maxHeight: '{{style.maxHeight}}'{{/if}}{{/if}} {{#if style.height}}height: '{{style.height}}'{{/if}} }">{{#each cols}}
       <el-col :span="{{span}}" :offset="{{offset}}" :push ="{{push}}" :pull="{{pull}}" :style="{ {{#if style.width}} width: '{{style.width}}'{{/if}} }">
         <div class="x-panel-wrapper">
            {{#if slot}}<slot name="{{slot}}"></slot>{{/if}}
           {{> x-panel items = children  }}</div>
       </el-col>{{/each}}
      </el-row>{{/each}}
</div>{{/if}}`
  }
]
