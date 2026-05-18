---
title: 获取蹊径落地页模板列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/xijing_template_list/get
doc_id: tencent_ads_v3_0_docs_api_xijing_template_list_get
source_id: tencent_ads_v3_0_docs_api_xijing_template_list_get
---
# 获取蹊径落地页模板列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | xijing_template_list/get |
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
| page_template_id* | string | 蹊径落地页模板 id，公共的营销模板 id，或有权限的私有模板 id 字段长度最小 1 字节，长度最大 32 字节 |
| is_interaction | boolean | 是否互动模板 可选值：{ true, false } 默认值：false |
| is_public | boolean | 是否公共模板 可选值：{ true, false } 默认值：true |
| template_source | enum | 查询类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#template_source) 可选值：{ GRANT, OWNER } 默认值：OWNER |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/xijing_template_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'page_size=10' \
-d 'page=1'
curl -v -G 'https://api.e.qq.com/v3.0/xijing_template_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'page_size=10' \
-d 'page=1'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 蹊径模板返回数据结构 |
| page_template_id | string | 蹊径落地页模板 id，公共的营销模板 id，或有权限的私有模板 id |
| template_owner_id | integer | 授权模板的拥有者 id，包括代理商和广告主帐号 id |
| page_template_name | string | 模板名称 |
| page_template_cover_url | string | 模板封面图 |
| playable_type | enum | 互动落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#x_j_playable_type) |
| labels | enum[] | 模板支持落地页类型标签，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#template_page_type_label) |
| is_complex | boolean | 是否复杂模板，复杂模板配置需通过调用【蹊径-获取复杂模板配置】获取 |
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
                "page_template_id": "1996",
                "template_owner_id": 20457,
                "page_template_name": "万能测试 5",
                "page_template_cover_url": "http://xj.gdtimg.com/xjimg/0/a5c2274af808dba242bec660709a148ecc3f8865.png/0",
                "playable_type": "TEMPLATE_GAME",
                "labels": [
                    "IOS",
                    "ANDROID"
                ],
                "is_complex": true
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
