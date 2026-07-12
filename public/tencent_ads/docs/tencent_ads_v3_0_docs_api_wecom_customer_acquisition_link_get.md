---
title: 查询获客链接列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wecom_customer_acquisition_link/get
doc_id: tencent_ads_v3_0_docs_api_wecom_customer_acquisition_link_get
source_id: tencent_ads_v3_0_docs_api_wecom_customer_acquisition_link_get
---
# 查询获客链接列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | wecom_customer_acquisition_link/get |
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
| account_id* | integer | 账户 id，有操作权限的帐号 id，不支持代理商 id |
| corp_id* | string | 绑定的企业 id 字段长度最小 1 字节，长度最大 64 字节 |
| link_id | string | 指定获客链接 id，传入时只返回该链接信息，不走分页 |
| cursor | string | 分页游标，首次请求不传 |
| limit | integer | 单页大小，默认 10 最小值 0，最大值 4294967295 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/wecom_customer_acquisition_link/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>'
curl -v -G 'https://api.e.qq.com/v3.0/wecom_customer_acquisition_link/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| corp_id | string | 企业微信 corp_id |
| link_detail | struct[] | 获客链接列表 |
| link_id | string | 获客链接 id |
| link_name | string | 获客链接名称 |
| link_url | string | 获客链接 URL |
| create_time | integer | 创建时间戳 |
| skip_verify | boolean | 是否免好友验证 |
| user_id_list | string[] | 使用范围-成员 UserID 列表 |
| department_id_list | array | 使用范围-部门 id 列表 |
| next_cursor | string | 下一页游标 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "link_detail": [
            {
                "user_id_list": [],
                "department_id_list": []
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯营销反馈中心在线提交问题，我们的人工客服将为你服务
