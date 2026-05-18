---
title: 获取商品属性 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/categories_attribute/get
doc_id: tencent_ads_v3_0_docs_api_categories_attribute_get
source_id: tencent_ads_v3_0_docs_api_categories_attribute_get
---
# 获取商品属性 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | categories_attribute/get |
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
| vertical_id* | integer | 行业 id |
| last_category_id_list | array | 末级类目 id 列表 数组最大长度 100 |
| page* | integer | 当前页号 |
| page_size* | integer | 分页大小 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/categories_attribute/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'last_category_id_list=[]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/categories_attribute/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'last_category_id_list=[]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 商品属性列表 |
| attribute_name | string | 属性名称 |
| attribute_type | enum | 属性类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#product_attribute_type) |
| last_category_id | integer | 末级类目 id |
| page_info | struct | 分页配置信息 |
| page | integer | 当前页号 |
| page_size | integer | 分页大小 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [],
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
