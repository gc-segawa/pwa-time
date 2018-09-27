// Web APIで現在時刻を取得
// 日本標準時プロジェクト http://www.nict.go.jp/JST/http.html
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ntp-a1.nict.go.jp/cgi-bin/json');
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var date = new Date(JSON.parse(xhr.responseText).st * 1000);
    document.getElementById('time').innerHTML = date.toLocaleString();
  }
};
xhr.send();