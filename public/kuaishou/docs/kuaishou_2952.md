---
title: 代理商数据（t-1 数据需要第二天 9 点以后获取）
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2952&menuId=3703
doc_id: kuaishou_2952
source_id: kuaishou_2952
---
# 代理商数据（t-1 数据需要第二天 9 点以后获取）

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2952 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2025-09-04T07:07:54.976Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/agent/report |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| agent_id | Long |  |  | 代理商 ID（注：非账户快手 ID），在获取 accessToken 时返回 |  |
| start_date | String |  |  | 过滤筛选条件，格式 yyyy-MM-dd 可选时间范围参见文档上方说明 |  |
| end_date | String |  |  | 过滤筛选条件，格式 yyyy-MM-dd 可选时间范围参见文档上方说明 |  |
| page | Integer |  |  | 请求的页码，默认为 1 |  |
| page_size | Integer |  |  | 每页行数，默认为 20，最大支持 1000 |  |
| time_type | String |  | DAY | 时间粒度 | ALL-汇总，DAY-天，MONTH-月 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v1/agent/report' \
--header 'Content-Type: application/json' \
--data-raw '{
   "agent_id": 123,
   "start_date": "2020-07-09",
   "end_date": "2020-07-09",
   "page": 1,
   "page_size": 1000
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码/错误码 |  |
| message | String |  |  | 返回信息/错误信息 |  |
| total_count | Integer |  |  | 数据的总行数 |  |
| details | AgentReportDetail |  |  | 数据明细信息 |  |
| - date_time | String |  |  | 数据日期，格式：YYYY-MM-DD |  |
| - account_id | Long |  |  | 广告主 ID |  |
| - user_id | Long |  |  | 快手 id |  |
| - account_name | Long |  |  | 广告主名称 |  |
| - total_charged_in_yuan | Long |  |  | 总消耗（元） |  |
| - total_balance_in_yuan | Long |  |  | 总余额（元） |  |
| - real_charged_in_yuan | Long |  |  | 现金消耗（元） |  |
| - total_rebate_real_charged_in_yuan | Long |  |  | 返点消耗（元） |  |
| - contract_rebate_real_charged_in_yuan | Long |  |  | 框返消耗（元） |  |
| - direct_rebate_real_charged_in_yuan | Long |  |  | 激励消耗（元） |  |
| - credit_real_charged_in_yuan | Long |  |  | 信用消耗（元） |  |
| - charge_day_on_day_percent | String |  |  | 消耗环比 |  |
| - played_num | Long |  |  | 播放数 |  |
| - ad_photo_impression | Long |  |  | 封面曝光数 |  |
| - ad_photo_click | Long |  |  | 封面点击数 |  |
| - ad_item_impression | Long |  |  | 素材曝光数 |  |
| - ad_item_click | Long |  |  | 行为数 |  |
| - photo_click_ratio | String |  |  | 封面点击率 |  |
| - item_click_ratio | String |  |  | 行为点击率 |  |
| - charged_campaign_count | Long |  |  | 有消费计划数 |  |
| - product_name | String |  |  | 产品名 |  |
| - corporation_name | String |  |  | 企业名称 |  |
| - first_cost_day | Long |  |  | 首次消耗日期 |  |
| - industry | String |  |  | 一级行业 |  |
| - second_industry | String |  |  | 二级行业 |  |

## 原始内容

```
代理商数据（t-1 数据需要第二天 9 点以后获取） /rest/openapi/v1/agent/report curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v1/agent/report' \ --header 'Content-Type: application/json' \ --data-raw '{ "agent_id": 123, "start_date": "2020-07-09", "end_date": "2020-07-09", "page": 1, "page_size": 1000 }' agent_id Long 代理商 ID（注：非账户快手 ID），在获取 accessToken 时返回 start_date String 过滤筛选条件，格式 yyyy-MM-dd 可选时间范围参见文档上方说明 end_date String 过滤筛选条件，格式 yyyy-MM-dd 可选时间范围参见文档上方说明 page Integer 请求的页码，默认为 1 page_size Integer 每页行数，默认为 20，最大支持 1000 code Integer 返回码/错误码 message String 返回信息/错误信息 total_count Integer 数据的总行数 details AgentReportDetail 数据明细信息 date_time String 数据日期，格式：YYYY-MM-DD account_id Long 广告主 ID user_id Long 快手 id account_name Long 广告主名称 total_charged_in_yuan Long 总消耗（元） total_balance_in_yuan Long 总余额（元） real_charged_in_yuan Long 现金消耗（元） total_rebate_real_charged_in_yuan Long 返点消耗（元） contract_rebate_real_charged_in_yuan Long 框返消耗（元） direct_rebate_real_charged_in_yuan Long 激励消耗（元） credit_real_charged_in_yuan Long 信用消耗（元） charge_day_on_day_percent String 消耗环比 played_num Long 播放数 ad_photo_impression Long 封面曝光数 ad_photo_click Long 封面点击数 ad_item_impression Long 素材曝光数 ad_item_click Long 行为数 photo_click_ratio String 封面点击率 item_click_ratio String 行为点击率 charged_campaign_count Long 有消费计划数 product_name String 产品名 corporation_name String 企业名称 first_cost_day Long 首次消耗日期 industry String 一级行业 second_industry String 二级行业
```
