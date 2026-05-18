---
title: 获取APP服务类目详情
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2793&menuId=3531
doc_id: kuaishou_2793
source_id: kuaishou_2793
---
# 获取APP服务类目详情

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2793 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:59:53.656Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/service/category |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/service/category' \
--header 'Access-Token: 7ea189432fbb5ad2462943fddad5704f' \
--header 'Content-Type: application/json' \
--data '{
    "advertiser_id": 139494
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AdAppServiceCategory[] |  |  | APP类目的返回参数 |  |
| - id | Long |  |  | APP类目ID |  |
| - name | String |  |  | APP类目名称 |  |
| - children | Object[] |  |  | 子节点 |  |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 返回信息 |  |
