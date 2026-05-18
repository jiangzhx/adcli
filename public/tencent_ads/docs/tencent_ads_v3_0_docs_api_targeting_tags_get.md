---
title: 获取定向标签 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/targeting_tags/get
doc_id: tencent_ads_v3_0_docs_api_targeting_tags_get
source_id: tencent_ads_v3_0_docs_api_targeting_tags_get
---
# 获取定向标签 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | targeting_tags/get |
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
| type* | enum | 标签类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_targeting_tags_type) |
| tag_spec | struct | 获取定向标签的条件 |
| behavior_spec | struct | 获取行为定向标签的条件，type 为 BEHAVIOR 时必填 |
| query_mode* | enum | 定向标签查询方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_targeting_tag_query_mode) 可选值：{ TARGETING_TAG_QUERY_MODE_SEARCH, TARGETING_TAG_QUERY_MODE_RECOMMEND, TARGETING_TAG_QUERY_MODE_COMMON, TARGETING_TAG_QUERY_MODE_ADVANCED_RECOMMEND, TARGETING_TAG_QUERY_MODE_VERIFY_QUERY_LIST } |
| query_spec | struct | 查询定向标签的条件，当 query_mode 为 TARGETING_TAG_QUERY_MODE_VERIFY_QUERY_LIST、TARGETING_TAG_QUERY_MODE_SEARCH 和 TARGETING_TAG_QUERY_MODE_RECOMMEND 时必填 |
| query | string | 用于搜索或推荐的词 字段长度最小 1 字节，长度最大 200 字节 |
| query_list | string[] | 批量检查关键词，应答结果仅返回有效关键词，当且仅当 query_mode 为 TARGETING_TAG_QUERY_MODE_VERIFY_QUERY_LIST 时可填且必填 数组最小长度 1，最大长度 250 字段长度最小 1 字节，长度最大 64 字节 |
| max_result_number | integer | 最大结果数 最小值 1，最大值 50 |
| excluding_targeting_tags | string[] | 已经选中的标签，在结果中不会再次出现 数组最小长度 1，最大长度 250 |
| advanced_recommend_type | enum | 优质推荐类型，当 query_mode 为 TARGETING_TAG_QUERY_MODE_ADVANCED_RECOMMEND 时必填，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_targeting_advanced_recommend_type) 可选值：{ ADVANCED_RECOMMEND_TYPE_SYSTEMATIC, ADVANCED_RECOMMEND_TYPE_INDUSTRY_HOT } |
| interest_spec | struct | 获取兴趣定向标签的条件，type 为 INTEREST 时必填 |
| query_mode* | enum | 定向标签查询方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_targeting_tag_query_mode) 可选值：{ TARGETING_TAG_QUERY_MODE_SEARCH, TARGETING_TAG_QUERY_MODE_RECOMMEND, TARGETING_TAG_QUERY_MODE_COMMON, TARGETING_TAG_QUERY_MODE_ADVANCED_RECOMMEND, TARGETING_TAG_QUERY_MODE_VERIFY_QUERY_LIST } |
| query_spec | struct | 查询定向标签的条件，当 query_mode 为 TARGETING_TAG_QUERY_MODE_VERIFY_QUERY_LIST、TARGETING_TAG_QUERY_MODE_SEARCH 和 TARGETING_TAG_QUERY_MODE_RECOMMEND 时必填 |
| query | string | 用于搜索或推荐的词 字段长度最小 1 字节，长度最大 200 字节 |
| query_list | string[] | 批量检查关键词，应答结果仅返回有效关键词，当且仅当 query_mode 为 TARGETING_TAG_QUERY_MODE_VERIFY_QUERY_LIST 时可填且必填 数组最小长度 1，最大长度 250 字段长度最小 1 字节，长度最大 64 字节 |
| max_result_number | integer | 最大结果数 最小值 1，最大值 50 |
| excluding_targeting_tags | string[] | 已经选中的标签，在结果中不会再次出现 数组最小长度 1，最大长度 250 |
| advanced_recommend_type | enum | 优质推荐类型，当 query_mode 为 TARGETING_TAG_QUERY_MODE_ADVANCED_RECOMMEND 时必填，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_targeting_advanced_recommend_type) 可选值：{ ADVANCED_RECOMMEND_TYPE_SYSTEMATIC, ADVANCED_RECOMMEND_TYPE_INDUSTRY_HOT } |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/targeting_tags/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'tag_spec={
    "interest_spec": {
        "query_spec": {}
    }
}' \
-d 'type=INTEREST' \
-d 'account_id=<ACCOUNT_ID>'
curl -v -G 'https://api.e.qq.com/v3.0/targeting_tags/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'tag_spec={
    "interest_spec": {
        "query_spec": {}
    }
}' \
-d 'type=INTEREST' \
-d 'account_id=<ACCOUNT_ID>'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| id | integer | 通用 id |
| city_level | enum | 城市级别，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#city_level) |
| parent_name | string | 父节点标签名，如果没有父节点返回空字符串 |
| parent_id | integer | 通用 id |
| name | string | 名称 |
| tag_class | enum | 行为兴趣标签返回类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_tag_class) |
| available_for_individual | boolean | 行业是否可用于个人客户注册，true 或 false |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "city_level": "CITY_LEVEL_NONE",
                "parent_name": "",
                "parent_id": 0,
                "name": "中国未知",
                "id": 156
            },
            {
                "city_level": "CITY_LEVEL_NONE",
                "parent_name": "",
                "parent_id": 0,
                "name": "台湾省",
                "id": 710000
            },
            {
                "city_level": "CITY_LEVEL_NONE",
                "parent_name": "台湾省",
                "parent_id": 710000,
                "name": "台湾省未知",
                "id": 719900
            }
        ]
    }
}
```

## 场景组合示例

枚举值会自动根据已选条件变化，只展示有示例数据的枚举值

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
