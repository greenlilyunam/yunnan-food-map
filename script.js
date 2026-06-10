const foods = [
  {
    id: 'mixian', name: '过桥米线', location: '云南 · 昆明 / 蒙自', emoji: '🍜', x: 50, y: 43,
    intro: '米线界的组装游戏：热汤、米线、肉片、小料逐个登场。把它们送进碗里，云南味道就开始冒泡。',
    tags: ['鲜', '热汤', '仪式感', '可组装'],
    traditional: ['先准备滚烫高汤，让汤面形成保温油层。', '加入肉片、蔬菜、鹌鹑蛋等配料。', '最后放入米线，趁热搅开。', '配上小碟调料，边吃边解锁风味。'],
    creative: '做成“过桥米线杯”：把米线、小料、汤包分层装进便携杯，吃前一冲，午餐也能有开盲盒的快乐。',
    best: '适合旅程第一站，用热汤打开味觉地图。',
    tip: '汤很烫，先放肉片再放米线，口感更稳。',
    souvenir: '米线小料贴纸、汤碗印章、车票式菜单。',
    pairing: '搭配酸腌菜、薄荷、小碟辣椒油。',
    prompt: '这一碗米线最像你旅途中的哪一个瞬间？'
  },
  {
    id: 'qiguoji', name: '汽锅鸡', location: '云南 · 建水', emoji: '🍲', x: 53, y: 58,
    intro: '一只鸡被蒸汽悄悄包围，像在锅里泡温泉。打开锅盖时，汤香会先跑出来打招呼。',
    tags: ['清鲜', '蒸汽', '鸡汤', '慢烹'],
    traditional: ['鸡肉切块，加入姜片、盐和少量香料。', '放入带汽嘴的汽锅中。', '用蒸汽慢慢焖熟，汤汁来自食材本身。', '出锅后汤清味浓，适合慢慢喝。'],
    creative: '做成“迷你汽锅鸡汤盅”：加入菌菇和草本香料，小份上桌，像一盅能治愈赶作业灵魂的热汤。',
    best: '适合雨天或慢旅行，坐下来喝一盅热汤。',
    tip: '汤味清，不要被浓油重辣抢走风味。',
    souvenir: '汽锅轮廓贴纸、蒸汽线条插画。',
    pairing: '搭配米饭、青菜和一点野生菌。',
    prompt: '这一口汤给你带来的第一种情绪是什么？'
  },
  {
    id: 'zhutongfan', name: '竹筒饭', location: '云南 · 西双版纳', emoji: '🎋', x: 58, y: 82,
    intro: '米饭躲进竹筒里偷偷变香，打开时像拆一份森林快递。里面不只有米，还有一口竹子的清新。',
    tags: ['竹香', '糯', '热带', '便携'],
    traditional: ['糯米提前浸泡。', '加入豆类、肉丁或香料。', '装入竹筒，用火烤熟或蒸熟。', '剖开竹筒，米饭带着淡淡竹香。'],
    creative: '做成“竹筒饭饭团”：把竹香糯米捏成小饭团，外面包芭蕉叶或海苔，适合放进野餐盒。',
    best: '适合野餐、雨林路线和手册背面贴纸互动。',
    tip: '剖开竹筒的动作很有仪式感，可以拍成短视频。',
    souvenir: '竹节纹样、芭蕉叶包裹贴纸、竹香标签。',
    pairing: '搭配傣味烤鱼、酸辣蘸水和清爽水果。',
    prompt: '竹香让你想到森林里的哪一种声音？'
  },
  {
    id: 'fish', name: '傣味香烤鱼', location: '云南 · 西双版纳', emoji: '🐟', x: 56, y: 76,
    intro: '香茅、辣椒和香菜一起钻进鱼肉，火一烤，鱼就变成热带雨林里的香气广播站。',
    tags: ['香茅', '微辣', '焦香', '清爽'],
    traditional: ['鱼洗净后划刀。', '用香茅、小米辣、蒜、香菜等调味。', '把香料塞入鱼腹或涂在鱼身。', '用炭火慢烤到表皮微焦。'],
    creative: '做成“香茅烤鱼卷”：把鱼肉、香草和酸辣蘸水卷进薄饼里，传统味道一秒变街头小吃。',
    best: '适合夜市、户外烧烤和多人分享。',
    tip: '香茅和柠檬能让鱼肉更清爽，别忘了蘸水。',
    souvenir: '香茅束贴纸、烤鱼纹理卡、火炭小图标。',
    pairing: '搭配竹筒饭、凉拌木瓜丝和冰饮。',
    prompt: '你会把这条烤鱼贴在手册的哪一个角落？'
  },
  {
    id: 'mushroom', name: '炒野生菌', location: '云南 · 楚雄 / 昆明周边', emoji: '🍄', x: 39, y: 51,
    intro: '山林里的菌子下锅开会，蒜和辣椒负责把气氛炒热。菌香一出场，筷子很难保持冷静。',
    tags: ['菌香', '山野', '快炒', '鲜'],
    traditional: ['野生菌清洗切片。', '热锅下油，加入蒜片和辣椒。', '放入菌子充分炒熟。', '用盐和葱段调味，保留菌子本味。'],
    creative: '做成“野生菌意面”：用菌香做主角，搭配橄榄油和黑胡椒，让云南山林和西式餐盘握个手。',
    best: '适合夏季菌子季，也适合做风味科普卡。',
    tip: '野生菌必须充分炒熟，旅行手册里可以加安全提醒。',
    souvenir: '菌菇图鉴贴纸、山林采集笔记。',
    pairing: '搭配白米饭、青椒和清淡汤品。',
    prompt: '这种山野味道更像雨后、泥土还是木头？'
  },
  {
    id: 'migao', name: '米糕', location: '云南 · 大理 / 昆明', emoji: '🍚', x: 30, y: 46,
    intro: '看起来乖乖方方，其实是软糯小陷阱。轻轻咬一口，米香会慢慢黏住你的快乐按钮。',
    tags: ['软糯', '米香', '点心', '温和'],
    traditional: ['大米浸泡后磨浆或蒸制。', '加入少量糖、坚果或当地配料。', '蒸熟后切成小块。', '趁热吃最软，放凉后更有嚼劲。'],
    creative: '做成“米糕小方杯”：一层米糕、一层鲜花酱或酸奶，像云南味道的温柔小甜品。',
    best: '适合下午茶、手册甜品页和纪念票根。',
    tip: '米糕口味柔和，适合和鲜花酱一起展示。',
    souvenir: '米糕方块贴纸、米粒纹理背景。',
    pairing: '搭配玫瑰酱、酸奶或普洱茶。',
    prompt: '这一口软糯适合写给谁？'
  },
  {
    id: 'ham', name: '宣威火腿', location: '云南 · 宣威', emoji: '🥓', x: 66, y: 33,
    intro: '薄薄一片就能把整桌菜叫醒。它不大声说话，但咸香会默默占领味蕾高地。',
    tags: ['咸香', '醇厚', '腌制', '提味'],
    traditional: ['选用猪后腿，经过修割、腌制和风干。', '切片蒸食，或与青椒、菌菇同炒。', '也可少量入汤，作为“风味放大器”。'],
    creative: '做成“火腿花卷夹”：把薄片火腿夹进小花卷，加一点酸甜酱，传统咸香变成迷你早餐堡。',
    best: '适合做风味补充说明，解释腌制与地方气候。',
    tip: '咸度较明显，少量入菜更能提味。',
    souvenir: '火腿切片贴纸、风干纹理标签。',
    pairing: '搭配菌菇、青椒、米饭或小花卷。',
    prompt: '你觉得它是主角，还是悄悄点亮整桌菜的配角？'
  },
  {
    id: 'rushan', name: '乳扇', location: '云南 · 大理', emoji: '🧀', x: 30, y: 42,
    intro: '牛奶被云南人折成了可以烤、可以炸、可以卷玫瑰酱的小扇子。奶香一展开，快乐就有了褶皱。',
    tags: ['奶香', '大理', '可烤', '甜咸皆可'],
    traditional: ['用鲜牛奶加酸浆凝固。', '拉伸成薄片，晾成扇形。', '吃时可烤、炸，或卷白糖和玫瑰酱。'],
    creative: '做成“乳扇脆片”：切成小片烤脆，搭配鲜花蜂蜜酱，像云南版奶香薯片。',
    best: '适合做视觉造型，扇形很容易转成贴纸。',
    tip: '烤乳扇加玫瑰酱很有记忆点。',
    souvenir: '乳扇折痕贴纸、玫瑰酱小罐图标。',
    pairing: '搭配玫瑰酱、蜂蜜、咖啡或茶。',
    prompt: '奶香展开时，你想给这张贴纸配什么颜色？'
  },
  {
    id: 'yak', name: '牦牛肉', location: '云南 · 香格里拉', emoji: '🥩', x: 35, y: 24,
    intro: '来自高原的硬核风味选手，嚼劲在线，香气很稳，像把一小段雪山旅程放进嘴里。',
    tags: ['高原', '肉香', '耐嚼', '咸鲜'],
    traditional: ['牦牛肉切条或切片。', '用盐、花椒和香料腌制。', '风干、炖煮或炒食，保留高原肉香。'],
    creative: '做成“牦牛肉能量卷”：搭配青稞饼、蔬菜和酸辣酱，适合作为旅行路上的高原能量补给。',
    best: '适合高原路线、旅行补给和明信片文案。',
    tip: '风干类口感更有嚼劲，适合少量慢慢吃。',
    souvenir: '雪山标签、青稞饼图标、能量卷贴纸。',
    pairing: '搭配青稞饼、酸辣酱和热茶。',
    prompt: '这份高原味道让你想到哪一种旅途温度？'
  },
  {
    id: 'puer', name: '茶香鸡', location: '云南 · 普洱', emoji: '🍃', x: 55, y: 68,
    intro: '茶叶不只负责泡水，它也会跑进锅里当香料。鸡肉带一点茶香，清爽得像山风路过厨房。',
    tags: ['茶香', '清爽', '普洱', '草本'],
    traditional: ['鸡肉用盐和姜片腌制。', '加入普洱茶汤或茶叶一起焖煮。', '让茶香渗进肉里，收汁后出锅。'],
    creative: '做成“茶香鸡饭盒”：茶香鸡丝搭配米饭和凉拌蔬菜，适合数字地图里的便携新菜谱。',
    best: '适合茶山路线，连接饮食和地方物产。',
    tip: '茶香要轻，不要让苦涩盖过鸡肉鲜味。',
    souvenir: '茶叶拓印、茶山线条、小饭盒贴纸。',
    pairing: '搭配白米饭、凉拌菜和温热普洱茶。',
    prompt: '这道菜的茶香更像清晨还是傍晚？'
  }
];



const pinsLayer = document.getElementById('pinsLayer');
const modal = document.getElementById('foodModal');
const closeModal = document.getElementById('closeModal');
const collectBtn = document.getElementById('collectBtn');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const collectionGrid = document.getElementById('collectionGrid');
const diaryList = document.getElementById('diaryList');
const toast = document.getElementById('toast');

let currentFood = null;
let currentRating = 5;
let collected = readStorage('yunnan-collected-v3', readStorage('yunnan-collected-v2', []));
let diaryEntries = readStorage('yunnan-diary-v1', []);

function readStorage(key, fallback){
  try{
    return JSON.parse(localStorage.getItem(key)) || fallback;
  }catch(error){
    return fallback;
  }
}

function saveStorage(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHTML(value){
  return String(value || '').replace(/[&<>'"]/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;'
  }[char]));
}

function todayISO(){
  return new Date().toISOString().slice(0, 10);
}

function createPins(){
  pinsLayer.innerHTML = foods.map((food, index) => {
    const cleanLocation = food.location.replace('云南 · ', '');
    return `
      <button class="food-pin ${collected.includes(food.id) ? '' : 'locked'}" style="left:${food.x}%;top:${food.y}%;animation-delay:${index * .18}s" data-id="${food.id}" aria-label="${food.name}，${food.location}" title="${food.name}">
        <span class="pin-emoji">${food.emoji}</span>
        <span class="pin-label"><b>${food.name}</b><small>${cleanLocation}</small></span>
      </button>
    `;
  }).join('');
  document.querySelectorAll('.food-pin').forEach(btn => {
    btn.addEventListener('click', () => openFood(btn.dataset.id));
  });
}

function openFood(id){
  currentFood = foods.find(f => f.id === id);
  if(!currentFood) return;
  document.getElementById('modalEmoji').textContent = currentFood.emoji;
  document.getElementById('modalLocation').textContent = currentFood.location;
  document.getElementById('modalTitle').textContent = currentFood.name;
  document.getElementById('modalIntro').textContent = currentFood.intro;
  document.getElementById('flavorTags').innerHTML = currentFood.tags.map(t => `<span>${t}</span>`).join('');
  document.getElementById('traditionalSteps').innerHTML = currentFood.traditional.map(step => `<li>${step}</li>`).join('');
  document.getElementById('creativeRecipe').textContent = currentFood.creative;
  document.getElementById('modalBest').textContent = currentFood.best;
  document.getElementById('modalTip').textContent = currentFood.tip;
  document.getElementById('modalSouvenir').textContent = currentFood.souvenir;
  document.getElementById('modalPairing').textContent = currentFood.pairing;
  document.getElementById('memoryPrompt').textContent = currentFood.prompt;
  collectBtn.textContent = collected.includes(currentFood.id) ? '已经贴进菜单 ✓' : '贴进我的菜单';
  document.getElementById('visitDate').value = todayISO();
  document.getElementById('companionInput').value = '';
  document.getElementById('noteInput').value = '';
  currentRating = 5;
  updateStars();
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}

function closeFood(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}

function collectCurrent(){
  if(!currentFood) return;
  if(!collected.includes(currentFood.id)){
    collected.push(currentFood.id);
    saveStorage('yunnan-collected-v3', collected);
    showToast('已贴进我的菜单');
  }
  collectBtn.textContent = '已经贴进菜单 ✓';
  renderAll();
}

function renderCollection(){
  const count = collected.length;
  progressBar.style.width = `${(count / foods.length) * 100}%`;
  progressText.textContent = `已收集 ${count} / ${foods.length}`;
  collectionGrid.innerHTML = foods.map(food => {
    const isCollected = collected.includes(food.id);
    return `
      <article class="collection-card ${isCollected ? '' : 'locked'}" data-id="${food.id}">
        ${isCollected ? '<div class="stamp">FOUND</div>' : ''}
        <div class="emoji">${isCollected ? food.emoji : '？'}</div>
        <h3>${isCollected ? food.name : '未探索美食'}</h3>
        <p>${isCollected ? food.location : '去地图上找找它的香气线索。'}</p>
      </article>
    `;
  }).join('');
  document.querySelectorAll('.collection-card').forEach(card => {
    card.addEventListener('click', () => openFood(card.dataset.id));
  });
}


function updateStars(){
  document.querySelectorAll('#ratingStars button').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.value) <= currentRating);
  });
}

function saveDiaryEntry(){
  if(!currentFood) return;
  const note = document.getElementById('noteInput').value.trim();
  const companion = document.getElementById('companionInput').value.trim() || '自己';
  const date = document.getElementById('visitDate').value || todayISO();
  const weather = document.getElementById('weatherSelect').value;
  const entry = {
    id: Date.now().toString(),
    foodId: currentFood.id,
    foodName: currentFood.name,
    emoji: currentFood.emoji,
    location: currentFood.location,
    date,
    companion,
    weather,
    rating: currentRating,
    note: note || currentFood.prompt
  };
  diaryEntries.unshift(entry);
  saveStorage('yunnan-diary-v1', diaryEntries);
  collectCurrent();
  renderDiary();
  showToast('已保存到味觉日记');
}

function renderDiary(){
  if(!diaryEntries.length){
    diaryList.innerHTML = '<div class="empty-state">还没有旅行记录。点开任意一道菜，写下日期、同行人和一句话记忆，网页就会变成你的数字纪念册。</div>';
    return;
  }
  diaryList.innerHTML = diaryEntries.map(entry => `
    <article class="diary-entry">
      <button class="delete-entry" data-id="${entry.id}" aria-label="删除记录">×</button>
      <h4>${entry.emoji} ${escapeHTML(entry.foodName)}</h4>
      <div class="diary-meta">
        <span>${escapeHTML(entry.date)}</span>
        <span>${escapeHTML(entry.weather)}</span>
        <span>同行：${escapeHTML(entry.companion)}</span>
        <span>${'★'.repeat(entry.rating)}${'☆'.repeat(5 - entry.rating)}</span>
      </div>
      <p>${escapeHTML(entry.note)}</p>
      <p><b>地点：</b>${escapeHTML(entry.location)}</p>
    </article>
  `).join('');
  document.querySelectorAll('.delete-entry').forEach(btn => {
    btn.addEventListener('click', event => {
      event.stopPropagation();
      diaryEntries = diaryEntries.filter(entry => entry.id !== btn.dataset.id);
      saveStorage('yunnan-diary-v1', diaryEntries);
      renderDiary();
      showToast('已删除这条记录');
    });
  });
}

function populatePostcardSelect(){
  const select = document.getElementById('postcardFood');
  select.innerHTML = foods.map(food => `<option value="${food.id}">${food.emoji} ${food.name}</option>`).join('');
}

function makePostcard(){
  const food = foods.find(item => item.id === document.getElementById('postcardFood').value) || foods[0];
  const mood = document.getElementById('postcardMood').value;
  const name = document.getElementById('postcardName').value.trim() || '一位偷溜进厨房的旅人';
  const lines = [
    `来自${food.location}的一张小明信片：`,
    `今天我以“${mood}”的速度遇见了${food.name}。${food.intro}`,
    `我想带走的纪念物是：${food.souvenir}`,
    `署名：${name}`
  ];
  document.getElementById('postcardOutput').textContent = lines.join('\n');
}

function copyPostcard(){
  const text = document.getElementById('postcardOutput').textContent.trim();
  if(!text){
    showToast('先生成一张明信片');
    return;
  }
  if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(() => showToast('明信片文案已复制'));
  }else{
    showToast('可以手动选中文案复制');
  }
}


function showToast(message){
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 1800);
}

function renderAll(){
  createPins();
  renderCollection();
}

closeModal.addEventListener('click', closeFood);
modal.addEventListener('click', e => { if(e.target === modal) closeFood(); });
collectBtn.addEventListener('click', collectCurrent);
document.getElementById('randomBtn').addEventListener('click', () => {
  const food = foods[Math.floor(Math.random() * foods.length)];
  openFood(food.id);
});
document.querySelectorAll('#ratingStars button').forEach(btn => {
  btn.addEventListener('click', () => {
    currentRating = Number(btn.dataset.value);
    updateStars();
  });
});
document.getElementById('saveNoteBtn').addEventListener('click', saveDiaryEntry);
document.getElementById('clearDiaryBtn').addEventListener('click', () => {
  diaryEntries = [];
  saveStorage('yunnan-diary-v1', diaryEntries);
  renderDiary();
  showToast('日记已清空');
});
document.getElementById('makePostcardBtn').addEventListener('click', makePostcard);
document.getElementById('copyPostcardBtn').addEventListener('click', copyPostcard);


populatePostcardSelect();
renderDiary();
renderAll();
makePostcard();
