---
title: 代理商-广告主流水列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3168&menuId=3920
doc_id: kuaishou_3168
source_id: kuaishou_3168
---
# 代理商-广告主流水列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3168 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 代理商 |
| createTime | 2025-12-29T09:53:08.028Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/finance/deposit/account |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| search_type_value_map | GateWaySearchTypeValueMap |  |  | 搜索条件 |  |
| - batch_account_id_exact | String | 是 |  | 账户id搜索 |  |
| - batch_user_id_exact | String | 是 |  | 快手userId搜索 |  |
| - batch_corp_name | String | 是 |  | 公司名搜索 |  |
| - batch_product_name | String | 是 |  | 产品名搜索 |  |
| start_time | Long | 是 |  | 开始时间(时间戳) |  |
| end_time | Long | 是 |  | 结束时间(时间戳) |  |
| operation_type | Integer | 是 |  | 操作类型:0-全部1-充值2-退款11-信用账户充值14-保证金充值15-保证金减款 |  |
| account_search_type | Integer | 是 |  | 搜索类型:0-全部分类1-广告主ID2-快手ID3-产品名称4-企业名称 |  |
| keyword | String |  |  | 检索字段 |  |
| uc_type | String | 是 |  | 业务线筛选 空字符串-全部，DSP-信息流，ADX-ADX，ESP-电商 |  |
| agent_id | Long | 是 |  | agent_id |  |
| page_info | GatePageInfo |  |  | 分页 |  |
| - current_page | Integer |  |  | 当前页号 |  |
| - page_size | Integer |  |  | 页内记录数 |  |
| - total_count | Long |  |  | 总条数 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | code |  |
| message | String |  |  | msg |  |
| data | AdDspAccountDepositResp |  |  | data |  |
| - details | AdDspAccountDepositRecordSnake[] |  |  | data |  |
| - operator_name | String |  | 张三 | 操作人userName |  |
| - operator_id | Long |  | 123 | 操作人userid |  |
| - operation_type | String |  |  | 操作类型 |  |
| - advertiser_id | Long |  |  | 广告主ID |  |
| - user_id | Long |  |  | 快手用户ID |  |
| - product_name | String |  |  | 产品名称 |  |
| - corporation_name | String |  |  | 企业名称 |  |
| - first_cost_day | String |  |  | 首次消耗日期 |  |
| - industry | String |  |  | 一级行业名称 |  |
| - second_industry | String |  |  | 二级行业名称 |  |
| - amount | Long |  |  | 现金余额 |  |
| - credit_amount | Long |  |  | 信用金额 |  |
| - rebate_amount | Long |  |  | 转账的后返金额 |  |
| - pre_rebate_amount | Long |  |  | 转账的前返金额 |  |
| - contract_rebate_amount | Long |  |  | 框返金额 |  |
| - direct_rebate_amount | Long |  |  | 转账的激励账户金额 |  |
| - before_balance | Long |  |  | 转账之前的现金余额 |  |
| - after_balance | Long |  |  | 转账之后的现金金额 |  |
| - bank_sn | String |  |  | bank_sn |  |
| - remark | String |  |  | remark |  |
| - date | String |  |  | date |  |
| - create_time | Long |  |  | create_time |  |
| - serial_id | Long |  |  | 内部计费系统的流水号，可能为空 |  |
| - status | Integer |  |  | status |  |
| - instruction_id | String |  |  | 全局唯一流水号 |  |
| - trade_no | String |  |  | 交易号 |  |
| - page_info | GatePageInfo |  |  | 分页信息 |  |
| - current_page | Integer |  |  | 当前页号 |  |
| - page_size | Integer |  |  | 页内记录数 |  |
| - total_count | Long |  |  | 总条数 |  |

## 原始内容

```
代理商-广告主流水列表 /rest/openapi/gw/agent/v1/finance/deposit/account search_type_value_map GateWaySearchTypeValueMap 搜索条件 batch_account_id_exact String 账户id搜索 batch_user_id_exact String 快手userId搜索 batch_corp_name String 公司名搜索 batch_product_name String 产品名搜索 start_time Long 开始时间(时间戳) end_time Long 结束时间(时间戳) operation_type Integer 操作类型:0-全部1-充值2-退款11-信用账户充值14-保证金充值15-保证金减款 account_search_type Integer 搜索类型:0-全部分类1-广告主ID2-快手ID3-产品名称4-企业名称 keyword String 检索字段 uc_type String 业务线筛选 空字符串-全部，DSP-信息流，ADX-ADX，ESP-电商 page_info GatePageInfo 分页 current_page Integer 当前页号 page_size Integer 页内记录数 total_count Long 总条数 code Integer code message String msg data AdDspAccountDepositResp data details AdDspAccountDepositRecordSnake[] data operator_name String 操作人userName operator_id Long 操作人userid operation_type String 操作类型 advertiser_id Long 广告主ID user_id Long 快手用户ID product_name String 产品名称 corporation_name String 企业名称 first_cost_day String 首次消耗日期 industry String 一级行业名称 second_industry String 二级行业名称 amount Long 现金余额 credit_amount Long 信用金额 rebate_amount Long 转账的后返金额 pre_rebate_amount Long 转账的前返金额 contract_rebate_amount Long 框返金额 direct_rebate_amount Long 转账的激励账户金额 before_balance Long 转账之前的现金余额 after_balance Long 转账之后的现金金额 bank_sn String bank_sn remark String remark date String date create_time Long create_time serial_id Long 内部计费系统的流水号，可能为空 status Integer status instruction_id String 全局唯一流水号 trade_no String 交易号 page_info GatePageInfo 分页信息 current_page Integer 当前页号 page_size Integer 页内记录数 total_count Long 总条数
```
