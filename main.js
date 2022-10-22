// ==UserScript==
// @name         AcFun-ScrollVolume
// @name:zh-CN   AcFun-滚轮调音量
// @name:jpn     AcFun-スクロールボリューム
// @namespace    https://github.com/TitanRGB
// @version      3.3
// @description         Change AcFun's volume by scroll, imitate Bilibili's style.
// @description:zh-CN   滚动滚轮调节AcFun的音量，模仿B站样式。
// @description:jpn     AcFunの音量をスクロールで変更します。Bilibiliのスタイルを模倣します。
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
// @grant        unsafeWindow
// @charset		 UTF-8
// @homepageURL       https://github.com/SynRGB/AcFun-ScrollVolume
// @contributionURL   https://github.com/SynRGB/AcFun-ScrollVolume
// @copyright         Copyright © 2022-PRESENT, TitanRGB (https://github.com/TitanRGB)
// ==/UserScript==

// ./icon/bilibili#bpx-svg-sprite-volume
let icon_volume = `
data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjIgMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJNMTAuMTg4IDQuNjVMNiA4SDVhMiAyIDAgMDAtMiAydjJhMiAyIDAgMDAyIDJoMWw0LjE4OCAzLjM1YS41LjUgMCAwMC44MTItLjM5VjUuMDRhLjQ5OC40OTggMCAwMC0uODEyLS4zOXpNMTQuNDQ2IDMuNzc4YTEgMSAwIDAwLS44NjIgMS44MDQgNi4wMDIgNi4wMDIgMCAwMS0uMDA3IDEwLjgzOCAxIDEgMCAwMC44NiAxLjgwNkE4LjAwMSA4LjAwMSAwIDAwMTkgMTFhOC4wMDEgOC4wMDEgMCAwMC00LjU1NC03LjIyMnoiLz4KICAgIDxwYXRoIGQ9Ik0xNSAxMWEzLjk5OCAzLjk5OCAwIDAwLTItMy40NjV2Ni45M0EzLjk5OCAzLjk5OCAwIDAwMTUgMTF6Ii8+Cjwvc3ZnPg==
`;
// ./icon/bilibili#bpx-svg-sprite-volume-off
let icon_volume_off = `
data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjIgMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJNMTUgMTFhMy45OTggMy45OTggMCAwMC0yLTMuNDY1djIuNjM2bDEuODY1IDEuODY1QTQuMDIgNC4wMiAwIDAwMTUgMTF6Ii8+CiAgICA8cGF0aCBkPSJNMTMuNTgzIDUuNTgzQTUuOTk4IDUuOTk4IDAgMDExNyAxMWE2IDYgMCAwMS0uNTg1IDIuNTg3bDEuNDc3IDEuNDc3YTguMDAxIDguMDAxIDAgMDAtMy40NDYtMTEuMjg2IDEgMSAwIDAwLS44NjMgMS44MDV6TTE4Ljc3OCAxOC43NzhsLTIuMTIxLTIuMTIxLTEuNDE0LTEuNDE0LTEuNDE1LTEuNDE1TDEzIDEzbC0yLTItMy44ODktMy44ODktMy44ODktMy44ODlhLjk5OS45OTkgMCAxMC0xLjQxNCAxLjQxNEw1LjE3MiA4SDVhMiAyIDAgMDAtMiAydjJhMiAyIDAgMDAyIDJoMWw0LjE4OCAzLjM1YS41LjUgMCAwMC44MTItLjM5di0zLjEzMWwyLjU4NyAyLjU4Ny0uMDEuMDA1YTEgMSAwIDAwLjg2IDEuODA2Yy4yMTUtLjEwMi40MjQtLjIxNC42MjctLjMzM2wyLjMgMi4zYTEuMDAxIDEuMDAxIDAgMDAxLjQxNC0xLjQxNnpNMTEgNS4wNGEuNS41IDAgMDAtLjgxMy0uMzlMOC42ODIgNS44NTQgMTEgOC4xNzJWNS4wNHoiLz4KPC9zdmc+
`;

// 当滚动滚轮, 模拟按下↑↓
let scroll = function (e) {
    e = e || window.event;
    // 仅在全屏时生效
    if (document.querySelector('[data-bind-attr="screen"]') !== null) {
        if (e.wheelDelta) {
            //// Chrome
            // 向上滚动
            if (e.wheelDelta > 0) {
                unsafeWindow.player.volume++;
            }
            // 向下滚动
            if (e.wheelDelta < 0) {
                // pressKey(40);
                unsafeWindow.player.volume--;
            }
        } else if (e.detail) {
            //// Firefox
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
            document.querySelector('#volumeDiv').remove();
        } catch (e) {
        }
        let volume = unsafeWindow.player.volume;
        //////////////////////////////////////////////////////////////
        let volumeIcon = document.createElement('span');
        let volumeIconInnerSpan = document.createElement('span');
        let volumeIconImg = document.createElement('img');
        if (volume < 1) {
            volumeIconImg.setAttribute('src', icon_volume_off);
        } else {
            volumeIconImg.setAttribute('src', icon_volume);
        }
        volumeIconImg.setAttribute('style', `
                    width: 100%;
                    height: 100%;
                    -webkit-transition: fill .15s ease-in-out;
                    transition: fill .15s ease-in-out;
                `);
        volumeIconInnerSpan.setAttribute('style', `
                    display: -webkit-inline-box;
                    display: -ms-inline-flexbox;
                    display: inline-flex;
                    width: 100%;
                    height: 100%;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                `);
        volumeIcon.setAttribute('style', `
                    -webkit-box-flex: 0;
                    -ms-flex: none;
                    flex: none;
                    width: 34px;
                    height: 34px;
                `);
        volumeIcon.appendChild(volumeIconImg);
        //////////////////////////////////////////////////////////////
        let volumeSpan = document.createElement('span');
        // 当volume实际为100时，返回值是大于99的小数
        // 当volume实际为0时，返回值是小于1的小数
        if (volume > 99) {
            volumeSpan.innerHTML = '100%';
        } else if (volume < 1) {
            volumeSpan.innerHTML = '0%';
        } else if (volume > 9) {
            volumeSpan.innerHTML = volume.toString().substring(0, 2).replace('.', '') + '%';
        } else {
            volumeSpan.innerHTML = volume.toString().substring(0, 1).replace('.', '') + '%';
        }
        volumeSpan.setAttribute('style', `
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    padding: 0 2px;
                    line-height: 34px;
                    text-align: center;
                `);
        //////////////////////////////////////////////////////////////
        let volumeDiv = document.createElement('div');
        volumeDiv.setAttribute('id', 'volumeDiv');
        volumeDiv.setAttribute('style', `
                    position: absolute;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    top: 50%;
                    left: 50%;
                    min-width: 84px;
                    height: 32px;
                    padding: 8px;
                    color: #000;
                    font-size: 20px;
                    border-radius: 4px;
                    background: hsla(0,0%,100%,.8);
                    -webkit-transform: translate(-50%,-50%);
                    transform: translate(-50%,-50%);
                    z-index: 77;
                `);
        volumeDiv.appendChild(volumeIcon);
        volumeDiv.appendChild(volumeSpan);
        //////////////////////////////////////////////////////////////
        let screen = document.querySelector('[data-bind-attr="screen"]');
        screen.appendChild(volumeDiv);
        setTimeout(() => {
            screen.removeChild(volumeDiv);
        }, 500);
        //////////////////////////////////////////////////////////////
    }
};
document.addEventListener('wheel', function () {
    scroll();
}, false);
console.log("JS script AcFUN-ScrollVolume (AcFUN-滚轮调音量) loaded. See more details at https://github.com/SynRGB/AcFun-ScrollVolume");