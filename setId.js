// ID設定用スクリプト
// 全てのtdタグに1-1のようなIDを付与する

var trs = document.getElementsByTagName('tr');

for(var i = 0; i < trs.length; i++) {
  var tdElements = trs[i].children;
  for(var j = 0; j < tdElements.length; j++) {
    tdElements[j].id = (i + 1) + '-' + (j + 1);
  }
}
