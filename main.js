// ==UserScript==
// @name         AcFun-ScrollVolume
// @name:zh-CN   AcFun-滚轮调音量
// @namespace    https://github.com/TitanRGB
// @version      2.3
// @description  change AcFun's volume by scroll
// @description:zh-CN  滚动滚轮调节AcFun的音量
// @author       https://github.com/TitanRGB
// @icon         data:image/png;base64,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
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
// @charset		 UTF-8
// @homepageURL       https://github.com/SynRGB/AcFun-ScrollVolume
// @contributionURL   https://github.com/SynRGB/AcFun-ScrollVolume
// @updateURL         https://github.com/SynRGB/AcFun-ScrollVolume/releases/new
// ==/UserScript==

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