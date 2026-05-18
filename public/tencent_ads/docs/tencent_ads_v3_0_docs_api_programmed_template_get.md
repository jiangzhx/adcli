---
title: 获取模板列表接口 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/programmed_template/get
doc_id: tencent_ads_v3_0_docs_api_programmed_template_get
source_id: tencent_ads_v3_0_docs_api_programmed_template_get
---
# 获取模板列表接口 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | programmed_template/get |
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
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| material_derive_id* | integer | 预览 id |
| material_preview_id | integer | 素材预览 id |
| template_id_list | array | 模板 id 列表列表，数组长度为[0,100] 数组最小长度 0，最大长度 100 |
| key_word | string | 搜索名称 字段长度最小 0 字节，长度最大 1024 字节 |
| sort_by | struct[] | 排序列表，数组长度为[0,100] 数组最小长度 0，最大长度 100 |
| field* | string | 排序条件字段，支持字段包括 最新上传：derive_on_first_time，消耗：template_stat.cost，点击率：template_stat.click_rate，使用量：template_stat.use_cnt |
| desc | enum | 排序方式，支持包括 降序：DESC，升序：ASC，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#sorted_type) 可选值：{ DESC, ASC } |
| page_info | struct | 排序 |
| page | integer | 页码，最小为 1，最大为 1000 最小值 0，最大值 1000 |
| rows | integer | 页大小 |
| total | integer | 总数 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/programmed_template/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "material_derive_id": 2449,
    "material_preview_id": 4281,
    "template_id_list": [],
    "sort_by": [],
    "page_info": {
        "page": 1,
        "rows": 20
    }
}'
curl 'https://api.e.qq.com/v3.0/programmed_template/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "material_derive_id": 2449,
    "material_preview_id": 4281,
    "template_id_list": [],
    "sort_by": [],
    "page_info": {
        "page": 1,
        "rows": 20
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| template_infos | struct[] | 排序列表，数组长度为[0,100] |
| id | integer | 模板 id |
| type | integer | 模版类型，1:图片模版，2:视频模版 |
| name | string | 模板名称 |
| image_url | string | 图片 url |
| video_url | string | 视频 url |
| width | integer | 宽 |
| height | integer | 高 |
| duration | float | 视频时长 |
| use_cnt | integer | 使用量 |
| cost | integer | 消耗 |
| click_rate | float | 点击率 |
| conversion_rate | float | 转化率 |
| conversion_cost | float | 转化成本 |
| page_info | struct | 排序 |
| page | integer | 页码，最小为 1，最大为 1000 |
| rows | integer | 页大小 |
| total | integer | 总数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "template_infos": [
            {
                "id": 12683211,
                "type": 1,
                "name": "横版 1",
                "image_url": "http://wxsnsencsvp.wxs.qq.com/141/20204/snscosdownload/SZ/reserved/6xykWLEnztLJwLSCic9cCNeuUfnXwhJicA93cQwBeslum36VBt9KenELZiaKB3Wu2VxFiaicyYzsawqias6JmF6EHqXw?ck=b34d5c45606aa0393e5e2760c8f4f8bb&idx=1&m=b34d5c45606aa0393e5e2760c8f4f8bb&sha256=9fd3cfd68b0d2987e53414fe5a3efe2c9b9e341c5956ce31cc002bcfe5467fbf&token=6xykWLEnztKT39or7tC4gYIYPfMzoBOXAac6VUVyUpzhuSqmKKcK21mIorbS9cJaE2iaJ9S81JEMk6ZyriabRVkQ",
                "video_url": "",
                "width": 1280,
                "height": 720,
                "duration": 0,
                "use_cnt": 0,
                "cost": 0,
                "click_rate": 0,
                "conversion_rate": 0,
                "conversion_cost": 0
            },
            {
                "id": 12683210,
                "type": 1,
                "name": "横版 2",
                "image_url": "http://wxsnsencsvp.wxs.qq.com/141/20204/snscosdownload/SZ/reserved/6xykWLEnztLJwLSCic9cCNXBWIKibSjLdv1o4XfmwKr6PAsjwl8kTyibHXGLdoiaZVibia3I3vXRkkkH8yKOibwRfwpbA?ck=c08503d116d958be2228d58b58103bb5&idx=1&m=c08503d116d958be2228d58b58103bb5&sha256=b3749a6134f08c2253ebaedc563005229b586828422bf46517e94340bdc8beed&token=cztXnd9GyrEaGaYgAwfdqWicdhoyxFqFCZmu0EAMTxt1reAhD4iaUjdyN2jYPria2oW5FbL9rujYjpCFKKJSYAjXg",
                "video_url": "",
                "width": 1280,
                "height": 720,
                "duration": 0,
                "use_cnt": 0,
                "cost": 0,
                "click_rate": 0,
                "conversion_rate": 0,
                "conversion_cost": 0
            }
        ],
        "page_info": {
            "page": 1,
            "rows": 100,
            "total": 2
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
