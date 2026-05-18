---
title: 获取素材标签列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/material_labels/get
doc_id: tencent_ads_v3_0_docs_api_material_labels_get
source_id: tencent_ads_v3_0_docs_api_material_labels_get
---
# 获取素材标签列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | material_labels/get |
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
| account_id | integer | 广告主帐号 id |
| organization_id | integer | account_id 或 organization_id 传其中一个即可 最小值 0，最大值 9999999999 |
| label_id | integer | 标签 id |
| label_name | string | 标签名称 字段长度最小 1 字节，长度最大 2048 字节 |
| first_label_level_id_list | array | 一级标签类目 id 列表 |
| second_label_level_id_list | array | 二级标签类目 id 列表 |
| need_count | boolean | 是否需要返回标签关联的图片/视频数量 可选值：{ true, false } |
| business_scenario | enum | 业务场景，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#business_scenario) 可选值：{ BUSINESS_SCENARIO_UNKNOWN, BUSINESS_SCENARIO_CONTENT, BUSINESS_SCENARIO_DELIVERY } |
| ownership_type | enum | 素材归属类型过滤，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#ownership_type) 可选值：{ OWNED } |
| order_by | struct[] | 排序字段 数组最小长度 1，最大长度 12 |
| sort_field* | string | 排序字段，CREATE_TIME |
| sort_type* | enum | 排序方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#sorted) 可选值：{ ASCENDING, DESCENDING } |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/material_labels/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'first_label_level_id_list=[]' \
-d 'second_label_level_id_list=[]' \
-d 'order_by=[]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/material_labels/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'first_label_level_id_list=[]' \
-d 'second_label_level_id_list=[]' \
-d 'order_by=[]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 素材标签列表 |
| account_id | integer | 广告主帐号 id |
| label_id | integer | 标签 id |
| label_name | string | 标签名称 |
| first_label_level_id | integer | 一级标签类目 id |
| first_label_level_name | string | 一级标签类目名称 |
| second_label_level_id | integer | 二级标签类目 id |
| second_label_level_name | string | 二级标签类目名称 |
| create_time | string | 创建时间 |
| label_source | enum | 标签来源，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#material_label_source) |
| relation_image_count | integer | 关联图片数 |
| relation_media_count | integer | 关联视频数 |
| business_scenario_val | enum | 业务场景，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#business_scenario) |
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
                "account_id": "<ACCOUNT_ID>"
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

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
