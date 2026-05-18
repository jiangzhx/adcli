---
title: 客户共享钱包消耗明细查询
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3211&menuId=3981
doc_id: kuaishou_3211
source_id: kuaishou_3211
---
# 客户共享钱包消耗明细查询

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3211 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-04-08T07:43:42.471Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/trade/shared/consumeQuery |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| start_consume_time | Long | 是 | 0 | 消耗起始时间 |  |
| end_consume_time | Long | 是 | 1743133904000 | 消耗结束时间 |  |
| wallet_id | String | 是 | 702261717921173578 | 钱包ID |  |
| agent_id | Long | 是 | 61609 | 代理商ID |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AccountSharedWalletConsume[] |  |  | data |  |
| - biz_trade_time | String |  | 1743091200000 | 消耗时间 |  |
| - account_id | String |  | 53079729 | 广告主ID |  |
| - account_name | String |  | 列琦21-6.9-- | 广告主名称 |  |
| - sign_company | String |  | 武汉市东湖新技术开发区列琦文化传媒工作室（个体工商户） | 签约公司主体 |  |
| - agent_company_name | String |  | 江西傲星科技有限公司 | 代理商名称 |  |
| - wallet_id | String |  | 702261717921173578 | 钱包ID |  |
| - wallet_name | String |  | 超一牛共享钱包 | 钱包名称 |  |
| - total_balance | String |  | 2 | 总消耗 |  |
| - cash | String |  | 0 | 现金消耗 |  |
| - credit | String |  | 2 | 信用消耗 |  |
| - before_rebate | String |  | 0 | 前返消耗 |  |
| - after_rebate | String |  | 0 | 后返消耗 |  |
| - remark | String |  |  | 备注 |  |
| message | String |  | 钱包不存在 | 错误描述 |  |
| code | Integer |  | 1-成功 | 返回码 |  |
