import React, { Component } from 'react';
import './index.css';

const loca = [
"外地ラノシア",
"高地ラノシア",
"西ラノシア",
"東ラノシア",
"中央ラノシア",
"低地ラノシア",
"ウルヴズジェイル",
"リムサロミンサ",
"北ザナラーン",
"西ザナラーン",
"東ザナラーン",
"中央ザナラーン",
"南ザナラーン",
"ゴールドソーサー",
"ウルダハ",
"北部森林",
"東部森林",
"中央森林",
"南部森林",
"グリダニア",
"モードゥナ",
"クルザス西部高地",
"クルザス中央高地",
"イシュガルド",
"イディルシャイア",
"高地ドラヴァニア",
"低地ドラヴァニア",
"ドラヴァニア雲海",
"アバラシア雲海",
"アジス・ラー",
"ギラバニア辺境地帯",
"ギラバニア山岳地帯",
"ギラバニア湖畔地帯",
"ラールガーズリーチ",
"紅玉海",
"ヤンサ",
"アジムステップ",
"ドマ町人地",
"クガネ",
"レイクランド",
"コルシア島",
"アム・アレーン",
"イル・メグ",
"ラケティカ大森林",
"テンペスト",
"ユールモア",
"クリスタリウム",
]

function roulette(){
    const locaNo = Math.floor( Math.random() * loca.length);
    let result = document.getElementById("result");
    let kekka = loca[locaNo];
    result.innerText = kekka;
    //console.log(loca[locaNo]);
}


class Roulette extends Component{
      render() {
        return (
          <div>
          <p className="text1">今日のSSは</p>
          <p id="result">エオルゼア</p>
          <button id="btn" onClick={roulette}>場所を決める！</button>
          <br/>
          <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false" 
            data-text ="ロケルレを使ってSSを撮りました！" data-hashtags="ロケルレ,FF14SS,FF14風景" data-url="https://locationroulette.site" data-lang="ja">ツイートする！</a>
          </div>
        );
      }
}

export default Roulette;