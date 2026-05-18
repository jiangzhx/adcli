---
title: 修改广告组出价
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2576&menuId=3299
doc_id: kuaishou_2576
source_id: kuaishou_2576
---
# 修改广告组出价

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2576 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2025-02-24T06:20:24.212Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/ad_unit/update/bid |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| roi_ratio | Double |  | - | 付费 ROI 系数 | 优化目标为「首日 ROI」时必填：ROI 系数取值范围 ( 0,100 ] 最多支持到三位小数（如：0.066） |
| advertiser_id | Long | 是 |  | 广告主id |  |
| bid | Long | 是 |  | 出价 | 广告组 bid_type 为 CPC 和 eCPC 时：不得低于 0.2 元，不得高于 100 元，单位：厘；广告组 bid_type 为 OCPC 时：行为出价不得低于 1 元；激活出价不得低于 5 元（白名单用户不得低于 2 元），单位：厘 |
| deep_conversion_bid | Long |  |  | 请补充描述详情 |  |
| unit_id | Long | 是 |  | 广告组 ID |  |
| unit_ids | Integer[] |  |  | 可进行批量修改成相同出价，unit_id和unit_ids必填一个字段，另一个可不填 |  |

## 请求样例

### 请求样例 (shell)

```
curl -X POST \
  -H 'Access-Token: 303dca831b30c9c21' \
  -H 'Content-Type: application/json' \
  -d '{
    "advertiser_id":20000800,
    "unit_id":2960079,
    "bid":8930
}' -L https://ad.e.kuaishou.com/rest/openapi/v1/ad_unit/update/bid
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | BatchIdRespSnake |  |  | 创编计划、广告组、创意返回id参数 |  |
| - unit_ids | Long[] |  |  | 所有修改状态成功的广告组 id | 假如接口的入参 unit_id 传了值且修改状态成功，则此广告组 id 也会包含在返回值 unit_ids 里面。 |
| - errors | ErrorMsgSnake[] |  |  | 错误详情 |  |
| - id | Long |  |  | id |  |
| - error_msg | String |  |  | 错误信息 |  |
| message | String |  |  | 返回信息 |  |
| code | Integer |  |  | 返回码 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {}
}
```
