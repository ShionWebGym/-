import React, { Component } from 'react';
import './index.css';
import { Share } from 'react-twitter-widgets';

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

//function roulette(){
//    const locaNo = Math.floor( Math.random() * loca.length);
//    let result = document.getElementById("result");
//    let kekka = loca[locaNo];
//    result.innerText = kekka;
//    //console.log(loca[locaNo]);
//}


class Roulette extends Component{
  constructor(props){
    super(props);
    this.roulette = this.roulette.bind(this)
    this.state = ({kekka:"エオルゼア"})
  }

  roulette(){
    const locaNo = Math.floor( Math.random() * loca.length);
    //let result = document.getElementById("result");
    let kekka = loca[locaNo];
    this.setState({kekka:kekka});
   // result.innerText = kekka;
  }
  
      render() {
        return (
          <div>
          <p className="text1">今日のSSは</p>
          <p id="result">{this.state.kekka}</p>
          <button id="btn" onClick={this.roulette}>場所を決める！</button>
          <br/>
          <Share
            url="https://locationroulette.site/" 
            options= {{ lang:"ja",
                        text:`ロケルレを使って${this.state.kekka}でSSを撮りました！`,
                        hashtags:"ロケルレ,FF14,FF14風景"}}
          />
          </div>
        );
      }
}

export default Roulette;