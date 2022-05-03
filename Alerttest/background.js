const showAlert = () => {
    alert('Hi');
};
chrome.action.onClicked.addListener((tab) => { // クリックイベント
    chrome.scripting.executeScript({
        target: { tabId: tab.id }, // 現在開いているタブを指定
        function: showAlert, // 実行する関数名
    });
});
