---
title: 程序化创意数据(包含程序化2.0 + 智能创意)
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2610&menuId=3334
doc_id: kuaishou_2610
source_id: kuaishou_2610
---
# 程序化创意数据(包含程序化2.0 + 智能创意)

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2610 |
| documentType | 2 |
| version | 0.1.0 |
| bizName | 效果广告 |
| createTime | 2026-03-12T11:30:27.516Z |

## 概述

【注】不包括省心投物料；无描述返回参数与实时报表保持一致

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/report/program_creative_report |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| unit_type | Integer |  | 10 | 单元组的创意类型，7=程序化2.0创意，10=智能创意；当值为空时，代表不区分创意类型取全部创意； 默认为空 |  |
| advertiser_id | Long | 是 | 20000800 | 广告主 ID（注：非账户快手 ID），在获取 accessToken 时返回 |  |
| start_date | String |  | 2021-12-01 | 过滤筛选条件，查询的开始日期，格式 yyyy-MM-dd ，只能查最近一周的数据；时间跨度不能超一周。 |  |
| end_date | String |  | 2021-12-01 | 过滤筛选条件，查询的结束日期，格式 yyyy-MM-dd ，只能查最近一周的数据；时间跨度不能超一周。 |  |
| page | Integer |  | 1 | 请求的页码，默认为 1 |  |
| page_size | Integer |  | 20 | 每页行数，默认为 20，最大支持 2000 |  |
| start_date_min | String | 是 | 2021-12-01 14:23 | 增量拉取过滤筛选条件，格式【yyyy-MM-dd HH:mm】目前MAPI最长支持读取近7日的数据，例如今天为0525，则最长可以读取到0518的数据 | （必选） |
| end_date_min | String | 是 | 2021-12-03 15:23 | 增量拉取过滤筛选条件，格式【yyyy-MM-dd HH:mm】可选时间范围参见文档上方说明 | （必选） |
| report_dims | String[] |  | ["adScene"] | "adScene"：按广告场景；"placementType"：按广告范围，快手/联盟;不传/传空/传空数组：不限 | （可选） |
| temporal_granularity | String |  | DAILY | 天粒度（DAILY）／小时粒度（HOURLY），默认支持天粒度数据 | （可选） |
| campaign_ids | Long[] |  | [1] | 广告计划 ID 集，过滤筛选条件，单次查询数量不超过 5000 | （可选） |
| unit_ids | Long[] |  | [1] | 广告组 ID 集，过滤筛选条件，单次查询数量不超过 5000 | （可选） |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 响应码 |  |
| message | String |  | OK | 消息 |  |
| data | AdvancedProgramCreativeReport |  | 1 | 返回数据 |  |
| - total_count | Long |  | 40 | 数据的总行数 |  |
| - details | Details796[] |  | [{}] | 数据明细信息 | 其他信息与实时报表保持一致，如下有描述部分为新增参数 |
| - event_pay_week_overall_roi | Double |  | 10.0 | 激活后七日整体ROI（内购&amp;广告） |  |
| - event_pay_three_day_overall_roi | Double |  | 10.0 | 激活后三日整体ROI（内购&amp;广告） |  |
| - event_pay_first_day_overall_roi | Double |  | 10.0 | 激活当日整体首日ROI（内购&amp;广告） |  |
| - private_message_sent_cost | Double |  | 10.0 | 私信消息转化成本 |  |
| - private_message_sent_ratio | Double |  | 10.0 | 私信消息转化率 |  |
| - private_message_sent_cnt | Long |  | 10 | 私信消息数 |  |
| - leads_submit_cost | Double |  | 10.0 | 直接私信留资成本 |  |
| - leads_submit_cnt_ratio | Double |  | 10.0 | 直接私信留资率 |  |
| - leads_submit_cnt | Long |  | 10 | 直接私信留资数 |  |
| - played_num | Long |  | 10 | 播放数 |  |
| - minigame_iaa_purchase_amount_week_by_conversion_roi | Double |  | 10.0 | 激活后七日广告变现ROI |  |
| - minigame_iaa_purchase_amount_three_day_by_conversion_roi | Double |  | 10.0 | 激活后三日广告变现ROI |  |
| - minigame_iaa_purchase_amount_first_day_roi | Double |  | 10.0 | 当日广告变现ROI |  |
| - minigame_iaa_purchase_amount_week_by_conversion | Double |  | 10.0 | 激活后七日广告LTV |  |
| - minigame_iaa_purchase_amount_three_day_by_conversion | Double |  | 10.0 | 激活后三日广告LTV |  |
| - minigame_iaa_purchase_amount_first_day | Double |  | 10.0 | 当日广告LTV |  |
| - minigame_iaa_purchase_roi | Double |  | 10.0 | IAA广告变现ROI |  |
| - minigame_iaa_purchase_amount | Double |  | 10.0 | IAA广告变现LTV |  |
| - mmu_effective_customer_acquisition_7d_cnt | Long |  | 10 | MMU识别产生的有效获客数（计费） |  |
| - mmu_effective_customer_acquisition_cnt | Long |  | 10 | MMU识别产生的有效获客数（回传） |  |
| - effective_customer_acquisition_7d_ratio | Double |  | 10.0 | 有效获客率（计费） |  |
| - effective_customer_acquisition_7d_cost | Double |  | 10.0 | 有效获客成本（计费） |  |
| - effective_customer_acquisition_7d_cnt | Long |  | 10 | 有效获客数（计费） |  |
| - charge | Double |  | 30.0 | 花费 |  |
| - show | Long |  | 4381 | 封面曝光数 |  |
| - aclick | Long |  | 4486 | 素材曝光数 |  |
| - bclick | Long |  | 7298 | 行为数 |  |
| - share | Long |  | 2850 | 分享数 |  |
| - comment | Long |  | 1337 | 评论数 |  |
| - like | Long |  | 2268 | 点赞数 |  |
| - follow | Long |  | 8454 | 关注数 |  |
| - report | Long |  | 3064 | 举报数 |  |
| - block | Long |  | 3407 | 拉黑数 |  |
| - negative | Long |  | 9524 | 减少此类作品数 |  |
| - activation | Long |  | 2262 | 激活数 |  |
| - submit | Long |  | 9558 | 表单提交数 |  |
| - ad_photo_played_10s | Long |  | 2223 | 10s播放数 |  |
| - ad_photo_played_2s | Long |  | 7756 | 2s播放数 |  |
| - ad_photo_played_75percent | Long |  | 5732 | 75%进度播放数 |  |
| - approx_pay_cost | Double |  | 0.004332755632582322 | 近似购买成本(花费 / 当日近似购买数) |  |
| - approx_pay_count | Long |  | 6924 | 近似购买数 |  |
| - approx_pay_ratio | Double |  | 0.9487530830364483 | 近似购买率(近似购买数 / 行为数) |  |
| - cancel_like | Long |  | 1326 | 取消点赞 |  |
| - click_conversion_ratio | Double |  | 0.5042353990191708 | 点击激活率 (激活数/点击数) |  |
| - conversion_cost | Double |  | 0.01326259946949602 | 单次激活成本 |  |
| - download_completed_cost | Double |  | 0.018668326073428748 | (安卓)单次下载完成成本(消耗/安卓下载完成数) |  |
| - download_completed_ratio | Double |  | 0.16438216039279868 | 安卓下载完成率 (安卓下载完成数/安卓下载开始数) |  |
| - download_conversion_ratio | Double |  | 1.4075917859365277 | 下载完成激活率 (激活数/下载完成数) |  |
| - download_installed | Long |  | 7771 | 安装完成 |  |
| - download_started_cost | Double |  | 0.0030687397708674302 | 安卓下载开始成本 (花费/安卓下载开始数) |  |
| - download_started_ratio | Double |  | 1.3395450808440668 | 安卓下载开始率 (安卓下载开始数/行为数) |  |
| - event_ad_watch_10_times | Long |  | 3523 | 10次广告观看数 |  |
| - event_ad_watch_10_times_cost | Double |  | 0.008515469770082317 | 10次广告观看成本 |  |
| - event_ad_watch_10_times_ratio | Double |  | 0.48273499588928476 | 10次广告观看转化率 |  |
| - event_ad_watch_20_times | Long |  | 4638 | 20次广告观看数 |  |
| - event_ad_watch_20_times_cost | Double |  | 0.00646830530401035 | 20次广告观看成本 |  |
| - event_ad_watch_20_times_ratio | Double |  | 0.6355165798849 | 20次广告观看转化率 |  |
| - event_ad_watch_5_times | Long |  | 6799 | 5次广告观看数 |  |
| - event_ad_watch_5_times_cost | Double |  | 0.004412413590233858 | 5次广告观看成本 |  |
| - event_ad_watch_5_times_ratio | Double |  | 0.9316251027678816 | 5次广告观看转化率 |  |
| - event_audition | Long |  | 8614 | 首次试听到课数 |  |
| - event_consultation_valid_retained | Long |  | 7943 | 留咨咨询数 |  |
| - event_consultation_valid_retained_cost | Double |  | 0.003776910487221453 | 留咨咨询成本 |  |
| - event_consultation_valid_retained_ratio | Double |  | 1.0883803781858044 | 留咨咨询率 |  |
| - event_conversion_click_cost | Double |  | 0.003475842891901286 | 有效咨询成本 |  |
| - event_conversion_click_ratio | Double |  | 1.1826527815839956 | 有效咨询率 |  |
| - event_credit_grant_first_day_app | Long |  | 5751 | app首日授信数 |  |
| - event_credit_grant_first_day_app_cost | Double |  | 0.005216484089723527 | 首日授信成本 |  |
| - event_credit_grant_first_day_app_ratio | Double |  | 0.7614193035879783 | 首日授信率 |  |
| - event_credit_grant_first_day_landing_page | Long |  | 5751 | 落地页首日授信数 |  |
| - event_credit_grant_first_day_landing_page_cost | Double |  | 0.005216484089723527 | 落地页首日授信成本 |  |
| - event_credit_grant_first_day_landing_page_ratio | Double |  | 0.7614193035879783 | 落地页首日授信率 |  |
| - event_making_calls | Long |  | 7045 | 字段描述，需要修改 |  |
| - event_making_calls_cost | Double |  | 0.0042583392476933995 | 字段描述，需要修改 |  |
| - event_making_calls_ratio | Double |  | 0.965332967936421 | 字段描述，需要修改 |  |
| - event_order_submit | Long |  | 5822 | 字段描述，需要修改 |  |
| - event_pay_purchase_amount_one_day | Double |  | 4377.0 | 字段描述，需要修改 |  |
| - event_pay_purchase_amount_one_day_by_conversion | Double |  | 1509.0 | 字段描述，需要修改 |  |
| - event_pay_purchase_amount_one_day_by_conversion_roi | Double |  | 50.3 | 字段描述，需要修改 |  |
| - event_pay_purchase_amount_one_day_roi | Double |  | 145.9 | 字段描述，需要修改 |  |
| - event_pay_weighted_purchase_amount | Double |  | 4233.0 | 字段描述，需要修改 |  |
| - event_pay_weighted_purchase_amount_first_day | Double |  | 9421.0 | 字段描述，需要修改 |  |
| - event_pre_component_consultation_valid_retained | Long |  | 7222 | 字段描述，需要修改 |  |
| - event_wechat_qr_code_link_click | Long |  | 3794 | 字段描述，需要修改 |  |
| - live_event_goods_view | Long |  | 1520 | 字段描述，需要修改 |  |
| - live_played_3s | Long |  | 4372 | 字段描述，需要修改 |  |
| - played_end | Long |  | 1098 | 字段描述，需要修改 |  |
| - played_five_seconds | Long |  | 2402 | 字段描述，需要修改 |  |
| - played_three_seconds | Long |  | 7849 | 字段描述，需要修改 |  |
| - adScene | String |  | 全部 | 字段描述，需要修改 |  |
| - ad_scene | String |  | 全部 | 字段描述，需要修改 |  |
| - placement_type | String |  | 全部 | 字段描述，需要修改 |  |
| - cancel_follow | Long |  | 7980 | 字段描述，需要修改 |  |
| - download_started | Long |  | 9776 | 字段描述，需要修改 |  |
| - download_completed | Long |  | 1607 | 字段描述，需要修改 |  |
| - stat_date | String |  | 2021-12-02 | 字段描述，需要修改 |  |
| - stat_hour | Long |  | 0 | 字段描述，需要修改 |  |
| - photo_click | Long |  | 2367 | 字段描述，需要修改 |  |
| - photo_click_ratio | Double |  | 0.5402876055695047 | 字段描述，需要修改 |  |
| - action_ratio | Double |  | 1.6268390548372715 | 字段描述，需要修改 |  |
| - impression_1k_cost | Double |  | 6.847751654873316 | 字段描述，需要修改 |  |
| - photo_click_cost | Double |  | 0.01267427122940431 | 字段描述，需要修改 |  |
| - click_1k_cost | Double |  | 6.687472135532769 | 字段描述，需要修改 |  |
| - action_cost | Double |  | 0.004110715264456015 | 字段描述，需要修改 |  |
| - event_pay_first_day | Long |  | 1378 | 字段描述，需要修改 |  |
| - event_pay_purchase_amount_first_day | Double |  | 2864.0 | 字段描述，需要修改 |  |
| - event_pay_first_day_roi | Double |  | 95.46666666666667 | 字段描述，需要修改 |  |
| - event_pay | Long |  | 7566 | 字段描述，需要修改 |  |
| - event_pay_purchase_amount | Double |  | 8479.0 | 字段描述，需要修改 |  |
| - event_pay_roi | Double |  | 282.6333333333333 | 字段描述，需要修改 |  |
| - event_register | Long |  | 9296 | 字段描述，需要修改 |  |
| - event_register_cost | Double |  | 0.003227194492254733 | 字段描述，需要修改 |  |
| - event_register_ratio | Double |  | 4.1096374889478335 | 字段描述，需要修改 |  |
| - event_jin_jian_app | Long |  | 7553 | 字段描述，需要修改 |  |
| - event_jin_jian_app_cost | Double |  | 0.003971931682775056 | 字段描述，需要修改 |  |
| - event_credit_grant_app | Long |  | 2160 | 字段描述，需要修改 |  |
| - event_credit_grant_app_cost | Double |  | 0.013888888888888888 | 字段描述，需要修改 |  |
| - event_credit_grant_app_ratio | Double |  | 0.285979081159804 | 字段描述，需要修改 |  |
| - event_order_paid | Long |  | 6576 | 字段描述，需要修改 |  |
| - event_order_paid_purchase_amount | Double |  | 1195.0 | 字段描述，需要修改 |  |
| - event_order_paid_cost | Double |  | 0.004562043795620438 | 字段描述，需要修改 |  |
| - form_count | Long |  | 9558 | 字段描述，需要修改 |  |
| - form_cost | Double |  | 0.003138731952291274 | 字段描述，需要修改 |  |
| - form_action_ratio | Double |  | 1.3096738832556865 | 字段描述，需要修改 |  |
| - event_jin_jian_landing_page | Long |  | 7553 | 字段描述，需要修改 |  |
| - event_jin_jian_landing_page_cost | Double |  | 0.003971931682775056 | 字段描述，需要修改 |  |
| - event_credit_grant_landing_page | Long |  | 2160 | 字段描述，需要修改 |  |
| - event_credit_grant_landing_page_cost | Double |  | 0.013888888888888888 | 字段描述，需要修改 |  |
| - event_credit_grant_landing_ratio | Double |  | 0.285979081159804 | 字段描述，需要修改 |  |
| - event_next_day_stay_cost | Double |  | 0.003723932472691162 | 字段描述，需要修改 |  |
| - event_next_day_stay_ratio | Double |  | 3.561450044208665 | 字段描述，需要修改 |  |
| - event_next_day_stay | Long |  | 8056 | 字段描述，需要修改 |  |
| - play_3s_ratio | Double |  | 1.7496656263932233 | 字段描述，需要修改 |  |
| - event_valid_clues | Long |  | 6635 | 字段描述，需要修改 |  |
| - event_valid_clues_cost | Double |  | 0.00452147701582517 | 字段描述，需要修改 |  |
| - ad_product_cnt | Long |  | 1817 | 字段描述，需要修改 |  |
| - event_goods_view | Long |  | 4497 | 字段描述，需要修改 |  |
| - merchant_reco_fans | Long |  | 7702 | 字段描述，需要修改 |  |
| - event_order_amount_roi | Double |  | 39.833333333333336 | 字段描述，需要修改 |  |
| - event_goods_view_cost | Double |  | 0.0066711140760507 | 字段描述，需要修改 |  |
| - merchant_reco_fans_cost | Double |  | 0.003895092183848351 | 字段描述，需要修改 |  |
| - event_new_user_pay | Long |  | 6816 | 字段描述，需要修改 |  |
| - event_new_user_pay_cost | Double |  | 0.004401408450704225 | 字段描述，需要修改 |  |
| - event_new_user_pay_ratio | Double |  | 0.5766497461928934 | 字段描述，需要修改 |  |
| - event_button_click | Long |  | 5911 | 字段描述，需要修改 |  |
| - event_button_click_cost | Double |  | 0.005075283369988158 | 字段描述，需要修改 |  |
| - event_button_click_ratio | Double |  | 0.8099479309399835 | 字段描述，需要修改 |  |
| - play_5s_ratio | Double |  | 0.5354436023183237 | 字段描述，需要修改 |  |
| - play_end_ratio | Double |  | 0.24476148016049934 | 字段描述，需要修改 |  |
| - event_order_paid_roi | Double |  | 1.4623082054703136 | 字段描述，需要修改 |  |
| - event_new_user_jinjian_app | Long |  | 1672 | 字段描述，需要修改 |  |
| - event_new_user_jinjian_app_cost | Double |  | 0.017942583732057416 | 字段描述，需要修改 |  |
| - event_new_user_jinjian_app_roi | Double |  | 0.14145516074450085 | 字段描述，需要修改 |  |
| - event_new_user_credit_grant_app | Long |  | 2465 | 字段描述，需要修改 |  |
| - event_new_user_credit_grant_app_cost | Double |  | 0.012170385395537525 | 字段描述，需要修改 |  |
| - event_new_user_credit_grant_app_roi | Double |  | 0.20854483925549916 | 字段描述，需要修改 |  |
| - event_new_user_jinjian_page | Long |  | 1672 | 字段描述，需要修改 |  |
| - event_new_user_jinjian_page_cost | Double |  | 0.017942583732057416 | 字段描述，需要修改 |  |
| - event_new_user_jinjian_page_roi | Double |  | 0.14145516074450085 | 字段描述，需要修改 |  |
| - event_new_user_credit_grant_page | Long |  | 2465 | 字段描述，需要修改 |  |
| - event_new_user_credit_grant_page_cost | Double |  | 0.012170385395537525 | 字段描述，需要修改 |  |
| - event_new_user_credit_grant_page_roi | Double |  | 0.20854483925549916 | 字段描述，需要修改 |  |
| - event_appoint_form | Long |  | 7508 | 字段描述，需要修改 |  |
| - event_appoint_form_cost | Double |  | 0.003995737879595098 | 字段描述，需要修改 |  |
| - event_appoint_form_ratio | Double |  | 1.028775006851192 | 字段描述，需要修改 |  |
| - event_appoint_jump_click | Long |  | 9996 | 字段描述，需要修改 |  |
| - event_appoint_jump_click_cost | Double |  | 0.0030012004801920765 | 字段描述，需要修改 |  |
| - event_appoint_jump_click_ratio | Double |  | 1.3696903261167443 | 字段描述，需要修改 |  |
| - union_event_pay_purchase_amount_7d | Double |  | 0.0 | 字段描述，需要修改 |  |
| - union_event_pay_purchase_amount_7d_roi | Double |  | 0.0 | 字段描述，需要修改 |  |
| - event_dsp_gift_form | Long |  | 7025 | 字段描述，需要修改 |  |
| - event_app_invoked | Long |  | 6734 | 字段描述，需要修改 |  |
| - event_app_invoked_cost | Double |  | 0.004455004455004455 | 字段描述，需要修改 |  |
| - event_app_invoked_ratio | Double |  | 0.9227185530282269 | 字段描述，需要修改 |  |
| - event_add_wechat | Long |  | 2506 | 字段描述，需要修改 |  |
| - event_add_wechat_cost | Double |  | 0.011971268954509178 | 字段描述，需要修改 |  |
| - event_add_wechat_ratio | Double |  | 0.3433817484242258 | 字段描述，需要修改 |  |
| - event_multi_conversion | Long |  | 7297 | 字段描述，需要修改 |  |
| - event_multi_conversion_ratio | Double |  | 0.0 | 字段描述，需要修改 |  |
| - event_multi_conversion_cost | Double |  | 0.004111278607646978 | 字段描述，需要修改 |  |
| - event_watch_app_ad | Long |  | 8501 | 字段描述，需要修改 |  |
| - event_ad_watch_times | Long |  | 8708 | 字段描述，需要修改 |  |
| - event_ad_watch_times_ratio | Double |  | 1.1932036174294327 | 字段描述，需要修改 |  |
| - event_ad_watch_times_cost | Double |  | 0.003445107946715664 | 字段描述，需要修改 |  |
| - event_add_shopping_cart | Long |  | 2117 | 字段描述，需要修改 |  |
| - event_add_shopping_cart_cost | Double |  | 0.014170996693434105 | 字段描述，需要修改 |  |
| - event_get_through | Long |  | 9956 | 字段描述，需要修改 |  |
| - event_get_through_cost | Double |  | 0.003013258336681398 | 字段描述，需要修改 |  |
| - event_get_through_ratio | Double |  | 1.3642093724308029 | 字段描述，需要修改 |  |
| - ad_photo_played_75percent_ratio | Double |  | 1.277753009362461 | 字段描述，需要修改 |  |
| - ad_photo_played_10s_ratio | Double |  | 0.49554168524297815 | 字段描述，需要修改 |  |
| - ad_photo_played_2s_ratio | Double |  | 1.7289344627730718 | 字段描述，需要修改 |  |
| - event_phone_get_through | Long |  | 8346 | 字段描述，需要修改 |  |
| - event_intention_confirmed | Long |  | 5005 | 字段描述，需要修改 |  |
| - event_wechat_connected | Long |  | 2370 | 字段描述，需要修改 |  |
| - event_order_successed | Long |  | 1483 | 字段描述，需要修改 |  |
| - event_phone_card_activate | Long |  | 1609 | 字段描述，需要修改 |  |
| - event_measurement_house | Long |  | 3122 | 字段描述，需要修改 |  |
| - ad_show | Double |  | 0.24 | 字段描述，需要修改 |  |
| - action_new_ratio | Double |  | 0.9463174273858921 | 字段描述，需要修改 |  |
| - event_outbound_call | Long |  | 8104 | 字段描述，需要修改 |  |
| - event_outbound_call_cost | Double |  | 0.0037018756169792696 | 字段描述，需要修改 |  |
| - event_outbound_call_ratio | Double |  | 1.1104412167717184 | 字段描述，需要修改 |  |
| - key_action | Long |  | 8311 | 字段描述，需要修改 |  |
| - key_action_cost | Double |  | 0.003609673926122007 | 字段描述，需要修改 |  |
| - key_action_ratio | Double |  | 3.674182139699381 | 字段描述，需要修改 |  |
| - event_credit_card_recheck | Long |  | 7657 | 字段描述，需要修改 |  |
| - event_credit_card_recheck_first_day | Long |  | 9051 | 字段描述，需要修改 |  |
| - event_no_intention | Long |  | 6731 | 字段描述，需要修改 |  |
| - creative_id | Long |  | 81804206 | 创意 id |  |
| - creative_name | String |  | 自定义创意_直投直播_创意1 | 字段描述，需要修改 |  |
| - status | Long |  | 1 | 字段描述，需要修改 |  |
| - campaign_id | Long |  | 25128075 | 计划 id |  |
| - campaign_name | String |  | 【1123铃铛推送】粉丝/直播推广_20211123_16:50 | 计划名称 |  |
| - unit_id | Long |  | 3811268 | 组 id |  |
| - unit_name | String |  | C4【极速IOS-H5有】行为数_20211123_17:39_4 | 组名称 |  |
| - photo_id | String |  | 23213123213 | 视频 id |  |
| - photo_url | String |  | wwwww | 视频链接 |  |
| - cover_url | String |  | wwww | 封面链接 |  |
| - image_token | String |  | sssss | 封面 id |  |
| - description | String |  | ssss | 作品广告语 |  |
| - pic_url | String |  | ssss | 字段描述，需要修改 |  |
| - pic_image_token | String |  | ssss | 字段描述，需要修改 |  |
| - pic_id | Long |  | 11111 | 图片库图片ID |  |
| - photo_md5 | String |  | 111 | 视频 md5 |  |
| - event_form_submit | Long |  | 10 | 表单提交数（回传时间） |  |
| - direct_submit_1d_cnt | Long |  | 10 | 表单提交数(计费时间) |  |
| - event_form_submit_ratio | Double |  | 0.11 | 表单提交率（回传时间） |  |
| - event_form_submit_cost | Double |  | 0.11 | 表单提交成本（回传时间） |  |
| - direct_submit_1d_cost | Double |  | 0.11 | 表单提交成本 |  |
| - event_audition_30d_cnt | Long |  | 10 | 首次试听到课（归因） |  |
| - event_audition_cost | Double |  | 0.11 | 首次试听到课成本 |  |
| - all_lesson_finish_cnt | Long |  | 10 | 全部试听完课（回传） |  |
| - all_lesson_finish_30d_cnt | Long |  | 10 | 全部试听完课（归因） |  |
| - high_price_class_pay_cnt | Long |  | 10 | 成交付费（回传） |  |
| - high_price_class_pay_30d_cnt | Long |  | 10 | 成交付费（归因） |  |
