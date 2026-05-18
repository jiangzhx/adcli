---
title: 获取营销单元 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/adgroups/get
doc_id: tencent_ads_v3_0_docs_api_adgroups_get
source_id: tencent_ads_v3_0_docs_api_adgroups_get
---
# 获取营销单元 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights |
| --- | --- |
| 请求地址 | adgroups/get |
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
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，若获取联盟广告位信息此字段必填，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 255 |
| field* | string | 过滤字段 可选值：{ adgroup_id, adgroup_name, created_time, last_modified_time, material_package_id, configured_status, joint_budget_rule_id, auto_derived_creative_enabled, rta_target_id } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 adgroup_id 时，可选值：{ EQUALS, IN } 当 field 取值 adgroup_name 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 created_time 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } 当 field 取值 last_modified_time 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } 当 field 取值 material_package_id 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } 当 field 取值 joint_budget_rule_id 时，可选值：{ EQUALS, IN } 当 field 取值 configured_status 时，可选值：{ EQUALS } 当 field 取值 auto_derived_creative_enabled 时，可选值：{ EQUALS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 adgroup_id 且 operator 取值 EQUALS 时， 数组长度为 1 当 field 取值 adgroup_id 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 当 field 取值 adgroup_name 时，数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 created_time 时，数组长度为 1 字段长度为 10 字节 当 field 取值 last_modified_time 时，数组长度为 1 字段长度为 10 字节 当 field 取值 material_package_id 时，数组长度为 1 当 field 取值 joint_budget_rule_id 且 operator 取值 EQUALS 时， 数组最小长度 1，最大长度 100 当 field 取值 joint_budget_rule_id 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 当 field 取值 configured_status 时，数组长度为 1 可选值：{ AD_STATUS_NORMAL, AD_STATUS_SUSPEND } 当 field 取值 auto_derived_creative_enabled 时，数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 smart_delivery_platform 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 smart_delivery_platform 且 operator 取值 IN 时， 数组最小长度 1，最大长度 1000 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 smart_delivery_platform 且 operator 取值 LESS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 smart_delivery_platform 且 operator 取值 GREATER_EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 |
| page | integer | 搜索页码 最小值 1，最大值 100 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| is_deleted | boolean | 是否已删除，true：是，false：否 可选值：{ true, false } |
| fields | string[] | 指定返回的字段列表 数组最小长度 1，最大长度 1024 字段长度最小 1 字节，长度最大 64 字节 |
| pagination_mode | enum | 分页方式，默认使用 PAGINATION_MODE_NORMAL，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_pagination_mode) 可选值：{ PAGINATION_MODE_NORMAL, PAGINATION_MODE_CURSOR } |
| cursor | string | 游标值，游标翻页模式(PAGINATION_MODE_CURSOR)使用，第一次拉取无需填写、后续拉取传递上一次返回的 cursor 数值 字段长度最小 0 字节，长度最大 10 字节 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/adgroups/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
curl -v -G 'https://api.e.qq.com/v3.0/adgroups/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| targeting | struct | 定向详细设置，存放所有定向条件 |
| geo_location | struct | 地理位置定向，"regions"、"business_districts"、"custom_locations" 不能同时为空。 |
| location_types | enum[] | 地点类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_location_types)，选择限制：对于微信流量，仅能选择"LIVE_IN"（常住）； 使用商圈（business_district）以及自定义地理位置（custom_locations）时，仅可选 "VISITED_IN"（去过），"LIVE_IN"（常住）； 如：["LIVE_IN", "VISITED_IN"] |
| regions | integer[] | 省市区县列表，可通过 [\[targeting_tags/get\]](https://developers.e.qq.com/v3.0/docs/api/targeting_tags/get) 接口获取 |
| business_districts | integer[] | 商圈 id 列表，可通过 [\[targeting_tags/get\]](https://developers.e.qq.com/v3.0/docs/api/targeting_tags/get) 接口获取 |
| custom_locations | struct[] | 自定义地理位置列表，使用火星系坐标。 |
| longitude | float64 | 经度，单位度 |
| latitude | float64 | 纬度，单位度 |
| radius | integer | 半径，单位米 |
| geo_location_auto_audience | boolean | 是否使用地域优选 |
| gender | enum[] | 性别定向，仅单选，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_gender) |
| age | struct[] | 年龄定向，范围为 18~66，设置步长需不小于 4，66 代表的是 66 岁及 66 岁以上，如 18~66 代表大于等于 18 岁 |
| min | integer | 年龄限制 |
| max | integer | 年龄限制 |
| education | enum[] | 用户学历，该功能即将下线，仅部分行业灰度开放，如有问题可联系您的客户运营。详见 [\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_education) |
| app_install_status | enum[] | 应用安装，当且仅当推广目标类型为 ANDROID、IOS 时使用，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_app_install_status) |
| marital_status | enum[] | 婚恋状态，该功能即将下线，仅部分行业灰度开放，如有问题可联系您的客户运营。详见 [\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marriage_status) |
| excluded_converted_audience | struct | 排除已转化人群行为定向，排除已转化用户定向范围 同应用，仅当推广产品类型为 ANDROID/IOS 应用时可以使用，没有选择自定义转化行为（excluded_dimension）时，使用该定向出价需要满足是 oCPC、oCPM 广告； 没有选择自定义转化行为（excluded_dimension）时，使用该定向出价需要满足是 oCPC、oCPM 广告； |
| excluded_dimension | enum | 排除已转化人群的数据维度，排除已转化人群的数据维度枚举，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_excluded_dimension) |
| conversion_behavior_list | enum[] | 转化行为，ENUM 值同广告优化目标类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| excluded_day | enum | 排除天数，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_excluded_day) |
| custom_audience | integer[] | 定向用户群，通过 [\[创建人群接口\]](https://developers.e.qq.com/v3.0/docs/api/custom_audiences/add) 创建的人群 id，custom_audience 和 excluded_custom_audience 个数之和不能超过 200 个 |
| excluded_custom_audience | integer[] | 排除用户群，通过 [\[创建人群接口\]](https://developers.e.qq.com/v3.0/docs/api/custom_audiences/add) 创建的人群 id，custom_audience 和 excluded_custom_audience 个数之和不能超过 200 个 |
| device_brand_model | struct | 设备品牌型号定向，该功能即将下线，仅部分行业灰度开放，如有问题可联系您的客户运营 |
| included_list | integer[] | 设备品牌型号定向，可通过 [\[targeting_tags/get\]](https://developers.e.qq.com/v3.0/docs/api/targeting_tags/get) 接口获取 |
| excluded_list | integer[] | 排除设备品牌型号列表，不能与 included_list 同时使用，可通过 [\[targeting_tags/get\]](https://developers.e.qq.com/v3.0/docs/api/targeting_tags/get) 接口获取 |
| user_os | enum[] | 操作系统定向，该功能即将下线，仅部分行业灰度开放，如有问题可联系您的客户运营。当 marketing_carrier_type=MARKETING_CARRIER_TYPE_APP_ANDROID 时，广告只会在 Android 操作系统上展示；当 marketing_carrier_type=MARKETING_CARRIER_TYPE_APP_IOS 时，广告只会在 iOS 操作系统上展示，其他场景下均需指定 user_os。举例：当 marketing_target_type = MARKETING_TARGET_TYPE_APP_ANDROID 或 MARKETING_TARGET_TYPE_APP_IOS 时，需要传输 user_os 的值，否则会默认通投到 iOS 和 android 双端。详见 [\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_os) 当版位=腾讯平台与内容媒体电脑端，推广产品≠微信小游戏时，不支持参数 user_os。 |
| network_type | enum[] | 联网方式定向，该功能即将下线，仅部分行业灰度开放，如有问题可联系您的客户运营。详见 [\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_network_type) |
| device_price | enum[] | 设备价格定向，该功能即将下线，仅部分行业灰度开放，如有问题可联系您的客户运营，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_device_price) |
| wechat_ad_behavior | struct | 微信广告行为定向，当且仅当投放微信广告时有效,当枚举值选择【已经添加过企业微信】需要传入企业微信 id |
| actions | enum[] | 微信再营销类型，WECHAT_OFFICIAL_ACCOUNT_FOLLOWED，关注过广告主微信公众号 APP_INSTALLED，已安装你的应用（推广目标仅支持 ANDROID、IOS） WECHAT_COUPON_OBTAINED，领取过广告主微信卡券 WECHAT_OFFICIAL_ACCOUNT_AD_LIKE，对微信公众号广告感兴趣 WECHAT_MOMENTS_AD_LIKE，对微信朋友圈广告感兴趣 MINI_GAME_WECHAT_REGISTERED，曾经注册过你的小游戏（仅推广目标为微信小游戏），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_ad_behavior_route_type) |
| excluded_actions | enum[] | 微信再营销类型，WECHAT_OFFICIAL_ACCOUNT_FOLLOWED，关注过广告主微信公众号 APP_INSTALLED，已安装你的应用（推广目标仅支持 ANDROID、IOS） WECHAT_COUPON_OBTAINED，领取过广告主微信卡券 WECHAT_OFFICIAL_ACCOUNT_AD_LIKE，对微信公众号广告感兴趣 WECHAT_MOMENTS_AD_LIKE，对微信朋友圈广告感兴趣 MINI_GAME_WECHAT_REGISTERED，曾经注册过你的小游戏（仅推广目标为微信小游戏），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_ad_behavior_route_type) |
| corp_id | string[] | 微信再营销 corp_id 列表，选择已添加过企业微信，必须填入 corp_id 列表 |
| game_consumption_level | enum[] | 游戏消费能力，该功能即将下线，仅部分行业灰度开放，如有问题可联系您的客户运营，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_game_consumption_level) |
| excluded_os | enum[] | 排除操作系统定向，目前 ANDROID_PURE_MODE 枚举仅支持 MARKETING_CARRIER_TYPE_APP_ANDROID 载体类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_excluded_os) |
| adgroup_id | int64 | 广告 id |
| targeting_translation | string | 已选择定向条件的描述 |
| configured_status | enum | 客户设置的状态，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_configured_status) |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，时间戳 |
| is_deleted | boolean | 是否已删除，true：是，false：否 |
| system_status | enum | 广告在系统中的状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_calc_ad_group_status) |
| adgroup_name | string | 广告名称，同一帐号下的广告名称不允许重复。字段长度最小 1 个等宽字符，长度最大 60 等宽字符（即字段最大长度为 60 个中文字或全角标点，120 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| marketing_goal | enum | 营销目的类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_goal) |
| marketing_sub_goal | enum | 二级营销目的类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_sub_goal) |
| marketing_carrier_type | enum | 营销载体类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_carrier_type) |
| marketing_carrier_detail | struct | 营销载体详情，当营销载体类型是 MARKETING_CARRIER_TYPE_APP_ANDROID、MARKETING_CARRIER_TYPE_APP_IOS 和 MARKETING_CARRIER_TYPE_WECHAT_MINI_GAME 等需要使用该结构体 |
| marketing_carrier_id | string | 营销载体 id，如安卓应用 id、IOS 应用 id、小游戏 id 等 |
| marketing_sub_carrier_id | string | 二级营销载体 id |
| marketing_carrier_name | string | 营销载体名称 |
| marketing_target_type | enum | 推广产品类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) |
| marketing_target_detail | struct | 营销对象详情 |
| marketing_target_detail_id | string | 推广内容资产详情 id |
| marketing_target_sub_detail_id | string | 二级推广内容资产详情 id |
| marketing_target_id | integer | 营销对象 id |
| begin_date | string | 开始投放日期，日期格式：YYYY-MM-DD，且日期小于等于 end_date |
| end_date | string | 结束投放日期，日期格式：YYYY-MM-DD，大于等于今天，且大于等于 begin_date ；针对微信流量的更新 end_time 的场景，会有额外的规则（更新后的 end_time 至少是当前时间的 6h 之后且当前更新时间到 end_time 与投放时段有交集 |
| first_day_begin_time | string | 首日开始投放时间，首日开始投放时间：HH:ii:ss，ADX 程序化广告不可填写提交。 |
| bid_amount | integer | 广告出价，单位为分，ADX 程序化广告默认填写 200，详见 [\[出价规则\]](https://developers.e.qq.com/docs/start/limit#a5) |
| optimization_goal | enum | 广告优化目标类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| time_series | string | 投放时间段，格式为 48 * 7 位字符串，且都为 0 和 1，以半个小时为最小粒度，从周一零点开始至周日 24 点结束。0 为不投放，1 为投放，全传 1 视为全时段投放，不允许全部传 0。朋友圈广告的投放时间需大于等于 6 小时，小于等于 30 个自然日，且每天至少投放 6 小时，且每天投放的时段需保持一致； ADX 程序化广告默认填写 336 个 1。 |
| automatic_site_enabled | boolean | 是否开启智能版位功能，建议使用。ADX 程序化广告不可填写提交。 |
| site_set | enum[] | 投放站点集合，当前单站点或者 SITE_SET_TENCENT_NEWS+SITE_SET_TENCENT_VIDEO 的组合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_site_set_definition) |
| daily_budget | integer | 日预算，日预算，单位为分，ADX 程序化广告不可填写提交单位为分，设置为 0 表示不设预算（即不限）； 日预算需介于 5,000 分- 400,000,000 分之间（50 元- 4,000,000 元，单位为人民币）； 修改后的日预算不能低于该广告今日已消耗金额的 1.5 倍加上冻结金额；且 修改后的日预算不能低于该广告今日已消耗金额加上 5,000 分（50 元，单位为人民币）； |
| scene_spec | struct | 场景定向，ADX 程序化广告不可填写提交。 |
| mobile_union | enum[] | 移动联盟场景定向，当且仅当投放移动联盟流量时可以使用，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_mobile_union_scene_for_write) |
| exclude_mobile_union | enum[] | 移动联盟场景屏蔽定向，当且仅当投放移动联盟流量时可以使用，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_exclude_mobile_union_scene_for_write) |
| union_position_package | integer[] | 定投联盟流量包列表，一个广告最多可选择 5 个定投流量包，且该广告所有流量包关联的广告位数量不得超过 10000 个 |
| exclude_union_position_package | integer[] | 屏蔽联盟流量包列表，一个广告最多可选择 5 个屏蔽流量包，且该广告所有流量包关联的广告位数量不得超过 10000 个 |
| tencent_news | enum[] | 腾讯新闻流量场景定向，当且仅当投放腾讯新闻流量时可以使用，功能灰度开放，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_tencent_news_scene) |
| display_scene | enum[] | 广告展示场景，当且仅当投放移动联盟流量时可以使用，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_display_scene) |
| wechat_scene | struct | 微信场景定向 |
| official_account_media_category | integer[] | 公众号媒体类型 |
| mini_program_and_mini_game | integer[] | 小程序小游戏流量类型 |
| pay_scene | integer[] | 订单详情页消费场景 |
| wechat_position | integer[] | 微信公众号与小程序定投，当且仅当投放公众号流量（site_set = SITE_SET_WECHAT）时可以使用，可用场景值从投放辅助工具（scene_spec_tags/get）获取。不允许修改 |
| mobile_union_category | integer[] | 腾讯广告联盟媒体类型场景定向，当且仅当投放腾讯广告联盟流量时（site_set = SITE_SET_MOBILE_UNION）时可以使用 |
| qbsearch_scene | enum[] | QQ 浏览器、应用宝流量场景，当且仅当投放 SITE_SET_QBSEARCH 版位时可以使用，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_qb_search_scene) |
| wechat_channels_scene | integer[] | 微信视频号定投 |
| pc_scene | enum[] | PC 端定投，当且仅当投放 SITE_SET_PCQQ 版位时可以使用，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_p_c_scene) |
| wechat_search_scene | enum[] | 搜一搜流量场景，当且仅当投放 SITE_SET_WECHAT 版位时可以使用，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_wechat_search_scene) |
| user_action_sets | struct[] | 用户行为数据源，详见 [\[转化归因功能\]](https://developers.e.qq.com/docs/guide/ads/tracking) |
| type | enum | 数据源类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_user_action_set_type) |
| id | integer | 数据源 id，通过 user_action_sets 模块创建和获取，数据源 id 对应的类型要与 user_action_sets 中指定的 type 一致 |
| data_source_id | integer | DN 数据源 id，新的 DN 数据源 id，与知数数据源 id 一一对应 |
| deep_conversion_spec | struct | oCPA 深度优化内容，若此字段不传，或传空则视为无限制条件，ADX 程序化广告不可填写提交。 |
| deep_conversion_type | enum | oCPA 深度优化价值配置，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_deep_conversion_type) |
| deep_conversion_behavior_spec | struct | oCPA 优化转化行为配置 |
| goal | enum | 优化转化行为目标，枚举列表：[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| bid_amount | integer | 深度优化行为的出价，深度优化行为出价，单位为分 |
| deep_conversion_worth_spec | struct | oCPA 优化 ROI 配置 |
| goal | enum | 优化 ROI 目标，枚举列表：[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_deep_conversion_worth_goal) |
| expected_roi | float | 深度优化价值效果值 |
| deep_conversion_worth_advanced_spec | struct | oCPC/oCPM 优化 ROI 配置 |
| goal | enum | 优化 ROI 目标，枚举列表：[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_deep_conversion_worth_goal) |
| expected_roi | float | 深度优化价值效果值 |
| deep_conversion_behavior_advanced_spec | struct | oCPX 深度辅助配置 |
| goal | enum | 深度辅助优化 OG 目标，枚举列表：[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| bid_amount | integer | 深度辅助优化 OG 出价，深度辅助优化 OG 出价，单位为分 |
| conversion_id | integer | 转化 id，包含优化目标，深度优化目标，数据上报方式，归因方式等信息，仅 ocpc/ocpm 广告可设置，转化 id 设置后不可修改。可通过辅助工具[\[转化查询接口\]](https://developers.e.qq.com/v3.0/docs/api/conversions/get)查询可使用的转化 id。当传入转化 id 时，可无需再传入 user_action_sets，additional_user_action_sets，optimization_goal，deep_conversion_spec 字段信息。如若同时传入转化 id 和 user_action_sets/additional_user_action_sets，将以转化 id 的信息为第一优先级；如若同时传入转化 id 和 optimization_goal/deep_conversion_spec，仅当转化 id 中包含的优化目标/深度优化目标与传入的优化目标/深度优化目标信息一致时，才允许创建，否则将不允许创建。功能灰度开放中,不支持朋友圈。ADX 程序化广告不可填写提交。 |
| deep_conversion_behavior_bid | integer | 深度优化行为的出价，使用转化 id 确认优化目标和深度优化目标的广告主，深度优化行为的目标出价无需传 deep_conversion_spec 结构体中字段，可直接使用 deep_conversion_behavior_bid 字段传输深度出价。单位为分。ADX 程序化广告不可填写提交。 |
| deep_conversion_worth_rate | float | 深度优化价值的出价，使用转化 id 确认优化目标和深度优化目标的广告主，深度优化价值的目标出价无需传 deep_conversion_spec 结构体中字段，可直接使用 deep_conversion_worth_rate 字段传输深度出价。比值，没有单位，ADX 程序化广告不可填写提交。 |
| deep_conversion_worth_advanced_rate | float | 强化优化价值的期望 ROI，使用转化 id 确认优化目标和强化优化目标的广告主，强化优化价值的目标出价无需传 deep_conversion_spec 结构体中字段，可直接使用 deep_conversion_worth_advanced_rate 字段传输深度出价。该功能灰度开放中。ADX 程序化广告不可填写提交。 |
| deep_conversion_behavior_advanced_bid | integer | 深度辅助优化 OG 出价，使用转化 id 确认优化目标和深度辅助优化 OG 的广告主，深度辅助优化 OG 出价无需传 deep_conversion_spec 结构体中字段，可直接使用 deep_conversion_behavior_advanced_bid 字段传输深度出价。单位为分。ADX 程序化广告不可填写提交。 |
| bid_mode | enum | 出价方式，ADX 程序化广告仅支持{BID_MODE_CPC,BID_MODE_CPM}，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_bid_mode) |
| auto_acquisition_enabled | boolean | 一键起量开关，一键起量开关定义。ADX 程序化广告不可填写提交。 |
| auto_acquisition_budget | integer | 一键起量预算，单位为分，一键起量预算定义。ADX 程序化广告不可填写提交。 |
| smart_bid_type | enum | 出价类型，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#smart_bid_type) |
| smart_cost_cap | integer | 自动出价下，系统计算的预计成本的上限值，单位为分，ADX 程序化广告不可填写提交。 |
| auto_derived_creative_enabled | boolean | 创意增强 MAX 开关，(系统会智能预测创意增补时机，AI 生成高潜力素材，这将提高营销单元的跑量能力)，使用即代表已阅读并遵守[\[妙思创意增强 MAX API 服务协议\]](https://rule.tencent.com/rule/202604200004) |
| auto_derived_creative_preference | struct | 创意增强 MAX 偏好设置，非必选项，如不设置偏好，则将根据默认偏好全选方式生效。 |
| auto_derived_creative_method_type_list | enum[] | 创意增强 MAX 偏好设置列表，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#auto_derived_creative_method_type) |
| search_expand_targeting_switch | enum | 搜索定向拓展开关，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_search_expand_targeting_switch) |
| auto_derived_landing_page_switch | boolean | 是否开启自动衍生落地页开关，ADX 程序化广告不可填写提交。 |
| data_model_version | integer | 数据版本号 |
| bid_scene | enum | 出价场景，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#bid_scene) |
| marketing_target_ext | struct | 营销对象扩展数据 |
| marketing_target_name | string | 出价场景 |
| category_name1 | string | 出价场景 |
| category_name2 | string | 出价场景 |
| category_name3 | string | 出价场景 |
| deep_optimization_type | enum | 深度优化策略类型，该字段仅在深度优化开启时可用，且不可与 deep_optimization_action_type 同时使用，仅当投放微信版位广告时可设置为 DEEP_OPTIMIZATION_TYPE_SECOND_STAGE_BID。当没有指定该字段时 |
| flow_optimization_enabled | boolean | 是否使用自动流量优选，该功能已废弃，以下为原说明文档：仅支持腾讯广告联盟版位使用，且不能和腾讯广告联盟行业精选流量包(mobile_union_industry)或腾讯广告联盟媒体类型场景定向（mobile_union_category）同时使用，flow_optimization_enabled 设置为 true, 开启自动流量优选。ADX 程序化广告不可填写提交。 |
| marketing_target_attachment | struct | 营销对象附加信息 |
| android_channel_id | string | 安卓应用渠道包 id，当前特指投放腾讯开放平台安卓应用的渠道包 id，从推广目标模块的读取接口可以获取，渠道包 id 字段由"xx;yy" 两部分组成，获取渠道包 id 时 xx 会被置为 0，0 为正常。 |
| negative_word_cnt | struct | 否定词个数 |
| exact_negative_word_cnt | number | 整数 |
| phrase_negative_word_cnt | number | 整数 |
| search_expansion_switch | enum | 搜索扩量开关，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#search_expansion_switch) |
| marketing_asset_id | integer | 产品 id，marketing_asset_id 与 marketing_asset_outer_spec 不能同时为空，也不能同时使用 |
| promoted_asset_type | enum | 推广内容类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#promoted_asset_type) |
| material_package_id | integer | 素材标签 id，ADX 程序化广告不可填写提交。 |
| marketing_asset_outer_spec | struct | 产品外部 id 数据，当推广产品类型是以下类型的时候，必须使用该字段，不允许使用 marketing_asset_id : MARKETING_TARGET_TYPE_APP_ANDROID,MARKETING_TARGET_TYPE_APP_IOS,MARKETING_TARGET_TYPE_APP_QUICK_APP,MARKETING_TARGET_TYPE_WECHAT_MINI_GAME,MARKETING_TARGET_TYPE_WECHAT_CHANNELS,MARKETING_TARGET_TYPE_MINI_PROGRAM_WECHAT,MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE,MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION,MARKETING_TARGET_TYPE_CONSUMER_PRODUCT,MARKETING_TARGET_TYPE_WECHAT_OFFICIAL_ACCOUNT,MARKETING_TARGET_TYPE_LOCAL_STORE,MARKETING_TARGET_TYPE_LOCAL_STORE_PACKAGE,MARKETING_TARGET_TYPE_COMMODITY_SET,MARKETING_TARGET_TYPE_WECHAT_WORK,MARKETING_TARGET_TYPE_MINI_GAME_QQ,MARKETING_TARGET_TYPE_PC_GAME,MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT,MARKETING_TARGET_TYPE_FICTION,MARKETING_TARGET_TYPE_SHORT_DRAMA. |
| marketing_target_type | enum | 推广产品类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) |
| marketing_asset_outer_id | string | 推广产品外部 id，如安卓应用 id、IOS 应用 id、小游戏 id、商品库 id 等 |
| marketing_asset_outer_sub_id | string | 推广产品外部子 id，如安卓应用渠道包 id、短剧 sku_id 等 |
| marketing_asset_outer_name | string | 推广产品外部名称 |
| poi_list | string[] | 门店 id 列表 |
| marketing_scene | enum | 营销目标 |
| exploration_strategy | enum | ，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#site_set_exploration_strategy) |
| priority_site_set | enum[] | 投放站点集合，当前单站点或者 SITE_SET_TENCENT_NEWS+SITE_SET_TENCENT_VIDEO 的组合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_site_set_definition) |
| ecom_pkam_switch | enum | 一方人群跑量加强开关状态，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#ecom_pkam_switch) |
| forward_link_assist | enum | 助攻行为目标，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| conversion_name | string | 转化名称 |
| auto_acquisition_status | enum | ，一键起量状态, 一键起量状态表示当前广告在开启一键起量时，所处的不同起量阶段。一键起量状态与一键起量开关是两个独立的字段，一键起量开关为客户创建或更新时设置的开关，正常的广告在一键起量过程结束后，一键起量开关不会随一键起量状态改变。起量结束后，如果想再次开启一键起量，需要关闭一键起量开关后再次开启一键起量开关。，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_auto_acquisition_status) |
| cost_constraint_scene | enum | 成本控制场景，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cost_constraint_scene) |
| custom_cost_cap | integer | 用户输入的成本上限，上限值范围为 0-20000 元 |
| mpa_spec | struct | 动态商品广告属性，当广告形态为动态商品广告时，该字段必填，ADX 程序化广告不可填写提交。 |
| recommend_method_ids | integer[] | 动态创意广告的商品推荐方式，有使用权限的推荐方式 id，当广告形态为动态创意广告时，该字段必填，如填写多个推荐方式，需确保推荐方式的父节点为同一个 |
| product_catalog_id | string | 商品库 id |
| product_series_id | string | 商品集合 id |
| short_play_pay_type | enum | 售卖方式类型，售卖方式类型，仅部分行业灰度开放，如需使用可联系您的运营接口同学，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#short_play_pay_type) |
| sell_strategy_id | integer | 售卖策略 id，售卖策略 id，售卖方式为付费类型(short_play_pay_type=SHORT_PLAY_PAY_TYPE_CHARGE_PLAY)时，必填。可通过 landing_page_sell_strategy/get 接口查询 |
| og_completion_type | enum | 达成类型，仅在优化目标组合为双目标下单+下单 ROI 的中使用，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#og_completion_type) |
| dca_spec | struct | 动态内容广告属性，只有当动态广告类型 dynamic_ad_type 为动态内容广告时，才可以设置该字段 |
| recommend_method_ids | integer[] | 动态内容广告的优选方式，目前只支持设置单个优选方式，支持的优选方式可选值为：RTA 优选（取值为 95，需申请权限） |
| set_id | string | 动态内容广告的素材集合 id |
| aoi_optimization_strategy | struct | 高价值范围探索，功能灰度开放中，如需使用可联系您的客户运营。ADX 程序化广告不可填写提交。 |
| aoi_optimization_strategy_enabled | boolean | 布尔类型 |
| aoi_id_list | integer[] |  |
| cost_guarantee_status | enum | 成本保障状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_cost_guarantee_status) |
| cost_guarantee_money | integer | 成本保障赔付金额，单位为分 |
| additional_product_spec | struct | 附加商品属性，ADX 程序化广告不可填写提交。 |
| product_catalog_id | string | 商品库 id |
| product_outer_id | string | 商品 id |
| enable_breakthrough_siteset | boolean | 是否支持版位突破，广告版位选择“微信朋友圈”，当广告有机会获得更多曝光与转化时，将可能投放到微信公众号与小程序版位。ADX 程序化广告不可填写提交。 |
| live_recommend_strategy_enabled | boolean | 直播种草人群探索，功能灰度开放中，如需使用可联系您的客户运营。ADX 程序化广告不可填写提交。 |
| custom_cost_roi_cap | float | 控制成本的期望 ROI |
| enable_steady_exploration | boolean | 是否稳步探索更多版位，当选择特定版位时 |
| adx_realtime_type | enum | ADX 程序化广告素材实时回复类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_adx_realtime_type) |
| smart_targeting_status | enum | 广告智能定向状态，该参数用于获取广告组当前的实际定向模式状态，帮助开发者确认广告组当前的定向配置方式，便于后续管理和优化。，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#smart_targeting_status) |
| page_info | struct | 分页配置信息 |
| page | integer | 搜索页码 默认值：1 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |
| cursor_page_info | struct | 游标分页信息 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| total_number | integer | 总条数 |
| next_cursor | string | 下一页游标值，往后翻页时，参数 cursor 为当前值，若为空则无下一页 |
| previous_cursor | string | 上一页游标值，往前翻页时，参数 cursor 为当前值，若为空则无上一页 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": ""
}
```

## 场景组合示例

枚举值会自动根据已选条件变化，只展示有示例数据的枚举值

## 可视化调试工具

## 相关阅读

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
