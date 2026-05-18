---
title: 代理商-账户列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3182&menuId=3935
doc_id: kuaishou_3182
source_id: kuaishou_3182
---
# 代理商-账户列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3182 |
| documentType | 2 |
| version | 0.0.7 |
| bizName | 代理商 |
| createTime | 2026-01-12T08:54:22.793Z |

## 概述

该接口适用对接前端页面的账户检索、查询场景，例如单点检索账户ID、账户名称、账户快手ID等，会识别分页参数来控制查询的数据范围。 如需拉取代理商下大量账户（本接口提示“查询列表分页参数过大，建议增加检索条件后重试”时），请参考：「代理商-拉取账户列表」 流控规则：1500QPM

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/account/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| agent_id | Long | 是 | 1 | 代理商id | 代理商id |
| create_time_end | Long |  | 1735660800000 | 广告主创建结束时间 |  |
| create_time_begin | Long |  | 1735660800000 | 广告主创建开始时间 |  |
| page | Integer | 是 |  | 当前页码 |  |
| page_size | Integer | 是 |  | 页码大小 |  |
| select_type | Integer | 是 | 0 | 搜索类型 0-不搜索 1-全部分类(全类型精确匹配，建议明确查询类型) 2-广告主ID 3-快手ID 4-广告主昵称 5-企业名称 9-广告主ID批量(英文逗号分隔，最多100个id） |  |
| select_value | String | 是 |  | 搜索值 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | msg |  |
| data | AccountListResp |  |  | 广告主列表 |  |
| - details | AccountInfoViewSnake[] |  |  | 广告主列表 |  |
| - responsible_person | String |  |  | 销售责任人 |  |
| - user_id | Long |  |  | 创建账户时使用的快手user_id |  |
| - account_id | Long |  |  | 广告主ID，也称为账户ID |  |
| - uc_type | String |  |  | 账户类型 |  |
| - payment_type | String |  |  | 付款类型 |  |
| - account_name | String |  |  | 快手昵称 |  |
| - create_time | Long |  |  | 创建时间 |  |
| - balance | Long |  |  | 现金余额 |  |
| - credit_balance | Long |  |  | 信用账户余额 |  |
| - extended_balance | Long |  |  | 预留账户余额 |  |
| - rebate | Long |  |  | 后返余额 |  |
| - pre_rebate | Long |  |  | 前返余额 |  |
| - contract_rebate | Long |  |  | 框返余额 |  |
| - total_balance | Long |  |  | 总余额 |  |
| - lo_limit | Long |  |  | 账户最低余额 |  |
| - single_out | Long |  |  | 单次转账金额 |  |
| - auto_out | Boolean |  |  | 自动转账状态 |  |
| - balance_warn | Boolean |  |  | 余额不足提醒 |  |
| - product_name | String |  |  | 产品名称 |  |
| - first_cost_day | String |  |  | 首日消耗日期 |  |
| - industry | String |  |  | 一级行业 |  |
| - second_industry | String |  |  | 二级行业 |  |
| - kuaibi_balance | Long |  |  | kuaibiBalance |  |
| - push_balance | Long |  |  | pushBalance |  |
| - recharged | Boolean |  |  | recharged |  |
| - corporation_name | String |  |  | 企业名称 |  |
| - review_status | Integer |  |  | 账户审核状态：0-待提交；1-审核中；2-审核通过；3-审核拒绝。与user_review_info分组下的review_status为同一字段 |  |
| - frozen_status | Integer |  |  | 账户冻结状态：1-未冻结；2-冻结 |  |
| - transfer_account_status | Boolean |  |  | 转账状态 |  |
| - app_id | Integer |  |  | appId |  |
| - create_source | Integer |  |  | createSource |  |
| - child_review_status_info | ChildReviewStatusInfoSnake |  |  | 审核状态信息 |  |
| - authentication_review_info | AuthenticationReviewInfoSnake |  |  | 账号认证状态 |  |
| - authentication_status | Integer |  |  | 账户真实性认证状态：0-无状态; 1-待认证; 2-认证中; 3-认证通过; 4-认证失败; 5-认证失效 |  |
| - authentication_detail | String |  |  | 如果账户真实性认证失败，显示失败原因 |  |
| - contract_review_info | ContractReviewInfoSnake |  |  | 合同签约状态 |  |
| - contract_review_status | Integer |  |  | 合同签约状态 0-无效, 1-签约中, 2-已签约, 3-已终止, 4-已过期, 5-已撤销, 6-已拒签, 7-已删除, 8-提前终止 |  |
| - contract_review_detail | String |  |  | 合同签约状态详情 |  |
| - user_review_info | UserReviewInfoSnake |  |  | 账户审核状态 |  |
| - review_status | Integer |  |  | 账户审核状态：0-待提交；1-审核中；2-审核通过；3-审核拒绝 |  |
| - review_detail | String |  |  | 如果账户审核拒绝，显示审核拒绝原因 |  |
| - copy_account | Boolean |  |  | 是否为复制账户 |  |
| - review_detail | CertReviewDetail[] |  |  | 审核详情 |  |
| - id | Integer |  |  | id |  |
| - desc | String |  |  | 描述 |  |
| - direct_rebate | Long |  |  | 激励余额 |  |
| - optimizer_owner | String |  |  | 优化师责任人 |  |
| - banned | Boolean |  |  | 是否封禁 | ture-封禁，false-正常 |
| - frozen_reason | String |  |  | 冻结原因 |  |
| - total_count | Long |  |  | 总数 |  |
| - page_no | Long |  |  | 页码 |  |
| - page_size | Long |  |  | 页大小 |  |
