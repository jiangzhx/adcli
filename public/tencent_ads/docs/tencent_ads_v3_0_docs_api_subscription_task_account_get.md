---
title: 查询订阅账户 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/subscription_task_account/get
doc_id: tencent_ads_v3_0_docs_api_subscription_task_account_get
source_id: tencent_ads_v3_0_docs_api_subscription_task_account_get
---
# 查询订阅账户 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 |  |
| --- | --- |
| 请求地址 | subscription_task_account/get |
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
| task_id | integer | 订阅任务 id，在订阅中心创建的订阅任务的 id。为自定义推送账户任务添加订阅账户时必传，此时不用传递 app_id |
| app_id | integer | 应用 id，为应用推送账户包添加订阅账户时必传，此时不用传递 task_id |
| account_id_list | integer[] | 账户 id 列表 数组最小长度 1，最大长度 500 |
| pagesize* | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| cursor | string | 游标值，游标翻页模式(PAGINATION_MODE_CURSOR)使用，第一次拉取无需填写、后续拉取传递上一次返回的 cursor 数值 字段长度最小 0 字节，长度最大 10 字节 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/subscription_task_account/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'task_id=<TASK_ID>' \
-d 'account_id_list=[]'
curl -v -G 'https://api.e.qq.com/v3.0/subscription_task_account/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'task_id=<TASK_ID>' \
-d 'account_id_list=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回列表信息 |
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| created_time | integer | 创建时间，时间戳 |
| cursor_page_info | struct | 游标分页信息 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| total_number | integer | 总条数 |
| next_cursor | string | 下一页游标值，往后翻页时，参数 cursor 为当前值，若为空则无下一页 |
| previous_cursor | string | 上一页游标值，往前翻页时，参数 cursor 为当前值，若为空则无上一页 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "account_id": "<ACCOUNT_ID>",
                "created_time": 1491019858
            }
        ],
        "cursor_page_info": {
            "page_size": 10,
            "total_number": 1
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
