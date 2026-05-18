---
title: 广告主数据（实时）
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2606&menuId=3330
doc_id: kuaishou_2606
source_id: kuaishou_2606
---
# 广告主数据（实时）

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2606 |
| documentType | 2 |
| version | 0.0.9 |
| bizName | 效果广告 |
| createTime | 2026-05-14T02:39:29.484Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/report/account_report |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 20000800 | 广告主id |  |
| start_date | String |  | 2021-12-01 | 过滤筛选条件，查询的开始日期，格式 yyyy-MM-dd ，只能查最近一周的数据；时间跨度不能超一周。 | （必选其 2） |
| end_date | String |  | 2021-12-01 | 过滤筛选条件，查询的结束日期，格式 yyyy-MM-dd ，只能查最近一周的数据；时间跨度不能超一周。 | （必选其 2） |
| page | Integer |  | 1 | 请求的页码，默认为 1 |  |
| page_size | Integer |  | 20 | 每页行数，默认为 20，最大支持 2000 |  |
| start_date_min | String |  | 2021-12-01 14:23 | 增量拉取过滤筛选条件，格式【yyyy-MM-dd HH:mm】 | （必选其 1） |
| end_date_min | String |  | 2021-12-03 15:23 | 增量拉取过滤筛选条件，格式【yyyy-MM-dd HH:mm】 | （必选其 1） |
| report_dims | String[] |  | ["adScene"] | "adScene"：按广告场景;"placementType"：按广告范围，快手/联盟;不传/传空/传空数组：不限 | （可选） |
| temporal_granularity | String |  | DAILY | 天粒度（DAILY）／小时粒度（HOURLY），默认支持天粒度数据 | （可选） |

## 请求样例

### 请求样例 (shell)

```
curl -H "Access-Token:d198a850da67a16279e30" \
-H "Content-Type:application/json" \
-d '

{
   	"start_date": "2018-12-20",
   	"end_date": "2018-12-23",
   	"advertiser_id": 486,
   	"temporal_granularity": "DAILY",
   	"page_size": 2,
   	"page": 1
}
' https://ad.e.kuaishou.com/rest/openapi/v1/report/account_report
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 响应码 |  |
| message | String |  | OK | 消息 |  |
| data | AccountReport |  | 1 | 数据内容 |  |
| - total_count | Long |  | 2 | 数据的总行数 |  |
| - details | Details379[] |  | [{}] | 数据明细信息 |  |
| - event_pay_purchase_amount_week_by_conversion_roi | Double |  | 10.0 | 激活后7日ROI |  |
| - event_pay_purchase_amount_three_day_by_conversion_roi | Double |  | 10.0 | 激活后3日ROI |  |
| - event_pay_purchase_amount_week_by_conversion | Double |  | 10.0 | 激活后七日付费金额 |  |
| - event_pay_purchase_amount_three_day_by_conversion | Double |  | 10.0 | 激活后三日付费金额 |  |
| - event_pay_week_overall_roi | Double |  | 10.0 | 激活后七日整体ROI（内购&amp;广告） |  |
| - event_pay_three_day_overall_roi | Double |  | 10.0 | 激活后三日整体ROI（内购&amp;广告） |  |
| - event_pay_first_day_overall_roi | Double |  | 10.0 | 激活当日整体首日ROI（内购&amp;广告） |  |
| - conversion_num_by_impression_7d | Long |  | 10 | 转化数(计费时间) |  |
| - conversion_num | Long |  | 10 | 转化数(回传时间) |  |
| - conversion_num_cost | Double |  | 10.0 | 转化成本(回传时间) |  |
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
| - event_pay_30_day_overall_roi | Double |  | 10.0 | 激活后30日整体ROI |  |
| - event_pay_15_day_overall_roi | Double |  | 10.0 | 激活后15日整体ROI |  |
| - minigame_iaa_purchase_amount_30_day_by_conversion_roi | Double |  | 10.0 | 激活后30日广告变现ROI |  |
| - minigame_iaa_purchase_amount_15_day_by_conversion_roi | Double |  | 10.0 | 激活后15日广告变现ROI |  |
| - minigame_iaa_purchase_amount_30_day_by_conversion | Double |  | 10.0 | 激活后30日广告LTV |  |
| - minigame_iaa_purchase_amount_15_day_by_conversion | Double |  | 10.0 | 激活后15日广告LTV |  |
| - event_pay_purchase_amount_15_day_by_conversion | Double |  | 10.0 | 激活后15日付费金额 |  |
| - charge | Double |  | 600.0 | 花费（元） |  |
| - show | Long |  | 87620 | 封面曝光数 |  |
| - aclick | Long |  | 89720 | 素材曝光数 |  |
| - bclick | Long |  | 145960 | 行为数 |  |
| - share | Long |  | 57000 | 分享数 |  |
| - comment | Long |  | 26740 | 评论数 |  |
| - like | Long |  | 45360 | 点赞数 |  |
| - follow | Long |  | 169080 | 新增粉丝数 |  |
| - report | Long |  | 61280 | 举报数 |  |
| - block | Long |  | 68140 | 拉黑数 |  |
| - negative | Long |  | 190480 | 减少此类作品数 |  |
| - activation | Long |  | 45240 | 应用下载数据-激活数 |  |
| - submit | Long |  | 191160 | 提交按钮点击数（历史字段，同下方“线索提交个数”，预计年底删除该字段） |  |
| - ad_photo_played_10s | Long |  | 44460 | 10s播放数 |  |
| - ad_photo_played_2s | Long |  | 155120 | 2s播放数 |  |
| - ad_photo_played_75percent | Long |  | 114640 | 75%进度播放数 |  |
| - approx_pay_cost | Double |  | 0.004332755632582322 | 淘系近似购买成本 |  |
| - approx_pay_count | Long |  | 138480 | 近似购买数 |  |
| - approx_pay_ratio | Double |  | 0.9487530830364483 | 淘系近似购买率 |  |
| - cancel_like | Long |  | 26520 | 取消点赞数 |  |
| - click_conversion_ratio | Double |  | 0.5042353990191708 | 点击激活成本 |  |
| - conversion_cost | Double |  | 0.01326259946949602 | 激活单价 |  |
| - download_completed_cost | Double |  | 0.018668326073428748 | 安卓下载完成单价（元） |  |
| - download_completed_ratio | Double |  | 0.16438216039279868 | 安卓下载完成率 |  |
| - download_conversion_ratio | Double |  | 1.4075917859365277 | 下载完成激活率 |  |
| - download_installed | Long |  | 155420 | 安卓安装完成数 |  |
| - download_started_cost | Double |  | 0.0030687397708674302 | 安卓下载开始单价（元） |  |
| - download_started_ratio | Double |  | 1.3395450808440668 | 安卓下载开始率 |  |
| - event_ad_watch_10_times | Long |  | 70460 | 10次广告广告观看数 |  |
| - event_ad_watch_10_times_cost | Double |  | 0.008515469770082317 | 10次广告观看成本 |  |
| - event_ad_watch_10_times_ratio | Double |  | 0.48273499588928476 | 10次广告观看转化率 |  |
| - event_ad_watch_20_times | Long |  | 92760 | 20次广告广告观看数 |  |
| - event_ad_watch_20_times_cost | Double |  | 0.00646830530401035 | 20次广告观看成本 |  |
| - event_ad_watch_20_times_ratio | Double |  | 0.6355165798849 | 20次广告观看转化率 |  |
| - event_ad_watch_5_times | Long |  | 135980 | 5次广告广告观看数 |  |
| - event_ad_watch_5_times_cost | Double |  | 0.004412413590233858 | 5次广告观看成本 |  |
| - event_ad_watch_5_times_ratio | Double |  | 0.9316251027678816 | 5次广告观看转化率 |  |
| - event_audition | Long |  | 172280 | 首次试听到课数 |  |
| - event_consultation_valid_retained | Long |  | 158860 | 留咨咨询数 |  |
| - event_consultation_valid_retained_cost | Double |  | 0.003776910487221453 | 留咨咨询成本 |  |
| - event_consultation_valid_retained_ratio | Double |  | 1.0883803781858044 | 留咨咨询率 |  |
| - event_conversion_click_cost | Double |  | 0.003475842891901286 | 有效咨询成本 |  |
| - event_conversion_click_ratio | Double |  | 1.1826527815839956 | 有效咨询率 |  |
| - event_credit_grant_first_day_app | Long |  | 115020 | app首日授信数 |  |
| - event_credit_grant_first_day_app_cost | Double |  | 0.005216484089723527 | 首日授信成本 |  |
| - event_credit_grant_first_day_app_ratio | Double |  | 0.7614193035879783 | 首日授信率 |  |
| - event_credit_grant_first_day_landing_page | Long |  | 115020 | 落地页首日授信数 |  |
| - event_credit_grant_first_day_landing_page_cost | Double |  | 0.005216484089723527 | 落地页首日授信成本 |  |
| - event_credit_grant_first_day_landing_page_ratio | Double |  | 0.7614193035879783 | 落地页首日授信率 |  |
| - event_making_calls | Long |  | 140900 | 电话拨打数-用户点击电话按钮的次数 |  |
| - event_making_calls_cost | Double |  | 0.0042583392476933995 | 电话拨打成本 |  |
| - event_making_calls_ratio | Double |  | 0.965332967936421 | 电话拨打率 |  |
| - event_order_submit | Long |  | 116440 | 提交订单数 |  |
| - event_pay_purchase_amount_one_day | Double |  | 118179.0 | 激活后24h付费金额(回传时间) |  |
| - event_pay_purchase_amount_one_day_by_conversion | Double |  | 40743.0 | 激活后24h付费金额(激活时间) |  |
| - event_pay_purchase_amount_one_day_by_conversion_roi | Double |  | 67.905 | 激活后24小时付费ROI |  |
| - event_pay_purchase_amount_one_day_roi | Double |  | 196.965 | 激活后24h-ROI(回传时间) |  |
| - event_pay_weighted_purchase_amount | Double |  | 84660.0 | 加权付费金额-当日回传的付费行为所带来的加权付费金额，单位:元，当前用于保险行业 |  |
| - event_pay_weighted_purchase_amount_first_day | Double |  | 188420.0 | 首日加权付费金额-当日激活的用户在当天产生的付费行为所带来的加权付费金额 单位:元，当前用于保险行业 |  |
| - event_pre_component_consultation_valid_retained | Long |  | 144440 | 附加咨询组件留资咨询数 |  |
| - event_wechat_qr_code_link_click | Long |  | 75880 | 微信小程序深度加粉数 |  |
| - live_event_goods_view | Long |  | 30400 | 直播间商品点击数 |  |
| - live_played_3s | Long |  | 87440 | 直播观看数 |  |
| - played_end | Long |  | 21960 | 播放完成 |  |
| - played_five_seconds | Long |  | 48040 | 播放5s |  |
| - played_three_seconds | Long |  | 156980 | 有效播放数 |  |
| - adScene | String |  | 全部 | 字段描述，需要修改 |  |
| - ad_scene | String |  | 全部 | 字段描述，需要修改 |  |
| - placement_type | String |  | 全部 | 字段描述，需要修改 |  |
| - cancel_follow | Long |  | 159600 | 取消关注数 |  |
| - download_started | Long |  | 195520 | 应用下载数据-安卓下载开始数 |  |
| - download_completed | Long |  | 32140 | 应用下载数据-安卓下载完成数 |  |
| - stat_date | String |  | 2021-12-02 | 数据日期，格式：YYYY-MM-DD |  |
| - stat_hour | Long |  | 0 | 数据小时 |  |
| - photo_click | Long |  | 47340 | 封面点击数 |  |
| - photo_click_ratio | Double |  | 0.5402876055695047 | 封面点击率 |  |
| - action_ratio | Double |  | 1.6268390548372715 | 行为率 |  |
| - impression_1k_cost | Double |  | 6.847751654873316 | 平均千次曝光花费（元） |  |
| - photo_click_cost | Double |  | 0.01267427122940431 | 平均点击单价（元） |  |
| - click_1k_cost | Double |  | 6.687472135532769 | 平均千次素材曝光花费(元) |  |
| - action_cost | Double |  | 0.004110715264456015 | 平均行为单价（元） |  |
| - event_pay_first_day | Long |  | 27560 | 应用下载数据-首日付费次数 |  |
| - event_pay_purchase_amount_first_day | Double |  | 57280.0 | 应用下载数据-首日付费金额 |  |
| - event_pay_first_day_roi | Double |  | 95.46666666666667 | 应用下载数据-首日 ROI |  |
| - event_pay | Long |  | 151320 | 应用下载数据-付费次数 |  |
| - event_pay_purchase_amount | Double |  | 169580.0 | 应用下载数据-付费金额 |  |
| - event_pay_roi | Double |  | 282.6333333333333 | 应用下载数据-ROI |  |
| - event_register | Long |  | 185920 | 应用下载数据-注册数 |  |
| - event_register_cost | Double |  | 0.003227194492254733 | 应用下载数据-注册成本 |  |
| - event_register_ratio | Double |  | 4.1096374889478335 | 应用下载数据-注册率 |  |
| - event_jin_jian_app | Long |  | 151060 | 应用下载数据-完件数 |  |
| - event_jin_jian_app_cost | Double |  | 0.003971931682775056 | 应用下载数据-完件成本 |  |
| - event_credit_grant_app | Long |  | 43200 | 应用下载数据-授信数 |  |
| - event_credit_grant_app_cost | Double |  | 0.013888888888888888 | 应用下载数据-授信成本 |  |
| - event_credit_grant_app_ratio | Double |  | 0.285979081159804 | 应用下载数据-授信率 |  |
| - event_order_paid | Long |  | 131520 | 应用下载数据-付款成功数 |  |
| - event_order_paid_purchase_amount | Double |  | 23900.0 | 应用下载数据-付款成功金额 |  |
| - event_order_paid_cost | Double |  | 0.004562043795620438 | 应用下载数据-单次付款成本 |  |
| - form_count | Long |  | 191160 | 落地页数据-线索提交个数 |  |
| - form_cost | Double |  | 0.003138731952291274 | 落地页数据-单个线索成本 |  |
| - form_action_ratio | Double |  | 1.3096738832556865 | 落地页数据-表单提交点击率 |  |
| - event_jin_jian_landing_page | Long |  | 151060 | 落地页数据-落地页完件数 |  |
| - event_jin_jian_landing_page_cost | Double |  | 0.003971931682775056 | 落地页数据-落地页完件成本 |  |
| - event_credit_grant_landing_page | Long |  | 43200 | 落地页授信数 |  |
| - event_credit_grant_landing_page_cost | Double |  | 0.013888888888888888 | 落地页数据-落地页授信成本 |  |
| - event_credit_grant_landing_ratio | Double |  | 0.285979081159804 | 落地页数据-落地页授信率 |  |
| - event_next_day_stay_cost | Double |  | 0.003723932472691162 | 应用下载数据-次留成本（仅支持分日查询） |  |
| - event_next_day_stay_ratio | Double |  | 3.561450044208665 | 应用下载数据-次留率（仅支持分日查询） |  |
| - event_next_day_stay | Long |  | 161120 | 应用下载数据-次留数（仅支持分日查询） |  |
| - play_3s_ratio | Double |  | 1.7496656263932233 | 3s 播放率 |  |
| - event_valid_clues | Long |  | 132700 | 落地页数据-有效线索数 |  |
| - event_valid_clues_cost | Double |  | 0.00452147701582517 | 落地页数据-有效线索成本 |  |
| - ad_product_cnt | Long |  | 36340 | 商品成交数 |  |
| - event_goods_view | Long |  | 89940 | 商品访问数 |  |
| - merchant_reco_fans | Long |  | 154040 | 涨粉量 |  |
| - event_order_amount_roi | Double |  | 39.833333333333336 | 小店推广roi |  |
| - event_goods_view_cost | Double |  | 0.0066711140760507 | 商品访问成本 |  |
| - merchant_reco_fans_cost | Double |  | 0.003895092183848351 | 涨粉成本 |  |
| - event_new_user_pay | Long |  | 136320 | 新增付费人数 |  |
| - event_new_user_pay_cost | Double |  | 0.004401408450704225 | 新增付费人数成本 |  |
| - event_new_user_pay_ratio | Double |  | 0.5766497461928934 | 新增付费人数率 |  |
| - event_button_click | Long |  | 118220 | 按钮点击数 |  |
| - event_button_click_cost | Double |  | 0.005075283369988158 | 按钮点击成本 |  |
| - event_button_click_ratio | Double |  | 0.8099479309399835 | 按钮点击率 |  |
| - play_5s_ratio | Double |  | 0.5354436023183237 | 5s播放率 |  |
| - play_end_ratio | Double |  | 0.24476148016049934 | 完播率 |  |
| - event_order_paid_roi | Double |  | 1.4623082054703136 | 订单支付率 |  |
| - event_new_user_jinjian_app | Long |  | 33440 | 新增完件人数 |  |
| - event_new_user_jinjian_app_cost | Double |  | 0.017942583732057416 | 新增完件人数成本 |  |
| - event_new_user_jinjian_app_roi | Double |  | 0.14145516074450085 | 新增完件人数率 |  |
| - event_new_user_credit_grant_app | Long |  | 49300 | 新增授信人数 |  |
| - event_new_user_credit_grant_app_cost | Double |  | 0.012170385395537525 | 新增授信人数成本 |  |
| - event_new_user_credit_grant_app_roi | Double |  | 0.20854483925549916 | 新增授信人数率 |  |
| - event_new_user_jinjian_page | Long |  | 33440 | 字段描述，需要修改 |  |
| - event_new_user_jinjian_page_cost | Double |  | 0.017942583732057416 | 字段描述，需要修改 |  |
| - event_new_user_jinjian_page_roi | Double |  | 0.14145516074450085 | 字段描述，需要修改 |  |
| - event_new_user_credit_grant_page | Long |  | 49300 | 字段描述，需要修改 |  |
| - event_new_user_credit_grant_page_cost | Double |  | 0.012170385395537525 | 字段描述，需要修改 |  |
| - event_new_user_credit_grant_page_roi | Double |  | 0.20854483925549916 | 字段描述，需要修改 |  |
| - event_appoint_form | Long |  | 150160 | 预约表单数 |  |
| - event_appoint_form_cost | Double |  | 0.003995737879595098 | 预约表单点击成本 |  |
| - event_appoint_form_ratio | Double |  | 1.028775006851192 | 预约表单点击率 |  |
| - event_appoint_jump_click | Long |  | 199920 | 预约跳转点击数 |  |
| - event_appoint_jump_click_cost | Double |  | 0.0030012004801920765 | 预约跳转点击成本 |  |
| - event_appoint_jump_click_ratio | Double |  | 1.3696903261167443 | 预约跳转点击率 |  |
| - union_event_pay_purchase_amount_7d | Double |  | 0.0 | 联盟广告收入 |  |
| - union_event_pay_purchase_amount_7d_roi | Double |  | 0.0 | 联盟变现ROI |  |
| - event_dsp_gift_form | Long |  | 140500 | 附加组件表单提交 |  |
| - event_app_invoked | Long |  | 134680 | 唤醒应用数 |  |
| - event_app_invoked_cost | Double |  | 0.004455004455004455 | 唤醒应用成本 |  |
| - event_app_invoked_ratio | Double |  | 0.9227185530282269 | 唤醒应用率 |  |
| - event_add_wechat | Long |  | 50120 | 微信复制数 |  |
| - event_add_wechat_cost | Double |  | 0.011971268954509178 | 微信复制成本 |  |
| - event_add_wechat_ratio | Double |  | 0.3433817484242258 | 微信复制率 |  |
| - event_multi_conversion | Long |  | 145940 | 落地页多转化次数 |  |
| - event_multi_conversion_ratio | Double |  | 0.0 | 落地页多转化率 |  |
| - event_multi_conversion_cost | Double |  | 0.004111278607646978 | 落地页多转化成本 |  |
| - event_watch_app_ad | Long |  | 170020 | 广告观看 |  |
| - event_ad_watch_times | Long |  | 174160 | 广告观看次数 |  |
| - event_ad_watch_times_ratio | Double |  | 1.1932036174294327 | 广告观看次数转化率 |  |
| - event_ad_watch_times_cost | Double |  | 0.003445107946715664 | 广告观看次数成本 |  |
| - event_add_shopping_cart | Long |  | 42340 | 添加购物车数 |  |
| - event_add_shopping_cart_cost | Double |  | 0.014170996693434105 | 添加购物车成本 |  |
| - event_get_through | Long |  | 199120 | 智能电话-确认接通数 |  |
| - event_get_through_cost | Double |  | 0.003013258336681398 | 智能电话-确认接通成本 |  |
| - event_get_through_ratio | Double |  | 1.3642093724308029 | 智能电话-确认接通率 |  |
| - ad_photo_played_75percent_ratio | Double |  | 1.277753009362461 | 75%进度播放率 |  |
| - ad_photo_played_10s_ratio | Double |  | 0.49554168524297815 | 10s播放率 |  |
| - ad_photo_played_2s_ratio | Double |  | 1.7289344627730718 | 2s播放率 |  |
| - event_phone_get_through | Long |  | 166920 | 电话建联数 |  |
| - event_intention_confirmed | Long |  | 100100 | 意向确认数 |  |
| - event_wechat_connected | Long |  | 47400 | 微信加粉数 |  |
| - event_order_successed | Long |  | 29660 | 有效线索成交数 |  |
| - event_phone_card_activate | Long |  | 32180 | 电话卡激活数 |  |
| - event_measurement_house | Long |  | 62440 | 量房数 |  |
| - ad_show | Double |  | 0.222 | 广告曝光 |  |
| - action_new_ratio | Double |  | 0.9463174273858921 | 行为率 新 |  |
| - event_outbound_call | Long |  | 162080 | 电话拨打数 |  |
| - event_outbound_call_cost | Double |  | 0.0037018756169792696 | 电话拨打成本 |  |
| - event_outbound_call_ratio | Double |  | 1.1104412167717184 | 电话拨打率 |  |
| - key_action | Long |  | 166220 | 关键行为数 |  |
| - key_action_cost | Double |  | 0.003609673926122007 | 关键行为成本 |  |
| - key_action_ratio | Double |  | 3.674182139699381 | 关键行为率 |  |
| - event_credit_card_recheck | Long |  | 153140 | 信用卡核卡数 |  |
| - event_credit_card_recheck_first_day | Long |  | 181020 | 信用卡首日核卡数 |  |
| - event_no_intention | Long |  | 134620 | 用户无意向数 |  |
| - order_submit_amt | Double |  | 0.231 | 订单提交金额 |  |
| - jinjian_0d_cnt | Long |  | 111 | T0完件数 |  |
| - jinjian_3d_cnt | Long |  | 11 | T3完件数 |  |
| - jinjian_0d_cnt_cost | Double |  | 0.11 | T0完件成本 |  |
| - jinjian_3d_cnt_cost | Double |  | 0.11 | T3完件成本 |  |
| - credit_grant_0d_cnt | Long |  | 11 | T0授信数 |  |
| - credit_grant_3d_cnt | Long |  | 22 | T3授信数 |  |
| - credit_grant_0d_cnt_cost | Double |  | 0.11 | T0授信成本 |  |
| - credit_grant_3d_cnt_cost | Double |  | 0.11 | T3授信成本 |  |
| - credit_grant_0d_cnt_ratio | Double |  | 0.11 | T0完件授信率 |  |
| - credit_grant_3d_cnt_ratio | Double |  | 0.11 | T3完件授信通过率 |  |
| - key_inapp_action_0d_cnt | Long |  | 11 | T0全量授信数 |  |
| - key_inapp_action_3d_cnt | Long |  | 11 | T3全量授信数 |  |
| - key_inapp_action_0d_cnt_cost | Double |  | 0.111 | T0全量授信成本 |  |
| - key_inapp_action_3d_cnt_cost | Double |  | 0.11 | T3全量授信成本 |  |
| - key_inapp_action_0d_cnt_ratio | Double |  | 0.11 | T0全量授信通过率 |  |
| - key_inapp_action_3d_cnt_ratio | Double |  | 0.11 | T3全量授信通过率 |  |
| - draw_credit_line_0d_cnt | Long |  | 11 | T0用信数 |  |
| - draw_credit_line_0d_cnt_cost | Double |  | 0.11 | T0用信成本 |  |
| - draw_credit_line_0d_cnt_ratio | Double |  | 0.11 | T0授信用信率 |  |
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

## 返回样例

### 请求样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "total_count": 1,
        "details": [
            {
                "charge": 76.0,
                "show": 10,
                "aclick": 20,
                "bclick": 10,
                "share": 3,
                "comment": 4,
                "like": 5,
                "follow": 2,
                "report": 0,
                "block": 0,
                "negative": 0,
                "activation": 10,
                "submit": 20,
                "cancel_follow": 0,
                "download_started": 0,
                "download_completed": 0,
                "stat_date": "2019-08-23",
                "stat_hour": 0,
                "photo_click": 5,
                "photo_click_ratio": 0.5,
                "action_ratio": 0.5,
                "impression_1k_cost": 7600.0,
                "photo_click_cost": 15.2,
                "action_cost": 7.6,
                "event_pay_first_day": 3,
                "event_pay_purchase_amount_first_day": 50.0,
                "event_pay_first_day_roi": 0.6578947368421053,
                "event_pay": 6,
                "event_pay_purchase_amount": 100.0,
                "event_pay_roi": 1.3157894736842106,
                "event_register": 8,
                "event_register_cost": 9.5,
                "event_register_ratio": 0.8,
                "event_jin_jian_app": 8,
                "event_jin_jian_app_cost": 9.5,
                "event_credit_grant_app": 6,
                "event_credit_grant_app_cost": 12.666666666666666,
                "event_credit_grant_app_ratio": 0.75,
                "event_order_paid": 6,
                "event_order_paid_purchase_amount": 100.0,
                "event_order_paid_cost": 12.666666666666666,
                "form_count": 20,
                "form_cost": 3.8,
                "form_action_ratio": 2.0,
                "event_jin_jian_landing_page": 8,
                "event_jin_jian_landing_page_cost": 9.5,
                "event_credit_grant_landing_page": 6,
                "event_credit_grant_landing_page_cost": 12.666666666666666,
                "event_credit_grant_landing_ratio": 0.75,
                "event_effective_customer_acquisition_cnt":76,
                "event_effective_customer_acquisition_cost":1.0,
                "event_effective_customer_acquisition_ratio":0.13
            }
        ]
    }
}
```
