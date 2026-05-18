---
title: 联盟定向媒体包广告位报表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2936&menuId=3687
doc_id: kuaishou_2936
source_id: kuaishou_2936
---
# 联盟定向媒体包广告位报表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2936 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:45:40.104Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/report/media/ad_pos_report |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| start_date | String |  |  | 开始时间 | 默认 end_time 前 90 天, 格式 yyyy-MM-dd |
| end_date | Long |  |  | 结束时间 | 默认当天 |
| unit_ids | Long[] |  |  | 广告组 ID 列表 |  |
| campaign_ids | Long[] |  |  | 广告计划 ID 列表 |  |
| page | Integer |  |  | 当前页 | 默认 1 |
| page_size | Integer |  |  | 分页大小 | 默认 20 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | MediaAdPosReportData |  |  | JSON 返回值 | eg: {"media_relate_units": []} |
| - datails | MediaAdPosReportDetail |  |  | 分广告位数据报表列表 |  |
| - pos_id | String |  |  | 广告位 ID |  |
| - cost_total | Double |  |  | 消耗 | 单位：元 |
| - pos_impression | Long |  |  | 展示量 |  |
| - pos_click | Long |  |  | 点击量 |  |
| - ctr | String |  |  | CTR |  |
| - cpc | Double |  |  | CPC |  |
| - cvr | String |  |  | 浅度 CVR |  |
| - pos_conversion | Long |  |  | 激活量 |  |
| - pos_form_submit | Long |  |  | 表单提交量 |  |
| - pos_conversioncost | Double |  |  | 激活成本 | 单位：元 |
| - pos_form_submit_cost | Double |  |  | 表单提交成本 | 单位：元 |
| - pos_next_day_stay | Long |  |  | 次留量 |  |
| - pos_pay | Long |  |  | 付费量 |  |
| - pos_credit_grant | Long |  |  | 授信量 |  |
| - pos_jinjian | Long |  |  | 进件量 |  |
| - pos_register | Long |  |  | 注册量 |  |
| - pos_next_day_stay_ratio | String |  |  | 次留率 |  |
| - pos_pay_ratio | String |  |  | 付费率 |  |
| - pos_next_day_stay_cost | Double |  |  | 次留成本 |  |
| - pos_pay_cost | Double |  |  | 付费成本 |  |
| - pos_credit_grant_cost | Double |  |  | 授信成本 |  |
| - pos_jinjian_cost | Double |  |  | 进件成本 |  |
| - pos_register_cost | Double |  |  | 注册成本 |  |
| - pos_pay_purchase_amount_first_day | Double |  |  | 首日付费金额 |  |
| - pos_new_user_pay | Long |  |  | 新增付费人群 |  |
| - pos_pay_first_day_roi | String |  |  | 首日 roi |  |
| - total_count | Long |  |  | 总共条数 |  |
