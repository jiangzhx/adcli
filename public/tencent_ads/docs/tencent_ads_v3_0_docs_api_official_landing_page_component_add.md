---
title: 官方落地页-基于组件创建 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/official_landing_page_component/add
doc_id: tencent_ads_v3_0_docs_api_official_landing_page_component_add
source_id: tencent_ads_v3_0_docs_api_official_landing_page_component_add
---
# 官方落地页-基于组件创建 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | official_landing_page_component/add |
| 请求方法 | POST |
| Content-Type | application/json |

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
| page_config* | struct | 落地页配置结构 |
| page_name* | string | 落地页名称-用于编辑器管理，不支持 emoji 字段长度最小 1 字节，长度最大 20 字节 |
| page_title* | string | 落地页标题-用于页面展示，不支持 emoji 字段长度最小 1 字节，长度最大 20 字节 |
| ios_app_id | string | ios 应用 id 字段长度最小 1 字节，长度最大 64 字节 |
| android_app_id | string | android 应用 id 字段长度最小 1 字节，长度最大 64 字节 |
| enable_android_market | boolean | 打开安卓 APP 跳转厂商功能，需要与 android_app_id 同时使用,默认为 false 可选值：{ true, false } 默认值：false |
| share_title | string | 分享标题，不支持 emoji，需要与 share_description，share_thumburl_material_id 同时使用 字段长度最小 1 字节，长度最大 14 字节 |
| share_description | string | 分享描述，不支持 emoji，需要与 share_title，share_thumburl_material_id 同时使用 字段长度最小 1 字节，长度最大 20 字节 |
| share_thumburl_material_id | string | 分享缩略图素材 id，需要与 share_title，share_description 同时使用 图片尺寸：250x250px 图片格式：大小要求在 300KB 以内，仅支持 jpg 和 PNG 或 JPG 格式 注意：包含顶部外显组件时，若不传入该值，则落地页分享时，缩略图使用广告外层素材图片作为分享图 字段长度最小 1 字节，长度最大 20 字节 |
| bg_color | string | 颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#FFFFFF |
| page_elements* | struct[] | 官方落地页组件列表，支持的组件参考示例 数组最小长度 0，最大长度 10 |
| element_type | string | 官方落地页组件类型，HeadOutsideMaterial:顶部外显素材组件, HeadVideo:顶部视频组件, HeadImage:顶部图片组件, Head180PanoramaImage:顶部 180 度全景图组件, HeadCarousel:顶部轮播图组件, HeadText:顶部文本组件, BlockVideo:视频组件, BlockImage:图片组件, BlockCarousel:轮播图组件, BlockText:简单文本组件, BlockDivider:分割线组件, BlockCustomPage:内嵌网页组件, BlockButton:按钮组件, FixedButton:底部悬浮按钮组件, RightFixedButton:侧边悬浮按钮组件, BlockShelf:图文复合组件, BlockShelfGroup:双图文复合组件 |
| head_outside_material_config | struct | 顶部外显组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| head_video_config | struct | 顶部视频组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| material_id | string | 视频素材 id，视频大小：不超过 100MB 视频尺寸：宽度 750px，高度≤ 1536px 视频长度：小于 90 秒 可通过 [\[videos 模块\]](https://developers.e.qq.com/docs/api/business_assets/video/videos_add) 上传视频后获得 字段长度最小 1 字节，长度最大 64 字节 |
| head_image_config | struct | 顶部图片组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| material_id | string | 图片素材 id，图片格式：PNG 或 JPG 格式 图片大小：不超过 1MB 图片尺寸：宽度大于 1px, 高度不小于 200px、不大于 1980px 通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得 字段长度最小 1 字节，长度最大 64 字节 |
| head_180_panorama_image_config | struct | 顶部 180 度全景图组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| material_id | string | 图片素材 id，图片格式：PNG 或 JPG 格式 图片大小：不超过 1MB 图片尺寸：宽度为 4096px，高度为 2048px 通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得 字段长度最小 1 字节，长度最大 64 字节 |
| head_carousel_config | struct | 顶部轮播图组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| material_id_list | string[] | 图片素材 id 列表，每个素材的尺寸需相同 数组最小长度 2，最大长度 6 |
| type | string | 轮播样式，full: 平滑滚动;center: 居中轮播 默认值：full |
| head_text_config | struct | 顶部文本组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| title | struct | 标题 |
| content | string | 文案内容，不支持 emoji 字段长度最小 1 字节，长度最大 14 字节 |
| color | string | 颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#000000 |
| detail | struct | 内容 |
| content | string | 文案内容，不支持 emoji 字段长度最小 1 字节，长度最大 14 字节 |
| color | string | 颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#000000 |
| block_video_config | struct | 普通视频组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| material_id | string | 视频素材 id，视频大小：不超过 100MB 视频尺寸：宽度 750px，高度≤ 1536px 视频长度：小于 90 秒 可通过 [\[videos 模块\]](https://developers.e.qq.com/docs/api/business_assets/video/videos_add) 上传视频后获得 字段长度最小 1 字节，长度最大 64 字节 |
| block_image_config | struct | 图片组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| material_id | string | 图片素材 id，图片格式：PNG 或 JPG 格式 图片大小：不超过 1MB 图片尺寸：宽度为 750px，高度不大于 1336px 通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得 字段长度最小 1 字节，长度最大 64 字节 |
| areas | struct[] | 热区列表，热区数量，最少 0 个，最多 3 个；热区累积面积不得超过图片面积的 30% 数组最小长度 0，最大长度 3 |
| left | number | 热区左上顶点距离图片左侧边缘的百分比，基于当前图片尺寸计算 最小值 0，最大值 100 |
| top | number | 热区左上顶点距离图片顶部的百分比，基于当前图片尺寸计算 最小值 0，最大值 100 |
| width | number | 热区宽度占图片宽度的百分比，基于当前图片尺寸计算 最小值 0，最大值 100 |
| height | number | 热区高度占图片高度的百分比，基于当前图片尺寸计算 最小值 0，最大值 100 |
| convert_unknown | struct | 转化-暂不支持，同一层级里仅可配置一种转化 |
| convert_type* | string | unknown |
| convert_download | struct | 转化-下载 APP 配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 download |
| deeplink_url_ios | string | ios 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| deeplink_url_android | string | android 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_link | struct | 转化-跳转链接配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 link |
| src* | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| app_id_ios | string | ios 直达链接跳转的 appId，不填表示不开启 字段长度最小 1 字节，长度最大 64 字节 |
| deeplink_url_ios | string | ios 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| app_id_android | string | android 直达链接跳转的 appId，不填表示不开启 字段长度最小 1 字节，长度最大 64 字节 |
| deeplink_url_android | string | android 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_weapp | struct | 转化-打开小程序配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 weapp |
| weapp_id* | string | 原始 id，gh_xxxx 字段长度最小 1 字节，长度最大 128 字节 |
| weapp_path* | string | 小程序路径 字段长度最小 1 字节，长度最大 1024 字节 |
| backup_link | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_gh | struct | 转化-关注公众号配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 gh |
| appid* | string | wxid，以 wx 开头的字符串,如 wxffffffffffff 字段长度最小 1 字节，长度最大 128 字节 |
| one_click | boolean | 是否开启一键关注，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| direct_focus | boolean | 是否开启立即关注，true: 开启, false: 关闭。 仅图文复合系列组件可以使用，开启后，用户点击关注组件，可在当前页面快捷关注，无需进入二次确认页；开启后，组件内容使用公众号信息，「按钮文本」内容固定为【关注公众号】 可选值：{ true, false } 默认值：false |
| convert_followVideo | struct | 转化-关注视频号配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 followVideo |
| nick_name* | string | 视频号名称 字段长度最小 1 字节，长度最大 256 字节 |
| one_click | boolean | 是否开启一键关注，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| margin_top | number | 与上一个组件的距离 最小值 0，最大值 50 |
| margin_bottom | number | 与下一个组件的距离 最小值 0，最大值 50 |
| block_carousel_config | struct | 轮播图组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| material_id_list | string[] | 图片素材 id 列表，每个素材的尺寸需相同 数组最小长度 2，最大长度 6 |
| type | string | 轮播样式，full: 平滑滚动;center: 居中轮播 默认值：full |
| areas | struct[] | 热区列表，热区数量，最少 0 个，最多 3 个；热区累积面积不得超过图片面积的 30% 数组最小长度 0，最大长度 3 |
| left | number | 热区左上顶点距离图片左侧边缘的百分比，基于当前图片尺寸计算 最小值 0，最大值 100 |
| top | number | 热区左上顶点距离图片顶部的百分比，基于当前图片尺寸计算 最小值 0，最大值 100 |
| width | number | 热区宽度占图片宽度的百分比，基于当前图片尺寸计算 最小值 0，最大值 100 |
| height | number | 热区高度占图片高度的百分比，基于当前图片尺寸计算 最小值 0，最大值 100 |
| convert_unknown | struct | 转化-暂不支持，同一层级里仅可配置一种转化 |
| convert_type* | string | unknown |
| convert_download | struct | 转化-下载 APP 配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 download |
| deeplink_url_ios | string | ios 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| deeplink_url_android | string | android 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_link | struct | 转化-跳转链接配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 link |
| src* | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| app_id_ios | string | ios 直达链接跳转的 appId，不填表示不开启 字段长度最小 1 字节，长度最大 64 字节 |
| deeplink_url_ios | string | ios 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| app_id_android | string | android 直达链接跳转的 appId，不填表示不开启 字段长度最小 1 字节，长度最大 64 字节 |
| deeplink_url_android | string | android 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_weapp | struct | 转化-打开小程序配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 weapp |
| weapp_id* | string | 原始 id，gh_xxxx 字段长度最小 1 字节，长度最大 128 字节 |
| weapp_path* | string | 小程序路径 字段长度最小 1 字节，长度最大 1024 字节 |
| backup_link | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_gh | struct | 转化-关注公众号配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 gh |
| appid* | string | wxid，以 wx 开头的字符串,如 wxffffffffffff 字段长度最小 1 字节，长度最大 128 字节 |
| one_click | boolean | 是否开启一键关注，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| direct_focus | boolean | 是否开启立即关注，true: 开启, false: 关闭。 仅图文复合系列组件可以使用，开启后，用户点击关注组件，可在当前页面快捷关注，无需进入二次确认页；开启后，组件内容使用公众号信息，「按钮文本」内容固定为【关注公众号】 可选值：{ true, false } 默认值：false |
| convert_followVideo | struct | 转化-关注视频号配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 followVideo |
| nick_name* | string | 视频号名称 字段长度最小 1 字节，长度最大 256 字节 |
| one_click | boolean | 是否开启一键关注，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| margin_top | number | 与上一个组件的距离 最小值 0，最大值 50 |
| margin_bottom | number | 与下一个组件的距离 最小值 0，最大值 50 |
| block_text_config | struct | 简单文本组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| content | string | 文本文案 字段长度最小 1 字节，长度最大 10000 字节 |
| color | string | 字体颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#000000 |
| font_size | string | 字体大小,可选值：12,14,16,18,20,24,32,36 默认值：16 |
| font_weight | string | 是否加粗,bold：加粗； normal：普通 默认值：normal |
| font_style | string | 字体样式,italic：斜体； normal：普通 默认值：normal |
| text_align | string | 对齐方式,left：左对齐； right：右对齐； center：居中对齐 默认值：left |
| margin_top | number | 与上一个组件的距离 最小值 0，最大值 50 |
| margin_bottom | number | 与下一个组件的距离 最小值 0，最大值 50 |
| block_divider_config | struct | 分割线组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| line_color | string | 线条颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#000000 |
| thickness | number | 线条粗细 最小值 1，最大值 500 默认值：1 |
| type | string | 线条类型,aolid:实线； dashed：虚线 默认值：solid |
| margin_top | number | 与上一个组件的距离 最小值 0，最大值 50 |
| margin_bottom | number | 与下一个组件的距离 最小值 0，最大值 50 |
| block_custom_page_config | struct | 内嵌网页组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| src | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| block_button_config | struct | 普通按钮组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| color | string | 字体颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#FFFFFF |
| background_color | string | 背景颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#296BEF |
| content | string | 按钮文案，若跳转类型为【下载 APP 】，应合规要求文案必须包含【下载】或【安装】字样，不支持 emoji 字段长度最小 1 字节，长度最大 8 字节 |
| has_icon | boolean | 是否显示图标，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| button_size | string | 按钮大小，small:小;middle:中;large:大; 当为小尺寸按钮时（button_size = small），按钮文案（content）自动截断为前两个字符 默认值：large |
| margin_top | number | 与上一个组件的距离 最小值 0，最大值 50 |
| margin_bottom | number | 与下一个组件的距离 最小值 0，最大值 50 |
| convert_unknown | struct | 转化-暂不支持，同一层级里仅可配置一种转化 |
| convert_type* | string | unknown |
| convert_download | struct | 转化-下载 APP 配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 download |
| deeplink_url_ios | string | ios 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| deeplink_url_android | string | android 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_link | struct | 转化-跳转链接配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 link |
| src* | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| app_id_ios | string | ios 直达链接跳转的 appId，不填表示不开启 字段长度最小 1 字节，长度最大 64 字节 |
| deeplink_url_ios | string | ios 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| app_id_android | string | android 直达链接跳转的 appId，不填表示不开启 字段长度最小 1 字节，长度最大 64 字节 |
| deeplink_url_android | string | android 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_weapp | struct | 转化-打开小程序配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 weapp |
| weapp_id* | string | 原始 id，gh_xxxx 字段长度最小 1 字节，长度最大 128 字节 |
| weapp_path* | string | 小程序路径 字段长度最小 1 字节，长度最大 1024 字节 |
| backup_link | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_gh | struct | 转化-关注公众号配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 gh |
| appid* | string | wxid，以 wx 开头的字符串,如 wxffffffffffff 字段长度最小 1 字节，长度最大 128 字节 |
| one_click | boolean | 是否开启一键关注，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| direct_focus | boolean | 是否开启立即关注，true: 开启, false: 关闭。 仅图文复合系列组件可以使用，开启后，用户点击关注组件，可在当前页面快捷关注，无需进入二次确认页；开启后，组件内容使用公众号信息，「按钮文本」内容固定为【关注公众号】 可选值：{ true, false } 默认值：false |
| convert_followVideo | struct | 转化-关注视频号配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 followVideo |
| nick_name* | string | 视频号名称 字段长度最小 1 字节，长度最大 256 字节 |
| one_click | boolean | 是否开启一键关注，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| fixed_button_config | struct | 底部悬浮按钮组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| icon_material_id | string | 图片素材 id，图片格式：PNG 或 JPG 格式 图片大小：不超过 300KB 图片尺寸：宽度为 750px，高度为 750px 通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得 字段长度最小 1 字节，长度最大 64 字节 |
| icon_shape | string | 图片形状，rect:方头像;round:圆头像; 默认值：rect |
| title | string | 标题文案 字段长度最小 1 字节，长度最大 10 字节 |
| desc | string | 描述文案 字段长度最小 1 字节，长度最大 20 字节 |
| button_content | string | 按钮文案 字段长度最小 1 字节，长度最大 5 字节 |
| title_color | string | 标题颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#000000 |
| desc_color | string | 字体颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#4C4C4C |
| button_font_color | string | 按钮文案颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#FFFFFF |
| button_background_color | string | 按钮背景颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#296BEF |
| background_color | string | 组件颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#f0f0f0 |
| convert_unknown | struct | 转化-暂不支持，同一层级里仅可配置一种转化 |
| convert_type* | string | unknown |
| convert_download | struct | 转化-下载 APP 配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 download |
| deeplink_url_ios | string | ios 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| deeplink_url_android | string | android 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_link | struct | 转化-跳转链接配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 link |
| src* | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| app_id_ios | string | ios 直达链接跳转的 appId，不填表示不开启 字段长度最小 1 字节，长度最大 64 字节 |
| deeplink_url_ios | string | ios 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| app_id_android | string | android 直达链接跳转的 appId，不填表示不开启 字段长度最小 1 字节，长度最大 64 字节 |
| deeplink_url_android | string | android 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_weapp | struct | 转化-打开小程序配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 weapp |
| weapp_id* | string | 原始 id，gh_xxxx 字段长度最小 1 字节，长度最大 128 字节 |
| weapp_path* | string | 小程序路径 字段长度最小 1 字节，长度最大 1024 字节 |
| backup_link | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_gh | struct | 转化-关注公众号配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 gh |
| appid* | string | wxid，以 wx 开头的字符串,如 wxffffffffffff 字段长度最小 1 字节，长度最大 128 字节 |
| one_click | boolean | 是否开启一键关注，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| direct_focus | boolean | 是否开启立即关注，true: 开启, false: 关闭。 仅图文复合系列组件可以使用，开启后，用户点击关注组件，可在当前页面快捷关注，无需进入二次确认页；开启后，组件内容使用公众号信息，「按钮文本」内容固定为【关注公众号】 可选值：{ true, false } 默认值：false |
| convert_followVideo | struct | 转化-关注视频号配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 followVideo |
| nick_name* | string | 视频号名称 字段长度最小 1 字节，长度最大 256 字节 |
| one_click | boolean | 是否开启一键关注，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| right_fixed_button_config | struct | 侧边悬浮按钮组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| background_color | string | 组件颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#FFFFFF |
| type | string | 组件样式，with-icon:带图标的样式;with-button:带按钮的样式; 当 convert_type = download 时，type 始终为 with-button 默认值：with-icon |
| content | struct[] | 侧边悬浮按钮组件内容 数组长度为 1 |
| title | string | 标题文案 字段长度最小 1 字节，长度最大 4 字节 |
| title_color | string | 标题颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#000000 |
| button_content | string | 按钮文案 字段长度最小 1 字节，长度最大 4 字节 |
| button_font_color | string | 按钮文案颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#FFFFFF |
| button_background_color | string | 按钮背景颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#296BEF |
| icon_color | string | 图标颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#000000 |
| convert_unknown | struct | 转化-暂不支持，同一层级里仅可配置一种转化 |
| convert_type* | string | unknown |
| convert_download | struct | 转化-下载 APP 配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 download |
| deeplink_url_ios | string | ios 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| deeplink_url_android | string | android 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_link | struct | 转化-跳转链接配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 link |
| src* | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| app_id_ios | string | ios 直达链接跳转的 appId，不填表示不开启 字段长度最小 1 字节，长度最大 64 字节 |
| deeplink_url_ios | string | ios 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| app_id_android | string | android 直达链接跳转的 appId，不填表示不开启 字段长度最小 1 字节，长度最大 64 字节 |
| deeplink_url_android | string | android 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_weapp | struct | 转化-打开小程序配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 weapp |
| weapp_id* | string | 原始 id，gh_xxxx 字段长度最小 1 字节，长度最大 128 字节 |
| weapp_path* | string | 小程序路径 字段长度最小 1 字节，长度最大 1024 字节 |
| backup_link | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_gh | struct | 转化-关注公众号配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 gh |
| appid* | string | wxid，以 wx 开头的字符串,如 wxffffffffffff 字段长度最小 1 字节，长度最大 128 字节 |
| one_click | boolean | 是否开启一键关注，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| direct_focus | boolean | 是否开启立即关注，true: 开启, false: 关闭。 仅图文复合系列组件可以使用，开启后，用户点击关注组件，可在当前页面快捷关注，无需进入二次确认页；开启后，组件内容使用公众号信息，「按钮文本」内容固定为【关注公众号】 可选值：{ true, false } 默认值：false |
| convert_followVideo | struct | 转化-关注视频号配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 followVideo |
| nick_name* | string | 视频号名称 字段长度最小 1 字节，长度最大 256 字节 |
| one_click | boolean | 是否开启一键关注，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| block_shelf_config | struct | 图文复合组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| card_type | string | 样式类型，card:横版图文;title:竖版图文; 默认值：card |
| style_type | string | 卡片大小，仅当 card_type=card 时生效 0:中卡;1:小卡; |
| title | string | 标题文案 字段长度最小 1 字节，长度最大 10 字节 |
| title_color | string | 标题颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#000000 |
| desc | string | 描述文案 字段长度最小 1 字节，长度最大 20 字节 |
| desc_color | string | 字体颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#7F7F7F |
| button_content | string | 按钮文案 字段长度最小 1 字节，长度最大 5 字节 |
| button_font_color | string | 按钮文案颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#FFFFFF |
| button_background_color | string | 按钮背景颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#296BEF |
| card_background_color | string | 卡片背景颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#FFFFFF |
| card_border_color | string | 卡片边框颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#E5E5E5 |
| icon_material_id | string | 图片素材 id 字段长度最小 1 字节，长度最大 64 字节 |
| margin_top | number | 与上一个组件的距离 最小值 0，最大值 50 |
| margin_bottom | number | 与下一个组件的距离 最小值 0，最大值 50 |
| convert_unknown | struct | 转化-暂不支持，同一层级里仅可配置一种转化 |
| convert_type* | string | unknown |
| convert_download | struct | 转化-下载 APP 配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 download |
| deeplink_url_ios | string | ios 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| deeplink_url_android | string | android 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_link | struct | 转化-跳转链接配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 link |
| src* | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| app_id_ios | string | ios 直达链接跳转的 appId，不填表示不开启 字段长度最小 1 字节，长度最大 64 字节 |
| deeplink_url_ios | string | ios 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| app_id_android | string | android 直达链接跳转的 appId，不填表示不开启 字段长度最小 1 字节，长度最大 64 字节 |
| deeplink_url_android | string | android 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_weapp | struct | 转化-打开小程序配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 weapp |
| weapp_id* | string | 原始 id，gh_xxxx 字段长度最小 1 字节，长度最大 128 字节 |
| weapp_path* | string | 小程序路径 字段长度最小 1 字节，长度最大 1024 字节 |
| backup_link | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_gh | struct | 转化-关注公众号配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 gh |
| appid* | string | wxid，以 wx 开头的字符串,如 wxffffffffffff 字段长度最小 1 字节，长度最大 128 字节 |
| one_click | boolean | 是否开启一键关注，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| direct_focus | boolean | 是否开启立即关注，true: 开启, false: 关闭。 仅图文复合系列组件可以使用，开启后，用户点击关注组件，可在当前页面快捷关注，无需进入二次确认页；开启后，组件内容使用公众号信息，「按钮文本」内容固定为【关注公众号】 可选值：{ true, false } 默认值：false |
| convert_followVideo | struct | 转化-关注视频号配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 followVideo |
| nick_name* | string | 视频号名称 字段长度最小 1 字节，长度最大 256 字节 |
| one_click | boolean | 是否开启一键关注，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| block_shelf_group_config | struct | 双图文复合组件配置，配置及示例，可参考[官方页 API 文档](https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY) |
| text_align | string | 对齐方式,left：左对齐； right：右对齐； center：居中对齐 默认值：left |
| content | struct[] | 卡片列表 数组长度为 2 |
| title | string | 标题文案 字段长度最小 1 字节，长度最大 10 字节 |
| title_color | string | 标题颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#000000 |
| desc | string | 描述文案 字段长度最小 1 字节，长度最大 20 字节 |
| desc_color | string | 字体颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#7F7F7F |
| button_content | string | 按钮文案 字段长度最小 1 字节，长度最大 5 字节 |
| button_font_color | string | 按钮文案颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#FFFFFF |
| button_background_color | string | 按钮背景颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#296BEF |
| card_background_color | string | 卡片背景颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#FFFFFF |
| card_border_color | string | 卡片边框颜色 字段长度最小 1 字节，长度最大 7 字节 默认值：#E5E5E5 |
| icon_material_id | string | 图片素材 id 字段长度最小 1 字节，长度最大 64 字节 |
| convert_unknown | struct | 转化-暂不支持，同一层级里仅可配置一种转化 |
| convert_type* | string | unknown |
| convert_download | struct | 转化-下载 APP 配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 download |
| deeplink_url_ios | string | ios 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| deeplink_url_android | string | android 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_link | struct | 转化-跳转链接配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 link |
| src* | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| app_id_ios | string | ios 直达链接跳转的 appId，不填表示不开启 字段长度最小 1 字节，长度最大 64 字节 |
| deeplink_url_ios | string | ios 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| app_id_android | string | android 直达链接跳转的 appId，不填表示不开启 字段长度最小 1 字节，长度最大 64 字节 |
| deeplink_url_android | string | android 直达链接，不填表示不开启 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_weapp | struct | 转化-打开小程序配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 weapp |
| weapp_id* | string | 原始 id，gh_xxxx 字段长度最小 1 字节，长度最大 128 字节 |
| weapp_path* | string | 小程序路径 字段长度最小 1 字节，长度最大 1024 字节 |
| backup_link | string | url 链接，必须为 https 开头 字段长度最小 1 字节，长度最大 2048 字节 |
| convert_gh | struct | 转化-关注公众号配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 gh |
| appid* | string | wxid，以 wx 开头的字符串,如 wxffffffffffff 字段长度最小 1 字节，长度最大 128 字节 |
| one_click | boolean | 是否开启一键关注，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| direct_focus | boolean | 是否开启立即关注，true: 开启, false: 关闭。 仅图文复合系列组件可以使用，开启后，用户点击关注组件，可在当前页面快捷关注，无需进入二次确认页；开启后，组件内容使用公众号信息，「按钮文本」内容固定为【关注公众号】 可选值：{ true, false } 默认值：false |
| convert_followVideo | struct | 转化-关注视频号配置，同一层级里仅可配置一种转化 |
| convert_type* | string | 值为 followVideo |
| nick_name* | string | 视频号名称 字段长度最小 1 字节，长度最大 256 字节 |
| one_click | boolean | 是否开启一键关注，true: 开启, false: 关闭 可选值：{ true, false } 默认值：false |
| margin_top | number | 与上一个组件的距离 最小值 0，最大值 50 |
| margin_bottom | number | 与下一个组件的距离 最小值 0，最大值 50 |
| proto_version | integer | 参数协议版本，0：API 专有(不支持 SDK 使用，参数协议参考< a href='https://doc.weixin.qq.com/doc/w3_ALIAXwboACcgz2W3frBS4KwnDfJ8d?scode=AJEAIQdfAAo8qNQxCYAa0AZwZbALY' target='_blank'>官方落地页 API 协议) ，1：API+SDK 通用(推荐新接入开发者使用，参数协议参考本文档，使用 SDK 该值必须为 1) 不传默认为 0 最小值 0，最大值 1 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/official_landing_page_component/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "page_elements": [
        {
            "element_type": "HeadOutsideMaterial",
            "head_outside_material_config": []
        },
        {
            "element_type": "BlockButton",
            "block_button_config": {
                "convert_download": {
                    "convert_type": "download",
                    "deeplink_url_android": "app://android",
                    "deeplink_url_ios": "app://ios"
                },
                "has_icon": true,
                "button_size": "large",
                "content": "立即下载",
                "color": "#FFFFFF",
                "margin_bottom": 10,
                "background_color": "#000000",
                "marigin_top": 10
            }
        }
    ],
    "account_id": "<ACCOUNT_ID>",
    "page_config": {
        "page_name": "落地页名称",
        "ios_app_id": "11111111",
        "page_title": "落地页标题",
        "android_app_id": "11111111"
    }
}'
curl 'https://api.e.qq.com/v3.0/official_landing_page_component/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "page_elements": [
        {
            "element_type": "HeadOutsideMaterial",
            "head_outside_material_config": []
        },
        {
            "element_type": "BlockButton",
            "block_button_config": {
                "convert_download": {
                    "convert_type": "download",
                    "deeplink_url_android": "app://android",
                    "deeplink_url_ios": "app://ios"
                },
                "has_icon": true,
                "button_size": "large",
                "content": "立即下载",
                "color": "#FFFFFF",
                "margin_bottom": 10,
                "background_color": "#000000",
                "marigin_top": 10
            }
        }
    ],
    "account_id": "<ACCOUNT_ID>",
    "page_config": {
        "page_name": "落地页名称",
        "ios_app_id": "11111111",
        "page_title": "落地页标题",
        "android_app_id": "11111111"
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| page_id | int64 | 落地页服务 id，用于广告投放端搭建广告创意选择落地页时使用 |
| landing_page_id | integer | 官方落地页 id，仅用于官方落地页模块时使用 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "page_id": 12345678,
        "landing_page_id": 123456
    }
}
```

## 场景组合示例

枚举值会自动根据已选条件变化，只展示有示例数据的枚举值

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
