---
title: 获取可选的定向标签
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2942&menuId=3694
doc_id: kuaishou_2942
source_id: kuaishou_2942
---
# 获取可选的定向标签

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2942 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:03:48.972Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/tool/targeting_tags/list |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| type | String | 是 |  | 类型 | BUSINESS_INTEREST：商业兴趣（已下线） 、APP_INTEREST：APP 行为 、FANS_STAR：网红类别 、INTEREST_VIDEO：兴趣视频 、APP_INTEREST_ID:APP 行为 (新） |

## 请求样例

### 请求样例 (shell)

```
curl -X GET \
  -H 'Access-Token: 6acd879e43a32b58b5' \
  -H 'Content-Type: application/json' \
  -d '{
    "advertiser_id": 20000152,
    "type": "BUSINESS_INTEREST"
  }' -L https://ad.e.kuaishou.com/rest/openapi/v1/tool/targeting_tags/list
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | ToolTargetingTagsListData |  |  | JSON 返回值 |  |
| - id | Long |  |  | 标签 ID |  |
| - name | String |  |  | 标签名称 |  |
