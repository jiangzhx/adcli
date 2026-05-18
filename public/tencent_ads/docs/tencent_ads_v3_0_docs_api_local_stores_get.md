---
title: 查询门店信息 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/local_stores/get
doc_id: tencent_ads_v3_0_docs_api_local_stores_get
source_id: tencent_ads_v3_0_docs_api_local_stores_get
---
# 查询门店信息 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | local_stores/get |
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
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 4 |
| field* | string | 过滤字段 可选值：{ poi_id, local_store_name, local_store_province, local_store_city, local_store_address, owner_account_id } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 poi_id 时，可选值：{ EQUALS, IN } 当 field 取值 local_store_name 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 local_store_province 时，可选值：{ EQUALS } 当 field 取值 local_store_city 时，可选值：{ EQUALS } 当 field 取值 local_store_address 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 owner_account_id 时，可选值：{ EQUALS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 poi_id 时，数组长度为 1 字段长度最小 1 字节，长度最大 120 字节 当 field 取值 local_store_name 时，数组长度为 1 字段长度最小 1 字节，长度最大 120 字节 当 field 取值 local_store_province 时，数组长度为 1 字段长度最小 1 字节，长度最大 120 字节 当 field 取值 local_store_city 时，数组长度为 1 字段长度最小 1 字节，长度最大 120 字节 当 field 取值 local_store_address 时，数组长度为 1 字段长度最小 1 字节，长度最大 120 字节 当 field 取值 owner_account_id 时，数组长度为 1 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 2000 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/local_stores/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'page=1' \
-d 'page_size=10' \
-d 'filtering=[]'
curl -v -G 'https://api.e.qq.com/v3.0/local_stores/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'page=1' \
-d 'page_size=10' \
-d 'filtering=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| poi_id | string | poi id |
| local_store_name | string | 门店名称 |
| local_store_province | string | 门店省 |
| local_store_city | string | 门店城市 |
| local_store_address | string | 门店地址 |
| local_store_biz_info | struct | 门店经营信息 |
| poi_id | string | poi id |
| customer_profile | struct | 门店经营信息用户画像 |
| gender | enum | 门店经营信息用户画像性别，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_local_store_customer_profile_gender) |
| age | struct[] | 年龄，范围为 14~66，66 代表的是 66 岁及 66 岁以上，如 18~66 代表大于等于 18 岁 |
| min | integer | 年龄最小值限制，其中 15、16、17 不可以使用 |
| max | integer | 年龄最大值限制 |
| income | struct[] | 门店经营信息用户画像收入 |
| min | integer | 收入最小值限制 |
| max | integer | 收入最大值限制 |
| vehicle | enum[] | 门店经营信息用户画像出行方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_local_store_customer_profile_vehicle) |
| customer_per_cost | integer | 客单价 |
| first_category_id | integer | 一级类目 id，对应门店类目的 vertical_id |
| second_category_id | integer | 二级类目 id |
| third_category_id | integer | 三级类目 id |
| fourth_category_id | integer | 三级类目 id |
| first_category_name | string | 一级类目 |
| second_category_name | string | 二级类目 |
| third_category_name | string | 三级类目 |
| fourth_category_name | string | 四级类目 |
| peak_period | struct[] | 门店高峰时间段 |
| time_series | string | 门店经营信息客流高峰时间段 |
| date | enum | 门店经营信息客流高峰日期，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_local_store_peak_period_date) |
| opening_hours | struct[] | 门店营业时间 |
| time_series | string | 门店经营信息营业时间段 |
| date | enum | 门店经营信息营业时间日期，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_local_store_opening_hours_date) |
| telephone | string | 联系电话，小于 300 个英文字符 |
| special_service | enum[] | 特色服务，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_local_store_special_service) |
| opening_status | enum | 门店经营状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_local_store_opening_status) |
| intro | string | 门店介绍 |
| hide_poi | boolean | 是否在广告上隐藏门店信息 |
| wechat_ecosystem_accounts | struct | 门店微信生态账户 |
| wxpay_merchant_id | string[] | 微信支付商户号，可从查询微信支付商户号接口获取, 最多可输入 10 个微信支付商户号 |
| wechat_official_account_id | string | 公众号 id |
| wechat_mini_program_id | string | 微信小程序 id |
| wechat_channels_id | string | 视频号 id |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，时间戳 |
| system_status | enum | 门店状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_sys_status) |
| local_store_location | struct | 门店位置信息 |
| latitude | float | 门店位置纬度 |
| longitude | float | 门店位置经度 |
| local_store_category | string | 门店分类_腾讯地图 |
| local_store_type | integer | 门店类型 |
| local_store_adcode | integer | 行政区划代码 |
| local_store_district | string | 地区 |
| local_store_street | string | 街道_腾讯地图 |
| local_store_business_area | string | 商圈_腾讯地图 |
| local_store_remark | string | 备注名称 |
| wechat_work_corp_id | integer | 通用 id |
| wechat_customer_service_link | string | 微信客服链接 |
| image_set | struct[] | 门店图集，最多上传 8 张 |
| image_id | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得 |
| status | enum | 门店状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_sys_status) |
| audit_msg | string | 审核原因 |
| recommend_words | struct[] | 推荐列表，最多 6 行，每行至少 2 个字 |
| recommend_word | string | 门店推荐文案 |
| status | enum | 门店状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_sys_status) |
| audit_msg | string | 审核原因 |
| is_use_standardized_name | boolean | 是否使用标准化名称 |
| page_info | struct | 分页配置信息 |
| page | integer | 搜索页码 默认值：1 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "created_time": 1711434137,
                "dianping_id": "",
                "image_set": [],
                "last_modified_time": 1711434137,
                "local_store_adcode": 440305,
                "local_store_address": "海天二路 33 号",
                "local_store_biz_info": {
                    "customer_per_cost": 0,
                    "first_category_id": 0,
                    "first_category_name": "",
                    "fourth_category_id": 0,
                    "fourth_category_name": "",
                    "good_review_count": 0,
                    "good_review_rate": 0,
                    "hide_poi": false,
                    "intro": "",
                    "level": "UNKNOWN",
                    "opening_hours": [],
                    "opening_status": "OPENING_STATUS_OPENING",
                    "peak_period": [],
                    "poi_id": "10015633769202902297",
                    "review_count": 0,
                    "second_category_id": 0,
                    "second_category_name": "",
                    "special_service": [],
                    "star": 0,
                    "star_level": "UNKNOWN",
                    "telephone": "",
                    "third_category_id": 0,
                    "third_category_name": ""
                },
                "local_store_business_area": "",
                "local_store_category": "房产小区:商务楼宇",
                "local_store_city": "深圳市",
                "local_store_district": "南山区",
                "local_store_location": {
                    "latitude": 22.522806,
                    "longitude": 113.93534
                },
                "local_store_name": "腾讯滨海大厦(海天二路店)",
                "local_store_province": "广东省",
                "local_store_remark": "滨海大厦",
                "local_store_street": "海天二路",
                "local_store_type": 0,
                "owner_account_id": 25610,
                "owner_account_name": "腾讯科技(北京)有限公司",
                "poi_id": "10015633769202902297",
                "recommend_words": [],
                "system_status": "AD_STATUS_NORMAL",
                "wechat_customer_service_link": "",
                "wechat_work_corp_id": 0
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 1,
            "total_page": 1
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
