---
title: 查询警示语添加记录 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/watermarks/get
doc_id: tencent_ads_v3_0_docs_api_watermarks_get
source_id: tencent_ads_v3_0_docs_api_watermarks_get
---
# 查询警示语添加记录 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | watermarks/get |
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
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| organization_id | integer | 业务单元 id 最小值 0，最大值 9999999999 |
| filtering | struct[] | 查询条件列表 |
| field* | string | 查询字段名，record_id |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 record_id 时，可选值：{ EQUALS, IN } |
| values* | array | 字符串数组 |
| page | integer | 页码，从 1 开始，0 表示不分页 |
| page_size | integer | 每页数量，默认 20，最大 100 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/watermarks/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "field": "record_id",
        "operator": "IN",
        "values": [
            "113"
        ]
    }
]'
curl -v -G 'https://api.e.qq.com/v3.0/watermarks/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "field": "record_id",
        "operator": "IN",
        "values": [
            "113"
        ]
    }
]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 记录列表 |
| record_id | string | 记录 id |
| status | string | 记录状态，success-成功，去重命中或处理完成； processing-处理中； failed-失败； deleted-已删除 |
| original_material_id | string | 待添加警示语的素材 id |
| material_name | string | 素材名称 |
| original_material_url | string | 待添加警示语的素材 URL |
| result_material_id | string | 添加警示语的结果素材 id |
| result_material_url | string | 添加警示语的结果素材 URL |
| page_info | struct | 分页配置信息 |
| page | integer | 搜索页码 默认值：1 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "record_id": "113",
                "status": "success",
                "original_material_id": "3174074841",
                "material_name": "新对话 (15)",
                "original_material_url": "http://wxsnsencsvp.wxs.qq.com/141/20204/snscosdownload/SH/reserved/6xykWLEnztJKZmMNgXib2PbibyCRlzwkkv4ussRfVNt524xzA3npnQMHN2xOs4x4LBUlZRDSV0Tn8LlbW1KjQssw?ck=c9c0f8a684b4c89ec2d367f46ccd4cec&idx=1&m=c9c0f8a684b4c89ec2d367f46ccd4cec&sha256=6609f4e513cfbe903ae53f5a50621b40f293b48898db29b97e44543553325354&token=cztXnd9GyrHIicRe6h7GGPk4BXQBSbC3icEP5Z3uxWka5zro6y8jhQHE7PkXvUicjmp9s9WwKUJAtSsB6OHIABlIg",
                "result_material_id": "3174075314",
                "result_material_url": "http://wxsnsencsvp.wxs.qq.com/141/20204/snscosdownload/SH/reserved/6xykWLEnztIyAibGSwPYZbWgDFlbicicCzI5C99iaAeyrw6ibkIkuoJUOicWvf2YKnhtJHFF4ZppTBZd66mG4p9cDtTg?ck=58ef5627ae5fe147f221a1bb093f1b6b&idx=1&m=58ef5627ae5fe147f221a1bb093f1b6b&sha256=b870c667cf3945bae40f291fec971de31176a76672d9ae9dafaf652111230e21&token=cztXnd9GyrHIicRe6h7GGPk4BXQBSbC3icEP5Z3uxWka5zro6y8jhQHOjRI3adU1MNZu7gDibCiccrzibFkAtxnqslg"
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 1,
            "total_page": 1
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
