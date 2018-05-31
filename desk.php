<?php

// 氏名、前希望フラグ、座席の番号が入ったJSONを生成する

// 関数定義ファイル読み込み
include('functions.php');

// user.csvファイル読み込み
$lines = file("user.csv", FILE_IGNORE_NEW_LINES);

// 受講者情報の配列
$participants = [];

// 座れない席
$nonEmptyDesks = [[4, 1], [4, 3], [5, 1], [5, 2], [5, 3], [5, 4], [6, 1], [6, 2], [6, 3], [6, 4]];

// ファイルから読み込んだ内容を連想配列に変換
foreach ($lines as $line) {
  // 名前と前希望フラグが入った配列取得
  $result = explode(",", $line);
  // 座席の座標取得
  $yx = decide_desk($result[1], $nonEmptyDesks);
  // 連想配列に変換
  $participants[] = ["name" => $result[0], "flg" => $result[1], "desk" => $yx];
  // 埋まった座席を配列に格納する
  $nonEmptyDesks[] = $yx;

}

// 連想配列をJSONに変換
$json = json_encode($participants, JSON_UNESCAPED_UNICODE);

// JSON用のヘッダを定義して出力
header("Content-Type: text/javascript; charset=utf-8");
echo $json;
exit();
?>
