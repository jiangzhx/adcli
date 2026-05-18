---
title: 获取创意组件元素催审状态 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/component_element_urge_review/get
doc_id: tencent_ads_v3_0_docs_api_component_element_urge_review_get
source_id: tencent_ads_v3_0_docs_api_component_element_urge_review_get
---
# 获取创意组件元素催审状态 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | component_element_urge_review/get |
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
| dynamic_creative_id* | integer | 广告创意 id |
| component_id_list | integer[] | 创意组件 id 列表 数组最小长度 1，最大长度 100 |
| element_fingerprint_list | string[] | 元素指纹列表 数组最小长度 1，最大长度 100 字段长度最小 0 字节，长度最大 128 字节 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/component_element_urge_review/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'component_id_list=[]' \
-d 'element_fingerprint_list=[]'
curl -v -G 'https://api.e.qq.com/v3.0/component_element_urge_review/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'component_id_list=[]' \
-d 'element_fingerprint_list=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| dynamic_creative_id | integer | 广告创意 id |
| component_urge_info_list | struct[] | 组件催审状态列表，可为空 |
| component_id | integer | 创意组件 id |
| urge_info | struct | 催审信息 |
| urge_status_type | string | 催审状态 |
| non_urge_reason | string | 不可催审原因 |
| reason_msg | string | 催审失败结果枚举说明 |
| element_urge_info_list | struct[] | 元素催审状态列表，可为空 |
| element_fingerprint | string | 元素指纹 |
| urge_info | struct | 催审信息 |
| urge_status_type | string | 催审状态 |
| non_urge_reason | string | 不可催审原因 |
| reason_msg | string | 催审失败结果枚举说明 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "account_id": "<ACCOUNT_ID>",
        "component_urge_info_list": [
            {
                "urge_info": []
            }
        ],
        "element_urge_info_list": [
            {
                "urge_info": []
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
