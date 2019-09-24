## handlebars模板引擎

- 如果是无需逻辑函数处理的，可以直接用data= {aa: a}返回
- 否则，需要注册helper，在文件中编写指令（函数）
- 注意项：
- 使用handlebars需要引入模板

问题是，什么是模板，模板是字符串类型，它可以是一个html片段，json文件等等
模板的特点是，该模板是带有{{}}双花括号的，比如
```
const source = ` "Performance_Analysis_Report": {
    "props": {
      "url": "{{api_project}}/immediatelyCommand/analysisRpt",
      "options":[
        {"key": "NET_CONN_TR","label":"Network Connection Trend"},
        {"key": "NET_WAIT_STATUS_TR","label":"Network Connection Wait Trend"},
        {"key": "ACTIVE_DB_CONN_TR","label":"DB Connection Trend"},
        {"key": "NET_RECE_Q_TR","label":"Network received Queue Trend"},
        {"key": "NET_SEND_Q_TR","label":"Network Send Queue Trend"},
        {"key": "DBSPACE_CHART","label":"DBSpace I/O Utilization Trend"},
        {"key": "UPDATE_STATISTICS_TABLE","label":"Tables with Outdated Statistics"}
      ]
    }
  }`
  ```
  
这是个json格式的模板，{{api_project}}是需要解析的内容。
```
const tpl = Handlebars.compile(source)
const data = {
  api_project: 'app-sonar-0.1'
}
const output = tpl(data)  //该语句会将api_project的值改变

console.log(output) 
```
执行js后 结果是：
```
"Performance_Analysis_Report": {
    "props": {
      "url": "app-sonar-0.1/immediatelyCommand/analysisRpt",
      "options":[
        {"key": "NET_CONN_TR","label":"Network Connection Trend"},
        {"key": "NET_WAIT_STATUS_TR","label":"Network Connection Wait Trend"},
        {"key": "ACTIVE_DB_CONN_TR","label":"DB Connection Trend"},
        {"key": "NET_RECE_Q_TR","label":"Network received Queue Trend"},
        {"key": "NET_SEND_Q_TR","label":"Network Send Queue Trend"},
        {"key": "DBSPACE_CHART","label":"DBSpace I/O Utilization Trend"},
        {"key": "UPDATE_STATISTICS_TABLE","label":"Tables with Outdated Statistics"}
      ]
    }
    ```
如果是个文件
const output = tpl(data) 返回是个字符串
