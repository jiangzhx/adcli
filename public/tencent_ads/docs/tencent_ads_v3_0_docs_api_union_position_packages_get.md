---
title: 联盟流量包获取接口 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/union_position_packages/get
doc_id: tencent_ads_v3_0_docs_api_union_position_packages_get
source_id: tencent_ads_v3_0_docs_api_union_position_packages_get
---
# 联盟流量包获取接口 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | union_position_packages/get |
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
| account_id* | integer | 广告主 id，有操作权限的广告主 id |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件 数组长度为 1 |
| field* | string | 过滤字段 可选值：{ union_package_type } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 union_package_type 时，可选值：{ EQUALS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关 当 field 取值 union_package_type 时，数组长度为 1 可选值：{ UNION_PACKAGE_TYPE_INCLUDE, UNION_PACKAGE_TYPE_EXCLUDE } |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/union_position_packages/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/union_position_packages/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回数组列表 |
| union_package_id | integer | 流量包 id |
| union_package_name | string | 流量包名称，同一帐号下的流量包名称不允许重复，最多可创建 300 个流量包（字段长度最小 1 个等宽字符，长度最大 60 等宽字符（即字段最大长度为 60 个中文字或全角标点，120 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| union_package_type | enum | 流量包类型，流量包类型 枚举列表：UNION_PACKAGE_TYPE_INCLUDE（定投）、UNION_PACKAGE_TYPE_EXCLUDE（屏蔽），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_union_package_type) |
| union_position_id_list | integer[] | 腾讯广告联盟广告位 id 列表 |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，unix 时间戳，精确到秒 |
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
        "list": [
            {
                "union_package_id": 16417,
                "union_position_id_list": [
                    13978
                ],
                "created_time": 1491019858,
                "last_modified_time": 1491098468
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 1,
            "total_page": 1
        }
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
