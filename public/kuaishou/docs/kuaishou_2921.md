---
title: 创建高级创意接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2921&menuId=3671
doc_id: kuaishou_2921
source_id: kuaishou_2921
---
# 创建高级创意接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2921 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-17T06:28:14.042Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/asset/adv_card/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 id |  |
| adv_list | Adv[] | 是 |  | 卡片 |  |
| - card_type | Integer | 是 |  | 卡片类型 | 100:图片卡片 101:多利益卡-图文 102：多利益卡-多标签 103：电商促销样式 104：快捷评论卡 107：倒计时卡 108：优惠券卡 125: 价格差卡 131：商品卡-汽车样式 132: 商品卡-电商样式 133: 商品卡-小说样式 134: 商品卡-房产样式 200：推广位 |
| - url | String |  |  | 图片 url | 当 card_type = 100、101、103、125 必填 |
| - title | String |  |  | 标题 | 当 card_type = 101、102、103、107、108、125、200 必填, 104时表示文案信息（非必填） |
| - sub_title | String |  |  | 副标题 | 当 card_type = 102 必填 |
| - price | Integer |  |  | 原价格(单位：分) | 当 card_type = 103、125 必填 |
| - sale_price | Integer |  |  | 售卖价(单位：分) | 当 card_type = 103、125 必填 |
| - content_type | Integer |  |  | 卡片内容类型) | 当 card_type = 104 必填，当创建 emoji 快捷评论卡时，填 2 |
| - emoji_list | Emoji[] |  |  | emoji 信息 | 当 card_type = 104 必填 |
| - emoji_code | Integer |  |  | emoji 编码 | 当 card_type = 104 必填 |
| - emoji_url | Integer |  |  | emoji_url | 当 card_type = 104 必填 |
| - discount | Integer |  |  | 折扣金额 | 当 card_type = 108，即优惠券卡时必填 |
| - style_type | Integer |  |  | 高级创意样式类型 | ，1=普通卡片，2=推广位 |
| - begin_time | Long |  |  | 倒计时卡开始时间 | 当 card_type = 107，即倒计时卡时必填 |
| - end_time | Long |  |  | 倒计时卡结束时间 | 当 card_type = 107，即倒计时卡时必填 |
| - library_id | Long |  |  | 商品库ID | 当 card_type = 131、132、133、134，即SDPA商品卡时必填 |
| - product_id | Long |  |  | 商品ID | 当 card_type = 131、132、133、134，即SDPA商品卡时必填 |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 90000446,
    "adv_list": [
        {
            "card_type": 100,
            "url": "http://static.yximgs.com/udata/pkg/536fd750628a4cfb97ca82758e6a7ecd.png",
            "width": 720,
            "height": 408
        },
        {
            "card_type": 104,
            "content_type": 2,
            "emoji_list": [
                {
                    "emoji_code": "[加油]",
                    "emoji_url": "https://js2.a.yximgs.com/bs2/emotion/app_1576120138988_5x756gefzbda399.png"
                },
                {
                    "emoji_code": "[期待]",
                    "emoji_url": "https://js2.a.yximgs.com/bs2/emotion/app_1576120138988_5x78bpjjb5d63ps.png"
                },
                {
                    "emoji_code": "[红包]",
                    "emoji_url": "https://ali2.a.yximgs.com/bs2/emotion/app_1576120138988_5x2vtpwxnm7ikbc.png"
                }
            ],
            "title": "11221"
        }
    ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | AdvCardCreateData |  |  | 返回数据 |  |
| - adv_list | Long[] |  |  | 卡片 id 数组 |  |

## 原始内容

```
创建高级创意接口 /rest/openapi/v1/asset/adv_card/create { "advertiser_id": 90000446, "adv_list": [ { "card_type": 100, "url": "http://static.yximgs.com/udata/pkg/536fd750628a4cfb97ca82758e6a7ecd.png", "width": 720, "height": 408 }, { "card_type": 104, "content_type": 2, "emoji_list": [ { "emoji_code": "[加油]", "emoji_url": "https://js2.a.yximgs.com/bs2/emotion/app_1576120138988_5x756gefzbda399.png" }, { "emoji_code": "[期待]", "emoji_url": "https://js2.a.yximgs.com/bs2/emotion/app_1576120138988_5x78bpjjb5d63ps.png" }, { "emoji_code": "[红包]", "emoji_url": "https://ali2.a.yximgs.com/bs2/emotion/app_1576120138988_5x2vtpwxnm7ikbc.png" } ], "title": "11221" } ] } advertiser_id Long 广告主 id adv_list Adv[] 卡片 card_type Integer 卡片类型 url String 图片 url title String 标题 sub_title String 副标题 price Integer 原价格(单位：分) sale_price Integer 售卖价(单位：分) content_type Integer 卡片内容类型) emoji_list Emoji[] emoji 信息 emoji_code Integer emoji 编码 emoji_url Integer emoji_url discount Integer 折扣金额 style_type Integer 高级创意样式类型 begin_time Long 倒计时卡开始时间 end_time Long 倒计时卡结束时间 library_id Long 商品库ID product_id Long 商品ID code Integer 返回码 message String 返回信息 data AdvCardCreateData 返回数据 adv_list Long[] 卡片 id 数组
```
