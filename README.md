# 余白

「死を体験するアプリ」ではなく、「生きる感覚を取り戻す旅」として設計した、スマホファーストの感情没入型ナラティブRPG MVPです。

ゲームボーイ風ピクセルUIの中に、現代のスマホ通知、SNS、LINE風メッセージ、カメラロール、未送信の下書きを組み込んでいます。

## 技術構成

- Next.js
- TypeScript
- Tailwind CSS
- フロントのみ
- localStorage に選択内容と未送信テキストを保存

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## ディレクトリ構成

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  ChoiceList.tsx
  PhoneFrame.tsx
  PixelVisual.tsx
  SpecialScreens.tsx
data/
  scenes.ts
lib/
  audio.ts
  storage.ts
  time.ts
types/
  game.ts
public/
  images/scenes/
  audio/
```

## 素材差し替え

ピクセル画像は現状 CSS プレースホルダーです。後から以下に画像を置いて `PixelVisual.tsx` 側で差し替えられます。

- `public/images/scenes/street_crossing.*`
- `public/images/scenes/hospital_ceiling.*`
- `public/images/scenes/doctor_view.*`
- `public/images/scenes/hospital_night.*`
- `public/images/scenes/camera_roll.*`

音声は `lib/audio.ts` に管理構造だけ用意しています。実ファイルは後から `public/audio/` に追加してください。
