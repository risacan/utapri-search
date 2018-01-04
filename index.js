var app = new Vue({
  el: '#app',
  methods: {
    resetFilter: function() {
      this.songs = utapri;
      this.checkedNames = [];
    },
    filterSongs: function(){
      var allSongs = utapri;
      var filteredSongs = [];
      var checkedNames = this.checkedNames;
      allSongs.forEach(function(val) {
        var baseLength = val.singers.length;
        var diffLength = diffArray(val.singers, checkedNames).length;
        if (diffLength == baseLength - checkedNames.length) {
          filteredSongs.push(val);
        }
      });
      this.songs = filteredSongs;
    }
  },
  data: {
    songs: {},
    checkedNames: []
  }
})

var utapri = [
  {
    "title": "リコリスの森",
    "album": "うたの☆プリンスさまっ♪Shining Masterpiece Show「リコリスの森」",
    "singers": [
      "一十木音也",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "愛島セシル"
    ]
  },
  {
    "title": "トロワ",
    "album": "うたの☆プリンスさまっ♪Shining Masterpiece Show「トロワ－剣と絆の物語－」",
    "singers": [
      "来栖翔",
      "美風藍",
      "カミュ"
    ]
  },
  {
    "title": "Lost Alice",
    "album": "うたの☆プリンスさまっ♪Shining Masterpiece Show「Lost Alice」",
    "singers": [
      "聖川真斗",
      "四ノ宮那月",
      "寿嶺二",
      "黒崎蘭丸"
    ]
  },
  {
    "title": "Shining☆Romance",
    "album": "うたの☆プリンスさまっ♪ Shining LiveテーマソングCD",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔",
      "愛島セシル"
    ]
  },
  {
    "title": "FORCE LIVE",
    "album": "うたの☆プリンスさまっ♪ Shining LiveテーマソングCD",
    "singers": [
      "寿嶺二",
      "黒崎蘭丸",
      "美風藍",
      "カミュ"
    ]
  },
  {
    "title": "NEXT DOOR",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 一十木音也＆鳳 瑛一",
    "singers": [
      "一十木音也",
      "鳳瑛一"
    ]
  },
  {
    "title": "Brilliant Days",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 一十木音也＆鳳 瑛一",
    "singers": [
      "一十木音也"
    ]
  },
  {
    "title": "STATE OF PERFECTION",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 一十木音也＆鳳 瑛一",
    "singers": [
      "鳳瑛一"
    ]
  },
  {
    "title": "Lasting Oneness",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 聖川真斗＆皇 綺羅",
    "singers": [
      "聖川真斗",
      "皇綺羅"
    ]
  },
  {
    "title": "I swear...",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 聖川真斗＆皇 綺羅",
    "singers": [
      "聖川真斗"
    ]
  },
  {
    "title": "Dazzling darling",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 聖川真斗＆皇 綺羅",
    "singers": [
      "皇綺羅"
    ]
  },
  {
    "title": "Grown empathy",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 四ノ宮那月＆帝 ナギ",
    "singers": [
      "四ノ宮那月",
      "帝ナギ"
    ]
  },
  {
    "title": "Tears in love",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 四ノ宮那月＆帝 ナギ",
    "singers": [
      "四ノ宮那月"
    ]
  },
  {
    "title": "You're mine!",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 四ノ宮那月＆帝 ナギ",
    "singers": [
      "帝ナギ"
    ]
  },
  {
    "title": "Lovely Eyes",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 神宮寺レン＆桐生院ヴァン",
    "singers": [
      "神宮寺レン",
      "桐生院ヴァン"
    ]
  },
  {
    "title": "Give Me True Love",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 神宮寺レン＆桐生院ヴァン",
    "singers": [
      "神宮寺レン"
    ]
  },
  {
    "title": "My cutie...Drive me crazy!",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 神宮寺レン＆桐生院ヴァン",
    "singers": [
      "桐生院ヴァン"
    ]
  },
  {
    "title": "Visible Elf",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 愛島セシル＆天草シオン",
    "singers": [
      "愛島セシル",
      "天草シオン"
    ]
  },
  {
    "title": "甘美なるアルカディア",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 愛島セシル＆天草シオン",
    "singers": [
      "愛島セシル"
    ]
  },
  {
    "title": "導き光",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 愛島セシル＆天草シオン",
    "singers": [
      "天草シオン"
    ]
  },
  {
    "title": "JUSTICE IMPULSE",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 来栖翔＆日向大和",
    "singers": [
      "来栖翔",
      "日向大和"
    ]
  },
  {
    "title": "初恋をまた始めよう",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 来栖翔＆日向大和",
    "singers": [
      "来栖翔"
    ]
  },
  {
    "title": "OVER THE TOP",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 来栖翔＆日向大和",
    "singers": [
      "日向大和"
    ]
  },
  {
    "title": "Mighty Aura",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 一ノ瀬トキヤ＆鳳 瑛二",
    "singers": [
      "一ノ瀬トキヤ",
      "鳳瑛二"
    ]
  },
  {
    "title": "Be the light!",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 一ノ瀬トキヤ＆鳳 瑛二",
    "singers": [
      "一ノ瀬トキヤ"
    ]
  },
  {
    "title": "Dreamer",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター デュエットアイドルソング 一ノ瀬トキヤ＆鳳 瑛二",
    "singers": [
      "鳳瑛二"
    ]
  },
  {
    "title": "DAY DREAM",
    "album": "うたの☆プリンスさまっ♪Shining Dream CD",
    "singers": [
      "一十木音也",
      "四ノ宮那月",
      "神宮寺レン",
      "来栖翔",
      "寿嶺二",
      "黒崎蘭丸"
    ]
  },
  {
    "title": "NIGHT DREAM",
    "album": "うたの☆プリンスさまっ♪Shining Dream CD",
    "singers": [
      "聖川真斗",
      "一ノ瀬トキヤ",
      "愛島セシル",
      "美風藍",
      "カミュ"
    ]
  },
  {
    "title": "ポラリス",
    "album": "うたの☆プリンスさまっ♪シアターシャイニング ポラリス",
    "singers": [
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "愛島セシル"
    ]
  },
  {
    "title": "エヴリィBuddy！",
    "album": "うたの☆プリンスさまっ♪シアターシャイニング エヴリィBuddy！",
    "singers": [
      "来栖翔",
      "寿嶺二"
    ]
  },
  {
    "title": "Pirates of the Frontier",
    "album": "うたの☆プリンスさまっ♪シアターシャイニング Pirates of the Frontier",
    "singers": [
      "一十木音也",
      "黒崎蘭丸",
      "カミュ"
    ]
  },
  {
    "title": "BLOODY SHADOWS",
    "album": "うたの☆プリンスさまっ♪シアターシャイニング BLOODY SHADOWS",
    "singers": [
      "聖川真斗",
      "神宮寺レン",
      "美風藍"
    ]
  },
  {
    "title": "天空のミラクルスター",
    "album": "うたの☆プリンスさまっ♪Shining All Star CD2",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔",
      "愛島セシル"
    ]
  },
  {
    "title": "Starlight Memory",
    "album": "うたの☆プリンスさまっ♪Shining All Star CD2",
    "singers": [
      "寿嶺二",
      "黒崎蘭丸",
      "美風藍",
      "カミュ"
    ]
  },
  {
    "title": "NEVER...",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　アイドルソング　寿嶺二",
    "singers": [
      "寿嶺二"
    ]
  },
  {
    "title": "Hurray×2ドリーマーズ",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　アイドルソング　寿嶺二",
    "singers": [
      "寿嶺二"
    ]
  },
  {
    "title": "ORIGINAL RESONANCE",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　クロスユニットアイドルソング　聖川真斗・一ノ瀬トキヤ",
    "singers": [
      "聖川真斗",
      "一ノ瀬トキヤ"
    ]
  },
  {
    "title": "静炎ブレイブハート",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　クロスユニットアイドルソング　聖川真斗・一ノ瀬トキヤ",
    "singers": [
      "聖川真斗"
    ]
  },
  {
    "title": "SECRET LOVER",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　クロスユニットアイドルソング　聖川真斗・一ノ瀬トキヤ",
    "singers": [
      "一ノ瀬トキヤ"
    ]
  },
  {
    "title": "ONLY ONE",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　アイドルソング　黒崎蘭丸",
    "singers": [
      "黒崎蘭丸"
    ]
  },
  {
    "title": "No.1",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　アイドルソング　黒崎蘭丸",
    "singers": [
      "黒崎蘭丸"
    ]
  },
  {
    "title": "Saintly Territory",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　アイドルソング　カミュ",
    "singers": [
      "カミュ"
    ]
  },
  {
    "title": "Double face",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　アイドルソング　カミュ",
    "singers": [
      "カミュ"
    ]
  },
  {
    "title": "Code:T.V.U",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　クロスユニットアイドルソング　神宮寺レン・来栖翔・愛島セシル",
    "singers": [
      "神宮寺レン",
      "来栖翔",
      "愛島セシル"
    ]
  },
  {
    "title": "Mellow×2 Chu",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　クロスユニットアイドルソング　神宮寺レン・来栖翔・愛島セシル",
    "singers": [
      "神宮寺レン"
    ]
  },
  {
    "title": "すべてを歌にっ！",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　クロスユニットアイドルソング　神宮寺レン・来栖翔・愛島セシル",
    "singers": [
      "来栖翔"
    ]
  },
  {
    "title": "GREEN AMBITION",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　クロスユニットアイドルソング　神宮寺レン・来栖翔・愛島セシル",
    "singers": [
      "愛島セシル"
    ]
  },
  {
    "title": "Innocent Wind",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　アイドルソング　美風藍",
    "singers": [
      "美風藍"
    ]
  },
  {
    "title": "ムネノコドウ",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　アイドルソング　美風藍",
    "singers": [
      "美風藍"
    ]
  },
  {
    "title": "EMOTIONAL LIFE",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　クロスユニットアイドルソング　一十木音也・四ノ宮那月",
    "singers": [
      "一十木音也",
      "四ノ宮那月"
    ]
  },
  {
    "title": "木漏れ日ダイヤモンド",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　クロスユニットアイドルソング　一十木音也・四ノ宮那月",
    "singers": [
      "一十木音也"
    ]
  },
  {
    "title": "The New World",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ　クロスユニットアイドルソング　一十木音也・四ノ宮那月",
    "singers": [
      "四ノ宮那月"
    ]
  },
  {
    "title": "マリアージュ",
    "album": "うたの☆プリンスさまっ♪ カルテットアイドルソング",
    "singers": [
      "寿嶺二",
      "黒崎蘭丸",
      "美風藍",
      "カミュ"
    ]
  },
  {
    "title": "You're my life",
    "album": "うたの☆プリンスさまっ♪ カルテットアイドルソング",
    "singers": [
      "寿嶺二",
      "黒崎蘭丸",
      "美風藍",
      "カミュ"
    ]
  },
  {
    "title": "純潔なる愛-Aspiration-",
    "album": "うたの☆プリンスさまっ♪アイドルソング カミュ",
    "singers": [
      "カミュ"
    ]
  },
  {
    "title": "AURORA",
    "album": "うたの☆プリンスさまっ♪アイドルソング カミュ",
    "singers": [
      "カミュ"
    ]
  },
  {
    "title": "A.I",
    "album": "うたの☆プリンスさまっ♪アイドルソング 美風藍",
    "singers": [
      "美風藍"
    ]
  },
  {
    "title": "二人のモノグラム",
    "album": "うたの☆プリンスさまっ♪アイドルソング 美風藍",
    "singers": [
      "美風藍"
    ]
  },
  {
    "title": "Not Bad",
    "album": "うたの☆プリンスさまっ♪アイドルソング 黒崎蘭丸",
    "singers": [
      "黒崎蘭丸"
    ]
  },
  {
    "title": "WILD SOUL",
    "album": "うたの☆プリンスさまっ♪アイドルソング 黒崎蘭丸",
    "singers": [
      "黒崎蘭丸"
    ]
  },
  {
    "title": "愛しき人へ",
    "album": "うたの☆プリンスさまっ♪アイドルソング 寿嶺二",
    "singers": [
      "寿嶺二"
    ]
  },
  {
    "title": "キスはウインクで",
    "album": "うたの☆プリンスさまっ♪アイドルソング 寿嶺二",
    "singers": [
      "寿嶺二"
    ]
  },
  {
    "title": "JOKER TRAP",
    "album": "うたの☆プリンスさまっ♪劇団シャイニング JOKER TRAP",
    "singers": [
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "黒崎蘭丸",
      "カミュ"
    ]
  },
  {
    "title": "天下無敵の忍び道",
    "album": "うたの☆プリンスさまっ♪劇団シャイニング 天下無敵の忍び道",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "来栖翔",
      "愛島セシル"
    ]
  },
  {
    "title": "マスカレイドミラージュ",
    "album": "うたの☆プリンスさまっ♪劇団シャイニング マスカレイドミラージュ",
    "singers": [
      "四ノ宮那月",
      "寿嶺二",
      "美風藍"
    ]
  },
  {
    "title": "Still Still Still",
    "album": "うたの☆プリンスさまっ♪シャッフルユニット 那月＆トキヤ",
    "singers": [
      "四ノ宮那月",
      "一ノ瀬トキヤ"
    ]
  },
  {
    "title": "Baby! My strawberry!",
    "album": "うたの☆プリンスさまっ♪シャッフルユニット カミュ＆レン",
    "singers": [
      "神宮寺レン",
      "カミュ"
    ]
  },
  {
    "title": "Beautiful Love",
    "album": "うたの☆プリンスさまっ♪シャッフルユニットCD 藍＆真斗＆翔",
    "singers": [
      "聖川真斗",
      "来栖翔",
      "美風藍"
    ]
  },
  {
    "title": "恋色センチメンタル",
    "album": "うたの☆プリンスさまっ♪シャッフルユニットCD 蘭丸＆セシル",
    "singers": [
      "愛島セシル",
      "黒崎蘭丸"
    ]
  },
  {
    "title": "Hyper×Super×Lover☆",
    "album": "うたの☆プリンスさまっ♪ シャッフルユニットCD 嶺二＆音也",
    "singers": [
      "一十木音也",
      "寿嶺二"
    ]
  },
  {
    "title": "RISE AGAIN",
    "album": "うたの☆プリンスさまっ♪デュエットCD 嶺二＆蘭丸／藍＆カミュ",
    "singers": [
      "寿嶺二",
      "黒崎蘭丸"
    ]
  },
  {
    "title": "月明かりのDEAREST",
    "album": "うたの☆プリンスさまっ♪デュエットCD 嶺二＆蘭丸／藍＆カミュ",
    "singers": [
      "美風藍",
      "カミュ"
    ]
  },
  {
    "title": "ハルハナ",
    "album": "うたの☆プリンスさまっ♪ アイドルソング 蘭丸＆藍",
    "singers": [
      "黒崎蘭丸",
      "美風藍"
    ]
  },
  {
    "title": "BE PROUD",
    "album": "うたの☆プリンスさまっ♪ アイドルソング 蘭丸＆藍",
    "singers": [
      "黒崎蘭丸"
    ]
  },
  {
    "title": "シンクロニズム",
    "album": "うたの☆プリンスさまっ♪ アイドルソング 蘭丸＆藍",
    "singers": [
      "美風藍"
    ]
  },
  {
    "title": "KILLER KISS",
    "album": "うたの☆プリンスさまっ♪ アイドルソング 嶺二＆カミュ",
    "singers": [
      "寿嶺二",
      "カミュ"
    ]
  },
  {
    "title": "オン・ユア・マーク！",
    "album": "うたの☆プリンスさまっ♪ アイドルソング 嶺二＆カミュ",
    "singers": [
      "寿嶺二"
    ]
  },
  {
    "title": "Melting of snow",
    "album": "うたの☆プリンスさまっ♪ アイドルソング 嶺二＆カミュ",
    "singers": [
      "カミュ"
    ]
  },
  {
    "title": "BRIGHT ROAD",
    "album": "うたの☆プリンスさまっ♪アイドルソング 蘭丸＆カミュ",
    "singers": [
      "黒崎蘭丸",
      "カミュ"
    ]
  },
  {
    "title": "絶対零度Emotion",
    "album": "うたの☆プリンスさまっ♪アイドルソング 蘭丸＆カミュ",
    "singers": [
      "カミュ"
    ]
  },
  {
    "title": "溺愛テンプテーション",
    "album": "うたの☆プリンスさまっ♪ アイドルソング 嶺二＆藍",
    "singers": [
      "寿嶺二"
    ]
  },
  {
    "title": "WinterBlossom",
    "album": "うたの☆プリンスさまっ♪ アイドルソング 嶺二＆藍",
    "singers": [
      "美風藍"
    ]
  },
  {
    "title": "RAINBOW☆DREAM",
    "album": "うたの☆プリンスさまっ♪Shining All Star CD",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔",
      "愛島セシル"
    ]
  },
  {
    "title": "QUARTET★NIGHT",
    "album": "うたの☆プリンスさまっ♪Shining All Star CD",
    "singers": [
      "寿嶺二",
      "黒崎蘭丸",
      "美風藍",
      "カミュ"
    ]
  },
  {
    "title": "CRYSTAL TIME",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000% アイドルソング 一ノ瀬トキヤ",
    "singers": [
      "一ノ瀬トキヤ"
    ]
  },
  {
    "title": "Independence",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000% アイドルソング 一ノ瀬トキヤ",
    "singers": [
      "一ノ瀬トキヤ"
    ]
  },
  {
    "title": "星のファンタジア",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000% アイドルソング 愛島セシル",
    "singers": [
      "愛島セシル"
    ]
  },
  {
    "title": "Happiness",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000% アイドルソング 愛島セシル",
    "singers": [
      "愛島セシル"
    ]
  },
  {
    "title": "シリウスへの誓い",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000% アイドルソング 四ノ宮那月",
    "singers": [
      "四ノ宮那月"
    ]
  },
  {
    "title": "☆YELL☆",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000% アイドルソング 四ノ宮那月",
    "singers": [
      "四ノ宮那月"
    ]
  },
  {
    "title": "オレンジラプソディ",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000% アイドルソング 神宮寺レン",
    "singers": [
      "神宮寺レン"
    ]
  },
  {
    "title": "FREEDOM",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000% アイドルソング 神宮寺レン",
    "singers": [
      "神宮寺レン"
    ]
  },
  {
    "title": "SMILE MAGIC",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000% アイドルソング 一十木音也",
    "singers": [
      "一十木音也"
    ]
  },
  {
    "title": "HORIZON",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000% アイドルソング 一十木音也",
    "singers": [
      "一十木音也"
    ]
  },
  {
    "title": "恋桜",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000% アイドルソング 聖川真斗",
    "singers": [
      "聖川真斗"
    ]
  },
  {
    "title": "Sanctuary",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000% アイドルソング 聖川真斗",
    "singers": [
      "聖川真斗"
    ]
  },
  {
    "title": "TRUE WING",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000% アイドルソング 来栖翔",
    "singers": [
      "来栖翔"
    ]
  },
  {
    "title": "CHALLENGE!",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000% アイドルソング 来栖翔",
    "singers": [
      "来栖翔"
    ]
  },
  {
    "title": "ガムシャラROman☆Tic",
    "album": "うたの☆プリンスさまっ♪ Debut ユニットドラマCD 嶺二＆音也＆トキヤ",
    "singers": [
      "一十木音也",
      "一ノ瀬トキヤ",
      "寿嶺二"
    ]
  },
  {
    "title": "Dream more than Love",
    "album": "うたの☆プリンスさまっ♪ Debut ユニットドラマCD 蘭丸＆真斗＆レン",
    "singers": [
      "聖川真斗",
      "神宮寺レン",
      "黒崎蘭丸"
    ]
  },
  {
    "title": "Triangle Beat",
    "album": "うたの☆プリンスさまっ♪ Debut ユニットドラマCD 藍＆那月＆翔",
    "singers": [
      "四ノ宮那月",
      "来栖翔",
      "美風藍"
    ]
  },
  {
    "title": "NorthWind and SunShine",
    "album": "うたの☆プリンスさまっ♪ Debut ユニットドラマCD カミュ＆セシル",
    "singers": [
      "愛島セシル",
      "カミュ"
    ]
  },
  {
    "title": "Eternity Love",
    "album": "うたの☆プリンスさまっ♪マジLOVE1000% アイドルソング 愛島セシル",
    "singers": [
      "愛島セシル"
    ]
  },
  {
    "title": "愛と夢とアナタと",
    "album": "うたの☆プリンスさまっ♪マジLOVE1000% アイドルソング 愛島セシル",
    "singers": [
      "愛島セシル"
    ]
  },
  {
    "title": "七色のコンパス",
    "album": "うたの☆プリンスさまっ♪マジLOVE1000% アイドルソング 一ノ瀬トキヤ",
    "singers": [
      "一ノ瀬トキヤ"
    ]
  },
  {
    "title": "My Little Little Girl",
    "album": "うたの☆プリンスさまっ♪マジLOVE1000% アイドルソング 一ノ瀬トキヤ",
    "singers": [
      "一ノ瀬トキヤ"
    ]
  },
  {
    "title": "オリオンでSHOUT OUT",
    "album": "うたの☆プリンスさまっ♪マジLOVE1000% アイドルソング 四ノ宮那月",
    "singers": [
      "四ノ宮那月"
    ]
  },
  {
    "title": "Top Star Revolution",
    "album": "うたの☆プリンスさまっ♪マジLOVE1000% アイドルソング 四ノ宮那月",
    "singers": [
      "四ノ宮那月"
    ]
  },
  {
    "title": "男気全開Go! Fight!!",
    "album": "うたの☆プリンスさまっ♪マジLOVE1000% アイドルソング 来栖翔",
    "singers": [
      "来栖翔"
    ]
  },
  {
    "title": "Changing our Song!",
    "album": "うたの☆プリンスさまっ♪マジLOVE1000% アイドルソング 来栖翔",
    "singers": [
      "来栖翔"
    ]
  },
  {
    "title": "世界の果てまでBelieve Heart",
    "album": "うたの☆プリンスさまっ♪マジLOVE1000% アイドルソング神宮寺レン",
    "singers": [
      "神宮寺レン"
    ]
  },
  {
    "title": "Dear... Burning my Lady!",
    "album": "うたの☆プリンスさまっ♪マジLOVE1000% アイドルソング神宮寺レン",
    "singers": [
      "神宮寺レン"
    ]
  },
  {
    "title": "Knocking on the mind",
    "album": "うたの☆プリンスさまっ♪マジLOVE1000% アイドルソング 聖川真斗",
    "singers": [
      "聖川真斗"
    ]
  },
  {
    "title": "Mostフォルティシモ",
    "album": "うたの☆プリンスさまっ♪マジLOVE1000% アイドルソング 聖川真斗",
    "singers": [
      "聖川真斗"
    ]
  },
  {
    "title": "BRAND NEW MELODY",
    "album": "うたの☆プリンスさまっ♪マジLOVE1000% アイドルソング 一十木音也",
    "singers": [
      "一十木音也"
    ]
  },
  {
    "title": "Over the Rainbow",
    "album": "うたの☆プリンスさまっ♪マジLOVE1000% アイドルソング 一十木音也",
    "singers": [
      "一十木音也"
    ]
  },
  {
    "title": "GO!×2ジェットコースター",
    "album": "うたの☆プリンスさまっ♪デュエットドラマCD 那月＆翔",
    "singers": [
      "四ノ宮那月",
      "来栖翔"
    ]
  },
  {
    "title": "DOUBLE WISH",
    "album": "うたの☆プリンスさまっ♪デュエットドラマCD 真斗＆レン",
    "singers": [
      "聖川真斗",
      "神宮寺レン"
    ]
  },
  {
    "title": "ROULETTE",
    "album": "うたの☆プリンスさまっ♪デュエットドラマCD 音也＆トキヤ",
    "singers": [
      "一十木音也",
      "一ノ瀬トキヤ"
    ]
  },
  {
    "title": "アンドロメダでクチヅケを",
    "album": "「うたの☆プリンスさまっ♪」ハッピーラブソング(3) アンドロメダでクチヅケを / コズミックRUNNER",
    "singers": [
      "四ノ宮那月"
    ]
  },
  {
    "title": "コズミックRUNNER",
    "album": "「うたの☆プリンスさまっ♪」ハッピーラブソング(3) アンドロメダでクチヅケを / コズミックRUNNER",
    "singers": [
      "来栖翔"
    ]
  },
  {
    "title": "BLUE×PRISM HEART",
    "album": "「うたの☆プリンスさまっ♪」ハッピーラブソング(2) BLUE×PRISM HEART / RED HOT×LOVE MINDS",
    "singers": [
      "聖川真斗"
    ]
  },
  {
    "title": "RED HOT×LOVE MINDS",
    "album": "「うたの☆プリンスさまっ♪」ハッピーラブソング(2) BLUE×PRISM HEART / RED HOT×LOVE MINDS",
    "singers": [
      "神宮寺レン"
    ]
  },
  {
    "title": "虹色☆OVER DRIVE",
    "album": "「うたの☆プリンスさまっ♪」ハッピーラブソング(1) 虹色☆OVERDRIVE！ / 星屑☆Shall we dance？",
    "singers": [
      "一十木音也"
    ]
  },
  {
    "title": "星屑☆Shall we dance？",
    "album": "「うたの☆プリンスさまっ♪」ハッピーラブソング(1) 虹色☆OVERDRIVE！ / 星屑☆Shall we dance？",
    "singers": [
      "一ノ瀬トキヤ"
    ]
  },
  {
    "title": "永遠のトライスター",
    "album": "オーディションソング(4) 永遠のトライスター / 無限のトリニティ",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月"
    ]
  },
  {
    "title": "無限のトリニティ",
    "album": "オーディションソング(4) 永遠のトライスター / 無限のトリニティ",
    "singers": [
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔"
    ]
  },
  {
    "title": "サザンクロス恋唄",
    "album": "オーディションソング(3) サザンクロス恋唄 / オレサマ愛歌",
    "singers": [
      "四ノ宮那月"
    ]
  },
  {
    "title": "オレサマ愛歌",
    "album": "オーディションソング(3) サザンクロス恋唄 / オレサマ愛歌",
    "singers": [
      "来栖翔"
    ]
  },
  {
    "title": "騎士のKissは雪より優しく",
    "album": "オーディションソング(2) 騎士のKissは雪より優しく / 悪魔のKissは炎より激しく",
    "singers": [
      "聖川真斗"
    ]
  },
  {
    "title": "悪魔のKissは炎より激しく",
    "album": "オーディションソング(2) 騎士のKissは雪より優しく / 悪魔のKissは炎より激しく",
    "singers": [
      "神宮寺レン"
    ]
  },
  {
    "title": "TRUST☆MY DREAM",
    "album": "オーディションソング(1) TRUST☆MY DREAM / BELIEVE☆MY VOICE",
    "singers": [
      "一十木音也"
    ]
  },
  {
    "title": "BELIEVE☆MY VOICE",
    "album": "オーディションソング(1) TRUST☆MY DREAM / BELIEVE☆MY VOICE",
    "singers": [
      "一ノ瀬トキヤ"
    ]
  },
  {
    "title": "熱情 SERENADE",
    "album": "うたの☆プリンスさまっ♪SSディスク 熱情 SERENADE / サイコロトーク(ドラマパート)",
    "singers": [
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔"
    ]
  },
  {
    "title": "AMAZING LOVE",
    "album": "うたの☆プリンスさまっ♪AAディスク AMAZING LOVE/バラエティトークレッスン(ドラマパート)",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月"
    ]
  },
  {
    "title": "Welcome to UTA☆PRI world!!",
    "album": "サウンドの☆プリンスさまっ♪",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔"
    ]
  },
  {
    "title": "DESTINY SONG",
    "album": "サウンドの☆プリンスさまっ♪",
    "singers": [
      "愛島セシル"
    ]
  },
  {
    "title": "マジLOVE1000%",
    "album": "マジLOVE1000%",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔"
    ],
    "group": "ST☆RISH"
  },
  {
    "title": "未来地図",
    "album": "マジLOVE1000%",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔"
    ],
    "group": "ST☆RISH"
  },
  {
    "title": "マジLOVE2000%",
    "album": "マジLOVE2000%",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔",
      "愛島セシル"
    ],
    "group": "ST☆RISH"
  },
  {
    "title": "夢追人へのSymphony",
    "album": "マジLOVE2000%",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔",
      "愛島セシル"
    ],
    "group": "ST☆RISH"
  },
  {
    "title": "マジLOVEレボリューションズ",
    "album": "マジLOVEレボリューションズ",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔",
      "愛島セシル"
    ],
    "group": "ST☆RISH"
  },
  {
    "title": "サンキュ",
    "album": "マジLOVEレボリューションズ",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔",
      "愛島セシル"
    ],
    "group": "ST☆RISH"
  },
  {
    "title": "マジLOVEレジェンドスター",
    "album": "マジLOVEレジェンドスター",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔",
      "愛島セシル"
    ],
    "group": "ST☆RISH"
  },
  {
    "title": "未来、夢、ありがとう…そして!",
    "album": "マジLOVEレジェンドスター",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔",
      "愛島セシル"
    ],
    "group": "ST☆RISH"
  },
  {
    "title": "エボリューション・イヴ",
    "album": "エボリューション・イヴ",
    "singers": [
      "寿嶺二",
      "黒崎蘭丸",
      "美風藍",
      "カミュ"
    ],
    "group": "QUARTET NIGHT"
  },
  {
    "title": "The dice are cast",
    "album": "エボリューション・イヴ",
    "singers": [
      "寿嶺二",
      "黒崎蘭丸",
      "美風藍",
      "カミュ"
    ],
    "group": "QUARTET NIGHT"
  },
  {
    "title": "God's S.T.A.R.",
    "album": "God's S.T.A.R.",
    "singers": [
      "寿嶺二",
      "黒崎蘭丸",
      "美風藍",
      "カミュ"
    ],
    "group": "QUARTET NIGHT"
  },
  {
    "title": "KIZUNA",
    "album": "God's S.T.A.R.",
    "singers": [
      "寿嶺二",
      "黒崎蘭丸",
      "美風藍",
      "カミュ"
    ],
    "group": "QUARTET NIGHT"
  },
  {
    "title": "不滅のインフェルノ",
    "album": "不滅のインフェルノ",
    "singers": [
      "鳳瑛一",
      "皇綺羅",
      "帝ナギ",
      "鳳瑛二",
      "桐生院ヴァン",
      "日向大和",
      "天草シオン"
    ],
    "group": "HE★VENS"
  },
  {
    "title": "HE★VENLY PARADE",
    "album": "不滅のインフェルノ",
    "singers": [
      "鳳瑛一",
      "皇綺羅",
      "帝ナギ",
      "鳳瑛二",
      "桐生院ヴァン",
      "日向大和",
      "天草シオン"
    ],
    "group": "HE★VENS"
  },
  {
    "title": "HEAVEN SKY",
    "album": "うたの☆プリンスさまっ♪ ｢HEAVEN SKY｣エピソードCD",
    "singers": [
      "鳳瑛一",
      "皇綺羅",
      "帝ナギ",
      "鳳瑛二",
      "桐生院ヴァン",
      "日向大和",
      "天草シオン"
    ],
    "group": "HE★VENS"
  },
  {
    "title": "愛のREINCARNATION",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000％ 4 オリジナルサウンドトラック　Vol.3",
    "singers": [
      "愛島セシル"
    ]
  },
  {
    "title": "ピヨちゃんのうた",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000％ 4 オリジナルサウンドトラック　Vol.3",
    "singers": [
      "四ノ宮那月"
    ]
  },
  {
    "title": "HE★VENS GATE",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000％ 6 封入特典CD",
    "singers": [
      "鳳瑛一",
      "皇綺羅",
      "帝ナギ"
    ],
    "group": "HE★VENS"
  },
  {
    "title": "Shining Star Xmas",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000％ 7 封入特典CD",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔",
      "愛島セシル",
      "寿嶺二",
      "黒崎蘭丸",
      "美風藍",
      "カミュ"
    ]
  },
  {
    "title": "ファンタスティックmelody",
    "album": "「うたの☆プリンスさまっ♪-Amazing Aria-」,「うたの☆プリンスさまっ♪-Sweet Serenade-」連動購入特典",
    "singers": [
      "一十木音也",
      "来栖翔"
    ]
  },
  {
    "title": "ADVENT ACE",
    "album": "うたの☆プリンスさまっ♪ Amazing Aria & Sweet Serenade LOVE Premium Princess BOX封入特典　Rainbow Stars CD",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "愛島セシル"
    ]
  },
  {
    "title": "一緒にHang in there♪",
    "album": "うたの☆プリンスさまっ♪ Amazing Aria & Sweet Serenade LOVE Premium Princess BOX封入特典　Rainbow Stars CD",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔",
      "愛島セシル"
    ]
  },
  {
    "title": "Superb Spirits",
    "album": "うたの☆プリンスさまっ♪ Amazing Aria & Sweet Serenade LOVE Premium Princess BOX封入特典　Rainbow Stars CD",
    "singers": [
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔"
    ]
  },
  {
    "title": "ポワゾンKISS",
    "album": "うたの☆プリンスさまっ♪マジLOVE2000％ 1 封入特典CD",
    "singers": [
      "寿嶺二",
      "黒崎蘭丸",
      "美風藍",
      "カミュ"
    ]
  },
  {
    "title": "夢を歌へと…!",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター 1 封入特典CD",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔",
      "愛島セシル",
      "寿嶺二",
      "黒崎蘭丸",
      "美風藍",
      "カミュ",
      "鳳瑛一",
      "皇綺羅",
      "帝ナギ",
      "鳳瑛二",
      "桐生院ヴァン",
      "日向大和",
      "天草シオン"
    ],
    "group": "ST☆RISH・QUARTET NIGHT・HE★VENS"
  },
  {
    "title": "WE ARE ST☆RISH!!",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレジェンドスター 6 封入特典CD",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔",
      "愛島セシル"
    ],
    "group": "ST☆RISH"
  },
  {
    "title": "GOLDEN☆STAR",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ 1 封入特典CD",
    "singers": [
      "一十木音也",
      "聖川真斗",
      "四ノ宮那月",
      "一ノ瀬トキヤ",
      "神宮寺レン",
      "来栖翔",
      "愛島セシル",
      "寿嶺二",
      "黒崎蘭丸",
      "美風藍",
      "カミュ"
    ]
  },
  {
    "title": "HE★VENS GATE -Beginning of the Legend-",
    "album": "うたの☆プリンスさまっ♪ マジLOVEレボリューションズ 6 封入特典CD",
    "singers": [
      "鳳瑛一",
      "皇綺羅",
      "帝ナギ",
      "鳳瑛二",
      "桐生院ヴァン",
      "日向大和",
      "天草シオン"
    ]
  },
  {
    "title": "情熱のデジャヴキス",
    "album": "うたの☆プリンスさまっ♪ -Amazing Aria- 初回限定版特典 Amazing Disc",
    "singers": [
      "愛島セシル"
    ]
  }
]
app.songs = utapri;

function diffArray(arr1, arr2) {
  var newArr = [];
  for(var a = 0 ; a < arr1.length; a++){
    if(arr2.indexOf(arr1[a]) === -1 ){
      newArr.push(arr1[a]);
    }
  }
  for(var b = 0; b < arr2.length; b++){
    if(arr1.indexOf(arr2[b]) === -1 ){
       newArr.push(arr2[b]);
       }
  }
  return newArr;
}