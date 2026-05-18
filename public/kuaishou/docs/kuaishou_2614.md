---
title: 获取广告账户余额信息
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2614&menuId=3338
doc_id: kuaishou_2614
source_id: kuaishou_2614
---
# 获取广告账户余额信息

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2614 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-11-18T06:17:15.734Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/advertiser/fund/get |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 12345678 | 广告主id | 在获取 access_token 的时候返回 |

## 请求样例

### 请求样例 (shell)

```
curl -X GET \
  -H 'Access-Token: eaba7b0d52f944a4e0c' \
  -H 'Content-Type: application/json' \
  -d '{
    "advertiser_id": 20000800
}' -L https://ad.e.kuaishou.com/rest/openapi/v1/advertiser/fund/get
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | AdMarketAccountFundView |  | 1 | 返回数据 |  |
| - direct_rebate | Double |  | 0.0 | 激励余额 | 单位：元 |
| - contract_rebate | Double |  | 0.0 | 框返余额 | 单位：元 |
| - recharge_balance | Double |  | 0.0 | 充值余额 | 单位：元 |
| - balance | Double |  | 0.0 | 账户总余额 | 单位：元 |
| - extended_balance | Double |  | 0.0 | 平台激励余额 | 单位：元 |
| - total_shared_wallet_balance | Double |  | 0.0 | 共享子钱包总余额 | 单位：元 |
| - total_frame_shared_wallet_balance | Double |  | 0.0 | 年框共享钱包总余额 | 单位：元 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "balance": 1234.56,
      	"recharge_balance": 1234.56,
      	"contract_rebate": 1234.56,
      	"direct_rebate": 1234.56
    }
}
```
