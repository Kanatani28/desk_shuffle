// tdタグをすべて取得
var tds = document.getElementsByTagName('td');
console.log(tds);

// タイマー処理用変数
var timer;

// 非同期通信処理
function startFetch() {
  fetch('http://localhost:8080/desk.php')
  .then((response) => {
    if(response.ok) { // ステータスがokならば
      return response.json(); // レスポンスをJSONとして変換する
    } else {
      throw new Error();
    }
  })
  .then((json) =>
    {
      for(var i = 0; i < tds.length; i++) {
        console.log(tds[i].innerText);
        for (var j = 0; j < json.length; j++) {
          if(json[j].desk[0] + "-" + json[j].desk[1] === tds[i].id) {
            tds[i].innerHTML = json[j].name;
          }
        }
      }
      console.log(json);
    })
  .catch((error) => console.log(error));

}

// シャッフルの処理を開始する処理
function startFunc() {
   timer = setInterval("startFetch()",100);
}

// シャッフルの処理をストップする処理
function stopFunc() {
  clearInterval(timer);
}

// ボタン押下で始まる処理
function doToggle() {
  // ボタン要素取得
  var button = document.getElementById("toggle");
  // ボタンに表示する文字取得
  var toggleVal = button.value;

  // 取得した文字列によって処理を分岐する
  if(toggleVal === "START") {
    button.value = "STOP";
    startFunc();
  } else {
    button.value = "START";
    stopFunc();
  }
}
