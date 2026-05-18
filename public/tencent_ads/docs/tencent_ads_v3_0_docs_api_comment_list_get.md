---
title: 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/comment_list/get
doc_id: tencent_ads_v3_0_docs_api_comment_list_get
source_id: tencent_ads_v3_0_docs_api_comment_list_get
---
# [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | comment_list/get |
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
| filtering | struct[] | 过滤条件 数组最小长度 1，最大长度 255 |
| field* | string | 过滤字段 可选值：{ finder_usernames, keyword, created_time, finder_ad_object_id, wechat_channels_account_id, comment_analyze_keyword, comment_analyze_sentiment } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 finder_usernames 时，可选值：{ EQUALS, IN } 当 field 取值 keyword 时，可选值：{ CONTAINS } 当 field 取值 created_time 时，可选值：{ GREATER_EQUALS, LESS_EQUALS } 当 field 取值 finder_ad_object_id 时，可选值：{ EQUALS, IN } 当 field 取值 wechat_channels_account_id 时，可选值：{ EQUALS, IN } 当 field 取值 comment_analyze_sentiment 时，可选值：{ IN } 当 field 取值 comment_analyze_keyword 时，可选值：{ CONTAINS } |
| values* | string[] | 字段取值，values 数组元素的个数限制与 operator 的取值相关 当 field 取值 finder_usernames 时，数组最小长度 1，最大长度 10 字段长度最小 1 字节，长度最大 1024 字节 当 field 取值 keyword 时，数组长度为 1 字段长度最小 0 字节，长度最大 65536 字节 当 field 取值 comment_analyze_keyword 时，数组长度为 1 字段长度最小 0 字节，长度最大 65536 字节 当 field 取值 created_time 时，数组长度为 1 字段长度为 10 字节 当 field 取值 finder_ad_object_id 时，数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 1024 字节 |
| count | integer | 计数，一页显示的数据条数 最小值 1，最大值 100 |
| last_buffer | string | 上次请求拉取的 buffer 位置 字段长度最小 1 字节，长度最大 1024 字节 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/comment_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]'
curl -v -G 'https://api.e.qq.com/v3.0/comment_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| comment_id | string | 评论 id |
| content | string | 评论内容 |
| created_time | integer | 创建时间，时间戳 |
| comment_flag | enum | 评论状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#finder_comment_flag) |
| finder_ad_object_id | integer | 广告创意 id |
| author_replys | struct[] | 作者回复列表 |
| comment_id | string | 评论 id |
| content | string | 评论内容 |
| created_time | integer | 创建时间，时间戳 |
| comment_flag | enum | 评论状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#finder_comment_flag) |
| comment_level | integer | 评论层级，评论分为一级评论、二级评论 |
| comment_level | integer | 评论层级，评论分为一级评论、二级评论 |
| last_buffer | string | 上次请求拉取的 buffer 位置 |
| continue_flag | integer | 是否继续拉取标记，1 表示还有数据，可以带上 last_buffer 继续拉取 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "created_time": 1491019858,
                "author_replys": [
                    {
                        "created_time": 1491019858
                    }
                ]
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
