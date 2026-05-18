---
title: 标签广场标签获取 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/labels/get
doc_id: tencent_ads_v3_0_docs_api_labels_get
source_id: tencent_ads_v3_0_docs_api_labels_get
---
# 标签广场标签获取 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | audience_management,ads_management,user_actions |
| --- | --- |
| 请求地址 | labels/get |
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
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) |
| field* | string | 过滤字段，可选字段：{label_group, parent_id, display_label_name} |
| operator* | string | 操作符，当 field 取值 label_group 时，枚举列表：{ IN }，当 field 取值 parent_id 时，枚举列表：{ NOT_IN }，当 field 取值 display_label_name 时，枚举列表：{ CONTAINS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 label_group 时，枚举列表：{MAP, POP}，其中 MAP 代表标签地图，POP 代表热点人群；当 field 取值 parent_id 时，传入需要排除的 parent_id ；当 field 取值 display_label_name 时，传入需要检索的标签名称文本 |
| page | integer | 当前页码，最小值 1 默认值：1 |
| page_size | integer | 分页大小，最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/labels/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[{"field":"label_group","operator":"IN","values":["MAP"]},{"field":"parent_id","operator":"NOT_IN","values":[12344,23434]},{"field":"display_label_name","operator":"CONTAINS","values":["电竞"]}]' \
-d 'page=1' \
-d 'page_size=100'
curl -v -G 'https://api.e.qq.com/v3.0/labels/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[{"field":"label_group","operator":"IN","values":["MAP"]},{"field":"parent_id","operator":"NOT_IN","values":[12344,23434]},{"field":"display_label_name","operator":"CONTAINS","values":["电竞"]}]' \
-d 'page=1' \
-d 'page_size=100'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回数组列表 默认值：10 |
| label_id | integer | 标签 id 默认值：10 |
| audience_id | integer | 自定义人群 id，大于 0 且小于 4294967295 默认值：10 |
| display_label_name | string | 标签名称 |
| description | string | 标签描述 |
| user_count | integer | 用户覆盖数 |
| page_info | struct | 分页信息 |
| page | integer | 当前页码，最小值 1 默认值：1 |
| page_size | integer | 分页大小，最小值 1，最大值 100 默认值：10 |
| total_number | integer | 总行数 默认值：10 |
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
                "label_id": 101,
                "audience_id": 123,
                "display_label_name": "标签",
                "description": "描述",
                "user_count": 12345
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 100,
            "total_number": 1,
            "total_page": 1
        }
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
