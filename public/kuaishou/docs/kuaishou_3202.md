---
title: 批量拉取代理商下账户列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3202&menuId=3959
doc_id: kuaishou_3202
source_id: kuaishou_3202
---
# 批量拉取代理商下账户列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3202 |
| documentType | 2 |
| version | 0.0.4 |
| bizName | 代理商 |
| createTime | 2025-10-30T06:05:36.697Z |

## 概述

该接口用于处理账户拉取场景，区别于「代理商-账户列表」接口可以更快速的完成指定范围内的账户的拉取，新接口的响应格式与原接口相同。后续「代理商-账户列表」将不再支持批量账户拉取能力，只提供账户检索能力。 用户请求该接口时，需要在首次查询时传入begin_account_id=0，并获取每次响应结果中最后一条数据的account_id作为下次查询的条件，直到拉取数据小于批大小或拉不到数据为止。 分批拉取大小限制：batch_size <= 1000，单次拉取耗时约1.5s 限流逻辑：代理商ID维度：100次/分钟；全局：3000次/分钟。 建议通过时间范围来控制拉取账户数据的范围，并在业务低峰期（20:00 - 次日8:00）完成账户数据拉取。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/fetch/account/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| agent_id | Long | 是 | 1 | 代理商id | 代理商id |
| begin_account_id | Long | 是 | 0 | 起始accountId，第一次传0，后续每次传上次请求最后一个account_id |  |
| batch_size | Integer | 是 | 500 | 单批次拉取数量 | 单次最多查询1000 |
| create_time_begin | Long | 是 | 1732032000000 | 账户创建时间（开始） | 时间戳 |
| create_time_end | Long | 是 | 1739807999999 | 账户创建时间（结束） | 时间戳 |
| corporation_name | String |  | 北京快手科技有限公司 | 公司名称 | 输入一个企业名称，精确匹配 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 状态描述 |  |
| data | AccountListResp |  |  | 实际返回数据 |  |
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
