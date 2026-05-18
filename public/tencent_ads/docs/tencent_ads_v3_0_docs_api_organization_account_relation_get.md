---
title: 查询组织下账户信息 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/organization_account_relation/get
doc_id: tencent_ads_v3_0_docs_api_organization_account_relation_get
source_id: tencent_ads_v3_0_docs_api_organization_account_relation_get
---
# 查询组织下账户信息 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management,ads_management,ads_insights,audience_management,user_actions |
| --- | --- |
| 请求地址 | organization_account_relation/get |
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
| account_id | integer | 广告账户 id，非必填，传递了该 account_id 且 account_id 属于当前登录 access_token 对应的组织 id，会返回该账户 id 的信息 |
| advertiser_type | enum | 广告主类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#advertiser_type_enum) 可选值：{ DIRECT_ADVERTISER, SUB_ADVERTISER } |
| business_unit_id | integer | 业务单元 id |
| pagination_mode* | enum | 分页方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_pagination_mode) 可选值：{ PAGINATION_MODE_NORMAL, PAGINATION_MODE_CURSOR } |
| cursor | integer | 游标翻页模式下的游标值，游标翻页模式(PAGINATION_MODE_CURSOR)使用，第一次拉取无需填写，第二次请求传递第一次返回值中返回的 cursor 字段值 最小值 1 |
| page | integer | 搜索页码 注意普通翻页模式即 PAGINATION_MODE_NORMAL 模式 需要满足 page_size*page 小于等于 1000，该翻页模式有限制，需要满足 page_size*page 小于等于 1000 最小值 1，最大值 100 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/organization_account_relation/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/organization_account_relation/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| account_id | integer | 广告账户 id |
| corporation_name | string | 企业名称 |
| is_bid | boolean | 是否竞价广告广告账户 即腾讯广告账户，true：是，false：否 |
| is_mp | boolean | 是否微信 MP 广告账户，true：是，false：否 |
| is_adx | boolean | 废弃字段 禁止使用，true：是，false：否 |
| comment_list | struct[] | 广告主备注 |
| user_id | integer | 用户 id |
| comment | string | 广告主备注 |
| page_info | struct | 分页配置信息 |
| page | integer | 搜索页码 默认值：1 |
| page_size | integer | 一页显示的数据条数 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |
| cursor_page_info | struct | 分页配置信息，游标翻页模式返回 |
| page_size | integer | 一页显示的数据条数 |
| total_number | integer | 总条数 |
| has_more | boolean | 是否有下一页，返回 false 表示已无下一页，此时务必停止拉取 |
| cursor | integer | 下一次拉取的游标值 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "account_id": "<ACCOUNT_ID>",
                "corporation_name": "腾讯计算机系统有限公司",
                "comment_list": []
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 1,
            "total_page": 1
        },
        "cursor_page_info": {
            "page_size": 10,
            "total_number": 1
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
