---
title: 原生效果数据报表明细接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3049&menuId=3438
doc_id: kuaishou_3049
source_id: kuaishou_3049
---
# 原生效果数据报表明细接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3049 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2025-03-11T12:51:22.190Z |

## 概述

【注】查询广告组、广告创意层级的数据时不包括省心投物料

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/effect/native/detailedReport |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | advertiser_id |  |
| page_info | PageInfoSnake486 |  |  | 分页信息 |  |
| - total_count | Long |  |  | 总条数 |  |
| - page_size | Integer |  |  | 当前分页大小 |  |
| - current_page | Integer |  | ddd | 当前页面 |  |

## 请求样例

### 请求样例 (jsonc)

```
{
  "advertiser_id": 16626700,
  "search_param": {
    "view_type": 2,
    "report_start_day": 1689782400000,
    "report_end_day": 1690127999000
  },
  "page_info": {
    "current_page": 1,
    "page_size": 10
  }
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 返回码 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | NativeDetailReportResponseSnake |  |  | 原生报表明细结果 |  |
| - result_list | AdDspNativeReportViewSnake[] |  |  | 报表明细 |  |
| - campaign_id | Long |  |  | 计划ID |  |
| - campaign_name | String |  |  | 计划名称 |  |
| - unit_id | Long |  |  | 广告组ID |  |
| - unit_name | String |  |  | 广告组名称 |  |
| - creative_id | Long |  |  | 创意ID |  |
| - creative_name | String |  |  | 创意名称 |  |
| - create_time | String |  |  | 创建时间 时间戳 毫秒 |  |
| - roi | Boolean |  |  | ROI |  |
| - indirect_submit_0_d_cnt | Double |  |  | 当日间接表单提交 |  |
| - indirect_submit_7_d_cnt | Double |  |  | 7日间接表单提交 |  |
| - t_0_indirect_conversion_cnt | Double |  |  | 当日间接激活数 |  |
| - t_7_indirect_conversion_cnt | Double |  |  | 7日间接激活数 |  |
| - t_0_indirect_paied_cnt | Double |  |  | 当日间接付费次数 |  |
| - t_7_indirect_paied_cnt | Double |  |  | 7日间接付费次数 |  |
| - t_0_indirect_paied_amt | Double |  |  | 当日间接付费金额 |  |
| - t_7_indirect_paied_amt | Double |  |  | 7日间接付费金额 |  |
| - t_7_indirected_paied_roi | Double |  |  | 7日间接ROI |  |
| - total_charge | Long |  |  | 花费(厘) |  |
| - impression | Long |  |  | 封面曝光数 |  |
| - photo_click | Long |  |  | 封面点击数 |  |
| - click | Long |  |  | 素材曝光数 |  |
| - actionbar_click | Long |  |  | 行为数 |  |
| - photo_click_ratio | Double |  |  | 封面点击率 |  |
| - impression_1_k_cost | Double |  |  | 平均千次封面曝光花费(币) |  |
| - click_1_k_cost | Double |  |  | 平均千次素材曝光花费(币) |  |
| - photo_click_cost | Double |  |  | 平均封面点击单价(币) |  |
| - action_cost | Double |  |  | 平均行为单价(币) |  |
| - ad_show | Long |  |  | 曝光数 |  |
| - action_new_ratio | Double |  |  | 行为率 |  |
| - ad_photo_played_2_s_ratio | Double |  |  | 2s播放率 |  |
| - play_3_s_ratio | Double |  |  | 3s播放率 |  |
| - play_5_s_ratio | Double |  |  | 5s播放率 |  |
| - ad_photo_played_10_s_ratio | Double |  |  | 10s播放率 |  |
| - ad_photo_played_75_percent_ratio | Double |  |  | 75%进度播放率 |  |
| - play_end_ratio | Double |  |  | 完播率 |  |
| - share | Long |  |  | 分享数 |  |
| - comment | Long |  |  | 评论数 |  |
| - likes | Long |  |  | 点赞数 |  |
| - follow | Long |  |  | 新增关注数 |  |
| - report | Long |  |  | 举报数 |  |
| - block | Long |  |  | 拉黑数 |  |
| - negative | Long |  |  | 不感兴趣数(减少此类作品数) |  |
| - played_num | Long |  |  | 播放数 |  |
| - played_three_seconds | Long |  |  | 3s播放数(有效播放数) |  |
| - ad_photo_played_10_s | Long |  |  | 10s播放数 |  |
| - ad_photo_played_75_percent | Long |  |  | 75%播放进度数 |  |
| - played_end | Long |  |  | 完播数(播放完成) |  |
| - conversion | Long |  |  | 激活数 |  |
| - conversion_cost | Double |  |  | 激活单价 |  |
| - key_action | Long |  |  | 关键行为数 |  |
| - key_action_cost | Double |  |  | 关键行为成本 |  |
| - key_action_ratio | Double |  |  | 关键行为率 |  |
| - event_new_user_pay | Long |  |  | 新增付费人数 |  |
| - event_new_user_pay_cost | Double |  |  | 新增付费人数成本 |  |
| - event_new_user_pay_ratio | Double |  |  | 新增付费人数率 |  |
| - event_pay_first_day | Long |  |  | 首日付费次数 |  |
| - event_pay_first_day_cost | Double |  |  | 首日付费次数成本 |  |
| - event_pay_purchase_amount_first_day | Double |  |  | 激活当日付费金额 |  |
| - event_pay_first_day_roi | Double |  |  | 激活当日ROI |  |
| - event_pay_purchase_amount_one_day | Double |  |  | 激活后24h付费金额(回传时间) |  |
| - event_pay_purchase_amount_one_day_roi | Double |  |  | 激活后24h-ROI(回传时间) |  |
| - event_pay_purchase_amount_one_day_by_conversion | Double |  |  | 激活后24h付费金额(激活时间) |  |
| - event_pay_purchase_amount_one_day_by_conversion_roi | Double |  |  | 激活后24h-ROI(激活时间) |  |
| - event_pay | Long |  |  | 付费次数 |  |
| - event_pay_cost | Double |  |  | 付费次数成本 |  |
| - event_pay_purchase_amount | Double |  |  | 付费金额 |  |
| - t_0_direct_conversion_cnt | Long |  |  | 激活数(计费时间) |  |
| - t_0_conversion_cnt | Long |  |  | 当日累计激活数 |  |
| - t_7_conversion_cnt | Long |  |  | 7日累计激活数 |  |
| - t_0_direct_paied_cnt | Long |  |  | 付费次数(计费时间) |  |
| - t_0_paied_cnt | Long |  |  | 当日累计付费次数 |  |
| - t_7_paied_cnt | Long |  |  | 7日累计付费次数 |  |
| - accumulated_paied_cost | Double |  |  | 累计付费次数成本 |  |
| - t_0_direct_paied_amt | Double |  |  | 付费金额(计费时间) |  |
| - t_0_paied_amt | Double |  |  | 当日累计付费金额 |  |
| - t_7_paied_amt | Double |  |  | 7日累计付费金额 |  |
| - t_0_paied_roi | Double |  |  | 当日累计ROI |  |
| - t_7_paied_roi | Double |  |  | 7日累计ROI |  |
| - conversion_num | Long |  |  | 转化数(回传时间) |  |
| - conversion_num_cost | Double |  |  | 转化成本(回传时间) |  |
| - conversion_ratio | Double |  |  | 转化率(回传时间) |  |
| - deep_conversion_num | Long |  |  | 深度转化数(回传时间) |  |
| - deep_conversion_cost | Double |  |  | 深度转化成本(回传时间) |  |
| - deep_conversion_ratio | Double |  |  | 深度转化率(回传时间) |  |
| - direct_submit_1_d_cnt | Long |  |  | 表单提交数(计费时间) |  |
| - submit_1_d_cnt | Long |  |  | 当日累计表单提交 |  |
| - submit_7_d_cnt | Long |  |  | 7日累计表单提交 |  |
| - submit_unit_price_cost | Double |  |  | 累计表单提交单价 |  |
| - event_valid_clues | Long |  |  | 有效线索数 |  |
| - event_valid_clue_cost | Double |  |  | 有效线索成本 |  |
| - merchant_reco_fans | Long |  |  | 涨粉数 |  |
| - merchant_reco_fans_cost | Double |  |  | 涨粉成本 |  |
| - indirect_event_pay_cnt | Long |  |  | 间接转化数(回传时间) |  |
| - kol_user_type_desc | String |  |  | 原生广告类型 |  |
| - ocpc_action_type | String |  |  | 优化目标 |  |
| - campaign_type | String |  |  | 营销目标 |  |
| - author_id | String |  |  | 快手号ID |  |
| - sum | AdDspNativeReportViewSnake[] |  |  | 全局汇总 |  |
| - campaign_id | Long |  |  | 计划ID |  |
| - campaign_name | String |  |  | 计划名称 |  |
| - unit_id | Long |  |  | 广告组ID |  |
| - unit_name | String |  |  | 广告组名称 |  |
| - creative_id | Long |  |  | 创意ID |  |
| - creative_name | String |  |  | 创意名称 |  |
| - create_time | String |  |  | 创建时间 时间戳 毫秒 |  |
| - roi | Boolean |  |  | ROI |  |
| - indirect_submit_0_d_cnt | Double |  |  | 当日间接表单提交 |  |
| - indirect_submit_7_d_cnt | Double |  |  | 7日间接表单提交 |  |
| - t_0_indirect_conversion_cnt | Double |  |  | 当日间接激活数 |  |
| - t_7_indirect_conversion_cnt | Double |  |  | 7日间接激活数 |  |
| - t_0_indirect_paied_cnt | Double |  |  | 当日间接付费次数 |  |
| - t_7_indirect_paied_cnt | Double |  |  | 7日间接付费次数 |  |
| - t_0_indirect_paied_amt | Double |  |  | 当日间接付费金额 |  |
| - t_7_indirect_paied_amt | Double |  |  | 7日间接付费金额 |  |
| - t_7_indirected_paied_roi | Double |  |  | 7日间接ROI |  |
| - total_charge | Long |  |  | 花费(厘) |  |
| - impression | Long |  |  | 封面曝光数 |  |
| - photo_click | Long |  |  | 封面点击数 |  |
| - click | Long |  |  | 素材曝光数 |  |
| - actionbar_click | Long |  |  | 行为数 |  |
| - photo_click_ratio | Double |  |  | 封面点击率 |  |
| - impression_1_k_cost | Double |  |  | 平均千次封面曝光花费(币) |  |
| - click_1_k_cost | Double |  |  | 平均千次素材曝光花费(币) |  |
| - photo_click_cost | Double |  |  | 平均封面点击单价(币) |  |
| - action_cost | Double |  |  | 平均行为单价(币) |  |
| - ad_show | Long |  |  | 曝光数 |  |
| - action_new_ratio | Double |  |  | 行为率 |  |
| - ad_photo_played_2_s_ratio | Double |  |  | 2s播放率 |  |
| - play_3_s_ratio | Double |  |  | 3s播放率 |  |
| - play_5_s_ratio | Double |  |  | 5s播放率 |  |
| - ad_photo_played_10_s_ratio | Double |  |  | 10s播放率 |  |
| - ad_photo_played_75_percent_ratio | Double |  |  | 75%进度播放率 |  |
| - play_end_ratio | Double |  |  | 完播率 |  |
| - share | Long |  |  | 分享数 |  |
| - comment | Long |  |  | 评论数 |  |
| - likes | Long |  |  | 点赞数 |  |
| - follow | Long |  |  | 新增关注数 |  |
| - report | Long |  |  | 举报数 |  |
| - block | Long |  |  | 拉黑数 |  |
| - negative | Long |  |  | 不感兴趣数(减少此类作品数) |  |
| - played_num | Long |  |  | 播放数 |  |
| - played_three_seconds | Long |  |  | 3s播放数(有效播放数) |  |
| - ad_photo_played_10_s | Long |  |  | 10s播放数 |  |
| - ad_photo_played_75_percent | Long |  |  | 75%播放进度数 |  |
| - played_end | Long |  |  | 完播数(播放完成) |  |
| - conversion | Long |  |  | 激活数 |  |
| - conversion_cost | Double |  |  | 激活单价 |  |
| - key_action | Long |  |  | 关键行为数 |  |
| - key_action_cost | Double |  |  | 关键行为成本 |  |
| - key_action_ratio | Double |  |  | 关键行为率 |  |
| - event_new_user_pay | Long |  |  | 新增付费人数 |  |
| - event_new_user_pay_cost | Double |  |  | 新增付费人数成本 |  |
| - event_new_user_pay_ratio | Double |  |  | 新增付费人数率 |  |
| - event_pay_first_day | Long |  |  | 首日付费次数 |  |
| - event_pay_first_day_cost | Double |  |  | 首日付费次数成本 |  |
| - event_pay_purchase_amount_first_day | Double |  |  | 激活当日付费金额 |  |
| - event_pay_first_day_roi | Double |  |  | 激活当日ROI |  |
| - event_pay_purchase_amount_one_day | Double |  |  | 激活后24h付费金额(回传时间) |  |
| - event_pay_purchase_amount_one_day_roi | Double |  |  | 激活后24h-ROI(回传时间) |  |
| - event_pay_purchase_amount_one_day_by_conversion | Double |  |  | 激活后24h付费金额(激活时间) |  |
| - event_pay_purchase_amount_one_day_by_conversion_roi | Double |  |  | 激活后24h-ROI(激活时间) |  |
| - event_pay | Long |  |  | 付费次数 |  |
| - event_pay_cost | Double |  |  | 付费次数成本 |  |
| - event_pay_purchase_amount | Double |  |  | 付费金额 |  |
| - t_0_direct_conversion_cnt | Long |  |  | 激活数(计费时间) |  |
| - t_0_conversion_cnt | Long |  |  | 当日累计激活数 |  |
| - t_7_conversion_cnt | Long |  |  | 7日累计激活数 |  |
| - t_0_direct_paied_cnt | Long |  |  | 付费次数(计费时间) |  |
| - t_0_paied_cnt | Long |  |  | 当日累计付费次数 |  |
| - t_7_paied_cnt | Long |  |  | 7日累计付费次数 |  |
| - accumulated_paied_cost | Double |  |  | 累计付费次数成本 |  |
| - t_0_direct_paied_amt | Double |  |  | 付费金额(计费时间) |  |
| - t_0_paied_amt | Double |  |  | 当日累计付费金额 |  |
| - t_7_paied_amt | Double |  |  | 7日累计付费金额 |  |
| - t_0_paied_roi | Double |  |  | 当日累计ROI |  |
| - t_7_paied_roi | Double |  |  | 7日累计ROI |  |
| - conversion_num | Long |  |  | 转化数(回传时间) |  |
| - conversion_num_cost | Double |  |  | 转化成本(回传时间) |  |
| - conversion_ratio | Double |  |  | 转化率(回传时间) |  |
| - deep_conversion_num | Long |  |  | 深度转化数(回传时间) |  |
| - deep_conversion_cost | Double |  |  | 深度转化成本(回传时间) |  |
| - deep_conversion_ratio | Double |  |  | 深度转化率(回传时间) |  |
| - direct_submit_1_d_cnt | Long |  |  | 表单提交数(计费时间) |  |
| - submit_1_d_cnt | Long |  |  | 当日累计表单提交 |  |
| - submit_7_d_cnt | Long |  |  | 7日累计表单提交 |  |
| - submit_unit_price_cost | Double |  |  | 累计表单提交单价 |  |
| - event_valid_clues | Long |  |  | 有效线索数 |  |
| - event_valid_clue_cost | Double |  |  | 有效线索成本 |  |
| - merchant_reco_fans | Long |  |  | 涨粉数 |  |
| - merchant_reco_fans_cost | Double |  |  | 涨粉成本 |  |
| - indirect_event_pay_cnt | Long |  |  | 间接转化数(回传时间) |  |
| - kol_user_type_desc | String |  |  | 原生广告类型 |  |
| - ocpc_action_type | String |  |  | 优化目标 |  |
| - campaign_type | String |  |  | 营销目标 |  |
| - author_id | String |  |  | 快手号ID |  |
| - page_info | PageInfoSnake486 |  |  | 分页信息 |  |
| - total_count | Long |  |  | 总条数 |  |
| - page_size | Integer |  |  | 当前分页大小 |  |
| - current_page | Integer |  | ddd | 当前页面 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 0,
  "data": {
    "page_info": {
      "currentPage": 1,
      "pageSize": 1,
      "totalCount": 8
    },
    "result_list": [
      {
        "event_pay_first_day": 26,
        "creative_name": null,
        "conversion_num_cost": 71.8133846153846,
        "t_0_paied_amt": 0,
        "accumulated_paied_cost": 71.8133846153846,
        "event_new_user_pay_ratio": 0.017184401850627893,
        "campaign_type": "提升应用安装",
        "submit_7_d_cnt": 0,
        "t_7_paied_amt": 0,
        "t_0_paied_roi": 0,
        "creative_id": null,
        "ad_photo_played_10_s_ratio": 0.07390569881254037,
        "event_pay_first_day_roi": 0,
        "key_action_ratio": 0,
        "t_0_indirect_paied_amt": 0,
        "photo_click": 1728,
        "t_0_direct_conversion_cnt": 1533,
        "t_7_paied_roi": 0,
        "event_pay_cost": 71.8133846153846,
        "indirect_submit_7_d_cnt": 0,
        "event_pay_purchase_amount_one_day_by_conversion_roi": 0,
        "block": 0,
        "deep_conversion_ratio": 0,
        "deep_conversion_cost": 0,
        "campaign_id": 1580574383,
        "likes": 57,
        "t_0_indirect_conversion_cnt": 5,
        "event_valid_clue_cost": 0,
        "event_valid_clues": 0,
        "create_time": 1689839599628,
        "submit_1_d_cnt": 0,
        "key_action": 0,
        "ad_photo_played_75_percent": 374,
        "total_charge": 1867148,
        "submit_unit_price_cost": 0,
        "click": 40254,
        "unit_name": null,
        "merchant_reco_fans_cost": 64.38441379310345,
        "played_num": 40254,
        "event_pay_first_day_cost": 71.8133846153846,
        "ad_photo_played_10_s": 2975,
        "impression_1_k_cost": 175.56633756464504,
        "indirect_event_pay_cnt": 0,
        "ocpc_action_type": null,
        "indirect_submit_0_d_cnt": 0,
        "key_action_cost": 0,
        "impression": 10635,
        "click_1_k_cost": 46.384160580315,
        "author_id": null,
        "event_pay_purchase_amount_one_day_roi": 0,
        "event_pay_purchase_amount_one_day_by_conversion": 0,
        "played_end": 464,
        "ad_show": 48796,
        "ad_photo_played_75_percent_ratio": 0.009291002136433647,
        "t_0_direct_paied_cnt": 26,
        "t_7_indirected_paied_roi": 0,
        "actionbar_click": 2304,
        "campaign_name": "MCB-7.20-【39】",
        "event_pay_purchase_amount": 0,
        "negative": 10,
        "played_three_seconds": 6446,
        "photo_click_ratio": 0.16248236953455572,
        "t_7_indirect_conversion_cnt": 0,
        "direct_submit_1_d_cnt": 0,
        "event_new_user_pay_cost": 71.8133846153846,
        "share": 84,
        "t_7_conversion_cnt": 1538,
        "conversion_num": 26,
        "unit_id": null,
        "photo_click_cost": 1.080525462962963,
        "ad_photo_played_2_s_ratio": 0.22375416107716004,
        "action_new_ratio": 0.04721698499877039,
        "conversion": 1513,
        "t_0_paied_cnt": 26,
        "play_end_ratio": 0.011526804789586127,
        "event_pay": 26,
        "action_cost": 0.8103940972222222,
        "t_7_paied_cnt": 26,
        "t_0_direct_paied_amt": 0,
        "follow": 29,
        "event_pay_purchase_amount_one_day": 0,
        "deep_conversion_num": 0,
        "event_new_user_pay": 26,
        "t_0_conversion_cnt": 1538,
        "kol_user_type_desc": null,
        "t_0_indirect_paied_cnt": 0,
        "report": 1,
        "event_pay_purchase_amount_first_day": 0,
        "comment": 26,
        "conversion_cost": 1.234070059484468,
        "merchant_reco_fans": 29
      }
    ],
    "sum": [
      {
        "event_pay_first_day": 35,
        "conversion_num_cost": 100.95397142857144,
        "t_0_paied_amt": 0,
        "accumulated_paied_cost": 100.95397142857144,
        "event_new_user_pay_ratio": 0.013806706114398421,
        "submit_7_d_cnt": 0,
        "t_7_paied_amt": 0,
        "t_0_paied_roi": 0,
        "ad_photo_played_10_s_ratio": 0.04164415422693568,
        "event_pay_first_day_roi": 0,
        "key_action_ratio": 0,
        "t_0_indirect_paied_amt": 0,
        "photo_click": 4109,
        "t_0_direct_conversion_cnt": 2568,
        "t_7_paied_roi": 0,
        "event_pay_cost": 100.95397142857144,
        "indirect_submit_7_d_cnt": 0,
        "event_pay_purchase_amount_one_day_by_conversion_roi": 0,
        "block": 0,
        "deep_conversion_ratio": 0,
        "deep_conversion_cost": 0,
        "likes": 114,
        "t_0_indirect_conversion_cnt": 7,
        "event_valid_clue_cost": 0,
        "event_valid_clues": 0,
        "submit_1_d_cnt": 0,
        "key_action": 0,
        "ad_photo_played_75_percent": 2660,
        "submit_unit_price_cost": 0,
        "total_charge": 3533389,
        "click": 194337,
        "merchant_reco_fans_cost": 69.28213725490197,
        "played_num": 194337,
        "event_pay_first_day_cost": 100.95397142857144,
        "ad_photo_played_10_s": 8093,
        "impression_1_k_cost": 127.21472547254726,
        "indirect_submit_0_d_cnt": 0,
        "key_action_cost": 0,
        "impression": 27775,
        "click_1_k_cost": 18.18176157911257,
        "event_pay_purchase_amount_one_day_roi": 0,
        "event_pay_purchase_amount_one_day_by_conversion": 0,
        "played_end": 1987,
        "ad_show": 217405,
        "ad_photo_played_75_percent_ratio": 0.013687563356437529,
        "t_0_direct_paied_cnt": 35,
        "t_7_indirected_paied_roi": 0,
        "actionbar_click": 4338,
        "event_pay_purchase_amount": 0,
        "negative": 18,
        "played_three_seconds": 16457,
        "photo_click_ratio": 0.14793879387938794,
        "t_7_indirect_conversion_cnt": 0,
        "direct_submit_1_d_cnt": 0,
        "event_new_user_pay_cost": 100.95397142857144,
        "share": 185,
        "t_7_conversion_cnt": 2576,
        "conversion_num": 35,
        "photo_click_cost": 0.859914577756145,
        "ad_photo_played_2_s_ratio": 0.09758306447048169,
        "action_new_ratio": 0.01995354292679561,
        "conversion": 2535,
        "t_0_paied_cnt": 35,
        "play_end_ratio": 0.010224506913248636,
        "event_pay": 35,
        "t_7_paied_cnt": 35,
        "action_cost": 0.814520285846012,
        "t_0_direct_paied_amt": 0,
        "follow": 50,
        "event_pay_purchase_amount_one_day": 0,
        "deep_conversion_num": 0,
        "event_new_user_pay": 35,
        "t_0_conversion_cnt": 2575,
        "t_0_indirect_paied_cnt": 0,
        "report": 3,
        "event_pay_purchase_amount_first_day": 0,
        "comment": 69,
        "conversion_cost": 1.3938418145956608,
        "merchant_reco_fans": 51
      }
    ]
  },
  "message": "OK",
  "request_id": "EMeAgICAoriOChjACiDGrpfYmDEolb-koQk="
}
```
