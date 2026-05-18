---
title: 程序化落地页报表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2621&menuId=3345
doc_id: kuaishou_2621
source_id: kuaishou_2621
---
# 程序化落地页报表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2621 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:30:16.808Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/page/report/detail |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID（注：非账户快手 ID） | 在获取 accessToken 时返回 |
| start_date | String |  |  | 开始时间 | 过滤筛选条件，格式 yyyy-MM-dd |
| end_date | String |  |  | 结束时间 | 过滤筛选条件，格式 yyyy-MM-dd |
| report_dims | Integer |  |  | 广告场景 | "adScene"：按广告场景；"placementType"：按广告范围，快手/联盟;不传/传空/传空数组：不限 |
| page | Integer |  |  | 请求页码 | 请求的页码，默认为 1 |
| page_size | Integer |  |  | 请求行数 | 每页行数，默认为 20，最大支持 1000 |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id":124345,
    "report_dims":["ad_scene"],
    "start_date":"2021-11-01",
    "end_date":"2021-11-19",
    "page":1,
    "page_size":2
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码/错误码 |  |
| message | String |  |  | 返回信息/错误信息 |  |
| data | GatewayPageReportResult |  |  | 返回数据 |  |
| - total_count | Integer |  |  | 数据的总行数 |  |
| - details | GatewayProgramPageReportView[] |  |  | 数据明细信息 |  |
| - report_date | String |  |  | 日期,yyyy-MM-dd |  |
| - report_hour | Integer |  |  | 小时 |  |
| - view_status | Integer |  |  | 状态值 |  |
| - view_status_reason | String |  |  | 状态描述 |  |
| - total_charge | Long |  |  | 总消费 |  |
| - impression | Long |  |  | 封面曝光数 |  |
| - click | Long |  |  | 素材曝光数 |  |
| - photo_click | Long |  |  | 封面点击数 |  |
| - actionbar_click | Long |  |  | 行为数 |  |
| - played_three_seconds | Long |  |  | 有效播放数 |  |
| - played_five_seconds | Long |  |  | 播放5s |  |
| - likes | Long |  |  | 点赞数 |  |
| - negative | Double |  |  | 减少此类作品数 |  |
| - played_end | Long |  |  | 播放完成 |  |
| - cancel_like | Long |  |  | 取消点赞数 |  |
| - comment | Long |  |  | 评论数 |  |
| - follow | Long |  |  | 新增关注数 |  |
| - share | Long |  |  | 分享数 |  |
| - report | Long |  |  | 举报数 |  |
| - unfollow | Long |  |  | 取消关注数 |  |
| - block | Long |  |  | 拉黑数 |  |
| - form_count | Long |  |  | 表单提交数 |  |
| - conversion | Long |  |  | 激活数 |  |
| - download_completed | Long |  |  | 安卓下载完成数 |  |
| - download_started | Long |  |  | 安卓开始下载数 |  |
| - download_installed | Long |  |  | 安卓安装完成数 |  |
| - event_pay_first_day | Long |  |  | 首日付费次数 |  |
| - event_pay_purchase_amount_first_day | Double |  |  | 激活当日付费金额 |  |
| - event_pay | Long |  |  | 付费次数 |  |
| - event_pay_purchase_amount | Double |  |  | 付费金额 |  |
| - event_register | Long |  |  | 注册数 |  |
| - event_next_day_stay | Long |  |  | 次日留存数 |  |
| - event_jinjian_app | Long |  |  | App完件数 |  |
| - event_credit_grant_app | Long |  |  | App授信数 |  |
| - event_jinjian_landing_page | Long |  |  | 落地页完件数 |  |
| - event_credit_grant_landing_page | Long |  |  | 落地页授信数 |  |
| - event_order_paid | Long |  |  | 订单支付数 |  |
| - event_order_paid_purchase_amount | Double |  |  | 订单成交金额 |  |
| - event_order_submit | Long |  |  | 提交订单数 |  |
| - event_add_shopping_cart | Long |  |  | 添加购物车数 |  |
| - approx_pay_count | Long |  |  | 近似购买数 |  |
| - event_conversion_click | Long |  |  | 有效咨询数 |  |
| - event_add_wechat | Long |  |  | 微信调起数 |  |
| - event_making_calls | Long |  |  | 电话拨打数 |  |
| - event_multi_conversion | Long |  |  | 落地页多转化次数 |  |
| - event_watch_app_ad | Long |  |  | 当日APP内广告观看总次数 |  |
| - event_ad_watch_times | Long |  |  | 当日APP内广告观看次数达到5次的人数 |  |
| - event_phone_get_through | Long |  |  | 电话建联数 |  |
| - event_intention_confirmed | Long |  |  | 意向确认数 |  |
| - event_wechat_connected | Long |  |  | 微信加粉数 |  |
| - event_order_successed | Long |  |  | 有效线索成交数 |  |
| - event_phone_card_activate | Long |  |  | 电话卡激活数 |  |
| - event_measurement_house | Long |  |  | 量房数 |  |
| - click_ratio | Double |  |  | 点击率 |  |
| - photo_click_ratio | Double |  |  | 封面点击率 |  |
| - play3s_ratio | Double |  |  | 3s播放率 |  |
| - action_ratio | Double |  |  | 素材点击率 |  |
| - play3s_action_ratio | Double |  |  | 有效播放行为率 |  |
| - download_started_ratio | Double |  |  | 安卓下载开始率 |  |
| - download_completed_ratio | Double |  |  | 安卓下载完成率 |  |
| - download_conversion_ratio | Double |  |  | 下载完成激活率 |  |
| - click_conversion_ratio | Double |  |  | 点击激活率 |  |
| - form_action_ratio | Double |  |  | 表单提交率 |  |
| - form_cost | Double |  |  | 表单提交单价 |  |
| - impression1k_cost | Double |  |  | 平均千次封面曝光花费 |  |
| - click1k_cost | Double |  |  | 平均千次素材曝光花费 |  |
| - play3s_cost | Double |  |  | 平均有效播放单价 |  |
| - photo_click_cost | Double |  |  | 平均封面点击单价 |  |
| - click_cost | Double |  |  | 单次点击成本 |  |
| - action_cost | Double |  |  | 平均行为单价 |  |
| - conversion_cost | Double |  |  | 激活单价 |  |
| - download_started_cost | Double |  |  | 安卓下载开始单价 |  |
| - download_completed_cost | Double |  |  | 安卓下载完成单价 |  |
| - event_pay_first_day_roi | Double |  |  | 激活当日ROI |  |
| - event_pay_roi | Double |  |  | 付费ROI |  |
| - event_register_cost | Double |  |  | 注册成本 |  |
| - event_register_ratio | Double |  |  | 注册率 |  |
| - event_next_day_stay_cost | Double |  |  | 次日留存成本 |  |
| - event_next_day_stay_ratio | Double |  |  | 次日留存率 |  |
| - event_jinjian_app_cost | Double |  |  | App完件成本 |  |
| - event_credit_grant_app_cost | Double |  |  | App授信成本 |  |
| - event_credit_grant_app_ratio | Double |  |  | App授信率 |  |
| - event_jinjian_landing_page_cost | Double |  |  | 落地页完件成本 |  |
| - event_credit_grant_landing_page_cost | Double |  |  | 落地页授信成本 |  |
| - event_credit_grant_landing_page_ratio | Double |  |  | 落地页授信率 |  |
| - event_order_paid_cost | Double |  |  | 订单支付成本 |  |
| - approx_pay_ratio | Double |  |  | 近似购买率 |  |
| - approx_pay_cost | Double |  |  | 近似购买成本 |  |
| - event_pay_first_day_cost | Double |  |  | 首日付费次数成本 |  |
| - event_pay_cost | Double |  |  | 付费次数成本 |  |
| - event_order_submit_cost | Double |  |  | 提交订单成本 |  |
| - event_add_shopping_cart_cost | Double |  |  | 添加购物车成本 |  |
| - event_credit_grant_first_day_app | Long |  |  | app首日授信数 |  |
| - event_credit_grant_first_day_landing_page | Long |  |  | 落地页首日授信数 |  |
| - event_credit_grant_first_day_app_cost | Double |  |  | app首日授信成本 |  |
| - event_credit_grant_first_day_app_ratio | Double |  |  | app首日授信率 |  |
| - event_credit_grant_first_day_landing_page_cost | Double |  |  | 落地页首日授信成本 |  |
| - event_credit_grant_first_day_landing_page_ratio | Double |  |  | 落地页首日授信率 |  |
| - event_new_user_pay | Long |  |  | 新增付费人数 |  |
| - event_landingpage_started_download_click | Long |  |  | 开始下载 |  |
| - event_valid_clues | Long |  |  | 有效线索数 |  |
| - event_valid_clue_cost | Double |  |  | 有效线索成本 |  |
| - ad_product_cnt | Long |  |  | 商品成交数 |  |
| - event_goods_view | Long |  |  | 商品访问数 |  |
| - merchant_reco_fans | Long |  |  | 涨粉数 |  |
| - event_order_amount_roi | Double |  |  | 小店推广roi |  |
| - event_goods_view_cost | Double |  |  | 商品访问成本 |  |
| - merchant_reco_fans_cost | Double |  |  | 涨粉成本 |  |
| - event_new_user_pay_cost | Double |  |  | 新增付费人数成本 |  |
| - event_new_user_pay_ratio | Double |  |  | 新增付费人数率 |  |
| - event_button_click | Long |  |  | 按钮点击数 |  |
| - event_button_click_cost | Double |  |  | 按钮点击成本 |  |
| - event_button_click_ratio | Double |  |  | 按钮点击率 |  |
| - play5s_ratio | Double |  |  | 5s播放率 |  |
| - play_end_ratio | Double |  |  | 完播率 |  |
| - event_order_paid_roi | Double |  |  | 订单支付率 |  |
| - event_new_user_jinjian_app | Long |  |  | 新增完件人数 |  |
| - event_new_user_jinjian_app_cost | Double |  |  | 新增完件人数成本 |  |
| - event_new_user_jinjian_app_roi | Double |  |  | 新增完件人数率 |  |
| - event_new_user_credit_grant_app | Long |  |  | 新增授信人数 |  |
| - event_new_user_credit_grant_app_cost | Double |  |  | 新增授信人数成本 |  |
| - event_new_user_credit_grant_app_roi | Double |  |  | 新增授信人数率 |  |
| - event_new_user_jinjian_page | Long |  |  | 落地页新增完件人数 |  |
| - event_new_user_jinjian_page_cost | Double |  |  | 落地页新增完件人数成本 |  |
| - event_new_user_jinjian_page_roi | Double |  |  | 落地页新增完件人数率 |  |
| - event_new_user_credit_grant_page | Long |  |  | 落地页新增授信人数 |  |
| - event_new_user_credit_grant_page_cost | Double |  |  | 落地页新增授信人数成本 |  |
| - event_new_user_credit_grant_page_roi | Double |  |  | 落地页新增授信人数率 |  |
| - event_making_calls_cost | Double |  |  | 电话拨打成本 |  |
| - event_making_calls_ratio | Double |  |  | 电话拨打率 |  |
| - event_conversion_click_cost | Double |  |  | 有效咨询成本 |  |
| - event_conversion_click_ratio | Double |  |  | 有效咨询率 |  |
| - event_add_wechat_cost | Double |  |  | 微信调起成本 |  |
| - event_add_wechat_ratio | Double |  |  | 微信调起率 |  |
| - live_played3s | Long |  |  | 直播观看3秒数 |  |
| - live_play3s_cost | Double |  |  | 直播观看3秒成本 |  |
| - live_reco_fans_ratio | Double |  |  | 直播涨粉率 |  |
| - live_event_goods_view | Long |  |  | 直播间商品点击数 |  |
| - live_event_goods_view_cost | Double |  |  | 直播间商品点击成本 |  |
| - live_event_goods_view_ratio | Double |  |  | 直播间商品点击率 |  |
| - live_event_order_paid_roi | Double |  |  | 直播订单支付率 |  |
| - event_appoint_form | Long |  |  | 预约表单数 |  |
| - event_appoint_form_cost | Double |  |  | 预约表单点击成本 |  |
| - event_appoint_form_ratio | Double |  |  | 预约表单点击率 |  |
| - event_appoint_jump_click | Long |  |  | 预约跳转点击数 |  |
| - event_appoint_jump_click_cost | Double |  |  | 预约跳转点击成本 |  |
| - event_appoint_jump_click_ratio | Double |  |  | 预约跳转点击率 |  |
| - union_event_pay_purchase_amount7d | Double |  |  | 联盟广告收入 |  |
| - union_event_pay_purchase_amount7d_roi | Double |  |  | 联盟变现ROI |  |
| - event_dsp_gift_form | Long |  |  | 附加组件表单提交 |  |
| - event_app_invoked | Long |  |  | 唤醒应用数 |  |
| - event_app_invoked_cost | Double |  |  | 唤醒应用成本 |  |
| - event_app_invoked_ratio | Double |  |  | 唤醒应用率 |  |
| - event_multi_conversion_ratio | Double |  |  | 落地页多转化率 |  |
| - event_multi_conversion_cost | Double |  |  | 落地页多转化成本 |  |
| - event_ad_watch_times_cost | Double |  |  | 广告观看次数成本 |  |
| - event_ad_watch_times_ratio | Double |  |  | 广告观看次数转化率 |  |
| - event_get_through | Long |  |  | 智能电话-确认接通数 |  |
| - event_get_through_cost | Double |  |  | 智能电话-确认接通成本 |  |
| - event_get_through_ratio | Double |  |  | 智能电话-确认接通率 |  |
| - event_ad_watch5_times | Long |  |  | 5次广告广告观看数 |  |
| - event_ad_watch5_times_cost | Double |  |  | 5次广告观看成本 |  |
| - event_ad_watch5_times_ratio | Double |  |  | 5次广告观看转化率 |  |
| - event_ad_watch10_times | Long |  |  | 10次广告广告观看数 |  |
| - event_ad_watch10_times_cost | Double |  |  | 10次广告观看成本 |  |
| - event_ad_watch10_times_ratio | Double |  |  | 10次广告观看转化率 |  |
| - event_ad_watch20_times | Long |  |  | 20次广告广告观看数 |  |
| - event_ad_watch20_times_cost | Double |  |  | 20次广告观看成本 |  |
| - event_ad_watch20_times_ratio | Double |  |  | 20次广告观看转化率 |  |
| - event_consultation_valid_retained | Long |  |  | 留资咨询数 |  |
| - event_pre_component_consultation_valid_retained | Long |  |  | 附加咨询组件留资咨询数 |  |
| - event_consultation_valid_retained_cost | Double |  |  | 留咨咨询成本 |  |
| - event_consultation_valid_retained_ratio | Double |  |  | 留咨咨询率 |  |
| - conversion_num | Long |  |  | 转化数(回传时间) |  |
| - deep_conversion_num | Long |  |  | 深度转化数(回传时间) |  |
| - conversion_num_by_impression7d | Long |  |  | 转化数(计费时间) |  |
| - deep_conversion_num_by_impression7d | Long |  |  | 深度转化数(计费时间) |  |
| - conversion_num_cost | Double |  |  | 转化成本(回传时间) |  |
| - conversion_ratio | Double |  |  | 转化率(回传时间) |  |
| - deep_conversion_cost | Double |  |  | 深度转化成本(回传时间) |  |
| - deep_conversion_ratio | Double |  |  | 深度转化率(回传时间) |  |
| - conversion_cost_by_impression7d | Double |  |  | 转化成本(计费时间) |  |
| - conversion_ratio_by_impression7d | Double |  |  | 转化率(计费时间) |  |
| - deep_conversion_cost_by_impression7d | Double |  |  | 深度转化成本(计费时间) |  |
| - deep_conversion_ratio_by_impression7d | Double |  |  | 深度转化率(计费时间) |  |
| - ad_photo_played75percent | Long |  |  | 75%进度播放数 |  |
| - ad_photo_played10s | Long |  |  | 10s播放数 |  |
| - ad_photo_played2s | Long |  |  | 2s播放数 |  |
| - ad_photo_played75percent_ratio | Double |  |  | 75%进度播放率 |  |
| - ad_photo_played10s_ratio | Double |  |  | 10s播放率 |  |
| - ad_photo_played2s_ratio | Double |  |  | 2s播放率 |  |
| - event_wechat_qr_code_link_click | Long |  |  | 微信小程序深度加粉数 |  |
| - event_pay_weighted_purchase_amount | Double |  |  | eventPayWeightedPurchaseAmount |  |
| - event_pay_weighted_purchase_amount_first_day | Double |  |  | eventPayWeightedPurchaseAmountFirstDay |  |
| - event_pay_weighted_roi | Double |  |  | 付费ROI |  |
| - event_pay_first_day_weighted_roi | Double |  |  | 首日付费ROI |  |
| - event_pay_week_by_conversion | Long |  |  | 7日付费次数 |  |
| - event_pay_week_by_conversion_cost | Double |  |  | 7日付费次数成本 |  |
| - event_pay_purchase_amount_three_day_by_conversion | Double |  |  | 激活后三日付费金额 |  |
| - event_pay_purchase_amount_week_by_conversion | Double |  |  | 激活后七日付费金额 |  |
| - event_three_day_stay_by_conversion | Long |  |  | 3日留存数 |  |
| - event_week_stay_by_conversion | Long |  |  | 7日留存数 |  |
| - event_pay_purchase_amount_three_day_by_conversion_roi | Double |  |  | 激活后3日ROI |  |
| - event_pay_purchase_amount_week_by_conversion_roi | Double |  |  | 激活后7日ROI |  |
| - event_three_day_stay_by_conversion_cost | Double |  |  | 3日留存成本 |  |
| - event_three_day_stay_by_conversion_ratio | Double |  |  | 3日留存率 |  |
| - event_week_stay_by_conversion_cost | Double |  |  | 7日留存成本 |  |
| - event_week_stay_by_conversion_ratio | Double |  |  | 7日留存率 |  |
| - ad_show | Long |  |  | 曝光数 |  |
| - thousand_show_cost | Double |  |  | 平均千次广告曝光花费(元) |  |
| - event_outbound_call | Long |  |  | 电话拨打数 |  |
| - event_outbound_call_cost | Double |  |  | 电话拨打成本 |  |
| - event_outbound_call_ratio | Double |  |  | 电话拨打率 |  |
| - action_new_ratio | Double |  |  | 行为率(新) |  |
| - key_action | Long |  |  | 关键行为数 |  |
| - key_action_cost | Double |  |  | 关键行为成本 |  |
| - key_action_ratio | Double |  |  | 关键行为率 |  |
| - event_pay_purchase_amount_one_day_by_conversion | Double |  |  | 激活后24小时付费金额 |  |
| - event_pay_purchase_amount_one_day_by_conversion_roi | Double |  |  | 激活后24小时付费ROI |  |
| - report_date_hour | String |  |  | 2021-08-10 00:00 |  |
| - page_id | String |  |  | 页面ID |  |
| - page_url | String |  |  | 页面URL |  |
| - page_name | String |  |  | 页面名称 |  |
| - group_id | String |  |  | 页面组ID |  |
| - group_type | Integer |  |  | 组类型 |  |
| - group_name | String |  |  | 组名称 |  |
| - img_cover_url | String |  |  | 落地页截图URL |  |
| - ad_scene | String |  |  | 投放场景 |  |
| - placement_type | String |  |  | 投放位置 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "total_count": 1,
        "details": [
            {
                "event_register_cost": 0.0,
                "approx_pay_ratio": 0.04,
                "event_credit_grant_app_cost": 0.0,
                "event_order_submit_cost": 0.0,
                "event_new_user_jinjian_page_cost": 0.0,
                "event_order_successed": 0,
                "photo_click": 0,
                "event_ad_watch20_times_cost": 0.0,
                "event_ad_watch10_times_cost": 0.0,
                "event_ad_watch10_times": 0,
                "event_valid_clues": 0,
                "event_pre_component_consultation_valid_retained": 0,
                "group_name": "程序化组的名称",
                "event_order_amount_roi": 0.0,
                "approx_pay_count": 76,
                "total_charge": 3,
                "click": 3,
                "deep_conversion_ratio_by_impression7d": 0.0,
                "event_button_click": 0,
                "download_completed": 0,
                "key_action_cost": 0.0,
                "event_conversion_click_ratio": 0.0,
                "download_installed": 0,
                "event_credit_grant_first_day_app_cost": 0.0,
                "event_next_day_stay": 0,
                "event_order_submit": 0,
                "union_event_pay_purchase_amount7d": 0.0,
                "event_ad_watch_times_ratio": 0.0,
                "event_outbound_call_cost": 0.0,
                "event_appoint_form_ratio": 0.0,
                "event_making_calls_cost": 0.0,
                "event_button_click_cost": 0.0,
                "live_played3s": 0,
                "photo_click_ratio": 0.0,
                "event_outbound_call": 0,
                "photo_click_cost": 0.0,
                "event_get_through_cost": 0.0,
                "download_completed_ratio": 0.0,
                "ad_photo_played10s": 0,
                "event_new_user_jinjian_page_roi": 0.0,
                "event_new_user_jinjian_app": 0,
                "conversion_ratio_by_impression7d": 0.04242819843342036,
                "download_started": 0,
                "play_end_ratio": 0.04313877744704715,
                "event_ad_watch5_times_cost": 0.0,
                "event_pay": 0,
                "action_cost": 5.125501958224543,
                "event_credit_grant_landing_page_cost": 0.0,
                "event_credit_grant_first_day_landing_page_cost": 0.0,
                "event_credit_grant_first_day_app": 0,
                "cancel_like": 45,
                "conversion_cost": 0.0,
                "event_pay_purchase_amount_three_day_by_conversion": 0.0,
                "page_url": "https://www.abc",
                "event_three_day_stay_by_conversion": 0,
                "event_get_through": 0,
                "group_type": 0,
                "event_pay_purchase_amount_three_day_by_conversion_roi": 0.0,
                "key_action_ratio": 0.0,
                "event_three_day_stay_by_conversion_cost": 0.0,
                "event_ad_watch_times_cost": 0.0,
                "event_add_shopping_cart": 0,
                "page_name": "pageName",
                "event_appoint_form_cost": 0.0,
                "click_conversion_ratio": 0.0,
                "event_appoint_form": 0,
                "conversion_num_by_impression7d": 65,
                "event_order_paid_purchase_amount": 0.0,
                "event_credit_grant_landing_page": 0,
                "deep_conversion_num_by_impression7d": 0,
                "event_new_user_credit_grant_page_cost": 0.0,
                "event_pay_purchase_amount_week_by_conversion": 0.0,
                "report_date": "2021-11-18",
                "event_consultation_valid_retained_ratio": 0.0,
                "event_multi_conversion": 0,
                "event_appoint_jump_click_cost": 0.0,
                "event_pay_first_day_cost": 0.0,
                "unfollow": 0,
                "view_status": 0,
                "img_cover_url": "https://x.jpeg",
                "event_pay_purchase_amount_one_day_by_conversion": 0.0,
                "event_jinjian_app_cost": 0.0,
                "event_get_through_ratio": 0.0,
                "event_app_invoked_ratio": 0.0,
                "ad_show": 139066,
                "download_conversion_ratio": 0.0,
                "deep_conversion_cost_by_impression7d": 0.0,
                "live_play3s_cost": 0.0,
                "page_id": "12456",
                "negative": 250.0,
                "live_event_order_paid_roi": 0.0,
                "form_count": 15.0,
                "event_measurement_house": 0,
                "play3s_ratio": 0.20021195519318985,
                "event_new_user_pay_cost": 0.0,
                "event_new_user_credit_grant_page": 0,
                "event_new_user_jinjian_app_cost": 0.0,
                "play3s_action_ratio": 0.034398365404046075,
                "event_week_stay_by_conversion_cost": 0.0,
                "conversion": 0,
                "event_new_user_credit_grant_page_roi": 0.0,
                "event_pay_week_by_conversion": 0,
                "event_credit_grant_landing_page_ratio": 0.0,
                "event_pay_first_day_weighted_roi": 0.0,
                "event_credit_grant_app": 0,
                "deep_conversion_num": 0,
                "live_event_goods_view_cost": 0.0,
                "group_id": "20345",
                "event_ad_watch_times": 0,
                "action_ratio": 0.019014767841479372,
                "conversion_ratio": 0.0,
                "event_pay_purchase_amount_first_day": 0.0,
                "comment": 44,
                "event_order_paid_cost": 0.0,
                "event_appoint_jump_click_ratio": 0.0,
                "event_pay_first_day": 0,
                "placement_type": "全部",
                "conversion_num_cost": 124.37336923076924,
                "event_new_user_pay_ratio": 0.0,
                "event_pay_week_by_conversion_cost": 0.0,
                "event_week_stay_by_conversion_ratio": 0.0,
                "event_new_user_credit_grant_app": 0,
                "report_date_hour": "2021-11-11 00:00",
                "impression1k_cost": 150003.8333333333,
                "event_order_paid": 0,
                "event_pay_roi": 0.0,
                "event_goods_view_cost": 0.0,
                "event_pay_purchase_amount_one_day_by_conversion_roi": 0.0,
                "block": 1,
                "ad_photo_played75percent_ratio": 0.047789610744431506,
                "event_ad_watch20_times": 0,
                "event_app_invoked": 0,
                "event_valid_clue_cost": 0.0,
                "event_ad_watch5_times": 0,
                "event_conversion_click": 0,
                "impression": 6,
                "event_add_shopping_cart_cost": 0.0,
                "event_pay_weighted_purchase_amount_first_day": 0.0,
                "event_credit_grant_first_day_landing_page_ratio": 0.0,
                "played_end": 8000,
                "report_hour": 0,
                "event_credit_grant_app_ratio": 0.0,
                "actionbar_click": 1,
                "event_jinjian_landing_page_cost": 0.0,
                "event_week_stay_by_conversion": 0,
                "played_three_seconds": 1,
                "event_three_day_stay_by_conversion_ratio": 0.0,
                "share": 11,
                "action_new_ratio": 0.021016351947995915,
                "event_watch_app_ad": 0,
                "event_register": 0,
                "event_multi_conversion_cost": 0.0,
                "play5s_ratio": 0.13398990552607738,
                "event_consultation_valid_retained": 0,
                "event_new_user_credit_grant_app_roi": 0.0,
                "event_new_user_credit_grant_app_cost": 0.0,
                "event_phone_card_activate": 0,
                "event_ad_watch5_times_ratio": 0.0,
                "event_new_user_pay": 0,
                "event_consultation_valid_retained_cost": 0.0,
                "ad_photo_played2s": 61230,
                "live_event_goods_view_ratio": 0.0,
                "report": 13,
                "event_ad_watch20_times_ratio": 0.0,
                "played_five_seconds": 29763,
                "merchant_reco_fans": 0,
                "event_add_wechat_ratio": 0.0,
                "event_appoint_jump_click": 0,
                "event_button_click_ratio": 0.0,
                "event_wechat_qr_code_link_click": 0,
                "ad_scene": "全部",
                "conversion_cost_by_impression7d": 90.37336943076924,
                "event_pay_first_day_roi": 0.0,
                "event_pay_cost": 0.0,
                "live_reco_fans_ratio": 0.0,
                "deep_conversion_ratio": 0.0,
                "deep_conversion_cost": 0.0,
                "likes": 589,
                "event_order_paid_roi": 0.0,
                "event_add_wechat_cost": 0.0,
                "event_app_invoked_cost": 0.0,
                "event_register_ratio": 0.0,
                "key_action": 0,
                "approx_pay_cost": 133.47722368421053,
                "merchant_reco_fans_cost": 0.0,
                "play3s_cost": 0.2907072546422076,
                "event_wechat_connected": 0,
                "event_jinjian_landing_page": 0,
                "form_action_ratio": 0.04242819843342036,
                "event_dsp_gift_form": 0,
                "event_making_calls": 0,
                "event_new_user_jinjian_page": 0,
                "ad_product_cnt": 0,
                "form_cost": 1344.3733692307692,
                "event_intention_confirmed": 0,
                "event_phone_get_through": 0,
                "event_credit_grant_first_day_landing_page": 0,
                "event_pay_weighted_roi": 0.0,
                "download_completed_cost": 0.0,
                "ad_photo_played10s_ratio": 0.0,
                "event_pay_purchase_amount": 0.0,
                "event_add_wechat": 0,
                "event_making_calls_ratio": 0.0,
                "download_started_ratio": 0.0,
                "conversion_num": 99,
                "event_goods_view": 0,
                "event_landingpage_started_download_click": 0,
                "download_started_cost": 0.0,
                "event_credit_grant_first_day_app_ratio": 0.0,
                "event_new_user_jinjian_app_roi": 0.0,
                "event_outbound_call_ratio": 0.0,
                "follow": 3,
                "event_pay_purchase_amount_week_by_conversion_roi": 0.0,
                "thousand_show_cost": 0.48068542993974,
                "ad_photo_played2s_ratio": 0.44023122384711616,
                "event_jinjian_app": 0,
                "event_ad_watch10_times_ratio": 0.0,
                "click1k_cost": 2.47098198237062,
                "event_conversion_click_cost": 0.0,
                "live_event_goods_view": 0,
                "ad_photo_played75percent": 9
            }
        ]
    },
    "message": "OK",
    "request_id": "05d26f2e5f0e4xdddddddddddd"
}
```
