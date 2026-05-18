---
title: 获取客户人群 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/custom_audiences/get
doc_id: tencent_ads_v3_0_docs_api_custom_audiences_get
source_id: tencent_ads_v3_0_docs_api_custom_audiences_get
---
# 获取客户人群 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | audience_management,ads_management,user_actions |
| --- | --- |
| 请求地址 | custom_audiences/get |
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
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| audience_id | integer | 人群 id，通过 [\[custom_audiences\]](https://developers.e.qq.com/v3.0/docs/api/custom_audiences/add) 模块创建客户人群获得 |
| page | integer | 当前页码，最小值 1 默认值：1 |
| page_size | integer | 分页大小，最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/custom_audiences/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'audience_id=<AUDIENCE_ID>' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/custom_audiences/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'audience_id=<AUDIENCE_ID>' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回人群列表 |
| audience_id | integer | 人群 id |
| account_id | integer | 人群归属的推广帐号 id |
| name | string | 人群名称 |
| outer_audience_id | string | 广告主对人群在自己系统里的编码，只能包含数字或字母或下划线；如果该编码创建过人群，再次用该编码创建人群时，会返回之前用该编码创建的人群 id ；人群编码不能与标签编码（tag_code）重复 |
| description | string | 人群描述 |
| cooperated | boolean | 深度数据合作，可将您的数据数据从 DMP 平台导出，平台将为您进行定制化的挖掘，进行深度数据合作 |
| type | enum | 人群类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_audience_type) |
| source | enum | 人群来源，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_audience_source) |
| status | enum | 处理状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_process_status) |
| online_status | enum | 人群包在线状态，如果人群包一段时间不更新或者不使用于广告定向，人群包会被下线处理。下线后的人群无法用于广告定向，但是洞察等不受影响。该字段仅在人群包处理状态为成功时返回和生效，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#audience_online_status) |
| is_own | boolean | 是否是人群包 owner，一般人群包创建者为人群包 owner |
| error_code | integer | 人群错误码，1 表示系统错误； 101 表示种子人群活跃用户低于 2K ； 102 表示种子人群无共同特征； 201 表示人群上传的号码包文件格式错误； 202 表示解析人群上传的号码包文件失败； 203 表示号码包文件人群匹配失败。 |
| user_count | integer | 用户覆盖数 |
| created_time | string | 创建时间，格式为 yyyy-MM-dd HH:mm:ss，如 2016-11-01 10:42:56 |
| last_modified_time | string | 最后更新时间，格式为 yyyy-MM-dd HH:mm:ss，如 2016-11-01 10:42:56 |
| audience_spec | struct | 人群信息，和 type 相关 |
| lookalike_spec | struct | Lookalike 人群信息，当 type=LOOKALIKE 时必填 |
| seed_audience_id | integer | 种子人群 id，种子人群：覆盖人数 100-30000000, 状态必须是'成功可用', 不能是扩展人群 |
| expand_user_count | integer | lookalike 目标人数，是 500000 的整数倍 |
| user_action_spec | struct | UserAction 人群信息，当 type=USER_ACTION 时必填 |
| user_action_set_id | integer | 用户行为源 id，通过 [\[user_action_sets 接口\]](https://developers.e.qq.com/docs/api/user_data/user_action_set/user_action_sets_add) 创建用户行为源时分配的唯一 id。 |
| match_rule_type | enum | 匹配规则类型，当 user_action_set 为 Android/iOS APP 类型时只可选 ACTION，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_match_rule_type) |
| extract_type | enum | 行为人群提取类型，当 match_rule_type=ACTION 时生效 |
| time_window | integer | 时间窗，用来圈定最近多少天发生过某行为的人群，如今天是 1 月 14 日，则最近 14 天的范围是 1 月 1 日至 1 月 14 日。当 extractType = AGGREGATION 时，时间窗最大取值为 90 天 |
| url_match_rule | struct | url 匹配规则，当 match_rule_type = URL 时必填 |
| url_matcher_group | struct[] | 匹配规则组，如果为空表示全站浏览人群，多个组之间是 AND 关系 |
| url_matcher | struct[] | 匹配规则，多个匹配规则之间是 OR 关系 |
| param_value | string | 参数值 |
| operator | enum | 运算符，operator 只允许 EQ、NE、CONTAIN、NOT_CONTAIN，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operator) |
| action_match_rule | struct | 行为和参数匹配规则，当 match_rule_type = ACTION，extractType 为空或者 extractType = FITLER 时必填 |
| action_type | enum | 标准行为类型，当值为 'CUSTOM' 时表示自定义行为类型, 详见 [\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_action_type) |
| custom_action | string | 自定义行为类型，当 action_type=CUSTOM 时必填 |
| param_matcher_group | struct[] | 匹配规则组，多个组之间是 AND 关系 |
| param_matcher | struct[] | 匹配规则，多个匹配规则之间是 OR 关系 |
| param_name | string | 参数名称 |
| param_value | string | 参数值 |
| operator | enum | 运算符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operator) |
| action_aggregation_rule | struct | 行为和参数聚合规则，当 match_rule_type = ACTION，extractType = AGGREGATION 时必填 |
| action_type | enum | 标准行为类型，当值为 'CUSTOM' 时表示自定义行为类型, 详见 [\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_action_type) |
| custom_action | string | 自定义行为类型，当 action_type=CUSTOM 时必填 |
| aggregation_group | struct[] | 聚合规则数组，多个组之间是 AND 关系 |
| aggregation_matcher | struct[] | 匹配规则组，多个组之间是 OR 关系 |
| aggregation_type | enum | 聚合类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_aggregation_type) |
| count_type | enum | 频次类型，aggregation_type = COUNT 时必填，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_count_type) |
| param_name | string | 参数名称，当 aggregation_type != COUNT 时必填 |
| comparator | enum | 比较符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_comparator) |
| comparison_value | integer | 参数值，当 comparator != COMPARATOR_BETWEEN 时必填 |
| comparison_min_value | integer | 参数值，当 comparator = COMPARATOR_BETWEEN 时必填 |
| comparison_max_value | integer | 参数值，当 comparator = COMPARATOR_BETWEEN 时必填 |
| filter_group | struct[] | 匹配规则组，多个组之间是 AND 关系 |
| param_matcher | struct[] | 匹配规则，多个匹配规则之间是 OR 关系 |
| param_name | string | 参数名称 |
| param_value | string | 参数值 |
| operator | enum | 运算符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operator) |
| keyword_spec | struct | Keyword 人群信息，当 type=KEYWORD 时必填 |
| include_keyword | string[] | 包含关键词，最多 100 个，单个关键词字数不超过 10 |
| exclude_keyword | string[] | 排除关键词，最多 20 个，单个关键词字数不超过 10 |
| ad_rule_spec | struct | 广告人群信息，当 type=AD 时必填 |
| rule_type | enum | 广告行为类型，其中 EXPOSURE 类型需要线下联系运营开通白名单方可使用，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_ad_rule_type) |
| conversion_type | enum[] | 广告转化类型，当 rule_type=CONVERSION 时该字段必填，否则该字段不能填写，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#audience_ad_conversion_type) |
| start_date | string | 数据起始日期，格式为 yyyy-MM-dd，必须在 90 天以内，且在今天（不包含）以前 |
| end_date | string | 数据结束日期，格式为 yyyy-MM-dd，必须在 start_date（包含）之后，且在今天（不包含）以前。如果未填写，则人群数据会随源投放数据更新。 |
| adgroup_id_list | integer[] | 需要提取人群的 adgroup id 列表，通过 [\[adgroups/get\]](https://developers.e.qq.com/v3.0/docs/api/adgroups/get) 接口可获得账号下的广告组列表; |
| combine_spec | struct | 组合人群信息，当 type=COMBINE 时必填，最多允许用 500 个人群做组合 |
| include | struct[] | 包含的人群，注意这是个二维数组，第一层数组元素之间为 AND 关系，第二层数组元素之间为 OR 关系 |
| audience_id | integer | 人群 id 或标签 id，不支持 LOOKALIKE 和 COMBINE 人群的 id |
| time_window | integer | 时间窗，仅对客户标签有效,目前仅支持以下几个时间窗选项：1、3、7、10、15、30、90、180、365 |
| exclude | struct[] | 排除的人群，注意这是个二维数组，第一层数组元素之间为 AND 关系，第二层数组元素之间为 OR 关系 |
| audience_id | integer | 人群 id 或标签 id，不支持 LOOKALIKE 和 COMBINE 人群的 id |
| time_window | integer | 时间窗，仅对客户标签有效,目前仅支持以下几个时间窗选项：1、3、7、10、15、30、90、180、365 |
| page_info | struct | 分页信息 |
| page | integer | 当前页码，最小值 1 默认值：1 |
| page_size | integer | 分页大小，最小值 1，最大值 100 默认值：10 |
| total_number | integer | 总行数 默认值：10 |
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
                "audience_id": "<AUDIENCE_ID>",
                "account_id": 111111111,
                "name": "测试人群",
                "outer_audience_id": "123",
                "description": "",
                "cooperated": true,
                "type": "CUSTOMER_FILE",
                "source": "TENCENT_DATA",
                "status": "PENDING",
                "error_code": 0,
                "user_count": 0,
                "is_own": true,
                "created_time": "2016-11-01 10:42:56",
                "last_modified_time": "2017-10-21 17:11:17"
            },
            {
                "audience_id": "<AUDIENCE_ID>",
                "account_id": 111111111,
                "name": "website_demo",
                "outer_audience_id": "124",
                "description": "",
                "cooperated": false,
                "type": "USER_ACTION",
                "source": "ADVERTISER_OWN_DATA",
                "status": "PENDING",
                "error_code": 0,
                "user_count": 0,
                "is_own": true,
                "created_time": "2016-11-01 10:42:56",
                "last_modified_time": "2017-10-21 17:11:17",
                "audience_spec": {
                    "user_action_spec": {
                        "action_set_id": "<ACTION_SET_ID>",
                        "match_rule_type": "URL",
                        "url_match_rule": {
                            "url_matcher_group": [
                                {
                                    "url_matcher": [
                                        {
                                            "param_value": "qq",
                                            "operator": "CONTAIN"
                                        }
                                    ]
                                }
                            ]
                        },
                        "time_window": 30
                    }
                }
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 2,
            "total_page": 1
        }
    }
}
```

## 可视化调试工具

请求

## 相关阅读

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
