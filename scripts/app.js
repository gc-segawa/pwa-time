// Web APIで現在時刻を取得
// 日本標準時プロジェクト http://www.nict.go.jp/JST/http.html
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ntp-a1.nict.go.jp/cgi-bin/time');
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    document.getElementById('time').innerHTML = xhr.responseText;
  }
};
xhr.send();