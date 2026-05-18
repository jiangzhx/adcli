---
title: 获取创意文案 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/creativetools_text/get
doc_id: tencent_ads_v3_0_docs_api_creativetools_text_get
source_id: tencent_ads_v3_0_docs_api_creativetools_text_get
---
# 获取创意文案 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | creativetools_text/get |
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
| max_text_length* | integer | 文案最长字数限制 |
| adgroup_id | int64 | 广告组 id |
| keyword | string | 关键字，有多个关键词用半角逗号','分割，如：零花钱,金额 字段长度最小 1 字节，长度最大 255 字节 |
| filtering | integer[] | 过滤选项，可选值：[[0, 1], [0], [1]]，[0]代表只请求 HOT 的文案，[1]代表只请求 CTR 高的文案，[0, 1]代表只请求 HOT 和 CTR 高的文案 数组最小长度 1，最大长度 2 最小值 0，最大值 1 |
| number | integer | 每次请求最大文案返回数量为 100 条，该字段若不填，则默认返回 10 条，若填写的值大于 200，则只返回 100 条数据 |
| category_first_level | integer | 一级广告行业，广点通的一级行业分类 id，详见 [\[行业分类\]](https://developers.e.qq.com/docs/reference/industry_v5.1) |
| category_second_level | integer | 二级广告行业，广点通的二级行业分类 id，详见 [\[行业分类\]](https://developers.e.qq.com/docs/reference/industry_v5.1) |
| product_catalog_id | integer | 商品库 id，如果传入 product_outer_ids，该参数必填 |
| product_outer_ids | string[] | 商品 id 列表，传入该参数，会结合商品信息推荐文案 字段长度最小 1 字节，长度最大 100 字节 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/creativetools_text/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=111111111' \
-d 'max_text_length=100' \
-d 'adgroup_id=<ADGROUP_ID>' \
-d 'keyword=关键字' \
-d 'filtering=[1]' \
-d 'number=100' \
-d 'category_first_level=21474836486' \
-d 'category_second_level=21474837082' \
-d 'product_outer_ids=[]'
curl -v -G 'https://api.e.qq.com/v3.0/creativetools_text/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=111111111' \
-d 'max_text_length=100' \
-d 'adgroup_id=<ADGROUP_ID>' \
-d 'keyword=关键字' \
-d 'filtering=[1]' \
-d 'number=100' \
-d 'category_first_level=21474836486' \
-d 'category_second_level=21474837082' \
-d 'product_outer_ids=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| return_number | integer | 返回的文案数量 |
| return_texts | struct[] | 返回的文案列表 |
| text | string | 文案内容 |
| tag | string | 文案标签 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "return_number": 1,
        "return_texts": [
            {
                "text": "2020 年{{city}}想挑战高薪注意了：测测考个健康管理师，含金量高",
                "tag": "点击率高"
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
