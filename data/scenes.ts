import type { Scene } from "@/types/game";

export const scenes: Scene[] = [
  {
    id: "TITLE",
    title: "余白",
    body: [],
    visualType: "title",
    noiseLevel: 2
  },
  {
    id: "STREET",
    title: "駅へ向かう道",
    body: [
      "駅へ向かう道の途中だった。",
      "胸の奥を、急に強くつかまれたような痛みが走る。",
      "息を吸おうとしても、空気が入ってこない。",
      "視界の端が、黒くにじんでいく。",
      "手すりに触れようとした指先が、空を切る。",
      "膝から力が抜け、アスファルトが近づいてくる。",
      "誰かの声がする。",
      "でも、言葉の形までは聞き取れない。",
      "スマホが手から滑り落ちる音だけが、やけにはっきり聞こえた。"
    ],
    choices: [{ label: "目を開ける" }],
    visualType: "street_crossing",
    noiseLevel: 5
  },
  {
    id: "HOSPITAL",
    title: "白い天井",
    body: [
      "目を開けると、白い天井があった。",
      "喉が乾いている。",
      "胸の奥に、まだ鈍い重さが残っている。",
      "消毒液の匂い。",
      "遠くで鳴る心電図。",
      "誰かがカーテンの向こうで、低い声で話している。",
      "看護師が、{name}さん、と呼んだ気がした。",
      "スマホには、いつも通り通知が並んでいる。"
    ],
    choices: [{ label: "スマホを見る" }],
    visualType: "hospital_ceiling",
    noiseLevel: 4
  },
  {
    id: "LOCK_SCREEN",
    title: "ロック画面",
    body: [
      "取引先：こちらの件、いかがでしょうか。",
      "母：不在着信 5件",
      "LINE：12件のメッセージがあります。",
      "SNS：コメント2件とメッセージ3件があります。"
    ],
    question: "通知の中で、今、一番開きたくないものは？",
    choices: [
      { label: "取引先", response: "普通でいたいのに、もう普通に戻れない気がした。" },
      { label: "母", response: "声を聞いたら、現実になる気がした。" },
      { label: "LINE", response: "どうでもいい会話が、急に遠く感じた。" },
      { label: "SNS", response: "世界はいつも通り流れている。自分だけ止まったまま。" },
      { label: "全部どうでもいい", response: "そう思ったのに、指はまだ通知を見ていた。" }
    ],
    visualType: "lock_screen",
    noiseLevel: 5
  },
  {
    id: "DOCTOR",
    title: "検査結果",
    body: [
      "{name}さん。",
      "検査結果ですが……",
      "残された時間は、",
      "長くありません。",
      "おそらく……",
      "3ヶ月です。",
      "その瞬間、音が遠くなる。",
      "今まで無限にあると思っていた明日が、",
      "突然、有限になる。",
      "ポケットの中で、通知音だけが明るく鳴った。"
    ],
    choices: [{ label: "画面を開く" }],
    visualType: "doctor_view",
    noiseLevel: 3,
    delayMs: 850
  },
  {
    id: "SNS_DENIAL",
    title: "検索",
    body: [
      "いや、まだ大丈夫。",
      "誤診かもしれない。",
      "明日になれば、いつもの生活に戻れるかもしれない。",
      "だからあなたは、SNSを開く。"
    ],
    question: "今、一番信じたい言葉は？",
    choices: [
      { label: "誤診かもしれない", response: "まだ、明日が続くと思いたかった。" },
      { label: "まだ助かる", response: "生きたい。その気持ちだけが、画面にしがみついていた。" },
      { label: "考えすぎだ", response: "現実より先に、心が逃げようとしていた。" },
      { label: "何も信じたくない", response: "画面を閉じても、現実だけは閉じられなかった。" }
    ],
    visualType: "sns",
    noiseLevel: 4
  },
  {
    id: "FRIEND_MESSAGE",
    title: "健太",
    body: [
      "どうでもいい話なんだけどさ",
      "駅前のラーメン屋なくなるらしいw",
      "{name}、てか来週飲みいける？",
      "入力欄が光っている。",
      "でも、何を返せばいいのかわからない。"
    ],
    question: "今、本当に誰かにこのことを話したいですか？",
    choices: [
      { label: "話したい", response: "誰かに知ってほしかった。でも、知ってほしくなかった。" },
      { label: "まだ話せない", response: "言葉にした瞬間、本当に終わる気がした。" },
      { label: "言葉にできない", response: "感情だけがあって、まだ名前がなかった。" },
      { label: "わからない", response: "助けてほしいのか、一人になりたいのか、自分でもわからなかった。" }
    ],
    visualType: "message",
    noiseLevel: 3
  },
  {
    id: "HOSPITAL_NIGHT",
    title: "眠れない夜",
    body: [
      "眠れない。",
      "心電図だけが、時間みたいに鳴っている。",
      "窓の外は静かだった。",
      "スマホを開く。",
      "来週：健太と飲み",
      "来月：東北出張",
      "8月：実家に帰省",
      "スクロールする。",
      "でも、その未来の中に、自分がいる感じがしない。",
      "画面を閉じる。",
      "真っ暗になったガラスに、自分の顔だけが残る。",
      "眠ったら、そのまま戻れない気がした。"
    ],
    question: "今、一番怖いのは？",
    choices: [
      { label: "明日が減ること", response: "未来って、永遠に来ると思っていた。" },
      { label: "誰かを残すこと", response: "自分が消えるより、残される人を想像してしまった。" },
      { label: "忘れられること", response: "人生は、思っていたより静かに消えていく。" },
      { label: "まだ死にたくない", response: "初めて、ちゃんと怖いと思った。" }
    ],
    visualType: "hospital_night",
    noiseLevel: 2
  },
  {
    id: "CAMERA_ROLL",
    title: "カメラロール",
    body: [
      "指は止まらない。",
      "思い出そうとしているわけじゃない。",
      "ただ、戻っていく。",
      "もっと前へ。",
      "もっと。",
      "もっと。",
      "やがて、夏の帰り道。踏切。海。食卓。夕方。"
    ],
    question: "写真を見ていて、一番戻りたくなったのは？",
    choices: [
      { label: "何も考えてなかった頃", response: "幸せって、気づかないうちに終わっている。" },
      { label: "誰かがいた時間", response: "特別じゃなかった。でも、ちゃんとあたたかかった。" },
      { label: "一人でも平気だった頃", response: "本当は、誰かがいたから平気だった。" },
      { label: "まだ未来があった頃", response: "あの頃は、来年が来ることを疑ってなかった。" }
    ],
    visualType: "camera_roll",
    noiseLevel: 2
  },
  {
    id: "UNSENT_DRAFT",
    title: "未送信",
    body: [
      "連絡先を開く。",
      "名前はたくさんある。",
      "でも、今すぐ押せる名前は少ない。",
      "ずっと、連絡していない人はいますか？"
    ],
    question: "言えなかった言葉を書く",
    choices: [
      { label: "いる" },
      { label: "思い浮かばない" },
      { label: "考えたくない" }
    ],
    visualType: "draft",
    noiseLevel: 1
  },
  {
    id: "RETURN_TO_NOW",
    title: "いま",
    body: [
      "もう、通知はほとんど残っていない。",
      "画面の外の空気だけがある。",
      "息を吸う。",
      "まだ、吸える。",
      "あなたは、まだ間に合います。"
    ],
    choices: [
      { label: "誰かへ連絡する" },
      { label: "言葉を残す" },
      { label: "写真を撮る" },
      { label: "空を見る" },
      { label: "閉じる" }
    ],
    visualType: "return_now",
    noiseLevel: 0
  },
  {
    id: "YOUR_WORDS",
    title: "あなたの言葉",
    body: [],
    choices: [{ label: "大切な人に言葉を残す" }, { label: "もう一度体験する", value: "restart" }],
    visualType: "your_words",
    noiseLevel: 0
  }
];
