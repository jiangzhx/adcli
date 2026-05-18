---
title: 获取定向模板 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/targetings/get
doc_id: tencent_ads_v3_0_docs_api_targetings_get
source_id: tencent_ads_v3_0_docs_api_targetings_get
---
# 获取定向模板 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | targetings/get |
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
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 0，最大长度 2 |
| field* | string | 过滤字段 可选值：{ targeting_name, created_time, last_modified_time, targeting_id, targeting_source_type } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 targeting_name 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 created_time 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } 当 field 取值 last_modified_time 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 targeting_name 时，数组长度为 1 字段长度最小 1 字节，长度最大 120 字节 当 field 取值 created_time 时，数组长度为 1 字段长度为 10 字节 当 field 取值 last_modified_time 时，数组长度为 1 字段长度为 10 字节 当 field 取值 targeting_source_type 时，数组长度为 1 字段长度最小 1 字节，长度最大 120 字节 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/targetings/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "page": 1,
    "page_size": 10
}'
curl 'https://api.e.qq.com/v3.0/targetings/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "page": 1,
    "page_size": 10
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| targeting_name | string |  |
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
| targeting_translation | string |  |
| is_deleted | boolean | 是否已删除，true：是，false：否 |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，时间戳 |
| targeting_source_type | enum | ，定向包来源，自建或者来自分享，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_targeting_source_type) 默认值：自建 |
| share_from_account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| share_from_targeting_id | integer | 定向 id |
| targeting_id | int64 | 定向 id |
| targeting_source_msg | string |  |
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
                "targeting_name": "20-60",
                "targeting": {
                    "geo_location": {
                        "location_types": [
                            "LIVE_IN"
                        ],
                        "regions": [
                            156,
                            110000,
                            120000,
                            130000,
                            140000,
                            150000,
                            210000,
                            220000,
                            230000,
                            310000,
                            320000,
                            330000,
                            340000,
                            350000,
                            360000,
                            370000,
                            410000,
                            420000,
                            430000,
                            440000,
                            450000,
                            460000,
                            500000,
                            510000,
                            520000,
                            530000,
                            540000,
                            610000,
                            620000,
                            630000,
                            640000,
                            650000
                        ],
                        "region_code_type": "REGION_CODE_TYPE_SPA",
                        "geo_location_auto_audience": false
                    },
                    "age": [
                        {
                            "min": 20,
                            "max": 60
                        }
                    ]
                },
                "targeting_translation": "年龄：20 至 60 岁；地理位置：（常住）中国未知、北京市、天津市、河北省、山西省、内蒙古自治区、辽宁省、吉林省、黑龙江省、上海市、江苏省、浙江省、安徽省、福建省、江西省、山东省、河南省、湖北省、湖南省、广东省、广西壮族自治区、海南省、重庆市、四川省、贵州省、云南省、西藏自治区、陕西省、甘肃省、青海省、宁夏回族自治区、新疆维吾尔自治区；",
                "is_deleted": false,
                "created_time": 1711093341,
                "last_modified_time": 1711093341,
                "targeting_source_type": "TARGETING_SOURCE_TYPE_CREATE",
                "share_from_account_id": 0,
                "share_from_targeting_id": 0,
                "targeting_id": 15016498904,
                "targeting_source_msg": "自建"
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

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
