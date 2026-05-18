---
title: 查询视频号开户记录 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account/get
doc_id: tencent_ads_v3_0_docs_api_wechat_channels_ad_account_get
source_id: tencent_ads_v3_0_docs_api_wechat_channels_ad_account_get
---
# 查询视频号开户记录 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | wechat_channels_ad_account/get |
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
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 5 |
| field* | string | 过滤字段 可选值：{ wechat_channels_ad_account_id, nickname, created_time, last_modified_time } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 nickname 时，可选值：{ EQUALS } 当 field 取值 wechat_channels_ad_account_id 时，可选值：{ EQUALS } 当 field 取值 created_time 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } 当 field 取值 last_modified_time 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 wechat_channel_ad_account_id 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 当 field 取值 wechat_channel_ad_account_id 时，数组长度为 1 当 field 取值 nickname 时，数组长度为 1 字段长度最小 1 字节，长度最大 50 字节 当 field 取值 created_time 时，数组长度为 1 字段长度为 10 字节 当 field 取值 last_modified_time 时，数组长度为 1 字段长度为 10 字节 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/wechat_channels_ad_account/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/wechat_channels_ad_account/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
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
| list | struct[] | 返回信息列表 |
| wechat_channels_ad_account_id | integer | 视频号广告开户 id |
| export_username | string | 视频号账号 id 已废弃 |
| wechat_bind_auth_token | string | 视频号绑定微信授权 Token |
| wechat_bind_status | enum | 视频号一键开户微信绑定流程扫码状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#wechat_channels_ad_account_bind_wechat_status) |
| nickname | string | 视频号用户昵称 |
| head_image_id | string | 视频号头像图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得,head_image_id 对应的图片高、宽均为 512px、大小限制 400KB |
| head_image_url | string | 视频号头像图片 URL 地址 |
| audit_msg | string | 审核原因 |
| status | enum | 视频号开户状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#wechat_channels_ad_account_status) |
| certification_list | struct[] | 资质列表 |
| certification_code | string | 资质类型 |
| certification_id | integer | 资质 id |
| certification_file_list | struct[] | 资质文件列表 |
| certification_file_id | string | 资质文件 id，文件 id，通过 [\[资质文件上传 模块\]](https://developers.e.qq.com/docs/api/business_assets/asset_wechat_channels/file_add) 上传文件后获得 |
| certification_file_name | string | 文件名称 |
| certification_file | string | 视频号资质文件 URL 地址 |
| certification_image_list | struct[] | 资质图片列表 |
| certification_image_id | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/image) 上传图片后获得 |
| certification_image | string | 营业执照/企业资质证明图片 URL 地址 |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，时间戳 |
| finder_fail_msg | string | 平台拦截原因 |
| finder_fail_ret | number | 整数 |
| wechat_channels_account_id | string | 视频号账号 id |
| logout_time_second | integer | 预期注销时间，unix 时间戳，精确到秒 |
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
                "certification_list": [
                    {
                        "certification_file_list": [],
                        "certification_image_list": [
                            {
                                "certification_image_id": "<IMAGE_ID>",
                                "certification_image": "https://tencent.com/certification_example.png"
                            }
                        ]
                    }
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
