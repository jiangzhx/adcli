---
title: 基于模板创建微信原生页 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wechat_pages/add
doc_id: tencent_ads_v3_0_docs_api_wechat_pages_add
source_id: tencent_ads_v3_0_docs_api_wechat_pages_add
---
# 基于模板创建微信原生页 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | wechat_pages/add |
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
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| page_name* | string | 落地页名称 字段长度最小 1 字节，长度最大 120 字节 |
| page_template_id* | integer | 落地页模板 id |
| page_elements_spec_list* | struct[] | 组件素材内容，组件的同步顺序与原生页的展示顺序一致，即第一个同步组件为顶部展示元素 数组最大长度 40 |
| element_type* | enum | 原生页中组件类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_page_elements_type) 可选值：{ IMAGE, VIDEO, TEXT, BUTTON, FORM, CAROUSEL, ELEMENT_TYPE_UNSUPPORTED, CARD_ROTATE_IMAGE, SHELF, FLOAT_BUTTON, GOODS, COMMON_COMPONENT, SWIPE_WEBVIEW, WEBVIEW, ANIMATE_FLOAT_BUTTON } |
| image_spec | struct | 图片组件元素 |
| image_id_list* | string[] | 图片 id 列表 数组最小长度 1，最大长度 6 字段长度最小 1 字节，长度最大 64 字节 |
| video_spec | struct | 视频组件元素 |
| video_id* | integer | 视频 id，通过 [\[videos 模块\]](https://developers.e.qq.com/v3.0/docs/api/videos/add) 上传视频后获得 |
| text_spec | struct | 文本组件元素 |
| text* | string | 文本内容 字段长度最小 1 字节，长度最大 30720 字节 |
| button_spec | struct | 按钮组件元素 |
| title | string | 按钮文案，具体长度以线下模板文档为主审核规范：原生页当含有 app_android_spec 或 app_ios_spec 元素时， 下载按钮文案必须含有“安装”或“下载”才允许使用 字段长度最小 1 字节，长度最大 120 字节 |
| url | string | 跳转链接的 url，按钮组件元素时传入，支持通配符形式%%target_url_mobile%% 字段长度最小 1 字节，长度最大 1023 字节 |
| link_spec | struct | 外链信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| url | string | 跳转链接的 url，按钮组件元素时传入，支持通配符形式%%target_url_mobile%% 字段长度最小 1 字节，长度最大 1023 字节 |
| deep_link_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url 字段长度最小 0 字节，长度最大 2048 字节 |
| app_android_id* | string | Android 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| deep_link_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url 字段长度最小 0 字节，长度最大 2048 字节 |
| app_ios_id* | string | iOS 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| mini_program_spec | struct | 小程序信息，微信小程序信息 |
| mini_program_id* | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_program_path* | string | 小程序路径 字段长度最小 1 字节，长度最大 2048 字节 |
| app_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_ios%% 字段长度最小 0 字节，长度最大 2048 字节 |
| app_ios_id* | string | iOS 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| app_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_android%% 字段长度最小 0 字节，长度最大 2048 字节 |
| app_android_id* | string | Android 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| app_android_channel_package_id | string | Android 应用渠道包 id，当前特指投放腾讯开放平台安卓应用的渠道包 id，从推广目标模块的读取接口可以获取 字段长度最小 0 字节，长度最大 128 字节 |
| app_market_package | string | 厂商应用商店包名，不为空则开启厂商应用商店下载 字段长度最小 0 字节，长度最大 512 字节 |
| mini_program_spec | struct | 小程序信息，微信小程序信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| mini_program_id* | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_program_path* | string | 小程序路径 字段长度最小 1 字节，长度最大 2048 字节 |
| mini_program_paths | string[] | 小程序落地页 path 列表 数组最小长度 1，最大长度 255 字段长度最小 1 字节，长度最大 2048 字节 |
| mini_game_program_spec | struct | 小游戏信息，微信小游戏信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| mini_game_program_id* | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_game_program_path | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） 字段长度最小 0 字节，长度最大 750 字节 |
| fengye_spec | struct | 枫叶信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| fengye_id* | string | 枫叶落地页 id 字段长度最小 1 字节，长度最大 384 字节 |
| card_spec | struct | 卡券信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| card_id* | string | 微信卡券 id 字段长度最小 1 字节，长度最大 384 字节 |
| follow_spec | struct | 关注公众号信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| service_spec | struct | 客服组建信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| wecom_spec | struct | 企业微信组件信息 |
| title* | string | 企业微信组件，标题字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 字段长度最小 1 字节，长度最大 64 字节 |
| groupid | integer | 企业微信组件客服组 id，[\[获取企业微信组件客服组\]](https://developers.e.qq.com/docs/api/tools/wechat_pages/wechat_pages_csgrouplist_get) 最小值 0，最大值 9999999999 |
| setid | integer | 地理位置集 id，groupid 或 setid 必填一个 最小值 0，最大值 9999999999 |
| use_icon | integer | 是否在 button 组件下开启 icon 图标，（0：不使用； 1：使用），灰度开放中 最小值 0，最大值 1 |
| tel_spec | struct | 电话组件信息 |
| title* | string | 电话组件标题，字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 字段长度最小 1 字节，长度最大 64 字节 |
| phone_num | string | 电话组件标题，字段长度最小 1 个等宽字符，长度最大 12 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 字段长度最小 1 字节，长度最大 64 字节 |
| video_channel_spec | struct | 关注视频号信息元素 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| finder_nickname | string | 视频号昵称 字段长度最小 1 字节，长度最大 120 字节 默认值：以模板为准 |
| fast_follow | integer | 是否开启一键关注，0: 关闭, 1: 开启 最小值 0，最大值 1 默认值：以模板为准 |
| form_spec | struct | 表单组件元素 |
| title* | string | 按钮文案，具体长度以线下模板文档为主 字段长度最小 1 字节，长度最大 30 字节 |
| element_shelf | struct | 图文复合组件 |
| shelf_spec | struct[] | 图文复合组件按钮信息，支持一行一个和一行两个 数组最大长度 32 |
| shelf_button_spec* | struct | 按钮信息 |
| link_spec | struct | 外链信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| url | string | 跳转链接的 url，按钮组件元素时传入，支持通配符形式%%target_url_mobile%% 字段长度最小 1 字节，长度最大 1023 字节 |
| deep_link_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url 字段长度最小 0 字节，长度最大 2048 字节 |
| app_android_id* | string | Android 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| deep_link_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url 字段长度最小 0 字节，长度最大 2048 字节 |
| app_ios_id* | string | iOS 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| app_download_spec | struct | 应用下载信息 |
| title* | string | 按钮文案，审核规范：原生页当含有 app_android_spec 或 app_ios_spec 元素时， 下载按钮文案必须含有“安装”或“下载”才允许使用 字段长度最小 1 字节，长度最大 120 字节 |
| app_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_ios%% 字段长度最小 0 字节，长度最大 2048 字节 |
| app_ios_id* | string | iOS 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| app_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_android%% 字段长度最小 0 字节，长度最大 2048 字节 |
| app_android_id* | string | Android 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| app_android_channel_package_id | string | Android 应用渠道包 id，当前特指投放腾讯开放平台安卓应用的渠道包 id，从推广目标模块的读取接口可以获取 字段长度最小 0 字节，长度最大 128 字节 |
| app_market_package | string | 厂商应用商店包名，不为空则开启厂商应用商店下载 字段长度最小 0 字节，长度最大 512 字节 |
| mini_program_spec | struct | 小程序信息，微信小程序信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| mini_program_id* | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_program_path* | string | 小程序路径 字段长度最小 1 字节，长度最大 2048 字节 |
| mini_program_paths | string[] | 小程序落地页 path 列表 数组最小长度 1，最大长度 255 字段长度最小 1 字节，长度最大 2048 字节 |
| wecom_spec | struct | 企业微信组件信息 |
| title* | string | 企业微信组件，标题字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 字段长度最小 1 字节，长度最大 64 字节 |
| groupid | integer | 企业微信组件客服组 id，[\[获取企业微信组件客服组\]](https://developers.e.qq.com/docs/api/tools/wechat_pages/wechat_pages_csgrouplist_get) 最小值 0，最大值 9999999999 |
| setid | integer | 地理位置集 id，groupid 或 setid 必填一个 最小值 0，最大值 9999999999 |
| image_id_list* | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得 字段长度最小 1 字节，长度最大 64 字节 |
| title* | string | 图文复合标题文案， 悬浮组件：字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 单排货架组件：字段长度最小 1 个等宽字符，长度最大 12 个等宽字符（即字段最大长度为 12 个中文字或全角标点，24 个英文字或半角标点。） 双排货架组件：字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 字段长度最小 1 字节，长度最大 120 字节 |
| desc* | string | 图文复合描述文案， 悬浮组件：字段长度最小 1 个等宽字符，长度最大 14 个等宽字符（即字段最大长度为 14 个中文字或全角标点，28 个英文字或半角标点。） 单排货架组件：字段长度最小 1 个等宽字符，长度最大 15 个等宽字符（即字段最大长度为 15 个中文字或全角标点，30 个英文字或半角标点。） 双排货架组件：字段长度最小 1 个等宽字符，长度最大 12 个等宽字符（即字段最大长度为 12 个中文字或全角标点，24 个英文字或半角标点。） 字段长度最小 1 字节，长度最大 120 字节 |
| element_float | struct | 悬浮组件 |
| image_id_list* | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得 字段长度最小 1 字节，长度最大 64 字节 |
| title* | string | 图文复合标题文案， 悬浮组件：字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 单排货架组件：字段长度最小 1 个等宽字符，长度最大 12 个等宽字符（即字段最大长度为 12 个中文字或全角标点，24 个英文字或半角标点。） 双排货架组件：字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 字段长度最小 1 字节，长度最大 120 字节 |
| desc* | string | 图文复合描述文案， 悬浮组件：字段长度最小 1 个等宽字符，长度最大 14 个等宽字符（即字段最大长度为 14 个中文字或全角标点，28 个英文字或半角标点。） 单排货架组件：字段长度最小 1 个等宽字符，长度最大 15 个等宽字符（即字段最大长度为 15 个中文字或全角标点，30 个英文字或半角标点。） 双排货架组件：字段长度最小 1 个等宽字符，长度最大 12 个等宽字符（即字段最大长度为 12 个中文字或全角标点，24 个英文字或半角标点。） 字段长度最小 1 字节，长度最大 120 字节 |
| float_button_spec* | struct | 悬浮组件按钮 |
| link_spec | struct | 外链信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| url | string | 跳转链接的 url，按钮组件元素时传入，支持通配符形式%%target_url_mobile%% 字段长度最小 1 字节，长度最大 1023 字节 |
| deep_link_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url 字段长度最小 0 字节，长度最大 2048 字节 |
| app_android_id* | string | Android 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| deep_link_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url 字段长度最小 0 字节，长度最大 2048 字节 |
| app_ios_id* | string | iOS 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| app_download_spec | struct | 应用下载信息 |
| title* | string | 按钮文案，审核规范：原生页当含有 app_android_spec 或 app_ios_spec 元素时， 下载按钮文案必须含有“安装”或“下载”才允许使用 字段长度最小 1 字节，长度最大 120 字节 |
| app_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_ios%% 字段长度最小 0 字节，长度最大 2048 字节 |
| app_ios_id* | string | iOS 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| app_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_android%% 字段长度最小 0 字节，长度最大 2048 字节 |
| app_android_id* | string | Android 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| app_android_channel_package_id | string | Android 应用渠道包 id，当前特指投放腾讯开放平台安卓应用的渠道包 id，从推广目标模块的读取接口可以获取 字段长度最小 0 字节，长度最大 128 字节 |
| app_market_package | string | 厂商应用商店包名，不为空则开启厂商应用商店下载 字段长度最小 0 字节，长度最大 512 字节 |
| mini_program_spec | struct | 小程序信息，微信小程序信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| mini_program_id* | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_program_path* | string | 小程序路径 字段长度最小 1 字节，长度最大 2048 字节 |
| mini_program_paths | string[] | 小程序落地页 path 列表 数组最小长度 1，最大长度 255 字段长度最小 1 字节，长度最大 2048 字节 |
| mini_game_program_spec | struct | 小游戏信息，微信小游戏信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| mini_game_program_id* | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_game_program_path | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） 字段长度最小 0 字节，长度最大 750 字节 |
| fengye_spec | struct | 枫叶信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| fengye_id* | string | 枫叶落地页 id 字段长度最小 1 字节，长度最大 384 字节 |
| card_spec | struct | 卡券信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| card_id* | string | 微信卡券 id 字段长度最小 1 字节，长度最大 384 字节 |
| follow_spec | struct | 关注公众号信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| service_spec | struct | 客服组建信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| wecom_spec | struct | 企业微信组件信息 |
| title* | string | 企业微信组件，标题字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 字段长度最小 1 字节，长度最大 64 字节 |
| groupid | integer | 企业微信组件客服组 id，[\[获取企业微信组件客服组\]](https://developers.e.qq.com/docs/api/tools/wechat_pages/wechat_pages_csgrouplist_get) 最小值 0，最大值 9999999999 |
| setid | integer | 地理位置集 id，groupid 或 setid 必填一个 最小值 0，最大值 9999999999 |
| element_goods | struct | 商品组件 |
| goods_button_spec* | struct | 商品按钮 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| element_swipe | struct | 上划组件元素 |
| jump_url* | string | 上划组件跳转链接 字段长度最小 0 字节，长度最大 1023 字节 |
| swipe_text* | string | 上划组件文案，字段长度最小 1 个等宽字符，长度最大 10 等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） 字段长度最小 1 字节，长度最大 30 字节 |
| element_webview | struct | webview 组件元素 |
| url* | string | webview 链接 字段长度最小 0 字节，长度最大 1023 字节 |
| element_animate_float | struct | 动画悬浮组件，灰度开放中 |
| image_id_list* | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得 字段长度最小 1 字节，长度最大 64 字节 |
| title* | string | 图文复合标题文案， 悬浮组件：字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 单排货架组件：字段长度最小 1 个等宽字符，长度最大 12 个等宽字符（即字段最大长度为 12 个中文字或全角标点，24 个英文字或半角标点。） 双排货架组件：字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 字段长度最小 1 字节，长度最大 120 字节 |
| desc* | string | 图文复合描述文案， 悬浮组件：字段长度最小 1 个等宽字符，长度最大 14 个等宽字符（即字段最大长度为 14 个中文字或全角标点，28 个英文字或半角标点。） 单排货架组件：字段长度最小 1 个等宽字符，长度最大 15 个等宽字符（即字段最大长度为 15 个中文字或全角标点，30 个英文字或半角标点。） 双排货架组件：字段长度最小 1 个等宽字符，长度最大 12 个等宽字符（即字段最大长度为 12 个中文字或全角标点，24 个英文字或半角标点。） 字段长度最小 1 字节，长度最大 120 字节 |
| animate_float_button_spec* | struct | 动画悬浮组件按钮 |
| link_spec | struct | 外链信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| url | string | 跳转链接的 url，按钮组件元素时传入，支持通配符形式%%target_url_mobile%% 字段长度最小 1 字节，长度最大 1023 字节 |
| deep_link_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url 字段长度最小 0 字节，长度最大 2048 字节 |
| app_android_id* | string | Android 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| deep_link_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url 字段长度最小 0 字节，长度最大 2048 字节 |
| app_ios_id* | string | iOS 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| app_download_spec | struct | 应用下载信息 |
| title* | string | 按钮文案，审核规范：原生页当含有 app_android_spec 或 app_ios_spec 元素时， 下载按钮文案必须含有“安装”或“下载”才允许使用 字段长度最小 1 字节，长度最大 120 字节 |
| app_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_ios%% 字段长度最小 0 字节，长度最大 2048 字节 |
| app_ios_id* | string | iOS 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| app_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_android%% 字段长度最小 0 字节，长度最大 2048 字节 |
| app_android_id* | string | Android 应用 id 字段长度最小 1 字节，长度最大 128 字节 |
| app_android_channel_package_id | string | Android 应用渠道包 id，当前特指投放腾讯开放平台安卓应用的渠道包 id，从推广目标模块的读取接口可以获取 字段长度最小 0 字节，长度最大 128 字节 |
| app_market_package | string | 厂商应用商店包名，不为空则开启厂商应用商店下载 字段长度最小 0 字节，长度最大 512 字节 |
| follow_spec | struct | 关注公众号信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| mini_program_spec | struct | 小程序信息，微信小程序信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| mini_program_id* | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_program_path* | string | 小程序路径 字段长度最小 1 字节，长度最大 2048 字节 |
| mini_program_paths | string[] | 小程序落地页 path 列表 数组最小长度 1，最大长度 255 字段长度最小 1 字节，长度最大 2048 字节 |
| mini_game_program_spec | struct | 小游戏信息，微信小游戏信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| mini_game_program_id* | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_game_program_path | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） 字段长度最小 0 字节，长度最大 750 字节 |
| fengye_spec | struct | 枫叶信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| fengye_id* | string | 枫叶落地页 id 字段长度最小 1 字节，长度最大 384 字节 |
| card_spec | struct | 卡券信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| card_id* | string | 微信卡券 id 字段长度最小 1 字节，长度最大 384 字节 |
| service_spec | struct | 客服组建信息 |
| title* | string | 按钮文案 字段长度最小 1 字节，长度最大 120 字节 |
| wecom_spec | struct | 企业微信组件信息 |
| title* | string | 企业微信组件，标题字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 字段长度最小 1 字节，长度最大 64 字节 |
| groupid | integer | 企业微信组件客服组 id，[\[获取企业微信组件客服组\]](https://developers.e.qq.com/docs/api/tools/wechat_pages/wechat_pages_csgrouplist_get) 最小值 0，最大值 9999999999 |
| setid | integer | 地理位置集 id，groupid 或 setid 必填一个 最小值 0，最大值 9999999999 |
| share_content_spec* | struct | 微信原生页分享信息 |
| share_title* | string | 原生页分享标题，字段长度最小 1 个等宽字符，长度最大 14 个等宽字符（即字段最大长度为 14 个中文字或全角标点，28 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| share_description* | string | 原生页分享描述，字段长度最小 1 个等宽字符，长度最大 20 个等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/wechat_pages/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": 111111111,
    "page_name": "test name",
    "page_template_id": "<PAGE_TEMPLATE_ID>",
    "page_elements_spec_list": [
        {
            "element_type": "IMAGE",
            "image_spec": {
                "image_id_list": [
                    "4152626:583dfc8e7f53a58db8293622b78a3c7f"
                ]
            }
        },
        {
            "element_type": "BUTTON",
            "button_spec": {
                "title": "拼多多模板 1",
                "url": "http%3a%2f%2fjd.com",
                "app_ios_spec": {
                    "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                    "app_ios_id": "1044283059"
                },
                "app_android_spec": {
                    "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                    "app_android_id": "1104790111",
                    "app_android_channel_package_id": "72243366;000116083635303838333533"
                }
            }
        },
        {
            "element_type": "IMAGE",
            "image_spec": {
                "image_id_list": [
                    "1613822"
                ]
            }
        },
        {
            "element_type": "IMAGE",
            "image_spec": {
                "image_id_list": [
                    "1613374"
                ]
            }
        },
        {
            "element_type": "BUTTON",
            "button_spec": {
                "title": "拼多多模板 1",
                "url": "http%3a%2f%2fjd.com",
                "app_ios_spec": {
                    "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                    "app_ios_id": "1044283059"
                },
                "app_android_spec": {
                    "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                    "app_android_id": "1104790111",
                    "app_android_channel_package_id": "72243366;000116083635303838333533"
                }
            }
        },
        {
            "element_type": "IMAGE",
            "image_spec": {
                "image_id_list": [
                    "1613374"
                ]
            }
        },
        {
            "element_type": "BUTTON",
            "button_spec": {
                "title": "拼多多模板 1",
                "url": "http%3a%2f%2fjd.com",
                "app_ios_spec": {
                    "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                    "app_ios_id": "1044283059"
                },
                "app_android_spec": {
                    "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                    "app_android_id": "1104790111",
                    "app_android_channel_package_id": "72243366;000116083635303838333533"
                }
            }
        }
    ],
    "share_content_spec": {
        "share_title": "分享标题",
        "share_description": "分享描述信息"
    }
}'
curl 'https://api.e.qq.com/v3.0/wechat_pages/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": 111111111,
    "page_name": "test name",
    "page_template_id": "<PAGE_TEMPLATE_ID>",
    "page_elements_spec_list": [
        {
            "element_type": "IMAGE",
            "image_spec": {
                "image_id_list": [
                    "4152626:583dfc8e7f53a58db8293622b78a3c7f"
                ]
            }
        },
        {
            "element_type": "BUTTON",
            "button_spec": {
                "title": "拼多多模板 1",
                "url": "http%3a%2f%2fjd.com",
                "app_ios_spec": {
                    "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                    "app_ios_id": "1044283059"
                },
                "app_android_spec": {
                    "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                    "app_android_id": "1104790111",
                    "app_android_channel_package_id": "72243366;000116083635303838333533"
                }
            }
        },
        {
            "element_type": "IMAGE",
            "image_spec": {
                "image_id_list": [
                    "1613822"
                ]
            }
        },
        {
            "element_type": "IMAGE",
            "image_spec": {
                "image_id_list": [
                    "1613374"
                ]
            }
        },
        {
            "element_type": "BUTTON",
            "button_spec": {
                "title": "拼多多模板 1",
                "url": "http%3a%2f%2fjd.com",
                "app_ios_spec": {
                    "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                    "app_ios_id": "1044283059"
                },
                "app_android_spec": {
                    "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                    "app_android_id": "1104790111",
                    "app_android_channel_package_id": "72243366;000116083635303838333533"
                }
            }
        },
        {
            "element_type": "IMAGE",
            "image_spec": {
                "image_id_list": [
                    "1613374"
                ]
            }
        },
        {
            "element_type": "BUTTON",
            "button_spec": {
                "title": "拼多多模板 1",
                "url": "http%3a%2f%2fjd.com",
                "app_ios_spec": {
                    "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                    "app_ios_id": "1044283059"
                },
                "app_android_spec": {
                    "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                    "app_android_id": "1104790111",
                    "app_android_channel_package_id": "72243366;000116083635303838333533"
                }
            }
        }
    ],
    "share_content_spec": {
        "share_title": "分享标题",
        "share_description": "分享描述信息"
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| page_id | int64 | 落地页 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "page_id": 1
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
