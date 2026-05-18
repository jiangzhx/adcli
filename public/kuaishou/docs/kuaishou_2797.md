---
title: 人群包数据
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2797&menuId=3535
doc_id: kuaishou_2797
source_id: kuaishou_2797
---
# 人群包数据

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2797 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:01:16.206Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/dmp/region |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |

## 请求样例

### 请求样例 (shell)

```
# Request
curl --location 'https://star-gateway.staging.kuaishou.com/rest/openapi/gw/dsp/dmp/region?advertiser_id=900015366' \
--header 'Access-Token: 309140fd130b236962de0773e225934e'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AdTargetCategoryView[] |  |  | 响应结果 |  |
| - children | String[] |  |  | 下一级地区 |  |
| - id | Long |  |  | 地区编号 |  |
| - name | String |  |  | 地区名称 |  |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 状态信息 |  |
