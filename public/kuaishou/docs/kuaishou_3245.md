---
title: 创建商品（音视频-短剧）
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3245&menuId=4017
doc_id: kuaishou_3245
source_id: kuaishou_3245
---
# 创建商品（音视频-短剧）

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3245 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2025-11-20T12:05:40.070Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/product/batch/create/video/short/play |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 投放账号ID |  |
| short_play_product_edit_params | AdGatewayDpaProductBatchCreateParamForShortPlay[] | 是 |  | 短剧商品批量创建请求参数 |  |
| - industry_id | Integer | 是 | 8 | 音视频-短剧，industry_id（商品行业ID）=8 |  |
| - sub_industry_id | String | 是 | "短剧" | 音视频-短剧，sub_industry_id="短剧" |  |
| - library_id | Long | 是 |  | 商品库ID,创建商品必须填写商品所在商品库 |  |
| - outer_id | String | 是 |  | 商品第三方ID，作为某个商品库下的商品唯一ID |  |
| - name | String | 是 |  | 短剧名称 |  |
| - description | String |  |  | 短剧简介 |  |
| - label | String[] |  |  | 自定义标签-该字段已废弃 |  |
| - main_image_url | String[] |  |  | 商品主图 |  |
| - image_urls | String[] |  |  | 商品副图-该字段已废弃 |  |
| - first_category_id | Long | 是 |  | 商品一级类目ID，详见：https://docs.qingque.cn/d/home/eZQDRKX_1XpxyUdjPnk4xpXpD?identityId=2A5Nn96OA9U--该字段已废弃 |  |
| - first_category | String | 是 |  | 商品一级类目名称--该字段已废弃 |  |
| - second_category_id | Long | 是 |  | 商品二级类目ID-该字段已废弃 |  |
| - second_category | String | 是 |  | 商品二级类目名称-该字段已废弃 |  |
| - third_category_id | Long | 是 |  | 商品三级类目ID-该字段已废弃 |  |
| - third_category | String | 是 |  | 商品三级类目名称-该字段已废弃 |  |
| - short_play_product_info | ShortPlayProductInfoSneak | 是 |  | 短剧商品批量创建请求参数 |  |
| - channel | String | 是 |  | 男女频道: 男频, 女频, 不限 |  |
| - copyright | String | 是 |  | 版权方主体名称 |  |
| - new_themes | String[] | 是 |  | 题材，可多选(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) |  |
| - new_plots | String[] | 是 |  | 情节，可多选(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) |  |
| - episodes | Integer | 是 |  | 短剧剧集数 |  |
| - episode_duration | Integer |  |  | 单集剧集时长（分钟） |  |
| - paid_episodes | Integer | 是 |  | 起始解锁集数-该字段已废弃 |  |
| - unit_price | Double |  |  | 单集价格，变现模式=付费时必填，其他情况选填-该字段已废弃 |  |
| - max_charge | Double |  |  | 最高充值档位(元)-该字段已废弃 |  |
| - min_charge | Double |  |  | 最低充值档位(元)-该字段已废弃 |  |
| - recommend_charge | Double |  |  | 推荐充值档位(元)-该字段已废弃 |  |
| - is_online_earning | Integer |  |  | 是否网赚: 1-是, 2-否-该字段已废弃 |  |
| - starring | String[] |  |  | 主演 |  |
| - discovery_mode | String | 是 |  | 变现模式：付费,免费-该字段已废弃 |  |
| - member_type | String |  |  | 会员类型：终身,年度,月度,周,天,无-该字段已废弃 |  |
| - status | Integer |  |  | 商品投放状态: 0-不可投放, 1-可投放 |  |

## 请求样例

### 请求示例 (jsonc)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/product/batch/create/video/short/play' \
--header 'Access-Token: c94bb7778ad1614dd77a9c446d28c1bd' \
--header 'Content-Type: application/json' \
--data-raw '{
  "advertiser_id": 7869843,
  "short_play_product_edit_params": [
    {
      "library_id": 3589042,
      "outer_id": "77",
      "name": "MAPI测试77",
      "status": "1",
      "description": "短剧简介",
      "industry_id": 8,
      "sub_industry_id": "短剧",
      "first_category_id": 250806001,
      "first_category_name": "短剧",
      "second_category_id": 25080600101,
      "second_category_name": "都市",
      "third_category_id": 2508060010101,
      "third_category_name": "都市",
      "label": [
        "自定义标签1",
        "自定义标签2"
      ],
      "main_image_url": [
        "shangpinzhutu"
      ],
      "image_urls": [
        "shangpinfutu"
      ],
      "short_play_product_info": {
        "channel": "男频",
        "copyright": "版权方主体名称",
        "new_themes": [
          "脑洞",
          "甜宠",
          "逆袭"
        ],
        "new_plots": [
          "豪门赘婿",
          "职场社畜"
        ],
        "episodes": 22,
        "episode_duration": 44,
        "paid_episodes": 66,
        "unit_price": 55,
        "max_charge": 66,
        "min_charge": 77,
        "recommend_charge": 88,
        "is_online_earning": 1,
        "starring": [
          "starring1",
          "starring2"
        ],
        "discovery_mode": "付费",
        "member_type": "无"
      }
    }
  ]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 结果状态码 |  |
| message | String |  |  | 错误结果信息 |  |
| data | AdGatewayDpaProductBatchEditResponse |  |  | 商品批量编辑结果 |  |
| - product_edit_responses | ProductUpdateResponseSneak[] |  |  | 商品编辑返回结果集 |  |
| - library_id | Long |  |  | 商品库ID |  |
| - outer_id | String |  |  | 商品第三方ID |  |
| - success | Boolean |  |  | 编辑结果: true-成功, false-失败 |  |
| - error_msg | String |  |  | 失败错误信息 |  |
| - product_id | Long |  |  | 商品ID |  |

## 返回样例

### 返回示例 (jsonc)

```
{
  "code": 0,
  "data": {
    "product_edit_responses": [
      {
        "error_msg": null,
        "library_id": 3589042,
        "success": true,
        "product_id": 459877022,
        "outer_id": "77"
      }
    ]
  },
  "message": "OK",
  "request_id": "ENGAgIDwjuScChigESCc07zl-DIov7yl0gc="
}
```
