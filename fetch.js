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
          if(json[j].desk[0] + "," + json[j].desk[1] === tds[i].id) {
            tds[i].innerHTML = json[j].name;
          }
        }
      }
      console.log(json);
    })
  .catch((error) => console.log(error));

}

function startFunc() {
   timer = setInterval("startFetch()",100);
}

function stopFunc() {
  clearInterval(timer);
}

// ボタン押下で始まる処理
function doToggle() {
  var button = document.getElementById("toggle");

  var toggleVal = button.value;

  if(toggleVal === "START") {
    button.value = "STOP";
    startFunc();
  } else {
    button.value = "START";
    stopFunc();
  }
}
