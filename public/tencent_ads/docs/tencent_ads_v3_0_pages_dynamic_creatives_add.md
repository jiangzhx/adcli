---
title: 创建新投放创意
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/dynamic_creatives/add
doc_id: tencent_ads_v3_0_pages_dynamic_creatives_add
source_id: tencent_ads_v3_0_pages_dynamic_creatives_add
---
# 创建新投放创意

## 基本概念

创意由创意投放模式、创意形式、创意组件等多个属性组成，创意投放模式定义了创意下各组件的组合方式，创意形式定义了每一个创意包含什么组件，并与广告上的版位属性一起，决定了当前创意会在具体哪些位置进行展示。由于在腾讯不同流量推广不同推广目标时，可以使用的创意形式会有差异，您可以针对您想推广的广告版位（site_set）和营销目的（MARKETING_GOAL）、营销载体（MARKETING_CARRIER_TYPE）属性，通过 [creative_template_list/get](https://developers.e.qq.com/v3.0/docs/api/creative_template_list/get) 或者创意形式查询接口（creative_template_list/get）查询可投放的创意形式。

创建一个创意，除了创意名称，您还可能需要设置以下属性：

所属广告（adgroup_id）：每个创意都需要归属于某个广告；

创意投放模式（delivery_mode）：可选组件化创意/自定义创意。

组件化创意（DELIVERY_MODE_COMPONENT）：广告主在一个创意上可上传多个图片/视频/文案/落地页等组件，系统会对组件进行自动组合，并在播放时择优展示；

自定义创意（DELIVERY_MODE_CUSTOMIZE）：广告主自行组合图片/视频/文案/落地页，播放时系统将以广告主指定的组合展示

自动匹配创意形式（dynamic_creative_type = DYNAMIC_CREATIVE_TYPE_PROGRAM）：仅在「组件化创意」投放模式可用，开启后广告主无需指定创意形式，可直接上传图片、视频素材，系统将自动匹配创意形式

创意形式 id（creative_template_id）：非「自动匹配创意形式」下，创意需要指定一个创意形式，创意形式必须符合创意上设置的广告版位（site_set）和营销目的（MARKETING_GOAL）、营销载体（MARKETING_CARRIER_TYPE）属性；

创意组件：创意组件包含创意最终展示给用户的信息，如图片、文案等，不同的创意形式所需的创意组件不同，需根据创意指定的创意形式 id 进行设置；具体可通过[开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/api/creative_template/get)查询对应组件要求

## 其他创意相关限制

| 类别 | 描述限制 |
| --- | --- |
| 创意数量 | 每个广告下最多允许有 100 个创意 |
| 创意形式、创意组件 | 不同营销目的（MARKETING_GOAL）、营销载体（MARKETING_CARRIER_TYPE）、广告版位（site_set），可投放的创意形式和创意组件会有不同，可通过创意形式查询接口（creative_template_list/get）查询 |

## API 创建创意使用流程

### 1. 查询创意形式信息

创意形式 id 查询： 通过[creative_template_list/get](https://developers.e.qq.com/v3.0/docs/api/creative_template_list/get)获取创意形式，获取的创意形式 id 将会请用在创建动态创意的 creative_template_id 字段中。参考以下请求示例：

```
curl -G 'https://api.e.qq.com/v3.0/creative_template_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \ 
-d 'account_id=<ACCOUNT_ID>' \ 
-d 'marketing_goal=MARKETING_GOAL_USER_GROWTH' \ 
-d 'marketing_target_type=MARKETING_TARGET_TYPE_APP_IOS' \ 
-d 'marketing_carrier_type=MARKETING_CARRIER_TYPE_APP_ANDROID' \ 
-d 'site_set=["SITE_SET_TENCENT_NEWS"]'
```

创意形式详情： 通过[creative_template/get](https://developers.e.qq.com/v3.0/docs/api/creative_template/get)获取创意形式信息，获取的创意形式信息将在创建动态创意填写创意元素（creative_components）时使用。参考以下请求示例：

```
curl -G 'https://api.e.qq.com/v3.0/creative_template/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \ 
-d 'account_id=<ACCOUNT_ID>' \ 
-d 'marketing_goal=MARKETING_GOAL_USER_GROWTH' \ 
-d 'marketing_target_type=MARKETING_TARGET_TYPE_APP_IOS' \ 
-d 'marketing_carrier_type=MARKETING_CARRIER_TYPE_APP_ANDROID' \ 
-d 'delivery_mode=DELIVERY_MODE_COMPONENT' \ 
-d 'site_set=["SITE_SET_TENCENT_NEWS"]'
```

### 2.广告组创建

通过[adgroups/add](https://developers.e.qq.com/v3.0/docs/api/adgroups/add)接口创建广告组（adgroup），将此 id 赋值给创意层级的 adgroup_id 字段

### 3.创建广告创意

通过[dynamic_creatives/add](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/add)接口创建动态创意（dynamic_creative），您需要传入动态创意广告中所有创意相关的创意组件及创意属性。

您可参考[1. 查询创意形式信息]将本次需要创建的动态创意广告所对应的创意形式 id 填写到 creative_template_id 字段中，并将广告所需的创意组件都填写到 creative_components 结构中。 creative_components 结构中，定义了对应创意形式 id 下，哪些创意元素支持上传多个，您可以根据实际诉求进行写入。目前每个文案组件、落地页组件最多可支持上传 3 个，图片和视频组件一共最多可支持上传 15 个。

传入所有 dynamic_creative 所需的信息后，您将获得一个 dynamic_creative_id，即完成广告创意创建。

### 4.获取创意信息

您可通过[dynamic_creatives/get](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/get)接口查询已经生成的创意的结构的相关信息。

### 5.编辑创意

广告创意创建完毕后，您可以通过[dynamic_creatives/update](https://developers.e.qq.com/docs/api/adsmanagement/dynamic_creatives/dynamic_creatives_update?version=1.1&_preview=1)接口，编辑创意广告的创意组件及创意属性。我们强烈建议，除了创意审核不通过等场景下，使用编辑功能外，其他情况下避免编辑已经有数据积累的创意，这样会影响系统对于创意的探索过程，可能导致效果不佳。

以下是编辑组件化创意广告，对应创意生成的逻辑：比如创意广告中，对应的创意形式您上传了图片 A、图片 B、文案 A、文案 B，则最终将组合成四个创意: 创意 1: 图片 A+文案 A 创意 2: 图片 A+文案 B 创意 3: 图片 B+文案 A 创意 4: 图片 B+文案 B

删除操作： 若您删除某个组件化创意创意元素，也将同时删除此组件化创意创意元素对应的创意。比如，若您删除了 A 图片，则系统会将包含 A 图片的创意 1 和创意 2 同时删除。

新增操作： 若您新增了某个组件化创意元素，系统将生成与该元素与其他组件化创意元素可组合出的所有创意。比如，您新增了 C 图片，那么系统将新增生成 C 图片、A 文案，C 图片、B 文案两个创意组合。

编辑操作： 若您编辑某个创意元素，系统将删除老元素对应的创意，新增新元素对应的创意。比如，您用 A 图片替换了 A 图片，那么系统将删除 A 图片相关的创意，即删除创意 1 & 创意 2，新生成 A 图片和其他文案的组合，即新增生成"图片 A+文案 A" & "图片 A+文案 B"两个创意组合。

### 6. 创意暂停/开启

广告创意创建完毕后，您可以通过[dynamic_creatives/update](https://developers.e.qq.com/docs/api/adsmanagement/dynamic_creatives/dynamic_creatives_update?version=1.1&_preview=1)接口对广告创意进行暂停/开启操作 例如以下广告创意暂停请求示例：

```
curl 'https://api.e.qq.com/v3.0/dynamic_creatives/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \ 
-H 'Content-Type: application/json' \ 
-d '{
    "dynamic_creative_id": 1,
    "configured_status": "AD_STATUS_SUSPEND",
    "account_id": "<ACCOUNT_ID>"
}'
```
