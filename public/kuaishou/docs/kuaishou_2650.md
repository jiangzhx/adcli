---
title: 魔力建站落地页组更新接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2650&menuId=3375
doc_id: kuaishou_2650
source_id: kuaishou_2650
---
# 魔力建站落地页组更新接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2650 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 魔力建站 |
| createTime | 2024-07-04T12:23:43.821Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/group/update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123123 | 广告主id |  |
| group_id | String | 是 | 123123132 | 落地页组id |  |
| group_name | String | 是 | 我的落地页组 | 落地页组名称 |  |
| page_info_list | ThirdPageInfo[] | 是 |  | 第三方落地页组信息 |  |
| - page_id | String |  | 283033147526692864 | 魔力建站落地页ID：当group_source= 1 必填 | 查询落地页列表接口获取，组内限制落地页必须含有相同转化组件类型 |
| - page_name | String | 是 | 我的落地页 | 落地页名称：当group_source= 2或空必填 |  |
| - url | String | 是 | https://www.kuaishou.com/ | 落地页链接：当group_source= 2或空必填 |  |
| close_anchor | Integer |  | 1 | 是否关闭表单锚点 1 保持不变 2 关闭 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'http://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/group/create' \
--header 'Access-Token: XXXXXXXXXXXXXXXXX' \
  --header 'Content-Type: application/json' \
--data-raw {
  "advertiser_id": 123456,
  "group_id":"123"
  "group_name": "测试11-1-100013",
  "close_anchor": 1,
  "page_info_list": [
    {
      "page_id": "123"
    },
    {
      "page_id": "234"
    }
  ]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | code |  |
| message | String |  | 成功 | 成功/失败 |  |
| data | GroupIdData |  |  | 落地页组id |  |
| - group_id | String |  | 2214030995198595 | 魔力建站落地页组id |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 0,
  "message": "OK",
  "request_id": "d16c5c13738b427788c6df9e1a01db18"
}
```
