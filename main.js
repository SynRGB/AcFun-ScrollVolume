// ==UserScript==
// @name         AcFun滚轮调音量
// @namespace 	 GitHub@SynthesisDu
// @version      1.0.0
// @description  AcFun滚轮调音量, change AcFUN's volume by scroll.
// @author       GitHub@SynthesisDu
// @include      *://www.acfun.cn/v/ac*
// @include      *://www.acfun.cn/bangumi/aa*
// @exclude      *://*.eggvod.cn/*
// @connect      www.acfun.cn
// @license      Mozilla Public License 2.0
// @grant        GM_xmlhttpRequest
// @grant        GM_log
// @grant        unsafeWindow
// @homepageURL       https://github.com/SynRGB/AcFunScrollVolume
// @contributionURL   https://github.com/SynRGB/AcFunScrollVolume
// @updateURL         https://github.com/SynRGB/AcFunScrollVolume/releases/new
// ==/UserScript==

// 防止和插件等版本冲突
if (typeof duplicateScriptRecognition_GitHubSynthesisDu_AcFunScrollVolume == "undefined") {
    let duplicateScriptRecognition_GitHubSynthesisDu_AcFunScrollVolume = "1.0.0";
    // 模拟键盘, keyCode为键值
    function pressKey (keyCode) {
        let event = document.createEvent("HTMLEvents");
        event.initEvent("keydown", true, false);
        event.keyCode = keyCode;
        document.dispatchEvent(event);
    }
    // 待界面加载完成
    window.onload = () => {
        // 当滚动滚轮, 模拟按下↑↓
        let scrollFunc = function (e) {
            e = e || window.event;
            // 仅在全屏时生效
            if (document.querySelector('[data-bind-attr="screen"]') !== null) {
                // Chrome
                if (e.wheelDelta) {
                    // 向上滚动
                    if (e.wheelDelta > 0) {pressKey(38);}
                    // 向下滚动
                    if (e.wheelDelta < 0) {pressKey(40);}
                    // Firefox
                } else if (e.detail) {
                    // 向上滚动
                    if (e.detail > 0) {pressKey(38);}
                    // 向下滚动
                    if (e.detail < 0) {pressKey(40);}
                }
            }
        };
        // 给页面绑定滑轮滚动事件 - Firefox
        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', scrollFunc, false);
        }
        // 给页面绑定滑轮滚动事件 - Chrome, IE
        window.onmousewheel = document.onmousewheel = scrollFunc;
    };
    console.log("JS script AcFUNScrollVolume (AcFUN滚轮调音量) loaded, version " + duplicateScriptRecognition_GitHubSynthesisDu_AcFunScrollVolume + ". See more details at https://github.com/SynRGB/AcFunScrollVolume");
}
