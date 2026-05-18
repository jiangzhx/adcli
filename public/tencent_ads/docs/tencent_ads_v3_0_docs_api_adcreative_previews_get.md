---
title: 获取绑定的广告预览受众列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/adcreative_previews/get
doc_id: tencent_ads_v3_0_docs_api_adcreative_previews_get
source_id: tencent_ads_v3_0_docs_api_adcreative_previews_get
---
# 获取绑定的广告预览受众列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | adcreative_previews/get |
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
| filtering* | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组长度为 1 |
| field* | string | 过滤字段 可选值：{ adgroup_id, dynamic_creative_id } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 adgroup_id 时，可选值：{ EQUALS, IN } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 adgroup_id 时，数组长度为 1 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/adcreative_previews/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[{"field":"campaign_id ","operator":"EQUALS","values":["<CAMPAIGN_ID>"]}]'
curl -v -G 'https://api.e.qq.com/v3.0/adcreative_previews/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[{"field":"campaign_id ","operator":"EQUALS","values":["<CAMPAIGN_ID>"]}]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 列表对象 |
| user_id | string | 受众 id |
| user_id_type | enum | 受众 id 类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_viewer_id_type) |
| is_previewed | boolean | 是否预览完成 |
| adgroup_id | int64 | 广告 id |
| dynamic_creative_id | integer | 广告创意 id |
| range | struct | 分页配置 |
| offset | integer | 偏移量，大于等于 0 且小于等于 999999，若不传则视为 0 |
| limit | integer | 获取数量，大于 0 且小于等于 200000，若不传则视为 10 |
| total_num | integer | 记录总数，大于 0 小于 2^63 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "user_id": "<USER_ID>",
                "duration": 5
            }
        ],
        "range": []
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
