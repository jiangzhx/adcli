---
title: 获取商品类目 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/product_categories_list/get
doc_id: tencent_ads_v3_0_docs_api_product_categories_list_get
source_id: tencent_ads_v3_0_docs_api_product_categories_list_get
---
# 获取商品类目 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | product_categories_list/get |
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
| product_catalog_id* | integer | 商品库 id |
| page* | integer | 分页 |
| page_size* | integer | 分页大小 |
| level | integer | 类目层级 |
| category_id | integer | 商品类目 id |
| category_name | string | 商品类目名称 字段长度最小 1 字节，长度最大 100 字节 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/product_categories_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'page=1' \
-d 'page_size=10' \
-d 'level=2' \
-d 'category_id=277' \
-d 'category_name=男休闲鞋'
curl -v -G 'https://api.e.qq.com/v3.0/product_categories_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'page=1' \
-d 'page_size=10' \
-d 'level=2' \
-d 'category_id=277' \
-d 'category_name=男休闲鞋'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 商品类目列表 |
| category_id | integer | 商品类目 id |
| category_name | string | 商品类目名称 |
| parent_category_id | integer | 父类目 id |
| level | integer | 类目层级 |
| category_path | struct[] | 类目名称路径集合 |
| category_id | integer | 商品类目 id |
| category_name | string | 商品类目名称 |
| level | integer | 类目层级 |
| page_info | struct | 分页配置信息 |
| page | integer | 分页 |
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
        "list": [
            {
                "category_id": 277,
                "category_name": "男休闲鞋",
                "parent_category_id": 272,
                "level": 2,
                "category_path": [
                    {
                        "category_id": 271,
                        "category_name": "鞋",
                        "level": 0
                    },
                    {
                        "category_id": 272,
                        "category_name": "男鞋",
                        "level": 1
                    },
                    {
                        "category_id": 277,
                        "category_name": "男休闲鞋",
                        "level": 2
                    }
                ]
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
