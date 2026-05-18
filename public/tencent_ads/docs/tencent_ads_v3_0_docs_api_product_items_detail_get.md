---
title: 获取商品详情 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/product_items_detail/get
doc_id: tencent_ads_v3_0_docs_api_product_items_detail_get
source_id: tencent_ads_v3_0_docs_api_product_items_detail_get
---
# 获取商品详情 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | product_items_detail/get |
| 请求方法 | GET |

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
| product_catalog_id* | integer | 商品库 id |
| product_outer_id* | string | 广告主商品 id 字段长度最小 1 字节，长度最大 255 字节 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/product_items_detail/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'product_catalog_id=101' \
-d 'product_outer_id=39526'
curl -v -G 'https://api.e.qq.com/v3.0/product_items_detail/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'product_catalog_id=101' \
-d 'product_outer_id=39526'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| feed_id | integer | 商品文件 id |
| system_status | enum | 商品审核状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_audit_status) |
| reject_message | string | 商品审核结果 |
| spu_link_status | enum | spu 关联状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#spu_link_status) |
| product_verification_results | struct[] | 商品校验结果 |
| product_verification_status | enum | 商品校验结果状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#product_verification_status) |
| product_verification_message | string | 商品校验结果描述 |
| product_item_spec | struct | 商品信息 |
| product_outer_id | string | 广告主商品 id |
| product_name | string | 商品名称 |
| description | string | 商品描述 |
| created_time | string | 商品创建时间 |
| last_modified_time | string | 商品更新时间 |
| expiration_time | string | 商品下架时间 |
| image_url | string | 商品图片 URL |
| additional_image_url | string[] | 额外的商品图片 URL |
| hidden_landing_img_url | string[] | 蹊径动态落地页图片 url |
| video_duration | string | 商品视频长度 |
| video_url | string | 商品视频链接 |
| play_count | integer | 数字类型 |
| publish_time | string | 视频发布时间 |
| additional_video_url | string[] | 备用商品视频链接 |
| pc_page_url | string | PC 端落地页 |
| mobile_h5_page_url | string | 移动 H5 落地页 1 |
| android_page_url | string | Android 应用直达落地页 1 |
| ios_page_url | string | iOS 应用直达落地页 1 |
| wechat_page_url | string | 微信落地页 1 |
| additional_mobile_h5_page_url | string | 移动 H5 落地页 2 |
| additional_android_page_url | string | Android 应用直达落地页 2 |
| additional_ios_page_url | string | iOS 应用直达落地页 2 |
| additional_wechat_page_url | string | 微信落地页 2 |
| mini_program_id | string | 微信小程序 id1 |
| mini_program_path | string | 微信小程序路径 1 |
| additional_mini_program_id | string | 微信小程序 id2 |
| additional_mini_program_path | string | 微信小程序路径 2 |
| universal_link | string | IOS 通用落地页 |
| additional_universal_link | string | 备用 IOS 通用落地页 |
| product_short_name | string | 商品简称 |
| product_sale_status | enum | 商品状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#product_sale_online_status) |
| price | float | 商品日常售价，大于等于 0，至多 2 位小数 |
| original_price | float | 商品原售价，大于等于 0，至多 2 位小数 |
| discount | float | 商品折扣 |
| sale_price | float | 商品促销价格，大于等于 0，至多 2 位小数 |
| start_time | string | 促销价开始时间 |
| end_time | string | 促销价结束时间 |
| sales_volume | integer | 已售卖数 |
| stock_volume | integer | 库存数 |
| slogan | string | 广告语 |
| custom_label | string[] | 自定义标签 |
| first_category_id | integer | 一级分类 id |
| second_category_id | integer | 二级分类 id |
| third_category_id | integer | 三级分类 id |
| fourth_category_id | integer | 四级分类 id |
| first_category_name | string | 一级分类名称 |
| second_category_name | string | 二级分类名称 |
| third_category_name | string | 三级分类名称 |
| fourth_category_name | string | 四级分类名称 |
| brand_id | integer | 品牌 id |
| brand_name | string | 品牌名称 |
| brand_url | string | 品牌页 URL |
| promotion_id | integer | 活动档期 id |
| promotion_name | string | 活动档期名称 |
| promotion_url | string | 活动档期 URL 地址 |
| shop_id | integer | 店铺 id |
| shop_name | string | 店铺名称 |
| shop_url | string | 店铺 URL |
| shop_custom_info | string | 店铺自定义信息 |
| shop_id_list | string[] | 门店 id 列表 |
| product_view_count | integer | 商品详情页打开次数 |
| favorite_count | integer | 收藏用户数 |
| rating | float | 评分，小数点 2 位，取值 0~5 |
| favourable_comment_rate | float | 好评率，小数点 2 位，取值 0~1 |
| product_owner_type | enum | 商品所有者类型，“自营”，“商家”，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_product_owner_type) |
| author | string | 作者 |
| full_text | string | 全文内容 |
| like_count | integer | 点赞数 |
| forward_count | integer | 转发数 |
| comment_count | integer | 评论数 |
| author_fans_count | integer | 作者粉丝数 |
| semantic_labels | string[] | 语义标签 |
| detail_img | string[] | 图文详情描述 |
| high_info_tag | integer | 高信息度标示 |
| show_count | integer | 视频曝光次数 |
| play_rate | float | 视频播放率，小数点 2 位，取值 0~1 |
| make_money_online | string | 是否网赚 |
| live_broadcast | string | 是否直播 |
| platform_attribute | string | 平台属性 |
| custom_data | string | 商品自定义属性 |
| shooting_pic_count | integer | 拍摄张数 |
| fineedit_count | integer | 精修张数 |
| album_photo_count | integer | 入册张数 |
| album_count | integer | 相册数量 |
| frame_count | integer | 相框数量 |
| country | string | 所在国家 |
| province | string | 所在省份/州/直辖市 |
| city | string | 所在城市 |
| district | string | 所在区县 |
| address | string[] | 所在详细地址 |
| shooting_scene_in_count | enum | 内景数量，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#shooting_scene_in_count) |
| shooting_scene_out_count | enum | 外景数量，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#shooting_scene_out_count) |
| bride_clothing | enum | 新娘服装，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#bride_clothing) |
| groom_clothing | enum | 新郎服装，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#groom_clothing) |
| cloth_count | enum | 服装套数，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cloth_count) |
| shooting_scene | enum | 拍摄场景，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#shooting_scene) |
| set_special | string[] | 套餐亮点，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#set_special) |
| shooting_style_com | string[] | 拍摄风格，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#shooting_style_com) |
| shooting_scene_detail | string[] | 拍摄场景，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#shooting_scene_detail) |
| tour_place_domestic | enum | 国内拍摄地，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#tour_place_domestic) |
| tour_place_foreign | enum | 国外拍摄地，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#tour_place_foreign) |
| max_insurance_quota | float | 最高保额，大于等于 0，至多 2 位小数 |
| first_month_insurance_fee | float | 首月保费，大于等于 0，至多 2 位小数 |
| max_quota | float | 最高额度，大于等于 0，至多 2 位小数 |
| annualized_rate_of_return | float | 年化收益率，大于等于 0，至多 4 位小数 |
| risk_type | enum | 风险等级类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#risk_type_status) |
| artist | string[] | 艺人 |
| trends | integer | 热度，主要表明书籍在平台的热度，参考值包括在读人数、人气值等 |
| pay_status | enum | 书籍的付费状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#pay_status) |
| word_count | integer | 小说字数 |
| serial_status | enum | 书籍的连载状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#serial_status) |
| book_json | struct | 小说章节内容 |
| chapters | struct[] | 小说章节列表 |
| subtitle | string | 章节标题 |
| chapterid | integer | 章节 id |
| text | string[] | 章节内容 |
| ratings | float | 评分 |
| reader_count | integer | 在读人数 |
| recommended_votes_count | integer | 推荐数 |
| reward_count | integer | 打赏数 |
| ranking | integer | 排名 |
| space | enum | 小说篇幅，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#book_length) |
| if_new_book | string | 是否为新书 |
| chapter_count | integer | 章节数 |
| started_pay_chapter | integer | 起始付费章节 |
| pay_count | integer | 累计付费次数 |
| pay_amount | float | 累计付费金额，单位元 |
| first_pay_amount | float | 首次付费金额，单位元 |
| least_pay_amount | float | 最低付费金额，单位元 |
| onetime_pay_amount | float | 一次性付费金额，单位元 |
| latest_renew_time | string | 书籍最新更新时间 |
| latest_renew_chapter | integer | 最后一次更新章节 |
| share_count | integer | 分享数 |
| download_count | integer | 下载数 |
| paying_reader_count | integer | 分享数 |
| story_school | string | 小说流派，用于描述小说的整体风格/派别 - 示例：甜宠文,女婿文,兵王文,神医文,乡村文,穿越文,修仙文 |
| story_role_identity | string | 角色身份，小说主要人物身份 - 示例：总裁,兵王,赘婿,少爷,皇帝,王妃,摄政王,嫡女,医妃,公主 - 多个标签可用英文;隔开 |
| story_role_image | string | 角色形象，小说主要人物形象 - 示例：花心,专情,萌系,玩世不恭,杀伐果断,腹黑,傲娇,霸道 - 多个标签可用英文;隔开 |
| story_era | string | 时代背景，小说故事发生的时代背景 - 示例：现代,古代,穿越 - 多个标签可用英文;隔开 |
| story_scene | string | 故事场景，小说故事发生的场景描述 - 示例：豪宅,医院,豪车,婚房,宴会,王府,皇宫,战场,深宫 - 多个标签可用英文;隔开 |
| story_plot | string | 小说的故事情节描述，示例：豪门恩怨,逃婚,乡村爱情,失忆,一胎多宝,入赘豪门,复仇,车祸,破产 - 多个标签可用英文;隔开 |
| story_style | string | 小说的风格描述，示例：情色,纯爱,搞笑,悲伤,温馨,爽文,苦恋,恐怖 - 多个标签可用英文;隔开 |
| authorization_status | enum | 作品授权状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#authorization_status) |
| originality | enum | 作品原创性，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#originality) |
| update_frequency | enum | 更新频率，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#update_frequency) |
| play_form | enum | 播讲形式，作品展现形式，主要用于音频类作品，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#play_form) |
| play_author | string | 播讲人，作品讲述者，主要用于音频类作品 - 示例：易中天,刘心武 - 多个标签可用英文;隔开 |
| play_voice | enum | 作品配音，作品配音来源，主要用于音频类和漫画类作品，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#play_voice) |
| production_source | enum | 内容来源，作品内容来源，主要用于音频类和漫画类作品，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#production_source) |
| production_place | enum | 内容产地，作品产地，主要用于漫画类作品，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#production_place) |
| cartoon_color | enum | 漫画色彩，作品产地，主要用于漫画类作品，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#cartoon_color) |
| max_quota_v2 | enum | 最高额度，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#max_quota_enum) |
| standard_catalog_product_hash_id | integer | 标品库商品 id |
| custom_url | string | 自定义商品链接 1 |
| additional_custom_url | string | 自定义商品链接 2 |
| product_barcode | string | 商品条码 |
| business_price | enum | 商务服务价格，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#business_price) |
| initial_total_investment | enum | 首次投资总额，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#initial_total_investment) |
| business_audience | enum | 受众，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#business_audience) |
| advertisement_images | string[] | 商品直投图片 |
| ad_brand_url | string | 商品投放品牌图片 |
| ad_direct_video_list | struct[] | 商品直投视频 |
| video_url | string | 商品视频链接 |
| cover_image_url | string | 商品视频封面链接 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "feed_id": 980,
        "system_status": "PRODUCT_STATUS_REJECTED",
        "reject_message": "自动审核不通过，文案命中“创意”和“落地页”的 1 级或 2 级黑词：aaa",
        "product_verification_results": [],
        "product_item_spec": {
            "product_outer_id": 39526,
            "created_time": 1491019858,
            "last_modified_time": 1491098468,
            "additional_image_url": [],
            "hidden_landing_img_url": [],
            "additional_video_url": [],
            "custom_label": [],
            "shop_id_list": [],
            "semantic_labels": [],
            "detail_img": [],
            "address": [],
            "set_special": [],
            "shooting_style_com": [],
            "shooting_scene_detail": [],
            "artist": [],
            "book_json": {
                "chapters": [
                    {
                        "text": []
                    }
                ]
            },
            "advertisement_images": [],
            "ad_direct_video_list": []
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
