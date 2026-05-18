---
title: 创建应用分包 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/extend_package/add
doc_id: tencent_ads_v3_0_docs_api_extend_package_add
source_id: tencent_ads_v3_0_docs_api_extend_package_add
---
# 创建应用分包 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | extend_package/add |
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
| package_id* | integer | Android 应用 id，大于等于 0 小于 2^63 |
| channel_list* | struct[] | 渠道号信息 数组最小长度 1，最大长度 200 |
| channel_id* | string | 渠道标识，必须由英文、数字和_.-组成 字段长度最小 1 字节，长度最大 200 字节 |
| channel_name | string | 渠道包名称，不填默认为{package_id}_{channel_id}，小于 255 个英文字符 字段长度最小 1 字节，长度最大 255 字节 |
| customized_channel_id | string | 用户自定义渠道包 id，用于渠道包归因（目前必须与渠道标识 channel_id 一致） 字段长度最小 1 字节，长度最大 256 字节 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/extend_package/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "package_id": 2000000336,
    "channel_list": [
        {
            "channel_id": "927684_.-abc475913",
            "channel_name": "渠道包 2000000336"
        }
    ]
}'
curl 'https://api.e.qq.com/v3.0/extend_package/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "package_id": 2000000336,
    "channel_list": [
        {
            "channel_id": "927684_.-abc475913",
            "channel_name": "渠道包 2000000336"
        }
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| package_id | integer | Android 应用 id，大于等于 0 小于 2^63 |
| success_results | struct[] | 渠道包操作成功信息列表 |
| channel_name | string | 安卓应用渠道包名称 |
| channel_package_id | string | 安卓应用渠道包 id |
| message | string | 渠道包操作结果描述，小于 1024 个英文字符 |
| failed_results | struct[] | 应用分包操作失败列表 |
| channel_name | string | 安卓应用渠道包名称 |
| channel_package_id | string | 安卓应用渠道包 id |
| message | string | 渠道包操作结果描述，小于 1024 个英文字符 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "success_results": [
            {
                "channel_name": "渠道包 2000000336",
                "channel_package_id": 10004713,
                "message": ""
            }
        ],
        "package_id": 2000000336,
        "failed_results": []
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
