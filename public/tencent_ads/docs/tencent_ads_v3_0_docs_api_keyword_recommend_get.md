---
title: 获取关键词推荐结果 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/keyword_recommend/get
doc_id: tencent_ads_v3_0_docs_api_keyword_recommend_get
source_id: tencent_ads_v3_0_docs_api_keyword_recommend_get
---
# 获取关键词推荐结果 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | keyword_recommend/get |
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
| site_sets* | enum[] | 拓词版位集，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#recommend_site_set) 数组最小长度 1，最大长度 2 可选值：{ SITE_SET_QBSEARCH, SITE_SET_WECHAT_SEARCH } |
| recommend_category* | enum | 推荐类别，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#recommend_category) 可选值：{ RECOMMEND_BY_INDUSTRY, RECOMMEND_BY_WORD } |
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| system_industry_id* | integer | 系统行业 id，可通过账户管理->广告账号->查询腾讯广告广告主信息接口来获取具体值，[\[系统行业 id\]](https://developers.e.qq.com/docs/api/account/advertiser/advertiser_get) |
| query_word | string[] | 种子词集合，当拓词类型是 RECOMMEND_BY_WORD 时，必填 数组最小长度 1，最大长度 10 字段长度最大 40 字节 |
| business_point_id | string | 业务点 id，当拓词类型是 RECOMMEND_BY_INDUSTRY 时 必填，具体值可通过接口获取：[\[查询行业业务点信息\]](https://developers.e.qq.com/docs/api/tools/search_promote_tools/business_point_get)。只支持三级、四级、五级行业业务点拓词数据查询 |
| adgroup_id | int64 | 广告 id |
| campaign_id | int64 | 推广计划 id，当获取广告主维度报表时，该值无意义 |
| include_word | string[] | 包含词 数组最小长度 1，最大长度 10 字段长度最大 40 字节 |
| exclude_word | string[] | 排除词 数组最小长度 1，最大长度 100 字段长度最大 40 字节 |
| filter_ad_word | boolean | 是否过滤广告词 可选值：{ true, false } |
| filter_account_word | boolean | 是否过滤账户下面的词 可选值：{ true, false } |
| recommend_reasons | enum[] | 推荐理由，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#recommend_reasons) 数组最小长度 1，最大长度 4 可选值：{ DARK_HORSE_WORD, SAME_TRADE_BUY_WORD, HIGH_CLICK_WORD, BLUE_OCEAN_WORD } |
| province | array | 省份编码，具体值参照附录中的 [\[地域信息\]](https://developers.e.qq.com/docs/reference/region) |
| city | array | 市编码，具体值参照附录中的 [\[地域信息\]](https://developers.e.qq.com/docs/reference/region) |
| order_by | struct[] | 排序字段结构 数组最小长度 0，最大长度 1 |
| sort_field* | string | 排序字段 可选值：{ month_query_count, click_count, price, total_accts } |
| sort_type* | enum | 排序方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_sortord) 可选值：{ ASCENDING, DESCENDING } |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/keyword_recommend/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'site_sets=[
    "SITE_SET_WECHAT_SEARCH",
    "SITE_SET_QBSEARCH"
]' \
-d 'recommend_category=RECOMMEND_BY_WORD' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'query_word=[
    "鲜花"
]' \
-d 'city=[]' \
-d 'province=[]' \
-d 'include_word=[]' \
-d 'exclude_word=[]' \
-d 'filter_account_word=false' \
-d 'filter_ad_word=false'
curl -v -G 'https://api.e.qq.com/v3.0/keyword_recommend/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'site_sets=[
    "SITE_SET_WECHAT_SEARCH",
    "SITE_SET_QBSEARCH"
]' \
-d 'recommend_category=RECOMMEND_BY_WORD' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'query_word=[
    "鲜花"
]' \
-d 'city=[]' \
-d 'province=[]' \
-d 'include_word=[]' \
-d 'exclude_word=[]' \
-d 'filter_account_word=false' \
-d 'filter_ad_word=false'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| total_num | integer | 词总数 |
| recommend_word_list | struct[] | 推荐词列表信息 |
| word | string | 推荐词 |
| month_query_count | integer | 月均搜索量 |
| click_count | integer | 点击量 |
| price | float | 指导价，单位：元 |
| total_accts | integer | 竞争程度 |
| recommend_reason | string | 推荐理由 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "total_num": 2399,
        "recommend_word_list": [
            {
                "click_count": 121133,
                "price": 2123,
                "month_query_count": 788,
                "recommend_reason": "",
                "total_accts": 1,
                "word": "鲜花配送"
            },
            {
                "click_count": 63155,
                "price": 68,
                "month_query_count": 42899,
                "recommend_reason": "",
                "total_accts": 1,
                "word": "樱花"
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
