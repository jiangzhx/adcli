---
title: 添加订阅账户 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/subscription_task_account/add
doc_id: tencent_ads_v3_0_docs_api_subscription_task_account_add
source_id: tencent_ads_v3_0_docs_api_subscription_task_account_add
---
# 添加订阅账户 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 |  |
| --- | --- |
| 请求地址 | subscription_task_account/add |
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
| task_id | integer | 订阅任务 id，在订阅中心创建的订阅任务的 id。为自定义推送账户任务添加订阅账户时必传，此时不用传递 app_id |
| app_id | integer | 应用 id，为应用推送账户包添加订阅账户时必传，此时不用传递 task_id |
| account_id_list* | integer[] | 账户 id 列表 数组最小长度 1，最大长度 500 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/subscription_task_account/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "task_id": "<TASK_ID>",
    "account_id_list": []
}'
curl 'https://api.e.qq.com/v3.0/subscription_task_account/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "task_id": "<TASK_ID>",
    "account_id_list": []
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| failed_account_list | struct[] | 失败账户 id 列表 |
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| error_msg | string | 失败原因 |
| success_account_list | integer[] | 成功账户 id 列表 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "failed_account_list": [
            {
                "account_id": "<ACCOUNT_ID>"
            }
        ],
        "success_account_list": []
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
