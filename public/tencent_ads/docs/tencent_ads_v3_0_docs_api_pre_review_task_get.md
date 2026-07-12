---
title: 异步预审结果获取 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/pre_review_task/get
doc_id: tencent_ads_v3_0_docs_api_pre_review_task_get
source_id: tencent_ads_v3_0_docs_api_pre_review_task_get
---
# 异步预审结果获取 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | pre_review_task/get |
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
| task_id* | string | 预审任务唯一 id 字段长度最小 1 字节，长度最大 128 字节 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/pre_review_task/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'task_id=<TASK_ID>'
curl -v -G 'https://api.e.qq.com/v3.0/pre_review_task/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'task_id=<TASK_ID>'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| element_type | enum | 元素类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#pre_review_element_type_v3) |
| element_content | string | 元素内容，1）当元素类型为“图片”时，取值为：image_id 图片 id 2）当元素类型为“视频”时，取值为：video_id 视频 id 3）当元素类型为“文本”时，取值为：文本内容 4）当元素类型为”落地页“时，取值为：落地页的 URL |
| risk_level | enum | 元素风险级别，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#risk_level) |
| pre_review_details | struct[] | 元素预审结果明细集合 |
| site_set | enum | 投放版位集合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#pre_review_site_set_definition_string) |
| pre_review_result | enum | 投放版位的预审结果，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#group_risk_level) |
| reject_reason_detail | struct[] | 拒绝原因明细集合 |
| reject_reason_content | string | 拒绝原因内容 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "pre_review_details": [
            {
                "reject_reason_detail": []
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯营销反馈中心在线提交问题，我们的人工客服将为你服务
