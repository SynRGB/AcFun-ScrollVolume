# AcFunScrollVolume 滚轮调音量 v2.0

![repository-open-graph-template](https://i.postimg.cc/2Sx21GkW/repository-open-graph-template.png)

- AcFUN滚轮调音量

- Change AcFUN's volume by scroll

****

**This is a simple JS script to enable AcFun player to support volume adjustment by scroll.**  

### v1.1.0 (GreasyFork/Tampermonkey):

<details>
<summary>安装链接 | Install under this link: </br><a href='https://greasyfork.org/zh-CN/scripts/438858-acfun%E6%BB%9A%E8%BD%AE%E8%B0%83%E9%9F%B3%E9%87%8F?version=1010980' target='_blank' class='url'>https://greasyfork.org/zh-CN/scripts/438858-acfun%E6%BB%9A%E8%BD%AE%E8%B0%83%E9%9F%B3%E9%87%8F?version=1010980</a></summary>
<pre><code class='language-javascript' lang='javascript'>// ==UserScript==
// @name         AcFun滚轮调音量
// @namespace   GitHub@SynthesisDu
// @version      1.1.0
// @description  AcFun滚轮调音量, change AcFun&#39;s volume by scroll.
// @author       GitHub@SynthesisDu
// @include      *://www.acfun.cn/v/ac*
// @include      *://www.acfun.cn/bangumi/aa*
// @include      *://*.acfun.cn/v/ac*
// @include      *://*.acfun.cn/bangumi/aa*
// @include      *://acfun.cn/v/ac*
// @include      *://acfun.cn/bangumi/aa*
// @exclude      *://*.eggvod.cn/*
// @connect      www.acfun.cn
// @connect      *.acfun.cn
// @connect      acfun.cn
// @license      Mozilla Public License 2.0
// @grant        GM_xmlhttpRequest
// @grant        GM_log
// @grant        unsafeWindow
// @homepageURL       https://github.com/SynRGB/AcFunScrollVolume
// @contributionURL   https://github.com/SynRGB/AcFunScrollVolume
// @updateURL         https://github.com/SynRGB/AcFunScrollVolume/releases/new
// ==/UserScript==
// 防止和Chrome插件版本冲突
if (typeof duplicateScriptRecognition_GitHubSynthesisDu_AcFunScrollVolume == &quot;undefined&quot;) {
    let duplicateScriptRecognition_GitHubSynthesisDu_AcFunScrollVolume = &quot;1.1.0&quot;;
    // 模拟键盘, keyCode为键值
    function pressKey (keyCode) {
        let event = document.createEvent(&quot;HTMLEvents&quot;);
        event.initEvent(&quot;keydown&quot;, true, false);
        event.keyCode = keyCode;
        document.dispatchEvent(event);
    }
    // 一次滚轮滚动会触发两次按键, 用此变量做修正
    let count_amend_singleScrollTriggeredTwoTimes = 0;
    // 待界面加载完成
    window.onload = () =&gt; {
        // 当滚动滚轮, 模拟按下↑↓
        let scroll = function (e) {
            e = e || window.event;
            // 仅在全屏时生效
            if (document.querySelector(&#39;[data-bind-attr=&quot;screen&quot;]&#39;) !== null) {
                // 一次滚轮滚动会触发两次按键, 用此变量做修正
                if (count_amend_singleScrollTriggeredTwoTimes === 0) {
                    // 一次滚轮滚动会触发两次按键, 用此变量做修正
                    count_amend_singleScrollTriggeredTwoTimes = 1;
                    // Chrome
                    if (e.wheelDelta) {
                        // 向上滚动
                        if (e.wheelDelta &gt; 0) {pressKey(38);}
                        // 向下滚动
                        if (e.wheelDelta &lt; 0) {pressKey(40);}
                        // Firefox
                    } else if (e.detail) {
                        // 向上滚动
                        if (e.detail &gt; 0) {pressKey(38);}
                        // 向下滚动
                        if (e.detail &lt; 0) {pressKey(40);}
                    }
                } else {
                    // 一次滚轮滚动会触发两次按键, 用此变量做修正
                    count_amend_singleScrollTriggeredTwoTimes = 0;
                }
            }
        };
        // 给页面绑定滑轮滚动事件 - Firefox
        if (document.addEventListener) {
            document.addEventListener(&#39;DOMMouseScroll&#39;, scroll, false);
        }
        // 给页面绑定滑轮滚动事件 - Chrome, IE
        window.onmousewheel = document.onmousewheel = scroll;
    };
    console.log(&quot;JS script AcFUNScrollVolume (AcFUN滚轮调音量) loaded, version &quot; + duplicateScriptRecognition_GitHubSynthesisDu_AcFunScrollVolume + &quot;. See more details at https://github.com/SynRGB/AcFunScrollVolume&quot;);
}
</code></pre>
</details>

### v1.1.1 (Chrome):

<details>
<summary>下载并解压 | Download and uncompress under this link: </br><a href='https://github.com/SynRGB/AcFunScrollVolume/releases/tag/v1.1' target='_blank' class='url'>https://github.com/SynRGB/AcFunScrollVolume/releases/tag/v1.1</a></summary>
<pre><code class='language-javascript' lang='json'>{
  "manifest_version": 2,
  "name": "AcFun滚轮调音量",
  "version": "1.1.1",
  "description": "AcFun滚轮调音量, change AcFUN's volume by scroll.",
  "author": "GitHub@SynthesisDu",
  "icons": {
    "16": "ico/16.png",
    "32": "ico/32.png",
    "48": "ico/48.png",
    "64": "ico/64.png",
    "128": "ico/128.png",
    "256": "ico/256.png"
  },
  "browser_action": {
    "default_icon": {
      "16": "ico/16.png",
      "32": "ico/32.png",
      "48": "ico/48.png",
      "64": "ico/64.png",
      "128": "ico/128.png",
      "256": "ico/256.png"
    },
    "default_title": "AcFun滚轮调音量"
  },
  "content_scripts": [
    {
      "matches": [
        "*://www.acfun.cn/v/ac*",
        "*://www.acfun.cn/bangumi/aa*",
        "*://acfun.cn/v/ac*",
        "*://acfun.cn/bangumi/aa*",
        "*://*.acfun.cn/v/ac*",
        "*://*.acfun.cn/bangumi/aa*"
      ],
      "js": ["main.js"],
      "run_at": "document_end"
    }
  ],
  "permissions": [
    "tabs",
    "activeTab",
    "webRequest",
    "webRequestBlocking",
    "*://www.acfun.cn/v/ac*",
    "*://www.acfun.cn/bangumi/aa*",
    "*://acfun.cn/v/ac*",
    "*://acfun.cn/bangumi/aa*",
    "*://*.acfun.cn/v/ac*",
    "*://*.acfun.cn/bangumi/aa*"
  ],
  "web_accessible_resources": [
    "main.js",
    "manifest.json",
    "ico/16.png",
    "ico/32.png",
    "ico/48.png",
    "ico/64.png",
    "ico/128.png",
    "ico/256.png"
  ],
  "homepage_url": "https://github.com/SynRGB/AcFunScrollVolume"
}
</code></pre>
</details>

## BugFixed:

- 修复单次滚轮造成双击

## New:

- 新增Chrome插件版
