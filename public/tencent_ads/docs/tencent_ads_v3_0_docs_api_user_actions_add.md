---
title: 上传用户行为数据 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/user_actions/add
doc_id: tencent_ads_v3_0_docs_api_user_actions_add
source_id: tencent_ads_v3_0_docs_api_user_actions_add
---
# 上传用户行为数据 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,audience_management,user_actions |
| --- | --- |
| 请求地址 | user_actions/add |
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
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| user_action_set_id* | integer | 用户行为源 id，通过 [\[user_action_sets 接口\]](https://developers.e.qq.com/docs/api/user_data/user_action_set/user_action_sets_add) 创建用户行为源时分配的唯一 id。请注意，当填写的用户行为数据源类型为 {WECHAT, WECHAT_MINI_PROGRAM, WECHAT_MINI_GAME} 时，必填 user_id 字段中的 wechat_openid (或 wechat_unionid) 及 wechat_app_id。 |
| actions* | struct[] | 返回数组列表，不能大于 50KB 数组最小长度 1，最大长度 50 |
| action_time* | integer | 行为发生时，客户端的时间点。UNIX 时间，单位为秒，如果不填将使用服务端时间填写 最小值 0，最大值 2147483647 |
| user_id | struct | 用户标识，app 数据上报时必填，web 数据上报时可以不填 user_id，但建议填写，方便后续优化 |
| hash_imei | string | IMEI 设备号保持小写，进行 md5 编码 字段长度为 32 字节 |
| md5_sha256_imei | string | 先采用 MD5 算法加密，（加密后统一十六进制小写），然后再采用 SHA256 算法加密后的 IMEI，加密前需要格式转化成 14 位或 15 位数字 + 小写字母串，加密后为 64 位“数字(0-9)+小写字母(a-f)”组成的数字字母串 字段长度为 64 字节 |
| hash_idfa | string | IDFA 设备号保持大写，进行 MD5 编码 字段长度为 32 字节 |
| md5_sha256_idfa | string | 先采用 MD5 算法加密，（加密后统一十六进制小写），然后再采用 SHA256 算法加密后的 IDFA，加密前需要格式转化成 32 位的数字 + 大写字母，加密后为 64 位“数字(0-9)+小写字母(a-f)”组成的数字字母串 字段长度为 64 字节 |
| hash_phone | string | 电话号码直接 MD5 编码，如 md5(13500000000) 字段长度为 32 字节 |
| sha256_phone | string | SHA256 算法加密后的手机号，加密前为 11 位的纯数字串，加密后为不计大小写的 64 位数字字母串 字段长度为 64 字节 |
| hash_android_id | string | 对 android_id 进行 MD5 编码 字段长度为 32 字节 |
| hash_oaid | string | MSA 制定的匿名设备标识符，保留原始值，然后进行 MD5 编码。具体 OAID 介绍请见[\[OAID 介绍\]](http://msa-alliance.cn/) 字段长度为 32 字节 |
| md5_sha256_oaid | string | 先采用 MD5 算法加密，（加密后统一十六进制小写），然后再采用 SHA256 算法加密后的 OAID，加密前请使用 OAID 原值直接 MD5，不要转换大小写或去连接符，加密后为 64 位“数字(0-9)+小写字母(a-f)”组成的数字字母串 字段长度为 64 字节 |
| wechat_openid | string | 微信 openid 保持原值，微信 openid 是微信用户在公众号/小程序 appid 下的唯一用户标识（appid 不同，则获取到的 openid 就不同），可用于永久标记一个用户。您只能上传您已经获得授权关联的 APPID 内的 openID。否则会解析失败。 请注意，当所填 user_action_set_id 的类型为{WECHAT, WECHAT_MINI_PROGRAM, WECHAT_MINI_GAME}时，此字段和 wechat_unionid 必填其一。 字段长度最小 1 字节，长度最大 64 字节 |
| wechat_unionid | string | 微信 unionid 保持原值，微信 unionid 是微信用户在同一个微信开发者账号下的唯一用户标识（开发者账号不同，则获取到的 unionid 就不同），可用于永久标记一个用户。您只能上传您已经获得授权关联的 APPID 所属开发者账号内的 unionid。否则会解析失败。 请注意，当所填 user_action_set_id 的类型为{WECHAT, WECHAT_MINI_PROGRAM, WECHAT_MINI_GAME}时，此字段和 wechat_openid 必填其一。 字段长度最小 1 字节，长度最大 64 字节 |
| wechat_app_id | string | 微信分配的 APPID，请填写所填的 wechat_openid 对应的 APPID。请确保您已经获得所填 APPID 的授权关联，否则将无法通过鉴权。当您填写 wechat_openid 时，此项必填。当您未填 wechat_openid，此项填写无效。 请注意，当所填 user_action_set_id 的类型为{WECHAT, WECHAT_MINI_PROGRAM, WECHAT_MINI_GAME}时，此字段必填。 字段长度最小 2 字节，长度最大 64 字节 |
| caid | string | caid，由数字与小写字母组成的 32 位长度的字符串。 字段长度最小 1 字节，长度最大 64 字节 |
| action_type* | enum | 标准行为类型，当值为 'CUSTOM' 时表示自定义行为类型。详见 [\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_action_type) 可选值：{ CUSTOM, REGISTER, VIEW_CONTENT, CONSULT, ADD_TO_CART, PURCHASE, ACTIVATE_APP, SEARCH, ADD_TO_WISHLIST, INITIATE_CHECKOUT, COMPLETE_ORDER, DOWNLOAD_APP, START_APP, RATE, PAGE_VIEW, RESERVATION, SHARE, APPLY, CLAIM_OFFER, NAVIGATE, PRODUCT_RECOMMEND, VISIT_STORE, TRY_OUT, DELIVER, CONFIRM_EFFECTIVE_LEADS, CONFIRM_POTENTIAL_CUSTOMER, CREATE_ROLE, AUTHORIZE, TUTORIAL_FINISH, SCANCODE, ENTER_BACKGROUND, ENTER_FOREGROUND, TICKET, LOGIN, QUEST, UPDATE_LEVEL, CREATE, PAUSE, RESUME, APP_QUIT, BIND_ACCOUNT, ADD_PAYMENT, PRE_CREDIT, CREDIT, WITHDRAW_DEPOSITS, LANDING_PAGE_CLICK, SELECT_COURSE, RE_FUND, PLATFORM_VIEW, ONE_DAY_LEAVE, PRODUCT_VIEW, PURCHASE_MEMBER_CARD, ONLINE_CONSULT, MAKE_PHONE_CALL, ADD_GROUP, ADD_CUSTOMER_PAGE_VIEW, ADD_CUSTOMER_PAGE_INTERACTIVE, CUSTOMER_PROMOTION_PAGE_VIEW, CUSTOMER_PROMOTION_PAGE_INTERACTIVE, ABNORMAL_ACTION, LIVE_STREAM, SCANCODE_WX, STAY_PAY_7, STAY_PAY_15, STAY_PAY_30, INSURANCE_PAY, RESERVATION_CHECK, PARTICIPATED, COMPLETED, REGULAR_PRICE_COURSE, DROP_OUT, CONFIRM_DELIVERY_ORDER, CANCEL_DELIVERY_ORDER, OPEN_ACCOUNT, DEPOSIT, TRADE, SECURITY_NEGATIVE, AD_CLICK, AD_IMPRESSION, SIGN_IN, FOLLOW, ADD_DESKTOP, RETURN, LEAVE_INFORMATION, PURCHASE_COUPON, TRY_OUT_INTENTION, INEFFECTIVE_LEADS, READ_ARTICLE, COMMENT, CARD_CLICK, WECOM_CONSULT, BIND_CARD, LOW_PRICE_COURSE, ADD_WECHAT, PRE_PAY, QUIT_GROUP, PHONE_CONNECTED, RE_ACTIVE, CLAIM_COURSE, VIEW_ACQUISITION_CONTENT, TERMINATION, RENEWAL, CONSULT_INTENTION, CANCEL_DELIVER, ADD_WECHAT_NEGATIVE, LEADS_OUTBOUND, LEADS_DISTRIBUTED, CANCEL_ORDER, INTEREST_RATE, LONGLOAN, OVERDUE, CREDIT_LEAKAGE, COUPON_REDEMPTION, VIEW_DRAMA, UNLOCK_PAID_EPISODES, CREATE_GAME_CLUB, TAP_GAME_CLUB, CREATE_GAME_ROOM, JOIN_GAME_ROOM, BINGE_VIEWING, CHECK_IN, LIKE, UNDERWRITING, FIRST_WITHDRAW, LOW_PRICE_INSURANCE_PAYMENT, STANDARD_PRICE_INSURANCE_PAYMENT, BRIDGING_COURSE_COMPLETED, SELECT_RECHARGE_LEVEL, COLLECTION_PAGE_VIEW, POST_BULLET_SCREEN, PROMPT_INPUT, VIEW_NOVEL, EXIT_NOVEL, UNSUBSCRIBE_SERVICE, CLUE_PAY_SUCCEED, COMPLAINTS, NEGATIVE_FEEDBACK, COURSE_VIDEO_COMPLETE, SUBSCRIBE, PRODUCT_VIEW_LEAVE, ORDER_BUTTON_CLICK, EFFECTIVE_INSURE } |
| outer_action_id | string | 用户自定义的行为 id 标识，用来标识一个行为，可以用于转化、OCPA 等去重使用，只能由字母、数字、和下划线组成 字段长度最小 0 字节，长度最大 255 字节 |
| action_param | string | 行为所带的参数，详见 [\[param_map\]](https://developers.e.qq.com/docs/reference/illustration#param_map) 字段长度最小 1 字节，长度最大 204800 字节 |
| custom_action | string | 自定义行为类型，当 action_type=CUSTOM 时必填 字段长度最小 1 字节，长度最大 128 字节 |
| trace | struct | 跟踪信息 |
| click_id | string | 点击 id 字段长度最小 1 字节，长度最大 64 字节 |
| url | string | url，网页回传时必须要填写 url，请填写效果数据发生 h5 页面 URL 地址 字段长度最小 1 字节，长度最大 2048 字节 |
| product_inform | struct | 商品信息 |
| content_type | enum | 商品库行业，当您需要传输的商品信息为商品库行业标准类目时需要填写；如果传输的商品信息为商品 id，则无需填写。，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#action_product_inform_type) 可选值：{ EC, ESTATE, VIDEO, CAR, NEWS_INFORMATION, BEAUTY_PERSONAL_CARE, RETAIL, EDUCATION, READING, INSURANCE, LOAN, FINANCIAL, BANKCARD, WEDDING, SECURITIES, DECORATION_BUILDING_MATERIAL, CARRIER, GAME } |
| product_catalog_id | string | 商品库 id，指您已经同步到腾讯的商品库所对应的商品库 id。当填了商品 id 时，必须填写商品库 id。 字段长度最小 1 字节，长度最大 64 字节 |
| product_id | string[] | 与行为相关的商品 id 列表，请填写商品库 id 内对应的商品 id 数组最大长度 1000 |
| category_path | string[] | 与行为相关的类目名称列表，对于所需回传的每一个商品类目，请按照“一级类目名称/二级类目名称/三级类目名称/四级类目名称”的格式回传完整类目路径。 数组最大长度 16 |
| channel | enum | 渠道信息，标识该条行为发生在何渠道上。，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#action_channel_type) 可选值：{ NATURAL, TENCENT, BYTEDANCE, KUAISHOU, ALIBABA, BAIDU, OTHERS, MULTIPLE, UNKNOWN } |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/user_actions/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "user_action_set_id": 1111111111,
    "actions": [
        {
            "outer_action_id": "示例唯一行为 id_请指定",
            "action_time": 1492998081,
            "user_id": {
                "hash_imei": "f9efca36a..."
            },
            "action_type": "CUSTOM",
            "custom_action": "my_type",
            "action_param": {
                "value": 28,
                "quantity": 5,
                "brand_name": "my_brand",
                "int_example": 123,
                "int_array_example": [
                    123,
                    234
                ],
                "double_example": 123.45,
                "double_array_example": [
                    123.45,
                    234.56
                ],
                "bool_example": true,
                "bool_array_example": [
                    true,
                    false
                ],
                "string_example": "123",
                "string_array_example": [
                    "123",
                    "234",
                    "abc"
                ]
            },
            "product_inform": {
                "content_type": "EC",
                "category_path": [
                    "家用电器/厨房小电/豆浆机",
                    "本地生活旅游出行/旅游出行/机票火车票"
                ]
            },
            "channel": "CHANNEL_NATURAL"
        }
    ]
}'
curl 'https://api.e.qq.com/v3.0/user_actions/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "user_action_set_id": 1111111111,
    "actions": [
        {
            "outer_action_id": "示例唯一行为 id_请指定",
            "action_time": 1492998081,
            "user_id": {
                "hash_imei": "f9efca36a..."
            },
            "action_type": "CUSTOM",
            "custom_action": "my_type",
            "action_param": {
                "value": 28,
                "quantity": 5,
                "brand_name": "my_brand",
                "int_example": 123,
                "int_array_example": [
                    123,
                    234
                ],
                "double_example": 123.45,
                "double_array_example": [
                    123.45,
                    234.56
                ],
                "bool_example": true,
                "bool_array_example": [
                    true,
                    false
                ],
                "string_example": "123",
                "string_array_example": [
                    "123",
                    "234",
                    "abc"
                ]
            },
            "product_inform": {
                "content_type": "EC",
                "category_path": [
                    "家用电器/厨房小电/豆浆机",
                    "本地生活旅游出行/旅游出行/机票火车票"
                ]
            },
            "channel": "CHANNEL_NATURAL"
        }
    ]
}'
```

## 应答字段

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": ""
}
```

## 可视化调试工具

请求

## 相关阅读

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
