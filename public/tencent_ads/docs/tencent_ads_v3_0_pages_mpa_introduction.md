---
title: 多商品广告（MPA）
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/mpa_introduction
doc_id: tencent_ads_v3_0_pages_mpa_introduction
source_id: tencent_ads_v3_0_pages_mpa_introduction
---
# 多商品广告（MPA）

# 1. 多商品广告介绍

多商品广告（Multiple Proudct Ads，以下简称 MPA），结合腾讯社交大数据和广告主一方数据，打造多维度商品推荐引擎，实现根据用户特性、行为、兴趣推荐商品，促进用户点击并转化。

# 2. MKT API3.0 接入说明

投放 MPA 广告基本基本流程与其他广告形式相近，涉及调用推广管理、商品库、创意工具模块的接口能力。投放流程分为两部分：

投放前端准备：获取投放 MPA 所需的商品库、商品模版、通配符、词包的相关资产，需要在投放广告前准备完成，再使用商品库接口以及创意相关辅助功能获取信息供创建广告使用；

投放 MPA 广告：与投放其他广告形式相近，是用广告管理相关接口创建/管理 MPA 广告。

以下为具体接口/字段的使用说明。

## Adgroup 层级

### 1. 营销内容

使用 MPA，需要选择“商品集合”作为推广产品，并填充相应的商品资产信息，对应 adgroups/add 接口字段及取值：

```
marketing_asset_outer_spec: {
	marketing_target_type: "MARKETING_TARGET_TYPE_COMMODITY_SET",
	marketing_asset_outer_id: "商品库 id",
	marketing_asset_outer_sub_id: "商品集合 id",
}
```

其中商品库 id 及商品集合 id 是在商品中台创建的 商品库 及 商品集合（也可在 ADQ 投放端快速创建）资产对应的 id，可通过商品库的 MKT API 接口获取：

获取商品库：[https://developers.e.qq.com/v3.0/docs/api/product_catalogs/get](https://developers.e.qq.com/v3.0/docs/api/product_catalogs/get)

获取商品集合（系列）：[https://developers.e.qq.com/v3.0/docs/api/product_series/get](https://developers.e.qq.com/v3.0/docs/api/product_series/get)

### 2、推荐方式

使用 MPA，需要选择推荐方式，对应 adgroups/add 接口字段及取值：

```
mpa_spec: {
	recommend_method_ids: [10], // 只能有一个值
}
```

推荐方式可选值：

智能推荐：10

人群地理位置推荐：3（需申请权限）

RTA 推荐：9（需申请权限）

其他模块如定向、排期、出价等与普通广告无差异。

## 创意层级

### 1、创意素材模版

如使用 MPA 广告，可使用图片、视频模板，在线实时渲染，生成与对应曝光商品匹配的素材。 对应接口 dynamic_creatives/add，在普通广告需要传图片 id 或 视频 id 的字段，改成用模板生成的 图片/视频 id，如单图字段 image：

```
image: {
	image_id: "123456",
}
```

其中 "123456" 是通过图片模板生成的图片 id，具体步骤： （1）获取动态商品图片模板：[https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_image_templates/get](https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_image_templates/get) （2）根据模板 id 创建用于广告投放的动态广告图片：[https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_images/add](https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_images/add)

完成以上步骤，即可得到用于创建广告的、带模板信息的图片 id。视频模板的使用同理，对应接口：

（1）获取动态商品视频模板：[https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_video_templates/get](https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_video_templates/get) （2）创建用于广告投放的动态广告视频：[https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_video/add](https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_video/add)

### 2、动态词包

创意素材的文案，可以使用商品的动态词包。参考[动态词包相关介绍文章](https://developers.e.qq.com/v3.0/pages/mpa_ad_param)。

### 3、落地页通配符

使用 MPA 广告，可使用落地页通配符，在线实时完成与曝光商品匹配的落地页地址跳转。

对应接口 dynamic_creatives/add，相关字段：

目前支持使用落地页通配符的落地页类型有：自定义落地页、简版原生页、微信小程序

比如微信小程序落地页，使用 wechat_mini_program_spec.mpa_mini_program_wildcard_url 传入落地页通配符即可（注意，如使用通配符，则不允许再使用其他落地页字段）

支持带通配符的落地页类型、字段名称、spec 请求示例如下：

| 落地页类型 | 带通配符落地页字段名称 | 落地页 spec 请求示例 |
| --- | --- | --- |
| 自定义落地页 | mpa_h5_wildcard_url | "main_jump_info": [{ "value": { "page_spec": { "h5_spec": { "mpa_h5_wildcard_url": "%%target_url_mobile%%" } }, "page_type": "PAGE_TYPE_H5" } }] |
| 微信小程序 | mpa_mini_program_wildcard_url | "main_jump_info": [ { "value": { "page_spec": { "wechat_mini_program_spec": { "mpa_mini_program_wildcard_url": "%%target_url_mini_program%%" } }, "page_type": "PAGE_TYPE_WECHAT_MINI_PROGRAM" } }] |
| 简版原生页 | mpa_simple_canvas_webview_wildcard_url | "main_jump_info": [{ "value": { "page_spec": { "simple_wechat_canvas_spec": { "simple_canvas_sub_type":"SIMPLE_CANVAS_SUB_TYPE_URL", "simple_canvas_webview_type":"SIMPLE_CANVAS_WEBVIEW_TYPE_UNKNOWN", "simple_canvas_share_title":"title", "simple_canvas_share_desc":"desc", "mpa_simple_canvas_webview_wildcard_url": ""%%target_url_mobile%%"" } }, "page_type": "PAGE_TYPE_WECHAT_SIMPLE_CANVAS" } }] |

如果不想使用落地页通配符（即整个落地页跳转地址替换，也可使用商品通配符，只替换落地页链接的一部分），如在自定义落地页中使用商品 id 通配符 (%%product_id1%%)：

```
// 自定义落地页
"main_jump_info": [
	{
		"value": {
			"page_spec": {
				"h5_spec": {
					page_url: "https://somedomain.com/page?productid=%%product_id1%%",
				}
			},
			"page_type": "PAGE_TYPE_H5"
		}
	}
]
```

商品 id 通配符可用在所有落地页类型（亦可用在以下的应用直达）。

### 4、应用直达通配符

| 应用直达 | 安卓：mpa_android_deep_link_wildcard_url IOS：mpa_ios_deep_link_wildcard_url | "main_jump_info": [{ "value": { "page_spec": { "app_deep_link_spec": { "mpa_android_deep_link_wildcard_url":"%%product_id1%%", "mpa_ios_deep_link_wildcard_url":"%%product_id1%%" } }, "page_type": "PAGE_TYPE_APP_DEEP_LINK" } }] |
| --- | --- | --- |
| 通用链接 | mpa_universal_link_wildcard_url | "main_jump_info": [{ "value": { "page_spec": { "app_deep_link_spec": { "mpa_universal_link_wildcard_url":"%%product_id1%%" } }, "page_type": "PAGE_TYPE_APP_DEEP_LINK" } }] |
