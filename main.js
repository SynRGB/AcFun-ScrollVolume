// ==UserScript==
// @name         AcFun-ScrollVolume
// @namespace    https://github.com/TitanRGB
// @version      2.2
// @description  滚轮调音量, change AcFun's volume by scroll.
// @author       https://github.com/TitanRGB
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
// @license      MPL-2.0
// @license^     Mozilla Public License 2.0
// @grant        GM_xmlhttpRequest
// @grant        GM_log
// @grant        unsafeWindow
// @homepageURL       https://github.com/SynRGB/AcFun-ScrollVolume
// @contributionURL   https://github.com/SynRGB/AcFun-ScrollVolume
// @updateURL         https://github.com/SynRGB/AcFun-ScrollVolume/releases/new
// ==/UserScript==
// 防止和Chrome插件版本冲突

// 一次滚轮滚动会触发两次按键, 用此变量做修正
let count_amend_singleScrollTriggeredTwoTimes = 0;
// 当滚动滚轮, 模拟按下↑↓
let scroll = function (e) {
    e = e || window.event;
    // 仅在全屏时生效
    if (document.querySelector('[data-bind-attr="screen"]') !== null) {
        // 一次滚轮滚动会触发两次按键, 用此变量做修正
        if (count_amend_singleScrollTriggeredTwoTimes === 0) {
            // 一次滚轮滚动会触发两次按键, 用此变量做修正
            count_amend_singleScrollTriggeredTwoTimes = 1;
            if (e.wheelDelta) {//////////////////////////////// Chrome
                // 向上滚动
                if (e.wheelDelta > 0) {
                    unsafeWindow.player.volume++;
                }
                // 向下滚动
                if (e.wheelDelta < 0) {
                    // pressKey(40);
                    unsafeWindow.player.volume--;
                }
            } else if (e.detail) {///////////////////////////// Firefox
                // 向上滚动
                if (e.detail > 0) {
                    unsafeWindow.player.volume++;
                }
                // 向下滚动
                if (e.detail < 0) {
                    unsafeWindow.player.volume--;
                }
            }
            // 音量显示
            try {
                document.querySelector('#volumeText').remove();
            } catch (e) {}
            let screen = document.querySelector('[data-bind-attr="screen"]');
            let volume = unsafeWindow.player.volume;
            let volumeText = document.createElement('div');
            volumeText.setAttribute('id', 'volumeText');
            volumeText.setAttribute('style', `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 50px;
                    color: #fff;
                    text-shadow: 0 0 10px #000;
                `);
            volumeText.innerHTML = volume.toString().substring(0, 2).replace('.', '') + "%";
            screen.appendChild(volumeText);
            setTimeout(() => {
                screen.removeChild(volumeText);
            }, 500);
        } else {
            // 一次滚轮滚动会触发两次按键, 用此变量做修正
            count_amend_singleScrollTriggeredTwoTimes = 0;
        }
    }
};
// 给页面绑定滑轮滚动事件 - Firefox
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scroll, false);
}
// 给页面绑定滑轮滚动事件 - Chrome, IE
window.onmousewheel = document.onmousewheel = scroll;
console.log("JS script AcFUNScrollVolume (AcFUN滚轮调音量) loaded. See more details at https://github.com/SynRGB/AcFun-ScrollVolume");