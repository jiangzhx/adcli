---
title: 快手网红-搜索快手网红
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2677&menuId=3410
doc_id: kuaishou_2677
source_id: kuaishou_2677
---
# 快手网红-搜索快手网红

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2677 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:07:21.680Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/celebrity/list |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 132345 | 账号ID |  |
| keyword | String |  | 第三 | 查询关键词 |  |
| second_label | String |  |  | secondLabel |  |
| author_id | Long |  |  | authorId |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request GET 'https://star-gateway.test.gifshow.com/rest/openapi/gw/dsp/v1/celebrity/list' \
--header 'Access-Token: 1e615e3c3e0bcb27f1735a735501bd61' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=f3ded069-ce43-4777-8ea2-4727b62ec2012e49586e261a69c7c59f497e33d7934b:1632389490:1' \
--data-raw '{
    "advertiser_id": 20006810,
    "keyword":"自然"
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 返回信息 |  |
| data | FrontCelebrityData |  |  | 返回数据 |  |
| - celebrity_list | FrontCelebrityView[] |  | 12 | celebrity_list |  |
| - first_label_id | Integer |  | 123 | 123 |  |
| - first_label | String |  | 1234 | firstLabel |  |
| - second_label_id | Integer |  | 123 | secondLabelId |  |
| - second_label | String |  | secondLabel | secondLabel |  |
| - author_id | String |  | 1234 | authorId |  |
| - kwai_id | String |  | kwaiId | kwaiId |  |
| - author_name | String |  | authorName | authorName |  |
| - fans_num | Long |  | fansNum | fansNum |  |
