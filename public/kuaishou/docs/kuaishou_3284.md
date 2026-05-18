---
title: 更新商品（医疗库）
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3284&menuId=4061
doc_id: kuaishou_3284
source_id: kuaishou_3284
---
# 更新商品（医疗库）

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3284 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2025-09-04T11:06:29.616Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/product/batch/update/pharmaceutical |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 投放账号ID |  |
| pharmaceutical_product_edit_params | AdGatewayDpaProductCreateParamForPharmaceutical[] | 是 |  | 医疗库商品批量更新请求参数 |  |
| - feature | String |  |  | 商品特色信息 |  |
| - status | Integer |  |  | 商品投放状态: 0-不可投放, 1-可投放 |  |
| - industry_id | Integer | 是 | 9 | 医疗商品库 |  |
| - sub_industry_id | String | 是 | "消费医疗" | "消费医疗"或者"药品/器械" |  |
| - library_id | Long | 是 |  | 商品库ID,创建商品必须填写商品所在商品库 |  |
| - outer_id | String | 是 |  | 商品第三方ID，作为某个商品库下的商品唯一ID |  |
| - name | String | 是 |  | 漫剧名称 |  |
| - main_image_url | String[] |  |  | 商品主图 |  |
| - first_category_id | Long | 是 |  | 商品一级类目ID |  |
| - first_category | String | 是 |  | 商品一级类目名称 |  |
| - second_category_id | Long | 是 |  | 商品二级类目ID |  |
| - second_category | String | 是 |  | 商品二级类目名称 |  |
| - third_category_id | Long | 是 |  | 商品三级类目ID |  |
| - third_category | String | 是 |  | 商品三级类目名称 |  |
| - pharmaceutical_product_info | PharmaceuticalProductInfoSneakV2 | 是 |  | 医药库商品批量创建请求参数 |  |
| - product_indications | String |  |  | 商品适应症 |  |
| - adverse_reaction | String |  |  | 禁忌、不良反应 |  |
| - medical_institution_name | String |  |  | 医疗机构名称 |  |

## 请求样例

### 请求示例 (shell)

```
curl --location 'https://star-gateway.staging.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/product/batch/create/pharmaceutical' \
--header 'Content-Type: application/json' \
--data '{
  "advertiser_id": 900015435,
  "pharmaceutical_product_edit_params": [
    {
      "library_id": 202112411098,
      "industry_id": 9,
      "status": 1,
      "outer_id": 700,
      "first_category_id": 350003,
      "first_category": "医疗服务",
      "second_category_id": 25090100001,
      "second_category": "口腔科",
      "third_category_id": "2509010000100",
      "third_category": "牙齿美容",
      "sub_industry_id": "消费医疗",
      "feature": "特色卖点",
      "name": "mapi测试医疗商品07",
      "main_image_url": [
        "https://kcdn-w1.staging.kuaishou.com/bs2/ad-dpa/YWQtZHBhOmt1YWlzaG91X2FkX2RzcF9kcGE6OTAwMDE1NDM1Ok1FUkNIQU5UOltCQDFlOGMzZTZlOjI4NzEwNzU3NDM1.jpeg"
      ],
      "pharmaceutical_product_info": {
        "product_indications": "洗牙洁牙,烤瓷牙",
        "adverse_reaction": "",
        "medical_institution_name": "医疗机构名称"
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
                "library_id": 202112411098,
                "success": true,
                "product_id": 9849013,
                "outer_id": "800"
            }
        ]
    },
    "message": "OK",
    "request_id": "ENOAgIDAxJ2OrAEYywcg073eoJEzKKC1sNUN"
}
```

## 原始内容

```
更新商品（医疗库） /rest/openapi/gw/dsp/v1/dpa/product/batch/update/pharmaceutical curl --location 'https://star-gateway.staging.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/product/batch/create/pharmaceutical' \ --header 'Content-Type: application/json' \ --data '{ "advertiser_id": 900015435, "pharmaceutical_product_edit_params": [ { "library_id": 202112411098, "industry_id": 9, "status": 1, "outer_id": 700, "first_category_id": 350003, "first_category": "医疗服务", "second_category_id": 25090100001, "second_category": "口腔科", "third_category_id": "2509010000100", "third_category": "牙齿美容", "sub_industry_id": "消费医疗", "feature": "特色卖点", "name": "mapi测试医疗商品07", "main_image_url": [ "https://kcdn-w1.staging.kuaishou.com/bs2/ad-dpa/YWQtZHBhOmt1YWlzaG91X2FkX2RzcF9kcGE6OTAwMDE1NDM1Ok1FUkNIQU5UOltCQDFlOGMzZTZlOjI4NzEwNzU3NDM1.jpeg" ], "pharmaceutical_product_info": { "product_indications": "洗牙洁牙,烤瓷牙", "adverse_reaction": "", "medical_institution_name": "医疗机构名称" } } ] }' { "code": 0, "data": { "product_edit_responses": [ { "error_msg": null, "library_id": 202112411098, "success": true, "product_id": 9849013, "outer_id": "800" } ] }, "message": "OK", "request_id": "ENOAgIDAxJ2OrAEYywcg073eoJEzKKC1sNUN" } advertiser_id Long 投放账号ID pharmaceutical_product_edit_params AdGatewayDpaProductCreateParamForPharmaceutical[] 医疗库商品批量更新请求参数 feature String 商品特色信息 status Integer 商品投放状态: 0-不可投放, 1-可投放 industry_id Integer 医疗商品库 sub_industry_id String "消费医疗"或者"药品/器械" library_id Long 商品库ID,创建商品必须填写商品所在商品库 outer_id String 商品第三方ID，作为某个商品库下的商品唯一ID name String 漫剧名称 main_image_url String[] 商品主图 first_category_id Long 商品一级类目ID first_category String 商品一级类目名称 second_category_id Long 商品二级类目ID second_category String 商品二级类目名称 third_category_id Long 商品三级类目ID third_category String 商品三级类目名称 pharmaceutical_product_info PharmaceuticalProductInfoSneakV2 医药库商品批量创建请求参数 product_indications String 商品适应症 adverse_reaction String 禁忌、不良反应 medical_institution_name String 医疗机构名称 code Integer 结果状态码 message String 错误结果信息 data AdGatewayDpaProductBatchEditResponse 商品批量编辑结果 product_edit_responses ProductUpdateResponseSneak[] 商品编辑返回结果集 library_id Long 商品库ID outer_id String 商品第三方ID success Boolean 编辑结果: true-成功, false-失败 error_msg String 失败错误信息 product_id Long 商品ID
```
