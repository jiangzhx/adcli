---
title: 获取商品列表(部分信息)
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2732&menuId=3465
doc_id: kuaishou_2732
source_id: kuaishou_2732
---
# 获取商品列表(部分信息)

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2732 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2024-08-26T09:48:10.497Z |

## 概述

（该接口为旧版接口，不建议再调用）

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/product/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主ID |  |
| library_id | Long | 是 |  | 商品库ID |  |
| id_or_name | String |  |  | 商品第三方ID或名称 |  |
| categories | Long[] |  |  | 商品类目ID |  |
| outer_id | String |  |  | 广告主商品编号 |  |
| product_name | String |  |  | 商品名称 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | ProductPageInfo |  |  | 商品列表 |  |
| - details | DpaProductView2[] |  |  | 1 |  |
| - product_id | String |  |  | 商品ID |  |
| - product_name | String |  |  | 商品名称 |  |
| - product_title | String |  |  | 商品标题 |  |
| - outer_id | String |  |  | 广告主商品编号 |  |
| - image | String |  |  | 商品主图 |  |
| - supply_image | String[] |  |  | 商品附图 |  |
| - product_price | Double |  |  | 价格 |  |
| - value | Double |  |  | 原价 |  |
| - discount | Double |  |  | 折扣 |  |
| code | Integer |  |  | code |  |
| message | String |  |  | message |  |

## 原始内容

```
获取商品列表(部分信息) /rest/openapi/gw/dsp/v1/dpa/product/list advertiser_id Long 广告主ID library_id Long 商品库ID id_or_name String 商品第三方ID或名称 categories Long[] 商品类目ID outer_id String 商品第三方ID product_name String 商品名称 data ProductPageInfo 商品列表 details DpaProductView2[] 1 product_id String 商品ID product_name String 商品名称 product_title String 商品标题 outer_id String 外部商品ID image String 商品主图 supply_image String[] 商品附图 product_price Double 价格 value Double 原价 discount Double 折扣 code Integer code message String message
```
