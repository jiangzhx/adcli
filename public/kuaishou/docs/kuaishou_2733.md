---
title: 获取商品列表(游标)
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2733&menuId=3466
doc_id: kuaishou_2733
source_id: kuaishou_2733
---
# 获取商品列表(游标)

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2733 |
| documentType | 2 |
| version | 0.0.5 |
| bizName | 效果广告 |
| createTime | 2025-10-20T13:30:46.118Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/dpa/product/cursor_query |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 0 | 广告主账号ID |  |
| library_id | Long | 是 | 0 | 商品库ID |  |
| cursor | String |  |  | 游标 | 首次查询后返回，后续滚动查询必填，有效期3分钟 |
| limit | Integer |  | 0 | 查询最大数据量 | 最大值500，无cursor时必填，有cursor时非必填且不生效 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 返回状态码 |  |
| data | AdGatewayDpaProductBatchQueryResponse |  |  | 返回数据内容 |  |
| - product_info | AdGatewayDpaProductQueryResponse[] |  |  | 商品信息集 |  |
| - outer_id | String |  |  | 广告主商品编号 |  |
| - library_id | Long |  | 0 | 商品库ID |  |
| - name | String |  |  | 商品名称 |  |
| - title | String |  |  | 商品标题 |  |
| - description | String |  |  | 商品描述 |  |
| - condition | String |  |  | 商品新旧情况: 全新, 翻新, 二手 |  |
| - label | String[] |  |  | 商品标签 |  |
| - first_category_id | Long |  | 0 | 商品一级类目ID |  |
| - first_category_name | String |  |  | 商品一级类目名称 |  |
| - second_category_id | Long |  | 0 | 商品二级类目ID |  |
| - second_category_name | String |  |  | 商品二级类目名称 |  |
| - third_category_id | Long |  | 0 | 商品三级类目ID |  |
| - third_category_name | String |  |  | 商品三级类目名称 |  |
| - main_image_url | String[] |  |  | 商品主图URL(仅支持单个) |  |
| - image_urls | String[] |  |  | 商品副图URLs |  |
| - video | VideoInfo |  |  | 商品视频信息 |  |
| - url | String |  |  | 视频URL |  |
| - width | Integer |  | 0 | 视频宽度 | 默认为0 |
| - height | Integer |  | 0 | 视频高度 | 默认为0 |
| - duration | Integer |  | 0 | 视频时长 | 默认为0 |
| - ratio | Integer |  | 0 | 视频码率 | 默认为0 |
| - target_urls | UrlParamSneak |  |  | 商品链接信息 |  |
| - pc | String |  |  | PC端商品落地页URL | 需使用https协议 |
| - mobile | String |  |  | H5页面商品落地页URL | 需使用https协议 |
| - android_app | String |  |  | Android应用商品直达吊起链接 |  |
| - ios_app | String |  |  | IOS应用商品直达吊起链接 |  |
| - universal_link | String |  |  | IOS应用商品吊起ulink链接 |  |
| - brand_name | String |  |  | 商品品牌名 |  |
| - brand_id | String |  |  | 商品品牌ID |  |
| - en_brand_name | String |  |  | 商品英文品牌名 |  |
| - price | Double |  | 0.0 | 商品现价 |  |
| - value | Double |  | 0.0 | 商品原价 |  |
| - saving | Double |  | 0.0 | 商品优惠价格 |  |
| - discount | Double |  | 0.0 | 商品折扣 |  |
| - age_v2 | String[] |  |  | 商品定向年龄: 18-23, 24-30, 31-40, 41-49, 50+ |  |
| - gender | Integer |  | 0 | 商品定向性别: 0-不限, 1-男, 2-女 |  |
| - province_v2 | String[] |  |  | 商品定向省份 |  |
| - city_v2 | String[] |  |  | 商品定向城市 |  |
| - stock | Integer |  | 0 | 商品库存: 0-无, 1-有 |  |
| - status | Integer |  | 0 | 商品投放状态: 0-不可投放, 1-可投放 |  |
| - check_status | Integer |  | 0 | 商品校验(接入)状态: 0-成功, 1-失败 |  |
| - check_error | String[] |  |  | 商品校验失败原因 |  |
| - online_time | Long |  | 0 | 商品上线时间(毫秒时间戳) |  |
| - offline_time | Long |  | 0 | 商品下线时间(毫秒时间戳) |  |
| - update_time | Long |  | 0 | 商品更新时间(毫秒时间戳) |  |
| - create_time | Long |  | 0 | 商品创建时间(毫秒时间戳) |  |
| - slogan | String |  |  | 商品广告语 |  |
| - industry_id | Integer |  | 0 | 商品行业ID: 1-电商, 4-房产, 5-书库, 7-车型, 8-视频音乐 |  |
| - sub_industry_id | String |  |  | 商品二级行业ID: 小说行业: 1-网络小说, 2-漫画, 3-有声读物, 4-网赚; 音视频行业: 电影, 动漫, 纪录片, 综艺, 电视剧, 音乐, 直播, 网赚, 其他 |  |
| - industry_name | String |  |  | 商品行业名称: 1-电商, 4-房产, 5-书库, 7-车型, 8-视频音乐 |  |
| - sub_industry_name | String |  |  | 商品二级行业名称: 小说行业: 1-网络小说, 2-漫画, 3-有声读物, 4-网赚; 音视频行业: 电影, 动漫, 纪录片, 综艺, 电视剧, 音乐, 直播, 网赚, 其他 |  |
| - product_id | Long |  | 0 | 商品ID |  |
| - stack_room_product_info | StackRoomProductInfoSneak |  |  | 小说行业商品特殊信息 |  |
| - book_id | String |  |  | 书籍id |  |
| - content | String |  |  | 章节内容 |  |
| - unit_price | Double |  | 0 | 单章价格，变现模式为付费时必填 |  |
| - max_charge | Double |  | 0 | 最高充值档位，变现模式为付费时必填 |  |
| - min_charge | Double |  | 0 | 最低充值档位，变现模式为付费时必填 |  |
| - chapter_count | Integer |  | 0 | 章节数量 |  |
| - author | String |  |  | 作者 |  |
| - extra_tags | String |  |  | 标签 |  |
| - theme | Integer |  | 0 | 主题(详见: https://docs.qingque.cn/s/home/eZQDJOM3GV-qQ4vNsEpaQ0qy2?identityId=F0DVUl94Gc) |  |
| - role | Integer |  | 0 | 角色(详见: https://docs.qingque.cn/s/home/eZQDJOM3GV-qQ4vNsEpaQ0qy2?identityId=F0DVUl94Gc) |  |
| - channel | Integer |  | 0 | 男女频: 171101-男频, 171102-女频, 171103-不限 |  |
| - finish_status | Integer |  | 0 | 完结状态: 1-未完结, 2-已完结 |  |
| - plot | Integer |  | 0 | 情节(详见: https://docs.qingque.cn/s/home/eZQDJOM3GV-qQ4vNsEpaQ0qy2?identityId=F0DVUl94Gc) |  |
| - origin_nation | Integer |  | 0 | 地域: 171201-国漫, 171202-日漫, 171203-韩漫, 171204-欧美漫 |  |
| - fiction_style | Integer |  | 0 | 风格: 171001-热血, 171002-恐怖, 171003-温馨, 171004-搞笑, 171005-其他 |  |
| - pay_status | Integer |  | 0 | 付费类型: 1-付费, 2-免费 |  |
| - is_audio_novel | Integer |  | 0 | 是否为有声小说: 1-有声, 2-非有声 |  |
| - chapter_name1 | String |  |  | 章节一名称 |  |
| - chapter_content1 | String |  |  | 章节一内容 |  |
| - chapter_name2 | String |  |  | 章节二名称 |  |
| - chapter_content2 | String |  |  | 章节二内容 |  |
| - chapter_name3 | String |  |  | 章节三名称 |  |
| - chapter_content3 | String |  |  | 章节三内容 |  |
| - long_and_short_stories | String |  |  | 书籍长短篇 |  |
| - book_city | String |  |  | 所属书城 |  |
| - start_paid_chapter | Integer |  |  | 起始付费章节 |  |
| - min_pay_amount | Integer |  |  | 最低付费金额 |  |
| - favorite_count | Long |  |  | 书籍收藏数 |  |
| - au_video_product_info | AuVideoProductInfoSneak |  |  | 音视频行业商品特殊信息 |  |
| - member_type | String |  |  | 会员类型：终身,年度,月度,周,天,无 |  |
| - discovery_mode | String |  |  | 变现模式：付费,免费 |  |
| - original_name | String |  |  | 漫改原著名称 |  |
| - source_category | String |  |  | 来源类别：小说改,漫画改,游戏改,短剧改,原生创作 |  |
| - make_method | String |  |  | 制作呈现方式：cg类,图片轮播类,沙雕类,AIGC类,常规动态漫 |  |
| - screen | String |  |  | 横竖屏：横屏,竖屏,横转竖屏 |  |
| - new_plots | String[] |  |  | 情节，可多选(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) |  |
| - new_themes | String[] |  |  | 题材，可多选(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) |  |
| - theme | String |  |  | 题材(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) |  |
| - origin_nation | String |  |  | 地域(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) |  |
| - album_name | String |  |  | 作品辑名称 |  |
| - release_date | Long |  | 0 | 发布日期(毫秒时间戳) |  |
| - author | String[] |  |  | 作者/导演 |  |
| - starring | String[] |  |  | 主演 |  |
| - album_sort | Integer |  |  | 所处作品辑中的顺序 |  |
| - score | Double |  | 0.0 | 评分 |  |
| - play_nums | Long |  | 0 | 播放次数 |  |
| - impression_nums | Long |  | 0 | 曝光次数 |  |
| - likes_nums | Long |  | 0 | 喜欢/点赞数 |  |
| - forward_nums | Long |  | 0 | 转发数 |  |
| - comment_nums | Long |  | 0 | 评论数 |  |
| - favorite_user_nums | Long |  | 0 | 收藏用户数 |  |
| - platform_attributes | String |  |  | 平台类型: 长视频， 短视频 |  |
| - author_fans | Long |  | 0 | 作者粉丝数 |  |
| - is_online_earning | Integer |  | 0 | 是否网赚: 1-是, 2-否 |  |
| - channel | String |  |  | 男女频道: 男频, 女频, 不限 |  |
| - plot | String |  |  | 情节(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) |  |
| - talent_id | String[] |  |  | 达人ID |  |
| - copyright | String |  |  | 版权方 |  |
| - episodes | Integer |  |  | 剧类集数 |  |
| - episode_duration | Integer |  |  | 单集剧集分钟时长 |  |
| - paid_episodes | Integer |  |  | 起始付费集数 |  |
| - unit_price | Double |  |  | 单集价格(元) |  |
| - annual_vip_type | Integer |  |  | 是否有年度会员：1-有，2-无 |  |
| - semiannual_vip_type | Integer |  |  | 是否有半年度会员：1-有，2-无 |  |
| - max_charge | Double |  |  | 最高充值档位(元) |  |
| - min_charge | Double |  |  | 最低充值档位(元) |  |
| - recommend_charge | Double |  |  | 推荐充值档位(元) |  |
| - panel_delivery_method | Integer |  |  | 面板投放方式：0-普通面板，1-小额面板，2-超小额面板 |  |
| - ecom_product_info | EcomProductInfoSneak |  |  | 电商行业商品特殊信息 |  |
| - mark | Double |  | 0.0 | 商品评分 |  |
| - bought | Integer |  | 0 | 商品销售量 |  |
| - comments | Integer |  | 0 | 商品评论数 |  |
| - spu_id | String |  |  | 标准商品单位ID |  |
| - condition | String |  |  | 商品新旧情况: 全新, 翻新, 二手 |  |
| - pharmaceutical_product_info | PharmaceuticalProductInfoSneak |  |  | 医药行业商品特殊字段 |  |
| - mark | Double |  | 0.0 | 商品评分 | 默认为0 |
| - bought | Integer |  | 0 | 商品销售量 | 默认为0 |
| - spu_id | String |  |  | 标准商品单位ID |  |
| - saving_start_time | Long |  | 1653380076740 | 减价开始时间 | 毫秒时间戳 |
| - saving_end_time | Long |  | 1653380182528 | 减价结束时间 | 毫秒时间戳 |
| - tel | String |  |  | 联系方式 |  |
| - nationality | String |  |  | 所在国家 |  |
| - district | String |  |  | 所在地区 |  |
| - region | String[] |  |  | 商圈区域 |  |
| - product_view_count | Integer |  | 0 | 商品详情页打开次数 |  |
| - favorite_count | Integer |  | 0 | 收藏用户数 |  |
| - favourable_comment_rate | Integer |  | 0 | 好评率 |  |
| - value_min | Double |  | 0.0 | 商品原价区间最小值 |  |
| - value_max | Double |  | 0.0 | 商品原价区间最大值 |  |
| - price_min | Double |  | 0.0 | 商品现价区间最小值 |  |
| - price_max | Double |  | 0.0 | 商品现价区间最大值 |  |
| - province | String |  |  | 省份 |  |
| - city | String |  |  | 城市 |  |
| - shop_cnt | String |  |  | 门店数量 |  |
| - health_price | String |  |  | 客单价 |  |
| - landing_url_type | String |  |  | 投放链接类型 |  |
| - product_indications | String |  |  | 商品适应症 |  |
| - adverse_reaction | String |  |  | 禁忌、不良反应 |  |
| - medical_institution_name | String |  |  | 医疗机构名称 |  |
| - recruitment_product_info | RecruitmentProductInfoSneak |  |  | 招聘行业商品特殊信息 |  |
| - has_car | String |  |  | 拥有车辆 | 不限，有车，无车 |
| - salary_of_year | String |  |  | 年薪 |  |
| - salary | String |  |  | 月薪 |  |
| - benefits | String[] |  |  | 福利待遇 | 八险一金, 带薪休假, 包吃, 包住, 年底双薪, 周末双休, 交通补助, 加班补助, 饭补, 话补, 房补, 其他 |
| - education | String |  |  | 学历要求 | 高中及以上, 技校及以上, 中专及以上, 大专及以上, 本科及以上, 硕士及以上, 博士及以上 |
| - service_year | String |  |  | 工作年限要求 | 1年以下, 1-2年, 3-5年, 6-7年, 8-10年, 10年以上 |
| - job_type | String |  |  | 工作类型 | 全职, 兼职, 实习 |
| - tel | String |  |  | 联系电话 |  |
| - mail | String |  |  | 联系邮箱 |  |
| - nationality | String |  |  | 所在国家 |  |
| - province | String |  |  | 所在省份 |  |
| - city | String |  |  | 所在城市 |  |
| - district | String |  |  | 所在地区 |  |
| - region | String[] |  |  | 所在商圈区域 |  |
| - headcount | Integer |  | 0 | 招聘人数 |  |
| - post_type | String |  |  | 岗位类型 |  |
| - regional_service_product_info | RegionalServiceProductInfoSneak |  |  | 区域服务行业商品特殊信息 |  |
| - saving_start_time | Long |  | 0 | 减价开始时间 | 毫秒时间戳 |
| - saving_end_time | Long |  | 0 | 减价结束时间 | 毫秒时间戳 |
| - tel | String |  |  | 联系电话 |  |
| - nationality | String |  |  | 所在国家 |  |
| - province | String |  |  | 所在省份 |  |
| - city | String |  |  | 所在城市 |  |
| - district | String |  |  | 所在地区 |  |
| - region | String[] |  |  | 所在商圈区域 |  |
| - product_view_count | Long |  | 0 | 商品详情页打开次数 |  |
| - favorite_count | Long |  | 0 | 收藏用户数 |  |
| - favourable_comment_rate | Long |  | 0 | 好评率 |  |
| - mark | Double |  | 0.0 | 评分 | 默认为0 |
| - bought | Integer |  | 0 | 购买量 | 默认为0 |
| - spu_id | String |  |  | 外部商品附加ID |  |
| - province_id | Long |  | 0 | 所在省份ID | 详见接口https://ad.e.kuaishou.com/rest/openapi/v1/region/list |
| - city_id | Long |  | 0 | 所在城市ID | 详见接口https://ad.e.kuaishou.com/rest/openapi/v1/region/list |
| - district_id | Long |  | 0 | 所在地区ID | 详见接口https://ad.e.kuaishou.com/rest/openapi/v1/region/list |
| - category_id | Long |  | 0 | 最细类目ID |  |
| - category_name | String |  |  | 最细类目名称 |  |
| - comments | Integer |  | 0 | 商品评论数 |  |
| - address | String |  |  | 商品销售地址 |  |
| - insurance_product_info | InsuranceProductInfoSneak |  |  | 保险行业商品特殊信息 |  |
| - insurance_company_type | String |  |  | 保司&amp;经代 |  |
| - upgraded_premium | String |  |  | 链路中是否包含商品保费升级-其他险必填 |  |
| - feature | String |  |  | 商品特色信息 |  |
| - communication_product_info | CommunicationProductInfoSneak |  |  | 通信行业商品特殊信息 |  |
| - region_category | String |  | 多省份品 | 地域品描述 | 必须是 单省份品/多省份品/全国品 其中之一 |
| - saving_start_time | Long |  | 0 | 减价开始时间 | 毫秒时间戳 |
| - saving_end_time | Long |  | 0 | 减价结束时间 | 毫秒时间戳 |
| - province | String |  |  | 所在省份 |  |
| - city | String |  |  | 所在城市 |  |
| - district | String |  |  | 所在地区 |  |
| - product_view_count | Long |  | 0 | 商品详情页打开次数 |  |
| - favorite_count | Long |  | 0 | 收藏用户数 |  |
| - favourable_comment_rate | Long |  | 0 | 好评率 |  |
| - mark | Double |  | 0.0 | 评分 | 默认为0 |
| - bought | Integer |  | 0 | 购买量 | 默认为0 |
| - province_id | Long |  | 0 | 所在省份ID | 详见接口https://ad.e.kuaishou.com/rest/openapi/v1/region/list |
| - city_id | Long |  | 0 | 所在城市ID | 详见接口https://ad.e.kuaishou.com/rest/openapi/v1/region/list |
| - district_id | Long |  | 0 | 所在地区ID | 详见接口https://ad.e.kuaishou.com/rest/openapi/v1/region/list |
| - directional_traffic | String |  |  | 定向流量 | 数字字符串 |
| - general_traffic | String |  |  | 通用流量 | 数字字符串 |
| - total_traffic | String |  |  | 总流量 | 数字字符串 |
| - operator_name | String |  |  | 运营商名称 |  |
| - monthly_rent | String |  |  | 月租（元） |  |
| - product_features | String |  |  | 商品特色 |  |
| - sales_promotion | String |  |  | 商品促销活动信息 |  |
| - credit_product_info | CreditProductInfoSneak |  |  | 信贷行业商品特殊信息 |  |
| - interest_rate | String |  | 5%以下,5-10%,10-18%,18-24%,24%以上 | 最高利率 |  |
| - line_of_credit | String |  | 1万以内,1万-5万,5万-10万,10万-20万,20万及以上 | 最大可贷额度（元） |  |
| - prepayment | String |  | 支持,不支持 | 是否可提前还款 |  |
| - repayment_cycle | String |  | 3期,6期,12期,24期,36期及以上 | 最长支持还款周期 |  |
| - wealth_product_info | WealthProductInfo |  |  | 财富行业商品特殊信息 |  |
| - promotion_price | Double |  |  | 商品推广价 |  |
| - cursor | String |  |  | 游标 |  |
| message | String |  |  | 返回状态信息 |  |

## 原始内容

```
获取商品列表(游标) /rest/openapi/gw/dsp/dpa/product/cursor_query advertiser_id Long 广告主账号ID library_id Long 商品库ID cursor String 游标 limit Integer 查询最大数据量 code Integer 返回状态码 data AdGatewayDpaProductBatchQueryResponse 返回数据内容 product_info AdGatewayDpaProductQueryResponse[] 商品信息集 outer_id String 广告主商品编号 library_id Long 商品库ID name String 商品名称 title String 商品标题 description String 商品描述 condition String 商品新旧情况: 全新, 翻新, 二手 label String[] 商品标签 first_category_id Long 商品一级类目ID first_category_name String 商品一级类目名称 second_category_id Long 商品二级类目ID second_category_name String 商品二级类目名称 third_category_id Long 商品三级类目ID third_category_name String 商品三级类目名称 main_image_url String[] 商品主图URL(仅支持单个) image_urls String[] 商品副图URLs video VideoInfo 商品视频信息 url String 视频URL width Integer 视频宽度 height Integer 视频高度 duration Integer 视频时长 ratio Integer 视频码率 target_urls UrlParamSneak 商品链接信息 pc String PC端商品落地页URL mobile String H5页面商品落地页URL android_app String Android应用商品直达吊起链接 ios_app String IOS应用商品直达吊起链接 universal_link String IOS应用商品吊起ulink链接 brand_name String 商品品牌名 brand_id String 商品品牌ID en_brand_name String 商品英文品牌名 price Double 商品现价 value Double 商品原价 saving Double 商品优惠价格 discount Double 商品折扣 age_v2 String[] 商品定向年龄: 18-23, 24-30, 31-40, 41-49, 50+ gender Integer 商品定向性别: 0-不限, 1-男, 2-女 province_v2 String[] 商品定向省份 city_v2 String[] 商品定向城市 stock Integer 商品库存: 0-无, 1-有 status Integer 商品投放状态: 0-不可投放, 1-可投放 check_status Integer 商品校验(接入)状态: 0-成功, 1-失败 check_error String[] 商品校验失败原因 online_time Long 商品上线时间(毫秒时间戳) offline_time Long 商品下线时间(毫秒时间戳) update_time Long 商品更新时间(毫秒时间戳) create_time Long 商品创建时间(毫秒时间戳) slogan String 商品广告语 industry_id Integer 商品行业ID: 1-电商, 4-房产, 5-书库, 7-车型, 8-视频音乐 sub_industry_id String 商品二级行业ID: 小说行业: 1-网络小说, 2-漫画, 3-有声读物, 4-网赚; 音视频行业: 电影, 动漫, 纪录片, 综艺, 电视剧, 音乐, 直播, 网赚, 其他 industry_name String 商品行业名称: 1-电商, 4-房产, 5-书库, 7-车型, 8-视频音乐 sub_industry_name String 商品二级行业名称: 小说行业: 1-网络小说, 2-漫画, 3-有声读物, 4-网赚; 音视频行业: 电影, 动漫, 纪录片, 综艺, 电视剧, 音乐, 直播, 网赚, 其他 product_id Long 商品ID stack_room_product_info StackRoomProductInfoSneak 小说行业商品特殊信息 content String 章节内容 unit_price Double 单章价格，变现模式为付费时必填 max_charge Double 最高充值档位，变现模式为付费时必填 min_charge Double 最低充值档位，变现模式为付费时必填 chapter_count Integer 章节数量 author String 作者 extra_tags String 标签 theme Integer 主题(详见: https://docs.qingque.cn/s/home/eZQDJOM3GV-qQ4vNsEpaQ0qy2?identityId=F0DVUl94Gc) role Integer 角色(详见: https://docs.qingque.cn/s/home/eZQDJOM3GV-qQ4vNsEpaQ0qy2?identityId=F0DVUl94Gc) channel Integer 男女频: 171101-男频, 171102-女频, 171103-不限 finish_status Integer 完结状态: 1-未完结, 2-已完结 plot Integer 情节(详见: https://docs.qingque.cn/s/home/eZQDJOM3GV-qQ4vNsEpaQ0qy2?identityId=F0DVUl94Gc) origin_nation Integer 地域: 171201-国漫, 171202-日漫, 171203-韩漫, 171204-欧美漫 fiction_style Integer 风格: 171001-热血, 171002-恐怖, 171003-温馨, 171004-搞笑, 171005-其他 pay_status Integer 付费类型: 1-付费, 2-免费 is_audio_novel Integer 是否为有声小说: 1-有声, 2-非有声 chapter_name1 String 章节一名称 chapter_content1 String 章节一内容 chapter_name2 String 章节二名称 chapter_content2 String 章节二内容 chapter_name3 String 章节三名称 chapter_content3 String 章节三内容 long_and_short_stories String 书籍长短篇 book_city String 所属书城 start_paid_chapter Integer 起始付费章节 min_pay_amount Integer 最低付费金额 favorite_count Long 书籍收藏数 au_video_product_info AuVideoProductInfoSneak 音视频行业商品特殊信息 member_type String 会员类型：终身,年度,月度,周,天,无 discovery_mode String 变现模式：付费,免费 original_name String 漫改原著名称 source_category String 来源类别：小说改,漫画改,游戏改,短剧改,原生创作 make_method String 制作呈现方式：cg类,图片轮播类,沙雕类,AIGC类,常规动态漫 screen String 横竖屏：横屏,竖屏,横转竖屏 new_plots String[] 情节，可多选(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) new_themes String[] 题材，可多选(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) theme String 题材(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) origin_nation String 地域(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) album_name String 作品辑名称 release_date Long 发布日期(毫秒时间戳) author String[] 作者/导演 starring String[] 主演 album_sort Integer 所处作品辑中的顺序 score Double 评分 play_nums Long 播放次数 impression_nums Long 曝光次数 likes_nums Long 喜欢/点赞数 forward_nums Long 转发数 comment_nums Long 评论数 favorite_user_nums Long 收藏用户数 platform_attributes String 平台类型: 长视频， 短视频 author_fans Long 作者粉丝数 is_online_earning Integer 是否网赚: 1-是, 2-否 channel String 男女频道: 男频, 女频, 不限 plot String 情节(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) talent_id String[] 达人ID copyright String 版权方 episodes Integer 剧类集数 episode_duration Integer 单集剧集分钟时长 paid_episodes Integer 起始付费集数 unit_price Double 单集价格(元) annual_vip_type Integer 是否有年度会员：1-有，2-无 semiannual_vip_type Integer 是否有半年度会员：1-有，2-无 max_charge Double 最高充值档位(元) min_charge Double 最低充值档位(元) recommend_charge Double 推荐充值档位(元) panel_delivery_method Integer 面板投放方式：0-普通面板，1-小额面板，2-超小额面板 ecom_product_info EcomProductInfoSneak 电商行业商品特殊信息 mark Double 商品评分 bought Integer 商品销售量 comments Integer 商品评论数 spu_id String 标准商品单位ID condition String 商品新旧情况: 全新, 翻新, 二手 pharmaceutical_product_info PharmaceuticalProductInfoSneak 医药行业商品特殊字段 mark Double 商品评分 bought Integer 商品销售量 spu_id String 标准商品单位ID saving_start_time Long 减价开始时间 saving_end_time Long 减价结束时间 tel String 联系方式 nationality String 所在国家 district String 所在地区 region String[] 商圈区域 product_view_count Integer 商品详情页打开次数 favorite_count Integer 收藏用户数 favourable_comment_rate Integer 好评率 value_min Double 商品原价区间最小值 value_max Double 商品原价区间最大值 price_min Double 商品现价区间最小值 price_max Double 商品现价区间最大值 province String 省份 city String 城市 shop_cnt String 门店数量 health_price String 客单价 landing_url_type String 投放链接类型 product_indications String 商品适应症 adverse_reaction String 禁忌、不良反应 medical_institution_name String 医疗机构名称 recruitment_product_info RecruitmentProductInfoSneak 招聘行业商品特殊信息 has_car String 拥有车辆 salary_of_year String 年薪 salary String 月薪 benefits String[] 福利待遇 education String 学历要求 service_year String 工作年限要求 job_type String 工作类型 tel String 联系电话 mail String 联系邮箱 nationality String 所在国家 province String 所在省份 city String 所在城市 district String 所在地区 region String[] 所在商圈区域 headcount Integer 招聘人数 post_type String 岗位类型 regional_service_product_info RegionalServiceProductInfoSneak 区域服务行业商品特殊信息 saving_start_time Long 减价开始时间 saving_end_time Long 减价结束时间 tel String 联系电话 nationality String 所在国家 province String 所在省份 city String 所在城市 district String 所在地区 region String[] 所在商圈区域 product_view_count Long 商品详情页打开次数 favorite_count Long 收藏用户数 favourable_comment_rate Long 好评率 mark Double 评分 bought Integer 购买量 spu_id String 外部商品附加ID province_id Long 所在省份ID city_id Long 所在城市ID district_id Long 所在地区ID category_id Long 最细类目ID category_name String 最细类目名称 comments Integer 商品评论数 address String 商品销售地址 insurance_product_info InsuranceProductInfoSneak 保险行业商品特殊信息 insurance_company_type String 保司&amp;经代 upgraded_premium String 链路中是否包含商品保费升级-其他险必填 feature String 商品特色信息 communication_product_info CommunicationProductInfoSneak 通信行业商品特殊信息 region_category String 地域品描述 saving_start_time Long 减价开始时间 saving_end_time Long 减价结束时间 province String 所在省份 city String 所在城市 district String 所在地区 product_view_count Long 商品详情页打开次数 favorite_count Long 收藏用户数 favourable_comment_rate Long 好评率 mark Double 评分 bought Integer 购买量 province_id Long 所在省份ID city_id Long 所在城市ID district_id Long 所在地区ID directional_traffic String 定向流量 general_traffic String 通用流量 total_traffic String 总流量 operator_name String 运营商名称 monthly_rent String 月租（元） product_features String 商品特色 sales_promotion String 商品促销活动信息 credit_product_info CreditProductInfoSneak 信贷行业商品特殊信息 interest_rate String 最高利率 line_of_credit String 最大可贷额度（元） prepayment String 是否可提前还款 repayment_cycle String 最长支持还款周期 wealth_product_info WealthProductInfo 财富行业商品特殊信息 promotion_price Double 商品推广价 cursor String 游标 message String 返回状态信息
```
