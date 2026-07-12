---
title: 获取待确认接收授权列表接口 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/asset_pre_permissions/get
doc_id: tencent_ads_v3_0_docs_api_asset_pre_permissions_get
source_id: tencent_ads_v3_0_docs_api_asset_pre_permissions_get
---
# 获取待确认接收授权列表接口 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | asset_pre_permissions/get |
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
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和账户 id |
| asset_type* | enum | 资产类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#asset_type) 可选值：{ ASSET_TYPE_NDMP, ASSET_TYPE_XIJING, ASSET_TYPE_CANVAS_WECHAT, ASSET_TYPE_CANVAS_IMAGE, ASSET_TYPE_CANVAS_VIDEO, ASSET_TYPE_FENGYE, ASSET_TYPE_DYNAMIC_AD_TEMPLATE, ASSET_TYPE_AD_QUALIFICATION, ASSET_TYPE_CATALOG, ASSET_TYPE_ACTION_SET, ASSET_TYPE_CONVERSION_SPEC, ASSET_TYPE_UNION_PACKAGE, ASSET_TYPE_ACCOUNT_WECHAT_CANVAS, ASSET_TYPE_PROFILE, ASSET_TYPE_LOCAL_STORE, ASSET_TYPE_INTERACTIVE_PRIVATE_TEMPLATE, ASSET_TYPE_DN_DATA_SOURCE, ASSET_TYPE_DN_DATA_SET, ASSET_TYPE_DN_FILE, ASSET_TYPE_SEARCH_BRAND_AREA } |
| asset_id | integer | 资产 id |
| asset_name | string | 资产名称 字段长度最小 0 字节，长度最大 90 字节 |
| path_type | enum | 资产授权路径类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#path_type) 可选值：{ PATH_TYPE_BM, PATH_TYPE_MDM, PATH_TYPE_POINT_TO_POINT, PATH_TYPE_AGENCY } |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/asset_pre_permissions/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/asset_pre_permissions/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和账户 id |
| owner_account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和账户 id |
| asset_id | integer | 资产 id |
| asset_name | string | 资产名称 |
| asset_type | enum | 资产类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#asset_type) |
| path_id | integer | 资产授权路径 id，当资产授权路径为 PATH_TYPE_POINT_TO_POINT 时，表示被授权帐号 id ；其他类型时为被授权帐号 id 对应的商务管家 id 或 MDM id |
| path_type | enum | 资产授权路径类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#path_type) |
| is_granted_all | enum | 资产授权维度，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#grant_all_type) |
| grant_time | integer | 授权时间，时间戳 |
| permission_list | enum[] | 权限 id 列表，目前只针对行为数据源资产和新人群包资产授权有效，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#permission_type) |
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
                "account_id": "<ACCOUNT_ID>",
                "permission_list": []
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

请求

问题仍未解决？

请前往腾讯营销反馈中心在线提交问题，我们的人工客服将为你服务
