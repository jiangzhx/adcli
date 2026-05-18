---
title: 获取线索列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/leads_list/get
doc_id: tencent_ads_v3_0_docs_api_leads_list_get
source_id: tencent_ads_v3_0_docs_api_leads_list_get
---
# 获取线索列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights,account_management,audience_management,user_actions |
| --- | --- |
| 请求地址 | leads_list/get |
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
| account_id* | integer | 广告主账号 id，直客账号或子客账号 |
| time_range* | struct | 时间范围，最长跨度 1 年。time_type=TIME_TYPE_ACTION_TIME 时填写线索提交时间，time_type=TIME_TYPE_CREATED_TIME 时填写线索入库时间 |
| start_time* | integer | 开始时间戳，精确到秒，小于 end_time 最小值 0，最大值 9999999999 |
| end_time* | integer | 结束时间戳，精确到秒，大于 start_time 最小值 0，最大值 9999999999 |
| time_type* | enum | 时间类型，必填，此参数会影响到 time_range、last_search_after_values、返回数据的排序规则。返回数据的排序规则与请求参数 time_type 相关，当传入 TIME_TYPE_ACTION_TIME 会按照 leads_action_time+leads_id 降序排列，当传入 TIME_TYPE_CREATED_TIME 会按照 leads_create_time+leads_id 降序排列，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#time_type) 可选值：{ TIME_TYPE_CREATED_TIME, TIME_TYPE_ACTION_TIME } |
| page | integer | 搜索页码 最小值 1，最大值 1000 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 200 默认值：10 |
| last_search_after_values | string[] | 线索深度翻页参数，例如['1571367160000', '111111'] time_type=TIME_TYPE_ACTION_TIME 时填写线索提交时间和线索 id time_type=TIME_TYPE_CREATED_TIME 时填写线索入库时间和线索 id。当查询数据在 5000 之前，不需传递参数 last_search_after_values，只需传递 page 和 page_size 参数；当查询数据在 5000 之后，只能顺序翻页查询深层数据，必须传递参数 last_search_after_values，不需传递参数 page，可选传递 page_size。last_search_after_values 的类型是字符串数组，长度固定为 2，必须按照顺序填入前一次翻页最后一条数据的 leads_action_time/leads_create_time（毫秒）和 leads_id，用于深度翻页。 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/leads_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'time_range=[]' \
-d 'page=1' \
-d 'page_size=10' \
-d 'last_search_after_values=[]'
curl -v -G 'https://api.e.qq.com/v3.0/leads_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'time_range=[]' \
-d 'page=1' \
-d 'page_size=10' \
-d 'last_search_after_values=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| leads_info | struct | 返回结构 |
| account_id | integer | 广告主账号 id，直客账号或子客账号 |
| leads_id | integer | 线索 id |
| outer_leads_id | string | 外部线索 id |
| click_id | string | 点击 id |
| adgroup_id | int64 | 广告 id |
| adgroup_name | string | 广告名称 |
| dynamic_creative_id | integer | 动态创意 id |
| dynamic_creative_name | string | 动态创意名称 |
| component_id | string | 组件 id |
| component_name | string | 组件名称 |
| page_id | int64 | 落地页 id |
| page_name | string | 落地页名称 |
| page_url | string | 落地页地址 |
| leads_type | enum | 线索类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#leads_type) |
| leads_sub_type | enum | 二级线索类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#leads_sub_type) |
| chat_id | string | 会话 id |
| leads_source | enum | 线索来源，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#leads_source) |
| leads_follow_tag | enum | 线索状态 标准状态取值如下 LEADS_FOLLOW_TAG_DEFAULT : 未分配 LEADS_FOLLOW_TAG_ASSIGNED : 已分配待跟进 LEADS_FOLLOW_TAG_FOLLOWING : 跟进中 LEADS_FOLLOW_TAG_VALID : 已转换-潜在客户 LEADS_FOLLOW_TAG_VALID_HIGH_INTENTION : 已转换-高意向客户 LEADS_FOLLOW_TAG_VALID_CONVERTED : 已转换-已成单 LEADS_FOLLOW_TAG_INVALID_REPEAT : 无效-重复 LEADS_FOLLOW_TAG_INVALID_NOTSELF : 无效-非本人 LEADS_FOLLOW_TAG_INVALID_NOTTOUCH : 无效-未接通 LEADS_FOLLOW_TAG_INVALID_NOTINTENTION : 无效-无意向 LEADS_FOLLOW_TAG_INVALID_REGION_MISMATCHED : 无效-定向外 LEADS_FOLLOW_TAG_INVALID_OTHER : 无效-其他 其他枚举值为行业状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#leads_follow_tag) |
| outer_leads_convert_type | string | 外部线索状态，自定义取值 |
| outer_leads_ineffect_reason | string | 外部无效原因，外部线索状态为无效时填写 |
| leads_name | string | 姓名 |
| leads_telephone | string | 电话 |
| telephone_location | string | 号码归属地 |
| leads_area | string | 所在地 |
| leads_email | string | 邮箱 |
| leads_qq | string | qq 号 |
| leads_wechat | string | 微信号 |
| leads_gender | enum | 性别，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#leads_gender_type) |
| nationality | string | 国籍 |
| working_years | string | 工作年限 |
| age | string | 年龄 |
| profession | string | 职业 |
| id_number | string | 身份证号 |
| address | string | 详细地址 |
| bundle | string | 其他线索信息，K-V 键值对, 字符串对字符串的 json 串，key 不能重复 |
| custom_qa | string | 互动问答 |
| leads_create_time | string | 线索入库时间，表示录入线索管理平台时间。 因线索提交后，需做相关处理后，再录入线索管理平台，所以线索入库时间会晚于线索提交时间 |
| leads_action_time | string | 线索提交时间，表示用户留资时间或拨打电话时间 |
| leads_tags | string | 线索标签 |
| shop_name | string | 门店名称 |
| shop_address | string | 门店地址 |
| call_middle_num | string | 智能电话中间号 |
| call_consumer_hotline | string | 智能电话-客服电话 |
| call_touch_tag | string | 智能电话-接通状态 |
| call_duration | string | 智能电话-通话时长 |
| call_record_url | string | 智能电话-通话录音链接 |
| layer_form_content | string | 意向表单内容 |
| is_broad_cast_leads | string | 是否为多发表单 |
| nick_name | string | 微信昵称 |
| owner_name | string | 当前归属人 |
| owner_id | integer | 当前归属人的 userId |
| all_follow_records | string | 全部跟进记录 |
| correlation_factor_rank | string | 决策动因相关度:A/B/C/- |
| claim_account_id | integer | ⼴告归因的⼴告主 id |
| leads_response_duration | integer | 线索响应时长 |
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
        "leads_info": {
            "account_id": "<ACCOUNT_ID>",
            "adgroup_id": "<ADGROUP_ID>",
            "adgroup_name": "推广广告"
        },
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

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
