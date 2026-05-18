---
title: Java SDK 使用指南
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/docs/readme/java_sdk
doc_id: tencent_ads_v3_0_pages_docs_readme_java_sdk
source_id: tencent_ads_v3_0_pages_docs_readme_java_sdk
---
# Java SDK 使用指南

腾讯广告 Marketing API(以下简称 API) Java SDK 提供了 Token 获取、请求封装、响应解释等功能，以本地化方式轻松完成 API 的调用和结果的获取，旨在帮助开发者快速搭建投放管理系统。

## 使用条件

使用 SDK 需要首先注册成为腾讯广告开发者，请参考[开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/pages/regist_developer)

使用 SDK 需要先拥有 API 的访问权限，所有 SDK 的使用与应用拥有的权限组相关联

Java SDK 需要依赖 JDK 1.7 及以上

Maven

## 代码托管

目前 marketing-api-java-sdk 的源码已经可以在 github 阅读，欢迎访问：[GitHub - TencentAd/marketing-api-java-sdk: 腾讯广告 API JAVA SDK](https://github.com/TencentAd/marketing-api-java-sdk)

## 如何安装运行

我们推荐用 Maven 的方式管理我们的 Java SDK，可以添加如下 XML 内容到您项目的 pom.xml 中，请从 GitHub 上获取最新的 version

```
<dependency>
   <groupId>com.tencent.ads</groupId>
   <artifactId>marketing-api-java-sdk</artifactId>
   <version>x.x.xx</version>
</dependency>
```

或者您也可以手动下载[Java 压缩包文件](https://github.com/TencentAd/marketing-api-java-sdk/archive/v1.1.74.zip)，解压后可以得到一个 Java SDK 的源码项目。SDK 下载地址：[ams-marketing-sdk-java.zip](https://github.com/TencentAd/marketing-api-java-sdk/archive/v1.1.74.zip)

解压文件，默认解压到目录 ams-marketing-sdk-java。

执行 mvn clean install，将包安装到你本地的 Maven 资源库中。

```
cd ams-marketing-sdk-java
mvn clean install
```

在你的项目的 pom.xml 中添加刚刚安装的依赖

```
<dependency>
   <groupId>com.tencent.ads</groupId>
   <artifactId>marketing-api-java-sdk</artifactId>
   <version>x.x.xx</version>
</dependency>
```

## 如何使用

SDK 数组参数调用的方法名与 API 接口一一对应，如 adgroups/get 接口就对应 TencentAds.getInstance().adgroups().adgroupsGet()方法。

### 获取 Access Token

```
import com.tencent.ads.model.OauthTokenResponseData;

public class Example {

  private static Long clientId = 0L; // 修改为你的 clientId
  private static String clientSecret = ""; // 修改为你的 clientSecret
  private static String grantType = "authorization_code";
  private static String authorizationCode = "YOUR AUTHORIZATION CODE"; // 修改为你获取到的 AUTHORIZATION CODE
  private static String redirectUri = "YOUR REDIRECT URI"; // 修改为你的回调地址

  public static void main(String[] args) {
    TencentAds tencentAds = TencentAds.getInstance();
    tencentAds.init(new ApiContextConfig());

    try {
      OauthTokenResponseData responseData = tencentAds.oauth()
          .oauthToken(clientId, clientSecret, grantType, authorizationCode, null, redirectUri);
      if (responseData != null) {
        String accessToken = responseData.getAccessToken();
        System.out.println(accessToken);
        tencentAds.setAccessToken(accessToken);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
```

### 设置调用环境、Access Token

```
TencentAds tencentAds = TencentAds.getInstance();
tencentAds.init(new ApiContextConfig("{access-token}", true));// 默认访问正式环境，不再提供沙箱环境调用
```

### 调用 API 接口

```
import com.tencent.ads.ApiContextConfig;
import com.tencent.ads.v3.TencentAds;
import com.tencent.ads.exception.TencentAdsResponseException;
import com.tencent.ads.exception.TencentAdsSDKException;
import com.tencent.ads.model.v3.*;
import com.tencent.ads.model.v3.FilteringStruct;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class GetAdgroups {
  /** YOUR ACCESS TOKEN */
  public String ACCESS_TOKEN = "YOUR ACCESS TOKEN";

  /** TencentAds */
  public TencentAds tencentAds;

  public Long accountId = null;

  public List<FilteringStruct> filtering = new ArrayList<>();

  public Long page = null;

  public Long pageSize = null;

  public Boolean isDeleted = null;

  public List<String> fields = Arrays.asList("adgroup_id", "adgroup_name");

  public void init() {
    this.tencentAds = TencentAds.getInstance();
    this.tencentAds.init(
        new ApiContextConfig().accessToken(ACCESS_TOKEN).isDebug(true)); // debug==true 会打印请求详细信息

    this.buildParams();
  }

  public void buildParams() {
    String field = "last_modified_time";
    FilteringStruct filteringStruct = new FilteringStruct();
    filteringStruct.setField(field);
    FilterOperator operator = FilterOperator.EQUALS;
    filteringStruct.setOperator(operator);
    List<String> values = Arrays.asList("1708520382");
    filteringStruct.setValues(values);
    filtering.add(filteringStruct);
  }

  public AdgroupsGetResponseData getAdgroups() throws Exception {
    AdgroupsGetResponseData response =
        tencentAds.adgroups().adgroupsGet(accountId, filtering, page, pageSize, isDeleted, fields);
    return response;
  }

  public static void main(String[] args) {
    try {
      GetAdgroups getAdgroups = new GetAdgroups();
      getAdgroups.init();
      AdgroupsGetResponseData response = getAdgroups.getAdgroups();
    } catch (TencentAdsResponseException e) {
      e.printStackTrace();
    } catch (TencentAdsSDKException e) {
      e.printStackTrace();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
```

### 调试和查看 API 接口日志

```
TencentAds tencentAds = TencentAds.getInstance();
    tencentAds.init(new ApiContextConfig("{access-token}", true));//第二个参数即为调试参数
// 或者主动设置 debug 模式
tencentAds.setDebug(true);
```

## 问题建议与反馈

如果您在使用 SDK 过程中有任何问题与建议，请随时登录[开发者官网](https://developers.e.qq.com/)，点击右下角的"咨询"按钮，与我们的客服支持人员联系
