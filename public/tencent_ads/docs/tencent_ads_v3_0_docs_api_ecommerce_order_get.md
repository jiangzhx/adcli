---
title: 获取订单 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/ecommerce_order/get
doc_id: tencent_ads_v3_0_docs_api_ecommerce_order_get
source_id: tencent_ads_v3_0_docs_api_ecommerce_order_get
---
# 获取订单 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_insights |
| --- | --- |
| 请求地址 | ecommerce_order/get |
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
| account_id* | integer | 广告主帐号 id 对订单有所有权的直客帐号或子客帐号 |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 2 |
| field* | string | 过滤字段 可选值：{ ecommerce_order_id, ecommerce_order_status } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#filter_operator) 当 field 取值 targeting_id 时，可选值：{ EQUALS, IN } 当 field 取值 targeting_name 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 ui_visibility 时，可选值：{ EQUALS } 当 field 取值 created_time 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } 当 field 取值 last_modified_time 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见下面 当 field 取值 targeting_id 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 当 field 取值 targeting_id 且 operator 取值 EQUALS 时， 数组长度为 1 当 field 取值 ui_visibility 时，数组长度为 1 可选值：{ INVISIBLE, VISIBLE } 当 field 取值 targeting_name 时，数组长度为 1 字段长度最小 1 字节，长度最大 120 字节 当 field 取值 created_time 时，数组长度为 1 字段长度为 10 字节 当 field 取值 last_modified_time 时，数组长度为 1 字段长度为 10 字节 |
| date | string | 日期，查询日期，日期格式：YYYY-MM-DD，支持两年内的数据查询 字段长度为 10 字节 |
| date_range* | struct | 日期范围，最多支持查询 90 天内的数据查询 |
| start_date* | string | 开始日期，日期格式：YYYY-MM-DD 字段长度为 10 字节 |
| end_date* | string | 结束日期，日期格式：YYYY-MM-DD 字段长度为 10 字节 |
| page | integer | 页数 默认值：1 |
| page_size | integer | 分页大小 默认值：20 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/ecommerce_order/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=111111111' \
-d 'filtering=[{"field":"ecommerce_order_id","operator":"EQUALS","values":["B503186974486037"]},{"field":"ecommerce_order_status","operator":"IN","values":["SHIPPED","DELIVERED"]}]' \
-d 'date_range={"start_date":"2017-09-10","end_date":"2017-10-10"}' \
-d 'page=1' \
-d 'page_size=20'
curl -v -G 'https://api.e.qq.com/v3.0/ecommerce_order/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=111111111' \
-d 'filtering=[{"field":"ecommerce_order_id","operator":"EQUALS","values":["B503186974486037"]},{"field":"ecommerce_order_status","operator":"IN","values":["SHIPPED","DELIVERED"]}]' \
-d 'date_range={"start_date":"2017-09-10","end_date":"2017-10-10"}' \
-d 'page=1' \
-d 'page_size=20'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 订单列表 默认值：20 |
| account_id | integer | 广告主帐号 id 对订单有所有权的直客帐号或子客帐号 默认值：20 |
| ecommerce_order_id | string | 订单 id 默认值：20 |
| customized_page_name | string | 页面名称 |
| commodity_package_detail | string | 套餐明细 |
| quantity | integer | 数量 |
| price | integer | 单价 单位为分 |
| total_price | integer | 总价 单位为分 |
| ecommerce_order_time | string | 下单时间 |
| ecommerce_order_status | enum | 订单状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#ecommerce_order_status) |
| user_name | string | 姓名 |
| user_phone | string | 手机号码 |
| user_province | string | 下单省份 |
| user_city | string | 下单城市 |
| user_area | string | 下单地区 |
| user_address | string | 收货地址 |
| user_ip | string | 下单 IP |
| user_message | string | 留言 |
| destination_url | string | 落地页 url |
| adgroup_id | int64 | 广告组 id |
| adgroup_name | string | 广告组名称 |
| from_account_id | integer | 来源账户 id 订单的来源广告所对应的广告主账户 id |
| delivery_spec | struct | 物流详情 |
| delivery_tracking_number | string | 快递单号 |
| express_company | enum | 快递公司，快递公司和快递单号两个参数必须同时存在，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#express_company) |
| delivery_info_list | struct[] | 快递详情 包含快递地点及进度等信息 |
| delivery_update_time | string | 日期，查询日期，日期格式：YYYY-MM-DD hh:ii:ss，支持两年内的数据查询 |
| delivery_detail | string | 快递详情 |
| page_info | struct | 分页配置信息 |
| page | integer | 页数 默认值：1 |
| page_size | integer | 分页大小 默认值：20 |
| total_number | integer | 总条数 默认值：20 |
| total_page | integer | 总页数 默认值：20 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "adgroup_id": "123345",
                "adgroup_name": "微信广告",
                "from_account_id": "123456",
                "ecommerce_order_id": "B503186974486037",
                "quantity": 1,
                "price": 9900,
                "total_price": 9900,
                "user_name": "张三",
                "user_phone": "13800138000",
                "user_province": "黑龙江省",
                "user_city": "大庆市",
                "user_area": "肇源县",
                "user_address": "黑龙江省大庆市肇源县阿瓦尔瓦尔",
                "user_ip": "10.41.79.52",
                "ecommerce_order_time": "2018-05-03 11:38:17",
                "user_message": "",
                "account_id": "123456",
                "ecommerce_order_status": "DELIVERED",
                "customized_page_name": "营销组件-商品购物页",
                "destination_url": "http://ec.flzhan.cn/?r_id=134545034_7223c337c&pagetype=SINGLE&_bid=2759",
                "commodity_package_detail": "营销组件-商品购物页;产品一:蓝色,34;",
                "delivery_spec": {
                    "delivery_tracking_number": "123456",
                    "express_company": "ZTO",
                    "delivery_info_list": [
                        {
                            "delivery_update_time": "2019-06-28 10:40:17",
                            "delivery_detail": "货物已由本人签收，感谢您选择 xxx 物流！"
                        },
                        {
                            "delivery_update_time": "2019-06-28 08:40:34",
                            "delivery_detail": "配送员开始配送，请您准备收货，配送员，xxx，手机号，xxx"
                        },
                        {
                            "delivery_update_time": "2019-06-28 07:59:18",
                            "delivery_detail": "货物已分配，等待配送"
                        },
                        {
                            "delivery_update_time": "2019-06-28 07:59:17",
                            "delivery_detail": "货物已到达【北京角门营业部】"
                        },
                        {
                            "delivery_update_time": "2019-06-28 02:46:30",
                            "delivery_detail": "货物已完成分拣，离开【北京通州分拣中心】"
                        },
                        {
                            "delivery_update_time": "2019-06-27 23:31:28",
                            "delivery_detail": "货物已到达【北京通州分拣中心】"
                        },
                        {
                            "delivery_update_time": "2019-06-26 17:37:31",
                            "delivery_detail": "货物已完成分拣，离开【武汉外单分拣中心】"
                        },
                        {
                            "delivery_update_time": "2019-06-25 22:12:30",
                            "delivery_detail": "货物已完成分拣，离开【揭阳分拨中心】"
                        },
                        {
                            "delivery_update_time": "2019-06-24 19:27:29",
                            "delivery_detail": "货物已交付 xxx 物流"
                        },
                        {
                            "delivery_update_time": "2019-06-24 19:27:29",
                            "delivery_detail": "配送员 xxx 已经揽收完成"
                        }
                    ]
                }
            },
            {
                "adgroup_id": "123345",
                "adgroup_name": "微信朋友圈",
                "from_account_id": "123456",
                "ecommerce_order_id": "B503190359103349",
                "quantity": 1,
                "price": 9900,
                "total_price": 9900,
                "user_name": "李四",
                "user_phone": "13800138000",
                "user_province": "河北省",
                "user_city": "承德市",
                "user_area": "平泉县",
                "user_address": "河北省承德市平泉县温热污染",
                "user_ip": null,
                "ecommerce_order_time": "2018-05-03 11:43:55",
                "user_message": "",
                "account_id": "20345",
                "ecommerce_order_status": "AWAITING_ORDER",
                "customized_page_name": "营销组件-商品购物页",
                "destination_url": "https://0d493661.fyeds5.com/?r_id=134545195_f3fe56c3a&pagetype=SINGLE&_bid=2759",
                "commodity_package_detail": "营销组件-商品购物页;产品一:蓝色,34;",
                "delivery_spec": []
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 20,
            "total_number": 2,
            "total_page": 1
        }
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
