### 元数据定义

```json
{
    "layout": {}，
    "components":{}
    "http":{},
    "times":[]
}
```

### 定时器Times

```json
{
  "timers": [
    {
      "time": 3000,
      "autostart": true,
      "repeat": true,
      "immediate": false,
      "trigger":[
        {
          "target": "grid",
          "method": "loadDataHandler",
          "params": []
        }
      ]
    }
  ]
}

```

### HTTP

```json
{    
 "http": [
    {
      "method": "get",
      "url": "/topOsProcessList",
      "time": 3000,
      "autostart": true,
      "repeat": true,
      "immediate": false,
      "success":{
        "trigger": [
          {
            "target": "grid",
            "method": "setData",
            "params": ["response.data"]
          }
        ]
      },
      "error":{
        "message": "请求错误!"
      }
    }
  ]
}
```



### 布局组件 metadata

​	目前支持的组件：panel、tabs、collapses、card 

#### panel

​	行列布局面板，支持嵌套其他的布局组件

​	

```json
{
    container:'panel',
    metadata:[
        {
            style: {    #行样式   flex、height 等
                flex: 1
            }，
           	equally: true,  # 是否均分列 设置为true时，cols内的style.flex 无效
            cols: [
                {
            		slot: '${slot_name}',  #用于嵌入其他组件的占位
                     style:{
						flex: 1    # 
               		 },
        			children: 	[]   # 自身嵌套，格式和metadata相同
                     child:{    #嵌入其他布局组件
    					container: '${other_container}',
    				 	metadata: ...	
               		}
                }
            ]
        }，
        ...       
    ]
}
```



#### tabs

​	标签页布局，支持嵌套其他的布局组件

```json
{
    container:'tabs',
    metadata:[
        {
            label：'${label}' , #tab的标签（String）
            slots：{
            	label：'${label_slot}' , # 用于嵌入其他组件，以展示label（支持组件渲染）
            	content：{ 
            		name: '${content_slot}', 
            		child:{    # 用于嵌入其他组件，展示内容
                   	 	container: '${other_container}',
                   	 	metadata: ...	
                   } 
        		}，  
        	}
        }
        ...
    ]
}
```



#### collapses

​	折叠面板，支持嵌套其他的布局组件

```json
{
    container:'collapse',
    metadata:[
        {
            slots:{
                title:'${title_slot}',
                content：{ 
            		name: '${content_slot}', 
            		child:{    # 用于嵌入其他组件，展示内容
                   	 	container: '${other_container}',
                   	 	metadata: ...	
                   } 
        		}，  
            }
        }
        ...
    ]
}
```



#### card

​	卡片式面板，支持嵌套其他的布局组件

```json
{
    container:'card',
    metadata:{
        header: '${header}',  #  面板标题
        slots: {
        	header: '${header_slot}',
        	content：{ 
            		name: '${content_slot}', 
            		child:{    # 用于嵌入其他组件，展示内容
                   	 	container: '${other_container}',
                   	 	metadata: ...	
                   } 
        	}，  
    	}
    }
}
```



## 数据组件 metadata

​	除布局组件外，其他的组件如：grid，form，tree 等一系列用于渲染数据的

#### Tree

```json
{
   component: 'tree',
   metadata：{
        props：{
     		 label： '${label_key}',   #  从data中获取的label的key
			children: '${children_key}'   # 从data中获取的子节点的key    
        },
		source：{
            method:'static', # 加载数据的方式 static（从source.data 中获取）、remote（远程）、lazy （提供root节点，点击展开节点是从远程加载）
		url: '${url}',  #远程加载数据的url
		params：{ id: 1 }  # 携带的参数.从父节点获取value加上'$' 如 $id 表示从父节点data中获取id属性
		data:[]   
        },
        events: {		# 订阅事件，用于组件间的交互
                 node_click: [
                     {
						target:'${targetId}' , #目标组件的ID
                 		  method: '${targetMethod}'
                 		  params: [{
                 				key: '${key}'   # 参数。 可以从event的参数中获取 使用'$' 如 $1.id  表示取第一个参数的id
                           }
						 ...
						 ]
                     }
                 ]
        }
   }
}
```



#### Grid

```json
{
   	component：'grid',
    metadata：{
    	pagination: true,
    	pageSizes:[10,20,30],   # 不设置则根据页面大小自动计算
    	search: true			# 是否搜索
        columns:{
			method:"remote",
    		url：'${url}',
    		params: {}
   		},
		source：{
        	method: 'remote',  # remote or static
        	url：'${url}',
            params: {}
            data:[]
        },
		events:{}  
    }
}
```

​	*TODO:  Grid 的metadata 需要重构，搜索等需要被细化

#### Form

```json
{
    "component": "form",
    "meatadata": {
        "items": {
            method:"remote",
    		url：'${url}',
    		params: {}
        },    
        "source": {
            "method": "remote",  #  static  or remote
            "url": "${url}",
            "params": {
                "id": 1
            },
            "data": {}
        }
    }
}
```



#### Toolbar

```JSON
{
	  id: "toolbar",
      component: "toolbar",
      metadata: {
        children: {
          method: "static",
          data: []
        },
        events: {}
      },
      
    }
```



```json
{
      "component": "toolbar",
      "metadata": {
        "children": {
          "method": "static",
          "data": [
            {
              "id": "create",
              "type": "edit",
              "label": "新增",
              "title": "新增[员工信息]",
              "btnType": "primary",
              "icon": "el-icon-edit",
              "checkFormItemsParamsNotNull": false,
              "loadFormItems": true,
              "checkFormItemsParamsNotNullErrorMessage": "请选择数据行",
              "checkFormSourceParamsNotNull": false,
              "loadFormModel": false,
              "checkFormSourceParamsNotNullErrorMessage": "请选择数据行",
              "form": {
                "editable": true,
                "items": {
                  "method": "remote",
                  "url": "/demo/formMetadata/employee",
                  "params": {
                    "type": "create"
                  },
                  "errorMessage": "加载表单项失败！"
                },
                "submit": {
                  "url": "/demo/employee",
                  "httpMethod": "post",
                  "errorMessage": "提交数据失败！"
                }
              }
            },
            {
              "id": "update",
              "type": "edit",
              "label": "修改",
              "title": "修改[员工信息]",
              "btnType": "primary",
              "icon": "el-icon-edit",
              "checkFormItemsParamsNotNull": false,
              "loadFormItems": true,
              "checkFormItemsParamsNotNullErrorMessage": "请选择数据行",
              "checkFormSourceParamsNotNull": true,
              "loadFormModel": true,
              "checkFormSourceParamsNotNullErrorMessage": "请选择数据行",
              "form": {
                "editable": false,
                "items": {
                  "method": "remote",
                  "url": "/demo/formMetadata/employee",
                  "params": {
                    "type": "update"
                  },
                  "errorMessage": "加载表单项失败！"
                },
                "source": {
                  "method": "remote",
                  "autoLoad": true,
                  "url": "/form/meta",
                  "errorMessage": "加载数据失败！"
                }
              }
            },
            {
              "id": "read",
              "type": "edit",
              "label": "查看",
              "title": "查看[员工信息]",
              "btnType": "primary",
              "icon": "el-icon-view",
              "checkFormItemsParamsNotNull": false,
              "loadFormItems": true,
              "checkFormItemsParamsNotNullErrorMessage": "请选择数据行",
              "checkFormSourceParamsNotNull": true,
              "loadFormModel": true,
              "checkFormSourceParamsNotNullErrorMessage": "请选择数据行",
              "form": {
                "editable": false,
                "items": {
                  "method": "remote",
                  "url": "/demo/formMetadata/employee",
                  "params": {
                    "type": "read"
                  },
                  "errorMessage": "加载表单项失败！"
                },
                "source": {
                  "method": "remote",
                  "autoLoad": true,
                  "url": "/demo/employee",
                  "errorMessage": "加载数据失败！"
                }
              }
            },
            {
              "id": "delete",
              "type": "confirm",
              "label": "删除",
              "btnType": "primary",
              "icon": "el-icon-delete",
              "checkParamsNotNull": true,
              "checkParamsNotNullErrorMessage": "请选择数据行",
              "promptMessage": "确定以删除选中数据？",
              "confirmButtonText": "确定",
              "cancelButtonText": "取消",
              "url": "/demo/employee",
              "httpMethod": "delete",
              "params": {}
            }
          ]
        },
        "events": {
          "submit-success#update": [
            {
              "target": "employee",
              "method": "loadDataHandler",
              "params": []
            }
          ],
          "confirm-success#delete": [
            {
              "target": "employee",
              "method": "loadDataHandler",
              "params": []
            }
          ]
        }
      },
      "id": "toolbar"
    }
```





### 示例 

#### 	Tree-Grid

```json
{
  "layout": {
    "container": "panel",
    "metadata": {
      "items": [
        {
          "style": {
            "flex": 1
          },
          "equally": false,
          "columns": [
            {
              "slot": "left",
              "style": {
                "flex": 6
              }
            },
            {
              "slot": "right",
              "style": {
                "flex": 18
              }
            }
          ]
        }
      ]
    }
  },
  "components": {
    "left": {
      "id": "left",
      "component": "tree",
      "metadata": {
        "props": {
          "label": "label",
          "children": "children"
        },
        "source": {
          "method": "remote",
          "url": "/tree",
          "params": {},
          "data": []
        },
        "events": {
          "node-click": [
            {
              "target": "right",
              "method": "loadDataHandler",
              "params": [
                "{ orgId: nodeData.id }"
              ]
            }
          ]
        }
      }
    },
    "right": {
      "id": "right",
      "component": "grid",
      "metadata": {
        "columns": {
          "method": "static",
          "data": [
            {
              "label": "部门",
              "prop": "orgName"
            },
            {
              "label": "姓名",
              "prop": "name"
            },
            {
              "label": "日期",
              "prop": "date"
            },
            {
              "label": "地址",
              "prop": "address"
            }
          ]
        },
        "source": {
          "method": "remote",
          "url": "/treeTable"
        }
      }
    }
  }
}

```

#### Grid-From

```
{
  "layout": {
    "container": "panel",
    "metadata": {
      "items": [
        {
          "style": {
            "flex": 1
          },
          "equally": false,
          "columns": [
            {
              "slot": "left",
              "style": {
                "flex": 17
              }
            },
            {
              "slot": "right",
              "style": {
                "flex": 7
              }
            }
          ]
        }
      ]
    }
  },
  "components": {
    "left": {
      "id": "left",
      "component": "grid",
      "metadata": {
        "columns": {
          "method": "remote",
          "url": "/griddata/meta",
          "data": []
        },
        "source": {
          "method": "remote",
          "url": "/griddata"
        },
        "events": {
          "row-dblclick": [
            {
              "target": "right",
              "method": "loadModelHandler",
              "params": [
                "{ id: row.id }"
              ]
            }
          ]
        }
      }
    },
    "right": {
      "id": "right",
      "component": "form",
      "metadata": {
        "form": {
          "editable": false,
          "items": {
            "method": "remote",
            "url": "/form/meta",
            "autoLoad": true,
            "params": {
              "type": "create"
            },
            "errorMessage": "加载表单项失败！"
          },
          "source": {
            "method": "remote",
            "url": "/form",
            "errorMessage": "加载数据失败！"
          }
        }
      }
    }
  }
}

```

