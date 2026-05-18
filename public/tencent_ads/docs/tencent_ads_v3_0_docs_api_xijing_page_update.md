---
title: 蹊径-送审落地页 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/xijing_page/update
doc_id: tencent_ads_v3_0_docs_api_xijing_page_update
source_id: tencent_ads_v3_0_docs_api_xijing_page_update
---
# 蹊径-送审落地页 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | xijing_page/update |
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
| is_submitted_for_review* | boolean | 提交送审，值为 true 时才会触发审核 可选值：{ true, false } |
| page_id_list* | string[] | 送审页面 id 列表 数组最小长度 0，最大长度 999 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/xijing_page/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": 20458,
    "is_submitted_for_review": true,
    "page_id_list": [
        "576460752303438398",
        "576460752303438399"
    ]
}'
curl 'https://api.e.qq.com/v3.0/xijing_page/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": 20458,
    "is_submitted_for_review": true,
    "page_id_list": [
        "576460752303438398",
        "576460752303438399"
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 页面操作返回数据结构 |
| page_service_id | string | 落地页服务 id，主要用于广告主在投放端搭建广告创意选择落地页时使用 |
| code | integer | 返回码 |
| message | string | 英文返回消息 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "landingPageId": 576460752303438398,
                "id": "523034383985764607",
                "message": "操作成功",
                "code": 0
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
