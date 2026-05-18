---
title: 查询应用分包列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/extend_package/get
doc_id: tencent_ads_v3_0_docs_api_extend_package_get
source_id: tencent_ads_v3_0_docs_api_extend_package_get
---
# 查询应用分包列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | extend_package/get |
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
| package_id* | integer | Android 应用 id，大于等于 0 小于 2^63 |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 2 |
| field* | string | 过滤字段 可选值：{ channel_package_id, channel_name } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 channel_package_id 时，可选值：{ EQUALS } 当 field 取值 channel_name 时，可选值：{ CONTAINS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 channel_package_id 时，数组长度为 1 当 field 取值 channel_name 时，数组长度为 1 字段长度最小 1 字节，长度最大 1024 字节 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/extend_package/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'package_id=111111111111' \
-d 'page=1' \
-d 'filtering=[
    {
        "field": "channel_package_id",
        "values": [
            "35353535"
        ],
        "operator": "EQUALS"
    }
]' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/extend_package/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'package_id=111111111111' \
-d 'page=1' \
-d 'filtering=[
    {
        "field": "channel_package_id",
        "values": [
            "35353535"
        ],
        "operator": "EQUALS"
    }
]' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| package_id | integer | Android 应用 id，大于等于 0 小于 2^63 |
| channel_name | string | 安卓应用渠道包名称 |
| channel_package_id | string | 安卓应用渠道包 id |
| channel_id | string | 渠道标识，必须由英文、数字和_.-组成 |
| system_status | enum | 广告包渠道包状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#union_package_sys_status) |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，时间戳 |
| customized_channel_id | string | 用户自定义渠道包 id，用于渠道包归因（目前必须与渠道标识 channel_id 一致） |
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
        "page_info": {
            "total_number": 1,
            "total_page": 1,
            "page": 1,
            "page_size": 10
        },
        "list": [
            {
                "channel_name": "渠道包 2576389125",
                "created_time": 1664278340,
                "customized_channel_id": "",
                "last_modified_time": 1677143461,
                "system_status": "CHANNEL_PACKAGE_STATUS_OFFLINE",
                "channel_package_id": 35353535,
                "package_id": 111111111111,
                "channel_id": "348456_.-abc427149"
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
