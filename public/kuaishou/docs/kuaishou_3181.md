---
title: 代理商流水列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3181&menuId=3934
doc_id: kuaishou_3181
source_id: kuaishou_3181
---
# 代理商流水列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3181 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 代理商 |
| createTime | 2025-12-29T09:55:02.058Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/finance/deposit/agent |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| start_time | Long | 是 | 0 | 开始时间(时间戳) |  |
| end_time | Long | 是 | 0 | 结束时间(时间戳) |  |
| invoice_status | Integer |  | 1 | 开票状态: 0-全部 1-未开票 2-申请中 3-已开票 4-已邮寄5-已拒绝6-不可开票7-系统重新申请 |  |
| operation_type | Integer |  | 1 | 操作类型:操作类型:0-全部1-充值2-退款11-信用账户充值12-信用账户还款13-信用还款和现金充值14-保证金充值15-保证金减款 |  |
| agent_id | Long | 是 |  | 代理商id |  |
| is_page | Boolean |  |  | 是否分页 |  |
| page_info | GatePageInfo |  |  | 分页请求体 |  |
| - current_page | Integer |  |  | 当前页号 |  |
| - page_size | Integer |  |  | 页内记录数 |  |
| - total_count | Long |  |  | 总条数 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 200 | 状态码 |  |
| message | String |  | OK | MSG |  |
| data | AdDspAgentDepositRecordResp |  |  | data |  |
| - details | AdDspAgentDepositRecordViewSnake[] |  |  | details |  |
| - counterparty_id | Long |  | 1034001 | 对方Id |  |
| - id | Long |  |  | ID |  |
| - instruction_id | String |  |  | 账单ID |  |
| - operation_type | Integer |  |  | 操作类型 |  |
| - operator_name | String |  |  | 操作人名称 |  |
| - operator_id | Long |  |  | 操作ID |  |
| - amount | Long |  |  | 金额 |  |
| - credit_amount | Long |  |  | 信用金额 |  |
| - extended_amount | Long |  |  | 扩展金额 |  |
| - pre_rebate_amount | Long |  |  | 转账的前返金额 |  |
| - rebate_amount | Long |  |  | 转账的后返金额 |  |
| - agent_id | Long |  |  | 代理商ID |  |
| - before_balance | Long |  |  | 转账前的现金余额 |  |
| - after_balance | Long |  |  | 转账后的现金余额 |  |
| - bail_amount | Long |  |  | 操作的保证金金额 |  |
| - before_bail | Long |  |  | 操作前的保证金余额 |  |
| - after_bail | Long |  |  | 操作后的保证金余额 |  |
| - bank_sn | String |  |  | bank_sn |  |
| - remark | String |  |  | remark |  |
| - date | String |  |  | date |  |
| - source | String |  |  | source |  |
| - invoice_status | Integer |  |  | 开票状态 |  |
| - invoice_req_id | Long |  |  | 开票申请ID |  |
| - invoice_req_time | Long |  |  | 开票申请时间 |  |
| - agent_name | String |  |  | agentName |  |
| - bill_begin_time | Long |  |  | 信用账单开始日期 |  |
| - bill_end_time | Long |  |  | 信用账单结束日期 |  |
| - create_time | String |  |  | 创建时间 |  |
| - agent_type | Integer |  |  | 代理商类型 |  |
| - account_id | Long |  |  | 广告主ID |  |
| - page_size | Integer |  |  | 页大小 |  |
| - page_no | Integer |  |  | 当前页号 |  |
| - total | Long |  |  | 总条数 |  |

## 原始内容

```
代理商流水列表 /rest/openapi/gw/agent/v1/finance/deposit/agent start_time Long 开始时间(时间戳) end_time Long 结束时间(时间戳) invoice_status Integer 开票状态: 0-全部 1-未开票 2-申请中 3-已开票 4-已邮寄5-已拒绝6-不可开票7-系统重新申请 operation_type Integer 操作类型:操作类型:0-全部1-充值2-退款11-信用账户充值12-信用账户还款13-信用还款和现金充值14-保证金充值15-保证金减款 is_page Boolean 是否分页 page_info GatePageInfo 分页请求体 current_page Integer 当前页号 page_size Integer 页内记录数 total_count Long 总条数 code Integer 状态码 message String MSG data AdDspAgentDepositRecordResp data details AdDspAgentDepositRecordViewSnake[] details counterparty_id Long 对方Id id Long ID instruction_id String 账单ID operation_type Integer 操作类型 operator_name String 操作人名称 operator_id Long 操作ID amount Long 金额 credit_amount Long 信用金额 extended_amount Long 扩展金额 pre_rebate_amount Long 转账的前返金额 rebate_amount Long 转账的后返金额 agent_id Long 代理商ID before_balance Long 转账前的现金余额 after_balance Long 转账后的现金余额 bail_amount Long 操作的保证金金额 before_bail Long 操作前的保证金余额 after_bail Long 操作后的保证金余额 bank_sn String bank_sn remark String remark date String date source String source invoice_status Integer 开票状态 invoice_req_id Long 开票申请ID invoice_req_time Long 开票申请时间 agent_name String agentName bill_begin_time Long 信用账单开始日期 bill_end_time Long 信用账单结束日期 create_time String 创建时间 agent_type Integer 代理商类型 account_id Long 广告主ID page_size Integer 页大小 page_no Integer 当前页号 total Long 总条数
```
