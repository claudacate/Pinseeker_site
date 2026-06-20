import { site } from "../config";
import type { DeepPartial } from "./index";
import type { SiteContent } from "./en";

/** Traditional Chinese (Taiwan) overrides. Untranslated keys fall back to English.
 * Native-speaker reviewed. */
export const zhTW: DeepPartial<SiteContent> = {
  meta: {
    title: "PinSeeker — iPhone 相機推桿教練",
    description: "PinSeeker 用 iPhone 相機讀取你的推桿動作 — 節奏、球速、距離與方向。免器材，練出與巡迴賽相同的鐘擺節奏。",
  },
  common: {
    downloadSmall: "從 App Store",
    downloadBig: "下載",
    freeNote: `每天免費 ${site.freeDailyPutts} 推 · 免信用卡`,
  },
  hero: {
    eyebrow: "相機推桿教練 · iPhone",
    h1: "像巡迴賽一樣訓練 — 用口袋裡的 <em>iPhone</em>。",
    lead: "PinSeeker 用相機讀取你的推桿：節奏、球速、距離與方向。免器材，只要手機和球墊。",
  },
  trust: {
    points: [
      { title: "從設計就重視隱私", body: "每一推都在你的 iPhone 上分析 — 絕不錄製、絕不上傳。" },
      { title: "離線也能用", body: "不需連線。所有運算都在裝置上，你在哪練都行。" },
      { title: "免註冊", body: "沒有帳號、不必雲端登入。建好個人檔案就能開推。" },
    ],
  },
  video: {
    eyebrow: "實際運作",
    h2: "看 PinSeeker <em>運作</em>。",
    lead: "一分鐘短片 — 設定、推桿，以及回饋的數據。",
    playLabel: "播放影片",
  },

  how: {
    eyebrow: "使用方式",
    h2: "三個步驟。<em>約一分鐘</em>完成設定。",
    steps: [
      { n: "01", title: "把手機立在球墊旁", body: "用腳架把手機立在球墊側邊、約胸口高度，朝球道方向。讓球到目標的線與手機長邊平行。", alt: "PinSeeker 相機俯視推桿球墊、準備推桿的畫面" },
      { n: "02", title: "設定區域，然後推桿", body: "在螢幕上點一下球，追蹤框就會鎖定。按 SET、放上球，看到 READY TO PUTT 就直接推。", alt: "鎖定在球墊上球體的追蹤框" },
      { n: "03", title: "立即得到數據", body: "一秒後動作就顯示在螢幕上 — 節奏、球速、距離與方向，還有該修正什麼的教學。", alt: "顯示節奏比、上桿與下桿時間的結果卡" },
    ],
  },
  features: {
    eyebrow: "量測項目",
    h2: "真正改變推桿的<em>四個數字。</em>",
    lead: "每一推都自動完成 — 不用穿戴裝置，也不用在桿上裝感應器。",
    items: [
      { title: "節奏比", body: "上桿時間除以下桿時間 — 高手每一推都重複的節奏。PinSeeker 以毫秒計時。目標 ≈ 2.0。" },
      { title: "球速", body: "觸球瞬間離開桿面的速度 — 你到底打多大力的真相。" },
      { title: "預測距離", body: "在你設定的果嶺速度下，這一推在真實果嶺會滾多遠，讓練習對應到球場。" },
      { title: "方向與偏差", body: "你的起始線角度，以及在目標距離下球會偏離多少停下 — 左右、以公分計。" },
    ],
  },
  demo: {
    eyebrow: "互動示範",
    h2: "親眼看看。<em>點著瀏覽</em>一段真實流程。",
    lead: "免下載 — 直接在這裡逐步瀏覽真實的 App 畫面。",
  },
  science: {
    eyebrow: "科學依據",
    h2: "練出<em>巡迴賽</em>節奏。",
    lead: "高手不是打更大力 — 而是維持同一個節奏，用上桿長度來調距離。推桿是鐘擺：上桿大約是下桿的兩倍長，每一推都一樣。",
    ratioCap: "2 : 1 推桿",
    ratioBack: "上桿",
    ratioThru: "下桿",
    ratioNote: "PinSeeker 以毫秒為每一推計時，並對照這個比例評分。",
    stats: [
      { value: "80–85%", text: "起始線由觸球瞬間的桿面角度決定 — 不是揮桿路徑。" },
      { value: "≤ 0.03 秒", text: "推桿時間的一致性是巡迴賽級推桿的指標。" },
      { value: "約 40%", text: "一輪約四成是推桿。這是最划算的減桿之處。" },
    ],
    profilesTitle: "巡迴賽節奏類型",
    tableHeaders: ["類型", "上桿", "下桿", "特性"],
    profiles: [
      { name: "快速 / 明快", back: "0.52–0.58 秒", thru: "0.28–0.31 秒", feel: "俐落緊湊 — Snedeker" },
      { name: "標準", back: "0.60–0.68 秒", thru: "0.30–0.34 秒", feel: "經典鐘擺 — Tiger" },
      { name: "緩慢 / 流暢", back: "0.68–0.75 秒", thru: "0.34–0.38 秒", feel: "沉穩從容 — Crenshaw" },
    ],
  },
  coaching: {
    eyebrow: "AI 教學",
    h2: "知道<em>為什麼</em>沒進。",
    lead: "每一推都用白話回饋，而不是一堆數字 — 發生了什麼、代表什麼，以及該怎麼修正。",
    coachingAlt: "說明你為何得到這個結果、代表什麼以及如何改善的推桿分析卡",
    wwh: [
      { term: "為什麼", desc: "結果背後的判讀 — 透露問題的節奏或球速。" },
      { term: "代表什麼", desc: "這個模式在球場上會怎麼出現，用球友的話說。" },
      { term: "如何修正", desc: "下一推可以練的一個具體調整。" },
    ],
    benchEyebrow: "紀錄與數據",
    benchH3: "看見你的<em>進步</em> — 對照巡迴賽基準。",
    benchmarks: [
      { label: "節奏比", you: "2.0", tour: "巡迴賽 2.0" },
      { label: "上桿", you: "0.60 秒", tour: "巡迴賽水準" },
      { label: "下桿", you: "0.30 秒", tour: "巡迴賽水準" },
      { label: "整體推桿", you: "0.90 秒", tour: "巡迴賽水準" },
    ],
    benchNote: "每一推都會儲存並對照真正的巡迴賽基準評分 — 純擊球率、平均節奏與最佳連續紀錄，以每週趨勢呈現。",
  },
  pricing: {
    eyebrow: "價格",
    h2: `免費開始 — <em>每天 ${site.freeDailyPutts} 推。</em>`,
    lead: "免信用卡、沒有陷阱。免費方案就解鎖所有功能。想馬拉松式練習時再升級 Pro。",
    localNote: "於 App Store 以當地貨幣顯示與計價。",
    free: {
      name: "免費",
      unit: "推 / 天",
      list: ["完整功能全開", "AI 教學 — 為什麼·什麼·怎麼做", "節奏訓練與完整數據", "免信用卡"],
    },
    pro: {
      tag: "最常練習",
      name: "Pro",
      perMonth: "/ 月",
      perYear: `或 ${site.pricePerYear} / 年`,
      list: ["無限推桿", "馬拉松式練習", "免費版所有功能", "隨時取消"],
    },
  },
  faq: {
    eyebrow: "常見問題",
    h2: "好問題，<em>直接回答。</em>",
    items: [
      { q: "我需要準備什麼？", a: "一支 iPhone、一塊推桿墊、一支腳架，以及一顆白色高爾夫球。再在放球處貼一個小色塊標記（約 2×2 公分，白色以外皆可），PinSeeker 會以它鎖定追蹤。柔和、間接的光線效果最好。" },
      { q: "為什麼要色塊標記？", a: "球是白的，多數球墊線條也是白的，所以 PinSeeker 以一個能明確辨識的顏色來鎖定追蹤。把球放在標記上即可 — 在純節奏模式下，標記甚至可代替球。" },
      { q: "需要特殊的球墊或推桿嗎？", a: "任何推桿都行 — 若桿頭偏暗或會反光，在頂面貼一條亮色膠帶讓相機看得到。無紋路的球墊最好；約 1 公分以下的細白線可以，但避免粗線。" },
      { q: "我的影片會被錄製或上傳嗎？", a: "不會。畫面只在你的手機上分析以量測推桿，絕不錄製或上傳。沒有任何資料離開你的裝置。" },
      { q: "左手球友可以用嗎？", a: "目前還不行。PinSeeker 現階段僅支援 iPhone，且為右手球友設計。左手支援與其他平台都在規劃中。" },
      { q: "準確度如何？", a: "PinSeeker 以電腦視覺量測每一推的節奏、球速與距離，兩分鐘完成設定、免惱人校正。由於尚未上市，我們不會公布還未驗證的準確度數字 — 等有真實數據後再提供。" },
      { q: "「Stimp」是什麼？", a: "Stimp 是高爾夫衡量果嶺速度的指標。家裡的球墊比真實果嶺慢，所以你告訴 PinSeeker 要模擬的速度（預設 10.0），它就把球速換算成貼近真實的距離預測。" },
      { q: "費用是多少？", a: `永久免費：每天 ${site.freeDailyPutts} 推、所有功能全開、免信用卡。想無限推桿就升級 Pro — 每月 ${site.pricePerMonth} 或每年 ${site.pricePerYear}。隨時取消。` },
    ],
  },
  footer: {
    tagline: "iPhone 專用的相機推桿教練。",
    navHow: "使用方式",
    navFeatures: "功能",
    navPricing: "價格",
    navFaq: "常見問題",
    privacy: "隱私權",
    terms: "使用條款",
    support: "支援",
    rights: "保留一切權利。",
  },
};
