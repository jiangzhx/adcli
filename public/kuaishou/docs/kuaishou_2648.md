---
title: 魔力建站落地页组信息查询接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2648&menuId=3373
doc_id: kuaishou_2648
source_id: kuaishou_2648
---
# 魔力建站落地页组信息查询接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2648 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 魔力建站 |
| createTime | 2024-07-04T12:23:16.658Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/group/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 1231123123 | 广告主id |  |
| group_id | String |  | 121313 | 落地页组id |  |
| page | Integer |  | 1 | 页码 | 默认 page=1 |
| page_size | Integer |  | 10 | 每页大小 | 默认 page_zise=20 |

## 请求样例

### 请求样例 (jsonc)

```
curl --location --request POST 'http://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/group/list' \
--header 'Access-Token: XXXXXXXXXXXXXXXXX' \
  --header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id":123456,
    "page":1,
    "page_size":10
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | code |  |
| message | String |  | 成功/失败信息 | 成功/失败信息 |  |
| data | PageGroupListGatawayRespData |  |  | data |  |
| - total_count | Long |  | 12 | 总数 |  |
| - details | PageGroupInfo[] |  |  | 落地页list信息 |  |
| - group_id | String |  | 123123 | 落地页组id |  |
| - group_name | String |  | 我的落地页组 | 我的落地页组 |  |
| - status | Integer |  | 1 | 删除状态 |  |
| - update_time | Long |  | 1635919760124 | 落地页组最后更新时间，毫秒级别时间戳 |  |
| - group_source | Integer |  | 1 | 落地页组建站来源，1-自有建站落地页组 |  |
| - page_list | PageDetailInfo[] |  |  | 落地页信息 |  |
| - out_page_id | String |  | 123123 | 落地页id |  |
| - page_name | String |  | 我的落地页 | 落地页名称 |  |
| - audit_status | Integer |  | 1 | 审核状态 |  |
| - enable | Integer |  | 1 | 是否可以投放 1-可以投放 |  |
| - page_source | Integer |  | 1 | 落地页建站来源，1-自有建站落地页 |  |
| - url | String |  | https://www.kuaishou.com/ | 链接 |  |
| - update_time | Long |  | 1635919760124 | 更新时间 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 0,
  "data": {
  "details": [
      {
       "group_id": "2210882135928206",
       "group_name": "测试自有落地页tao12",
       "status": 1,
       "update_time": 1635501390020,
       "group_source": 1,
       "page_list": [
            {
              "out_page_id": "283001733753511936",
              "page_name": "测试2",
              "audit_status": 0,
              "enable": 0,
              "page_source": 1,
              "url": "http://www.baidu.com/2",
              "update_time": 1635511111907
            }
         ]
      }
     ]
   },
  "message": "OK",
  "request_id": "d16c5c13738b427788c6df9e1a01db18"
}
```
