---
title: 客户共享钱包交易明细查询
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3210&menuId=3980
doc_id: kuaishou_3210
source_id: kuaishou_3210
---
# 客户共享钱包交易明细查询

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3210 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-04-08T07:32:10.269Z |

## 概述

客户共享钱包交易明细查询

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/trade/shared/record |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| trade_type | Long |  | 16-转入 17-转出 | 交易类型（16转入 17转出 for共享子钱包） |  |
| start_trade_time | Long | 是 | 0 | 交易开始时间戳 |  |
| end_trade_time | Long | 是 | 0 | 交易结束时间戳 |  |
| wallet_id | String | 是 | 0 | wallet_id |  |
| agent_id | Long | 是 | 62164 | agent_id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AccountSharedWalletTransfer[] |  | 交易明细 | 交易明细 |  |
| - trade_type | Long |  | 16 | 交易类型 16-转入共享钱包 17-从共享钱包转出 |  |
| - trade_no | String |  | 732086176106573922 | 交易流水号 |  |
| - operator | String |  | 黄泽南 | 操作人 |  |
| - user_id | String |  | 1690738665 | 快手userId |  |
| - biz_trade_time | String |  | 1742571464842 | 交易时间戳 |  |
| - sign_company | String |  | 北京快手广告有限公司 | 签约公司主体 |  |
| - agent_company_name | String |  | 广州致鑫信息技术有限责任公司 | 代理商公司名称 |  |
| - app_id | Long |  | 7 | 快手业务线ID |  |
| - wallet_id | String |  | 731643879933890616 | 钱包ID |  |
| - wallet_name | String |  | 北京千读 | 钱包名称 |  |
| - total_balance | String |  | 103000000 | 交易总金额 |  |
| - cash | String |  | 0 | 交易现金金额 |  |
| - credit | String |  | 103000000 | 交易信用金额 |  |
| - before_rebate | String |  | 0 | 交易前返金额 |  |
| - after_rebate | String |  | 0 | 交易后返金额 |  |
| - remark | String |  |  | 交易备注信息 |  |
| message | String |  | 钱包不存在 | 错误描述 |  |
| code | Integer |  |  | 返回码 |  |
