const foods = [
  {
    id: 'mixian', name: '过桥米线', location: '云南 · 昆明 / 蒙自', emoji: '🍜', x: 41, y: 42,
    intro: '米线界的组装游戏：热汤、米线、肉片、小料逐个登场。把它们送进碗里，云南味道就开始冒泡。',
    tags: ['鲜', '热汤', '仪式感', '可组装'],
    traditional: ['先准备滚烫高汤，让汤面形成保温油层。', '加入肉片、蔬菜、鹌鹑蛋等配料。', '最后放入米线，趁热搅开。', '配上小碟调料，边吃边解锁风味。'],
    creative: '做成“过桥米线杯”：把米线、小料、汤包分层装进便携杯，吃前一冲，午餐也能有开盲盒的快乐。'
  },
  {
    id: 'qiguoji', name: '汽锅鸡', location: '云南 · 建水', emoji: '🍲', x: 52, y: 56,
    intro: '一只鸡被蒸汽悄悄包围，像在锅里泡温泉。打开锅盖时，汤香会先跑出来打招呼。',
    tags: ['清鲜', '蒸汽', '鸡汤', '慢烹'],
    traditional: ['鸡肉切块，加入姜片、盐和少量香料。', '放入带汽嘴的汽锅中。', '用蒸汽慢慢焖熟，汤汁来自食材本身。', '出锅后汤清味浓，适合慢慢喝。'],
    creative: '做成“迷你汽锅鸡汤盅”：加入菌菇和草本香料，小份上桌，像一盅能治愈赶作业灵魂的热汤。'
  },
  {
    id: 'zhutongfan', name: '竹筒饭', location: '云南 · 西双版纳', emoji: '🎋', x: 74, y: 80,
    intro: '米饭躲进竹筒里偷偷变香，打开时像拆一份森林快递。里面不只有米，还有一口竹子的清新。',
    tags: ['竹香', '糯', '热带', '便携'],
    traditional: ['糯米提前浸泡。', '加入豆类、肉丁或香料。', '装入竹筒，用火烤熟或蒸熟。', '剖开竹筒，米饭带着淡淡竹香。'],
    creative: '做成“竹筒饭饭团”：把竹香糯米捏成小饭团，外面包芭蕉叶或海苔，适合放进野餐盒。'
  },
  {
    id: 'fish', name: '傣味香烤鱼', location: '云南 · 西双版纳', emoji: '🐟', x: 64, y: 73,
    intro: '香茅、辣椒和香菜一起钻进鱼肉，火一烤，鱼就变成热带雨林里的香气广播站。',
    tags: ['香茅', '微辣', '焦香', '清爽'],
    traditional: ['鱼洗净后划刀。', '用香茅、小米辣、蒜、香菜等调味。', '把香料塞入鱼腹或涂在鱼身。', '用炭火慢烤到表皮微焦。'],
    creative: '做成“香茅烤鱼卷”：把鱼肉、香草和酸辣蘸水卷进薄饼里，传统味道一秒变街头小吃。'
  },
  {
    id: 'mushroom', name: '炒野生菌', location: '云南 · 楚雄 / 昆明周边', emoji: '🍄', x: 33, y: 52,
    intro: '山林里的菌子下锅开会，蒜和辣椒负责把气氛炒热。菌香一出场，筷子很难保持冷静。',
    tags: ['菌香', '山野', '快炒', '鲜'],
    traditional: ['野生菌清洗切片。', '热锅下油，加入蒜片和辣椒。', '放入菌子充分炒熟。', '用盐和葱段调味，保留菌子本味。'],
    creative: '做成“野生菌意面”：用菌香做主角，搭配橄榄油和黑胡椒，让云南山林和西式餐盘握个手。'
  },
  {
    id: 'migao', name: '米糕', location: '云南 · 大理 / 昆明', emoji: '🍚', x: 25, y: 45,
    intro: '看起来乖乖方方，其实是软糯小陷阱。轻轻咬一口，米香会慢慢黏住你的快乐按钮。',
    tags: ['软糯', '米香', '点心', '温和'],
    traditional: ['大米浸泡后磨浆或蒸制。', '加入少量糖、坚果或当地配料。', '蒸熟后切成小块。', '趁热吃最软，放凉后更有嚼劲。'],
    creative: '做成“米糕小方杯”：一层米糕、一层鲜花酱或酸奶，像云南味道的温柔小甜品。'
  },
  {
    id: 'ham', name: '宣威火腿', location: '云南 · 宣威', emoji: '🥓', x: 68, y: 34,
    intro: '薄薄一片就能把整桌菜叫醒。它不大声说话，但咸香会默默占领味蕾高地。',
    tags: ['咸香', '醇厚', '腌制', '提味'],
    traditional: ['选用猪后腿，经过修割、腌制和风干。', '切片蒸食，或与青椒、菌菇同炒。', '也可少量入汤，作为“风味放大器”。'],
    creative: '做成“火腿花卷夹”：把薄片火腿夹进小花卷，加一点酸甜酱，传统咸香变成迷你早餐堡。'
  },
  {
    id: 'rushan', name: '乳扇', location: '云南 · 大理', emoji: '🧀', x: 23, y: 40,
    intro: '牛奶被云南人折成了可以烤、可以炸、可以卷玫瑰酱的小扇子。奶香一展开，快乐就有了褶皱。',
    tags: ['奶香', '大理', '可烤', '甜咸皆可'],
    traditional: ['用鲜牛奶加酸浆凝固。', '拉伸成薄片，晾成扇形。', '吃时可烤、炸，或卷白糖和玫瑰酱。'],
    creative: '做成“乳扇脆片”：切成小片烤脆，搭配鲜花蜂蜜酱，像云南版奶香薯片。'
  },
  {
    id: 'yak', name: '牦牛肉', location: '云南 · 香格里拉', emoji: '🥩', x: 31, y: 21,
    intro: '来自高原的硬核风味选手，嚼劲在线，香气很稳，像把一小段雪山旅程放进嘴里。',
    tags: ['高原', '肉香', '耐嚼', '咸鲜'],
    traditional: ['牦牛肉切条或切片。', '用盐、花椒和香料腌制。', '风干、炖煮或炒食，保留高原肉香。'],
    creative: '做成“牦牛肉能量卷”：搭配青稞饼、蔬菜和酸辣酱，适合作为旅行路上的高原能量补给。'
  },
  {
    id: 'puer', name: '茶香鸡', location: '云南 · 普洱', emoji: '🍃', x: 58, y: 66,
    intro: '茶叶不只负责泡水，它也会跑进锅里当香料。鸡肉带一点茶香，清爽得像山风路过厨房。',
    tags: ['茶香', '清爽', '普洱', '草本'],
    traditional: ['鸡肉用盐和姜片腌制。', '加入普洱茶汤或茶叶一起焖煮。', '让茶香渗进肉里，收汁后出锅。'],
    creative: '做成“茶香鸡饭盒”：茶香鸡丝搭配米饭和凉拌蔬菜，适合数字地图里的便携新菜谱。'
  }
];

const pinsLayer = document.getElementById('pinsLayer');
const modal = document.getElementById('foodModal');
const closeModal = document.getElementById('closeModal');
const collectBtn = document.getElementById('collectBtn');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const collectionGrid = document.getElementById('collectionGrid');
let currentFood = null;
let collected = JSON.parse(localStorage.getItem('yunnan-collected-v2') || '[]');

function createPins(){
  pinsLayer.innerHTML = foods.map((food, index) => `
    <button class="food-pin ${collected.includes(food.id) ? '' : 'locked'}" style="left:${food.x}%;top:${food.y}%;animation-delay:${index * .18}s" data-id="${food.id}">
      <span>${food.emoji}</span>${food.name}
    </button>
  `).join('');
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
  collectBtn.textContent = collected.includes(currentFood.id) ? '已经贴进菜单 ✓' : '贴进我的菜单';
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
    localStorage.setItem('yunnan-collected-v2', JSON.stringify(collected));
  }
  collectBtn.textContent = '已经贴进菜单 ✓';
  renderCollection();
  createPins();
}

function renderCollection(){
  const count = collected.length;
  progressBar.style.width = `${(count / foods.length) * 100}%`;
  progressText.textContent = `已收集 ${count} / ${foods.length}`;
  collectionGrid.innerHTML = foods.map(food => {
    const isCollected = collected.includes(food.id);
    return `
      <article class="collection-card ${isCollected ? '' : 'locked'}">
        ${isCollected ? '<div class="stamp">FOUND</div>' : ''}
        <div class="emoji">${isCollected ? food.emoji : '？'}</div>
        <h3>${isCollected ? food.name : '未探索美食'}</h3>
        <p>${isCollected ? food.location : '去地图上找找它的香气线索。'}</p>
      </article>
    `;
  }).join('');
}

closeModal.addEventListener('click', closeFood);
modal.addEventListener('click', e => { if(e.target === modal) closeFood(); });
collectBtn.addEventListener('click', collectCurrent);
document.getElementById('randomBtn').addEventListener('click', () => {
  const food = foods[Math.floor(Math.random() * foods.length)];
  openFood(food.id);
});

createPins();
renderCollection();
