---
title: 查看共享账户
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2725&menuId=3458
doc_id: kuaishou_2725
source_id: kuaishou_2725
---
# 查看共享账户

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2725 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:47:35.308Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/share/sameCertAccounts |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 1 | 广告主id | 注：非账户快手 ID |
| same_agent | Boolean |  | true | 是否在同一代理下 |  |

## 请求样例

### 请求样例 (shell)

```
curl -H "Access-Token:d198a850da67a116279e30" \
       -H "Content-Type:application/json" \
       -d '
       {
       "advertiser_id": 486
       }
       ' https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/share/sameCertAccounts
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 状态码 |  |
| data | CorpAccountManageViewListData |  | {} | 结果 |  |
| - details | CorpAccountManageViewGW[] |  |  | 返回结果 |  |
| - account_id | Long |  | 1 | 广告主id |  |
| - account_name | String |  | 测试 | 广告主name |  |
| message | String |  | 信息 | 信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
       "code": 0,
       "data": {
       "details": [
       {
       "account_id": 10787999,
 "account_name": "我在这里搞测试"
 }
       ]
       },
       "message": "OK",
       "request_id": "0ae4094286ab419bad50e559bdb405fe"
       }
```
