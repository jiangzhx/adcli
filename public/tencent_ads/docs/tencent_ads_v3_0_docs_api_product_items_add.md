---
title: 添加商品 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/product_items/add
doc_id: tencent_ads_v3_0_docs_api_product_items_add
source_id: tencent_ads_v3_0_docs_api_product_items_add
---
# 添加商品 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | product_items/add |
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
| account_id* | integer | 广告主 id，如果已经升级了工作台，则填写 bm_id，有操作权限的广告主 id |
| product_catalog_id* | integer | 商品库 id |
| feed_id | integer | 商品文件 id |
| request_source | string | 请求源 字段长度最小 1 字节，长度最大 256 字节 |
| usage_info | struct | 用途 |
| inner_appid | integer[] | appid，2:非电商广告 spu 生产(投放可使用创建资产) 数组最大长度 10 最小值 0，最大值 99 |
| product_item_spec_list* | struct[] | 商品信息列表 数组最大长度 50 |
| product_outer_id* | string | 广告主商品 id 字段长度最小 1 字节，长度最大 255 字节 |
| product_name* | string | 商品名称，(电商行业规则详见下方行业特殊规则) 字段长度最小 1 字节，长度最大 256 字节 |
| description | string | 商品描述，(短剧行业规则详见下方行业特殊规则) 字段长度最小 1 字节，长度最大 5000 字节 |
| created_time | string | 商品创建时间 字段长度最小 19 字节，长度最大 20 字节 |
| last_modified_time | string | 商品更新时间 字段长度最小 19 字节，长度最大 20 字节 |
| expiration_time* | string | 商品下架时间 字段长度最小 19 字节，长度最大 20 字节 |
| image_url | string | 商品图片 URL 字段长度最小 1 字节，长度最大 2048 字节 |
| additional_image_url | string[] | 额外的商品图片 URL 数组最大长度 50 字段长度最小 1 字节，长度最大 2048 字节 |
| hidden_landing_img_url | string[] | 蹊径动态落地页图片 url 数组最大长度 50 字段长度最小 1 字节，长度最大 2048 字节 |
| video_duration | string | 商品视频长度 字段长度最小 1 字节，长度最大 2048 字节 |
| video_url | string | 商品视频链接，(短剧行业规则详见下方行业特殊规则) 字段长度最小 1 字节，长度最大 2048 字节 |
| play_count | integer | 数字类型 |
| publish_time | string | 视频发布时间 字段长度最小 19 字节，长度最大 20 字节 |
| additional_video_url | string[] | 备用商品视频链接，(短剧行业规则详见下方行业特殊规则) 数组最大长度 50 字段长度最小 1 字节，长度最大 2048 字节 |
| pc_page_url | string | PC 端落地页 字段长度最小 1 字节，长度最大 2048 字节 |
| mobile_h5_page_url | string | 移动 H5 落地页 1 字段长度最小 1 字节，长度最大 2048 字节 |
| android_page_url | string | Android 应用直达落地页 1 字段长度最小 1 字节，长度最大 2048 字节 |
| ios_page_url | string | iOS 应用直达落地页 1 字段长度最小 1 字节，长度最大 2048 字节 |
| wechat_page_url | string | 微信落地页 1 字段长度最小 1 字节，长度最大 2048 字节 |
| additional_mobile_h5_page_url | string | 移动 H5 落地页 2 字段长度最小 1 字节，长度最大 2048 字节 |
| additional_android_page_url | string | Android 应用直达落地页 2 字段长度最小 1 字节，长度最大 2048 字节 |
| additional_ios_page_url | string | iOS 应用直达落地页 2 字段长度最小 1 字节，长度最大 2048 字节 |
| additional_wechat_page_url | string | 微信落地页 2 字段长度最小 1 字节，长度最大 2048 字节 |
| mini_program_id | string | 微信小程序 id1 字段长度最小 1 字节，长度最大 50 字节 |
| mini_program_path | string | 微信小程序路径 1 字段长度最小 1 字节，长度最大 2048 字节 |
| additional_mini_program_id | string | 微信小程序 id2 字段长度最小 1 字节，长度最大 50 字节 |
| additional_mini_program_path | string | 微信小程序路径 2 字段长度最小 1 字节，长度最大 2048 字节 |
| universal_link | string | IOS 通用落地页 字段长度最小 1 字节，长度最大 2048 字节 |
| additional_universal_link | string | 备用 IOS 通用落地页 字段长度最小 1 字节，长度最大 2048 字节 |
| product_short_name | string | 商品简称 字段长度最小 1 字节，长度最大 100 字节 |
| price | float | 商品日常售价，大于等于 0，至多 2 位小数 最小值 0，最大值 9999999999，最多保留 2 位小数 |
| original_price | float | 商品原售价，大于等于 0，至多 2 位小数 最小值 0，最大值 9999999999，最多保留 2 位小数 |
| discount | float | 商品折扣 最大值 9999999999，最多保留 2 位小数 |
| sale_price | float | 商品促销价格，大于等于 0，至多 2 位小数 最小值 0，最大值 9999999999，最多保留 2 位小数 |
| start_time | string | 促销价开始时间 字段长度最大 20 字节 |
| end_time | string | 促销价结束时间 字段长度最大 20 字节 |
| sales_volume | integer | 已售卖数 |
| stock_volume | integer | 库存数 |
| slogan | string | 广告语 字段长度最小 1 字节，长度最大 100 字节 |
| custom_label | string[] | 自定义标签 数组最大长度 50 字段长度最大 100 字节 |
| first_category_id | integer | 一级分类 id |
| second_category_id | integer | 二级分类 id |
| third_category_id | integer | 三级分类 id |
| fourth_category_id | integer | 四级分类 id |
| first_category_name | string | 一级分类名称 字段长度最小 1 字节，长度最大 100 字节 |
| second_category_name | string | 二级分类名称 字段长度最小 1 字节，长度最大 100 字节 |
| third_category_name | string | 三级分类名称 字段长度最小 1 字节，长度最大 100 字节 |
| fourth_category_name | string | 四级分类名称 字段长度最小 1 字节，长度最大 100 字节 |
| first_category_url | string | 一级分类 URL，字段长度最小 1 字节，长度最大 2048 字节 |
| second_category_url | string | 二级分类 URL，字段长度最小 1 字节，长度最大 2048 字节 |
| third_category_url | string | 三级分类 URL，字段长度最小 1 字节，长度最大 2048 字节 |
| fourth_category_url | string | 四级分类 URL，字段长度最小 1 字节，长度最大 2048 字节 |
| brand_id | integer | 品牌 id |
| product_brand | string | 品牌名称 字段长度最小 1 字节，长度最大 100 字节 |
| brand_url | string | 品牌页 URL 字段长度最小 1 字节，长度最大 2048 字节 |
| promotion_id | integer | 活动档期 id |
| promotion_name | string | 活动档期名称 字段长度最小 1 字节，长度最大 100 字节 |
| promotion_url | string | 活动档期 URL 地址 字段长度最小 1 字节，长度最大 2048 字节 |
| shop_id | integer | 店铺 id |
| shop_name | string | 店铺名称 字段长度最小 1 字节，长度最大 100 字节 |
| shop_url | string | 店铺 URL 字段长度最小 1 字节，长度最大 2048 字节 |
| shop_custom_info | string | 店铺自定义信息 字段长度最小 1 字节，长度最大 5000 字节 |
| shop_id_list | string[] | 门店 id 列表 数组最大长度 50 字段长度最大 2048 字节 |
| product_view_count | integer | 商品详情页打开次数 |
| favorite_count | integer | 收藏用户数 |
| rating | float | 评分，小数点 2 位，取值 0~5 最小值 0，最大值 5，最多保留 2 位小数 |
| favourable_comment_rate | float | 好评率，小数点 2 位，取值 0~1 最小值 0，最大值 1，最多保留 2 位小数 |
| product_owner_type | enum | 商品所有者类型，”自营“，”商家“，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_product_owner_type) 可选值：{ PRODUCT_OWNER_TYPE_SOP, PRODUCT_OWNER_TYPE_POP } |
| author | string | 作者 字段长度最小 1 字节，长度最大 100 字节 |
| full_text | string | 全文内容 字段长度最小 1 字节，长度最大 2000 字节 |
| like_count | integer | 点赞数 |
| forward_count | integer | 转发数 |
| comment_count | integer | 评论数 |
| author_fans_count | integer | 作者粉丝数 |
| semantic_labels | string[] | 语义标签 数组最大长度 50 字段长度最小 1 字节，长度最大 2048 字节 |
| detail_img | string[] | 图文详情描述 数组最大长度 50 字段长度最大 2048 字节 |
| show_count | integer | 视频曝光次数 |
| play_rate | float | 视频播放率，小数点 2 位，取值 0~1 最小值 0，最大值 1，最多保留 2 位小数 |
| make_money_online | string | 是否网赚（是或者否），字段长度最小 1 字节，长度最大 100 字节 |
| live_broadcast | string | 是否直播，字段长度最小 1 字节，长度最大 100 字节 |
| platform_attribute | string | 平台属性，字段长度最小 1 字节，长度最大 100 字节 |
| custom_data | string | 商品自定义属性，字段长度最小 1 字节，长度最大 5000 字节 |
| shooting_pic_count | integer | 拍摄张数 |
| fineedit_count | integer | 精修张数 |
| album_photo_count | integer | 入册张数 |
| album_count | integer | 相册数量 |
| frame_count | integer | 相框数量 |
| country | string | 所在国家，字段长度最小 1 字节，长度最大 100 字节 |
| province | string | 所在省份/州/直辖市，字段长度最小 1 字节，长度最大 100 字节 |
| city | string | 所在城市，字段长度最小 1 字节，长度最大 100 字节 |
| district | string | 所在区县，字段长度最小 1 字节，长度最大 100 字节 |
| address | string[] | 所在详细地址 数组最大长度 50 字段长度最大 200 字节 |
| shooting_scene_in_count | enum | 内景数量，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#shooting_scene_in_count) 可选值：{ SHOOTING_SCENE_IN_COUNT_1, SHOOTING_SCENE_IN_COUNT_2, SHOOTING_SCENE_IN_COUNT_3, SHOOTING_SCENE_IN_COUNT_4, SHOOTING_SCENE_IN_COUNT_5, SHOOTING_SCENE_IN_COUNT_6, SHOOTING_SCENE_IN_COUNT_7, SHOOTING_SCENE_IN_COUNT_N } |
| shooting_scene_out_count | enum | 外景数量，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#shooting_scene_out_count) 可选值：{ SHOOTING_SCENE_OUT_COUNT_1, SHOOTING_SCENE_OUT_COUNT_2, SHOOTING_SCENE_OUT_COUNT_3, SHOOTING_SCENE_OUT_COUNT_4, SHOOTING_SCENE_OUT_COUNT_5, SHOOTING_SCENE_OUT_COUNT_6, SHOOTING_SCENE_OUT_COUNT_7, SHOOTING_SCENE_OUT_COUNT_N } |
| bride_clothing | enum | 新娘服装，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#bride_clothing) 可选值：{ BRIDE_CLOTHING_1, BRIDE_CLOTHING_2, BRIDE_CLOTHING_3, BRIDE_CLOTHING_4, BRIDE_CLOTHING_5, BRIDE_CLOTHING_6, BRIDE_CLOTHING_7, BRIDE_CLOTHING_N } |
| groom_clothing | enum | 新郎服装，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#groom_clothing) 可选值：{ GROOM_CLOTHING_1, GROOM_CLOTHING_2, GROOM_CLOTHING_3, GROOM_CLOTHING_4, GROOM_CLOTHING_5, GROOM_CLOTHING_6, GROOM_CLOTHING_7, GROOM_CLOTHING_N } |
| cloth_count | enum | 服装套数，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cloth_count) 可选值：{ CLOTH_COUNT_1, CLOTH_COUNT_2, CLOTH_COUNT_3, CLOTH_COUNT_4, CLOTH_COUNT_5, CLOTH_COUNT_6, CLOTH_COUNT_7, CLOTH_COUNT_N } |
| shooting_scene | enum | 拍摄场景，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#shooting_scene) 可选值：{ SHOOTING_SCENE_IN, SHOOTING_SCENE_OUT, SHOOTING_SCENE_BOTH } |
| set_special | string[] | 套餐亮点，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#set_special) 数组最大长度 255 字段长度最大 200 字节 |
| shooting_style_com | string[] | 拍摄风格，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#shooting_style_com) 数组最大长度 255 字段长度最大 200 字节 |
| shooting_scene_detail | string[] | 拍摄场景，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#shooting_scene_detail) 数组最大长度 255 字段长度最大 200 字节 |
| tour_place_domestic | enum | 国内拍摄地，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#tour_place_domestic) 可选值：{ TOUR_PLACE_DOMESTIC_SANYA, TOUR_PLACE_DOMESTIC_CHANGSHA, TOUR_PLACE_DOMESTIC_XIAMEN, TOUR_PLACE_DOMESTIC_QINGDAO, TOUR_PLACE_DOMESTIC_LIJIANG, TOUR_PLACE_DOMESTIC_DALI, TOUR_PLACE_DOMESTIC_DALIAN, TOUR_PLACE_DOMESTIC_HK, TOUR_PLACE_DOMESTIC_TAIWAN, TOUR_PLACE_DOMESTIC_AOMEN, TOUR_PLACE_DOMESTIC_XIANGGELILA, TOUR_PLACE_DOMESTIC_QINGHAI, TOUR_PLACE_DOMESTIC_XIZANG, TOUR_PLACE_DOMESTIC_DAOCHENG, TOUR_PLACE_DOMESTIC_CHONGQING, TOUR_PLACE_DOMESTIC_SUZHOU, TOUR_PLACE_DOMESTIC_SHANGHAI, TOUR_PLACE_DOMESTIC_HANGZHOU, TOUR_PLACE_DOMESTIC_SHENZHEN, TOUR_PLACE_DOMESTIC_GUANGZHOU, TOUR_PLACE_DOMESTIC_BEIJING, TOUR_PLACE_DOMESTIC_XIAN, TOUR_PLACE_DOMESTIC_CHENGDU, TOUR_PLACE_DOMESTIC_BEIHAI, TOUR_PLACE_DOMESTIC_GUILIN, TOUR_PLACE_DOMESTIC_WUHAN, TOUR_PLACE_DOMESTIC_NANJING, TOUR_PLACE_DOMESTIC_HAIKOU } |
| tour_place_foreign | enum | 国外拍摄地，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#tour_place_foreign) 可选值：{ TOUR_PLACE_FOREIGN_VN, TOUR_PLACE_FOREIGN_AU, TOUR_PLACE_FOREIGN_PALAO, TOUR_PLACE_FOREIGN_BALI, TOUR_PLACE_FOREIGN_FJ, TOUR_PLACE_FOREIGN_PUJI, TOUR_PLACE_FOREIGN_MV, TOUR_PLACE_FOREIGN_JP, TOUR_PLACE_FOREIGN_TR, TOUR_PLACE_FOREIGN_GR, TOUR_PLACE_FOREIGN_FR, TOUR_PLACE_FOREIGN_IT, TOUR_PLACE_FOREIGN_BULAGE, TOUR_PLACE_FOREIGN_XIANBENNA, TOUR_PLACE_FOREIGN_MU, TOUR_PLACE_FOREIGN_GE, TOUR_PLACE_FOREIGN_SUMEI, TOUR_PLACE_FOREIGN_SAIBAN, TOUR_PLACE_FOREIGN_JIZHOU, TOUR_PLACE_FOREIGN_SHABA, TOUR_PLACE_FOREIGN_DE, TOUR_PLACE_FOREIGN_LONDON, TOUR_PLACE_FOREIGN_SYDNEY, TOUR_PLACE_FOREIGN_NZ, TOUR_PLACE_FOREIGN_JILONGPO } |
| max_insurance_quota | float | 最高保额，大于等于 0，至多 2 位小数 最小值 0，最大值 9999999999，最多保留 2 位小数 |
| first_month_insurance_fee | float | 首月保费，大于等于 0，至多 2 位小数 最小值 0，最大值 9999999999，最多保留 2 位小数 |
| max_quota | float | 最高额度，大于等于 0，至多 2 位小数 最小值 0，最大值 9999999999，最多保留 2 位小数 |
| annualized_rate_of_return | float | 年化收益率，大于等于 0，至多 4 位小数 最小值 0，最大值 9999999999，最多保留 4 位小数 |
| risk_type | enum | 风险等级类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#risk_type_status) 可选值：{ RISK_CONSERVATIVE, RISK_STEADY, RISK_BALANCE, RISK_RADICAL, RISK_OTHER } |
| artist | string[] | 艺人 数组最大长度 100 字段长度最大 100 字节 |
| trends | integer | 热度，主要表明书籍在平台的热度，参考值包括在读人数、人气值等 |
| pay_status | enum | 书籍的付费状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#pay_status) 可选值：{ PAY_STATUS_FREE, PAY_STATUS_PAID, PAY_STATUS_MEMBER } |
| word_count | integer | 小说字数 |
| serial_status | enum | 书籍的连载状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#serial_status) 可选值：{ SERIAL_STATUS_FINISH, SERIAL_STATUS_SERIALIZE } |
| book_json | struct | 小说前 4 章内容，字段最大空间 10 万字节 |
| chapters | struct[] | 小说章节列表 数组最大长度 4 |
| subtitle | string | 章节标题 |
| chapterid | integer | 章节 id, 最小值 1，最大值 4 |
| text | string[] | 章节 id, 最小值 1，最大值 4 |
| ratings | float | 评分 最小值 0，最大值 5，最多保留 2 位小数 |
| reader_count | integer | 在读人数 |
| recommended_votes_count | integer | 推荐数 |
| reward_count | integer | 打赏数 |
| ranking | integer | 排名 |
| space | enum | 小说篇幅，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#book_length) 可选值：{ BOOK_LENGTH_LONG, BOOK_LENGTH_MIDDLE_LONG, BOOK_LENGTH_SHORT } |
| if_new_book | string | 是否为新书，填"是"或者"否" |
| chapter_count | integer | 章节数 |
| started_pay_chapter | integer | 起始付费章节 |
| pay_count | integer | 累计付费次数 |
| pay_amount | float | 累计付费金额，单位元 最小值 0，最大值 9999999999，最多保留 2 位小数 |
| first_pay_amount | float | 首次付费金额，单位元 最小值 0，最大值 9999999999，最多保留 2 位小数 |
| least_pay_amount | float | 最低付费金额，单位元 最小值 0，最大值 9999999999，最多保留 2 位小数 |
| onetime_pay_amount | float | 一次性付费金额，单位元 最小值 0，最大值 9999999999，最多保留 2 位小数 |
| latest_renew_time | string | 书籍最新更新时间 字段长度最小 19 字节，长度最大 20 字节 |
| latest_renew_chapter | integer | 最后一次更新章节 |
| share_count | integer | 分享数 |
| download_count | integer | 下载数 |
| paying_reader_count | integer | 分享数 |
| story_school | string | 小说流派，用于描述小说的整体风格/派别 - 示例：甜宠文,女婿文,兵王文,神医文,乡村文,穿越文,修仙文 字段长度最小 1 字节，长度最大 30 字节 |
| actor_list | string | 主演姓名，男女主演的姓名（真名）；填写格式为：xxx;xxx 字段长度最小 2 字节，长度最大 2048 字节 |
| character_list | string | 角色名，剧中重要角色的名字；填写格式为：xxx;xxx 字段长度最小 2 字节，长度最大 2048 字节 |
| episode_count | integer | 整部短剧集数 |
| story_theme | string | 主题，是作品故事的核心内容和基本框架，具有一定的普遍性和代表性。示例：玄幻仙侠,奇幻脑洞,古代历史,现代言情,言情,年代爱情，- 多个标签可用英文;隔开 字段长度最小 2 字节，长度最大 2048 字节 |
| story_role_identity | string | 角色身份，小说主要人物身份 - 示例：总裁,兵王,赘婿,少爷,皇帝,王妃,摄政王,嫡女,医妃,公主 - 多个标签可用英文;隔开 字段长度最小 1 字节，长度最大 30 字节 |
| story_role_image | string | 角色形象，小说、短剧主要人物形象 - 示例：花心,专情,萌系,玩世不恭,杀伐果断,腹黑,傲娇,霸道 - 多个标签可用英文;隔开 字段长度最小 1 字节，长度最大 30 字节 |
| story_era | string | 时代背景，小说、短剧故事发生的时代背景 - 示例：现代,古代,穿越 - 多个标签可用英文;隔开 字段长度最小 1 字节，长度最大 30 字节 |
| story_scene | string | 故事场景，小说故事发生的场景描述 - 示例：豪宅,医院,豪车,婚房,宴会,王府,皇宫,战场,深宫 - 多个标签可用英文;隔开 字段长度最小 1 字节，长度最大 30 字节 |
| story_plot | string | 小说的故事情节描述，示例：豪门恩怨,逃婚,乡村爱情,失忆,一胎多宝,入赘豪门,复仇,车祸,破产 - 多个标签可用英文;隔开 字段长度最小 1 字节，长度最大 30 字节 |
| story_style | string | 小说的风格描述，示例：情色,纯爱,搞笑,悲伤,温馨,爽文,苦恋,恐怖 - 多个标签可用英文;隔开 字段长度最小 1 字节，长度最大 30 字节 |
| authorization_status | enum | 作品授权状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#authorization_status) 可选值：{ AUTHORIZATION_STATUS_EXCLUSIVE, AUTHORIZATION_STATUS_NON_EXCLUSIVE } |
| originality | enum | 作品原创性，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#originality) 可选值：{ ORIGINALITY_YES, ORIGINALITY_NO } |
| update_frequency | enum | 更新频率，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#update_frequency) 可选值：{ UPDATE_DAILY, UPDATE_WEEKLY, UPDATE_MULTI_WEEKLY, UPDATE_ONE_WEEK, UPDATE_MULTI_FORTNIGHT, UPDATE_MONTHLY, UPDATE_MULTI_MONTHLY, UPDATE_RANDOM } |
| play_form | enum | 播讲形式，作品展现形式，主要用于音频类作品，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#play_form) 可选值：{ PLAY_FORM_BY_ONE, PLAY_FORM_BY_TWO, PLAY_FORM_BY_MULTI } |
| play_author | string | 播讲人，作品讲述者，主要用于音频类作品 - 示例：易中天,刘心武 - 多个标签可用英文;隔开 字段长度最小 1 字节，长度最大 30 字节 |
| play_voice | enum | 作品配音，作品配音来源，主要用于音频类和漫画类作品，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#play_voice) 可选值：{ PLAY_VOICE_SYSTEM, PLAY_VOICE_NORMAL, PLAY_VOICE_PROFESSIONAL } |
| production_source | enum | 内容来源，作品内容来源，主要用于音频类和漫画类作品，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#production_source) 可选值：{ PRODUCTION_SOURCE_UGC, PRODUCTION_SOURCE_PGC, PRODUCTION_SOURCE_PUGC } |
| production_place | enum | 内容产地，作品产地，主要用于漫画类作品，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#production_place) 可选值：{ PRODUCTION_PLACE_JP, PRODUCTION_PLACE_RK, PRODUCTION_PLACE_US, PRODUCTION_PLACE_CN, PRODUCTION_PLACE_OTHER } |
| cartoon_color | enum | 漫画色彩，作品产地，主要用于漫画类作品，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cartoon_color) 可选值：{ CARTOON_COLOR_MULTI, CARTOON_COLOR_BLACK_WHITE } |
| max_quota_v2 | enum | 最高额度，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#max_quota_enum) 可选值：{ MAX_QUOTA_5_LOW, MAX_QUOTA_10, MAX_QUOTA_15, MAX_QUOTA_20, MAX_QUOTA_30, MAX_QUOTA_50, MAX_QUOTA_100, MAX_QUOTA_300, MAX_QUOTA_300_HIGH } |
| standard_catalog_product_hash_id | integer | 标品库商品 id |
| custom_url | string | 自定义商品链接 1 字段长度最小 1 字节，长度最大 100 字节 |
| additional_custom_url | string | 自定义商品链接 2 字段长度最小 1 字节，长度最大 100 字节 |
| product_barcode | string | 商品条码 字段长度最小 1 字节，长度最大 100 字节 |
| business_price | enum | 商务服务价格，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#business_price) 可选值：{ BUSINESS_PRICE_FREE, BUSINESS_PRICE_1_TO_50, BUSINESS_PRICE_51_TO_100, BUSINESS_PRICE_101_TO_200, BUSINESS_PRICE_201_TO_1000, BUSINESS_PRICE_1001_TO_3000, BUSINESS_PRICE_3001_TO_5000, BUSINESS_PRICE_5001_TO_8000, BUSINESS_PRICE_8001_TO_12000, BUSINESS_PRICE_OUT_12000 } |
| initial_total_investment | enum | 首次投资总额，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#initial_total_investment) 可选值：{ INITIAL_TOTAL_INVESTMENT_FREE, INITIAL_TOTAL_INVESTMENT_IN_10W, INITIAL_TOTAL_INVESTMENT_10W_TO_30W, INITIAL_TOTAL_INVESTMENT_30W_TO_50W, INITIAL_TOTAL_INVESTMENT_50W_TO_100W, INITIAL_TOTAL_INVESTMENT_OUT_100W } |
| business_audience | enum | 受众，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#business_audience) 可选值：{ BUSINESS_AUDIENCE_PERSONAL, BUSINESS_AUDIENCE_ENTERPRISE } |
| service_tag | string[] | 服务标签，如 七天无理由退货 包邮等 数组最大长度 100 字段长度最小 1 字节，长度最大 2048 字节 |

使用说明

## 行业特殊规则

### 电商行业商品库

| 参数 | 类型 | 电商字段特殊规则 |
| --- | --- | --- |
| product_name* | string | 商品名称. 不能为纯数字，字段长度最小 14 字节，最大 256 字节 |
| image_url* | string | 商品图片 URL. 字段长度最小 1 字节，最大 2048 字节，以 http 或 https 开头 |
| mobile_h5_page_url* | string | 移动 H5 落地页. 字段长度最小 1 字节，最大 2048 字节，以 http、https、fleamarket 开头，如 https://item.m.jd.com/product/10070813569723.html?extension_id=eyJhZCI6IiIsImNoIjoiIiwic2hvcCI6IiIsInNrdSI6IiIsInRzIjoiIiwidW5pcWlkIjoie1wiY2xpY2tfaWRcIjpcImU1MzUwMGFkLTkxYjktNDVmMy1iMjUxLTI4MzliOTg2ZWI0MVwiLFwicG9zX2lkXCI6XCIyMzczXCIsXCJzaWRcIjpcImEyYTZlMGE1LTU5MWQtNGQ0YS05OGQyLTc4ZTIwOTAzODY0ZlwiLFwic2t1X2lkXCI6XCIxMDA3MDgxMzU2OTcyM1wifSJ9 移动 H5 落地页和微信小程序落地页至少填一个 |
| mini_program_path* | string | 微信小程序落地页. 字段长度最小 1 字节，最大 2048 字节，即输入小程序链接，如：pages/views/index/index. 移动 H5 落地页和微信小程序落地页至少填一个，选择微信小程序落地页时，mini_program_path 和 mini_program_id 必填 |
| mini_program_id* | string | 微信小程序落 id. 字段长度最小 1 字节，最大 50 字节，即输入小程序 id，一般以 wx 开头，如 wx4a53121383fa2bf9 |
| first_category_name* | string | 一级分类名称. 字段长度最小 1 字节，最大 100 字节 |
| second_category_name* | string | 二级分类名称. 字段长度最小 1 字节，最大 100 字节 |
| third_category_name* | string | 三级分类名称. 字段长度最小 1 字节，最大 100 字节 |
| product_brand* | string | 品牌名称. 字段长度最小 1 字节，最大 100 字节.允许填无，不支持无意义单个特殊字符录入，如'-'、'['等 |
| custom_data* | string | 商品自定义属性. 字段长度最小 1 字节，最大 5000 字节.可以填写多项自定义属性，属性名称和属性值之间用英文冒号做分隔符，前一个属性和后一个属性之间用英文分号做分隔符。自定义属性的名称，可以用中文。例如：尺码:大号;适用人群:中青年群体 必填两个及以上的属性对，建议客户侧属性全部上报 |

### 短剧行业商品库

| 参数 | 类型 | 短剧字段特殊规则 |
| --- | --- | --- |
| author* | string | 作者/发布者/制片方/剧城. 字段长度最小 1 字节，长度最大 100 字节 |
| first_category_name* | string | 根据短剧受众人群填写，男频/女频. 字段长度最小 1 字节，长度最大 100 字节 |
| second_category_name* | string | 二级分类名称，根据短剧真实故事内容填写，例如爱情、悬疑、权谋等. 字段长度最小 1 字节，长度最大 100 字节 |
| description* | string | 短剧剧情描述，请正确上传剧目对应的真实简介内容. >20 个字符（中文算 2 个字符，英文算 1 个字符），长度最大 1 万字节 |
| video_url* | string | 短剧第一集视频链接。支持 MP4、MOV、AVI 格式，以 http 或 https 开头。为了获得更佳视觉效果，建议所有商品的视频具备相同的宽高比，并且尽量使宽高比接近 1:1（正方形）. 字段长度最小 1 字节，长度最大 2048 字节 |
| additional_video_url* | string[] | 短剧第 2 ～ 4 集的商品视频链 1、必须上传大于等于 3 个视频 URL 2、互相内容不一致，且和第一集不一致 3、确保 URL 链接可打开时间大于 7 天 4、链接命名注意不要带有空格 此字段内至多支持 10 个视频 url，通过重复新增并编写此字段的方式实现。其余要求同（video_url）字段。注意，为了正确制作创意模板，请严格按照二、三、四的顺序上传。 |
| image_url* | string | 商品图片 URL. 只支持 JPG, JPEG, GIF 和 PNG 格式，以 http 或 https 开头。由于商品图片可能会展示在创意中，为了获得更佳视觉效果，请确保所有商品的图片具备相同的宽高比，并且尽量使宽高比接近 1:1（正方形）。图片需能够准确展示商品，不能为纯色图片，且不能只展示纯文字。请勿提交超过 6400 万像素的图片或大于 5MB 的文件。为确保图片清晰、吸引更多用户，请尽量提供像素数量较高的图片。 只能填写一个 url 字段长度最小 1 字节，最大 2048 字节 |
| actor_list* | string | 主演姓名. 男女主演的姓名（真名）；填写格式为：xxx;xxx 字段长度最小 2 字节，长度最大 2048 字节 |
| character_list* | string | 角色名. 剧中重要角色的名字；填写格式为：xxx;xxx 字段长度最小 2 字节，长度最大 2048 字节 |
| episode_count* | integer | 整部短剧集数. 字段长度最小 1 字节，长度最大 10 字节 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/product_items/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": 111111111,
    "product_catalog_id": "<CATALOG_ID>",
    "feed_id": 980,
    "usage_info": {
        "inner_appid": []
    },
    "product_item_spec_list": [
        {
            "product_name": "aaa",
            "product_outer_id": "39526",
            "description": "测试商品描述 1",
            "created_time": "2019-01-01 02:01:00",
            "last_modified_time": "2019-01-03 01:01:00",
            "expiration_time": "2019-01-01 01:01:00",
            "image_url": "http://xxx11",
            "additional_image_url": [
                "http://img12.360buyimg.com/n1/jfs/t1/28929/10/8906/159902/5c7a994eEbd478ee9/83eaee0f152efea8.jpg",
                "http://img12.360buyimg.com/n1/jfs/t1/21918/1/9053/132283/5c7a993fE01f4f607/5c0a3661650bf986.jpg",
                "http://img12.360buyimg.com/n1/jfs/t1/23586/23/8911/151874/5c7a993fE10c58c15/f220fa3583c3458b.jpg"
            ],
            "hidden_landing_img_url": [
                "http://img12.360buyimg.com/n1/jfs/t1/28929/10/8906/159902/5c7a994eEbd478ee9/83eaee0f152efea8.jpg",
                "http://img12.360buyimg.com/n1/jfs/t1/21918/1/9053/132283/5c7a993fE01f4f607/5c0a3661650bf986.jpg",
                "http://img12.360buyimg.com/n1/jfs/t1/23586/23/8911/151874/5c7a993fE10c58c15/f220fa3583c3458b.jpg"
            ],
            "standard_catalog_product_hash_id": 0,
            "video_url": "http://vidoe",
            "additional_video_url": [
                "http://addioional video 1",
                "http://addioional video 2",
                "http://addioional video 3"
            ],
            "pc_page_url": "https://addata.jd.com/fcgi-bin/jdjump?turl=http%3A%2F%2Fre.jd.com%2Flist%2Fitem%2F1349-42532700531.html%3Fre_dcp%3D2xc%26gaid%3D5000000000_1000001%26gsid%3D1",
            "mobile_page_url": "http://mobile",
            "android_page_url": "http://android",
            "ios_page_url": "http://ios",
            "wechat_page_url": "http://wechat",
            "additional_mobile_page_url": "http://mobile additional",
            "additional_android_page_url": "http://android additional",
            "additional_ios_page_url": "http://ios additional",
            "additional_wechat_page_url": "http://wechat additional",
            "mini_program_id": "mini id1",
            "mini_program_path": "mini1 path",
            "additional_mini_program_id": "mini id2",
            "additional_mini_program_path": "mini2 path",
            "universal_link": "universal",
            "additional_universal_link": "additional universal",
            "product_short_name": "shortName",
            "price": 123.01,
            "original_price": 1234.02,
            "discount": 12345.04,
            "sale_price": 123456.03,
            "start_time": "2019-01-01 01:02:00",
            "end_time": "2019-01-01 01:03:00",
            "sales_volume": 456,
            "stock_volume": 4567,
            "slogan": "广告语",
            "custom_label": [
                "http://label 1",
                "http://label 2",
                "http://label 3"
            ],
            "first_category_id": 1,
            "first_category_name": "catalogName 1",
            "second_category_id": 2,
            "second_category_name": "catalogName 2",
            "third_category_id": 3,
            "third_category_name": "catalogName 3",
            "fourth_category_id": 4,
            "fourth_category_name": "catalogName 4",
            "brand_id": 789,
            "brand_name": "品牌名称",
            "brand_url": "http://brandUrl",
            "promotion_id": 7890,
            "promotion_name": "促销名称",
            "promotion_url": "http://protmotionUrl",
            "shop_id": 78901,
            "shop_name": "店铺名称",
            "shop_url": "http://shopUrl",
            "shop_custom_info": "门店自定义",
            "shop_id_list": [
                "id list 11",
                "id list 2",
                "id list 3"
            ],
            "product_view_count": 18402,
            "favorite_count": 18403,
            "rating": 147,
            "favourable_comment_rate": 258,
            "product_owner_type": "PRODUCT_OWNER_TYPE_SOP",
            "author": "author1",
            "full_text": "This is full text",
            "semantic_labels": [
                "novel",
                "exciting",
                "fantastic"
            ],
            "like_count": 123,
            "forward_count": 234,
            "comment_count": 12,
            "author_fans_count": 10000,
            "artist": [
                "aaa",
                "bbb"
            ],
            "chapter_count": 10,
            "serial_status": "SERIAL_STATUS_FINISH",
            "if_new_book": "是",
            "trends": 10,
            "pay_status": "PAY_STATUS_FREE",
            "word_count": 100,
            "ratings": 4.52,
            "reader_count": 444,
            "recommended_votes_count": 555,
            "reward_count": 333,
            "space": "BOOK_LENGTH_SHORT",
            "started_pay_chapter": 1,
            "pay_count": 11,
            "pay_amount": 5.44,
            "first_pay_amount": 3.3,
            "least_pay_amount": 0.01,
            "onetime_pay_amount": 6.66,
            "latest_renew_time": "2021-12-12 00:00:01",
            "latest_renew_chapter": 4,
            "share_count": 100,
            "download_count": 10,
            "paying_reader_count": 100,
            "story_school": "甜宠文甜宠文甜宠文甜",
            "story_role_identity": "甜宠文甜宠文甜宠文甜",
            "story_role_image": "甜宠文甜宠文甜宠文甜 a",
            "story_era": "甜宠文甜宠文甜宠文甜",
            "story_scene": "甜宠文甜宠文甜宠文甜",
            "story_plot": "甜宠文甜宠文甜宠文甜",
            "story_style": "甜宠文甜宠文甜宠文甜",
            "authorization_status": "AUTHORIZATION_STATUS_EXCLUSIVE",
            "originality": "ORIGINALITY_YES",
            "update_frequency": "UPDATE_DAILY",
            "play_form": "PLAY_FORM_BY_ONE",
            "play_author": "sb",
            "play_voice": "PLAY_VOICE_SYSTEM",
            "production_source": "PRODUCTION_SOURCE_UGC",
            "production_place": "PRODUCTION_PLACE_CN",
            "cartoon_color": "CARTOON_COLOR_BLACK_WHITE",
            "ranking": 1,
            "book_json": {
                "chapters": [
                    {
                        "subtitle": "第 1 章",
                        "chapterid": 1,
                        "text": [
                            "你好",
                            "这是",
                            "小说",
                            "章节",
                            "第一章"
                        ]
                    },
                    {
                        "subtitle": "第 2 章",
                        "chapterid": 2,
                        "text": [
                            "你好",
                            "这是",
                            "小说",
                            "章节",
                            "第二章"
                        ]
                    },
                    {
                        "subtitle": "第 3 章",
                        "chapterid": 3,
                        "text": [
                            "你好",
                            "这是",
                            "小说",
                            "章节",
                            "第三章"
                        ]
                    },
                    {
                        "subtitle": "第 4 章",
                        "chapterid": 4,
                        "text": [
                            "你好",
                            "这是",
                            "小说",
                            "章节",
                            "第四章"
                        ]
                    }
                ]
            },
            "custom_url": "http://custom_url",
            "additional_custom_url": "http://additional_custom_url",
            "product_barcode": "1234567890"
        }
    ]
}'
curl 'https://api.e.qq.com/v3.0/product_items/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": 111111111,
    "product_catalog_id": "<CATALOG_ID>",
    "feed_id": 980,
    "usage_info": {
        "inner_appid": []
    },
    "product_item_spec_list": [
        {
            "product_name": "aaa",
            "product_outer_id": "39526",
            "description": "测试商品描述 1",
            "created_time": "2019-01-01 02:01:00",
            "last_modified_time": "2019-01-03 01:01:00",
            "expiration_time": "2019-01-01 01:01:00",
            "image_url": "http://xxx11",
            "additional_image_url": [
                "http://img12.360buyimg.com/n1/jfs/t1/28929/10/8906/159902/5c7a994eEbd478ee9/83eaee0f152efea8.jpg",
                "http://img12.360buyimg.com/n1/jfs/t1/21918/1/9053/132283/5c7a993fE01f4f607/5c0a3661650bf986.jpg",
                "http://img12.360buyimg.com/n1/jfs/t1/23586/23/8911/151874/5c7a993fE10c58c15/f220fa3583c3458b.jpg"
            ],
            "hidden_landing_img_url": [
                "http://img12.360buyimg.com/n1/jfs/t1/28929/10/8906/159902/5c7a994eEbd478ee9/83eaee0f152efea8.jpg",
                "http://img12.360buyimg.com/n1/jfs/t1/21918/1/9053/132283/5c7a993fE01f4f607/5c0a3661650bf986.jpg",
                "http://img12.360buyimg.com/n1/jfs/t1/23586/23/8911/151874/5c7a993fE10c58c15/f220fa3583c3458b.jpg"
            ],
            "standard_catalog_product_hash_id": 0,
            "video_url": "http://vidoe",
            "additional_video_url": [
                "http://addioional video 1",
                "http://addioional video 2",
                "http://addioional video 3"
            ],
            "pc_page_url": "https://addata.jd.com/fcgi-bin/jdjump?turl=http%3A%2F%2Fre.jd.com%2Flist%2Fitem%2F1349-42532700531.html%3Fre_dcp%3D2xc%26gaid%3D5000000000_1000001%26gsid%3D1",
            "mobile_page_url": "http://mobile",
            "android_page_url": "http://android",
            "ios_page_url": "http://ios",
            "wechat_page_url": "http://wechat",
            "additional_mobile_page_url": "http://mobile additional",
            "additional_android_page_url": "http://android additional",
            "additional_ios_page_url": "http://ios additional",
            "additional_wechat_page_url": "http://wechat additional",
            "mini_program_id": "mini id1",
            "mini_program_path": "mini1 path",
            "additional_mini_program_id": "mini id2",
            "additional_mini_program_path": "mini2 path",
            "universal_link": "universal",
            "additional_universal_link": "additional universal",
            "product_short_name": "shortName",
            "price": 123.01,
            "original_price": 1234.02,
            "discount": 12345.04,
            "sale_price": 123456.03,
            "start_time": "2019-01-01 01:02:00",
            "end_time": "2019-01-01 01:03:00",
            "sales_volume": 456,
            "stock_volume": 4567,
            "slogan": "广告语",
            "custom_label": [
                "http://label 1",
                "http://label 2",
                "http://label 3"
            ],
            "first_category_id": 1,
            "first_category_name": "catalogName 1",
            "second_category_id": 2,
            "second_category_name": "catalogName 2",
            "third_category_id": 3,
            "third_category_name": "catalogName 3",
            "fourth_category_id": 4,
            "fourth_category_name": "catalogName 4",
            "brand_id": 789,
            "brand_name": "品牌名称",
            "brand_url": "http://brandUrl",
            "promotion_id": 7890,
            "promotion_name": "促销名称",
            "promotion_url": "http://protmotionUrl",
            "shop_id": 78901,
            "shop_name": "店铺名称",
            "shop_url": "http://shopUrl",
            "shop_custom_info": "门店自定义",
            "shop_id_list": [
                "id list 11",
                "id list 2",
                "id list 3"
            ],
            "product_view_count": 18402,
            "favorite_count": 18403,
            "rating": 147,
            "favourable_comment_rate": 258,
            "product_owner_type": "PRODUCT_OWNER_TYPE_SOP",
            "author": "author1",
            "full_text": "This is full text",
            "semantic_labels": [
                "novel",
                "exciting",
                "fantastic"
            ],
            "like_count": 123,
            "forward_count": 234,
            "comment_count": 12,
            "author_fans_count": 10000,
            "artist": [
                "aaa",
                "bbb"
            ],
            "chapter_count": 10,
            "serial_status": "SERIAL_STATUS_FINISH",
            "if_new_book": "是",
            "trends": 10,
            "pay_status": "PAY_STATUS_FREE",
            "word_count": 100,
            "ratings": 4.52,
            "reader_count": 444,
            "recommended_votes_count": 555,
            "reward_count": 333,
            "space": "BOOK_LENGTH_SHORT",
            "started_pay_chapter": 1,
            "pay_count": 11,
            "pay_amount": 5.44,
            "first_pay_amount": 3.3,
            "least_pay_amount": 0.01,
            "onetime_pay_amount": 6.66,
            "latest_renew_time": "2021-12-12 00:00:01",
            "latest_renew_chapter": 4,
            "share_count": 100,
            "download_count": 10,
            "paying_reader_count": 100,
            "story_school": "甜宠文甜宠文甜宠文甜",
            "story_role_identity": "甜宠文甜宠文甜宠文甜",
            "story_role_image": "甜宠文甜宠文甜宠文甜 a",
            "story_era": "甜宠文甜宠文甜宠文甜",
            "story_scene": "甜宠文甜宠文甜宠文甜",
            "story_plot": "甜宠文甜宠文甜宠文甜",
            "story_style": "甜宠文甜宠文甜宠文甜",
            "authorization_status": "AUTHORIZATION_STATUS_EXCLUSIVE",
            "originality": "ORIGINALITY_YES",
            "update_frequency": "UPDATE_DAILY",
            "play_form": "PLAY_FORM_BY_ONE",
            "play_author": "sb",
            "play_voice": "PLAY_VOICE_SYSTEM",
            "production_source": "PRODUCTION_SOURCE_UGC",
            "production_place": "PRODUCTION_PLACE_CN",
            "cartoon_color": "CARTOON_COLOR_BLACK_WHITE",
            "ranking": 1,
            "book_json": {
                "chapters": [
                    {
                        "subtitle": "第 1 章",
                        "chapterid": 1,
                        "text": [
                            "你好",
                            "这是",
                            "小说",
                            "章节",
                            "第一章"
                        ]
                    },
                    {
                        "subtitle": "第 2 章",
                        "chapterid": 2,
                        "text": [
                            "你好",
                            "这是",
                            "小说",
                            "章节",
                            "第二章"
                        ]
                    },
                    {
                        "subtitle": "第 3 章",
                        "chapterid": 3,
                        "text": [
                            "你好",
                            "这是",
                            "小说",
                            "章节",
                            "第三章"
                        ]
                    },
                    {
                        "subtitle": "第 4 章",
                        "chapterid": 4,
                        "text": [
                            "你好",
                            "这是",
                            "小说",
                            "章节",
                            "第四章"
                        ]
                    }
                ]
            },
            "custom_url": "http://custom_url",
            "additional_custom_url": "http://additional_custom_url",
            "product_barcode": "1234567890"
        }
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| product_id | string | 商品 id |
| product_outer_id | string | 广告主商品 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "product_id": 39526,
                "product_outer_id": "xly_123"
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
