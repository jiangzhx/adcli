---
title: 创建客户人群 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/custom_audiences/add
doc_id: tencent_ads_v3_0_docs_api_custom_audiences_add
source_id: tencent_ads_v3_0_docs_api_custom_audiences_add
---
# 创建客户人群 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | audience_management,ads_management,user_actions |
| --- | --- |
| 请求地址 | custom_audiences/add |
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
| name* | string | 人群名称，同一个帐号下的人群不许重名 字段长度最小 1 字节，长度最大 32 字节 |
| type* | enum | 人群类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_audience_type) 可选值：{ CUSTOMER_FILE, LOOKALIKE, USER_ACTION, KEYWORD, AD, COMBINE } |
| outer_audience_id | string | 广告主对人群在自己系统里的编码，只能包含数字或字母或下划线；如果该编码创建过人群，再次用该编码创建人群时，会返回之前用该编码创建的人群 id ；人群编码不能与标签编码（tag_code）重复 字段长度最小 1 字节，长度最大 128 字节 |
| description | string | 定向描述 字段长度最小 0 字节，长度最大 250 字节 |
| audience_spec | struct | 人群信息，和 type 相关 |
| lookalike_spec | struct | Lookalike 人群信息，当 type=LOOKALIKE 时必填 |
| seed_audience_id* | integer | 种子人群 id，种子人群：覆盖人数 100-30000000, 状态必须是'成功可用', 不能是扩展人群 |
| expand_user_count* | integer | lookalike 目标人数，是 500000 的整数倍 最小值 500000，最大值 100000000 |
| user_action_spec | struct | UserAction 人群信息，当 type=USER_ACTION 时必填 |
| user_action_set_id* | integer | 用户行为源 id，通过 [\[user_action_sets 接口\]](https://developers.e.qq.com/docs/api/user_data/user_action_set/user_action_sets_add) 创建用户行为源时分配的唯一 id。 |
| match_rule_type* | enum | 匹配规则类型，当 user_action_set 为 Android/iOS APP 类型时只可选 ACTION，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_match_rule_type) 可选值：{ URL, ACTION } |
| extract_type | enum | 行为人群提取类型，当 match_rule_type=ACTION 时生效，默认 FILTER，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_extract_rule_type) 可选值：{ FILTER, AGGREGATION } |
| time_window* | integer | 时间窗，用来圈定最近多少天发生过某行为的人群，如今天是 1 月 14 日，则最近 14 天的范围是 1 月 1 日至 1 月 14 日。当 extractType = AGGREGATION 时，时间窗最大取值为 90 天 最小值 0，最大值 180 |
| url_match_rule | struct | url 匹配规则，当 match_rule_type = URL 时必填 |
| url_matcher_group* | struct[] | 匹配规则组，如果为空表示全站浏览人群，多个组之间是 AND 关系 数组最大长度 16 |
| url_matcher* | struct[] | 匹配规则，多个匹配规则之间是 OR 关系 数组最大长度 16 |
| param_value* | string | 参数值 字段长度最小 1 字节，长度最大 128 字节 |
| operator* | enum | 运算符，operator 只允许 EQ、NE、CONTAIN、NOT_CONTAIN，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operator) 可选值：{ LT, GT, EQ, NE, CONTAIN, NOT_CONTAIN } |
| action_match_rule | struct | 行为和参数匹配规则，当 match_rule_type = ACTION，extractType 为空或者 extractType = FITLER 时必填 |
| action_type* | enum | 标准行为类型，当值为 'CUSTOM' 时表示自定义行为类型, 详见 [\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_action_type) 可选值：{ CUSTOM, REGISTER, VIEW_CONTENT, CONSULT, ADD_TO_CART, PURCHASE, ACTIVATE_APP, SEARCH, ADD_TO_WISHLIST, INITIATE_CHECKOUT, COMPLETE_ORDER, DOWNLOAD_APP, START_APP, RATE, PAGE_VIEW, RESERVATION, SHARE, APPLY, CLAIM_OFFER, NAVIGATE, PRODUCT_RECOMMEND, VISIT_STORE, TRY_OUT, DELIVER, CONFIRM_EFFECTIVE_LEADS, CONFIRM_POTENTIAL_CUSTOMER, CREATE_ROLE, AUTHORIZE, TUTORIAL_FINISH, SCANCODE, ENTER_BACKGROUND, ENTER_FOREGROUND, TICKET, LOGIN, QUEST, UPDATE_LEVEL, CREATE, PAUSE, RESUME, APP_QUIT, BIND_ACCOUNT, ADD_PAYMENT, PRE_CREDIT, CREDIT, WITHDRAW_DEPOSITS, LANDING_PAGE_CLICK, SELECT_COURSE, RE_FUND, PLATFORM_VIEW, ONE_DAY_LEAVE, PRODUCT_VIEW, PURCHASE_MEMBER_CARD, ONLINE_CONSULT, MAKE_PHONE_CALL, ADD_GROUP, ADD_CUSTOMER_PAGE_VIEW, ADD_CUSTOMER_PAGE_INTERACTIVE, CUSTOMER_PROMOTION_PAGE_VIEW, CUSTOMER_PROMOTION_PAGE_INTERACTIVE, ABNORMAL_ACTION, LIVE_STREAM, SCANCODE_WX, STAY_PAY_7, STAY_PAY_15, STAY_PAY_30, INSURANCE_PAY, RESERVATION_CHECK, PARTICIPATED, COMPLETED, REGULAR_PRICE_COURSE, DROP_OUT, CONFIRM_DELIVERY_ORDER, CANCEL_DELIVERY_ORDER, OPEN_ACCOUNT, DEPOSIT, TRADE, SECURITY_NEGATIVE, AD_CLICK, AD_IMPRESSION, SIGN_IN, FOLLOW, ADD_DESKTOP, RETURN, LEAVE_INFORMATION, PURCHASE_COUPON, TRY_OUT_INTENTION, INEFFECTIVE_LEADS, READ_ARTICLE, COMMENT, CARD_CLICK, WECOM_CONSULT, BIND_CARD, LOW_PRICE_COURSE, ADD_WECHAT, PRE_PAY, QUIT_GROUP, PHONE_CONNECTED, RE_ACTIVE, CLAIM_COURSE, VIEW_ACQUISITION_CONTENT, TERMINATION, RENEWAL, CONSULT_INTENTION, CANCEL_DELIVER, ADD_WECHAT_NEGATIVE, LEADS_OUTBOUND, LEADS_DISTRIBUTED, CANCEL_ORDER, INTEREST_RATE, LONGLOAN, OVERDUE, CREDIT_LEAKAGE, COUPON_REDEMPTION, VIEW_DRAMA, UNLOCK_PAID_EPISODES, CREATE_GAME_CLUB, TAP_GAME_CLUB, CREATE_GAME_ROOM, JOIN_GAME_ROOM, BINGE_VIEWING, CHECK_IN, LIKE, UNDERWRITING, FIRST_WITHDRAW, LOW_PRICE_INSURANCE_PAYMENT, STANDARD_PRICE_INSURANCE_PAYMENT, BRIDGING_COURSE_COMPLETED, SELECT_RECHARGE_LEVEL, COLLECTION_PAGE_VIEW, POST_BULLET_SCREEN, PROMPT_INPUT, VIEW_NOVEL, EXIT_NOVEL, UNSUBSCRIBE_SERVICE, CLUE_PAY_SUCCEED, COMPLAINTS, NEGATIVE_FEEDBACK, COURSE_VIDEO_COMPLETE, SUBSCRIBE, PRODUCT_VIEW_LEAVE, ORDER_BUTTON_CLICK, EFFECTIVE_INSURE } |
| custom_action | string | 自定义行为类型，当 action_type=CUSTOM 时必填 字段长度最小 1 字节，长度最大 128 字节 |
| param_matcher_group | struct[] | 匹配规则组，多个组之间是 AND 关系 数组最大长度 16 |
| param_matcher* | struct[] | 匹配规则，多个匹配规则之间是 OR 关系 数组最大长度 16 |
| param_name* | string | 参数名称 字段长度最小 1 字节，长度最大 128 字节 |
| param_value* | string | 参数值 字段长度最小 1 字节，长度最大 128 字节 |
| operator* | enum | 运算符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operator) 可选值：{ LT, GT, EQ, NE, CONTAIN, NOT_CONTAIN } |
| action_aggregation_rule | struct | 行为和参数聚合规则，当 match_rule_type = ACTION，extractType = AGGREGATION 时必填 |
| action_type* | enum | 标准行为类型，当值为 'CUSTOM' 时表示自定义行为类型, 详见 [\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_action_type) 可选值：{ CUSTOM, REGISTER, VIEW_CONTENT, CONSULT, ADD_TO_CART, PURCHASE, ACTIVATE_APP, SEARCH, ADD_TO_WISHLIST, INITIATE_CHECKOUT, COMPLETE_ORDER, DOWNLOAD_APP, START_APP, RATE, PAGE_VIEW, RESERVATION, SHARE, APPLY, CLAIM_OFFER, NAVIGATE, PRODUCT_RECOMMEND, VISIT_STORE, TRY_OUT, DELIVER, CONFIRM_EFFECTIVE_LEADS, CONFIRM_POTENTIAL_CUSTOMER, CREATE_ROLE, AUTHORIZE, TUTORIAL_FINISH, SCANCODE, ENTER_BACKGROUND, ENTER_FOREGROUND, TICKET, LOGIN, QUEST, UPDATE_LEVEL, CREATE, PAUSE, RESUME, APP_QUIT, BIND_ACCOUNT, ADD_PAYMENT, PRE_CREDIT, CREDIT, WITHDRAW_DEPOSITS, LANDING_PAGE_CLICK, SELECT_COURSE, RE_FUND, PLATFORM_VIEW, ONE_DAY_LEAVE, PRODUCT_VIEW, PURCHASE_MEMBER_CARD, ONLINE_CONSULT, MAKE_PHONE_CALL, ADD_GROUP, ADD_CUSTOMER_PAGE_VIEW, ADD_CUSTOMER_PAGE_INTERACTIVE, CUSTOMER_PROMOTION_PAGE_VIEW, CUSTOMER_PROMOTION_PAGE_INTERACTIVE, ABNORMAL_ACTION, LIVE_STREAM, SCANCODE_WX, STAY_PAY_7, STAY_PAY_15, STAY_PAY_30, INSURANCE_PAY, RESERVATION_CHECK, PARTICIPATED, COMPLETED, REGULAR_PRICE_COURSE, DROP_OUT, CONFIRM_DELIVERY_ORDER, CANCEL_DELIVERY_ORDER, OPEN_ACCOUNT, DEPOSIT, TRADE, SECURITY_NEGATIVE, AD_CLICK, AD_IMPRESSION, SIGN_IN, FOLLOW, ADD_DESKTOP, RETURN, LEAVE_INFORMATION, PURCHASE_COUPON, TRY_OUT_INTENTION, INEFFECTIVE_LEADS, READ_ARTICLE, COMMENT, CARD_CLICK, WECOM_CONSULT, BIND_CARD, LOW_PRICE_COURSE, ADD_WECHAT, PRE_PAY, QUIT_GROUP, PHONE_CONNECTED, RE_ACTIVE, CLAIM_COURSE, VIEW_ACQUISITION_CONTENT, TERMINATION, RENEWAL, CONSULT_INTENTION, CANCEL_DELIVER, ADD_WECHAT_NEGATIVE, LEADS_OUTBOUND, LEADS_DISTRIBUTED, CANCEL_ORDER, INTEREST_RATE, LONGLOAN, OVERDUE, CREDIT_LEAKAGE, COUPON_REDEMPTION, VIEW_DRAMA, UNLOCK_PAID_EPISODES, CREATE_GAME_CLUB, TAP_GAME_CLUB, CREATE_GAME_ROOM, JOIN_GAME_ROOM, BINGE_VIEWING, CHECK_IN, LIKE, UNDERWRITING, FIRST_WITHDRAW, LOW_PRICE_INSURANCE_PAYMENT, STANDARD_PRICE_INSURANCE_PAYMENT, BRIDGING_COURSE_COMPLETED, SELECT_RECHARGE_LEVEL, COLLECTION_PAGE_VIEW, POST_BULLET_SCREEN, PROMPT_INPUT, VIEW_NOVEL, EXIT_NOVEL, UNSUBSCRIBE_SERVICE, CLUE_PAY_SUCCEED, COMPLAINTS, NEGATIVE_FEEDBACK, COURSE_VIDEO_COMPLETE, SUBSCRIBE, PRODUCT_VIEW_LEAVE, ORDER_BUTTON_CLICK, EFFECTIVE_INSURE } |
| custom_action | string | 自定义行为类型，当 action_type=CUSTOM 时必填 字段长度最小 1 字节，长度最大 128 字节 |
| aggregation_group* | struct[] | 聚合规则数组，多个组之间是 AND 关系 数组最小长度 1，最大长度 4 |
| aggregation_matcher* | struct[] | 匹配规则组，多个组之间是 OR 关系 数组长度为 1 |
| aggregation_type* | enum | 聚合类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_aggregation_type) 可选值：{ SUM, MAX, MIN, COUNT } |
| count_type | enum | 频次类型，aggregation_type = COUNT 时必填，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_count_type) 可选值：{ BY_TIMES, BY_DAY } |
| param_name | string | 参数名称，当 aggregation_type != COUNT 时必填 字段长度最小 1 字节，长度最大 128 字节 |
| comparator* | enum | 比较符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_comparator) 可选值：{ COMPARATOR_GE, COMPARATOR_LE, COMPARATOR_BETWEEN, COMPARATOR_EQ } |
| comparison_value | integer | 参数值，当 comparator != COMPARATOR_BETWEEN 时必填 |
| comparison_min_value | integer | 参数值，当 comparator = COMPARATOR_BETWEEN 时必填 |
| comparison_max_value | integer | 参数值，当 comparator = COMPARATOR_BETWEEN 时必填 |
| filter_group | struct[] | 匹配规则组，多个组之间是 AND 关系 数组最小长度 1，最大长度 16 |
| param_matcher* | struct[] | 匹配规则，多个匹配规则之间是 OR 关系 数组长度为 1 |
| param_name* | string | 参数名称 字段长度最小 1 字节，长度最大 128 字节 |
| param_value* | string | 参数值 字段长度最小 1 字节，长度最大 128 字节 |
| operator* | enum | 运算符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operator) 可选值：{ LT, GT, EQ, NE, CONTAIN, NOT_CONTAIN } |
| keyword_spec | struct | Keyword 人群信息，当 type=KEYWORD 时必填 |
| include_keyword* | string[] | 包含关键词，最多 100 个，单个关键词字数不超过 10 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 10 字节 |
| exclude_keyword | string[] | 排除关键词，最多 20 个，单个关键词字数不超过 10 数组最大长度 20 字段长度最小 1 字节，长度最大 10 字节 |
| ad_rule_spec | struct | 广告人群信息，当 type=AD 时必填 |
| rule_type* | enum | 广告行为类型，其中 EXPOSURE 类型需要线下联系运营开通白名单方可使用，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_ad_rule_type) 可选值：{ EXPOSURE, CLICK, CONVERSION } |
| conversion_type | enum[] | 广告转化类型，当 rule_type=CONVERSION 时该字段必填，否则该字段不能填写，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#audience_ad_conversion_type) 数组最大长度 5 可选值：{ APP_START_DOWNLOAD, APP_FINISH_DOWNLOAD, APP_INSTALL, APP_ACTIVATE, ORDER, RESERVATION, REGISTRATION_APP, REGISTRATION_WEB, PURCHASE_APP, PURCHASE_WEB, APPLY_APP, APPLY_WEB, ADD_TO_CART_WEB, ADD_TO_CART_APP, CONSULTATION_WEB, CONSULTATION_PHONE, CALL_BACK, ADD_TO_WISHLIST, SHARE } |
| start_date* | string | 数据起始日期，格式为 yyyy-MM-dd，必须在 90 天以内，且在今天（不包含）以前 字段长度最小 0 字节，长度最大 10 字节 |
| end_date | string | 数据结束日期，格式为 yyyy-MM-dd，必须在 start_date（包含）之后，且在今天（不包含）以前。如果未填写，则人群数据会随源投放数据更新。 字段长度最小 0 字节，长度最大 10 字节 |
| adgroup_id_list | integer[] | 需要提取人群的 adgroup id 列表，通过 [\[adgroups/get\]](https://developers.e.qq.com/v3.0/docs/api/adgroups/get) 接口可获得账号下的广告组列表; 数组最大长度 75 最小值 1，最大值 2147483647 |
| combine_spec | struct | 组合人群信息，当 type=COMBINE 时必填，最多允许用 500 个人群做组合 |
| include* | struct[] | 包含的人群，注意这是个二维数组，第一层数组元素之间为 AND 关系，第二层数组元素之间为 OR 关系 数组最小长度 1，最大长度 500 |
| audience_id* | integer | 人群 id 或标签 id，不支持 LOOKALIKE 和 COMBINE 人群的 id |
| time_window | integer | 时间窗，仅对客户标签有效,目前仅支持以下几个时间窗选项：1、3、7、10、15、30、90、180、365 最小值 1，最大值 365 |
| exclude | struct[] | 排除的人群，注意这是个二维数组，第一层数组元素之间为 AND 关系，第二层数组元素之间为 OR 关系 数组最大长度 500 |
| audience_id* | integer | 人群 id 或标签 id，不支持 LOOKALIKE 和 COMBINE 人群的 id |
| time_window | integer | 时间窗，仅对客户标签有效,目前仅支持以下几个时间窗选项：1、3、7、10、15、30、90、180、365 最小值 1，最大值 365 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/custom_audiences/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "name": "客户人群",
    "type": "LOOKALIKE",
    "outer_audience_id": "123",
    "description": "客户人群描述",
    "audience_spec": {
        "lookalike_spec": {
            "seed_audience_id": "<SEED_AUDIENCE_ID>",
            "expand_user_count": 1000000
        },
        "user_action_spec": {
            "url_match_rule": {
                "url_matcher_group": [
                    {
                        "url_matcher": []
                    }
                ]
            },
            "action_match_rule": {
                "param_matcher_group": [
                    {
                        "param_matcher": []
                    }
                ]
            },
            "action_aggregation_rule": {
                "aggregation_group": [
                    {
                        "aggregation_matcher": []
                    }
                ],
                "filter_group": [
                    {
                        "param_matcher": []
                    }
                ]
            }
        },
        "keyword_spec": {
            "include_keyword": [],
            "exclude_keyword": []
        },
        "ad_rule_spec": {
            "conversion_type": [],
            "adgroup_id_list": []
        },
        "combine_spec": {
            "include": [
                {
                    "audience_id": "<AUDIENCE_ID>"
                }
            ],
            "exclude": [
                {
                    "audience_id": "<AUDIENCE_ID>"
                }
            ]
        }
    }
}'
curl 'https://api.e.qq.com/v3.0/custom_audiences/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "name": "客户人群",
    "type": "LOOKALIKE",
    "outer_audience_id": "123",
    "description": "客户人群描述",
    "audience_spec": {
        "lookalike_spec": {
            "seed_audience_id": "<SEED_AUDIENCE_ID>",
            "expand_user_count": 1000000
        },
        "user_action_spec": {
            "url_match_rule": {
                "url_matcher_group": [
                    {
                        "url_matcher": []
                    }
                ]
            },
            "action_match_rule": {
                "param_matcher_group": [
                    {
                        "param_matcher": []
                    }
                ]
            },
            "action_aggregation_rule": {
                "aggregation_group": [
                    {
                        "aggregation_matcher": []
                    }
                ],
                "filter_group": [
                    {
                        "param_matcher": []
                    }
                ]
            }
        },
        "keyword_spec": {
            "include_keyword": [],
            "exclude_keyword": []
        },
        "ad_rule_spec": {
            "conversion_type": [],
            "adgroup_id_list": []
        },
        "combine_spec": {
            "include": [
                {
                    "audience_id": "<AUDIENCE_ID>"
                }
            ],
            "exclude": [
                {
                    "audience_id": "<AUDIENCE_ID>"
                }
            ]
        }
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| audience_id | integer | 人群 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "audience_id": "<AUDIENCE_ID>"
    }
}
```

## 可视化调试工具

请求

## 相关阅读

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
