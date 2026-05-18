---
title: 客户共享钱包账户绑定/解绑
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3212&menuId=3982
doc_id: kuaishou_3212
source_id: kuaishou_3212
---
# 客户共享钱包账户绑定/解绑

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3212 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-04-08T08:07:12.700Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/trade/shared/bindopt |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| wallet_id | String | 是 | 662785604249194538 | 钱包ID |  |
| agent_id | String | 是 | 897 | 代理商ID |  |
| trade_no | String | 是 | map_ 662785604249194538_001 | 交易流水号-每笔交易唯一 流水号生成方式：mapi_{共享钱包ID}_{绑定accountId} （重要：快手侧根据该流水号幂等） | 每笔交易唯一 |
| app_id | Long | 是 | 7 | 业务线标识：磁力智投账户默认填7 |  |
| account_id | Long[] | 是 | 1 | 绑定/解绑账户ID集合 |  |
| account_operator | Long | 是 |  | 账户操作 1-绑定 2-解绑 |  |
| user_id | String | 是 | 2189467598 | 操作人快手ID |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AccountSharedWalletRelationOperatorResp |  | kuaishou交易结果标识 | kuaishou交易结果标识 |  |
| - account_id | String |  | 900318696 | 关联投放账户ID |  |
| - fail_message | String |  | 该账户已绑定 | 操作失败描述 |  |
| message | String |  | 钱包余额不足 | 错误原因 |  |
| code | Integer |  | 1-成功 | 返回码1-成功 |  |
