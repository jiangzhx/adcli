---
title: 搜索词报表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2626&menuId=3350
doc_id: kuaishou_2626
source_id: kuaishou_2626
---
# 搜索词报表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2626 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2025-08-12T08:06:10.010Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/report/query_word_report |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 24534657 | 广告主 ID（注：非账户快手 ID），在获取 accessToken 时返回 |  |
| start_date | String |  | 022-01-29 | 过滤筛选条件，格式 yyyy-MM-dd 可选时间范围参见文档上方说明 | （必选其 2） |
| end_date | String |  | 2022-01-29 | 过滤筛选条件，格式 yyyy-MM-dd 可选时间范围参见文档上方说明 | （必选其 2） |
| page | Integer |  | 1 | 请求的页码，默认为 1 |  |
| page_size | Integer |  | 10 | 每页行数，默认为 20，最大支持 2000 |  |
| start_date_min | String |  |  | 增量拉取过滤筛选条件，格式【yyyy-MM-dd HH:mm】可选时间范围参见文档上方说明 | （必选其 1） |
| end_date_min | String |  |  | 增量拉取过滤筛选条件，格式【yyyy-MM-dd HH:mm】可选时间范围参见文档上方说明 | （必选其 1） |
| campaign_type | Integer |  |  | 计划类型 |  |
| report_dims | String[] |  |  | "adScene"：按广告场景；"placementType"：按广告范围，快手/联盟;不传/传空/传空数组：不限 | （可选） |
| temporal_granularity | String |  | DAILY | 天粒度（DAILY）／小时粒度（HOURLY），默认支持天粒度数据 | （可选） |
| campaign_ids | Long[] |  |  | 计划IDs |  |
| unit_ids | Long[] |  |  | 广告组 ID 集，过滤筛选条件，单次查询数量不超过 5000 | （可选） |
| detailed | Boolean |  |  | 是否以unit_id分组 |  |
| word_info_ids | Long[] |  |  | 推广关键词ID集，过滤筛选条件，单次查询数量不超过 5000。推广关键词ID集可通过获取关键词列表接口获取 | （可选） |
| query | String[] |  |  | 搜索词，过滤筛选条件，单次查询数量不超过5000 | （可选） |
| selected_columns | String[] |  |  | 自定义列，支持列名及其关联字段详见：https://docs.qingque.cn/d/home/eZQB-fLBIZLvGG50L7vFkHL3J?identityId=1oE314hFZmG | （可选） |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 20000681,
    "start_date": "2022-02-07",
    "end_date": "2022-02-09",
    "query":["无糖拿铁"]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | QueryWordReport |  |  | 搜索词报表 |  |
| - total_count | Long |  | 40 | 数据的总行数 |  |
| - details | QueryWordReportDetail[] |  | [{}] | 数据明细信息 |  |
| - charge | Double |  | 30.0 | 花费（元） |  |
| - show | Long |  | 4381 | 封面曝光数 |  |
| - aclick | Long |  | 4486 | 素材曝光数 |  |
| - bclick | Long |  | 7298 | 行为数 |  |
| - share | Long |  | 2850 | 分享数 |  |
| - comment | Long |  | 1337 | 评论数 |  |
| - like | Long |  | 2268 | 点赞数 |  |
| - follow | Long |  | 8454 | 新增粉丝数 |  |
| - report | Long |  | 3064 | 举报数 |  |
| - block | Long |  | 3407 | 拉黑数 |  |
| - negative | Long |  | 9524 | 减少此类作品数 |  |
| - activation | Long |  | 2262 | 应用下载数据-激活数 |  |
| - submit | Long |  | 9558 | 提交按钮点击数（历史字段，同下方“线索提交个数”，预计年底删除该字段） |  |
| - ad_photo_played_10s | Long |  | 2223 | 10s播放数 |  |
| - ad_photo_played_2s | Long |  | 7756 | 2s播放数 |  |
| - ad_photo_played_75percent | Long |  | 5732 | 75%进度播放数 |  |
| - approx_pay_cost | Double |  | 0.004332755632582322 | 淘系近似购买成本 |  |
| - approx_pay_count | Long |  | 6924 | 近似购买数 |  |
| - approx_pay_ratio | Double |  | 0.9487530830364483 | 淘系近似购买率 |  |
| - cancel_like | Long |  | 1326 | 取消点赞数 |  |
| - click_conversion_ratio | Double |  | 0.5042353990191708 | 点击激活成本 |  |
| - conversion_cost | Double |  | 0.01326259946949602 | 激活单价 |  |
| - download_completed_cost | Double |  | 0.018668326073428748 | 安卓下载完成单价（元） |  |
| - download_completed_ratio | Double |  | 0.16438216039279868 | 安卓下载完成率 |  |
| - download_conversion_ratio | Double |  | 1.4075917859365277 | 下载完成激活率 |  |
| - download_installed | Long |  | 7771 | 安卓安装完成数 |  |
| - download_started_cost | Double |  | 0.0030687397708674302 | 安卓下载开始单价（元） |  |
| - download_started_ratio | Double |  | 1.3395450808440668 | 安卓下载开始率 |  |
| - event_ad_watch_10_times | Long |  | 3523 | 10次广告广告观看数 |  |
| - event_ad_watch_10_times_cost | Double |  | 0.008515469770082317 | 10次广告观看成本 |  |
| - event_ad_watch_10_times_ratio | Double |  | 0.48273499588928476 | 10次广告观看转化率 |  |
| - event_ad_watch_20_times | Long |  | 4638 | 20次广告广告观看数 |  |
| - event_ad_watch_20_times_cost | Double |  | 0.00646830530401035 | 20次广告观看成本 |  |
| - event_ad_watch_20_times_ratio | Double |  | 0.6355165798849 | 20次广告观看转化率 |  |
| - event_ad_watch_5_times | Long |  | 6799 | 5次广告广告观看数 |  |
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
| - event_making_calls | Long |  | 7045 | 电话拨打数-用户点击电话按钮的次数 |  |
| - event_making_calls_cost | Double |  | 0.0042583392476933995 | 电话拨打成本 |  |
| - event_making_calls_ratio | Double |  | 0.965332967936421 | 电话拨打率 |  |
| - event_order_submit | Long |  | 5822 | 提交订单数 |  |
| - event_pay_purchase_amount_one_day | Double |  | 4377.0 | 激活后24h付费金额(回传时间) |  |
| - event_pay_purchase_amount_one_day_by_conversion | Double |  | 1509.0 | 激活后24h付费金额(激活时间) |  |
| - event_pay_purchase_amount_one_day_by_conversion_roi | Double |  | 50.3 | 激活后24小时付费ROI |  |
| - event_pay_purchase_amount_one_day_roi | Double |  | 145.9 | 激活后24h-ROI(回传时间) |  |
| - event_pay_weighted_purchase_amount | Double |  | 4233.0 | 加权付费金额-当日回传的付费行为所带来的加权付费金额，单位:元，当前用于保险行业 |  |
| - event_pay_weighted_purchase_amount_first_day | Double |  | 9421.0 | 首日加权付费金额-当日激活的用户在当天产生的付费行为所带来的加权付费金额 单位:元，当前用于保险行业 |  |
| - event_pre_component_consultation_valid_retained | Long |  | 7222 | 附加咨询组件留资咨询数 |  |
| - event_wechat_qr_code_link_click | Long |  | 3794 | 微信小程序深度加粉数 |  |
| - live_event_goods_view | Long |  | 1520 | 直播查看商品数 |  |
| - live_played_3s | Long |  | 4372 | 直播观看数 |  |
| - played_end | Long |  | 1098 | 播放完成 |  |
| - played_five_seconds | Long |  | 2402 | 播放5s |  |
| - played_three_seconds | Long |  | 7849 | 有效播放数 |  |
| - adScene | String |  | 全部 | 字段描述，需要修改 |  |
| - ad_scene | String |  | 全部 | 字段描述，需要修改 |  |
| - placement_type | String |  | 全部 | 字段描述，需要修改 |  |
| - cancel_follow | Long |  | 7980 | 取消关注数 |  |
| - download_started | Long |  | 9776 | 应用下载数据-安卓下载开始数 |  |
| - download_completed | Long |  | 1607 | 应用下载数据-安卓下载完成数 |  |
| - stat_date | String |  | 2021-12-02 | 数据日期，格式：YYYY-MM-DD |  |
| - stat_hour | Long |  | 0 | 数据小时 |  |
| - photo_click | Long |  | 2367 | 封面点击数 |  |
| - photo_click_ratio | Double |  | 0.5402876055695047 | 封面点击率 |  |
| - action_ratio | Double |  | 1.6268390548372715 | 行为率 |  |
| - impression_1k_cost | Double |  | 6.847751654873316 | 平均千次曝光花费（元） |  |
| - photo_click_cost | Double |  | 0.01267427122940431 | 平均点击单价（元） |  |
| - click_1k_cost | Double |  | 6.687472135532769 | 平均千次素材曝光花费(元) |  |
| - action_cost | Double |  | 0.004110715264456015 | 平均行为单价（元） |  |
| - event_pay_first_day | Long |  | 1378 | 应用下载数据-首日付费次数 |  |
| - event_pay_purchase_amount_first_day | Double |  | 2864.0 | 应用下载数据-首日付费金额 |  |
| - event_pay_first_day_roi | Double |  | 95.46666666666667 | 应用下载数据-首日 ROI |  |
| - event_pay | Long |  | 7566 | 应用下载数据-付费次数 |  |
| - event_pay_purchase_amount | Double |  | 8479.0 | 应用下载数据-付费金额 |  |
| - event_pay_roi | Double |  | 282.6333333333333 | 应用下载数据-ROI |  |
| - event_register | Long |  | 9296 | 应用下载数据-注册数 |  |
| - event_register_cost | Double |  | 0.003227194492254733 | 应用下载数据-注册成本 |  |
| - event_register_ratio | Double |  | 4.1096374889478335 | 应用下载数据-注册率 |  |
| - event_jin_jian_app | Long |  | 7553 | 应用下载数据-完件数 |  |
| - event_jin_jian_app_cost | Double |  | 0.003971931682775056 | 应用下载数据-完件成本 |  |
| - event_credit_grant_app | Long |  | 2160 | 应用下载数据-授信数 |  |
| - event_credit_grant_app_cost | Double |  | 0.013888888888888888 | 应用下载数据-授信成本 |  |
| - event_credit_grant_app_ratio | Double |  | 0.285979081159804 | 应用下载数据-授信率 |  |
| - event_order_paid | Long |  | 6576 | 应用下载数据-付款成功数 |  |
| - event_order_paid_purchase_amount | Double |  | 1195.0 | 应用下载数据-付款成功金额 |  |
| - event_order_paid_cost | Double |  | 0.004562043795620438 | 应用下载数据-单次付款成本 |  |
| - form_count | Long |  | 9558 | 落地页数据-线索提交个数 |  |
| - form_cost | Double |  | 0.003138731952291274 | 落地页数据-单个线索成本 |  |
| - form_action_ratio | Double |  | 1.3096738832556865 | 落地页数据-表单提交点击率 |  |
| - event_jin_jian_landing_page | Long |  | 7553 | 落地页数据-落地页完件数 |  |
| - event_jin_jian_landing_page_cost | Double |  | 0.003971931682775056 | 落地页数据-落地页完件成本 |  |
| - event_credit_grant_landing_page | Long |  | 2160 | 落地页数据-落地页授信数 |  |
| - event_credit_grant_landing_page_cost | Double |  | 0.013888888888888888 | 落地页数据-落地页授信成本 |  |
| - event_credit_grant_landing_ratio | Double |  | 0.285979081159804 | 落地页数据-落地页授信率 |  |
| - event_next_day_stay_cost | Double |  | 0.003723932472691162 | 应用下载数据-次留成本（仅支持分日查询） |  |
| - event_next_day_stay_ratio | Double |  | 3.561450044208665 | 应用下载数据-次留率（仅支持分日查询） |  |
| - event_next_day_stay | Long |  | 8056 | 应用下载数据-次留数（仅支持分日查询） |  |
| - play_3s_ratio | Double |  | 1.7496656263932233 | 字段描述，需要修改 |  |
| - event_valid_clues | Long |  | 6635 | 落地页数据-有效线索数 |  |
| - event_valid_clues_cost | Double |  | 0.00452147701582517 | 落地页数据-有效线索成本 |  |
| - ad_product_cnt | Long |  | 1817 | 商品成交数 |  |
| - event_goods_view | Long |  | 4497 | 商品访问数 |  |
| - merchant_reco_fans | Long |  | 7702 | 涨粉量 |  |
| - event_order_amount_roi | Double |  | 39.833333333333336 | 小店推广roi |  |
| - event_goods_view_cost | Double |  | 0.0066711140760507 | 商品访问成本 |  |
| - merchant_reco_fans_cost | Double |  | 0.003895092183848351 | 涨粉成本 |  |
| - event_new_user_pay | Long |  | 6816 | 新增付费人数 |  |
| - event_new_user_pay_cost | Double |  | 0.004401408450704225 | 新增付费人数成本 |  |
| - event_new_user_pay_ratio | Double |  | 0.5766497461928934 | 新增付费人数率 |  |
| - event_button_click | Long |  | 5911 | 按钮点击数 |  |
| - event_button_click_cost | Double |  | 0.005075283369988158 | 按钮点击成本 |  |
| - event_button_click_ratio | Double |  | 0.8099479309399835 | 按钮点击率 |  |
| - play_5s_ratio | Double |  | 0.5354436023183237 | 5s播放率 |  |
| - play_end_ratio | Double |  | 0.24476148016049934 | 完播率 |  |
| - event_order_paid_roi | Double |  | 1.4623082054703136 | 订单支付率 |  |
| - event_new_user_jinjian_app | Long |  | 1672 | 新增完件人数 |  |
| - event_new_user_jinjian_app_cost | Double |  | 0.017942583732057416 | 新增完件人数成本 |  |
| - event_new_user_jinjian_app_roi | Double |  | 0.14145516074450085 | 新增完件人数率 |  |
| - event_new_user_credit_grant_app | Long |  | 2465 | 新增授信人数 |  |
| - event_new_user_credit_grant_app_cost | Double |  | 0.012170385395537525 | 新增授信人数成本 |  |
| - event_new_user_credit_grant_app_roi | Double |  | 0.20854483925549916 | 新增授信人数率 |  |
| - event_new_user_jinjian_page | Long |  | 1672 | 字段描述，需要修改 |  |
| - event_new_user_jinjian_page_cost | Double |  | 0.017942583732057416 | 字段描述，需要修改 |  |
| - event_new_user_jinjian_page_roi | Double |  | 0.14145516074450085 | 字段描述，需要修改 |  |
| - event_new_user_credit_grant_page | Long |  | 2465 | 字段描述，需要修改 |  |
| - event_new_user_credit_grant_page_cost | Double |  | 0.012170385395537525 | 字段描述，需要修改 |  |
| - event_new_user_credit_grant_page_roi | Double |  | 0.20854483925549916 | 字段描述，需要修改 |  |
| - event_appoint_form | Long |  | 7508 | 预约表单数 |  |
| - event_appoint_form_cost | Double |  | 0.003995737879595098 | 预约表单点击成本 |  |
| - event_appoint_form_ratio | Double |  | 1.028775006851192 | 预约表单点击率 |  |
| - event_appoint_jump_click | Long |  | 9996 | 预约跳转点击数 |  |
| - event_appoint_jump_click_cost | Double |  | 0.0030012004801920765 | 预约跳转点击成本 |  |
| - event_appoint_jump_click_ratio | Double |  | 1.3696903261167443 | 预约跳转点击率 |  |
| - union_event_pay_purchase_amount_7d | Double |  | 0.0 | 联盟广告收入 |  |
| - union_event_pay_purchase_amount_7d_roi | Double |  | 0.0 | 联盟变现ROI |  |
| - event_dsp_gift_form | Long |  | 7025 | 附加组件表单提交 |  |
| - event_app_invoked | Long |  | 6734 | 唤醒应用数 |  |
| - event_app_invoked_cost | Double |  | 0.004455004455004455 | 唤醒应用成本 |  |
| - event_app_invoked_ratio | Double |  | 0.9227185530282269 | 唤醒应用率 |  |
| - event_add_wechat | Long |  | 2506 | 微信复制数 |  |
| - event_add_wechat_cost | Double |  | 0.011971268954509178 | 微信复制成本 |  |
| - event_add_wechat_ratio | Double |  | 0.3433817484242258 | 微信复制率 |  |
| - event_multi_conversion | Long |  | 7297 | 落地页多转化次数 |  |
| - event_multi_conversion_ratio | Double |  | 0.0 | 落地页多转化率 |  |
| - event_multi_conversion_cost | Double |  | 0.004111278607646978 | 落地页多转化成本 |  |
| - event_watch_app_ad | Long |  | 8501 | 广告观看 |  |
| - event_ad_watch_times | Long |  | 8708 | 广告观看次数 |  |
| - event_ad_watch_times_ratio | Double |  | 1.1932036174294327 | 广告观看次数转化率 |  |
| - event_ad_watch_times_cost | Double |  | 0.003445107946715664 | 广告观看次数成本 |  |
| - event_add_shopping_cart | Long |  | 2117 | 添加购物车数 |  |
| - event_add_shopping_cart_cost | Double |  | 0.014170996693434105 | 添加购物车成本 |  |
| - event_get_through | Long |  | 9956 | 智能电话-确认接通数 |  |
| - event_get_through_cost | Double |  | 0.003013258336681398 | 智能电话-确认接通成本 |  |
| - event_get_through_ratio | Double |  | 1.3642093724308029 | 智能电话-确认接通率 |  |
| - ad_photo_played_75percent_ratio | Double |  | 1.277753009362461 | 75%进度播放率 |  |
| - ad_photo_played_10s_ratio | Double |  | 0.49554168524297815 | 10s播放率 |  |
| - ad_photo_played_2s_ratio | Double |  | 1.7289344627730718 | 2s播放率 |  |
| - event_phone_get_through | Long |  | 8346 | 电话建联数 |  |
| - event_intention_confirmed | Long |  | 5005 | 意向确认数 |  |
| - event_wechat_connected | Long |  | 2370 | 微信加粉数 |  |
| - event_order_successed | Long |  | 1483 | 有效线索成交数 |  |
| - event_phone_card_activate | Long |  | 1609 | 电话卡激活数 |  |
| - event_measurement_house | Long |  | 3122 | 量房数 |  |
| - ad_show | Double |  | 0.24 | 广告曝光 |  |
| - action_new_ratio | Double |  | 0.9463174273858921 | 行为率 新 |  |
| - event_outbound_call | Long |  | 8104 | 电话拨打数 |  |
| - event_outbound_call_cost | Double |  | 0.0037018756169792696 | 电话拨打成本 |  |
| - event_outbound_call_ratio | Double |  | 1.1104412167717184 | 电话拨打率 |  |
| - key_action | Long |  | 8311 | 关键行为数 |  |
| - key_action_cost | Double |  | 0.003609673926122007 | 关键行为成本 |  |
| - key_action_ratio | Double |  | 3.674182139699381 | 关键行为率 |  |
| - event_credit_card_recheck | Long |  | 7657 | 信用卡核卡数 |  |
| - event_credit_card_recheck_first_day | Long |  | 9051 | 信用卡首日核卡数 |  |
| - event_no_intention | Long |  | 6731 | 用户无意向数 |  |
| - word | String |  | 自定义 | 关键词文本 |  |
| - trigger_type | Integer |  | 1 | 触发方式：1:精确匹配,2:短语匹配,3:广泛匹配 |  |
| - query | String |  | 望着 | 搜索词 |  |
| - word_info_id | Long |  |  | 关键词ID |  |
| - unit_id | Long |  |  | 单元id |  |
| - unit_name | String |  |  | 单元名称 |  |
| - campaign_id | Long |  |  | 计划id |  |
| - campaign_name | String |  |  | 计划名称 |  |
| - event_form_submit | Long |  |  | 表单提交数（回传时间） |  |
| - direct_submit_1d_cnt | Long |  |  | 表单提交数(计费时间) |  |
| - event_form_submit_ratio | Double |  |  | 表单提交率（回传时间） |  |
| - event_form_submit_cost | Double |  |  | 表单提交成本（回传时间） |  |
| - direct_submit_1d_cost | Double |  |  | 表单提交成本 |  |
| - event_audition_30d_cnt | Long |  |  | 首次试听到课（归因） |  |
| - event_audition_cost | Double |  |  | 首次试听到课成本 |  |
| - all_lesson_finish_cnt | Long |  |  | 全部试听完课（回传） |  |
| - all_lesson_finish_30d_cnt | Long |  |  | 全部试听完课（归因） |  |
| - high_price_class_pay_cnt | Long |  |  | 成交付费（回传） |  |
| - high_price_class_pay_30d_cnt | Long |  |  | 成交付费（归因） |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "total_count": 1,
        "details": [
            {
                "charge": 2000.01,
                "show": 2110,
                "aclick": 171,
                "bclick": 0,
                "share": 0,
                "comment": 0,
                "like": 0,
                "follow": 0,
                "report": 0,
                "block": 0,
                "negative": 0,
                "activation": 0,
                "submit": 0,
                "ad_photo_played_10s": 0,
                "ad_photo_played_2s": 0,
                "ad_photo_played_75percent": 0,
                "approx_pay_cost": 0.0,
                "approx_pay_count": 0,
                "approx_pay_ratio": 0.0,
                "cancel_like": 0,
                "click_conversion_ratio": 0.0,
                "conversion_cost": 0.0,
                "conversion_cost_by_impression_7d": 0.0,
                "conversion_num": 0,
                "conversion_num_by_impression_7d": 0,
                "conversion_num_cost": 0.0,
                "conversion_ratio": 0.0,
                "conversion_ratio_by_impression_7d": 0.0,
                "deep_conversion_cost": 0.0,
                "deep_conversion_cost_by_impression_7d": 0.0,
                "deep_conversion_num": 0,
                "deep_conversion_num_by_impression_7d": 0,
                "deep_conversion_ratio": 0.0,
                "deep_conversion_ratio_by_impression_7d": 0.0,
                "download_completed_cost": 0.0,
                "download_completed_ratio": 0.0,
                "download_conversion_ratio": 0.0,
                "download_installed": 0,
                "download_started_cost": 0.0,
                "download_started_ratio": 0.0,
                "event_24h_stay": 0,
                "event_24h_stay_by_conversion": 0,
                "event_24h_stay_by_conversion_cost": 0.0,
                "event_24h_stay_by_conversion_ratio": 0.0,
                "event_24h_stay_cost": 0.0,
                "event_24h_stay_ratio": 0.0,
                "event_ad_watch_10_times": 0,
                "event_ad_watch_10_times_cost": 0.0,
                "event_ad_watch_10_times_ratio": 0.0,
                "event_ad_watch_20_times": 0,
                "event_ad_watch_20_times_cost": 0.0,
                "event_ad_watch_20_times_ratio": 0.0,
                "event_ad_watch_5_times": 0,
                "event_ad_watch_5_times_cost": 0.0,
                "event_ad_watch_5_times_ratio": 0.0,
                "event_consultation_valid_retained": 0,
                "event_consultation_valid_retained_cost": 0.0,
                "event_consultation_valid_retained_ratio": 0.0,
                "event_conversion_click_cost": 0.0,
                "event_conversion_click_ratio": 0.0,
                "event_credit_grant_first_day_app": 0,
                "event_credit_grant_first_day_app_cost": 0.0,
                "event_credit_grant_first_day_app_ratio": 0.0,
                "event_credit_grant_first_day_landing_page": 0,
                "event_credit_grant_first_day_landing_page_cost": 0.0,
                "event_credit_grant_first_day_landing_page_ratio": 0.0,
                "event_making_calls": 0,
                "event_making_calls_cost": 0.0,
                "event_making_calls_ratio": 0.0,
                "event_order_submit": 0,
                "event_pay_purchase_amount_one_day": 0.0,
                "event_pay_purchase_amount_one_day_by_conversion": 0.0,
                "event_pay_purchase_amount_one_day_by_conversion_roi": 0.0,
                "event_pay_purchase_amount_one_day_roi": 0.0,
                "event_pay_purchase_amount_three_day_by_conversion": 0.0,
                "event_pay_purchase_amount_three_day_by_conversion_roi": 0.0,
                "event_pay_purchase_amount_week_by_conversion": 0.0,
                "event_pay_purchase_amount_week_by_conversion_roi": 0.0,
                "event_pay_week_by_conversion": 0,
                "event_pay_week_by_conversion_cost": 0.0,
                "event_pay_weighted_purchase_amount": 0.0,
                "event_pay_weighted_purchase_amount_first_day": 0.0,
                "event_pre_component_consultation_valid_retained": 0,
                "event_three_day_stay_by_conversion": 0,
                "event_three_day_stay_by_conversion_cost": 0.0,
                "event_three_day_stay_by_conversion_ratio": 0.0,
                "event_wechat_qr_code_link_click": 0,
                "event_week_stay_by_conversion": 0,
                "event_week_stay_by_conversion_cost": 0.0,
                "event_week_stay_by_conversion_ratio": 0.0,
                "live_event_goods_view": 0,
                "live_played_3s": 0,
                "played_end": 0,
                "played_five_seconds": 0,
                "played_three_seconds": 0,
                "adScene": "全部",
                "ad_scene": "全部",
                "placement_type": "全部",
                "cancel_follow": 0,
                "download_started": 0,
                "download_completed": 0,
                "stat_date": "2022-02-09",
                "stat_hour": 0,
                "photo_click": 621,
                "photo_click_ratio": 0.2943127962085308,
                "action_ratio": 0.0,
                "impression_1k_cost": 947.872037914692,
                "photo_click_cost": 3.2206280193236716,
                "click_1k_cost": 11695.964912280702,
                "action_cost": 0.0,
                "event_pay_first_day": 0,
                "event_pay_purchase_amount_first_day": 0.0,
                "event_pay_first_day_roi": 0.0,
                "event_pay": 0,
                "event_pay_purchase_amount": 0.0,
                "event_pay_roi": 0.0,
                "event_register": 0,
                "event_register_cost": 0.0,
                "event_register_ratio": 0.0,
                "event_jin_jian_app": 0,
                "event_jin_jian_app_cost": 0.0,
                "event_credit_grant_app": 0,
                "event_credit_grant_app_cost": 0.0,
                "event_credit_grant_app_ratio": 0.0,
                "event_order_paid": 0,
                "event_order_paid_purchase_amount": 0.0,
                "event_order_paid_cost": 0.0,
                "form_count": 0,
                "form_cost": 0.0,
                "form_action_ratio": 0.0,
                "event_jin_jian_landing_page": 0,
                "event_jin_jian_landing_page_cost": 0.0,
                "event_credit_grant_landing_page": 0,
                "event_credit_grant_landing_page_cost": 0.0,
                "event_credit_grant_landing_ratio": 0.0,
                "event_next_day_stay_cost": 0.0,
                "event_next_day_stay_ratio": 0.0,
                "event_next_day_stay": 0,
                "play_3s_ratio": 0.0,
                "event_valid_clues": 0,
                "event_valid_clues_cost": 0.0,
                "ad_product_cnt": 0,
                "event_goods_view": 0,
                "merchant_reco_fans": 0,
                "event_order_amount_roi": 0.0,
                "event_goods_view_cost": 0.0,
                "merchant_reco_fans_cost": 0.0,
                "event_new_user_pay": 0,
                "event_new_user_pay_cost": 0.0,
                "event_new_user_pay_ratio": 0.0,
                "event_button_click": 0,
                "event_button_click_cost": 0.0,
                "event_button_click_ratio": 0.0,
                "play_5s_ratio": 0.0,
                "play_end_ratio": 0.0,
                "event_order_paid_roi": 0.0,
                "event_new_user_jinjian_app": 0,
                "event_new_user_jinjian_app_cost": 0.0,
                "event_new_user_jinjian_app_roi": 0.0,
                "event_new_user_credit_grant_app": 0,
                "event_new_user_credit_grant_app_cost": 0.0,
                "event_new_user_credit_grant_app_roi": 0.0,
                "event_new_user_jinjian_page": 0,
                "event_new_user_jinjian_page_cost": 0.0,
                "event_new_user_jinjian_page_roi": 0.0,
                "event_new_user_credit_grant_page": 0,
                "event_new_user_credit_grant_page_cost": 0.0,
                "event_new_user_credit_grant_page_roi": 0.0,
                "event_appoint_form": 0,
                "event_appoint_form_cost": 0.0,
                "event_appoint_form_ratio": 0.0,
                "event_appoint_jump_click": 0,
                "event_appoint_jump_click_cost": 0.0,
                "event_appoint_jump_click_ratio": 0.0,
                "event_dsp_gift_form": 0,
                "event_app_invoked": 0,
                "event_app_invoked_cost": 0.0,
                "event_app_invoked_ratio": 0.0,
                "event_add_wechat": 0,
                "event_add_wechat_cost": 0.0,
                "event_add_wechat_ratio": 0.0,
                "event_multi_conversion": 0,
                "event_multi_conversion_ratio": 0.0,
                "event_multi_conversion_cost": 0.0,
                "event_watch_app_ad": 0,
                "event_ad_watch_times": 0,
                "event_ad_watch_times_ratio": 0.0,
                "event_ad_watch_times_cost": 0.0,
                "event_add_shopping_cart": 0,
                "event_add_shopping_cart_cost": 0.0,
                "event_get_through": 0,
                "event_get_through_cost": 0.0,
                "event_get_through_ratio": 0.0,
                "ad_photo_played_75percent_ratio": 0.0,
                "ad_photo_played_10s_ratio": 0.0,
                "ad_photo_played_2s_ratio": 0.0,
                "event_phone_get_through": 0,
                "event_intention_confirmed": 0,
                "event_wechat_connected": 0,
                "event_order_successed": 0,
                "event_phone_card_activate": 0,
                "event_measurement_house": 0,
                "ad_show": null,
                "action_new_ratio": 0.0,
                "event_outbound_call": 0,
                "event_outbound_call_cost": 0.0,
                "event_outbound_call_ratio": 0.0,
                "key_action": 0,
                "key_action_cost": 0.0,
                "key_action_ratio": 0.0,
                "event_credit_card_recheck": 0,
                "event_credit_card_recheck_first_day": 0,
                "event_no_intention": 0,
                "query": "无糖拿铁",
                "word": "拿铁",
                "trigger_type": 3
            }
        ]
    },
    "message": "OK",
    "request_id": "69249616813f42dfb44f4d5f5234a9c5"
}
```

## 原始内容

```
搜索词报表 /rest/openapi/gw/dsp/v1/report/query_word_report { "advertiser_id": 20000681, "start_date": "2022-02-07", "end_date": "2022-02-09", "query":["无糖拿铁"] } { "code": 0, "data": { "total_count": 1, "details": [ { "charge": 2000.01, "show": 2110, "aclick": 171, "bclick": 0, "share": 0, "comment": 0, "like": 0, "follow": 0, "report": 0, "block": 0, "negative": 0, "activation": 0, "submit": 0, "ad_photo_played_10s": 0, "ad_photo_played_2s": 0, "ad_photo_played_75percent": 0, "approx_pay_cost": 0.0, "approx_pay_count": 0, "approx_pay_ratio": 0.0, "cancel_like": 0, "click_conversion_ratio": 0.0, "conversion_cost": 0.0, "conversion_cost_by_impression_7d": 0.0, "conversion_num": 0, "conversion_num_by_impression_7d": 0, "conversion_num_cost": 0.0, "conversion_ratio": 0.0, "conversion_ratio_by_impression_7d": 0.0, "deep_conversion_cost": 0.0, "deep_conversion_cost_by_impression_7d": 0.0, "deep_conversion_num": 0, "deep_conversion_num_by_impression_7d": 0, "deep_conversion_ratio": 0.0, "deep_conversion_ratio_by_impression_7d": 0.0, "download_completed_cost": 0.0, "download_completed_ratio": 0.0, "download_conversion_ratio": 0.0, "download_installed": 0, "download_started_cost": 0.0, "download_started_ratio": 0.0, "event_24h_stay": 0, "event_24h_stay_by_conversion": 0, "event_24h_stay_by_conversion_cost": 0.0, "event_24h_stay_by_conversion_ratio": 0.0, "event_24h_stay_cost": 0.0, "event_24h_stay_ratio": 0.0, "event_ad_watch_10_times": 0, "event_ad_watch_10_times_cost": 0.0, "event_ad_watch_10_times_ratio": 0.0, "event_ad_watch_20_times": 0, "event_ad_watch_20_times_cost": 0.0, "event_ad_watch_20_times_ratio": 0.0, "event_ad_watch_5_times": 0, "event_ad_watch_5_times_cost": 0.0, "event_ad_watch_5_times_ratio": 0.0, "event_consultation_valid_retained": 0, "event_consultation_valid_retained_cost": 0.0, "event_consultation_valid_retained_ratio": 0.0, "event_conversion_click_cost": 0.0, "event_conversion_click_ratio": 0.0, "event_credit_grant_first_day_app": 0, "event_credit_grant_first_day_app_cost": 0.0, "event_credit_grant_first_day_app_ratio": 0.0, "event_credit_grant_first_day_landing_page": 0, "event_credit_grant_first_day_landing_page_cost": 0.0, "event_credit_grant_first_day_landing_page_ratio": 0.0, "event_making_calls": 0, "event_making_calls_cost": 0.0, "event_making_calls_ratio": 0.0, "event_order_submit": 0, "event_pay_purchase_amount_one_day": 0.0, "event_pay_purchase_amount_one_day_by_conversion": 0.0, "event_pay_purchase_amount_one_day_by_conversion_roi": 0.0, "event_pay_purchase_amount_one_day_roi": 0.0, "event_pay_purchase_amount_three_day_by_conversion": 0.0, "event_pay_purchase_amount_three_day_by_conversion_roi": 0.0, "event_pay_purchase_amount_week_by_conversion": 0.0, "event_pay_purchase_amount_week_by_conversion_roi": 0.0, "event_pay_week_by_conversion": 0, "event_pay_week_by_conversion_cost": 0.0, "event_pay_weighted_purchase_amount": 0.0, "event_pay_weighted_purchase_amount_first_day": 0.0, "event_pre_component_consultation_valid_retained": 0, "event_three_day_stay_by_conversion": 0, "event_three_day_stay_by_conversion_cost": 0.0, "event_three_day_stay_by_conversion_ratio": 0.0, "event_wechat_qr_code_link_click": 0, "event_week_stay_by_conversion": 0, "event_week_stay_by_conversion_cost": 0.0, "event_week_stay_by_conversion_ratio": 0.0, "live_event_goods_view": 0, "live_played_3s": 0, "played_end": 0, "played_five_seconds": 0, "played_three_seconds": 0, "adScene": "全部", "ad_scene": "全部", "placement_type": "全部", "cancel_follow": 0, "download_started": 0, "download_completed": 0, "stat_date": "2022-02-09", "stat_hour": 0, "photo_click": 621, "photo_click_ratio": 0.2943127962085308, "action_ratio": 0.0, "impression_1k_cost": 947.872037914692, "photo_click_cost": 3.2206280193236716, "click_1k_cost": 11695.964912280702, "action_cost": 0.0, "event_pay_first_day": 0, "event_pay_purchase_amount_first_day": 0.0, "event_pay_first_day_roi": 0.0, "event_pay": 0, "event_pay_purchase_amount": 0.0, "event_pay_roi": 0.0, "event_register": 0, "event_register_cost": 0.0, "event_register_ratio": 0.0, "event_jin_jian_app": 0, "event_jin_jian_app_cost": 0.0, "event_credit_grant_app": 0, "event_credit_grant_app_cost": 0.0, "event_credit_grant_app_ratio": 0.0, "event_order_paid": 0, "event_order_paid_purchase_amount": 0.0, "event_order_paid_cost": 0.0, "form_count": 0, "form_cost": 0.0, "form_action_ratio": 0.0, "event_jin_jian_landing_page": 0, "event_jin_jian_landing_page_cost": 0.0, "event_credit_grant_landing_page": 0, "event_credit_grant_landing_page_cost": 0.0, "event_credit_grant_landing_ratio": 0.0, "event_next_day_stay_cost": 0.0, "event_next_day_stay_ratio": 0.0, "event_next_day_stay": 0, "play_3s_ratio": 0.0, "event_valid_clues": 0, "event_valid_clues_cost": 0.0, "ad_product_cnt": 0, "event_goods_view": 0, "merchant_reco_fans": 0, "event_order_amount_roi": 0.0, "event_goods_view_cost": 0.0, "merchant_reco_fans_cost": 0.0, "event_new_user_pay": 0, "event_new_user_pay_cost": 0.0, "event_new_user_pay_ratio": 0.0, "event_button_click": 0, "event_button_click_cost": 0.0, "event_button_click_ratio": 0.0, "play_5s_ratio": 0.0, "play_end_ratio": 0.0, "event_order_paid_roi": 0.0, "event_new_user_jinjian_app": 0, "event_new_user_jinjian_app_cost": 0.0, "event_new_user_jinjian_app_roi": 0.0, "event_new_user_credit_grant_app": 0, "event_new_user_credit_grant_app_cost": 0.0, "event_new_user_credit_grant_app_roi": 0.0, "event_new_user_jinjian_page": 0, "event_new_user_jinjian_page_cost": 0.0, "event_new_user_jinjian_page_roi": 0.0, "event_new_user_credit_grant_page": 0, "event_new_user_credit_grant_page_cost": 0.0, "event_new_user_credit_grant_page_roi": 0.0, "event_appoint_form": 0, "event_appoint_form_cost": 0.0, "event_appoint_form_ratio": 0.0, "event_appoint_jump_click": 0, "event_appoint_jump_click_cost": 0.0, "event_appoint_jump_click_ratio": 0.0, "event_dsp_gift_form": 0, "event_app_invoked": 0, "event_app_invoked_cost": 0.0, "event_app_invoked_ratio": 0.0, "event_add_wechat": 0, "event_add_wechat_cost": 0.0, "event_add_wechat_ratio": 0.0, "event_multi_conversion": 0, "event_multi_conversion_ratio": 0.0, "event_multi_conversion_cost": 0.0, "event_watch_app_ad": 0, "event_ad_watch_times": 0, "event_ad_watch_times_ratio": 0.0, "event_ad_watch_times_cost": 0.0, "event_add_shopping_cart": 0, "event_add_shopping_cart_cost": 0.0, "event_get_through": 0, "event_get_through_cost": 0.0, "event_get_through_ratio": 0.0, "ad_photo_played_75percent_ratio": 0.0, "ad_photo_played_10s_ratio": 0.0, "ad_photo_played_2s_ratio": 0.0, "event_phone_get_through": 0, "event_intention_confirmed": 0, "event_wechat_connected": 0, "event_order_successed": 0, "event_phone_card_activate": 0, "event_measurement_house": 0, "ad_show": null, "action_new_ratio": 0.0, "event_outbound_call": 0, "event_outbound_call_cost": 0.0, "event_outbound_call_ratio": 0.0, "key_action": 0, "key_action_cost": 0.0, "key_action_ratio": 0.0, "event_credit_card_recheck": 0, "event_credit_card_recheck_first_day": 0, "event_no_intention": 0, "query": "无糖拿铁", "word": "拿铁", "trigger_type": 3 } ] }, "message": "OK", "request_id": "69249616813f42dfb44f4d5f5234a9c5" } advertiser_id Long 广告主 ID（注：非账户快手 ID），在获取 accessToken 时返回 start_date String 过滤筛选条件，格式 yyyy-MM-dd 可选时间范围参见文档上方说明 end_date String 过滤筛选条件，格式 yyyy-MM-dd 可选时间范围参见文档上方说明 page Integer 请求的页码，默认为 1 page_size Integer 每页行数，默认为 20，最大支持 2000 start_date_min String 增量拉取过滤筛选条件，格式【yyyy-MM-dd HH:mm】可选时间范围参见文档上方说明 end_date_min String 增量拉取过滤筛选条件，格式【yyyy-MM-dd HH:mm】可选时间范围参见文档上方说明 campaign_type Integer 计划类型 report_dims String[] "adScene"：按广告场景；"placementType"：按广告范围，快手/联盟;不传/传空/传空数组：不限 temporal_granularity String 天粒度（DAILY）／小时粒度（HOURLY），默认支持天粒度数据 campaign_ids Long[] 计划IDs unit_ids Long[] 广告组 ID 集，过滤筛选条件，单次查询数量不超过 5000 detailed Boolean 是否以unit_id分组 word_info_ids Long[] 推广关键词ID集，过滤筛选条件，单次查询数量不超过 5000。推广关键词ID集可通过获取关键词列表接口获取 query String[] 搜索词，过滤筛选条件，单次查询数量不超过5000 selected_columns String[] 自定义列，支持列名及其关联字段详见：https://docs.qingque.cn/d/home/eZQB-fLBIZLvGG50L7vFkHL3J?identityId=1oE314hFZmG code Integer 返回码 message String 返回信息 data QueryWordReport 搜索词报表 total_count Long 数据的总行数 details QueryWordReportDetail[] 数据明细信息 charge Double 花费（元） show Long 封面曝光数 aclick Long 素材曝光数 bclick Long 行为数 share Long 分享数 comment Long 评论数 like Long 点赞数 follow Long 新增粉丝数 report Long 举报数 block Long 拉黑数 negative Long 减少此类作品数 activation Long 应用下载数据-激活数 submit Long 提交按钮点击数（历史字段，同下方“线索提交个数”，预计年底删除该字段） ad_photo_played_10s Long 10s播放数 ad_photo_played_2s Long 2s播放数 ad_photo_played_75percent Long 75%进度播放数 approx_pay_cost Double 淘系近似购买成本 approx_pay_count Long 近似购买数 approx_pay_ratio Double 淘系近似购买率 cancel_like Long 取消点赞数 click_conversion_ratio Double 点击激活成本 conversion_cost Double 激活单价 download_completed_cost Double 安卓下载完成单价（元） download_completed_ratio Double 安卓下载完成率 download_conversion_ratio Double 下载完成激活率 download_installed Long 安卓安装完成数 download_started_cost Double 安卓下载开始单价（元） download_started_ratio Double 安卓下载开始率 event_ad_watch_10_times Long 10次广告广告观看数 event_ad_watch_10_times_cost Double 10次广告观看成本 event_ad_watch_10_times_ratio Double 10次广告观看转化率 event_ad_watch_20_times Long 20次广告广告观看数 event_ad_watch_20_times_cost Double 20次广告观看成本 event_ad_watch_20_times_ratio Double 20次广告观看转化率 event_ad_watch_5_times Long 5次广告广告观看数 event_ad_watch_5_times_cost Double 5次广告观看成本 event_ad_watch_5_times_ratio Double 5次广告观看转化率 event_audition Long 首次试听到课数 event_consultation_valid_retained Long 留咨咨询数 event_consultation_valid_retained_cost Double 留咨咨询成本 event_consultation_valid_retained_ratio Double 留咨咨询率 event_conversion_click_cost Double 有效咨询成本 event_conversion_click_ratio Double 有效咨询率 event_credit_grant_first_day_app Long app首日授信数 event_credit_grant_first_day_app_cost Double 首日授信成本 event_credit_grant_first_day_app_ratio Double 首日授信率 event_credit_grant_first_day_landing_page Long 落地页首日授信数 event_credit_grant_first_day_landing_page_cost Double 落地页首日授信成本 event_credit_grant_first_day_landing_page_ratio Double 落地页首日授信率 event_making_calls Long 电话拨打数-用户点击电话按钮的次数 event_making_calls_cost Double 电话拨打成本 event_making_calls_ratio Double 电话拨打率 event_order_submit Long 提交订单数 event_pay_purchase_amount_one_day Double 激活后24h付费金额(回传时间) event_pay_purchase_amount_one_day_by_conversion Double 激活后24h付费金额(激活时间) event_pay_purchase_amount_one_day_by_conversion_roi Double 激活后24小时付费ROI event_pay_purchase_amount_one_day_roi Double 激活后24h-ROI(回传时间) event_pay_weighted_purchase_amount Double 加权付费金额-当日回传的付费行为所带来的加权付费金额，单位:元，当前用于保险行业 event_pay_weighted_purchase_amount_first_day Double 首日加权付费金额-当日激活的用户在当天产生的付费行为所带来的加权付费金额 单位:元，当前用于保险行业 event_pre_component_consultation_valid_retained Long 附加咨询组件留资咨询数 event_wechat_qr_code_link_click Long 微信小程序深度加粉数 live_event_goods_view Long 直播查看商品数 live_played_3s Long 直播观看数 played_end Long 播放完成 played_five_seconds Long 播放5s played_three_seconds Long 有效播放数 adScene String 字段描述，需要修改 ad_scene String 字段描述，需要修改 placement_type String 字段描述，需要修改 cancel_follow Long 取消关注数 download_started Long 应用下载数据-安卓下载开始数 download_completed Long 应用下载数据-安卓下载完成数 stat_date String 数据日期，格式：YYYY-MM-DD stat_hour Long 数据小时 photo_click Long 封面点击数 photo_click_ratio Double 封面点击率 action_ratio Double 行为率 impression_1k_cost Double 平均千次曝光花费（元） photo_click_cost Double 平均点击单价（元） click_1k_cost Double 平均千次素材曝光花费(元) action_cost Double 平均行为单价（元） event_pay_first_day Long 应用下载数据-首日付费次数 event_pay_purchase_amount_first_day Double 应用下载数据-首日付费金额 event_pay_first_day_roi Double 应用下载数据-首日 ROI event_pay Long 应用下载数据-付费次数 event_pay_purchase_amount Double 应用下载数据-付费金额 event_pay_roi Double 应用下载数据-ROI event_register Long 应用下载数据-注册数 event_register_cost Double 应用下载数据-注册成本 event_register_ratio Double 应用下载数据-注册率 event_jin_jian_app Long 应用下载数据-完件数 event_jin_jian_app_cost Double 应用下载数据-完件成本 event_credit_grant_app Long 应用下载数据-授信数 event_credit_grant_app_cost Double 应用下载数据-授信成本 event_credit_grant_app_ratio Double 应用下载数据-授信率 event_order_paid Long 应用下载数据-付款成功数 event_order_paid_purchase_amount Double 应用下载数据-付款成功金额 event_order_paid_cost Double 应用下载数据-单次付款成本 form_count Long 落地页数据-线索提交个数 form_cost Double 落地页数据-单个线索成本 form_action_ratio Double 落地页数据-表单提交点击率 event_jin_jian_landing_page Long 落地页数据-落地页完件数 event_jin_jian_landing_page_cost Double 落地页数据-落地页完件成本 event_credit_grant_landing_page Long 落地页数据-落地页授信数 event_credit_grant_landing_page_cost Double 落地页数据-落地页授信成本 event_credit_grant_landing_ratio Double 落地页数据-落地页授信率 event_next_day_stay_cost Double 应用下载数据-次留成本（仅支持分日查询） event_next_day_stay_ratio Double 应用下载数据-次留率（仅支持分日查询） event_next_day_stay Long 应用下载数据-次留数（仅支持分日查询） play_3s_ratio Double 字段描述，需要修改 event_valid_clues Long 落地页数据-有效线索数 event_valid_clues_cost Double 落地页数据-有效线索成本 ad_product_cnt Long 商品成交数 event_goods_view Long 商品访问数 merchant_reco_fans Long 涨粉量 event_order_amount_roi Double 小店推广roi event_goods_view_cost Double 商品访问成本 merchant_reco_fans_cost Double 涨粉成本 event_new_user_pay Long 新增付费人数 event_new_user_pay_cost Double 新增付费人数成本 event_new_user_pay_ratio Double 新增付费人数率 event_button_click Long 按钮点击数 event_button_click_cost Double 按钮点击成本 event_button_click_ratio Double 按钮点击率 play_5s_ratio Double 5s播放率 play_end_ratio Double 完播率 event_order_paid_roi Double 订单支付率 event_new_user_jinjian_app Long 新增完件人数 event_new_user_jinjian_app_cost Double 新增完件人数成本 event_new_user_jinjian_app_roi Double 新增完件人数率 event_new_user_credit_grant_app Long 新增授信人数 event_new_user_credit_grant_app_cost Double 新增授信人数成本 event_new_user_credit_grant_app_roi Double 新增授信人数率 event_new_user_jinjian_page Long 字段描述，需要修改 event_new_user_jinjian_page_cost Double 字段描述，需要修改 event_new_user_jinjian_page_roi Double 字段描述，需要修改 event_new_user_credit_grant_page Long 字段描述，需要修改 event_new_user_credit_grant_page_cost Double 字段描述，需要修改 event_new_user_credit_grant_page_roi Double 字段描述，需要修改 event_appoint_form Long 预约表单数 event_appoint_form_cost Double 预约表单点击成本 event_appoint_form_ratio Double 预约表单点击率 event_appoint_jump_click Long 预约跳转点击数 event_appoint_jump_click_cost Double 预约跳转点击成本 event_appoint_jump_click_ratio Double 预约跳转点击率 union_event_pay_purchase_amount_7d Double 联盟广告收入 union_event_pay_purchase_amount_7d_roi Double 联盟变现ROI event_dsp_gift_form Long 附加组件表单提交 event_app_invoked Long 唤醒应用数 event_app_invoked_cost Double 唤醒应用成本 event_app_invoked_ratio Double 唤醒应用率 event_add_wechat Long 微信复制数 event_add_wechat_cost Double 微信复制成本 event_add_wechat_ratio Double 微信复制率 event_multi_conversion Long 落地页多转化次数 event_multi_conversion_ratio Double 落地页多转化率 event_multi_conversion_cost Double 落地页多转化成本 event_watch_app_ad Long 广告观看 event_ad_watch_times Long 广告观看次数 event_ad_watch_times_ratio Double 广告观看次数转化率 event_ad_watch_times_cost Double 广告观看次数成本 event_add_shopping_cart Long 添加购物车数 event_add_shopping_cart_cost Double 添加购物车成本 event_get_through Long 智能电话-确认接通数 event_get_through_cost Double 智能电话-确认接通成本 event_get_through_ratio Double 智能电话-确认接通率 ad_photo_played_75percent_ratio Double 75%进度播放率 ad_photo_played_10s_ratio Double 10s播放率 ad_photo_played_2s_ratio Double 2s播放率 event_phone_get_through Long 电话建联数 event_intention_confirmed Long 意向确认数 event_wechat_connected Long 微信加粉数 event_order_successed Long 有效线索成交数 event_phone_card_activate Long 电话卡激活数 event_measurement_house Long 量房数 ad_show Double 广告曝光 action_new_ratio Double 行为率 新 event_outbound_call Long 电话拨打数 event_outbound_call_cost Double 电话拨打成本 event_outbound_call_ratio Double 电话拨打率 key_action Long 关键行为数 key_action_cost Double 关键行为成本 key_action_ratio Double 关键行为率 event_credit_card_recheck Long 信用卡核卡数 event_credit_card_recheck_first_day Long 信用卡首日核卡数 event_no_intention Long 用户无意向数 word String 关键词文本 trigger_type Integer 触发方式：1:精确匹配,2:短语匹配,3:广泛匹配 query String 搜索词 word_info_id Long 关键词ID unit_id Long 单元id unit_name String 单元名称 campaign_id Long 计划id campaign_name String 计划名称
```
