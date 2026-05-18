---
title: 获取创意资产总结 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/dc_component_summary_info/get
doc_id: tencent_ads_v3_0_docs_api_dc_component_summary_info_get
source_id: tencent_ads_v3_0_docs_api_dc_component_summary_info_get
---
# 获取创意资产总结 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_insights |
| --- | --- |
| 请求地址 | dc_component_summary_info/get |
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
| dynamic_creative_id | integer | 广告创意 id |
| component_summary_insight_type_list* | enum[] | 资产洞察总结需要的模块列表，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_summary_insight_type) 数组最小长度 1，最大长度 10 可选值：{ COMPONENTS_SUMMARY_INSIGHT_FULLFILL, COMPONENTS_SUMMARY_INSIGHT_QUALITY, COMPONENTS_SUMMARY_INSIGHT_HEALTHY, COMPONENTS_SUMMARY_INSIGHT_FIRST_PUBLICATION } |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/dc_component_summary_info/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'dynamic_creative_id=10001' \
-d 'component_summary_insight_type_list=[
    "COMPONENTS_SUMMARY_INSIGHT_HEALTHY"
]'
curl -v -G 'https://api.e.qq.com/v3.0/dc_component_summary_info/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'dynamic_creative_id=10001' \
-d 'component_summary_insight_type_list=[
    "COMPONENTS_SUMMARY_INSIGHT_HEALTHY"
]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| summary_data | struct | DC 组件汇总数据 |
| healthy_data | struct | 健康度模块汇总数据 |
| account_id | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| dynamic_creative_id | integer | 广告创意 id |
| adgroup_id | int64 | 广告 id |
| list | struct[] | 健康度组件类型维度汇总明细列表 |
| agg_component_type | string | 组件类型名称 |
| total_component_num | integer | 组件总数 |
| rejected_component_num | integer | 拒审组件数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "summary_data": {
            "healthy_data": {
                "account_id": "<ACCOUNT_ID>",
                "adgroup_id": "<ADGROUP_ID>",
                "dynamic_creative_id": 10001,
                "list": [
                    {
                        "agg_component_type": "video",
                        "rejected_component_num": 2,
                        "total_component_num": 2
                    },
                    {
                        "agg_component_type": "image",
                        "rejected_component_num": 1,
                        "total_component_num": 3
                    }
                ]
            }
        }
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
