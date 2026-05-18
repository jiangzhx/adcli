---
title: 上传客户人群数据文件 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/custom_audience_files/add
doc_id: tencent_ads_v3_0_docs_api_custom_audience_files_add
source_id: tencent_ads_v3_0_docs_api_custom_audience_files_add
---
# 上传客户人群数据文件 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | audience_management,ads_management,user_actions |
| --- | --- |
| 请求地址 | custom_audience_files/add |
| 请求方法 | POST |
| Content-Type | multipart/form-data |

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
| audience_id* | integer | 人群 id，只能是 CUSTOMER_FILE 类人群 |
| user_id_type* | enum | 号码包用户 id 类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_user_id_type) 可选值：{ HASH_IDFA, HASH_IMEI, HASH_MOBILE_PHONE, IDFA, IMEI, WX_OPENID, WX_UNIONID, WECHAT_OPENID, SALTED_HASH_IMEI, SALTED_HASH_IDFA, OAID, HASH_OAID, SHA256_MOBILE_PHONE, MD5_SHA256_IMEI, MD5_SHA256_IDFA, MD5_SHA256_OAID, CAID } |
| file* | file | 上传人群文件，txt 或者 csv 文件每行一个号码，文件压缩后的 zip 包，压缩后的 zip 包不超过 100M |
| operation_type | enum | 文件操作类型，如果不填则默认为 APPEND，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operation_type) 可选值：{ APPEND, REDUCE } |
| open_app_id | string | 微信 appid，当且仅当数据文件中的用户 id 类型为 'WECHAT_OPENID'（WX_OPENID）时有效 字段长度最小 1 字节，长度最大 128 字节 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/custom_audience_files/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-F 'account_id=<ACCOUNT_ID>' \
-F 'audience_id=<AUDIENCE_ID>' \
-F 'user_id_type=IMEI' \
-F 'file=@/usr/local/my/audiencefile.zip'
curl 'https://api.e.qq.com/v3.0/custom_audience_files/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-F 'account_id=<ACCOUNT_ID>' \
-F 'audience_id=<AUDIENCE_ID>' \
-F 'user_id_type=IMEI' \
-F 'file=@/usr/local/my/audiencefile.zip'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| custom_audience_file_id | integer | 数据文件 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "custom_audience_file_id": "<CUSTOM_AUDIENCE_FILE_ID>"
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
