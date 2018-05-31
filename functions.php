<?php

// 座席の座標を返す
function decide_desk($flg, $nonEmptyDesks) {

  // 前から何番目か
  $y = rand(1, $flg ? 3 : 6);
  // 左から何番目か
  $x = rand(1, 6);

  $yx = [$y, $x];

  // 被りがなくなるまで繰り返す
  while (isDuplicate($yx, $nonEmptyDesks)) {
    $yx = decide_desk($flg, $nonEmptyDesks);
  }

  return $yx;
}

// 座席の重複が無いかを確認する
// 重複しているとtrueを返す
function isDuplicate($yx, $nonEmptyDesks) {

  foreach ($nonEmptyDesks as $desk) {
    if($desk[0] === $yx[0] && $desk[1] === $yx[1]) {
      return true;
    }
  }
  return false;
}

 ?>
