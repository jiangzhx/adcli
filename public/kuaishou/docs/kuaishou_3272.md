---
title: 更新商品（书库-网络小说）
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3272&menuId=4049
doc_id: kuaishou_3272
source_id: kuaishou_3272
---
# 更新商品（书库-网络小说）

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3272 |
| documentType | 2 |
| version | 0.0.4 |
| bizName | 效果广告 |
| createTime | 2025-10-20T13:31:05.698Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/product/batch/update/stackroom/fiction |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 投放账户ID |  |
| fiction_product_edit_params | AdGatewayDpaProductBatchCreateParamForFiction[] | 是 |  | 小说商品批量更新请求参数 |  |
| - status | Integer |  |  | 商品投放状态: 0-不可投放, 1-可投放，不填默认取0 |  |
| - industry_id | Integer | 是 | 5 | 书库-网络小说，industry_id（商品行业ID）=5 |  |
| - sub_industry_id | String | 是 | "1" | 书库-网络小说，sub_industry_id="1" |  |
| - library_id | Long | 是 |  | 商品库ID,创建商品必须填写商品所在商品库 |  |
| - outer_id | String |  |  | 商品第三方ID，作为某个商品库下的商品唯一ID |  |
| - name | String | 是 |  | 小说名称 |  |
| - description | String | 是 |  | 小说简介 |  |
| - label | String[] |  |  | 自定义标签 |  |
| - main_image_url | String[] | 是 |  | 商品主图 |  |
| - image_urls | String[] |  |  | 商品副图 |  |
| - first_category_id | Long | 是 |  | 商品一级类目ID，详见https://docs.qingque.cn/d/home/eZQBBL_yXk5R8lfA5f_ymPX3X?identityId=1oE3PGl2psq#section=h.7z4cu1t8wzp6 |  |
| - first_category | String | 是 |  | 商品一级类目名称 |  |
| - second_category_id | Long | 是 |  | 商品二级类目ID |  |
| - second_category | String | 是 |  | 商品二级类目名称 |  |
| - third_category_id | Long | 是 |  | 商品三级类目ID |  |
| - third_category | String | 是 |  | 商品三级类目名称 |  |
| - fiction_product_info | FictionProductInfoSneak | 是 |  | 小说商品批量创建请求参数 |  |
| - book_id | String |  |  | 书籍id |  |
| - content | String | 是 |  | 章节内容 |  |
| - unit_price | Double |  | 0 | 单章价格，变现模式为付费时必填 |  |
| - max_charge | Double |  | 0 | 最高充值档位，变现模式为付费时必填 |  |
| - min_charge | Double |  | 0 | 最低充值档位，变现模式为付费时必填 |  |
| - chapter_count | Integer |  | 0 | 章节数量 |  |
| - author | String | 是 |  | 作者 |  |
| - extra_tags | String |  |  | 标签 |  |
| - theme | Integer |  | 0 | 主题(详见: https://docs.qingque.cn/s/home/eZQDJOM3GV-qQ4vNsEpaQ0qy2?identityId=F0DVUl94Gc) |  |
| - channel | Integer | 是 | 0 | 男女频: 171101-男频, 171102-女频, 171103-不限 |  |
| - plot | Integer |  | 0 | 情节(详见: https://docs.qingque.cn/s/home/eZQDJOM3GV-qQ4vNsEpaQ0qy2?identityId=F0DVUl94Gc) |  |
| - fiction_style | Integer |  | 0 | 风格: 171001-热血, 171002-恐怖, 171003-温馨, 171004-搞笑, 171005-其他 |  |
| - pay_status | Integer | 是 | 0 | 付费类型: 1-付费, 2-免费 |  |
| - long_and_short_stories | String | 是 |  | 书籍长短篇 |  |
| - book_city | String | 是 |  | 所属书城 |  |
| - start_paid_chapter | Integer | 是 |  | 起始解锁章节 |  |

## 请求样例

### 请求示例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/product/batch/update/stackroom/fiction' \
--header 'Content-Type: application/json' \
--header 'access-token: e4c43a4c22d45cf49d788d6e247ee19d' \
--data '{
  "advertiser_id": 7869843,
  "fiction_product_edit_params": [
    {
      "library_id": 2988286,
      "industry_id": 5,
      "outer_id": 806,
      "first_category_id": 250501000,
      "second_category_id": 25050100003,
      "third_category_id": 2505010000302,
      "first_category_name": "小说",
      "second_category_name": "历史军事",
      "third_category_name": "历史传记",
      "sub_industry_id": "1",
      "name": "线上加白小说新mapi测试002编辑",
      "main_image_url": [
        "https://kcdn.staging.kuaishou.com/bs2/ad-dpa/YWQtZHBhOmt1YWlzaG91X2FkX2RzcF9kcGE6OTAwMDE1MzY0Ok1FUkNIQU5UOltCQDEwODE5MmRjOjI4MTcyMDk4MzY0.png"
      ],
      "description": "测试小说描述编辑",
      "label": [
        "标签A",
        "标签B-编辑"
      ],
      "status":"1",
      "fiction_product_info": {
        "channel": "171102",
        "unit_price": 1.666,
        "min_charge": 10.00,
        "max_charge": 1000,
        "author": "作者名称编辑",
        "book_city": "七猫",
        "chapter_count": 1000,
        "content": "章节内容编辑",
        "long_and_short_stories": "短篇书",
        "pay_status": "1",
        "start_paid_chapter": 5,
        "theme": "9",
        "plot": "9"
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
                "library_id": 2988286,
                "success": true,
                "product_id": 619006010,
                "outer_id": "806"
            }
        ]
    },
    "message": "OK",
    "request_id": "ELaAgICAzeCZChjEByDRsq7niTMo4ZnUmAs="
}
```

## 原始内容

```
更新商品（书库-网络小说） /rest/openapi/gw/dsp/v1/dpa/product/batch/update/stackroom/fiction curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/product/batch/update/stackroom/fiction' \ --header 'Content-Type: application/json' \ --header 'access-token: e4c43a4c22d45cf49d788d6e247ee19d' \ --data '{ "advertiser_id": 7869843, "fiction_product_edit_params": [ { "library_id": 2988286, "industry_id": 5, "outer_id": 806, "first_category_id": 250501000, "second_category_id": 25050100003, "third_category_id": 2505010000302, "first_category_name": "小说", "second_category_name": "历史军事", "third_category_name": "历史传记", "sub_industry_id": "1", "name": "线上加白小说新mapi测试002编辑", "main_image_url": [ "https://kcdn.staging.kuaishou.com/bs2/ad-dpa/YWQtZHBhOmt1YWlzaG91X2FkX2RzcF9kcGE6OTAwMDE1MzY0Ok1FUkNIQU5UOltCQDEwODE5MmRjOjI4MTcyMDk4MzY0.png" ], "description": "测试小说描述编辑", "label": [ "标签A", "标签B-编辑" ], "status":"1", "fiction_product_info": { "channel": "171102", "unit_price": 1.666, "min_charge": 10.00, "max_charge": 1000, "author": "作者名称编辑", "book_city": "七猫", "chapter_count": 1000, "content": "章节内容编辑", "long_and_short_stories": "短篇书", "pay_status": "1", "start_paid_chapter": 5, "theme": "9", "plot": "9" } } ] }' { "code": 0, "data": { "product_edit_responses": [ { "error_msg": null, "library_id": 2988286, "success": true, "product_id": 619006010, "outer_id": "806" } ] }, "message": "OK", "request_id": "ELaAgICAzeCZChjEByDRsq7niTMo4ZnUmAs=" } advertiser_id Long 投放账户ID fiction_product_edit_params AdGatewayDpaProductBatchCreateParamForFiction[] 小说商品批量更新请求参数 status Integer 商品投放状态: 0-不可投放, 1-可投放，不填默认取0 industry_id Integer 书库-网络小说，industry_id（商品行业ID）=5 sub_industry_id String 书库-网络小说，sub_industry_id="1" library_id Long 商品库ID,创建商品必须填写商品所在商品库 outer_id String 商品第三方ID，作为某个商品库下的商品唯一ID name String 小说名称 description String 小说简介 label String[] 自定义标签 main_image_url String[] 商品主图 image_urls String[] 商品副图 first_category_id Long 商品一级类目ID，详见https://docs.qingque.cn/d/home/eZQBBL_yXk5R8lfA5f_ymPX3X?identityId=1oE3PGl2psq#section=h.7z4cu1t8wzp6 first_category String 商品一级类目名称 second_category_id Long 商品二级类目ID second_category String 商品二级类目名称 third_category_id Long 商品三级类目ID third_category String 商品三级类目名称 fiction_product_info FictionProductInfoSneak 小说商品批量创建请求参数 content String 章节内容 unit_price Double 单章价格，变现模式为付费时必填 max_charge Double 最高充值档位，变现模式为付费时必填 min_charge Double 最低充值档位，变现模式为付费时必填 chapter_count Integer 章节数量 author String 作者 extra_tags String 标签 theme Integer 主题(详见: https://docs.qingque.cn/s/home/eZQDJOM3GV-qQ4vNsEpaQ0qy2?identityId=F0DVUl94Gc) channel Integer 男女频: 171101-男频, 171102-女频, 171103-不限 plot Integer 情节(详见: https://docs.qingque.cn/s/home/eZQDJOM3GV-qQ4vNsEpaQ0qy2?identityId=F0DVUl94Gc) fiction_style Integer 风格: 171001-热血, 171002-恐怖, 171003-温馨, 171004-搞笑, 171005-其他 pay_status Integer 付费类型: 1-付费, 2-免费 long_and_short_stories String 书籍长短篇 book_city String 所属书城 start_paid_chapter Integer 起始解锁章节 code Integer 结果状态码 message String 错误结果信息 data AdGatewayDpaProductBatchEditResponse 商品批量编辑结果 product_edit_responses ProductUpdateResponseSneak[] 商品编辑返回结果集 library_id Long 商品库ID outer_id String 商品第三方ID success Boolean 编辑结果: true-成功, false-失败 error_msg String 失败错误信息 product_id Long 商品ID
```
