---
title: 创建批量异步请求任务 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/batch_async_requests/add
doc_id: tencent_ads_v3_0_docs_api_batch_async_requests_add
source_id: tencent_ads_v3_0_docs_api_batch_async_requests_add
---
# 创建批量异步请求任务 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | batch_async_requests/add |
| 请求方法 | POST |
| Content-Type | application/json |

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
| task_name* | string | 任务名称 字段长度最小 1 字节，长度最大 120 字节 |
| task_type* | string | 枚举列表：{ TASK_TYPE_UPDATE_UNION_POSITION_PACKAGE_NEW, TASK_TYPE_UPDATE_EXCLUDE_UNION_POSITION_PACKAGE_NEW, TASK_TYPE_UPDATE_DEEP_CONVERSION_BEHAVIOR_BID_NEW, TASK_TYPE_DELETE_ADGROUP_NEW, TASK_TYPE_UPDATE_ADGROUP_DEEP_CONVERSION_WORTH_RATE_NEW, TASK_TYPE_TARGETINGS_SHARE_NEW, TASK_TYPE_UPDATE_ADGROUP_CONFIGURED_STATUS_NEW, TASK_TYPE_UPDATE_ADGROUP_DAILY_BUDGET_NEW, TASK_TYPE_UPDATE_ADGROUP_AUTO_ACQUISITION_NEW, TASK_TYPE_UPDATE_ADGROUP_DEEP_CONVERSION_WORTH_ADVANCED_RATE_NEW, TASK_TYPE_UPDATE_DEEP_CONVERSION_BEHAVIOR_ADVANCED_BID_NEW } |
| task_spec* | struct | 任务所需条件 |
| update_union_position_package_spec | struct[] | 批量修改定投腾讯广告联盟流量包列表信息，当且仅当 task_type = TASK_TYPE_UPDATE_UNION_POSITION_PACKAGE_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| union_position_package | integer[] | 定投腾讯广告联盟流量包 id 列表 数组最小长度 0，最大长度 20 |
| update_exclude_union_position_package_spec | struct[] | 批量修改广告屏蔽腾讯广告联盟流量包列表信息，当且仅当 task_type = TASK_TYPE_UPDATE_EXCLUDE_UNION_POSITION_PACKAGE_NEW 时，才可且必须使用 数组最小长度 0，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| exclude_union_position_package | integer[] | 屏蔽腾讯广告联盟流量包 id 列表 数组最小长度 0，最大长度 20 |
| update_deep_conversion_behavior_bid_spec | struct[] | ，当且仅当 task_type = TASK_TYPE_UPDATE_DEEP_CONVERSION_BEHAVIOR_BID_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| deep_conversion_behavior_bid* | integer | 深度优化行为的出价 最小值 0，最大值 1000000 |
| delete_adgroup_spec | struct[] | 批量删除广告，当且仅当 task_type = TASK_TYPE_DELETE_ADGROUP_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| update_adgroup_deep_conversion_worth_rate_spec | struct[] | 批量修改广告深度优化价值的期望 ROI，当且仅当 task_type = TASK_TYPE_UPDATE_ADGROUP_DEEP_CONVERSION_WORTH_RATE_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| deep_conversion_worth_rate* | float | 深度优化价值的期望 ROI 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| update_adgroup_configured_status_spec | struct[] | 批量修改广告客户设置的状态，当且仅当 task_type = TASK_TYPE_UPDATE_ADGROUP_CONFIGURED_STATUS_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| configured_status* | enum | 客户设置的状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_configured_status) 可选值：{ AD_STATUS_NORMAL, AD_STATUS_SUSPEND } |
| update_adgroup_daily_budget_spec | struct[] | 批量修改广告日预算，当且仅当 task_type = TASK_TYPE_UPDATE_ADGROUP_DAILY_BUDGET_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| daily_budget* | integer | 广告日预算 |
| update_adgroup_auto_acquisition_spec | struct[] | 批量修改广告一键起量，当且仅当 task_type = TASK_TYPE_UPDATE_ADGROUP_AUTO_ACQUISITION_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| auto_acquisition_enabled* | boolean | 是否开启一键起量 可选值：{ true, false } |
| auto_acquisition_budget | integer | 一键起量探索预算 最小值 20000，最大值 10000000 |
| update_adgroup_deep_conversion_worth_advanced_rate_spec | struct[] | 批量修改广告深度优化价值的强化 ROI，当且仅当 task_type = TASK_TYPE_UPDATE_ADGROUP_DEEP_CONVERSION_WORTH_ADVANCED_RATE_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| deep_conversion_worth_advanced_rate* | float | 深度优化价值的强化 ROI 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| update_deep_conversion_behavior_advanced_bid_spec | struct[] | ，当且仅当 task_type = TASK_TYPE_UPDATE_DEEP_CONVERSION_BEHAVIOR_ADVANCED_BID_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| deep_conversion_behavior_advanced_bid* | integer | 深度辅助行为的出价 最小值 0，最大值 1000000 |
| reply_finder_object_comment_spec | struct[] | 批量评论回复，当且仅当 task_type = TASK_TYPE_REPLY_FINDER_OBJECT_COMMENT_NEW 时，才可且必须使用 数组最小长度 1，最大长度 50 |
| account_id* | integer | 通用的用户 id，包括 user_id 和 account_id |
| reply_comment_id* | string | 回复评论 id 字段长度最小 1 字节，长度最大 1024 字节 |
| content* | string | 评论内容 字段长度最小 1 字节，长度最大 10240 字节 |
| finder_ad_object_id* | integer | 广告动态 id |
| delete_finder_object_comment_spec | struct[] | 批量删除评论，当且仅当 task_type = TASK_TYPE_DELETE_FINDER_OBJECT_COMMENT_NEW 时，才可且必须使用 数组最小长度 1，最大长度 50 |
| account_id* | integer | 通用的用户 id，包括 user_id 和 account_id |
| finder_ad_object_id* | integer | 广告动态 id |
| comment_id* | string | 回复评论 id 字段长度最小 1 字节，长度最大 1024 字节 |
| update_finder_object_comment_flag_spec | struct[] | 批量评论精选，当且仅当 task_type = TASK_TYPE_UPDATE_FINDER_OBJECT_COMMENT_FLAG_NEW 时，才可且必须使用 数组最小长度 1，最大长度 50 |
| finder_ad_object_id* | integer | 广告动态 id |
| op_type* | enum | 设置视频号评论精选操作类型 URL，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_set_object_comment_flag_op_type) 可选值：{ SET_OBJECT_COMMENT_FLAG_OP_TYPE_OPEN, SET_OBJECT_COMMENT_FLAG_OP_TYPE_CLOSE } |
| account_id* | integer | 通用的用户 id，包括 user_id 和 account_id |
| comment_id | string | 评论 id 字段长度最小 1 字节，长度最大 1024 字节 |
| comment_level | integer | 最小值 1，最大值 2 |
| update_adgroup_time_spec | struct[] | 批量修改广告投放时间，当且仅当 task_type = TASK_TYPE_UPDATE_ADGROUP_TIME_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| account_id | integer | 通用的用户 id，包括 user_id 和 account_id |
| time_series | string | 投放时间段 字段长度为 336 字节 |
| first_day_begin_time | string | 首日开始投放时间 字段长度最小 0 字节，长度最大 8 字节 |
| update_adgroup_date_spec | struct[] | 批量修改广告投放日期，当且仅当 task_type = TASK_TYPE_UPDATE_ADGROUP_DATE_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| begin_date* | string | 开始投放日期 字段长度为 10 字节 |
| end_date* | string | 结束投放日期 字段长度最小 0 字节，长度最大 10 字节 |
| account_id | integer | 通用的用户 id，包括 user_id 和 account_id |
| update_adgroup_bid_amount_spec | struct[] | 批量修改广告出价，当且仅当 task_type = TASK_TYPE_UPDATE_ADGROUP_BID_AMOUNT_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| bid_amount* | integer | 广告出价 |
| account_id | integer | 通用的用户 id，包括 user_id 和 account_id |
| is_potential | boolean | 是否是潜力广告 可选值：{ true, false } |
| report_potential_data | string | 潜力广告改价上报的信息 字段长度最小 2 字节，长度最大 1000 字节 |
| update_adgroup_bind_rta_policy_spec | struct[] | 批量修改广告绑定的 rta 策略，当且仅当 task_type = TASK_TYPE_UPDATE_ADGROUP_BIND_RTA_POLICY_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| origin_rta_policy_uuid* | string | 源 rta 策略 字段长度最小 0 字节，长度最大 1024 字节 |
| target_rta_policy_uuid* | string | 目标 rta 策略 字段长度最小 0 字节，长度最大 1024 字节 |
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| update_adcreative_object_comment_flag_spec | struct[] | 批量评论管理，当且仅当 task_type = TASK_TYPE_UPDATE_ADCREATIVE_OBJECT_COMMENT_FLAG_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| finder_ad_object_id* | integer | 广告动态 id |
| op_type* | enum | 设置视频号评论管理操作类型 URL，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_set_object_comment_flag_op_type) 可选值：{ SET_OBJECT_COMMENT_FLAG_OP_TYPE_OPEN, SET_OBJECT_COMMENT_FLAG_OP_TYPE_CLOSE } |
| account_id | integer | 通用的用户 id，包括 user_id 和 account_id |
| update_dynamic_creative_configured_status_spec | struct[] | 批量修改广告创意客户设置的状态，当且仅当 task_type = TASK_TYPE_UPDATE_DYNAMIC_CREATIVE_CONFIGURED_STATUS_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| dynamic_creative_id* | integer | 广告创意 id |
| configured_status* | enum | 客户设置的状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_configured_status) 可选值：{ AD_STATUS_NORMAL, AD_STATUS_SUSPEND } |
| delete_dynamic_creative_spec | struct[] | 批量删除广告创意，当且仅当 task_type = TASK_TYPE_DELETE_DYNAMIC_CREATIVE_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| dynamic_creative_id* | integer | 广告创意 id |
| process_user_page_object_spec | struct[] | 批量沉淀动态，当且仅当 task_type = TASK_TYPE_PROCESS_USER_PAGE_OBJECT_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| account_id | integer | 通用的用户 id，包括 user_id 和 account_id |
| ad_export_id* | string | 视频号动态 id 字段长度最小 0 字节，长度最大 1024 字节 |
| create_scheduled_update_adgroup_daily_budget_spec | struct[] | 批量预设置广告次日预算，当且仅当 task_type = TASK_TYPE_CREATE_SCHEDULED_UPDATE_ADGROUP_DAILY_BUDGET_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| daily_budget* | integer | 广告日预算 |
| account_id | integer | 通用的用户 id，包括 user_id 和 account_id |
| delete_scheduled_task_spec | struct[] | 批量删除预设置任务，当且仅当 task_type = TASK_TYPE_DELETE_SCHEDULED_TASK_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| task_id* | integer | 预设置任务 id |
| account_id | integer | 通用的用户 id，包括 user_id 和 account_id |
| update_adgroup_targeting_task_spec | struct[] | 批量修改定向任务，当且仅当 task_type = TASK_TYPE_UPDATE_ADGROUP_TARGETING 时，才可且必须使用 数组最小长度 1，最大长度 50 |
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| adgroup_id* | int64 | 广告 id |
| need_upgrade_targeting | enum[] | 支持批量更新的定向信息类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#targeting_support_batch_update_type) 数组最小长度 0，最大长度 10 可选值：{ GEO_LOCATION, CUSTOM_AUDIENCE, EXCLUDED_CUSTOM_AUDIENCE } |
| geo_location | struct | 地理位置定向，"regions"、"business_districts"、"custom_locations" 不能同时为空。 |
| location_types* | enum[] | 地点类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_location_types)，选择限制：对于微信流量，仅能选择"LIVE_IN"（常住）； 使用商圈（business_district）以及自定义地理位置（custom_locations）时，仅可选 "VISITED_IN"（去过），"LIVE_IN"（常住）； 如：["LIVE_IN", "VISITED_IN"] 数组最小长度 1，最大长度 5 可选值：{ RECENTLY_IN, VISITED_IN, LIVE_IN, TRAVEL_IN, CAA_RECENTLY_IN, LIVE_AND_RECENTLY, INTELLIGENCE } |
| regions | integer[] | 省市区县列表，可通过 [\[targeting_tags/get\]](https://developers.e.qq.com/v3.0/docs/api/targeting_tags/get) 接口获取 数组最小长度 0，最大长度 2000 |
| business_districts | integer[] | 商圈 id 列表，可通过 [\[targeting_tags/get\]](https://developers.e.qq.com/v3.0/docs/api/targeting_tags/get) 接口获取 数组最小长度 0，最大长度 400 |
| custom_locations | struct[] | 自定义地理位置列表，使用火星系坐标。 数组最小长度 1，最大长度 2000 |
| longitude* | float64 | 经度，单位度 最小值-180，最大值 180，最多保留 6 位小数 |
| latitude* | float64 | 纬度，单位度 最小值-90，最大值 90，最多保留 6 位小数 |
| radius* | integer | 半径，单位米 最小值 200，最大值 25000 |
| geo_location_auto_audience | boolean | 是否使用地域优选 可选值：{ true, false } |
| custom_audience | integer[] | 定向用户群，通过 [\[创建人群接口\]](https://developers.e.qq.com/v3.0/docs/api/custom_audiences/add) 创建的人群 id，custom_audience 和 excluded_custom_audience 个数之和不能超过 200 个 数组最小长度 1，最大长度 200 |
| excluded_custom_audience | integer[] | 排除用户群，通过 [\[创建人群接口\]](https://developers.e.qq.com/v3.0/docs/api/custom_audiences/add) 创建的人群 id，custom_audience 和 excluded_custom_audience 个数之和不能超过 200 个 数组最小长度 1，最大长度 200 |
| update_adgroup_ecom_pkam_spec | struct[] | 批量修改广告一键起量，当且仅当 task_type = TASK_TYPE_UPDATE_ADGROUP_ECOM_PKAM_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| ecom_pkam_switch* | enum | 是否开启一方跑量，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#ecom_pkam_switch) 可选值：{ ECOM_PKAM_SWITCH_CLOSE, ECOM_PKAM_SWITCH_OPEN } |
| update_adgroup_derive_conf_spec | struct[] | ，当且仅当 task_type = TASK_TYPE_UPDATE_ADGROUP_DERIVE_CONF_NEW 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| auto_derived_creative_enabled* | boolean | 是否开启自动衍生视频创意，该功能灰度开放中。 开启后，根据广告主的投放数据以及上传的素材, 通过策略选择效果最佳的视频模板、音乐, 并复制已有创意元素, 程序化生成视频创意。 |
| derive_template_conf | struct | 定义衍生模版配置 |
| template_conf_list* | struct[] | 衍生配置列表 数组最大长度 10 |
| template_list* | integer[] | 创意衍生自定义模版列表 数组最小长度 0，最大长度 256 |
| adcreative_template_id* | integer | 创意衍生使用的原规格 id |
| account_id | integer | 通用的用户 id，包括 user_id 和 account_id |
| update_component_sharing_spec | struct[] | ，当且仅当 task_type = TASK_TYPE_UPDATE_COMPONENT_SHARED 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| organization_id* | integer | 业务单元 id 最小值 0，最大值 9999999999 |
| shared_account_list* | struct[] | 被共享账号信息 数组最小长度 1，最大长度 100 |
| shared_account_id* | integer | 被共享账号 id 最小值 0，最大值 9999999999 |
| shared_account_type* | enum | 被共享账号类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#shared_account_type) 可选值：{ INVALID, ADVERTISER, ORGANIZATION } |
| component_id* | integer | 组件 id |
| update_adgroup_smart_delivery_goal_spec | struct[] | 批量更新智能投放目标配置，当且仅当 task_type = TASK_TYPE_UPDATE_SMART_DELIVERY_GOAL 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| smart_delivery_scene_spec* | struct | 场景化投放信息 |
| smart_delivery_goal | enum | 场景化投放目标，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#smart_delivery_goal) 可选值：{ SMART_DELIVERY_GOAL_UNKNOWN, SMART_DELIVERY_GOAL_LONG_TERM_ROI_7DAY, SMART_DELIVERY_GOAL_PAGE_RESERVATION, SMART_DELIVERY_GOAL_GAME_LAUNCH, SMART_DELIVERY_GOAL_MULTI_OPTIMIZATION, SMART_DELIVERY_GOAL_PLAYLET_PURCHASE, SMART_DELIVERY_GOAL_PLAYLET_FREE, SMART_DELIVERY_GOAL_LEADS, SMART_DELIVERY_GOAL_PLAYLET_REGISTER_PURCHASE, SMART_DELIVERY_GOAL_PLAYLET_IAAP, SMART_DELIVERY_GOAL_IAAP, SMART_DELIVERY_GOAL_MINI_GAME_FIRST_DAY_PURCHASE_ROI, SMART_DELIVERY_GOAL_IAAP_MIX_IN_ONE, SMART_DELIVERY_GOAL_FIRST_DAY_MONETIZATION, SMART_DELIVERY_GOAL_SEVEN_DAY_MONETIZATION, SMART_DELIVERY_GOAL_SEVEN_DAY_PURCHASE, SMART_DELIVERY_GOAL_DAY30_PURCHASE, SMART_DELIVERY_GOAL_GAME_PROMOTION_APP_ACTIVATE, SMART_DELIVERY_GOAL_GAME_PROMOTION_APP_ACTIVATE_PURCHASE, SMART_DELIVERY_GOAL_GAME_PROMOTION_APP_ACTIVATE_ROI, SMART_DELIVERY_GOAL_WECHAT_STORE_SINGLE_PRODUCT_ORDER, SMART_DELIVERY_GOAL_WECHAT_STORE_SINGLE_PRODUCT_ORDER_ROI, SMART_DELIVERY_GOAL_WECHAT_STORE_SINGLE_PRODUCT_ORDER_FIRST_TWENTY_FOUR_HOUR_REFUND_RATE, SMART_DELIVERY_GOAL_WECHAT_STORE_FIRST_TWENTY_FOUR_HOUR_ECOMMERCE_ORDER, SMART_DELIVERY_GOAL_WECHAT_STORE_NET_PROFIT_ROAS, SMART_DELIVERY_GOAL_WECHAT_STORE_NET_PROFIT, SMART_DELIVERY_GOAL_LEADS_BUSINESS_SERVICES, SMART_DELIVERY_GOAL_LEADS_TRAVEL, SMART_DELIVERY_GOAL_LEADS_INTEGRATED_SERVICES, SMART_DELIVERY_GOAL_LEADS_JOIN, SMART_DELIVERY_GOAL_LEADS_BEAUTY, SMART_DELIVERY_GOAL_LEADS_OPERATOR, SMART_DELIVERY_GOAL_LEADS_HOME, SMART_DELIVERY_GOAL_QYT_ORDER, SMART_DELIVERY_GOAL_QYT_ORDER_ROI, SMART_DELIVERY_GOAL_QYT_PROMOTION_VIEW_KEY_PAGE, SMART_DELIVERY_GOAL_QYT_VIEW_COMMODITY_PAGE, SMART_DELIVERY_GOAL_QYT_LIVE_STREAM_AUDIENCE, SMART_DELIVERY_GOAL_QYT_CLICK, SMART_DELIVERY_GOAL_QYT_FIRST_TWENTY_FOUR_HOUR_ECOMMERCE_ORDER, SMART_DELIVERY_GOAL_QYT_NET_PROFIT, SMART_DELIVERY_GOAL_QYT_NET_PROFIT_ROAS, SMART_DELIVERY_GOAL_QYT_COLLECT, SMART_DELIVERY_GOAL_DRUG_PRODUCT_ORDER_ROI, SMART_DELIVERY_GOAL_PRODUCT_ORDER, SMART_DELIVERY_GOAL_LOCAL_PRODUCT_ORDER_ROI, SMART_DELIVERY_GOAL_LOCAL_PRODUCT_ORDER, SMART_DELIVERY_GOAL_PAGE_SCAN_CODE_HEALTH, SMART_DELIVERY_GOAL_PAGE_SCAN_CODE_BUSINESS_SERVICES, SMART_DELIVERY_GOAL_PAGE_SCAN_CODE_TRAVEL, SMART_DELIVERY_GOAL_PAGE_SCAN_CODE_INTEGRATED_SERVICES, SMART_DELIVERY_GOAL_PAGE_SCAN_CODE_JOIN, SMART_DELIVERY_GOAL_PAGE_SCAN_CODE_BEAUTY, SMART_DELIVERY_GOAL_PAGE_SCAN_CODE_OPERATOR, SMART_DELIVERY_GOAL_PAGE_SCAN_CODE_HOME, SMART_DELIVERY_GOAL_PAGE_SCAN_CODE, SMART_DELIVERY_GOAL_PAGE_CONFIRM_EFFECTIVE_LEADS, SMART_DELIVERY_GOAL_CLUE_PAY_SUCCEED, SMART_DELIVERY_GOAL_LOW_PRICE_INSURANCE_PAYMENT, SMART_DELIVERY_GOAL_CREDIT, SMART_DELIVERY_GOAL_CPS_VIEW_KEY_PAGE, SMART_DELIVERY_GOAL_CPS_VIEW_COMMODITY_PAGE, SMART_DELIVERY_GOAL_CPS_ORDER, SMART_DELIVERY_GOAL_FICTION_FOLLOW_PURCHASE_ROI, SMART_DELIVERY_GOAL_FICTION_REGISTER_PURCHASE_ROI, SMART_DELIVERY_GOAL_FICTION_REGISTER_MONETIZATION_ROI, SMART_DELIVERY_GOAL_GAME_APP_ACTIVATE_ROI_1DAY, SMART_DELIVERY_GOAL_READING_APP_ACTIVATE_RETENTION_1DAY, SMART_DELIVERY_GOAL_READING_APP_ACTIVATE_RETENTION_7DAY, SMART_DELIVERY_GOAL_AI_APP_ACTIVATE_RETENTION_1DAY, SMART_DELIVERY_GOAL_AI_APP_REGISTER_RETENTION_1DAY, SMART_DELIVERY_GOAL_FIRST_WITHDRAW, SMART_DELIVERY_GOAL_24H_FIRSTPAY, SMART_DELIVERY_GOAL_FIRST_TWENTY_FOUR_HOUR_ECOMMERCE_ORDER, SMART_DELIVERY_GOAL_APP_PURCHASE, SMART_DELIVERY_GOAL_FIRST_PURCHASE, SMART_DELIVERY_GOAL_APP_REGISTER_30DAY_MONETIZATION_ROAS, SMART_DELIVERY_GOAL_UNDERWRITING, SMART_DELIVERY_GOAL_ONLINE_CONSULTATION, SMART_DELIVERY_GOAL_BACK_FLOW_1DAY_PURCHASE_ROAS, SMART_DELIVERY_GOAL_PAGE_RESERVATION_PAGE_CONFIRM_EFFECTIVE_LEADS, SMART_DELIVERY_GOAL_PAGE_CONFIRM_EFFECTIVE_LEADS2, SMART_DELIVERY_GOAL_CLUE_PAY_SUCCEED_CLASS_PARTICIPATED, SMART_DELIVERY_GOAL_CREDIT_WITHDRAW_DEPOSITS_ROAS, SMART_DELIVERY_GOAL_LOW_PRICE_CONFIRM_EFFECTIVE_LEADS, SMART_DELIVERY_GOAL_ECOMMERCE_ORDER_EFFECTIVE_INSURE, SMART_DELIVERY_GOAL_ACTIVATE, SMART_DELIVERY_GOAL_PROMOTION_VIEW_KEY_PAGE, SMART_DELIVERY_GOAL_EVERY_DAY_RETENTION, SMART_DELIVERY_GOAL_CPS_COMMISSION_ROI, SMART_DELIVERY_GOAL_CPS_VIEW_KEY_PAGE_UV, SMART_DELIVERY_GOAL_PAGE_RESERVATION_RESERVATION_CHECK, SMART_DELIVERY_GOAL_APPLY, SMART_DELIVERY_GOAL_CREDIT_CREDIT_RATIO_APPLY, SMART_DELIVERY_GOAL_PAGE_SCAN_CODE_CLASS_PARTICIPATED, SMART_DELIVERY_GOAL_PAGE_SCAN_CODE_LOW_PRICE_COURSE } |
| smart_delivery_goal_spec | struct | 智投投放目标信息 |
| long_term_roi_spec | struct | 智投投放目标长效 ROI 信息，(下线中) |
| long_term_roi* | float | 智投投放目标长效 ROI 效果值，比例，无单位 最小值 0.001，最大值 50，最多保留 4 位小数 |
| adgroup_parameters | struct[] | 智投广告组参数列表 数组最小长度 0，最大长度 2 |
| optimization_goal | enum | 广告优化目标类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) 可选值：{ OPTIMIZATIONGOAL_NONE, OPTIMIZATIONGOAL_BRAND_CONVERSION, OPTIMIZATIONGOAL_FOLLOW, OPTIMIZATIONGOAL_CLICK, OPTIMIZATIONGOAL_IMPRESSION, OPTIMIZATIONGOAL_APP_DOWNLOAD, OPTIMIZATIONGOAL_APP_ACTIVATE, OPTIMIZATIONGOAL_APP_REGISTER, OPTIMIZATIONGOAL_ONE_DAY_RETENTION, OPTIMIZATIONGOAL_APP_PURCHASE, OPTIMIZATIONGOAL_ECOMMERCE_ORDER, OPTIMIZATIONGOAL_ECOMMERCE_CHECKOUT, OPTIMIZATIONGOAL_LEADS, OPTIMIZATIONGOAL_ECOMMERCE_CART, OPTIMIZATIONGOAL_PROMOTION_CLICK_KEY_PAGE, OPTIMIZATIONGOAL_VIEW_COMMODITY_PAGE, OPTIMIZATIONGOAL_ONLINE_CONSULTATION, OPTIMIZATIONGOAL_TELEPHONE_CONSULTATION, OPTIMIZATIONGOAL_PAGE_RESERVATION, OPTIMIZATIONGOAL_DELIVERY, OPTIMIZATIONGOAL_MESSAGE_AFTER_FOLLOW, OPTIMIZATIONGOAL_CLICK_MENU_AFTER_FOLLOW, OPTIMIZATIONGOAL_PAGE_EFFECTIVE_ONLINE_CONSULT, OPTIMIZATIONGOAL_APPLY, OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_CONSULT, OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_PHONE, OPTIMIZATIONGOAL_LEADS_COLLECT, OPTIMIZATIONGOAL_FIRST_PURCHASE, OPTIMIZATIONGOAL_PRE_CREDIT, OPTIMIZATIONGOAL_CREDIT, OPTIMIZATIONGOAL_WITHDRAW_DEPOSITS, OPTIMIZATIONGOAL_PROMOTION_VIEW_KEY_PAGE, OPTIMIZATIONGOAL_MOBILE_APP_CREATE_ROLE, OPTIMIZATIONGOAL_CANVAS_CLICK, OPTIMIZATIONGOAL_PROMOTION_CLAIM_OFFER, OPTIMIZATIONGOAL_ECOMMERCE_ADD_TO_WISHLIST, OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_RESERVATION, OPTIMIZATIONGOAL_PAGE_RECEIPT, OPTIMIZATIONGOAL_PAGE_SCAN_CODE, OPTIMIZATIONGOAL_SELECT_COURSE, OPTIMIZATIONGOAL_CONFIRM_POTENTIAL_CUSTOMER_PHONE, OPTIMIZATIONGOAL_MOBILE_APP_AD_INCOME, OPTIMIZATIONGOAL_MOBILE_APP_ACCREDIT, OPTIMIZATIONGOAL_PURCHASE_MEMBER_CARD, OPTIMIZATIONGOAL_PAGE_CONFIRM_EFFECTIVE_LEADS, OPTIMIZATIONGOAL_RESERVATION, OPTIMIZATIONGOAL_FIRST_ECOMMERCE_ORDER, OPTIMIZATIONGOAL_LIKE, OPTIMIZATIONGOAL_ADD_DESKTOP, OPTIMIZATIONGOAL_EXTERNAL_LINK_CLICK, OPTIMIZATIONGOAL_BUY_COUPONS, OPTIMIZATIONGOAL_LEAVE_INFORMATION, OPTIMIZATIONGOAL_CORE_ACTION, OPTIMIZATIONGOAL_ONE_DAY_RETENTION_RATIO, OPTIMIZATIONGOAL_PROMOTION_READ_ARTICLE, OPTIMIZATIONGOAL_FIRST_TWENTY_FOUR_HOUR_ECOMMERCE_ORDER, OPTIMIZATIONGOAL_ECOMMERCE_SCANCODE_WX, OPTIMIZATIONGOAL_MOBILE_APP_SEVEN_DAYS_RETENTION, OPTIMIZATIONGOAL_CLASS_PARTICIPATED, OPTIMIZATIONGOAL_INSURANCE_PURCHASE, OPTIMIZATIONGOAL_RESERVATION_CHECK, OPTIMIZATIONGOAL_OPEN_ACCOUNT, OPTIMIZATIONGOAL_SEVEN_DAY_ECOMMERCE_ORDER, OPTIMIZATIONGOAL_ADD_WECHAT, OPTIMIZATIONGOAL_WECOM_CONSULT, OPTIMIZATIONGOAL_ADD_GROUP, OPTIMIZATIONGOAL_QUICK_ORDER, OPTIMIZATIONGOAL_PRE_PAY, OPTIMIZATIONGOAL_PAGE_ONLINE_CONSULT_ACTIVE_ONE_MSG, OPTIMIZATIONGOAL_CALL_DURATION_THIRTY_SECONDS, OPTIMIZATIONGOAL_CLAIM_COURSE, OPTIMIZATIONGOAL_QUIT_GROUP, OPTIMIZATIONGOAL_VIEW_ACQUISITION_CONTENT, OPTIMIZATIONGOAL_BACK_FLOW, OPTIMIZATIONGOAL_PAGE_ONLINE_CONSULT_THREE_MSG, OPTIMIZATIONGOAL_RENEWAL, OPTIMIZATIONGOAL_LOW_PRICE_COURSE, OPTIMIZATIONGOAL_CONSULT_INTENTION, OPTIMIZATIONGOAL_EVERY_DAY_RETENTION, OPTIMIZATIONGOAL_PROMOTION_VIEW_KEY_PAGE_UV, OPTIMIZATIONGOAL_LIVE_STREAM_DURATION_1MIN, OPTIMIZATIONGOAL_LIVE_STREAM_INTERACTION, OPTIMIZATIONGOAL_ECOMMERCE_CANCEL_ORDER, OPTIMIZATIONGOAL_CLICK_LEADS_COMPONENT, OPTIMIZATIONGOAL_REGULAR_PRICE_COURSE, OPTIMIZATIONGOAL_VISIT_STROE, OPTIMIZATIONGOAL_EFFECTIVE_ENTRY, OPTIMIZATIONGOAL_CREDIT_RATIO, OPTIMIZATIONGOAL_QYT_LIVE_STREAM_DEAL, OPTIMIZATIONGOAL_QYT_LIVE_STREAM_PRODUCT_CLICK, OPTIMIZATIONGOAL_QYT_LIVE_STREAM_AUDIENCE, OPTIMIZATIONGOAL_QYT_LIVE_STREAM_COMMENT, OPTIMIZATIONGOAL_QYT_LIVE_STREAM_FANS, OPTIMIZATIONGOAL_24H_FIRSTPAY, OPTIMIZATIONGOAL_STORE_STAY, OPTIMIZATIONGOAL_LOW_PRICE_INSURANCE_PAYMENT, OPTIMIZATIONGOAL_UNDERWRITING, OPTIMIZATIONGOAL_FIRST_WITHDRAW, OPTIMIZATIONGOAL_BRIDGING_COURSE_COMPLETED, OPTIMIZATIONGOAL_THIRTY_SECONDS_SCANCODE_WX, OPTIMIZATIONGOAL_FIRST_TWENTY_FOUR_HOUR_REFUND_RATE, OPTIMIZATIONGOAL_VIEW_DRAMA_DURATION_1MIN, OPTIMIZATIONGOAL_FIRST_PROMPT_INPUT, OPTIMIZATIONGOAL_ECOMMERCE_GIFTING, OPTIMIZATIONGOAL_CLUE_PAY_SUCCEED, OPTIMIZATIONGOAL_30DAY_UNSUBSCRIBE_RATE, OPTIMIZATIONGOAL_NET_PROFIT_24H, OPTIMIZATIONGOAL_EFFECTIVE_INSURE, OPTIMIZATIONGOAL_COLLECT } |
| conversion_id | integer | 转化 id，包含优化目标，深度优化目标，数据上报方式，归因方式等信息，仅 ocpc/ocpm 广告可设置，转化 id 设置后不可修改。可通过辅助工具[\[转化查询接口\]](https://developers.e.qq.com/v3.0/docs/api/conversions/get)查询可使用的转化 id。当传入转化 id 时，可无需再传入 user_action_sets，additional_user_action_sets，optimization_goal，deep_conversion_spec 字段信息。如若同时传入转化 id 和 user_action_sets/additional_user_action_sets，将以转化 id 的信息为第一优先级；如若同时传入转化 id 和 optimization_goal/deep_conversion_spec，仅当转化 id 中包含的优化目标/深度优化目标与传入的优化目标/深度优化目标信息一致时，才允许创建，否则将不允许创建。功能灰度开放中,不支持朋友圈。ADX 程序化广告不可填写提交。 |
| page_reservation_spec | struct | 智投投放目标表单预约成本信息 |
| page_reservation_cost* | integer | 智投投放目标表单预约成本，单位分 最小值 1，最大值 2000000 |
| periodic_length* | integer | 自动投放周期，单位: 天 最小值 7，最大值 7 |
| auto_renew* | enum | 自动投放自动续投状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_switch_status) 可选值：{ STATUS_UNKNOWN, STATUS_ON, STATUS_OFF } |
| game_launch_spec | struct | 智投投放目标新游大推附加信息 |
| og108_cost | integer | 智投投放目标新游大推-付费成本，单位分 最小值 1，最大值 100000 |
| deep_og7_roi | float | 智投投放目标新游大推-roi 效果值，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| iaap_spec | struct | 智投投放目标混变 ROI 附加信息 |
| iaap_mix_factor | float | 智投投放目标混变 ROI-混变系数，比例，无单位 最小值 0.0001，最大值 1，最多保留 4 位小数 |
| iaap_roi | float | 智投投放目标混合 ROI 效果值，比例，无单位 最小值 0.001，最大值 100000，最多保留 4 位小数 |
| first_day_monetization_spec | struct | 首日变现目标信息 |
| first_day_monetization_roi* | float64 | 首日变现 ROI，比例，无单位 最小值 0.001，最大值 50，最多保留 4 位小数 |
| multi_optimization_spec | struct | 多目标优化目标信息 |
| multi_optimization_cost* | integer | 多目标优化-激活成本，单位分 最小值 1，最大值 100000 |
| multi_optimization_roi* | float64 | 多目标优化 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| playlet_purchase_spec | struct | 短剧首日首次付费目标信息 |
| playlet_purchase_cost* | integer | 短剧首日首次付费-成本，单位分 最小值 1 |
| playlet_free_spec | struct | 短剧首日变现目标信息 |
| playlet_free_cost* | integer | 免费短剧注册成本，单位分 最小值 1 |
| playlet_free_roi* | float64 | 短剧首日变现 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| mini_game_long_term_roi_spec | struct | 智投投放目标长效 ROI 信息 |
| long_term_roi* | float | 智投投放目标长效 ROI 效果值，比例，无单位 最小值 0.001，最大值 50，最多保留 4 位小数 |
| game_promotion_app_activate_spec | struct | 智投投放目标激活 |
| app_activate_cost* | integer | 智投投放目标游戏大推-激活成本，单位分 最小值 1，最大值 100000 |
| game_promotion_app_activate_purchase_spec | struct | 智投投放目标激活和付费 |
| app_activate_cost | integer | 智投投放目标游戏大推-激活成本，单位分 最小值 1，最大值 100000 |
| app_purchase_cost* | integer | 智投投放目标新游大推-付费成本，单位分 最小值 1，最大值 100000 |
| game_promotion_app_activate_roi_spec | struct | 智投投放目标激活和 ROI |
| app_activate_cost* | integer | 智投投放目标游戏大推-激活成本，单位分 最小值 1，最大值 100000 |
| deep_purchase_roi* | float | 智投投放目标新游大推-roi 效果值，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| mixed_monetization_spec | struct | 智投投放目标混变 ROI 附加信息 |
| iaap_mix_factor* | float | 智投投放目标混变 ROI-混变系数，比例，无单位 最小值 0.0001，最大值 1，最多保留 4 位小数 |
| iaap_roi* | float | 智投投放目标混合 ROI 效果值，比例，无单位 最小值 0.001，最大值 100000，最多保留 4 位小数 |
| leads_spec | struct | 线索跑量目标信息 |
| leads_cost* | integer | 线索跑量表单预约成本，单位分 最小值 1 |
| mini_game_promotion_spec | struct | 小游戏跑量目标信息 |
| register_cost* | integer | 注册成本，单位分 最小值 1，最大值 2000000 |
| first_day_purchase_roi | float64 | 首日付费 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| first_day_monetization_roi | float64 | 首日变现 ROI，比例，无单位 最小值 0.001，最大值 50，最多保留 4 位小数 |
| seven_day_monetization_roi | float64 | 7 日变现 ROI，比例，无单位 最小值 0.001，最大值 50，最多保留 4 位小数 |
| seven_day_purchase_roi | float64 | 7 日付费 ROI，比例，无单位 最小值 0.001，最大值 50，最多保留 4 位小数 |
| day30_purchase_roi | float64 | 30 日付费 ROI，比例，无单位 最小值 0.001，最大值 50，最多保留 4 位小数 |
| mix_iaap_in_one_spec | struct | 智投投放目标混变 ROI 附加信息 |
| iaap_mix_in_one_factor* | float | 智投投放目标混变 ROI-混变系数，比例，无单位 最小值 0.0001，最大值 2，最多保留 4 位小数 |
| iaap_roi* | float | 智投投放目标混合 ROI 效果值，比例，无单位 最小值 0.001，最大值 100000，最多保留 4 位小数 |
| wechat_store_single_product_order_spec | struct | 小店智投-单品全域销售-目标信息 |
| ecommerce_order_cost* | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| wechat_store_single_product_order_roi_spec | struct | 小店智投-单品全域销售-目标信息 |
| ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| ecommerce_order_roi* | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| playlet_register_purchase_spec | struct | 短剧首日变现目标信息 |
| playlet_register_purchase_cost* | integer | 短剧注册成本，单位分 最小值 150，最大值 99900 |
| playlet_register_purchase_roi* | float64 | 短剧首日付费 ROI，比例，无单位 最小值 0.001，最大值 50，最多保留 4 位小数 |
| qyt_order_spec | struct | 全域通智投-投放目标 |
| ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| ecommerce_order_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| promotion_view_key_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| view_commodity_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| smart_bid_type | enum | 出价类型，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#smart_bid_type) 可选值：{ SMART_BID_TYPE_CUSTOM, SMART_BID_TYPE_SYSTEMATIC } |
| custom_cost_cap | integer | 用户输入的成本上限，上限值范围为 0-20000 元。ADX 程序化广告不可填写提交。 最小值 0，最大值 2000000 |
| cost_constraint_scene | enum | 成本控制场景，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cost_constraint_scene) 可选值：{ COST_CONSTRAINT_SCENE_OPEN } |
| live_stream_audience_cost | integer | 直播间观众成本，单位分 最小值 10，最大值 20000 |
| click_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| first_twenty_four_hour_ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| collect_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| qyt_order_roi_spec | struct | 全域通智投-投放目标 |
| ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| ecommerce_order_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| promotion_view_key_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| view_commodity_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| smart_bid_type | enum | 出价类型，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#smart_bid_type) 可选值：{ SMART_BID_TYPE_CUSTOM, SMART_BID_TYPE_SYSTEMATIC } |
| custom_cost_cap | integer | 用户输入的成本上限，上限值范围为 0-20000 元。ADX 程序化广告不可填写提交。 最小值 0，最大值 2000000 |
| cost_constraint_scene | enum | 成本控制场景，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cost_constraint_scene) 可选值：{ COST_CONSTRAINT_SCENE_OPEN } |
| live_stream_audience_cost | integer | 直播间观众成本，单位分 最小值 10，最大值 20000 |
| click_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| first_twenty_four_hour_ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| collect_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| qyt_promotion_view_key_page_spec | struct | 全域通智投-投放目标 |
| ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| ecommerce_order_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| promotion_view_key_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| view_commodity_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| smart_bid_type | enum | 出价类型，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#smart_bid_type) 可选值：{ SMART_BID_TYPE_CUSTOM, SMART_BID_TYPE_SYSTEMATIC } |
| custom_cost_cap | integer | 用户输入的成本上限，上限值范围为 0-20000 元。ADX 程序化广告不可填写提交。 最小值 0，最大值 2000000 |
| cost_constraint_scene | enum | 成本控制场景，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cost_constraint_scene) 可选值：{ COST_CONSTRAINT_SCENE_OPEN } |
| live_stream_audience_cost | integer | 直播间观众成本，单位分 最小值 10，最大值 20000 |
| click_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| first_twenty_four_hour_ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| collect_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| qyt_view_commodity_page_spec | struct | 全域通智投-投放目标 |
| ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| ecommerce_order_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| promotion_view_key_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| view_commodity_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| smart_bid_type | enum | 出价类型，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#smart_bid_type) 可选值：{ SMART_BID_TYPE_CUSTOM, SMART_BID_TYPE_SYSTEMATIC } |
| custom_cost_cap | integer | 用户输入的成本上限，上限值范围为 0-20000 元。ADX 程序化广告不可填写提交。 最小值 0，最大值 2000000 |
| cost_constraint_scene | enum | 成本控制场景，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cost_constraint_scene) 可选值：{ COST_CONSTRAINT_SCENE_OPEN } |
| live_stream_audience_cost | integer | 直播间观众成本，单位分 最小值 10，最大值 20000 |
| click_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| first_twenty_four_hour_ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| collect_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| playlet_iaap_spec | struct | 智投投放目标-短剧混变 ROI 附加信息 |
| iaap_mix_factor* | float | 智投投放目标混变 ROI-混变系数，比例，无单位 最小值 0.0001，最大值 2，最多保留 4 位小数 |
| iaap_roi* | float | 智投投放目标混合 ROI 效果值，比例，无单位 最小值 0.001，最大值 100000，最多保留 4 位小数 |
| drug_product_order_roi_spec | struct | 商品智投大健康-投放目标 |
| ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| ecommerce_order_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| wechat_store_single_product_order_first_twenty_four_hour_refund_rate_spec | struct | 小店智投-下单-24 小时退款率-目标信息 |
| ecommerce_order_cost* | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| ecommerce_first_twenty_four_hour_refund_rate* | integer | 24 小时退款率，比例*100，无单位 最小值 1，最大值 99 |
| qyt_live_stream_audience_spec | struct | 全域通智投-投放目标 |
| ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| ecommerce_order_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| promotion_view_key_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| view_commodity_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| smart_bid_type | enum | 出价类型，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#smart_bid_type) 可选值：{ SMART_BID_TYPE_CUSTOM, SMART_BID_TYPE_SYSTEMATIC } |
| custom_cost_cap | integer | 用户输入的成本上限，上限值范围为 0-20000 元。ADX 程序化广告不可填写提交。 最小值 0，最大值 2000000 |
| cost_constraint_scene | enum | 成本控制场景，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cost_constraint_scene) 可选值：{ COST_CONSTRAINT_SCENE_OPEN } |
| live_stream_audience_cost | integer | 直播间观众成本，单位分 最小值 10，最大值 20000 |
| click_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| first_twenty_four_hour_ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| collect_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| product_order_spec | struct | 商品智投 svip 投放目标 |
| ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| cps_spec | struct | CPS 投放目标 |
| ecommerce_order_cost | integer | cps 投放目标-下单 最小值 1，最大值 2000000 |
| promotion_view_key_page_cost | integer | cps 投放目标-关键页面访问 最小值 1，最大值 2000000 |
| view_commodity_page_cost | integer | cps 投放目标-商品详情页浏览 最小值 1，最大值 2000000 |
| commission_roi | float | 优化 ROI 目标，比例，无单位 最小值 0.001，最大值 50，最多保留 4 位小数 |
| view_key_page_uv | integer | cps 投放目标-商品关键页浏览 最小值 1，最大值 2000000 |
| qyt_click_spec | struct | 全域通智投-投放目标 |
| ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| ecommerce_order_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| promotion_view_key_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| view_commodity_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| smart_bid_type | enum | 出价类型，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#smart_bid_type) 可选值：{ SMART_BID_TYPE_CUSTOM, SMART_BID_TYPE_SYSTEMATIC } |
| custom_cost_cap | integer | 用户输入的成本上限，上限值范围为 0-20000 元。ADX 程序化广告不可填写提交。 最小值 0，最大值 2000000 |
| cost_constraint_scene | enum | 成本控制场景，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cost_constraint_scene) 可选值：{ COST_CONSTRAINT_SCENE_OPEN } |
| live_stream_audience_cost | integer | 直播间观众成本，单位分 最小值 10，最大值 20000 |
| click_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| first_twenty_four_hour_ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| collect_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| qyt_first_twenty_four_hour_ecommerce_order_spec | struct | 全域通智投-投放目标 |
| ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| ecommerce_order_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| promotion_view_key_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| view_commodity_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| smart_bid_type | enum | 出价类型，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#smart_bid_type) 可选值：{ SMART_BID_TYPE_CUSTOM, SMART_BID_TYPE_SYSTEMATIC } |
| custom_cost_cap | integer | 用户输入的成本上限，上限值范围为 0-20000 元。ADX 程序化广告不可填写提交。 最小值 0，最大值 2000000 |
| cost_constraint_scene | enum | 成本控制场景，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cost_constraint_scene) 可选值：{ COST_CONSTRAINT_SCENE_OPEN } |
| live_stream_audience_cost | integer | 直播间观众成本，单位分 最小值 10，最大值 20000 |
| click_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| first_twenty_four_hour_ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| collect_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| wechat_store_first_twenty_four_hour_ecommerce_order_spec | struct | 小店智投-24 小时下单-目标信息 |
| first_twenty_four_hour_ecommerce_order_cost* | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| fiction_follow_purchase_roi_spec | struct | 关注和首日付费 ROI |
| follow_cost* | integer | 关注成本，单位分 最小值 1，最大值 1000000 |
| first_day_purchase_roi* | float64 | 付费 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| fiction_register_purchase_roi_spec | struct | 注册和首日付费 ROI |
| register_cost* | integer | 注册成本，单位分 最小值 1，最大值 1000000 |
| first_day_purchase_roi* | float64 | 付费 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| fiction_register_monetization_roi_spec | struct | 注册和首日变现 ROI |
| register_cost* | integer | 注册成本，单位分 最小值 1，最大值 1000000 |
| first_day_monetization_roi* | float64 | 变现 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| game_app_activate_roi_spec | struct | 游戏应用智投投放目标：激活和首日付费 ROI |
| bid_amount* | integer | 广告出价，单位为分，ADX 程序化广告默认填写 200，详见 [\[出价规则\]](https://developers.e.qq.com/docs/start/limit#a5) |
| deep_conversion_worth_rate* | float | 深度优化价值的出价，使用转化 id 确认优化目标和深度优化目标的广告主，深度优化价值的目标出价无需传 deep_conversion_spec 结构体中字段，可直接使用 deep_conversion_worth_rate 字段传输深度出价。比值，没有单位，ADX 程序化广告不可填写提交。 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| reading_app_activate_first_day_retention_spec | struct | 阅读应用智投投放目标：激活和次留 |
| bid_amount* | integer | 广告出价，单位为分，ADX 程序化广告默认填写 200，详见 [\[出价规则\]](https://developers.e.qq.com/docs/start/limit#a5) |
| deep_conversion_behavior_bid* | integer | 深度优化行为的出价，使用转化 id 确认优化目标和深度优化目标的广告主，深度优化行为的目标出价无需传 deep_conversion_spec 结构体中字段，可直接使用 deep_conversion_behavior_bid 字段传输深度出价。单位为分。ADX 程序化广告不可填写提交。 最小值 0，最大值 1000000 |
| reading_app_activate_seven_day_retention_spec | struct | 阅读应用智投投放目标：激活和 7 留 |
| bid_amount* | integer | 广告出价，单位为分，ADX 程序化广告默认填写 200，详见 [\[出价规则\]](https://developers.e.qq.com/docs/start/limit#a5) |
| deep_conversion_behavior_bid* | integer | 深度优化行为的出价，使用转化 id 确认优化目标和深度优化目标的广告主，深度优化行为的目标出价无需传 deep_conversion_spec 结构体中字段，可直接使用 deep_conversion_behavior_bid 字段传输深度出价。单位为分。ADX 程序化广告不可填写提交。 最小值 0，最大值 1000000 |
| ai_app_activate_first_day_retention_spec | struct | AI 应用智投投放目标：激活和次留 |
| bid_amount* | integer | 广告出价，单位为分，ADX 程序化广告默认填写 200，详见 [\[出价规则\]](https://developers.e.qq.com/docs/start/limit#a5) |
| deep_conversion_behavior_bid* | integer | 深度优化行为的出价，使用转化 id 确认优化目标和深度优化目标的广告主，深度优化行为的目标出价无需传 deep_conversion_spec 结构体中字段，可直接使用 deep_conversion_behavior_bid 字段传输深度出价。单位为分。ADX 程序化广告不可填写提交。 最小值 0，最大值 1000000 |
| ai_app_register_first_day_retention_spec | struct | AI 应用智投投放目标：注册和次留 |
| bid_amount* | integer | 广告出价，单位为分，ADX 程序化广告默认填写 200，详见 [\[出价规则\]](https://developers.e.qq.com/docs/start/limit#a5) |
| deep_conversion_behavior_bid* | integer | 深度优化行为的出价，使用转化 id 确认优化目标和深度优化目标的广告主，深度优化行为的目标出价无需传 deep_conversion_spec 结构体中字段，可直接使用 deep_conversion_behavior_bid 字段传输深度出价。单位为分。ADX 程序化广告不可填写提交。 最小值 0，最大值 1000000 |
| bid_amount_spec | struct | 浅层出价 |
| bid_amount* | integer | 广告出价，单位为分，ADX 程序化广告默认填写 200，详见 [\[出价规则\]](https://developers.e.qq.com/docs/start/limit#a5) |
| bid_amount_deep_conversion_worth_rate_spec | struct | 浅层出价+深层 ROI |
| bid_amount* | integer | 广告出价，单位为分，ADX 程序化广告默认填写 200，详见 [\[出价规则\]](https://developers.e.qq.com/docs/start/limit#a5) |
| deep_conversion_worth_rate* | float | 深度优化价值的出价，使用转化 id 确认优化目标和深度优化目标的广告主，深度优化价值的目标出价无需传 deep_conversion_spec 结构体中字段，可直接使用 deep_conversion_worth_rate 字段传输深度出价。比值，没有单位，ADX 程序化广告不可填写提交。 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| bid_amount_deep_conversion_behavior_bid_spec | struct | 浅层出价+深层出价 |
| bid_amount | integer | 广告出价，单位为分，ADX 程序化广告默认填写 200，详见 [\[出价规则\]](https://developers.e.qq.com/docs/start/limit#a5) |
| deep_conversion_behavior_bid | integer | 深度优化行为的出价，使用转化 id 确认优化目标和深度优化目标的广告主，深度优化行为的目标出价无需传 deep_conversion_spec 结构体中字段，可直接使用 deep_conversion_behavior_bid 字段传输深度出价。单位为分。ADX 程序化广告不可填写提交。 最小值 0，最大值 1000000 |
| qyt_net_profit_spec | struct | 全域通智投-投放目标 |
| ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| ecommerce_order_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| promotion_view_key_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| view_commodity_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| smart_bid_type | enum | 出价类型，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#smart_bid_type) 可选值：{ SMART_BID_TYPE_CUSTOM, SMART_BID_TYPE_SYSTEMATIC } |
| custom_cost_cap | integer | 用户输入的成本上限，上限值范围为 0-20000 元。ADX 程序化广告不可填写提交。 最小值 0，最大值 2000000 |
| cost_constraint_scene | enum | 成本控制场景，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cost_constraint_scene) 可选值：{ COST_CONSTRAINT_SCENE_OPEN } |
| live_stream_audience_cost | integer | 直播间观众成本，单位分 最小值 10，最大值 20000 |
| click_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| first_twenty_four_hour_ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| collect_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| qyt_net_profit_roi_spec | struct | 全域通智投-投放目标 |
| ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| ecommerce_order_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| promotion_view_key_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| view_commodity_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| smart_bid_type | enum | 出价类型，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#smart_bid_type) 可选值：{ SMART_BID_TYPE_CUSTOM, SMART_BID_TYPE_SYSTEMATIC } |
| custom_cost_cap | integer | 用户输入的成本上限，上限值范围为 0-20000 元。ADX 程序化广告不可填写提交。 最小值 0，最大值 2000000 |
| cost_constraint_scene | enum | 成本控制场景，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cost_constraint_scene) 可选值：{ COST_CONSTRAINT_SCENE_OPEN } |
| live_stream_audience_cost | integer | 直播间观众成本，单位分 最小值 10，最大值 20000 |
| click_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| first_twenty_four_hour_ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| collect_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| wechat_store_net_profit_roi_spec | struct | 小店智投-净成交 ROI |
| deep_conversion_worth_rate | float | 深度优化价值的出价，使用转化 id 确认优化目标和深度优化目标的广告主，深度优化价值的目标出价无需传 deep_conversion_spec 结构体中字段，可直接使用 deep_conversion_worth_rate 字段传输深度出价。比值，没有单位，ADX 程序化广告不可填写提交。 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| wechat_store_net_profit_spec | struct | 小店智投-净成交下单 |
| bid_amount | integer | 广告出价，单位为分，ADX 程序化广告默认填写 200，详见 [\[出价规则\]](https://developers.e.qq.com/docs/start/limit#a5) |
| qyt_collect_spec | struct | 全域通智投-投放目标 |
| ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| ecommerce_order_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| promotion_view_key_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| view_commodity_page_cost | integer | 下单成本，单位分 最小值 1，最大值 1000000 |
| smart_bid_type | enum | 出价类型，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#smart_bid_type) 可选值：{ SMART_BID_TYPE_CUSTOM, SMART_BID_TYPE_SYSTEMATIC } |
| custom_cost_cap | integer | 用户输入的成本上限，上限值范围为 0-20000 元。ADX 程序化广告不可填写提交。 最小值 0，最大值 2000000 |
| cost_constraint_scene | enum | 成本控制场景，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cost_constraint_scene) 可选值：{ COST_CONSTRAINT_SCENE_OPEN } |
| live_stream_audience_cost | integer | 直播间观众成本，单位分 最小值 10，最大值 20000 |
| click_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| first_twenty_four_hour_ecommerce_order_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| net_profit_roi | float64 | 下单 ROI，比例，无单位 最小值 0.001，最大值 1000，最多保留 4 位小数 |
| collect_cost | integer | 下单成本，单位分 最小值 1，最大值 2000000 |
| conversion_id_list | integer[] | 转化 id 列表 数组最大长度 4 |
| marketing_asset_outer_spec | struct | 产品外部 id 数据，当推广产品类型是以下类型的时候，必须使用该字段，不允许使用 marketing_asset_id : MARKETING_TARGET_TYPE_APP_ANDROID,MARKETING_TARGET_TYPE_APP_IOS,MARKETING_TARGET_TYPE_APP_QUICK_APP,MARKETING_TARGET_TYPE_WECHAT_MINI_GAME,MARKETING_TARGET_TYPE_WECHAT_CHANNELS,MARKETING_TARGET_TYPE_MINI_PROGRAM_WECHAT,MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE,MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION,MARKETING_TARGET_TYPE_CONSUMER_PRODUCT,MARKETING_TARGET_TYPE_WECHAT_OFFICIAL_ACCOUNT,MARKETING_TARGET_TYPE_LOCAL_STORE,MARKETING_TARGET_TYPE_LOCAL_STORE_PACKAGE,MARKETING_TARGET_TYPE_COMMODITY_SET,MARKETING_TARGET_TYPE_WECHAT_WORK,MARKETING_TARGET_TYPE_MINI_GAME_QQ,MARKETING_TARGET_TYPE_PC_GAME,MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT,MARKETING_TARGET_TYPE_FICTION,MARKETING_TARGET_TYPE_SHORT_DRAMA. |
| marketing_target_type | enum | 推广产品类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) 可选值：{ MARKETING_TARGET_TYPE_APP_ANDROID, MARKETING_TARGET_TYPE_APP_IOS, MARKETING_TARGET_TYPE_WECHAT_OFFICIAL_ACCOUNT, MARKETING_TARGET_TYPE_PRODUCT, MARKETING_TARGET_TYPE_TRAFFIC, MARKETING_TARGET_TYPE_LOCAL_STORE, MARKETING_TARGET_TYPE_WECHAT_MINI_GAME, MARKETING_TARGET_TYPE_CONSUMER_PRODUCT, MARKETING_TARGET_TYPE_WECHAT_CHANNELS, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION, MARKETING_TARGET_TYPE_MINI_PROGRAM_WECHAT, MARKETING_TARGET_TYPE_APP_QUICK_APP, MARKETING_TARGET_TYPE_CONSUME_MEDICAL, MARKETING_TARGET_TYPE_COMPREHENSIVE_HOUSEKEEPING, MARKETING_TARGET_TYPE_FICTION, MARKETING_TARGET_TYPE_SHORT_DRAMA, MARKETING_TARGET_TYPE_AUDIOVISUAL_ENTERTAINMENT, MARKETING_TARGET_TYPE_BEAUTY_AND_PERSONAL_CARE, MARKETING_TARGET_TYPE_WEDDING_AND_PORTRAIT_PHOTOGRAPHY, MARKETING_TARGET_TYPE_FRANCHISE_BRAND, MARKETING_TARGET_TYPE_ENTERPRISE_SERVICES, MARKETING_TARGET_TYPE_EXHIBITION_BOOTH_DESIGN, MARKETING_TARGET_TYPE_INSURANCE, MARKETING_TARGET_TYPE_BANK, MARKETING_TARGET_TYPE_CREDIT, MARKETING_TARGET_TYPE_INVESTMENT_CONSULTING, MARKETING_TARGET_TYPE_REAL_ESTATE, MARKETING_TARGET_TYPE_TELECOMMUNICATIONS_OPERATOR, MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS, MARKETING_TARGET_TYPE_RENOVATION_SERVICES, MARKETING_TARGET_TYPE_FURNITURE_AND_BUILDING_MATERIALS, MARKETING_TARGET_TYPE_EXHIBITION_SALES, MARKETING_TARGET_TYPE_MEDICINE_INDUSTRY_COMMERCIAL, MARKETING_TARGET_TYPE_FINANCE, MARKETING_TARGET_TYPE_LOCAL_STORE_PACKAGE, MARKETING_TARGET_TYPE_CATERING_AND_LEISURE, MARKETING_TARGET_TYPE_CHAIN_RESTAURANT, MARKETING_TARGET_TYPE_COMMODITY_SET, MARKETING_TARGET_TYPE_TOURIST_TRAVEL_ROUTE, MARKETING_TARGET_TYPE_TOURIST_CRUISE_LINE, MARKETING_TARGET_TYPE_TOURIST_HOTEL_SERVICE, MARKETING_TARGET_TYPE_TOURIST_AIRLINE_TICKETS, MARKETING_TARGET_TYPE_LOCAL_STORE_COMBINE_WITH_PRODUCT, MARKETING_TARGET_TYPE_ACTIVITY, MARKETING_TARGET_TYPE_STORE, MARKETING_TARGET_TYPE_MINI_GAME_QQ, MARKETING_TARGET_TYPE_PC_GAME, MARKETING_TARGET_TYPE_WECHAT_WORK, MARKETING_TARGET_TYPE_LIVE_STREAM_ROOM, MARKETING_TARGET_TYPE_PERSONAL_STORE, MARKETING_TARGET_TYPE_PLATFORM_CHANNEL, MARKETING_TARGET_TYPE_TWO_WHEEL_VEHICLE, MARKETING_TARGET_TYPE_GOVERNMENT_AFFAIRS, MARKETING_TARGET_TYPE_CAR_ECOLOGY, MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT, MARKETING_TARGET_TYPE_APP_HARMONY, MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT_SET, MARKETING_TARGET_TYPE_PRODUCT_AGGREGATION_PAGE, MARKETING_TARGET_TYPE_WECHAT_STORE, MARKETING_TARGET_TYPE_RESALE_AND_COMMERCIAL_LAND, MARKETING_TARGET_TYPE_VIDEO_PROGRAM, MARKETING_TARGET_TYPE_FUN_TEST, MARKETING_TARGET_TYPE_MATERNITY_PARENTING, MARKETING_TARGET_TYPE_LEISURE_ENTERTAINMENT, MARKETING_TARGET_TYPE_MEDICAL_INSTITUTION, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_ACTIVITY } |
| marketing_asset_outer_id | string | 推广产品外部 id，如安卓应用 id、IOS 应用 id、小游戏 id、商品库 id 等 字段长度最小 1 字节，长度最大 1024 字节 |
| marketing_asset_outer_sub_id | string | 推广产品外部子 id，如安卓应用渠道包 id、短剧 sku_id 等 字段长度最小 1 字节，长度最大 1024 字节 |
| marketing_asset_outer_name | string | 推广产品外部名称 字段长度最小 1 字节，长度最大 1024 字节 |
| marketing_carrier_type | enum | 营销载体类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_carrier_type) 可选值：{ MARKETING_CARRIER_TYPE_UNKNOWN, MARKETING_CARRIER_TYPE_APP_ANDROID, MARKETING_CARRIER_TYPE_APP_IOS, MARKETING_CARRIER_TYPE_WECHAT_OFFICIAL_ACCOUNT, MARKETING_CARRIER_TYPE_JUMP_PAGE, MARKETING_CARRIER_TYPE_WECHAT_MINI_GAME, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION, MARKETING_CARRIER_TYPE_MINI_PROGRAM_WECHAT, MARKETING_CARRIER_TYPE_APP_QUICK_APP, MARKETING_CARRIER_TYPE_PC_GAME, MARKETING_CARRIER_TYPE_QQ_MINI_GAME, MARKETING_CARRIER_TYPE_APP_HARMONY } |
| marketing_carrier_detail | struct | 营销载体详情，当营销载体类型是 MARKETING_CARRIER_TYPE_APP_ANDROID、MARKETING_CARRIER_TYPE_APP_IOS 和 MARKETING_CARRIER_TYPE_WECHAT_MINI_GAME 等需要使用该结构体 |
| marketing_carrier_id* | string | 营销载体 id，如安卓应用 id、IOS 应用 id、小游戏 id 等 字段长度最小 0 字节，长度最大 2048 字节 |
| marketing_sub_carrier_id | string | 二级营销载体 id |
| marketing_carrier_name | string | 营销载体名称 |
| adgroup_id* | int64 | 广告 id |
| account_id* | integer | 通用的用户 id，包括 user_id 和 account_id |
| delete_account_component_spec | struct[] | 批量删除账户组件，当且仅当 task_type = TASK_TYPE_DELETE_ACCOUNT_COMPONENT 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| component_id* | integer | 组件 id |
| delete_strategy | enum | 组件删除策略，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#delete_strategy) 可选值：{ DELETE_STRATEGY_FORCE, DELETE_STRATEGY_RESTRICTED } |
| update_dynamic_creative_search_intelligent_extension_spec | struct[] | 批量修改创意智能拓流开关，当且仅当 task_type = TASK_TYPE_UPDATE_DYNAMIC_CREATIVE_SEARCH_INTELLIGENT_EXTENSION 时，才可且必须使用 数组最小长度 1，最大长度 100 |
| dynamic_creative_id* | integer | 广告创意 id |
| search_intelligent_extension* | enum | 智能拓流开关，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#search_intelligent_extension) 可选值：{ CLOSE, OPEN } |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/batch_async_requests/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "task_name": "batch_async_request_task",
    "task_type": "TASK_TYPE_UPDATE_TARGETING_ID",
    "task_spec": {
        "update_targeting_id": [
            {
                "adgroup_id": 1,
                "targeting_id": 1
            }
        ]
    }
}'
curl 'https://api.e.qq.com/v3.0/batch_async_requests/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "task_name": "batch_async_request_task",
    "task_type": "TASK_TYPE_UPDATE_TARGETING_ID",
    "task_spec": {
        "update_targeting_id": [
            {
                "adgroup_id": 1,
                "targeting_id": 1
            }
        ]
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| task_id | integer | 任务 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "task_id": 1
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
