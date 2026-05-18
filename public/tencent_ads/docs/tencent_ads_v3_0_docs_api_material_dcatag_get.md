---
title: 素材 DCA 标签绑定查询 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/material_dcatag/get
doc_id: tencent_ads_v3_0_docs_api_material_dcatag_get
source_id: tencent_ads_v3_0_docs_api_material_dcatag_get
---
# 素材 DCA 标签绑定查询 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | material_dcatag/get |
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
| account_id | integer | 广告主帐号 id |
| image_id_list | integer[] | 图片素材 id 列表 |
| media_id_list | integer[] | 视频素材 id 列表 |
| marketing_asset_id | integer | 推广产品 id，当推广内容资产类型为：MARKETING_TARGET_TYPE_PLATFORM_CHANNEL 表示平台频道，MARKETING_TARGET_TYPE_FINANCE 表示金融产品时才填充该字段。通过 [\[获取可投放推广内容资产列表接口\]](https://developers.e.qq.com/v3.0/docs/api/marketing_target_assets/get) 可以查询所有的产品 id。marketing_asset_id、marketing_target_type、marketing_asset_outer_spec 不能同时为空 |
| marketing_target_type | enum | 推广内容资产类型，marketing_asset_id、marketing_target_type、marketing_asset_outer_spec 不能同时为空，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) 可选值：{ MARKETING_TARGET_TYPE_PLATFORM_CHANNEL, MARKETING_TARGET_TYPE_FINANCE } |
| marketing_asset_outer_spec | struct | 产品外部 id 数据，当推广产品类型是以下类型的时候，必须使用该字段，不允许使用 marketing_asset_id：MARKETING_TARGET_TYPE_APP_ANDROID 表示 Android 应用，MARKETING_TARGET_TYPE_APP_IOS 表示 IOS 应用，MARKETING_TARGET_TYPE_MINI_PROGRAM_WECHAT 表示微信小程序。marketing_asset_id、marketing_target_type、marketing_asset_outer_spec 不能同时为空 |
| marketing_asset_outer_id* | string | 推广产品外部 id，如安卓应用 id、IOS 应用 id、小游戏 id 等 |
| marketing_target_type* | string | 推广内容资产类型 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 500 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/material_dcatag/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'image_id_list=[]' \
-d 'media_id_list=[]' \
-d 'marketing_asset_outer_spec=[]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/material_dcatag/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'image_id_list=[]' \
-d 'media_id_list=[]' \
-d 'marketing_asset_outer_spec=[]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 已绑定列表 |
| image_id | integer | 图片素材 id |
| media_id | integer | 视频素材 id |
| info | struct[] | 素材属性信息列表 |
| name | string | 素材属性名称 |
| value | string | 素材属性值 |
| set_name | string | 素材集合名称 |
| marketing_asset_id | integer | 推广产品 id |
| marketing_asset_outer_id | string | 推广产品外部 id |
| marketing_target_type | string | 推广内容资产类型 |
| audit_status | integer | 审核状态，0: 待审； 1: 通过； 2: 拒绝 |
| audit_msg | string | 审核拒绝原因 |
| dcatag_list | struct[] | 素材标签集合 |
| tag_name | string | 素材标签 id |
| tag_value | string | 素材标签值 |
| page_info | struct | 数据条数信息 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |
| page | integer | 搜索页码 |
| page_size | integer | 搜索页码的条数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "info": [],
                "dcatag_list": [],
                "page_info": {
                    "total_number": 1,
                    "total_page": 1,
                    "page": 1,
                    "page_size": 10
                }
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
