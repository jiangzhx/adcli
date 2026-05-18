---
title: 素材 DCA 标签绑定新增 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/material_dcatag/add
doc_id: tencent_ads_v3_0_docs_api_material_dcatag_add
source_id: tencent_ads_v3_0_docs_api_material_dcatag_add
---
# 素材 DCA 标签绑定新增 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | material_dcatag/add |
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
| account_id* | integer | 广告主帐号 id |
| image_list | struct[] | 图片素材列表，不超过 100 个 |
| image_id* | integer | 图片素材 id |
| info | struct[] | 图片素材属性信息列表 |
| name* | string | 图片素材属性名称 |
| value* | string | 图片素材属性值 |
| media_list | struct[] | 视频素材列表，不超过 100 个 |
| media_id* | integer | 视频素材 id |
| info | struct[] | 视频素材属性信息列表 |
| name* | string | 视频素材属性名称 |
| value* | string | 视频素材属性值 |
| marketing_asset_id | integer | 推广产品 id，当推广内容资产类型为：MARKETING_TARGET_TYPE_PLATFORM_CHANNEL 表示平台频道，MARKETING_TARGET_TYPE_FINANCE 表示金融产品时才填充该字段。通过 [\[获取可投放推广内容资产列表接口\]](https://developers.e.qq.com/v3.0/docs/api/marketing_target_assets/get) 可以查询所有的产品 id。marketing_asset_id、marketing_target_type、marketing_asset_outer_spec 不能同时为空 |
| marketing_target_type | enum | 推广内容资产类型，marketing_asset_id、marketing_target_type、marketing_asset_outer_spec 不能同时为空，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) 可选值：{ MARKETING_TARGET_TYPE_PLATFORM_CHANNEL, MARKETING_TARGET_TYPE_FINANCE } |
| marketing_asset_outer_spec | struct | 产品外部 id 数据，当推广产品类型是以下类型的时候，必须使用该字段，不允许使用 marketing_asset_id：MARKETING_TARGET_TYPE_APP_ANDROID 表示 Android 应用，MARKETING_TARGET_TYPE_APP_IOS 表示 IOS 应用，MARKETING_TARGET_TYPE_MINI_PROGRAM_WECHAT 表示微信小程序。marketing_asset_id、marketing_target_type、marketing_asset_outer_spec 不能同时为空 |
| marketing_asset_outer_id* | string | 推广产品外部 id，如安卓应用 id、IOS 应用 id、小游戏 id 等 |
| marketing_target_type* | string | 推广内容资产类型 |
| dcatag_list | struct[] | 素材标签集合，传空不会覆盖 |
| tag_name* | string | 素材标签 id |
| tag_value* | string | 素材标签值 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/material_dcatag/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "image_list": [
        {
            "info": []
        }
    ],
    "media_list": [
        {
            "info": []
        }
    ],
    "marketing_asset_outer_spec": [],
    "dcatag_list": []
}'
curl 'https://api.e.qq.com/v3.0/material_dcatag/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "image_list": [
        {
            "info": []
        }
    ],
    "media_list": [
        {
            "info": []
        }
    ],
    "marketing_asset_outer_spec": [],
    "dcatag_list": []
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| success_id_list | integer[] | 操作成功的素材 id 列表 |
| fail_id_list | integer[] | 操作失败的素材 id 列表 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "success_id_list": [],
        "fail_id_list": []
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
