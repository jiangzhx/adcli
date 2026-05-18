---
title: 获取朋友圈头像昵称跳转页 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/profiles/get
doc_id: tencent_ads_v3_0_docs_api_profiles_get
source_id: tencent_ads_v3_0_docs_api_profiles_get
---
# 获取朋友圈头像昵称跳转页 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | profiles/get |
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
| account_id | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 4 |
| field* | string | 过滤字段 可选值：{ profile_type, profile_id, support_wechat_channels, marketing_goal, marketing_sub_goal, marketing_carrier_type, marketing_target_type, marketing_carrier_id } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 profile_id 时，可选值：{ EQUALS } 当 field 取值 profile_type 时，可选值：{ EQUALS } 当 field 取值 marketing_goal 时，可选值：{ EQUALS } 当 field 取值 marketing_sub_goal 时，可选值：{ EQUALS } 当 field 取值 marketing_carrier_type 时，可选值：{ EQUALS } 当 field 取值 marketing_target_type 时，可选值：{ EQUALS } 当 field 取值 marketing_carrier_id 时，可选值：{ EQUALS } 当 field 取值 support_wechat_channels 时，可选值：{ EQUALS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 profile_id 时，数组长度为 1 当 field 取值 profile_type 时，数组长度为 1 可选值：{ PROFILE_TYPE_DEFINITION, PROFILE_TYPE_AUTO_GENERATE } 当 field 取值 marketing_goal 时，数组长度为 1 当 field 取值 marketing_sub_goal 时，数组长度为 1 当 field 取值 marketing_carrier_type 时，数组长度为 1 当 field 取值 marketing_target_type 时，数组长度为 1 当 field 取值 marketing_carrier_id 时，数组长度为 1 当 field 取值 support_wechat_channels 时，数组长度为 1 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| organization_id | integer | 业务单元 id 最小值 0，最大值 9999999999 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/profiles/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[{"field":"profile_id","operator":"EQUALS","values":["11111"]}]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/profiles/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[{"field":"profile_id","operator":"EQUALS","values":["11111"]}]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| owner_id | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| profile_type | enum | 朋友圈头像及昵称跳转页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_profile_type) |
| profile_id | integer | 朋友圈头像及昵称跳转页 id |
| head_image_id | string | ，头像图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得； profile_type 为 PROFILE_TYPE_DEFINITION 时必填，head_image_id 对应的图片高、宽均为 512px、大小限制 400KB |
| head_image_url | string | 头像 url |
| profile_name | string | ，昵称，自定义时传入，不允许有特殊字符,字段长度最小 1 个等宽字符，长度最大 30 等宽字符（即字段最大长度为 15 个中文字或全角标点,30 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。) |
| description | string | ，朋友圈头像及昵称跳转页简介，字段长度最小 1 个等宽字符，长度最大 120 等宽字符（即字段最大长度为 120 个中文字或全角标点,240 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。）； profile_type 为 PROFILE_TYPE_DEFINITION 时必填 |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，时间戳 |
| profile_url | string | 朋友圈头像昵称跳转页 url |
| system_status | enum | 朋友圈头像及昵称跳转页状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_sys_status) |
| mdm_id | integer | 主体 id |
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
                "profile_type": "PROFILE_TYPE_DEFINITION",
                "profile_id": 11111,
                "head_image_id": 22222,
                "profile_name": "profile name",
                "description": "profile description",
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

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
