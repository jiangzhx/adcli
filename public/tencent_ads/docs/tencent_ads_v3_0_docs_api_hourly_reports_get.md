---
title: 获取小时报表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/hourly_reports/get
doc_id: tencent_ads_v3_0_docs_api_hourly_reports_get
source_id: tencent_ads_v3_0_docs_api_hourly_reports_get
---
# 获取小时报表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_insights |
| --- | --- |
| 请求地址 | hourly_reports/get |
| 请求方法 | GET |

## 全局参数

全局参数是指每一个接口都需要使用到的参数。详情[参考](https://developers.e.qq.com/v3.0/pages/send_request)，代码案例[参考](https://developers.e.qq.com/v3.0/pages/send_request)。

| 参数名称 | 参数类型 |
| --- | --- |
| access_token | 授权令牌，完成 OAuth 2.0 授权后获得，参考[授权认证](https://developers.e.qq.com/docs/start/authorization)章节 |
| timestamp | 当前的时间戳，单位为秒，允许客户端请求最大时间误差为 300 秒。 MarketingAPI 所使用的时间戳，若无特殊说明，均为秒级时间戳 MarketingAPI 所使用的时区为 GMT+8，例如当时间戳为 1494840119 时，表示 2017-05-15 17:21:59 |
| nonce | 随机字串标识，不超过 32 个字符，由调用方自行生成，需保证全局唯一性 |

## 请求参数

标有*的参数为必填项

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| level* | enum | 获取报表类型级别，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_report_hourly_level) 可选值：{ REPORT_LEVEL_ADVERTISER, REPORT_LEVEL_ADGROUP, REPORT_LEVEL_DYNAMIC_CREATIVE, REPORT_LEVEL_CHANNEL, REPORT_LEVEL_BIDWORD, REPORT_LEVEL_PROJECT, REPORT_LEVEL_PROJECT_CREATIVE, REPORT_LEVEL_VIDEO_HIGHLIGHT } |
| date_range* | struct | 日期范围，最多支持查询 90 天内的数据查询，支持的最长查询跨度为 1 天 |
| start_date* | string | 开始日期，日期格式：YYYY-MM-DD，且等于 end_date 字段长度为 10 字节 |
| end_date* | string | 结束日期，日期格式：YYYY-MM-DD，且等于 begin_date 字段长度为 10 字节 |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 40 |
| field* | string | 过滤字段 可选值：{ adgroup_id, dynamic_creative_id, component_id, bidword_id, channel_id, component_type, image_id, video_id } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 adgroup_id 时，可选值：{ EQUALS, IN } 当 field 取值 dynamic_creative_id 时，可选值：{ EQUALS, IN } 当 field 取值 component_id 时，可选值：{ EQUALS, IN } 当 field 取值 component_type 时，可选值：{ EQUALS, IN } 当 field 取值 channel_id 时，可选值：{ EQUALS, IN } 当 field 取值 bidword_id 时，可选值：{ EQUALS, IN } 当 field 取值 image_id 时，可选值：{ EQUALS, IN } 当 field 取值 video_id 时，可选值：{ EQUALS, IN } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 100 字段长度最大 64 字节 |
| group_by* | string[] | 聚合参数，例：["date"]，见 [\[聚合规则\]](https://developers.e.qq.com/v3.0/pages/ad_insights) 数组最小长度 1，最大长度 10 字段长度最大 64 字节 |
| order_by | struct[] | 排序字段 数组最小长度 1，最大长度 2 |
| sort_field* | string | 排序字段 |
| sort_type* | enum | 排序方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#sorted) 可选值：{ ASCENDING, DESCENDING } |
| time_line | enum | 时间口径，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#time_line) 可选值：{ REQUEST_TIME, REPORTING_TIME, ACTIVE_TIME } |
| page | integer | 搜索页码 最小值 1，最大值 100 默认值：1 |
| page_size | integer | 一页显示的数据条数，默认值：10。最小值 1，最大值 2000 默认值：10 |
| fields* | string[] | 指定返回的字段列表 数组最小长度 1，最大长度 1024 字段长度最小 1 字节，长度最大 64 字节 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/hourly_reports/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'filtering=[
    {
        "operator": "IN",
        "field": "adgroup_id"
    }
]' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'level=REPORT_LEVEL_ADGROUP' \
-d 'page_size=10' \
-d 'date_range={
    "start_date": "2024-01-02",
    "end_date": "2024-01-01"
}' \
-d 'page=1'
curl -v -G 'https://api.e.qq.com/v3.0/hourly_reports/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'filtering=[
    {
        "operator": "IN",
        "field": "adgroup_id"
    }
]' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'level=REPORT_LEVEL_ADGROUP' \
-d 'page_size=10' \
-d 'date_range={
    "start_date": "2024-01-02",
    "end_date": "2024-01-01"
}' \
-d 'page=1'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| page_info | struct | 分页配置信息 |
| page | integer | 搜索页码 默认值：1 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "account_id": 25610,
                "activated_cost": 4978,
                "activated_count": 6,
                "activated_rate": 0.8571,
                "add_desktop_cost": 0,
                "add_desktop_pv": 0,
                "add_to_cart_price": 0,
                "add_wishlist_count": 0,
                "adgroup_id": 12345678,
                "app_apply_uv": 0,
                "app_credit_uv": 0,
                "app_pre_credit_uv": 0,
                "app_withdraw_uv": 0,
                "cheout_fd": 0,
                "cheout_fd_reward": 0,
                "cheout_om": 0,
                "cheout_om_reward": 0,
                "cheout_ow": 0,
                "cheout_ow_reward": 0,
                "cheout_td": 0,
                "cheout_td_reward": 0,
                "cheout_tw": 0,
                "cheout_tw_reward": 0,
                "click_activated_rate": 0.0909,
                "click_detail_count": 7,
                "click_head_count": 7,
                "click_image_count": 49,
                "click_nick_count": 3,
                "click_poi_count": 0,
                "comment_cost": 0,
                "comment_count": 0,
                "conversions_cost": 0,
                "conversions_count": 0,
                "conversions_rate": 0,
                "cost": 29866,
                "coupon_click_count": 0,
                "coupon_get_count": 0,
                "coupon_issue_count": 0,
                "cpc": 453,
                "ctr": 0.0114,
                "date": "2024-03-26",
                "hour": 12,
                "deep_conversions_cost": 0,
                "deep_conversions_count": 0,
                "deep_conversions_rate": 0,
                "deliver_cost": 0,
                "deliver_count": 0,
                "deliver_rate": 0,
                "download_cost": 4267,
                "download_count": 7,
                "download_rate": 0.1061,
                "effect_leads_purchase_cost": 0,
                "effect_leads_purchase_count": 0,
                "effective_consult_count": 0,
                "effective_cost": 0,
                "effective_leads_count": 0,
                "effective_phone_count": 0,
                "effective_reserve_count": 0,
                "external_form_reservation_count": 0,
                "first_day_order_amount": 0,
                "first_day_order_count": 0,
                "first_pay_cost": 0,
                "first_pay_count": 0,
                "first_pay_rate": 0,
                "follow_cost": 0,
                "follow_count": 0,
                "forward_cost": 0,
                "forward_count": 0,
                "from_follow_cost": 0,
                "from_follow_uv": 0,
                "game_authorize_count": 0,
                "game_create_role_count": 0,
                "game_tutorial_finish_count": 0,
                "install_cost": 4978,
                "install_count": 6,
                "install_rate": 0.0909,
                "inte_phone_count": 0,
                "key_page_uv": 0,
                "key_page_view_cost": 0,
                "key_page_view_count": 0,
                "lan_button_click_cost": 0,
                "lan_button_click_count": 0,
                "lan_jump_button_clickers": 0,
                "leads_purchase_uv": 0,
                "lottery_leads_cost": 0,
                "lottery_leads_count": 0,
                "no_interest_count": 10,
                "order_amount": 0,
                "order_roi": 0,
                "order_unit_price": 0,
                "overall_leads_purchase_count": 0,
                "own_page_navi_cost": 0,
                "own_page_navigation_count": 0,
                "page_consult_cost": 0,
                "page_consult_count": 0,
                "page_consult_rate": 0,
                "page_phone_call_back_cost": 0,
                "page_phone_call_back_count": 0,
                "page_phone_call_back_rate": 0,
                "page_phone_call_direct_cost": 0,
                "page_phone_call_direct_count": 0,
                "page_phone_call_direct_rate": 0,
                "page_reservation_cost": 0,
                "page_reservation_count": 0,
                "page_reservation_rate": 0,
                "phone_call_count": 0,
                "phone_call_uv": 0,
                "phone_consult_count": 0,
                "platform_coupon_click_count": 0,
                "platform_page_navigation_cost": 0,
                "platform_page_navigation_count": 0,
                "platform_page_view_count": 0,
                "platform_page_view_rate": 0,
                "platform_shop_navigation_cost": 0,
                "platform_shop_navigation_count": 0,
                "potential_consult_count": 0,
                "potential_customer_phone_uv": 0,
                "potential_phone_count": 0,
                "potential_reserve_count": 0,
                "praise_cost": 0,
                "praise_count": 0,
                "read_cost": 0,
                "read_count": 0,
                "reservation_uv": 0,
                "retention_cost": 0,
                "retention_count": 0,
                "retention_rate": 0,
                "scan_follow_count": 0,
                "scan_follow_user_cost": 0,
                "scan_follow_user_count": 0,
                "scan_follow_user_rate": 0,
                "sign_in_cost": 0,
                "sign_in_count": 0,
                "special_page_exp_cost": 0,
                "special_page_exp_uv": 0,
                "thousand_display_price": 5141,
                "tool_consult_count": 0,
                "valid_click_count": 66,
                "valid_leads_uv": 0,
                "valid_phone_uv": 0,
                "valuable_click_cost": 533,
                "valuable_click_count": 56,
                "valuable_click_rate": 0.0096,
                "video_inner_play_count": 0,
                "video_outer_play100_count": 0,
                "video_outer_play10_count": 0,
                "video_outer_play25_count": 0,
                "video_outer_play3s_count": 0,
                "video_outer_play50_count": 0,
                "video_outer_play5s_count": 0,
                "video_outer_play75_count": 0,
                "video_outer_play7s_count": 0,
                "video_outer_play95_count": 0,
                "video_outer_play_cost": 0,
                "video_outer_play_count": 0,
                "video_outer_play_rate": 0,
                "video_outer_play_time_avg_rate": 0,
                "video_outer_play_time_count": 0,
                "video_play_count": 0,
                "view_commodity_page_uv": 0,
                "view_count": 5809,
                "web_apply_uv": 0,
                "web_commodity_page_view_cost": 0,
                "web_commodity_page_view_rate": 0,
                "web_credit_uv": 0,
                "web_register_uv": 0
            },
            {
                "account_id": 25610,
                "activated_cost": 6595,
                "activated_count": 20,
                "activated_rate": 0.3448,
                "add_desktop_cost": 0,
                "add_desktop_pv": 0,
                "add_to_cart_price": 0,
                "add_wishlist_count": 0,
                "adgroup_id": 123456789,
                "app_apply_uv": 0,
                "app_credit_uv": 0,
                "app_pre_credit_uv": 0,
                "app_withdraw_uv": 0,
                "cheout_fd": 600,
                "cheout_fd_reward": 0.0045,
                "cheout_om": 600,
                "cheout_om_reward": 0.0045,
                "cheout_ow": 600,
                "cheout_ow_reward": 0.0045,
                "cheout_td": 600,
                "cheout_td_reward": 0.0045,
                "cheout_tw": 600,
                "cheout_tw_reward": 0.0045,
                "click_activated_rate": 0.0294,
                "click_detail_count": 0,
                "click_head_count": 0,
                "click_image_count": 0,
                "click_nick_count": 0,
                "click_poi_count": 0,
                "comment_cost": 0,
                "comment_count": 0,
                "conversions_cost": 131892,
                "conversions_count": 1,
                "conversions_rate": 0.0015,
                "cost": 131892,
                "coupon_click_count": 0,
                "coupon_get_count": 0,
                "coupon_issue_count": 0,
                "cpc": 194,
                "ctr": 0.0179,
                "date": "2024-03-26",
                "hour": 13,
                "deep_conversions_cost": 0,
                "deep_conversions_count": 0,
                "deep_conversions_rate": 0,
                "deliver_cost": 0,
                "deliver_count": 0,
                "deliver_rate": 0,
                "download_cost": 2274,
                "download_count": 58,
                "download_rate": 0.0853,
                "effect_leads_purchase_cost": 0,
                "effect_leads_purchase_count": 0,
                "effective_consult_count": 0,
                "effective_cost": 0,
                "effective_leads_count": 0,
                "effective_phone_count": 0,
                "effective_reserve_count": 0,
                "external_form_reservation_count": 0,
                "first_day_order_amount": 0,
                "first_day_order_count": 0,
                "first_pay_cost": 131892,
                "first_pay_count": 1,
                "first_pay_rate": 0.05,
                "follow_cost": 0,
                "follow_count": 0,
                "forward_cost": 0,
                "forward_count": 0,
                "from_follow_cost": 0,
                "from_follow_uv": 0,
                "game_authorize_count": 0,
                "game_create_role_count": 0,
                "game_tutorial_finish_count": 0,
                "install_cost": 7758,
                "install_count": 17,
                "install_rate": 0.025,
                "inte_phone_count": 0,
                "key_page_uv": 0,
                "key_page_view_cost": 0,
                "key_page_view_count": 0,
                "lan_button_click_cost": 0,
                "lan_button_click_count": 0,
                "lan_jump_button_clickers": 0,
                "leads_purchase_uv": 0,
                "lottery_leads_cost": 0,
                "lottery_leads_count": 0,
                "no_interest_count": 0,
                "order_amount": 0,
                "order_roi": 0,
                "order_unit_price": 0,
                "overall_leads_purchase_count": 0,
                "own_page_navi_cost": 0,
                "own_page_navigation_count": 0,
                "page_consult_cost": 0,
                "page_consult_count": 0,
                "page_consult_rate": 0,
                "page_phone_call_back_cost": 0,
                "page_phone_call_back_count": 0,
                "page_phone_call_back_rate": 0,
                "page_phone_call_direct_cost": 0,
                "page_phone_call_direct_count": 0,
                "page_phone_call_direct_rate": 0,
                "page_reservation_cost": 0,
                "page_reservation_count": 0,
                "page_reservation_rate": 0,
                "phone_call_count": 0,
                "phone_call_uv": 0,
                "phone_consult_count": 0,
                "platform_coupon_click_count": 0,
                "platform_page_navigation_cost": 0,
                "platform_page_navigation_count": 0,
                "platform_page_view_count": 306,
                "platform_page_view_rate": 0.0081,
                "platform_shop_navigation_cost": 0,
                "platform_shop_navigation_count": 0,
                "potential_consult_count": 0,
                "potential_customer_phone_uv": 0,
                "potential_phone_count": 0,
                "potential_reserve_count": 0,
                "praise_cost": 0,
                "praise_count": 0,
                "read_cost": 0,
                "read_count": 0,
                "reservation_uv": 0,
                "retention_cost": 0,
                "retention_count": 0,
                "retention_rate": 0,
                "scan_follow_count": 0,
                "scan_follow_user_cost": 0,
                "scan_follow_user_count": 0,
                "scan_follow_user_rate": 0,
                "sign_in_cost": 0,
                "sign_in_count": 0,
                "special_page_exp_cost": 0,
                "special_page_exp_uv": 0,
                "thousand_display_price": 3470,
                "tool_consult_count": 0,
                "valid_click_count": 680,
                "valid_leads_uv": 0,
                "valid_phone_uv": 0,
                "valuable_click_cost": 194,
                "valuable_click_count": 680,
                "valuable_click_rate": 0.0179,
                "video_inner_play_count": 7324,
                "video_outer_play100_count": 793,
                "video_outer_play10_count": 2977,
                "video_outer_play25_count": 1934,
                "video_outer_play3s_count": 3710,
                "video_outer_play50_count": 1498,
                "video_outer_play5s_count": 2927,
                "video_outer_play75_count": 1278,
                "video_outer_play7s_count": 2478,
                "video_outer_play95_count": 1021,
                "video_outer_play_cost": 18,
                "video_outer_play_count": 7324,
                "video_outer_play_rate": 0.1927,
                "video_outer_play_time_avg_rate": 0.2507,
                "video_outer_play_time_count": 12.28944,
                "video_play_count": 0,
                "view_commodity_page_uv": 0,
                "view_count": 38009,
                "web_apply_uv": 0,
                "web_commodity_page_view_cost": 0,
                "web_commodity_page_view_rate": 0,
                "web_credit_uv": 0,
                "web_register_uv": 0
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 1,
            "total_page": 1
        }
    }
}
```

## 场景组合示例

枚举值会自动根据已选条件变化，只展示有示例数据的枚举值

## 可视化调试工具

请求

## 相关阅读

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
