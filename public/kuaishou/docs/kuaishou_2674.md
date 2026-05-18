---
title: 快手网红-网红分类
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2674&menuId=3406
doc_id: kuaishou_2674
source_id: kuaishou_2674
---
# 快手网红-网红分类

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2674 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:06:51.536Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/industry/celebrity |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 12345 | 账号ID |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request GET 'https://star-gateway.test.gifshow.com/rest/openapi/gw/dsp/v1/industry/celebrity' \
--header 'Access-Token: 1e615e3c3e0bcb27f1735a735501bd61' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=f3ded069-ce43-4777-8ea2-4727b62ec2012e49586e261a69c7c59f497e33d7934b:1632389490:1; accessproxy_session=77346b49-7029-4cb1-b1ef-f43f239cf7e2' \
--data-raw '{
    "advertiser_id": 20006810
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 接口返回信息 |  |
| data | FrontDmpTreeNodeData |  |  | 接口返回数据 |  |
| - celebrity_tree | FrontDmpTreeNode[] |  |  | 快手网红标签 |  |
| - id | Long |  |  | 标签ID |  |
| - name | String |  |  | 标签名称 |  |
| - children | FrontDmpTreeNode1[] |  |  | 子节点 |  |
| - id | Long |  |  | 标签ID |  |
| - name | String |  |  | 标签名称 |  |
