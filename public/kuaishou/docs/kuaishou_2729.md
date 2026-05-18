---
title: 创建商品
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2729&menuId=3462
doc_id: kuaishou_2729
source_id: kuaishou_2729
---
# 创建商品

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2729 |
| documentType | 2 |
| version | 0.0.5 |
| bizName | 效果广告 |
| createTime | 2025-10-20T13:30:53.500Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/product/batch/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 0 | 投放账号ID |  |
| dpa_product_edit_params | AdGatewayDpaProductBatchCreateParam[] | 是 |  | 商品批量编辑请求参数 |  |
| - outer_id | String | 是 |  | 广告主商品编号 | 在商品库中保证唯一不可重复，长度小于48 |
| - library_id | Long | 是 | 0 | 商品库ID | 非XML商品库，商品库所属行业与商品所属行业需保持一致 |
| - name | String |  |  | 商品名称 |  |
| - title | String |  |  | 商品标题 |  |
| - description | String |  |  | 商品描述 |  |
| - condition | String |  |  | 商品新旧情况: 全新, 翻新, 二手 |  |
| - label | String[] |  |  | 商品标签 |  |
| - first_category_id | Long |  | 0 | 商品一级类目ID |  |
| - first_category_name | String |  |  | 商品一级类目名称 | 仅用作查询输出，新建/更新商品输入无效 |
| - second_category_id | Long |  | 0 | 商品二级类目ID |  |
| - second_category_name | String |  |  | 商品二级类目名称 | 仅用作查询输出，新建/更新商品输入无效 |
| - third_category_id | Long |  | 0 | 商品三级类目ID |  |
| - third_category_name | String |  |  | 商品三级类目名称 | 仅用作查询输出，新建/更新商品输入无效 |
| - main_image_url | String[] |  |  | 商品主图URL(仅支持传单个URL) | 仅支持单个 |
| - image_urls | String[] |  |  | 商品副图URLs |  |
| - video | VideoInfo |  |  | 商品视频信息 |  |
| - url | String |  |  | 视频URL |  |
| - width | Integer |  | 0 | 视频宽度 |  |
| - height | Integer |  | 0 | 视频高度 |  |
| - duration | Integer |  | 0 | 视频时长 |  |
| - ratio | Integer |  | 0 | 视频码率 |  |
| - target_urls | UrlParamSneak |  |  | 商品链接信息 |  |
| - pc | String |  |  | PC端商品落地页URL |  |
| - mobile | String |  |  | H5页面商品落地页URL |  |
| - android_app | String |  |  | Android应用商品直达吊起链接 |  |
| - ios_app | String |  |  | IOS应用商品直达吊起链接 |  |
| - universal_link | String |  |  | IOS应用商品吊起ulink链接 |  |
| - brand_name | String |  |  | 商品品牌名 | 通信：移动、联通、电信、其他 |
| - brand_id | String |  |  | 商品品牌ID |  |
| - en_brand_name | String |  |  | 商品英文品牌名 |  |
| - price | Double |  | 0.0 | 商品现价 | 最小精度小数点后3位，默认为0 |
| - value | Double |  | 0.0 | 商品原价 | 最小精度小数点后3位，默认为0 |
| - saving | Double |  | 0.0 | 商品优惠价格 | 最小精度小数点后3位，默认为0 |
| - discount | Double |  | 0.0 | 商品折扣 | 最小精度小数点后3位，默认为0 |
| - age_v2 | String[] |  |  | 商品定向年龄: 18-23, 24-30, 31-40, 41-49, 50+ |  |
| - gender | Integer |  | 0 | 商品定向性别: 0-不限, 1-男, 2-女 |  |
| - province_v2 | String[] |  |  | 商品定向省份 | 默认不限 |
| - city_v2 | String[] |  |  | 商品定向城市 | 默认不限 |
| - stock | Integer |  | 0 | 商品库存: 0-无, 1-有 | 0-无, 1-有 (默认为0) |
| - status | Integer |  | 0 | 商品投放状态: 0-不可投放, 1-可投放 | 0-不可投放, 1-可投放 (默认为0) |
| - online_time | Long |  | 0 | 商品上线时间(毫秒时间戳) | 毫秒时间戳(默认为当前时间) |
| - offline_time | Long |  | 0 | 商品下线时间(毫秒时间戳) | 毫秒时间戳(默认为上线时间+30天) |
| - slogan | String |  |  | 商品广告语 |  |
| - industry_id | Integer | 是 | 0 | 商品行业ID | 1-电商, 3-保险, 5-书库, 8-音视频, 9-医药, 10-招聘, 11-区域服务, 12-通信 |
| - sub_industry_id | String |  |  | (小说、音视频，保险必填)商品二级行业ID: 小说行业: 1-网络小说, 2-漫画, 3-有声读物, 4-网赚; 音视频行业: 电影, 动漫, 纪录片, 综艺, 电视剧, 音乐, 直播, 网赚, 其他 | 保险：人寿险-人寿险， 其他险-其他险；书库: 1-网络小说, 2-漫画, 3-有声读物, 4-网赚; 音视频: 电影, 动漫, 纪录片, 综艺, 电视剧, 短剧, 音乐, 直播, 网赚, 其他 |
| - stack_room_product_info | StackRoomProductInfoSneak |  |  | 小说行业商品特殊信息 |  |
| - book_id | String |  |  | 书籍id |  |
| - content | String |  |  | 章节内容 |  |
| - unit_price | Double |  |  | 单章价格，变现模式为付费时必填 |  |
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
| - pharmaceutical_product_info | PharmaceuticalProductInfoSneak |  |  | 医药行业商品特殊信息 |  |
| - mark | Double |  | 0.0 | 商品评分 |  |
| - bought | Integer |  | 0 | 商品销售量 |  |
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
| - region | String[] |  |  | 所在商圈区域 |  |
| - product_view_count | Long |  | 0 | 商品详情页打开次数 |  |
| - favorite_count | Long |  | 0 | 收藏用户数 |  |
| - favourable_comment_rate | Long |  | 0 | 好评率 |  |
| - mark | Double |  | 0.0 | 评分 |  |
| - bought | Integer |  | 0 | 购买量 |  |
| - spu_id | String |  |  | 外部商品附加ID |  |
| - province_id | Long |  | 0 | 所在省份ID | 详见接口https://ad.e.kuaishou.com/rest/openapi/v1/region/list |
| - city_id | Long |  | 0 | 所在城市ID | 详见接口https://ad.e.kuaishou.com/rest/openapi/v1/region/list |
| - district_id | Long |  | 0 | 所在地区ID | 详见接口https://ad.e.kuaishou.com/rest/openapi/v1/region/list |
| - category_id | Long |  | 0 | 最细类目ID |  |
| - category_name | String |  |  | 最细类目名称 |  |
| - comments | Integer |  | 0 | 商品评论数 | 默认为0 |
| - address | String |  |  | 商品销售地址 |  |
| - insurance_product_info | InsuranceProductInfoSneak |  |  | 保险行业商品特殊信息 |  |
| - new_insurer_time | String | 是 |  | 保障期限：（1天，1月，2年） |  |
| - insurer | String | 是 |  | 保险公司 |  |
| - insurer_type | String | 是 |  | 承保公司性质 |  |
| - spokesperson | String | 是 |  | 投放保险公司代言人 |  |
| - insured_min_age | Integer | 是 |  | 投保最小年龄 |  |
| - insured_max_age | Integer | 是 |  | 投保最大年龄 |  |
| - payout_amount | Double | 是 |  | 保险赔付金额 |  |
| - staging | Integer | 是 |  | 是否分期 1 - 分期 2- 不分期 |  |
| - total_price | Double |  |  | 一次缴费价格 |  |
| - first_month_price | Double |  |  | 首月价格 |  |
| - month_price | Double |  |  | 次月价格 |  |
| - social_indemnity | Integer |  |  | 社保 1 - 有社保 2 - 无社保 |  |
| - normal_payout | Double |  |  | 一般医疗保险金 |  |
| - disease_payout | String |  |  | 重疾保险金 |  |
| - payout_ratio | Double |  |  | 赔付比例 |  |
| - hos_address | String |  |  | 医院范围 |  |
| - start_time | String |  |  | 生效时间 |  |
| - free_amount | String |  |  | 免赔额 |  |
| - auto_deduction | Integer |  |  | 是否自动扣费 1-是 2-否 |  |
| - auto_renewal | Integer |  |  | 是否自动续保 1-是 2-否 |  |
| - green | Integer |  |  | 是否包含绿色就医服务 1-是 2-否 |  |
| - in_address | String |  |  | 保障地区 |  |
| - insurer_time | Integer |  |  | 保障期限：单位(天) |  |
| - specialPayOut | InsuranceSpecialPayOutInfoSneak |  |  | XXX医疗保险金 |  |
| - name | String |  |  | 保险金种类 |  |
| - payout | Double |  |  | 赔付金额（单位元） |  |
| - wait | Integer |  |  | 单位（天） |  |
| - highest_protection_cost | String |  |  | 最高保额 | >0 |
| - payment_term | String |  |  | 缴费年限 | >0 |
| - complimentary_insurance | String |  |  | 赠险 | 有, 无 |
| - payment_method | String |  |  | 缴费方式 | 月缴, 年缴 |
| - payment_channel | String |  |  | 支付渠道 | 支付宝, 微信, 支付宝或微信 |
| - upgraded | String |  |  | 链路中是否包含升级 | 是, 否 |
| - money_management | String |  |  | 是否理财类（是，否） |  |
| - insurance_company_type | String | 是 |  | 保司&amp;经代 |  |
| - upgraded_premium | String |  |  | 链路中是否包含商品保费升级-其他险必填 |  |
| - feature | String |  |  | 商品特色信息 | 通信：无、可选号、不可选号 |
| - sales_promotion | String |  |  | 商品促销活动信息 |  |
| - communication_product_info | CommunicationProductInfoSneak |  |  | 通信行业商品特殊信息 |  |
| - region_category | String | 是 | 多省份品 | 地域品描述 | 必须是 单省份品/多省份品/全国品 其中之一 |
| - saving_start_time | Long |  | 0 | 减价开始时间 | 毫秒时间戳 |
| - saving_end_time | Long |  | 0 | 减价结束时间 | 毫秒时间戳 |
| - product_view_count | Long |  | 0 | 商品详情页打开次数 |  |
| - favorite_count | Long |  | 0 | 收藏用户数 |  |
| - favourable_comment_rate | Long |  | 0 | 好评率 |  |
| - mark | Double |  | 0.0 | 评分 |  |
| - bought | Integer |  | 0 | 购买量 |  |
| - province_id | Long |  | 0 | 所在省份ID | 详见接口https://ad.e.kuaishou.com/rest/openapi/v1/region/list |
| - city_id | Long |  | 0 | 所在城市ID | 详见接口https://ad.e.kuaishou.com/rest/openapi/v1/region/list |
| - district_id | Long |  | 0 | 所在地区ID | 详见接口https://ad.e.kuaishou.com/rest/openapi/v1/region/list |
| - directional_traffic | String |  |  | 定向流量 | 数字字符串 |
| - general_traffic | String |  |  | 通用流量 | 数字字符串 |
| - total_traffic | String |  |  | 总流量 | 数字字符串 |
| - operator_name | String |  |  | 运营商名称 |  |
| - monthly_rent | String |  |  | 月租（元） |  |
| - product_features | String |  |  | 商品特色 |  |
| - credit_product_info | CreditProductInfoSneak |  |  | 信贷行业商品特殊信息 |  |
| - interest_rate | String | 是 | 5%以下,5-10%,10-18%,18-24%,24%以上 | 最高利率 |  |
| - line_of_credit | String | 是 | 1万以内,1万-5万,5万-10万,10万-20万,20万及以上 | 最大可贷额度（元） |  |
| - prepayment | String | 是 | 支持,不支持 | 是否可提前还款 |  |
| - repayment_cycle | String | 是 | 3期,6期,12期,24期,36期及以上 | 最长支持还款周期 |  |
| - wealth_product_info | WealthProductInfo |  |  | 财富行业商品特殊信息 |  |
| - promotion_price | Double |  |  | 商品推广价 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/product/batch/create' \
--header 'Access-Token: c94bb7778ad1614dd77a9c446d28c1bd' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": 900015068,
    "dpa_product_edit_params": [
        {
            "outer_id": "202217",
            "library_id": 202112201875,
            "name": "MAPI批量创建-电商-全字段",
            "title": "MAPI批量创建-电商-全字段",
            "description": "MAPI批量创建-电商-全字段",
            "condition": "全新",
            "label": [
                "MAPI",
                "批量创建",
                "电商",
                "全字段"
            ],
            "first_category_id": "384260",
            "first_category_name": "珠宝首饰",
            "second_category_id": "385147",
            "second_category_name": "珠宝首饰",
            "third_category_id": "384389",
            "third_category_name": "黄金手链/脚链",
            "main_image_url": [
                "https://kcdn.staging.kuaishou.com/kos/nlav100052/3123ae7e0b6640d9be7c70a8908e9da8.jpg"
            ],
            "image_urls": [
                "https://kcdn.staging.kuaishou.com/kos/nlav100052/ea7c40e357964b9b9c46897b1a7370d2.jpg",
                "https://kcdn.staging.kuaishou.com/kos/nlav100052/fe384d94bc4f42698fc8533df92259d7.jpg"
            ],
            "video": {
                "url": "https://kcdn.staging.kuaishou.com/kos/nlav100052/f3d7e90dc47148188e4b1c028a58ae2b.mp4",
                "width": 666,
                "height": 66,
                "duration": 6,
                "ratio": 1024
            },
            "target_urls": {
                "pc": "https://www.target.url.com/pc",
                "mobile": "https://www.target.url.com/mobile",
                "android_app": "https://www.target.url.com/android",
                "ios_app": "https://www.target.url.com/ios",
                "universal_link": "https://www.target.url.com/ulink"
            },
            "brand_name": "MAPI批量创建-电商-全字段",
            "brand_id": "0",
            "en_brand_name": "MAPI Batch Create With All Ecom Fields",
            "price": 6.66,
            "value": 66.6,
            "saving": 59.94,
            "discount": 1.0,
            "age_v2": [
                "18-23"
            ],
            "gender": 1,
            "province_v2": [
                "河北"
            ],
            "city_v2": [
                "唐山",
                "保定"
            ],
            "stock": 1,
            "status": 1,
            "online_time": 1649854649275,
            "offline_time": 1652446649275,
            "slogan": "MAPI批量创建-电商-全字段",
            "industry_id": 1,
            "sub_industry_id": null
        }
    ]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 结果状态码 |  |
| message | String |  |  | 错误结果信息 |  |
| data | AdGatewayDpaProductBatchEditResponse |  |  | 商品批量编辑结果 |  |
| - product_edit_responses | ProductUpdateResponseSneak[] |  |  | 商品编辑返回结果集 |  |
| - library_id | Long |  |  | 商品库ID |  |
| - outer_id | String |  |  | 商品第三方ID |  |
| - success | Boolean |  |  | 编辑结果: true-成功, false-失败 |  |
| - error_msg | String |  |  | 失败错误信息 |  |
| - product_id | Long |  |  | 商品ID |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "product_edit_responses": [
            {
                "error_msg": null,
                "library_id": 202112201875,
                "success": true,
                "product_id": null,
                "outer_id": "202217"
            }
        ]
    },
    "message": "OK",
    "request_id": "8210c0741ea64254a5e5192bd403694c"
}
```

## 原始内容

```
创建商品 /rest/openapi/gw/dsp/v1/dpa/product/batch/create curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/product/batch/create' \ --header 'Access-Token: c94bb7778ad1614dd77a9c446d28c1bd' \ --header 'Content-Type: application/json' \ --data-raw '{ "advertiser_id": 900015068, "dpa_product_edit_params": [ { "outer_id": "202217", "library_id": 202112201875, "name": "MAPI批量创建-电商-全字段", "title": "MAPI批量创建-电商-全字段", "description": "MAPI批量创建-电商-全字段", "condition": "全新", "label": [ "MAPI", "批量创建", "电商", "全字段" ], "first_category_id": "384260", "first_category_name": "珠宝首饰", "second_category_id": "385147", "second_category_name": "珠宝首饰", "third_category_id": "384389", "third_category_name": "黄金手链/脚链", "main_image_url": [ "https://kcdn.staging.kuaishou.com/kos/nlav100052/3123ae7e0b6640d9be7c70a8908e9da8.jpg" ], "image_urls": [ "https://kcdn.staging.kuaishou.com/kos/nlav100052/ea7c40e357964b9b9c46897b1a7370d2.jpg", "https://kcdn.staging.kuaishou.com/kos/nlav100052/fe384d94bc4f42698fc8533df92259d7.jpg" ], "video": { "url": "https://kcdn.staging.kuaishou.com/kos/nlav100052/f3d7e90dc47148188e4b1c028a58ae2b.mp4", "width": 666, "height": 66, "duration": 6, "ratio": 1024 }, "target_urls": { "pc": "https://www.target.url.com/pc", "mobile": "https://www.target.url.com/mobile", "android_app": "https://www.target.url.com/android", "ios_app": "https://www.target.url.com/ios", "universal_link": "https://www.target.url.com/ulink" }, "brand_name": "MAPI批量创建-电商-全字段", "brand_id": "0", "en_brand_name": "MAPI Batch Create With All Ecom Fields", "price": 6.66, "value": 66.6, "saving": 59.94, "discount": 1.0, "age_v2": [ "18-23" ], "gender": 1, "province_v2": [ "河北" ], "city_v2": [ "唐山", "保定" ], "stock": 1, "status": 1, "online_time": 1649854649275, "offline_time": 1652446649275, "slogan": "MAPI批量创建-电商-全字段", "industry_id": 1, "sub_industry_id": null } ] }' { "code": 0, "data": { "product_edit_responses": [ { "error_msg": null, "library_id": 202112201875, "success": true, "product_id": null, "outer_id": "202217" } ] }, "message": "OK", "request_id": "8210c0741ea64254a5e5192bd403694c" } advertiser_id Long 投放账号ID dpa_product_edit_params AdGatewayDpaProductBatchCreateParam[] 商品批量编辑请求参数 outer_id String 广告主商品编号 library_id Long 商品库ID name String 商品名称 title String 商品标题 description String 商品描述 condition String 商品新旧情况: 全新, 翻新, 二手 label String[] 商品标签 first_category_id Long 商品一级类目ID first_category_name String 商品一级类目名称 second_category_id Long 商品二级类目ID second_category_name String 商品二级类目名称 third_category_id Long 商品三级类目ID third_category_name String 商品三级类目名称 main_image_url String[] 商品主图URL(仅支持传单个URL) image_urls String[] 商品副图URLs video VideoInfo 商品视频信息 url String 视频URL width Integer 视频宽度 height Integer 视频高度 duration Integer 视频时长 ratio Integer 视频码率 target_urls UrlParamSneak 商品链接信息 pc String PC端商品落地页URL mobile String H5页面商品落地页URL android_app String Android应用商品直达吊起链接 ios_app String IOS应用商品直达吊起链接 universal_link String IOS应用商品吊起ulink链接 brand_name String 商品品牌名 brand_id String 商品品牌ID en_brand_name String 商品英文品牌名 price Double 商品现价 value Double 商品原价 saving Double 商品优惠价格 discount Double 商品折扣 age_v2 String[] 商品定向年龄: 18-23, 24-30, 31-40, 41-49, 50+ gender Integer 商品定向性别: 0-不限, 1-男, 2-女 province_v2 String[] 商品定向省份 city_v2 String[] 商品定向城市 stock Integer 商品库存: 0-无, 1-有 status Integer 商品投放状态: 0-不可投放, 1-可投放 online_time Long 商品上线时间(毫秒时间戳) offline_time Long 商品下线时间(毫秒时间戳) slogan String 商品广告语 industry_id Integer 商品行业ID sub_industry_id String (小说、音视频，保险必填)商品二级行业ID: 小说行业: 1-网络小说, 2-漫画, 3-有声读物, 4-网赚; 音视频行业: 电影, 动漫, 纪录片, 综艺, 电视剧, 音乐, 直播, 网赚, 其他 stack_room_product_info StackRoomProductInfoSneak 小说行业商品特殊信息 content String 章节内容 unit_price Double 单章价格，变现模式为付费时必填 max_charge Double 最高充值档位，变现模式为付费时必填 min_charge Double 最低充值档位，变现模式为付费时必填 chapter_count Integer 章节数量 author String 作者 extra_tags String 标签 theme Integer 主题(详见: https://docs.qingque.cn/s/home/eZQDJOM3GV-qQ4vNsEpaQ0qy2?identityId=F0DVUl94Gc) role Integer 角色(详见: https://docs.qingque.cn/s/home/eZQDJOM3GV-qQ4vNsEpaQ0qy2?identityId=F0DVUl94Gc) channel Integer 男女频: 171101-男频, 171102-女频, 171103-不限 finish_status Integer 完结状态: 1-未完结, 2-已完结 plot Integer 情节(详见: https://docs.qingque.cn/s/home/eZQDJOM3GV-qQ4vNsEpaQ0qy2?identityId=F0DVUl94Gc) origin_nation Integer 地域: 171201-国漫, 171202-日漫, 171203-韩漫, 171204-欧美漫 fiction_style Integer 风格: 171001-热血, 171002-恐怖, 171003-温馨, 171004-搞笑, 171005-其他 pay_status Integer 付费类型: 1-付费, 2-免费 is_audio_novel Integer 是否为有声小说: 1-有声, 2-非有声 chapter_name1 String 章节一名称 chapter_content1 String 章节一内容 chapter_name2 String 章节二名称 chapter_content2 String 章节二内容 chapter_name3 String 章节三名称 chapter_content3 String 章节三内容 long_and_short_stories String 书籍长短篇 book_city String 所属书城 start_paid_chapter Integer 起始付费章节 min_pay_amount Integer 最低付费金额 favorite_count Long 书籍收藏数 au_video_product_info AuVideoProductInfoSneak 音视频行业商品特殊信息 member_type String 会员类型：终身,年度,月度,周,天,无 discovery_mode String 变现模式：付费,免费 original_name String 漫改原著名称 source_category String 来源类别：小说改,漫画改,游戏改,短剧改,原生创作 make_method String 制作呈现方式：cg类,图片轮播类,沙雕类,AIGC类,常规动态漫 screen String 横竖屏：横屏,竖屏,横转竖屏 new_plots String[] 情节，可多选(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) new_themes String[] 题材，可多选(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) theme String 题材(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) origin_nation String 地域(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) album_name String 作品辑名称 release_date Long 发布日期(毫秒时间戳) author String[] 作者/导演 starring String[] 主演 album_sort Integer 所处作品辑中的顺序 score Double 评分 play_nums Long 播放次数 impression_nums Long 曝光次数 likes_nums Long 喜欢/点赞数 forward_nums Long 转发数 comment_nums Long 评论数 favorite_user_nums Long 收藏用户数 platform_attributes String 平台类型: 长视频， 短视频 author_fans Long 作者粉丝数 is_online_earning Integer 是否网赚: 1-是, 2-否 channel String 男女频道: 男频, 女频, 不限 plot String 情节(详见: https://docs.qingque.cn/s/home/eZQDk3ey4uwts_6HeBYVoxzTG?identityId=F0DVUl94Gc) talent_id String[] 达人ID copyright String 版权方 episodes Integer 剧类集数 episode_duration Integer 单集剧集分钟时长 paid_episodes Integer 起始付费集数 unit_price Double 单集价格(元) annual_vip_type Integer 是否有年度会员：1-有，2-无 semiannual_vip_type Integer 是否有半年度会员：1-有，2-无 max_charge Double 最高充值档位(元) min_charge Double 最低充值档位(元) recommend_charge Double 推荐充值档位(元) panel_delivery_method Integer 面板投放方式：0-普通面板，1-小额面板，2-超小额面板 pharmaceutical_product_info PharmaceuticalProductInfoSneak 医药行业商品特殊信息 mark Double 商品评分 bought Integer 商品销售量 spu_id String 标准商品单位ID saving_start_time Long 减价开始时间 saving_end_time Long 减价结束时间 tel String 联系方式 nationality String 所在国家 district String 所在地区 region String[] 商圈区域 product_view_count Integer 商品详情页打开次数 favorite_count Integer 收藏用户数 favourable_comment_rate Integer 好评率 value_min Double 商品原价区间最小值 value_max Double 商品原价区间最大值 price_min Double 商品现价区间最小值 price_max Double 商品现价区间最大值 province String 省份 city String 城市 shop_cnt String 门店数量 health_price String 客单价 landing_url_type String 投放链接类型 product_indications String 商品适应症 adverse_reaction String 禁忌、不良反应 medical_institution_name String 医疗机构名称 recruitment_product_info RecruitmentProductInfoSneak 招聘行业商品特殊信息 has_car String 拥有车辆 salary_of_year String 年薪 salary String 月薪 benefits String[] 福利待遇 education String 学历要求 service_year String 工作年限要求 job_type String 工作类型 tel String 联系电话 mail String 联系邮箱 nationality String 所在国家 province String 所在省份 city String 所在城市 district String 所在地区 region String[] 所在商圈区域 headcount Integer 招聘人数 post_type String 岗位类型 regional_service_product_info RegionalServiceProductInfoSneak 区域服务行业商品特殊信息 saving_start_time Long 减价开始时间 saving_end_time Long 减价结束时间 tel String 联系电话 region String[] 所在商圈区域 product_view_count Long 商品详情页打开次数 favorite_count Long 收藏用户数 favourable_comment_rate Long 好评率 mark Double 评分 bought Integer 购买量 spu_id String 外部商品附加ID province_id Long 所在省份ID city_id Long 所在城市ID district_id Long 所在地区ID category_id Long 最细类目ID category_name String 最细类目名称 comments Integer 商品评论数 address String 商品销售地址 insurance_product_info InsuranceProductInfoSneak 保险行业商品特殊信息 new_insurer_time String 保障期限：（1天，1月，2年） insurer String 保险公司 insurer_type String 承保公司性质 spokesperson String 投放保险公司代言人 insured_min_age Integer 投保最小年龄 insured_max_age Integer 投保最大年龄 payout_amount Double 保险赔付金额 staging Integer 是否分期 1 - 分期 2- 不分期 total_price Double 一次缴费价格 first_month_price Double 首月价格 month_price Double 次月价格 social_indemnity Integer 社保 1 - 有社保 2 - 无社保 normal_payout Double 一般医疗保险金 disease_payout String 重疾保险金 payout_ratio Double 赔付比例 hos_address String 医院范围 start_time String 生效时间 free_amount String 免赔额 auto_deduction Integer 是否自动扣费 1-是 2-否 auto_renewal Integer 是否自动续保 1-是 2-否 green Integer 是否包含绿色就医服务 1-是 2-否 in_address String 保障地区 insurer_time Integer 保障期限：单位(天) specialPayOut InsuranceSpecialPayOutInfoSneak XXX医疗保险金 name String 保险金种类 payout Double 赔付金额（单位元） wait Integer 单位（天） highest_protection_cost String 最高保额 payment_term String 缴费年限 complimentary_insurance String 赠险 payment_method String 缴费方式 payment_channel String 支付渠道 upgraded String 链路中是否包含升级 money_management String 是否理财类（是，否） insurance_company_type String 保司&amp;经代 upgraded_premium String 链路中是否包含商品保费升级-其他险必填 feature String 商品特色信息 sales_promotion String 商品促销活动信息 communication_product_info CommunicationProductInfoSneak 通信行业商品特殊信息 region_category String 地域品描述 saving_start_time Long 减价开始时间 saving_end_time Long 减价结束时间 product_view_count Long 商品详情页打开次数 favorite_count Long 收藏用户数 favourable_comment_rate Long 好评率 mark Double 评分 bought Integer 购买量 province_id Long 所在省份ID city_id Long 所在城市ID district_id Long 所在地区ID directional_traffic String 定向流量 general_traffic String 通用流量 total_traffic String 总流量 operator_name String 运营商名称 monthly_rent String 月租（元） product_features String 商品特色 credit_product_info CreditProductInfoSneak 信贷行业商品特殊信息 interest_rate String 最高利率 line_of_credit String 最大可贷额度（元） prepayment String 是否可提前还款 repayment_cycle String 最长支持还款周期 wealth_product_info WealthProductInfo 财富行业商品特殊信息 promotion_price Double 商品推广价 code Integer 结果状态码 message String 错误结果信息 data AdGatewayDpaProductBatchEditResponse 商品批量编辑结果 product_edit_responses ProductUpdateResponseSneak[] 商品编辑返回结果集 library_id Long 商品库ID outer_id String 商品第三方ID success Boolean 编辑结果: true-成功, false-失败 error_msg String 失败错误信息 product_id Long 商品ID
```
