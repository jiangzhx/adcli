---
title: 新增否定词，可在广告、创意上新增 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/negativewords/add
doc_id: tencent_ads_v3_0_docs_api_negativewords_add
source_id: tencent_ads_v3_0_docs_api_negativewords_add
---
# 新增否定词，可在广告、创意上新增 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | negativewords/add |
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
| adgroup_id | int64 | 广告 id |
| dynamic_creative_id | integer | 广告创意 id |
| phrase_negative_words* | string[] | 短语否定词，每个否定词长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） 数组最小长度 0，最大长度 900 字段长度最大 150 字节 |
| exact_negative_words* | string[] | 精确否定词，每个否定词长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） 数组最小长度 0，最大长度 900 字段长度最大 150 字节 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/negativewords/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "adgroup_id": "<ADGROUP_ID>",
    "phrase_negative_words": [],
    "exact_negative_words": []
}'
curl 'https://api.e.qq.com/v3.0/negativewords/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "adgroup_id": "<ADGROUP_ID>",
    "phrase_negative_words": [],
    "exact_negative_words": []
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| adgroup_id | int64 | 广告 id |
| dynamic_creative_id | integer | 广告创意 id |
| status | enum | 操作执行状态，OPER_FAIL，操作失败； OPER_SUCCESS，操作成功。只要有操作失败的词，就返回 OPER_FAIL，全部成功返回 OPER_SUCCESS，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#negative_word_oper_status) |
| duplicate_words | struct | 否定词重复而导致失败的否定词列表，包括请求的否定词之间重复、请求的否定词和已有否定词重复、否定词和广告中关键词重复等 |
| phrase_negative_words | string[] | 短语否定词，每个否定词长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| exact_negative_words | string[] | 精确否定词，每个否定词长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| exceed_length_words | struct | 单个否定词长度超过限制导致失败的否定词列表 |
| phrase_negative_words | string[] | 短语否定词，每个否定词长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| exact_negative_words | string[] | 精确否定词，每个否定词长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| exceed_limit_words | struct | 超过否定词限定个数导致失败的否定词列表 |
| phrase_negative_words | string[] | 短语否定词，每个否定词长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| exact_negative_words | string[] | 精确否定词，每个否定词长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| has_special_words | struct | 含有特殊字符导致失败的否定词列表 |
| phrase_negative_words | string[] | 短语否定词，每个否定词长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| exact_negative_words | string[] | 精确否定词，每个否定词长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| success_words | struct | 操作成功的否定词列表 |
| phrase_negative_words | string[] | 短语否定词，每个否定词长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| exact_negative_words | string[] | 精确否定词，每个否定词长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "adgroup_id": "<ADGROUP_ID>",
        "duplicate_words": {
            "phrase_negative_words": [],
            "exact_negative_words": []
        },
        "exceed_length_words": {
            "phrase_negative_words": [],
            "exact_negative_words": []
        },
        "exceed_limit_words": {
            "phrase_negative_words": [],
            "exact_negative_words": []
        },
        "has_special_words": {
            "phrase_negative_words": [],
            "exact_negative_words": []
        },
        "success_words": {
            "phrase_negative_words": [],
            "exact_negative_words": []
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
