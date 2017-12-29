window.onload = function() {
  var demo = new Vue({
    el: '#demo',
    data: {
      items: [
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
        }
      ],
    },
    filters:{
      filterItems: function(item){
          console.log(item)
          if (item.singers.includes("聖川真斗")){
            return item.title
          }
      }
    }
  });
};
