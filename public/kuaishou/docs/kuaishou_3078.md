---
title: CID暗投SDPA接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3078&menuId=3813
doc_id: kuaishou_3078
source_id: kuaishou_3078
---
# CID暗投SDPA接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3078 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-23T07:06:42.005Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/dpa/secret/cid/link |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主账号ID |  |
| unit_id | Long | 是 |  | 广告单元ID |  |
| product_name | String | 是 |  | 商品名称 |  |
| outer_id | String | 是 |  | 商品ID |  |
| title | String |  |  | 商品标题 |  |
| description | String |  |  | 商品描述 |  |
| main_image | String[] | 是 |  | 商品主图URL | 数组最大有效长度：1 |
| image_urls | String[] |  |  | 商品副图URLs |  |
| video_url | VideoInfo |  |  | 商品视频 |  |
| - url | String |  |  | 视频URL |  |
| en_brand | String |  |  | 商品英文品牌名称 |  |
| value | String |  |  | 商品原价（元） | 至多精确至“厘”（小数点后三位） |
| saving | String |  |  | 商品减价（元） | 至多精确至“厘”（小数点后三位） |
| discount | String |  |  | 商品折扣 | 0.001～0.999（至多精确至小数点后三位） |
| price | String | 是 |  | 商品现价（元） | 至多精确至“厘”（小数点后三位） |
| sales_promotion | String |  |  | 商品促销活动 |  |
| down_payment | String |  |  | 商品首付 |  |
| mortgage | String |  |  | 商品月付 |  |
| daily_mortgage | String |  |  | 商品日付 |  |
| address | String |  |  | 商品销售地址 |  |
| feature | String |  |  | 商品特色卖点 |  |
| age_v2 | String[] |  |  | 商品定向年龄段 | 1, "18-23"｜2, "24-30"｜3, "31-40"｜4, "41-49"｜5, "50+" |
| gender | Integer |  |  | 商品定向性别 | 0, "不限"｜1, "男"｜2, "女" |
| province_v2 | String[] |  |  | 商品定向省份 |  |
| city_v2 | String[] |  |  | 商品定向城市 |  |
| target_url | UrlParamSneak | 是 |  | 商品详情页链接 |  |
| - pc | String |  |  | PC端商品落地页URL | 需使用https协议 |
| - mobile | String |  |  | H5页面商品落地页URL | 需使用https协议 |
| - android_app | String |  |  | Android应用商品直达吊起链接 |  |
| - ios_app | String |  |  | IOS应用商品直达吊起链接 |  |
| - universal_link | String |  |  | IOS应用商品吊起ulink链接 |  |
| brand_url | UrlParamSneak |  |  | 商品品牌页链接 |  |
| - pc | String |  |  | PC端商品落地页URL | 需使用https协议 |
| - mobile | String |  |  | H5页面商品落地页URL | 需使用https协议 |
| - android_app | String |  |  | Android应用商品直达吊起链接 |  |
| - ios_app | String |  |  | IOS应用商品直达吊起链接 |  |
| - universal_link | String |  |  | IOS应用商品吊起ulink链接 |  |
| schedule_url | UrlParamSneak |  |  | 商品活动页链接 |  |
| - pc | String |  |  | PC端商品落地页URL | 需使用https协议 |
| - mobile | String |  |  | H5页面商品落地页URL | 需使用https协议 |
| - android_app | String |  |  | Android应用商品直达吊起链接 |  |
| - ios_app | String |  |  | IOS应用商品直达吊起链接 |  |
| - universal_link | String |  |  | IOS应用商品吊起ulink链接 |  |
| shop_keeper_url | UrlParamSneak |  |  | 商品店铺页链接 |  |
| - pc | String |  |  | PC端商品落地页URL | 需使用https协议 |
| - mobile | String |  |  | H5页面商品落地页URL | 需使用https协议 |
| - android_app | String |  |  | Android应用商品直达吊起链接 |  |
| - ios_app | String |  |  | IOS应用商品直达吊起链接 |  |
| - universal_link | String |  |  | IOS应用商品吊起ulink链接 |  |
| category_url | UrlParamSneak |  |  | 商品类目页链接 |  |
| - pc | String |  |  | PC端商品落地页URL | 需使用https协议 |
| - mobile | String |  |  | H5页面商品落地页URL | 需使用https协议 |
| - android_app | String |  |  | Android应用商品直达吊起链接 |  |
| - ios_app | String |  |  | IOS应用商品直达吊起链接 |  |
| - universal_link | String |  |  | IOS应用商品吊起ulink链接 |  |
| slogan | String |  |  | 商品广告语 |  |
| ecom_product_info | EcomProductInfoSneak957 | 是 |  | 其它商品信息 |  |
| - bought | Integer |  | 0 | 商品销售量 |  |
| - spu_id | String |  |  | 标准商品单位ID |  |
| - service_provider_name | String | 是 |  | 服务商名称 |  |
| - corporation_name | String | 是 |  | 商品所属营业执照 |  |
| - ecom_platfrom_from_service | String | 是 |  | 商品来源平台 |  |
| - shop_name_from_service | String | 是 |  | 三方平台店铺名称 |  |
| - shop_id_from_service | Long |  |  | 三方平台店铺id |  |
| - brand_id_from_service | Long |  |  | 三方平台商品品牌id |  |
| - brand_name_from_service | String |  |  | 商品品牌 |  |
| - first_product_category_id_from_service | Long |  |  | 三方平台商品一级类目id |  |
| - second_product_category_id_from_service | Long |  |  | 三方平台商品二级类目id |  |
| - third_product_category_id_from_service | Long |  |  | 三方平台商品三级类目id |  |
| - fourth_product_category_id_from_service | Long |  |  | 三方平台商品四级类目id |  |
| - first_product_category_from_service | String |  |  | 三方平台商品一级类目 |  |
| - second_product_category_from_service | String |  |  | 三方平台商品二级类目 |  |
| - third_product_category_from_service | String |  |  | 三方平台商品三级类目 |  |
| - fourth_product_category_from_service | String |  |  | 三方平台商品四级类目 |  |
| - product_label | String |  |  | 商品标签 |  |
| - comment_tags | String |  |  | 商品评价标签 |  |
| - service_tags | String |  |  | 商品服务标签 |  |
| - attribute_tags | String |  |  | 商品属性标签 |  |
| condition | String |  |  | 商品新旧情况 |  |
| comments | Integer |  |  | 商品评论数 |  |
| mark | String |  |  | 商品评分 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 请求响应结果码 |  |
| message | String |  |  | 请求响应结果信息 |  |
