---
title: 获取行为/兴趣/意向标签覆盖人群数 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/targeting_tags_uv/get
doc_id: tencent_ads_v3_0_docs_api_targeting_tags_uv_get
source_id: tencent_ads_v3_0_docs_api_targeting_tags_uv_get
---
# 获取行为/兴趣/意向标签覆盖人群数 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | targeting_tags_uv/get |
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
| category_type* | enum | 行为兴趣意向定向标签类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_category_type) 可选值：{ INTEREST, BEHAVIOR, INTENTION } |
| category_list | integer[] | 查询的标签 id 列表，如果传入了该类别下不存在的标签 id，则不会返回相应标签的信息，如果不填该参数则默认查询该类型全部可用标签 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/targeting_tags_uv/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'category_type=INTEREST' \
-d 'account_id=<ACCOUNT_ID>'
curl -v -G 'https://api.e.qq.com/v3.0/targeting_tags_uv/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'category_type=INTEREST' \
-d 'account_id=<ACCOUNT_ID>'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回标签覆盖人群列表 |
| category_id | integer | 标签 id |
| category_name | string | 标签名称 |
| category_uv | integer | 标签覆盖人群数量 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "category_name": "音乐类游戏",
                "category_id": 141,
                "category_uv": 71000000
            },
            {
                "category_name": "烧烤",
                "category_id": 409,
                "category_uv": 51000000
            },
            {
                "category_name": "咖啡",
                "category_id": 854,
                "category_uv": 60000000
            }
        ]
    }
}
```

## 场景组合示例

枚举值会自动根据已选条件变化，只展示有示例数据的枚举值

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
