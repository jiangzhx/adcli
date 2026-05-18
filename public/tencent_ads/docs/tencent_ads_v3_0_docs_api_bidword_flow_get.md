---
title: 查询关键词流量接口 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/bidword_flow/get
doc_id: tencent_ads_v3_0_docs_api_bidword_flow_get
source_id: tencent_ads_v3_0_docs_api_bidword_flow_get
---
# 查询关键词流量接口 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | bidword_flow/get |
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
| bidword_list* | string[] | 关键词集合 数组最小长度 1，最大长度 1000 字段长度最大 40 字节 |
| order_by | struct[] | 排序字段结构 数组最小长度 0，最大长度 1 |
| sort_field* | string | 排序字段 可选值：{ month_query_count, click_count, price, total_accts } |
| sort_type* | enum | 排序方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_sortord) 可选值：{ ASCENDING, DESCENDING } |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/bidword_flow/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'bidword_list=[
    "鲜花"
]'
curl -v -G 'https://api.e.qq.com/v3.0/bidword_flow/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'bidword_list=[
    "鲜花"
]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 关键词列表信息 |
| bidword | string | 推荐词 |
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
        "list": [
            {
                "bidword": "鲜花",
                "recommend_reason": "黑马词;同行买词;高点击词",
                "month_query_count": 10524,
                "price": 4.94,
                "click_count": 325,
                "total_accts": 1
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
