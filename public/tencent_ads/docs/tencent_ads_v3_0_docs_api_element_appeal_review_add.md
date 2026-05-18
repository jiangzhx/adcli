---
title: 发起元素申诉复审 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/element_appeal_review/add
doc_id: tencent_ads_v3_0_docs_api_element_appeal_review_add
source_id: tencent_ads_v3_0_docs_api_element_appeal_review_add
---
# 发起元素申诉复审 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | element_appeal_review/add |
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
| dynamic_creative_id* | integer | 广告创意 id |
| component_id* | integer | 创意组件 id |
| element_id* | integer | 元素 id |
| element_type* | enum | 元素类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#review_element_type) 可选值：{ ELEMENT_TYPE_TEXT, ELEMENT_TYPE_URL, ELEMENT_TYPE_IMAGE, ELEMENT_TYPE_VIDEO, ELEMENT_TYPE_SELECT_NONE } |
| element_value* | string | 元素值 字段长度最小 0 字节，长度最大 512 字节 |
| element_finger_print* | string | 元素指纹 字段长度最小 0 字节，长度最大 128 字节 |
| appeal_demand* | string | 申诉复审需求，支持多选，多个申诉需求时以英文分号分割 字段长度最小 1 字节，长度最大 512 字节 |
| appeal_reason* | string | 申诉原因 字段长度最小 1 字节，长度最大 512 字节 |
| history_approval_component_id | integer | 历史已通过组件 id |
| description | string | 详细描述 字段长度最小 1 字节，长度最大 50 字节 |
| image_list | string[] | 附件图片列表 数组最小长度 0，最大长度 3 字段长度最小 1 字节，长度最大 512 字节 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/element_appeal_review/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "image_list": []
}'
curl 'https://api.e.qq.com/v3.0/element_appeal_review/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "image_list": []
}'
```

## 应答字段

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": ""
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
