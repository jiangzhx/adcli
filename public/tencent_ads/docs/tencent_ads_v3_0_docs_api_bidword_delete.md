---
title: 删除关键词 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/bidword/delete
doc_id: tencent_ads_v3_0_docs_api_bidword_delete
source_id: tencent_ads_v3_0_docs_api_bidword_delete
---
# 删除关键词 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | bidword/delete |
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
| list* | integer[] | 关键词 id 列表，关键词 id 个数不大于 2000 个, 如：["51213","51214","51215"] 最多 1000 个 数组最小长度 1，最大长度 1000 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/bidword/delete?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "list": [
        2502973
    ]
}'
curl 'https://api.e.qq.com/v3.0/bidword/delete?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "list": [
        2502973
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| success_list | struct[] | 返回成功的关键词列表 |
| index | number | 整数 |
| bidword_id | integer | 关键词 id |
| bidword | string | 关键词词面，字段长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。），同一广告下的关键词词面不允许重复 |
| bid_price | integer | 关键词出价，单位为分，关键词出价规则待补充 |
| match_type | enum | 关键词匹配方式，关键词匹配方式包括短语、精确、广泛匹配，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#bidword_match_type) |
| configured_status | enum | 暂停状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#bidword_pause_type) |
| error_msg | string | 错误信息 |
| approval_status | integer | 审核状态 |
| dynamic_creative_id | integer | 广告创意 id |
| error_list | struct[] | 返回失败的关键词列表 |
| index | number | 整数 |
| bidword_id | integer | 关键词 id |
| bidword | string | 关键词词面，字段长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。），同一广告下的关键词词面不允许重复 |
| bid_price | integer | 关键词出价，单位为分，关键词出价规则待补充 |
| match_type | enum | 关键词匹配方式，关键词匹配方式包括短语、精确、广泛匹配，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#bidword_match_type) |
| configured_status | enum | 暂停状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#bidword_pause_type) |
| error_msg | string | 错误信息 |
| approval_status | integer | 审核状态 |
| dynamic_creative_id | integer | 广告创意 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "success_list": [
            {
                "index": 0,
                "bidword_id": 2502973,
                "bidword": "推荐关键词",
                "bid_price": 1100,
                "match_type": "EXACT_MATCH",
                "configured_status": "KEYWORD_STATUS_NORMAL",
                "error_msg": "",
                "approval_status": 2
            }
        ],
        "error_list": []
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
