---
title: 魔力建站营销组件-表单查询接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2646&menuId=3371
doc_id: kuaishou_2646
source_id: kuaishou_2646
---
# 魔力建站营销组件-表单查询接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2646 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 老铁线索通 |
| createTime | 2024-07-04T12:22:36.504Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/gemini/form/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id | 在获取 access_token 的时候返回 |
| form_name | String |  |  | 表单名称 | 过滤筛选条件，支持模糊搜索 |
| distribution_type | Integer |  |  | 表单类型 |  |
| page | Integer |  |  | 页码数 | 默认为 1 |
| page_size | Integer |  |  | 每页条数 | 默认为 20，上限 500 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v2/gemini/form/list ' \
--header 'access-token: ff0d56bbb879b9cc0fb673da0ed12f2b' \
--header 'Content-Type: application/json' \
--data-raw '{
  "advertiser_id": 28751,
  "form_name":"表单04-14 15:11",
  "page":1,
  "page_size":500
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 错误码 |  |
| message | String |  |  | 错误信息 |  |
| data | FormGatewayData |  |  | 返回表单信息 |  |
| - total_count | Integer |  |  | 总数 |  |
| - details | FormGatewayDataDetail[] |  |  | 线索表单列表 |  |
| - id | Long |  |  | 表单明细 |  |
| - name | String |  |  | 表单名称 |  |
| - create_time | String |  | 2021-11-19 18:05:08 | 创建时间 | 格式：yyyy-MM-dd hh:MM:ss |
| - update_time | String |  | 2021-11-19 18:05:08 | 更新时间 | 格式：yyyy-MM-dd hh:MM:ss |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code":0,
    "message":"OK",
    "data":{
        "total_count":0,
        "details":[
            {
                "id":84737677618317771,
                "name":"表单04-30 15:25",
                "create_time":"2020-04-30 15:25:55",
                "update_time":"2020-04-30 15:25:55"
            },
            {
                "id":87586168942102987,
                "name":"表单05-08 12:04",
                "create_time":"2020-05-08 12:04:48",
                "update_time":"2020-05-08 12:04:48"
            },
            {
                "id":102895074874493387,
                "name":"表单06-19 17:56",
                "create_time":"2020-06-19 17:56:28",
                "update_time":"2020-06-19 17:56:28"
            }
        ]
    }
}
```
