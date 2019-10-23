const gLines = [
  {
    ln_file: "T1301451.json",
    ln_key: "1301451",
    ln_name: "[ＪＲ]岩泉線 (茂市～岩泉) "
  },
  {
    ln_file: "T1301541.json",
    ln_key: "1301541",
    ln_name: "[ＪＲ]北上線 (北上～横手) "
  },
  {
    ln_file: "T1301671.json",
    ln_key: "1301671",
    ln_name: "[ＪＲ]磐越東線(ゆうゆうあぶくまライン) (いわき～郡山) "
  }];

  var newLine = gLines.filter(function(item, index){
    if (item.ln_key == '1301541') return true;
  });