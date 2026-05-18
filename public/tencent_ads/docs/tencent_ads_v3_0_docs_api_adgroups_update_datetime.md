---
title: 批量修改营销单元投放起止时间 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/adgroups/update_datetime
doc_id: tencent_ads_v3_0_docs_api_adgroups_update_datetime
source_id: tencent_ads_v3_0_docs_api_adgroups_update_datetime
---
# 批量修改营销单元投放起止时间 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | adgroups/update_datetime |
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
| update_datetime_spec* | struct[] | 更新投放时间条件，数组最大长度 100 数组最大长度 100 |
| adgroup_id* | int64 | 广告 id |
| begin_date | string | 开始投放日期，日期格式：YYYY-MM-DD，且日期小于等于 end_date 字段长度为 10 字节 |
| end_date | string | 结束投放日期，日期格式：YYYY-MM-DD，大于等于今天，且大于等于 begin_date ；针对微信流量的更新 end_time 的场景，会有额外的规则（更新后的 end_time 至少是当前时间的 6h 之后且当前更新时间到 end_time 与投放时段有交集 字段长度最小 0 字节，长度最大 10 字节 |
| time_series | string | 投放时间段，格式为 48 * 7 位字符串，且都为 0 和 1，以半个小时为最小粒度，从周一零点开始至周日 24 点结束。0 为不投放，1 为投放，全传 1 视为全时段投放，不允许全部传 0。朋友圈广告的投放时间需大于等于 6 小时，小于等于 30 个自然日，且每天至少投放 6 小时，且每天投放的时段需保持一致 字段长度为 336 字节 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/adgroups/update_datetime?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>"
}'
curl 'https://api.e.qq.com/v3.0/adgroups/update_datetime?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>"
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
                "adgroup_id": 5075803039,
                "message_cn": "",
                "message": ""
            },
            {
                "code": 0,
                "adgroup_id": 5075801466,
                "message_cn": "",
                "message": ""
            }
        ],
        "fail_id_list": []
    }
}
```

## 场景组合示例

枚举值会自动根据已选条件变化，只展示有示例数据的枚举值

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
