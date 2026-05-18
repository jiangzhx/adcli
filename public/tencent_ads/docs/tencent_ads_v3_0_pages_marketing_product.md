---
title: 如何创建推广内容资产
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/marketing_product
doc_id: tencent_ads_v3_0_pages_marketing_product
source_id: tencent_ads_v3_0_pages_marketing_product
---
# 如何创建推广内容资产

# 1. 概述

3.0 新投放资产 API，支持开发者通过 API 创建和管理通用产品、行业产品，本专题主要介绍行业产品的创建流程

# 2. 名词

| 中文 | api 英文 | 类型 | 说明 |
| --- | --- | --- | --- |
| 推广内容类型 | marketing_target_type | enum | 定义参考 3.1、3.2 |
| 产品类型 | marketing_asset_type | enum | 定义参考 3.3 |
| 产品名称 | marketing_asset_name | string |  |
| 产品 id | marketing_asset_id | integer |  |
| 业务单元 id | organization_id | integer |  |
| 类目 | marketing_asset_category | string | 类目，1 级到末级类目，通过 - 连接 |
| 属性 KEY | property_name | enum | 属性 key：PROMOTED_ATTR_KEY_XXX |
| 属性值 | property_values | []string | 可选值 |

# 3. 行业产品分类

## 3.1. CPV 类行业产品库

| 产品分类 | 枚举定义 |
| --- | --- |
| 招商加盟产品库 | MARKETING_TARGET_TYPE_FRANCHISE_BRAND |
| 商务服务产品库 | MARKETING_TARGET_TYPE_ENTERPRISE_SERVICES |
| 引流直播间库 | MARKETING_TARGET_TYPE_LIVE_STREAM_ROOM |
| 个人店铺库 | MARKETING_TARGET_TYPE_PERSONAL_STORE |
| 影音文娱产品库 | MARKETING_TARGET_TYPE_AUDIOVISUAL_ENTERTAINMENT |
| 平台频道产品库 | MARKETING_TARGET_TYPE_PLATFORM_CHANNEL |
| 平台店铺库 | MARKETING_TARGET_TYPE_STORE |
| 金融产品库 | MARKETING_TARGET_TYPE_FINANCE |
| 活动库 | MARKETING_TARGET_TYPE_ACTIVITY |
| 餐饮休娱产品库 | MARKETING_TARGET_TYPE_CATERING_AND_LEISURE |
| 连锁餐饮产品库 | MARKETING_TARGET_TYPE_CHAIN_RESTAURANT |
| 教育产品库 | MARKETING_TARGET_TYPE_PRODUCT |
| 运营商产品库 | MARKETING_TARGET_TYPE_TELECOMMUNICATIONS_OPERATOR |
| 装修服务库 | MARKETING_TARGET_TYPE_RENOVATION_SERVICES |
| 家具建材库 | MARKETING_TARGET_TYPE_FURNITURE_AND_BUILDING_MATERIALS |
| 丽人产品库 | MARKETING_TARGET_TYPE_BEAUTY_AND_PERSONAL_CARE |
| 婚恋摄影产品库 | MARKETING_TARGET_TYPE_WEDDING_AND_PORTRAIT_PHOTOGRAPHY |
| 综合家政产品库 | MARKETING_TARGET_TYPE_COMPREHENSIVE_HOUSEKEEPING |

## 3.2. SPU 类行业产品库

| 产品分类 | 枚举定义 |
| --- | --- |
| 交通产品库 | MARKETING_TARGET_TYPE_TRAFFIC |
| 房产产品库 | MARKETING_TARGET_TYPE_REAL_ESTATE |
| 景点门票产品库 | MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS |
| 旅行路线产品库 | MARKETING_TARGET_TYPE_TOURIST_TRAVEL_ROUTE |
| 邮轮航线产品库 | MARKETING_TARGET_TYPE_TOURIST_CRUISE_LINE |
| 酒店服务产品库 | MARKETING_TARGET_TYPE_TOURIST_HOTEL_SERVICE |
| 航司票务产品库 | MARKETING_TARGET_TYPE_TOURIST_AIRLINE_TICKETS |
| 二轮车产品库 | MARKETING_TARGET_TYPE_TWO_WHEEL_VEHICLE |
| 政务产品库 | MARKETING_TARGET_TYPE_GOVERNMENT_AFFAIRS |
| 影视节目产品库 | MARKETING_TARGET_TYPE_VIDEO_PROGRAM |

## 3.3. 行业产品库产品类型说明

| 产品分类 | 产品类型 | 枚举定义 | SPU 分类 |
| --- | --- | --- | --- |
| 金融产品库 | 贷款 | MARKETING_ASSET_TYPE_FINANCE_LOAN |  |
| 金融产品库 | 保险-直销 | MARKETING_ASSET_TYPE_FINANCE_INSURANCE_A |  |
| 金融产品库 | 保险代理/保险经纪/经纪人招募 | MARKETING_ASSET_TYPE_FINANCE_INSURANCE_C |  |
| 金融产品库 | 银行卡-单一卡 | MARKETING_ASSET_TYPE_FINANCE_BANK_CARD_A |  |
| 金融产品库 | 银行卡-系列卡 | MARKETING_ASSET_TYPE_FINANCE_BANK_CARD_C |  |
| 金融产品库 | 财富 | MARKETING_ASSET_TYPE_FINANCE_WEALTH |  |
| 金融产品库 | 其他金融 | MARKETING_ASSET_TYPE_FINANCE_OTHER |  |
| 运营商产品库 | 彩铃 | MARKETING_ASSET_TYPE_TELECOMMUNICATIONS_OPERATOR_RINGTONE |  |
| 运营商产品库 | 会员权益包 | MARKETING_ASSET_TYPE_TELECOMMUNICATIONS_OPERATOR_MEMBERSHIP_BENEFIT_PACKAGE |  |
| 运营商产品库 | 流量包 | MARKETING_ASSET_TYPE_TELECOMMUNICATIONS_OPERATOR_DATA_PACK |  |
| 运营商产品库 | 号卡 | MARKETING_ASSET_TYPE_TELECOMMUNICATIONS_OPERATOR_NUMBER_CARD |  |
| 运营商产品库 | 宽带 | MARKETING_ASSET_TYPE_TELECOMMUNICATIONS_OPERATOR_BROADBAND |  |
| 运营商产品库 | 靓号交易 | MARKETING_ASSET_TYPE_TELECOMMUNICATIONS_OPERATOR_NICE_MEMBER_DEAL |  |
| 运营商产品库 | 其他 | MARKETING_ASSET_TYPE_TELECOMMUNICATIONS_OPERATOR_OTHER |  |
| 装修服务库 | 服务 | MARKETING_ASSET_TYPE_RENOVATION_SERVICES_SERVICE |  |
| 装修服务库 | 品牌 | MARKETING_ASSET_TYPE_RENOVATION_SERVICES_BRAND |  |
| 家具建材库 | 商品 | MARKETING_ASSET_TYPE_FURNITURE_AND_BUILDING_MATERIALS_PRODUCT |  |
| 家具建材库 | 品牌 | MARKETING_ASSET_TYPE_FURNITURE_AND_BUILDING_MATERIALS_BRAND |  |
| 交通产品库 | 品牌 | MARKETING_ASSET_TYPE_TRAFFIC_CAR_BRAND |  |
| 交通产品库 | 车系 | MARKETING_ASSET_TYPE_TRAFFIC_CAR_SERIES |  |
| 交通产品库 | 车型 | MARKETING_ASSET_TYPE_TRAFFIC_CAR_MODEL |  |
| 影视节目产品库 | 影视节目 | MARKETING_ASSET_TYPE_VIDEO_PROGRAM_MAIN |  |
| 房产产品库 | 品牌 | MARKETING_ASSET_TYPE_REAL_ESTATE_BRAND | SPU 上卷 |
| 房产产品库 | 楼盘 | MARKETING_ASSET_TYPE_REAL_ESTATE_REAL_ESTATE | SPU 上卷 |
| 房产产品库 | 户型 | MARKETING_ASSET_TYPE_REAL_ESTATE_LAYOUT | SPU 列表 |
| 景点门票产品库 | 景点 | MARKETING_ASSET_TYPE TOURIST_ATTRACTIONS_TICKETS_ATTRACTION | SPU 上卷 |
| 景点门票产品库 | 门票套餐 | MARKETING_ASSET_TYPE TOURIST_ATTRACTIONS_TICKETS_TICKET_PACKAGE | SPU 列表 |
| 旅行路线产品库 | 品牌 | MARKETING_ASSET_TYPE TOURIST_TRAVEL_ROUTE_BRAND | SPU 上卷 |
| 旅行路线产品库 | 自由行路线 | MARKETING_ASSET_TYPE TOURIST_TRAVEL_ROUTE_FREE | SPU 上卷 |
| 旅行路线产品库 | 旅行路线 | MARKETING_ASSET_TYPE TOURIST_TRAVEL_TRAVEL_ROUTE | SPU 列表 |
| 邮轮航线产品库 | 邮轮品牌 | MARKETING_ASSET_TYPE TOURIST_CRUISE_LINE_CRUISE_BRAND | SPU 上卷 |
| 邮轮航线产品库 | 邮轮名称 | MARKETING_ASSET_TYPE TOURIST_CRUISE_LINE_CRUISE_NAME | SPU 上卷 |
| 酒店服务产品库 | 品牌 | MARKETETING_ASSET_TYPE TOURIST HOTEL_SERVICE_BRAND | SPU 上卷 |
| 酒店服务产品库 | 服务 | MARKETETING_ASSET_TYPE TOURIST HOTEL_SERVICE_SERVICE | SPU 上卷 |
| 航司票务产品库 | 航空公司 | MARKETING_ASSET_TYPE TOURIST_AIRLINE_TICKETS_AIRLINE | SPU 上卷 |
| 航司票务产品库 | 机票 | MARKETING_ASSET_TYPE TOURIST_AIRLINE_TICKETS_TICKETS | SPU 上卷 |

# 4. 行业资产创建流程

## 4.1. CPV 类行业产品创建流程

以家居行业装修服务产品库为例

### 4.1.1. 获取资产可用类目

接口：marketing_target_asset_categories/get 请求参数

```
{
    "organization_id": 12345678,
    "marketing_target_type": "MARKETING_TARGET_TYPE_RENOVATION_SERVICES",
    "page": 1,
    "page_size": 3
}
```

返回参数

```
{
    "code": 0,
    "data": {
        "page_info": {
            "total_number": 11,
            "total_page": 4,
            "page": 1,
            "page_size": 3
        },
        "list": [
            {
                "cate1_id": "1000000030",
                "cate3_name": "",
                "cate2_name": "全屋整装",
                "cate1_name": "装修公司",
                "cate4_name": "",
                "cate3_id": "",
                "cate2_id": "1000000035",
                "cate4_id": ""
            },
            {
                "cate1_id": "1000000030",
                "cate3_name": "",
                "cate2_name": "局部装修",
                "cate1_name": "装修公司",
                "cate4_name": "",
                "cate3_id": "",
                "cate2_id": "1000000036",
                "cate4_id": ""
            }
        ]
    },
    "message_cn": "",
    "message": ""
}
```

### 4.1.2. 查询该类目下支持的属性

接口：marketing_target_asset_properties/get 请求参数

```
{
    "marketing_asset_type": "MARKETING_ASSET_TYPE_RENOVATION_SERVICES_SERVICE",
    "organization_id": 12345678,
    "marketing_target_type": "MARKETING_TARGET_TYPE_RENOVATION_SERVICES",
    "marketing_asset_category": "装修公司-全屋整装"
}
```

返回参数

```
{
	"code": 0,
	"data": {
		"list": [{
				"is_required": true,
				"property_type": "ATTRIBUTE_TYPE_ENUM",
				"property_class": "MARKETING_ASSET_ATTR_CLASS_MARKETING",
				"property_value": [
					"1916 板材",
					"GALLOTTI E RADICE S.R.L.",
					"I4F LICENSING NV",
					"NordicNestAB",
					"阿克苏洁雅装饰装修有限公司阿克苏分公司",
					"安徽华然装饰设计有限责任公司"
				],
				"is_multiple": false,
				"property_cn": "公司名称",
				"property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_COMPANY_NAME"
			},
			{
				"is_required": true,
				"property_type": "ATTRIBUTE_TYPE_ENUM",
				"property_class": "MARKETING_ASSET_ATTR_CLASS_MARKETING",
				"property_value": [
					"不限",
					"全包装修",
					"半包装修",
					"纯设计",
					"软装",
					"拎包入住/全案装修",
					"其他"
				],
				"is_multiple": false,
				"property_cn": "施工方式",
				"property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_CONSTRUCTION_METHOD"
			},
			{
				"is_required": true,
				"property_type": "ATTRIBUTE_TYPE_ENUM",
				"property_class": "MARKETING_ASSET_ATTR_CLASS_MARKETING",
				"property_value": [
					"不限",
					"普通住宅",
					"复式 loft",
					"别墅大宅",
					"大平层",
					"商业办公空间",
					"其他"
				],
				"is_multiple": false,
				"property_cn": "房屋类型",
				"property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_HOUSE_TYPE"
			},
			{
				"is_required": true,
				"property_type": "ATTRIBUTE_TYPE_ENUM",
				"property_class": "MARKETING_ASSET_ATTR_CLASS_MARKETING",
				"property_value": [
					"不限",
					"50 ㎡起",
					"70 ㎡起",
					"90 ㎡起",
					"120 ㎡起",
					"150 ㎡起",
					"200 ㎡起"
				],
				"is_multiple": false,
				"property_cn": "面积要求",
				"property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_AREA_REQUIREMENTS"
			},
			{
				"is_required": false,
				"property_type": "ATTRIBUTE_TYPE_ENUM",
				"property_class": "MARKETING_ASSET_ATTR_CLASS_ADDITIONAL",
				"property_value": [
					"现代",
					"美式",
					"欧式",
					"中式",
					"北欧",
					"混搭",
					"新古典",
					"简欧",
					"工业",
					"后现代",
					"轻奢",
					"意式",
					"日式",
					"法式",
					"其他"
				],
				"is_multiple": true,
				"property_cn": "风格",
				"property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_STYLE"
			},
			{
				"is_required": false,
				"property_type": "ATTRIBUTE_TYPE_TREE",
				"property_class": "MARKETING_ASSET_ATTR_CLASS_ADDITIONAL",
				"property_value": [
					"[{\"name\":\"中国未知\",\"id\":20002,\"gb_code\":\"0156\",\"child\":null},{\"name\":\"广东省\",\"id\":25843,\"gb_code\":\"440000\",\"child\":[{\"name\":\"广东省未知\",\"id\":25845,\"gb_code\":\"449900\",\"child\":null},{\"name\":\"深圳市\",\"id\":26015,\"gb_code\":\"440300\",\"child\":[{\"name\":\"罗湖区\",\"id\":26017,\"gb_code\":\"440303\",\"child\":null},{\"name\":\"福田区\",\"id\":26019,\"gb_code\":\"440304\",\"child\":null},{\"name\":\"南山区\",\"id\":26021,\"gb_code\":\"440305\",\"child\":null},{\"name\":\"宝安区\",\"id\":26023,\"gb_code\":\"440306\",\"child\":null},{\"name\":\"龙岗区\",\"id\":26025,\"gb_code\":\"440307\",\"child\":null},{\"name\":\"盐田区\",\"id\":26027,\"gb_code\":\"440308\",\"child\":null},{\"name\":\"龙华区\",\"id\":26029,\"gb_code\":\"440309\",\"child\":null},{\"name\":\"坪山区\",\"id\":26031,\"gb_code\":\"440310\",\"child\":null}]}]}]"
				],
				"is_multiple": true,
				"property_cn": "服务区域",
				"property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_SERVICE_AREA"
			}
		]
	},
	"message_cn": "",
	"message": ""
}
```

### 4.1.3. 创建资产

接口：marketing_target_assets/add 请求参数

```
{
    "organization_id": 12345678,
    "marketing_target_type": "MARKETING_TARGET_TYPE_RENOVATION_SERVICES",
    "marketing_asset_type": "MARKETING_ASSET_TYPE_RENOVATION_SERVICES_SERVICE",
    "marketing_asset_name": "装修公司-全屋整装-安徽华然装-复式 loft",
    "properties": [
        {
            "property_value": [
                "装修公司-全屋整装"
            ],
            "property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_CATE_NAME"
        },
        {
            "property_value": [
                "安徽华然装饰设计有限责任公司"
            ],
            "property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_COMPANY_NAME"
        },
        {
            "property_value": [
                "拎包入住/全案装修"
            ],
            "property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_CONSTRUCTION_METHOD"
        },
        {
            "property_value": [
                "复式 loft"
            ],
            "property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_HOUSE_TYPE"
        },
        {
            "property_value": [
                "200 ㎡起"
            ],
            "property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_AREA_REQUIREMENTS"
        },
        {
            "property_value": [
                "现代",
                "美式",
                "欧式",
                "中式",
                "北欧",
                "混搭",
                "新古典",
                "简欧",
                "工业",
                "后现代",
                "轻奢",
                "意式",
                "日式",
                "法式",
                "其他"
            ],
            "property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_STYLE"
        },
        {
            "property_value": [
                "440309",
                "440307",
                "440310"
            ],
            "property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_SERVICE_AREA"
        }
    ]
}
```

返回参数

```
{
    "code": 0,
    "data": {
        "marketing_asset_id": 123456
    },
    "message_cn": "",
    "message": ""
}
```

### 4.1.4. 查询可用资产

接口：marketing_target_asset_detail/get 请求参数

```
{
    "account_id": 12345678,
    "marketing_target_type": "MARKETING_TARGET_TYPE_RENOVATION_SERVICES",
    "marketing_asset_id": 123456
}
```

返回参数

```
{
    "code": 0,
    "data": {
        "list": [
            {
                "created_time": 1711420569,
                "marketing_asset_name": "装修公司-全屋整装-安徽华然装-复式 loft",
                "marketing_asset_type": "MARKETING_ASSET_TYPE_RENOVATION_SERVICES_SERVICE",
                "marketing_target_type": "MARKETING_TARGET_TYPE_RENOVATION_SERVICES",
                "extra_properties": [],
                "marketing_asset_id": 123456,
                "properties": [
                    {
                        "property_value": [
                            "轻奢",
                            "美式",
                            "简欧",
                            "现代",
                            "混搭",
                            "法式",
                            "欧式",
                            "日式",
                            "新古典",
                            "意式",
                            "工业",
                            "后现代",
                            "北欧",
                            "其他",
                            "中式"
                        ],
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_STYLE"
                    },
                    {
                        "property_value": [
                            "200 ㎡起"
                        ],
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_AREA_REQUIREMENTS"
                    },
                    {
                        "property_value": [
                            "拎包入住/全案装修"
                        ],
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_CONSTRUCTION_METHOD"
                    },
                    {
                        "property_value": [
                            "安徽华然装饰设计有限责任公司"
                        ],
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_COMPANY_NAME"
                    },
                    {
                        "property_value": [
                            "广东省/深圳市/坪山区",
                            "广东省/深圳市/龙华区",
                            "广东省/深圳市/龙岗区"
                        ],
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_SERVICE_AREA"
                    },
                    {
                        "property_value": [
                            "复式 loft"
                        ],
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_HOUSE_TYPE"
                    },
                    {
                        "property_value": [
                            "装修公司-全屋整装"
                        ],
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_RENOVATION_SERVICES_CATE_NAME"
                    }
                ]
            }
        ]
    },
    "message_cn": "",
    "message": ""
}
```

## 4.2. SPU 类行业产品创建流程

### 4.2.1. SPU 列表类型资产

##### 4.2.1.1. 获取可用的属性

接口：marketing_target_asset_property_values/get 请求参数（注意：影视界面产品库使用 query_word 进行模糊查询）

```
{
    "organization_id": 12345678,
    "marketing_target_type": "MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS",
    "marketing_asset_type": "MARKETING_ASSET_TYPE_TOURIST_ATTRACTIONS_TICKETS_TICKET_PACKAGE",
    "filtering": [
        {
            "field": "name",
            "values": [
                "深圳"
            ],
            "operator": "CONTAINS" //模糊匹配查询深圳的门票套餐, 可以不加 filtering 拉取所有
        }
    ],
    "page": 1,
    "page_size": 3
}
```

返回参数

```
{
	"code": 0,
	"data": {
		"page_info": {
			"total_number": 3,
			"total_page": 0,
			"page": 1,
			"page_size": 3
		},
		"list": [{
				"extra_properties": [{
						"property_value": [
							"蛇口-深圳-深圳蛇口-珠海横琴"
						],
						"property_cn": "asset_name"
					},
					{
						"property_value": [
							"深圳"
						],
						"property_cn": "所在城市"
					},
					{
						"property_value": [
							"深圳蛇口-珠海横琴"
						],
						"property_cn": "门票类型"
					},
					{
						"property_value": [
							"蛇口"
						],
						"property_cn": "景区名称"
					},
					{
						"property_value": [
							"其他"
						],
						"property_cn": "景区级别"
					}
				],
				"properties": [{
					"is_required": false,
					"property_type": "",
					"property_class": "MARKETING_ASSET_ATTR_CLASS_UNKNOWN",
					"property_value": [
						"4970300219130753775"
					],
					"is_multiple": false,
					"property_cn": "SPU_ID",
					"property_name": "PROMOTED_ASSET_ATTR_KEY_SPU_ID"
				}]
			},
			{
				"extra_properties": [{
						"property_value": [
							"深圳观光巴士-深圳-深圳观光巴士票"
						],
						"property_cn": "asset_name"
					},
					{
						"property_value": [
							"其他"
						],
						"property_cn": "景区级别"
					},
					{
						"property_value": [
							"深圳观光巴士票"
						],
						"property_cn": "门票类型"
					},
					{
						"property_value": [
							"深圳观光巴士"
						],
						"property_cn": "景区名称"
					},
					{
						"property_value": [
							"深圳"
						],
						"property_cn": "所在城市"
					}
				],
				"properties": [{
					"is_required": false,
					"property_type": "",
					"property_class": "MARKETING_ASSET_ATTR_CLASS_UNKNOWN",
					"property_value": [
						"6303937172711358713"
					],
					"is_multiple": false,
					"property_cn": "SPU_ID",
					"property_name": "PROMOTED_ASSET_ATTR_KEY_SPU_ID"
				}]
			},
			{
				"extra_properties": [{
						"property_value": [
							"深圳小泥巴营地-深圳-深圳小泥巴营地门票"
						],
						"property_cn": "asset_name"
					},
					{
						"property_value": [
							"深圳"
						],
						"property_cn": "所在城市"
					},
					{
						"property_value": [
							"深圳小泥巴营地门票"
						],
						"property_cn": "门票类型"
					},
					{
						"property_value": [
							"深圳小泥巴营地"
						],
						"property_cn": "景区名称"
					},
					{
						"property_value": [
							"其他"
						],
						"property_cn": "景区级别"
					}
				],
				"properties": [{
					"is_required": false,
					"property_type": "",
					"property_class": "MARKETING_ASSET_ATTR_CLASS_UNKNOWN",
					"property_value": [
						"4042032770680528117"
					],
					"is_multiple": false,
					"property_cn": "SPU_ID",
					"property_name": "PROMOTED_ASSET_ATTR_KEY_SPU_ID"
				}]
			}
		]
	},
	"message_cn": "",
	"message": ""
}
```

##### 4.2.1.2. 创建资产

接口：marketing_target_assets/add 请求参数

```
{
    "organization_id": 12345678,
    "marketing_target_type": "MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS",
    "marketing_asset_type": "MARKETING_ASSET_TYPE_TOURIST_ATTRACTIONS_TICKETS_TICKET_PACKAGE",
    "properties": [
        {
            "property_value": [
                "4042032770680528117"
            ],
            "property_name": "PROMOTED_ASSET_ATTR_KEY_SPU_ID"
        }
    ]
}
```

返回参数

```
{
    "code": 0,
    "data": {
        "marketing_asset_id": 123456
    },
    "message_cn": "",
    "message": ""
}
```

### 4.2.2. SPU 上卷类型资产

##### 4.2.2.1. 获取可用的属性

接口：marketing_target_asset_property_values/get 请求参数

```
{
    "marketing_asset_type": "MARKETING_ASSET_TYPE_TOURIST_ATTRACTIONS_TICKETS_ATTRACTION",
    "organization_id": 12345678,
    "marketing_target_type": "MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS",
    "filtering": [
        {
            "field": "query_word",
            "values": [
                "深圳"
            ],
            "operator": "CONTAINS"//模糊匹配查询深圳的景点, 可以不加 filtering 拉取所有
        }
    ],
    "page": 1,
    "page_size": 3
}
```

返回参数

```
{
    "code": 0,
    "data": {
        "page_info": {
            "total_number": 3,
            "total_page": 0,
            "page": 1,
            "page_size": 3
        },
        "list": [
            {
                "extra_properties": [
                    {
                        "property_value": [
                            "深圳-深圳欢乐海岸"
                        ],
                        "property_cn": "asset_name"
                    }
                ],
                "properties": [
                    {
                        "is_required": false,
                        "property_type": "",
                        "property_class": "MARKETING_ASSET_ATTR_CLASS_UNKNOWN",
                        "property_value": [
                            "深圳欢乐海岸"
                        ],
                        "is_multiple": false,
                        "property_cn": "景区名称",
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_TOURIST_ATTRACTIONS_TICKETS_SCENIC_SPOT_NAME"
                    },
                    {
                        "is_required": false,
                        "property_type": "",
                        "property_class": "MARKETING_ASSET_ATTR_CLASS_UNKNOWN",
                        "property_value": [
                            "深圳"
                        ],
                        "is_multiple": false,
                        "property_cn": "所在城市",
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_TOURIST_ATTRACTIONS_TICKETS_CITY"
                    },
                    {
                        "is_required": false,
                        "property_type": "",
                        "property_class": "MARKETING_ASSET_ATTR_CLASS_UNKNOWN",
                        "property_value": [
                            "其他"
                        ],
                        "is_multiple": false,
                        "property_cn": "景区级别",
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_TOURIST_ATTRACTIONS_TICKETS_SCENIC_SPOT_LEVEL"
                    }
                ]
            },
            {
                "extra_properties": [
                    {
                        "property_value": [
                            "深圳-深圳观光巴士"
                        ],
                        "property_cn": "asset_name"
                    }
                ],
                "properties": [
                    {
                        "is_required": false,
                        "property_type": "",
                        "property_class": "MARKETING_ASSET_ATTR_CLASS_UNKNOWN",
                        "property_value": [
                            "深圳观光巴士"
                        ],
                        "is_multiple": false,
                        "property_cn": "景区名称",
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_TOURIST_ATTRACTIONS_TICKETS_SCENIC_SPOT_NAME"
                    },
                    {
                        "is_required": false,
                        "property_type": "",
                        "property_class": "MARKETING_ASSET_ATTR_CLASS_UNKNOWN",
                        "property_value": [
                            "深圳"
                        ],
                        "is_multiple": false,
                        "property_cn": "所在城市",
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_TOURIST_ATTRACTIONS_TICKETS_CITY"
                    },
                    {
                        "is_required": false,
                        "property_type": "",
                        "property_class": "MARKETING_ASSET_ATTR_CLASS_UNKNOWN",
                        "property_value": [
                            "其他"
                        ],
                        "is_multiple": false,
                        "property_cn": "景区级别",
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_TOURIST_ATTRACTIONS_TICKETS_SCENIC_SPOT_LEVEL"
                    }
                ]
            },
            {
                "extra_properties": [
                    {
                        "property_value": [
                            "深圳-深圳小泥巴营地"
                        ],
                        "property_cn": "asset_name"
                    }
                ],
                "properties": [
                    {
                        "is_required": false,
                        "property_type": "",
                        "property_class": "MARKETING_ASSET_ATTR_CLASS_UNKNOWN",
                        "property_value": [
                            "深圳小泥巴营地"
                        ],
                        "is_multiple": false,
                        "property_cn": "景区名称",
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_TOURIST_ATTRACTIONS_TICKETS_SCENIC_SPOT_NAME"
                    },
                    {
                        "is_required": false,
                        "property_type": "",
                        "property_class": "MARKETING_ASSET_ATTR_CLASS_UNKNOWN",
                        "property_value": [
                            "深圳"
                        ],
                        "is_multiple": false,
                        "property_cn": "所在城市",
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_TOURIST_ATTRACTIONS_TICKETS_CITY"
                    },
                    {
                        "is_required": false,
                        "property_type": "",
                        "property_class": "MARKETING_ASSET_ATTR_CLASS_UNKNOWN",
                        "property_value": [
                            "其他"
                        ],
                        "is_multiple": false,
                        "property_cn": "景区级别",
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_TOURIST_ATTRACTIONS_TICKETS_SCENIC_SPOT_LEVEL"
                    }
                ]
            }
        ]
    },
    "message_cn": "",
    "message": ""
}
```

##### 4.2.2.2.创建资产

接口：marketing_target_assets/add 请求参数

```
{
    "organization_id": 12345678,
    "marketing_target_type": "MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS",
    "marketing_asset_type": "MARKETING_ASSET_TYPE_TOURIST_ATTRACTIONS_TICKETS_ATTRACTION",
    "properties": [
        {
            "property_value": [
                "深圳观光巴士"
            ],
            "property_name": "PROMOTED_ASSET_ATTR_KEY_TOURIST_ATTRACTIONS_TICKETS_SCENIC_SPOT_NAME"
        },
        {
            "property_value": [
                "深圳"
            ],
            "property_name": "PROMOTED_ASSET_ATTR_KEY_TOURIST_ATTRACTIONS_TICKETS_CITY"
        },
        {
            "property_value": [
                "其他"
            ],
            "property_name": "PROMOTED_ASSET_ATTR_KEY_TOURIST_ATTRACTIONS_TICKETS_SCENIC_SPOT_LEVEL"
        }
    ]
}
```

返回参数

```
{
    "code": 0,
    "data": {
        "marketing_asset_id": 123456
    },
    "message_cn": "",
    "message": ""
}
```

## 4.3 创建广告时如何进行传参

创建广告时，推广内容资产的获取通过下面方式实现： ➢ 创建广告时，可通过获取可投放推广内容资产类型名称（marketing_target_types/get）接口查询可投放的推广内容类型、可通过获取可投放推广内容资产相关信息（marketing_target_assets/get）接口查询可投放的推广产品 id（MARKETING_ASSET_ID）以及所属的产品属性，注意：推广内容资产相关信息（marketing_target_assets/get）接口仅支持查询非通用类资产 ➢ 通用类资产（app、小程序、小游戏、视频号、公众号、商品等）通过 adgroup 创建时 marketing_asset_outer_spec 表达 注：推广内容类型（MARKETING_TARGET_TYPE）为 电商商品（MARKETING_TARGET_TYPE_CONSUMER_PRODUCT）时，marketing_asset_outer_spec 通过 获取商品库接口（product_catalogs/get）&获取商品接口（product_items/get）获取对应商品库 id（product_catalog_id）和商品 id（product_outer_id） 已 综合电商行业 为例，在请求广告“营销内容”时：可通过 [获取营销表达组合接口](https://developers.e.qq.com/v3.0/docs/api/marketing_rules/get)，获取可投放的“营销目的、营销对象、营销载体”组合，当前 综合电商行业 支持的营销对象（推广内容）和获取方式： 注：非通用类资产：通过 marketing_asset_id 字段请求；通用类资产：通过 marketing_asset_outer_spec 字段请求；
