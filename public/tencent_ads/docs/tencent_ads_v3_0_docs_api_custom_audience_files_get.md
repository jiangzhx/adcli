---
title: 获取客户人群数据文件 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/custom_audience_files/get
doc_id: tencent_ads_v3_0_docs_api_custom_audience_files_get
source_id: tencent_ads_v3_0_docs_api_custom_audience_files_get
---
# 获取客户人群数据文件 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | audience_management,ads_management,user_actions |
| --- | --- |
| 请求地址 | custom_audience_files/get |
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
| audience_id | integer | 人群 id，只能是 CUSTOMER_FILE 类人群 |
| custom_audience_file_id | integer | 数据文件 id，通过 [\[custom_audience_files\]](https://developers.e.qq.com/v3.0/docs/api/custom_audience_files/add) 模块上传客户人群数据文件获得 |
| page | integer | 当前页码，最小值 1 默认值：1 |
| page_size | integer | 分页大小，最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/custom_audience_files/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'audience_id=<AUDIENCE_ID>' \
-d 'custom_audience_file_id=<CUSTOM_AUDIENCE_FILE_ID>' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/custom_audience_files/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'audience_id=<AUDIENCE_ID>' \
-d 'custom_audience_file_id=<CUSTOM_AUDIENCE_FILE_ID>' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回数组列表 默认值：10 |
| audience_id | integer | 人群 id 默认值：10 |
| custom_audience_file_id | integer | 数据文件 id |
| name | string | 文件名称 |
| user_id_type | enum | 号码包用户 id 类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_user_id_type) |
| operation_type | enum | 文件操作类型，如果不填则默认为 APPEND，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operation_type) |
| open_app_id | string | 微信 appid，当且仅当数据文件中的用户 id 类型为 'WECHAT_OPENID'（WX_OPENID）时有效 |
| process_status | enum | 文件状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_file_process_status) |
| process_code | integer | 处理完成后的状态码，0 表示成功，非 0 失败 |
| error_message | string | 错误具体信息 |
| line_count | integer | 文件总行数 |
| valid_line_count | integer | 文件中没有格式错误的行数 |
| user_count | integer | 文件包含的用户数 |
| size | integer | 文件大小 |
| created_time | string | 创建时间，格式为 yyyy-MM-dd HH:mm:ss，如 2016-11-01 10:42:56 |
| page_info | struct | 分页信息 |
| page | integer | 当前页码，最小值 1 默认值：1 |
| page_size | integer | 分页大小，最小值 1，最大值 100 默认值：10 |
| total_number | integer | 总行数 默认值：10 |
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
                "audience_id": "<AUDIENCE_ID>",
                "custom_audience_file_id": "<CUSTOM_AUDIENCE_FILE_ID>",
                "name": "设备人群包",
                "user_id_type": "HASH_IMEI",
                "operation_type": "APPEND",
                "open_app_id": "",
                "process_status": "PENDING",
                "process_code": 0,
                "error_message": "",
                "user_count": 100,
                "valid_line_count": 100,
                "line_count": 120,
                "created_time": "2017-01-12 19:20:36"
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
