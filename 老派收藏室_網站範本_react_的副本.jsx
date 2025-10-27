import React, { useState } from "react";

// 老派收藏室 - 單檔 React 網站範本（已擴充：月主題詳情、服務介紹、訂購流程、訂閱方案、About Us）
// 使用 Tailwind CSS 類別 (假設專案已經安裝 Tailwind)

export default function App() {
  const [route, setRoute] = useState("home");
  const [theme, setTheme] = useState({
    title: "Millennial Flashback：Y2K 浪漫重啟",
    era: "Y2K",
    code: "Y2Kg6294",
    slogan: "復古，不只是懷舊，是一種浪漫的生活態度。",
    desc:
      "Y2K 時代（1990 年代末 - 2000 年初）是科技狂熱與末日焦慮並存的矛盾年代。本月主題透過視覺、音樂與情境心理測驗，讓你在數位泡沫中找到屬於自己的時代角色與心靈禮物。",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100 to-rose-50 text-neutral-900">
      <Header onNavigate={setRoute} />

      <main className="max-w-5xl mx-auto p-6">
        {route === "home" && <Home theme={theme} onNavigate={setRoute} />}
        {route === "about" && <About />}
        {route === "theme" && <ThemePage theme={theme} />}
        {route === "service" && <ServiceIntro />}
        {route === "ordering" && <OrderingFlow />}
        {route === "subscribe" && <Subscription />}
        {route === "quiz" && <Quiz onComplete={() => setRoute("result")} />}
        {route === "shop" && <Shop />}
        {route === "contact" && <Contact />}
        {route === "result" && <QuizResult onBack={() => setRoute("home")} />}
      </main>

      <Footer onNavigate={setRoute} />
    </div>
  );
}

function Header({ onNavigate }) {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-lg bg-neutral-900 flex items-center justify-center text-amber-100 font-bold">老派</div>
        <div>
          <h1 className="text-2xl font-extrabold">老派收藏室</h1>
          <p className="text-xs text-neutral-600">午夜列車 × 時代盲盒 × 心理測驗</p>
        </div>
      </div>

      <nav className="space-x-3">
        <button className="nav-btn" onClick={() => onNavigate("home")}>首頁</button>
        <button className="nav-btn" onClick={() => onNavigate("theme")}>本月主題</button>
        <button className="nav-btn" onClick={() => onNavigate("service")}>服務介紹</button>
        <button className="nav-btn" onClick={() => onNavigate("ordering")}>訂購流程</button>
        <button className="nav-btn" onClick={() => onNavigate("subscribe")}>訂閱方案</button>
        <button className="nav-btn" onClick={() => onNavigate("quiz")}>心理測驗</button>
        <button className="nav-btn" onClick={() => onNavigate("shop")}>盲盒商店</button>
        <button className="nav-btn" onClick={() => onNavigate("about")}>About</button>
        <button className="nav-btn" onClick={() => onNavigate("contact")}>聯絡</button>
      </nav>

      <style jsx>{`
        .nav-btn{ background:transparent; border:none; padding:8px 10px; font-weight:600; color:rgb(30,30,30); }
        .nav-btn:hover{ color:#b45309; cursor:pointer }
      `}</style>
    </header>
  );
}

function Home({ theme, onNavigate }) {
  return (
    <section className="bg-white/70 rounded-2xl p-6 shadow-md">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-3xl font-bold">午夜零點，列車啟程 — {theme.title}</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">{theme.desc}</p>

          <div className="mt-4 text-sm text-neutral-600">主題代號：{theme.code} · 廣告標語：{theme.slogan}</div>

          <div className="mt-6 flex gap-3">
            <button className="rounded-md px-4 py-2 bg-amber-400 font-semibold" onClick={() => onNavigate("quiz")}>立刻體驗測驗</button>
            <button className="rounded-md px-4 py-2 border border-amber-300" onClick={() => onNavigate("theme")}>查看本月主題</button>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden bg-gradient-to-br from-sky-50 to-fuchsia-50 p-6">
          <div className="h-56 flex items-center justify-center text-neutral-700">[視覺區：Y2K 主題預覽影像]</div>
          <p className="mt-4 text-sm text-neutral-600">透明材質、金屬光澤、像素符號，呈現 Y2K 的未來與懷舊交錯。</p>
        </div>
      </div>

      <hr className="my-6" />

      <div className="grid md:grid-cols-3 gap-4">
        <Card title="每月年代主題" text="一站一時代，每月更新視覺與情境測驗，擁抱不同世代的情緒與風格。"/>
        <Card title="時代角色" text="參與情境測驗，獲得時代角色診斷，並獲得個人化建議與盲盒推薦。"/>
        <Card title="盲盒禮物" text="根據角色挑選限定盲盒，內含時代小物與心靈鼓勵小卡。"/>
      </div>
    </section>
  );
}

function Card({ title, text }){
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-neutral-600 mt-2">{text}</p>
    </div>
  )
}

function ThemePage({ theme }){
  return (
    <section className="bg-white/70 rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-bold">本月主題 — {theme.title}</h2>
      <p className="mt-4 text-neutral-700 leading-relaxed">{theme.desc}</p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-neutral-50 rounded-lg p-4">
          <h4 className="font-semibold">本月主題簡介</h4>
          <p className="text-sm text-neutral-600 mt-2">本月我們停靠在 Y2K 的世界——一個在網路與手機開始普及、同時對未來既期待又焦慮的年代。透過設計化的情境測驗與視覺小物，我們邀請你重啟那段年輕又叛逆的浪漫記憶，並在角色中看見自己的可能性。</p>

          <h4 className="font-semibold mt-4">為什麼選 Y2K？</h4>
          <ul className="list-disc pl-5 mt-2 text-sm text-neutral-600">
            <li>Y2K 代表數位時代的起點，充滿矛盾的情緒與極具辨識度的美學。</li>
            <li>在快速變動的現在，Y2K 能讓人回到一個既興奮又不確定的青春時刻，喚起情緒共鳴。</li>
            <li>視覺語言上具備強烈符號性，適合做為盲盒與角色化內容的設計基底。</li>
          </ul>
        </div>

        <div className="bg-neutral-50 rounded-lg p-4">
          <h4 className="font-semibold">盲盒名稱與內容</h4>
          <p className="text-sm text-neutral-600 mt-2">每一款盲盒都是一段時代縮影。本月主題的盲盒系列命名為：</p>
          <div className="mt-3">
            <h5 className="font-semibold">『千禧信物系列：Y2Kg6294』</h5>
            <p className="text-sm text-neutral-600 mt-2">每盒包含 4-6 件小物（如透明吊飾、像素貼紙、復古明信片、懷舊手機殼等）與一張個人化的時代卡片，卡片會寫上測驗導出的角色描述與一段鼓勵語。</p>

            <h6 className="font-semibold mt-3">盲盒對應角色（示例）</h6>
            <ol className="list-decimal pl-5 mt-2 text-sm text-neutral-600">
              <li>澀谷辣妹 — 自信且叛逆，喜愛被看見的主角式人物。</li>
              <li>地下樂團少年 — 內斂、敏感，透過音樂表達自己。</li>
              <li>數位詩人 — 網路世代的浪漫書寫者，喜歡細膩情感表達。</li>
              <li>光影收集者（攝影家）— 低保真美學的記錄者，喜歡時間的溫度感。</li>
            </ol>
          </div>
        </div>
      </div>

      <hr className="my-6" />

      <div className="bg-neutral-50 rounded-lg p-4">
        <h4 className="font-semibold">品牌廣告語</h4>
        <p className="text-sm text-neutral-600 mt-2">「復古，不只是懷舊，是一種浪漫的生活態度。」——我們相信在當代的匆忙裡，仍有空間被一個小物或一段故事溫柔驚艷。</p>
      </div>
    </section>
  )
}

function ServiceIntro(){
  return (
    <section className="bg-white/70 rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-bold">服務介紹</h2>
      <p className="mt-3 text-neutral-700">老派收藏室結合心理測驗、時代敘事與實體盲盒，提供一場可被收藏的情緒體驗。以下為我們的核心服務：</p>

      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="bg-neutral-50 rounded-lg p-4">
          <h4 className="font-semibold">情境心理測驗</h4>
          <p className="text-sm text-neutral-600 mt-2">設計化的情境題目（約 5 分鐘），以當代事件與視覺符號包裝，測出你的時代角色與情緒傾向。</p>
        </div>
        <div className="bg-neutral-50 rounded-lg p-4">
          <h4 className="font-semibold">時代盲盒</h4>
          <p className="text-sm text-neutral-600 mt-2">根據測驗結果推薦對應盲盒。每盒皆由策展團隊挑選物件，兼具故事性與收藏價值。</p>
        </div>
        <div className="bg-neutral-50 rounded-lg p-4">
          <h4 className="font-semibold">沉浸式主題</h4>
          <p className="text-sm text-neutral-600 mt-2">每月一個年代主題，視覺、音樂與文案同步上線，帶出完整時代脈絡與體驗感。</p>
        </div>
      </div>

      <div className="mt-6 bg-neutral-50 rounded-lg p-4">
        <h4 className="font-semibold">為誰而設</h4>
        <p className="text-sm text-neutral-600 mt-2">我們的主要客群為熱愛懷舊文化與體驗式消費的年輕族群（大學生、25–35 歲），同時歡迎喜愛收集與心靈療癒的任何成年人。</p>
      </div>
    </section>
  )
}

function OrderingFlow(){
  return (
    <section className="bg-white/70 rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-bold">訂購流程</h2>

      <ol className="list-decimal pl-5 mt-4 text-neutral-700">
        <li><strong>選擇方式：</strong>你可以直接瀏覽盲盒商品頁面下單，或先完成情境心理測驗以取得推薦。</li>
        <li><strong>查看推薦：</strong>測驗結束後，我們會依角色與偏好推薦一款盲盒，你可接受推薦或自行挑選。</li>
        <li><strong>加入購物車並結帳：</strong>支援常見支付方式（信用卡 / Line Pay / ATM 轉帳 - 視營運）。</li>
        <li><strong>寄送與開盒：</strong>貨物出貨後提供宅配物流資訊，收到實體盲盒後可拍照上傳至社群並獲得小禮（限定活動）。</li>
        <li><strong>客服與退換：</strong>商品於收到七日內如有瑕疵，可聯絡客服辦理退換處理。</li>
      </ol>

      <div className="mt-6 bg-neutral-50 rounded-lg p-4">
        <h4 className="font-semibold">線上開盒體驗（加值）</h4>
        <p className="text-sm text-neutral-600 mt-2">你也可以在網站上進行線上開盒儀式：播放本月主題音樂與動畫，呈現盲盒故事與專屬鼓勵卡，提升情緒療癒效果。</p>
      </div>
    </section>
  )
}

function Subscription(){
  return (
    <section className="bg-white/70 rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-bold">訂閱方案</h2>

      <p className="text-neutral-700 mt-3">我們提供靈活的訂閱選項，讓喜歡收藏與驚喜的你能持續收到每月主題盲盒：</p>

      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="bg-neutral-50 rounded-lg p-4">
          <h4 className="font-semibold">單次購買</h4>
          <p className="text-sm text-neutral-600 mt-2">沒有綁約，想買就買，適合想先試水溫的客人。</p>
        </div>
        <div className="bg-neutral-50 rounded-lg p-4">
          <h4 className="font-semibold">月訂閱（3 個月）</h4>
          <p className="text-sm text-neutral-600 mt-2">享 5% 折扣並優先獲得限定小卡設計。合約 3 個月，可隨時終止。</p>
        </div>
        <div className="bg-neutral-50 rounded-lg p-4">
          <h4 className="font-semibold">年訂閱（12 個月）</h4>
          <p className="text-sm text-neutral-600 mt-2">享 10% 折扣、每季加贈限定徽章，並優先預約主題互動活動。</p>
        </div>
      </div>

      <div className="mt-6 bg-neutral-50 rounded-lg p-4">
        <h4 className="font-semibold">訂閱流程與注意事項</h4>
        <ul className="list-disc pl-5 mt-2 text-sm text-neutral-600">
          <li>訂閱可在個人會員中心取消或更改配送地址。</li>
          <li>每月出貨前會以 Email / SMS 發送主題提醒與內容預覽。</li>
          <li>特殊節日盒或聯名款可能不列入折扣方案，詳情請見商品說明。</li>
        </ul>
      </div>
    </section>
  )
}

// ----- 心理測驗（Quiz） -----
const QUIZ_QUESTIONS = [
  // 送禮劇情：10 題 A/B (內容保留原樣)
  { id: 1, text: "乘客們開始騷動，你注意到一位陌生人蜷縮在角落，他的反應會是：", choices: [
    { key: 'A', text: '溫柔一笑：「謝謝你，我其實是在看外面的景色啦」' },
    { key: 'B', text: '輕快回覆：「好啊！有伴就不會那麼害怕了」' },
  ]},
  { id: 2, text: '車廂忽然斷電，陌生人會：', choices: [
    { key: 'A', text: '這樣也不壞，反而能聽見雪掉下來的聲音' },
    { key: 'B', text: '等等，我先看看車長室在哪，別人可能需要幫忙' },
  ]},
  { id: 3, text: '列車長廣播：全車免費！陌生人會前往：', choices: [
    { key: 'A', text: '爵士音樂酒吧' },
    { key: 'B', text: '高級法式餐廳' },
  ]},
  { id: 4, text: '一個舊式傳真機正在印出訊息，陌生人會：', choices: [
    { key: 'A', text: '收集訊息，拼湊背後的故事' },
    { key: 'B', text: '忽視異象，往目標邁進' },
  ]},
  { id: 5, text: '你想選一首歌溫暖全車，陌生人會帶來：', choices: [
    { key: 'A', text: '復古 R&B，讓大家一起哼唱' },
    { key: 'B', text: '未完成的 Demo，帶點實驗性' },
  ]},
  { id: 6, text: '陌生人身上的香水味讓你想起：', choices: [
    { key: 'A', text: '一段遙遠的冬天' },
    { key: 'B', text: '某個熟悉的人，讓人安心' },
  ]},
  { id: 7, text: '協助固定窗戶時，陌生人會：', choices: [
    { key: 'A', text: '主動上前幫忙' },
    { key: 'B', text: '擔任助手，遞工具與補給' },
  ]},
  { id: 8, text: '陌生人遞給你熱水袋，他會說：', choices: [
    { key: 'A', text: '「這是我自己做的，希望你也可以感到溫暖」' },
    { key: 'B', text: '「剛好多帶一個，別感冒了。」並幫你拉緊外套' },
  ]},
  { id: 9, text: '暴風雪停止，陌生人交出一份物品，他會給：', choices: [
    { key: 'A', text: '一張大家圍著燭光的照片' },
    { key: 'B', text: '身上的胸針，做為紀念' },
  ]},
  { id: 10, text: '在分別前最後一刻，他心裡想著：', choices: [
    { key: 'A', text: '「這趟旅程真奇妙，我們或許都在彼此身上找到什麼。」' },
    { key: 'B', text: '「能平安到終點真好，希望下次再遇見時都更好。」' },
  ]},
];

function Quiz({ onComplete }){
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState([]);

  function choose(key){
    setAnswers(prev => [...prev, key]);
    if(idx < QUIZ_QUESTIONS.length - 1){
      setIdx(idx + 1);
    } else {
      const resultKey = analyzeResult([...answers, key]);
      localStorage.setItem('lastRole', resultKey);
      onComplete && onComplete();
    }
  }

  const q = QUIZ_QUESTIONS[idx];

  return (
    <section className="bg-white/80 rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-bold">心理測驗 — 送禮情境</h2>
      <p className="text-sm text-neutral-600 mt-2">請將劇中遇到的「陌生人」想像成你想送禮的對象，根據直覺選擇 A 或 B。</p>

      <div className="mt-6">
        <div className="text-lg font-semibold">第 {idx+1} 題：{q.text}</div>
        <div className="mt-4 grid gap-3">
          {q.choices.map(c => (
            <button key={c.key} onClick={() => choose(c.key)} className="text-left p-3 rounded-md border hover:bg-amber-50">
              <span className="font-semibold mr-2">{c.key}.</span> {c.text}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 text-sm text-neutral-500">進度：{idx+1}/{QUIZ_QUESTIONS.length}</div>
    </section>
  )
}

function analyzeResult(answerArr){
  // 簡單計分策略：A 趨向感性 / 收集 / 溫暖；B 趨向行動 / 外向
  const counts = { A:0, B:0 };
  answerArr.forEach(a => { if(a === 'A') counts.A++; else counts.B++; });
  const role = counts.A >= counts.B ? '數位詩人 / 光影收集者 / 澀谷辣妹（感性 & 收集）' : '地下樂團少年 / 行動派（實踐 & 外向）';
  return role;
}

function QuizResult({ onBack }){
  const role = localStorage.getItem('lastRole') || '數位詩人 / 光影收集者 / 澀谷辣妹（感性 & 收集）';

  return (
    <section className="bg-white/80 rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-bold">測驗結果</h2>
      <p className="mt-3 text-neutral-700">你的時代角色為：</p>
      <div className="mt-4 bg-neutral-50 p-4 rounded-lg">
        <p className="font-semibold">{role}</p>
        <p className="text-sm text-neutral-600 mt-2">根據你的選擇，我們推薦你可以考慮的盲盒：自我閃耀 / 共鳴 / 靜謐心域 / 時光映像。</p>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="px-4 py-2 bg-amber-400 rounded-md" onClick={() => { window.location.href = '#shop'; }}>前往盲盒商店</button>
        <button className="px-4 py-2 border rounded-md" onClick={onBack}>返回首頁</button>
      </div>
    </section>
  )
}

function Shop(){
  const products = [
    { id:1, title:'自我閃耀盲盒', price: 790, desc:'適合喜歡被看見、充滿自信的你。' },
    { id:2, title:'共鳴盲盒', price: 690, desc:'溫暖情感的小物與鼓勵卡。' },
    { id:3, title:'時光映像盲盒', price: 850, desc:'低保真攝影風格的收藏組合。' },
  ];

  return (
    <section id="shop" className="bg-white/80 rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-bold">盲盒商店</h2>
      <p className="text-neutral-600 mt-2">根據測驗結果挑選你的時代盲盒。每盒含 4-6 件時代小物與一張鼓勵卡。</p>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="bg-neutral-50 p-4 rounded-lg">
            <div className="h-40 flex items-center justify-center">[商品圖]</div>
            <h3 className="font-semibold mt-3">{p.title}</h3>
            <p className="text-sm text-neutral-600">{p.desc}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="font-bold">NT$ {p.price}</div>
              <button className="px-3 py-1 bg-amber-400 rounded-md">加入購物車</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact(){
  return (
    <section className="bg-white/80 rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-bold">聯絡我們</h2>
      <p className="text-neutral-600 mt-2">有合作或想了解更多，請填寫以下表單。</p>
      <form className="mt-4 grid gap-3 max-w-lg">
        <input className="p-2 border rounded" placeholder="姓名" />
        <input className="p-2 border rounded" placeholder="Email" />
        <textarea className="p-2 border rounded" placeholder="訊息" rows={4} />
        <button className="px-4 py-2 bg-amber-400 rounded-md">送出</button>
      </form>
    </section>
  )
}

function About(){
  return (
    <section className="bg-white/70 rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-bold">About — 老派收藏室</h2>
      <p className="mt-4 text-neutral-700 leading-relaxed">老派收藏室是一個結合心理測驗與復古文化的線上平台。我們把每月的年代主題包裝成一段可體驗的故事，讓參與者在懷舊中探索自我，並帶回一份具收藏價值的盲盒禮物。</p>

      <h4 className="font-semibold mt-4">我們的承諾</h4>
      <ul className="list-disc pl-5 mt-2 text-neutral-600">
        <li>心理設計：所有測驗題目由心理學與敘事設計師共同設計，重視情緒安全與結果回饋。</li>
        <li>慎選物件：盲盒內容由策展團隊手選，兼顧年代感、質感與情緒連結。</li>
        <li>隱私保護：我們尊重使用者的測驗結果與個資，僅用於提升體驗與商品推薦。</li>
      </ul>

      <h4 className="font-semibold mt-4">語氣與風格</h4>
      <p className="text-sm text-neutral-600 mt-2">我們採取心理學理性與懷舊浪漫的混合語氣：理性設計測驗、情感化敘事文案，使每次體驗既可靠又溫柔。</p>
    </section>
  )
}

function Footer({ onNavigate }){
  return (
    <footer className="mt-8 py-6 text-center text-sm text-neutral-600">
      <div>© 老派收藏室 · 午夜列車計畫</div>
      <div className="mt-2 space-x-3">
        <button className="underline" onClick={() => onNavigate('about')}>關於</button>
        <button className="underline" onClick={() => onNavigate('contact')}>聯絡</button>
      </div>
    </footer>
  )
}
