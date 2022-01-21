// @name         AcFun滚轮调音量
// @version      1.1.1
// @description  AcFun滚轮调音量, change AcFun's volume by scroll.
// @author       GitHub@SynthesisDu
// @license      Mozilla Public License 2.0
// @homepageURL       https://github.com/SynRGB/AcFunScrollVolume
// @contributionURL   https://github.com/SynRGB/AcFunScrollVolume
// @updateURL         https://github.com/SynRGB/AcFunScrollVolume/releases/new

var main = `
// 防止和Tempermonkey版本冲突
if (typeof duplicateScriptRecognition_GitHubSynthesisDu_AcFunScrollVolume == "undefined") {
    var duplicateScriptRecognition_GitHubSynthesisDu_AcFunScrollVolume = "1.1.1";
    // 模拟键盘, keyCode为键值
    function pressKey (keyCode) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent("keydown", true, false);
        event.keyCode = keyCode;
        event.isTrusted = true;
        window.dispatchEvent(event);
    }
    // 一次滚轮滚动会触发两次按键, 用此变量做修正
    var count_amend_singleScrollTriggeredTwoTimes = 0;
    // 当滚动滚轮, 模拟按下↑↓
    var scroll = () => {
        var e = window.event;
        // 仅在全屏时生效
        if (document.querySelector('[data-bind-attr="screen"]') !== null) {
            // 一次滚轮滚动会触发两次按键, 用此变量做修正
            if (count_amend_singleScrollTriggeredTwoTimes === 0) {
                // 一次滚轮滚动会触发两次按键, 用此变量做修正
                count_amend_singleScrollTriggeredTwoTimes = 1;
                // 向上滚动
                if (e.wheelDelta > 0) {pressKey(38);}
                // 向下滚动
                if (e.wheelDelta < 0) {pressKey(40);}
            } else {
                // 一次滚轮滚动会触发两次按键, 用此变量做修正
                count_amend_singleScrollTriggeredTwoTimes = 0;
            }
        }
    };
    // 给页面绑定滑轮滚动事件
    window.onmousewheel = document.onmousewheel = scroll;
    console.log("JS script AcFUNScrollVolume (AcFUN滚轮调音量) loaded, version " + duplicateScriptRecognition_GitHubSynthesisDu_AcFunScrollVolume + ". See more details at https://github.com/SynRGB/AcFunScrollVolume");
}
`;

var scriptElement = document.createElement("script");
scriptElement.innerHTML = main;
document.head.appendChild(scriptElement);