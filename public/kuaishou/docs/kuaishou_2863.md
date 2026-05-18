---
title: 获取广告账户流水信息
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2863&menuId=3597
doc_id: kuaishou_2863
source_id: kuaishou_2863
---
# 获取广告账户流水信息

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2863 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-11-18T06:20:24.425Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/advertiser/fund/daily_flows |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| start_date | String |  |  | 开始日期 | 默认是当天，格式：yyyy-MM-dd |
| end_date | String |  |  | 结束日期 | 默认是当天，格式：yyyy-MM-dd |
| page | Integer |  |  | 查询的页码数 | 默认为 1 |
| page_size | Integer |  |  | 单页行数 | 默认为 20，不超过 500 |

## 请求样例

### 请求样例 (shell)

```
curl -X GET \
  -H 'Access-Token: eaba7b0d52f944a4e0c' \
  -H 'Content-Type: application/json' \
  -d '{
    "advertiser_id": 20000800,
    "start_date":"2019-09-15",
    "end_date":"2019-09-15",
    "page":1,
    "page_size":20
}' -L https://ad.e.kuaishou.com/rest/openapi/v1/advertiser/fund/daily_flows
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | AdvertiserFundDailyFlowsData |  |  | JSON 返回值 |  |
| - share_credit_charge | Double |  |  | 共享信用花费 | 单位：元 |
| - share_real_charge | Double |  |  | 共享实耗花费 | 单位：元 |
| - daily_share_charge | Double |  |  | 每日共享总花费 | 单位：元 |
| - advertiser_id | Long |  |  | 广告主 ID |  |
| - date | String |  |  | 日期 |  |
| - daily_charge | Double |  |  | 实耗总花费 | 单位：元 |
| - real_charged | Double |  |  | 实耗充值花费 | 广告主的现金消耗和返点消耗，单位：元 |
| - contract_rebate_real_charged | Double |  |  | 实耗框返花费 | 年框广告主的框架返点的消耗，单位：元 |
| - direct_rebate_real_charged | Double |  |  | 实耗激励花费 | 广告主激励账户中余额的消耗，单位：元 |
| - daily_transfer_in | Double |  |  | 转入 | 单位：元 |
| - daily_transfer_out | Double |  |  | 转出 | 单位：元 |
| - balance | Double |  |  | 日终结余 | 单位：元 |
| - real_recharged | Double |  |  | 充值转入 | 单位：元 |
| - contract_rebate_real_recharged | Double |  |  | 框返转入 | 单位：元 |
| - direct_rebate_real_recharged | Double |  |  | 激励转入 | 单位：元 |
| - order_total_charged | Double |  |  | 订单总花费 | 单位：元 |
| - order_real_charged | Double |  |  | 订单充值花费 | 单位：元 |
| - order_contract_charged | Double |  |  | 订单框返花费 | 单位：元 |
| - order_direct_charged | Double |  |  | 订单激励花费 | 单位：元 |
| - frame_share_wallet_charge | Double |  | - | 年框共享钱包花费 | 单位：元 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "total_count": 1,
        "details": [
            {
                "date": "2019-09-05",
                "balance": 0.0,
                "advertiser_id": 20000152,
                "daily_charge": 0.0,
                "real_charged": 0.0,
                "contract_rebate_real_charged": 0.0,
                "direct_rebate_real_charged": 0.0,
                "daily_transfer_in": 0.0,
                "real_recharged": 0.0,
                "contract_rebate_real_recharged": 0.0,
                "direct_rebate_real_recharged": 0.0,
                "daily_transfer_out": 0.0,
                "daily_share_charge": 0.0,
                "share_real_charge": 0.0,
                "share_credit_charge": 0.0
            }
        ]
    }
}
```

## 原始内容

```
获取广告账户流水信息 /rest/openapi/v1/advertiser/fund/daily_flows curl -X GET \ -H 'Access-Token: eaba7b0d52f944a4e0c' \ -H 'Content-Type: application/json' \ -d '{ "advertiser_id": 20000800, "start_date":"2019-09-15", "end_date":"2019-09-15", "page":1, "page_size":20 }' -L https://ad.e.kuaishou.com/rest/openapi/v1/advertiser/fund/daily_flows { "code": 0, "message": "OK", "data": { "total_count": 1, "details": [ { "date": "2019-09-05", "balance": 0.0, "advertiser_id": 20000152, "daily_charge": 0.0, "real_charged": 0.0, "contract_rebate_real_charged": 0.0, "direct_rebate_real_charged": 0.0, "daily_transfer_in": 0.0, "real_recharged": 0.0, "contract_rebate_real_recharged": 0.0, "direct_rebate_real_recharged": 0.0, "daily_transfer_out": 0.0, "daily_share_charge": 0.0, "share_real_charge": 0.0, "share_credit_charge": 0.0 } ] } } advertiser_id Long 广告主 ID start_date String 开始日期 end_date String 结束日期 page Integer 查询的页码数 page_size Integer 单页行数 code Integer 返回码 message String 返回信息 data AdvertiserFundDailyFlowsData JSON 返回值 share_credit_charge Double 共享信用花费 share_real_charge Double 共享实耗花费 daily_share_charge Double 每日共享总花费 advertiser_id Long 广告主 ID date String 日期 daily_charge Double 实耗总花费 real_charged Double 实耗充值花费 contract_rebate_real_charged Double 实耗框返花费 direct_rebate_real_charged Double 实耗激励花费 daily_transfer_in Double 转入 daily_transfer_out Double 转出 balance Double 日终结余 real_recharged Double 充值转入 contract_rebate_real_recharged Double 框返转入 direct_rebate_real_recharged Double 激励转入 order_total_charged Double 订单总花费 order_real_charged Double 订单充值花费 order_contract_charged Double 订单框返花费 order_direct_charged Double 订单激励花费
```
