---
title: 批量修改营销单元日预算 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/adgroups/update_daily_budget
doc_id: tencent_ads_v3_0_docs_api_adgroups_update_daily_budget
source_id: tencent_ads_v3_0_docs_api_adgroups_update_daily_budget
---
# 批量修改营销单元日预算 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | adgroups/update_daily_budget |
| 请求方法 | POST |
| Content-Type | application/json |

## 全局参数

全局参数是指每一个接口都需要使用到的参数。详情[参考](https://developers.e.qq.com/v3.0/pages/send_request)，代码案例[参考](https://developers.e.qq.com/v3.0/pages/send_request)。

| 参数名称 | 参数类型 |
| --- | --- |
| access_token | 授权令牌，完成 OAuth 2.0 授权后获得，参考[授权认证](https://developers.e.qq.com/docs/start/authorization)章节 |
| timestamp | 当前的时间戳，单位为秒，允许客户端请求最大时间误差为 300 秒。 MarketingAPI 所使用的时间戳，若无特殊说明，均为秒级时间戳 MarketingAPI 所使用的时区为 GMT+8，例如当时间戳为 1494840119 时，表示 2017-05-15 17:21:59 |
| nonce | 随机字串标识，不超过 32 个字符，由调用方自行生成，需保证全局唯一性 |

## 特定请求参数

该参数为实名认证要求参数,调用受限接口时必传，注意不是放在 header 中

| 参数名称 | 参数类型 |
| --- | --- |
| user_token | 实名认证完成获取的令牌，获取方式参考[API 身份验证升级公告](https://docs.qq.com/doc/DSVdkdk1LQ1hOam5n)中的开发者对接文档 |

## 请求参数

标有*的参数为必填项

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| update_daily_budget_spec* | struct[] | 更新日限额条件 |
| adgroup_id* | int64 | 更新日限额条件 |
| daily_budget* | integer | 日预算，日预算，单位为分，ADX 程序化广告不可填写提交单位为分，设置为 0 表示不设预算（即不限）； 日预算需介于 5,000 分- 400,000,000 分之间（50 元- 4,000,000 元，单位为人民币）； 修改后的日预算不能低于该广告今日已消耗金额的 1.5 倍加上冻结金额；且 修改后的日预算不能低于该广告今日已消耗金额加上 5,000 分（50 元，单位为人民币）； |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/adgroups/update_daily_budget?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "update_daily_budget_spec": [
        {
            "adgroup_id": 13397328752,
            "daily_budget": 5000
        }
    ]
}'
curl 'https://api.e.qq.com/v3.0/adgroups/update_daily_budget?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "update_daily_budget_spec": [
        {
            "adgroup_id": 13397328752,
            "daily_budget": 5000
        }
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| code | integer | 返回码 |
| message | string | 英文返回消息 |
| message_cn | string | 中文返回消息 |
| adgroup_id | int64 | 广告 id |
| fail_id_list | integer[] | 失败的 id 集合 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "code": 0,
                "adgroup_id": 13397328752,
                "message_cn": "",
                "message": ""
            }
        ],
        "fail_id_list": []
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
