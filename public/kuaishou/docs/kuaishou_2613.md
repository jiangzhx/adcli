---
title: 获取广告主资质信息
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2613&menuId=3337
doc_id: kuaishou_2613
source_id: kuaishou_2613
---
# 获取广告主资质信息

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2613 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-22T15:52:01.468Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/advertiser/info |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123445677 | 广告主id | 在获取 access_token 的时候返回 |

## 请求样例

### 请求样例 (shell)

```
curl -X GET \
  -H 'Access-Token: eaba7b0d52f944a4e0c' \
  -H 'Content-Type: application/json' \
  -d '{
    "advertiser_id": 20000800
}' -L https://ad.e.kuaishou.com/rest/openapi/v1/advertiser/info
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | AdMarketAccountInfoView |  | 1 | 详情 |  |
| - primary_industry_name | String |  | 传媒资讯类 | 一级行业名称 |  |
| - industry_id | Long |  | 1251 | 二级行业ID |  |
| - industry_name | String |  | 其他资讯类 | 二级行业名称 |  |
| - user_id | Long |  | 1239164944 | 快手账户ID |  |
| - user_name | String |  | Eason忻 | 快手账户名称 |  |
| - delivery_type | Integer |  | 1 | 投放方式`0:默认；1:优先效果 |  |
| - primary_industry_id | Long |  | 1021 | 一级行业ID |  |
| - effect_first | Integer |  | 1 | 优先效果策略生效状态`1:开启；其他:未开启，由系统自动设定 |  |
| - corporation_name | String |  | 测试广告主 | 公司名称 |  |
| - product_name | String |  | 产品名称 | 账户产品名称 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "user_id": 1234,
        "user_name": "XXXXX",
        "corporation_name": "XXXXX"
    }
}
```
