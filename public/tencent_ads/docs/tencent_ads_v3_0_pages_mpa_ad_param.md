---
title: 多商品广告动态商品词包
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/mpa_ad_param
doc_id: tencent_ads_v3_0_pages_mpa_ad_param
source_id: tencent_ads_v3_0_pages_mpa_ad_param
---
# 多商品广告动态商品词包

## 什么是动态词包

简单来讲，对于同一条广告，动态词包可以根据不同广告受众展示不同词语。动态词包基于腾讯大数据的精准人群画像，将广告受众所处情境进行立体分析，实时动态变化广告文案中的词语，使得广告创意与用户更加匹配。

### 动态词包的应用场景

目前支持商品名称（product.name）、商品简称（product.product_short_name）、商品日常售价（product.price）、商品促销价格（product.sale_price）广告语（product.slogan）动态词包，可以满足来自各类的广告投放需求，实现通配符的实时替换。对于不同商品库，针对商品库里已上传的字段去添加动态商品词包，需要添加动态商品词包请提供商品库 id 并联系相应行业的运营同学。

| 动态词包 | 通配符 | 词包长度 |
| --- | --- | --- |
| 商品名称 | {{product.name}} | 8 |
| 商品简称 | {{product.product_short_name}} | 10 |
| 商品日常售价 | {{product.price}} | 4 |
| 商品促销价格 | {{product.sale_price}} | 4 |
| 广告语 | {{product.slogan}} | 10 |

## 动态词包使用限制

### 创意元素限制

目前仅以下两个创意元素支持动态词包通配符：

| 创意元素 | 描述 |
| --- | --- |
| title | 广告文案 |
| description | 广告描述 |

备注：其他创意元素字段中若传入了动态词包通配符，该通配符会被当作普通文本处理。

### 广告版位和创意形式限制

| 版位 | 支持的词包 |
| --- | --- |
| 微信视频号 | 视频文案：product.name 卡片上文：product.product_short_name 卡片下文：slogan |
| 微信朋友圈 | 不支持 |
| 微信公众号与小程序 | 不支持 |
| 腾讯平台与内容媒体 | product.name product.product_short_name product.price product.sale_price product.slogan |
| 优量汇 | product.name product.product_short_name product.price product.sale_price product.slogan |

其他版位暂不支持。
