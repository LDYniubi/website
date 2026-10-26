/*
  JingDu 静读 - 一个简单的中文在线小说阅读网站
  BiUH Web Technologies 2026 课程作业
  纯 HTML/CSS/JS，无框架
*/

// 书架数据：每本书独立，包含自己的章节。
// 你可以把这里的内容替换成你自己的小说。
const books = [
  {
    id: 1,
    title: "灯塔守夜人",
    author: "LDY",
    synopsis: "一座悬崖边的老灯塔，一位沉默的守夜人伊莱亚斯，和一个从海上传来的信号。关于孤独、守望与重新出发的短篇小说。",
    coverGradient: "linear-gradient(135deg, #4a6fa5 0%, #2c4a6e 100%)",
    chapters: [
      {
        id: 1,
        title: "抵达",
        subtitle: "第一章",
        paragraphs: [
          "那座灯塔已经在悬崖上站立了一百一十二年，在这期间，从没有人问过伊莱亚斯为什么要留下来。下面的海呈现出旧铁器的颜色，即使在最晴朗的日子里，风也带着盐与雨的气息。伊莱亚斯喜欢这样。一个诚实地宣告自己的地方，不容易让人失望。",
          "他在十月的第一天抵达，只带了一只皮箱和一台只能收到一个台的电池收音机。前任守夜人莫利把日志码得整整齐齐，灯室也擦得一尘不染。厨房的桌上留着一张字迹工整的纸条：光不属于你，你属于光。伊莱亚斯笑了笑，那时他还不太明白这句话的意思。",
          "第一夜风平浪静。日落时他爬上螺旋楼梯，给发条上紧，看着光束扫过漆黑的水面。海上没有船只，但灯依然转动，因为这是它的使命。伊莱亚斯从中感到一种安慰。一台机器，或是一个人，无论是否有人注视，都遵守自己的承诺。",
          "清晨，他发现灯塔后面有一条通向小海湾的小路。那里的岩石锋利而漆黑，潮水退去后留下一缕缕海藻和一只破碎的蟹壳。他走到水边，静静站着。有那么一会儿，大海似乎在审视他，然后一个浪打来，打湿了他的靴子，他笑着退后一步。"
        ]
      },
      {
        id: 2,
        title: "风暴",
        subtitle: "第二章",
        paragraphs: [
          "三周后，风暴来了。气压计像被人从架子上推下去一样直落。伊莱亚斯早早就闩好百叶窗、加满油槽，因为他已经学会尊重这片海岸的脾气。到了黄昏，风强得让塔身发出低鸣。",
          "他在灯室里守了一夜，看着玻璃在风中弯曲，雨水横着飞过。灯没有停过，只是塔身两次剧烈摇晃时，他上去重新校准了机关。午夜时分，在风雨的混乱中，他仿佛看见海上有一道光亮在回应。转瞬即逝，像一根被划亮的火柴，然后消失不见。",
          "伊莱亚斯告诉自己那只是海上的闪电，或者是疲劳造成的错觉。但从那以后，他随时准备好望远镜。当灰紫色的黎明来临时，他望着地平线直到眼睛发酸。那里什么也没有，只有海湾下一条小木船的残骸，被岩石撞得粉碎，像一句没能兑现的承诺。",
          "他小心翼翼地爬下去。船里空空如也，只有一只半湿的皮质挎包还扣着。里面有一面黄铜罗盘、一台镜面碎裂的六分仪，以及一本用他不懂的语言写成的航海日志。最后一页的日期是前一天，在不认识的文字下面，有人画了一座光束稳定的小灯塔。"
        ]
      },
      {
        id: 3,
        title: "信号",
        subtitle: "第三章",
        paragraphs: [
          "风暴过后的一周，伊莱亚斯睡得很少。他把那本日志摊在厨房桌上，一边喝茶一边研究那些图画。图里的灯塔毫无疑问是他这一座，比例丝毫不差，连风向标轻微的歪斜都画了出来。",
          "第八天夜里，他又看见了那道回应的光。这次更清晰：三次短闪，一次长闪，再三次短闪。伊莱亚斯懂得一些海事信号，知道这是在求救。他抓起信号灯回复，但那道光熄灭后再也没有出现。",
          "第二天清晨，他在海湾发现了脚印。脚印比他自己的小，从水边延伸到悬崖脚下，然后凭空消失。他从工具箱里拿出尺子量了量，把尺寸记进自己的日志。细节，他对自己说，是一种诚实。",
          "那天晚上，他准备了自己的信号：三次长闪，意思是我在这里。他把信号送入黑暗，然后等待。一个小时过去，两个小时。就在他准备下楼时，那道光回应了。这次更近了，近得他能看见一艘本不该出现在浅水区的帆船的淡淡轮廓。"
        ]
      },
      {
        id: 4,
        title: "发现",
        subtitle: "第四章",
        paragraphs: [
          "伊莱亚斯在黎明前被敲门声惊醒。那声音轻而断续，仿佛大海本身在请求进来。他在灯室下方的平台上找到了她。她裹着一条像雾织成的灰色披肩，赤脚，皮肤有种水生生物般的半透明质感。",
          "她没有说话，只是递给他一只贝壳。贝壳有他的手掌大小，表面光滑，螺旋似乎永远向里旋转。他把贝壳贴在耳边，听到的不是海，而是灯塔本身——机器的低鸣和齿轮有节奏的咔哒声，从很远的地方回放给他听。",
          "我是你之前最后一位守夜人，她说，虽然她的嘴唇没有动。她的声音直接出现在他的脑海里，平静而耐心。灯塔不是一座建筑，它是海岸不断提出的问题，每一位守夜人都是一个答案。有些答案比其他的更勇敢。",
          "伊莱亚斯想问她的意思，但当他抬头时，她已经朝悬崖边缘走去。他跟了上去，大声呼喊，但雾气吞没了她。当他跑到岩石边时，只剩下空荡的海面和海鸥的叫声。他手里的贝壳是温的。"
        ]
      },
      {
        id: 5,
        title: "出发",
        subtitle: "第五章",
        paragraphs: [
          "那年冬天来得早，海湾结了霜，小路变得危险。伊莱亚斯不再怀疑自己看到的一切。他把贝壳放在窗台上，让晨光能够照到它。有时他会发现螺旋在缓缓转动，就像头顶的光束。",
          "一年的最后一夜，气压计再次下降，但这一次伊莱亚斯没有害怕。他爬上楼梯，上紧发条，然后等待。午夜，那道光回应了，伴随着下面水面上划桨的声音。他下楼去迎接。",
          "船就是那条曾在岩石上撞碎的船，但现在它完好无损，船骨在月光下泛着银光。那个女人坐在船尾，旁边放着一只和他那只很像的小皮箱。该走了，她说。灯塔已经选好了它的下一个答案。",
          "伊莱亚斯回头望向塔楼。光在他头顶稳定地转动，冷漠而忠诚。他想起莫利留下的纸条，终于明白了。他提起皮箱，跨进船里。当他们驶离悬崖时，灯塔越来越小，但它的光束依然触及他们，像一只手同时说着再见与欢迎。伊莱亚斯不知道他们要去哪里。有生以来第一次，这种感觉像是正确的开始。"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "雨夜书店",
    author: "LDY",
    synopsis: "城市角落有一家只在雨天开门的小书店。店主老周说，每一本书都在等一个特定的人。一个连绵雨季里，三个陌生人推门而入。",
    coverGradient: "linear-gradient(135deg, #5d4e6d 0%, #3d324a 100%)",
    chapters: [
      {
        id: 1,
        title: "门铃响了",
        subtitle: "第一章",
        paragraphs: [
          "梧桐街尽头有一家没有招牌的书店。木质门框被雨水泡得发黑，门楣上挂着一只铜铃铛，声音很轻，像一声叹息。街坊们叫它雨夜书店，因为只有在下雨的晚上，它才会亮起那盏暖黄色的灯。",
          "老周是店主，今年七十岁，头发花白，总是穿着一件洗得发白的灰色毛衣。他说书店不是他开的，是书自己找来的地方。每一本书都在等一个人，等到了，书就会消失。",
          "大多数人听了只是笑笑，把它当作老人的怪话。但林晓不信，也不全不信。她是一个程序员，加班到深夜时常常路过这条街。那个下着暴雨的周三，她第一次看见书店的灯亮着。"
        ]
      },
      {
        id: 2,
        title: "三本没有书脊的书",
        subtitle: "第二章",
        paragraphs: [
          "店里没有分类标签，书架上挤挤挨挨，有的书厚得像砖，有的薄得像信纸。林晓随手抽出一本，封面上没有书名，只印着一朵正在融化的雪花。",
          "那天晚上她读完了整本书。书里写的是一个女孩在雪夜登上末班公交车的故事，情节平淡，但每一个场景都让她觉得熟悉。翻到最后一页，她发现扉页上有人用铅笔写了一行字：给我十六岁那年的自己。",
          "她把书放回柜台时，老周正用抹布擦一只玻璃杯。找到了？他问。林晓愣了一下，点点头。老周笑了，把那本书收到柜台下面的抽屉里。从那以后，她再也没在书架上见过它。"
        ]
      },
      {
        id: 3,
        title: "雨停之前",
        subtitle: "第三章",
        paragraphs: [
          "雨季结束前，林晓又去了三次书店。第二次她遇见一个穿校服的高中生，第三次是一个提着行李箱的中年男人。他们各自在书架前站了很久，然后拿着一本没有书脊的书离开。",
          "最后一次去时，雨已经变小。老周递给她一杯热茶，说：你以为书在等人，其实人也在等书。等的那本书到了，你就会知道该往哪里走。",
          "林晓喝完茶，在书架上发现了一本封面画着键盘和咖啡杯的书。她知道那是她的。雨停后，她辞去了那份干了五年的工作。三个月后，她在城市另一头开了一家小小的独立咖啡馆，名字叫等书来。"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "云端邮差",
    author: "LDY",
    synopsis: "在未来，纸质信件成了稀有物。阿云是最后一批云端邮差之一，他负责把无法通过电子网络送达的信，亲手送到收件人手中。",
    coverGradient: "linear-gradient(135deg, #4a7c59 0%, #2f4f3f 100%)",
    chapters: [
      {
        id: 1,
        title: "最后一封信",
        subtitle: "第一章",
        paragraphs: [
          "二零七八年，世界上只剩下一百二十七个纸质邮局。阿云工作的这一个位于老城区第七街区的顶层，窗外是永远飘着薄雾的天空。他的工作很简单：把无法被电子网络送达的信，送到它们该去的地方。",
          "所谓无法送达，通常是因为收件人没有电子身份，或者发件人拒绝使用网络。还有一些信，系统显示地址不存在，但阿云知道，那些地址只是存在于另一个图层里。",
          "这天早上，他收到一封泛黄的信。信封上用毛笔写着三个字：旧人收。没有邮编，没有街道，只在右下角画了一朵小小的云。"
        ]
      },
      {
        id: 2,
        title: "旧街区",
        subtitle: "第二章",
        paragraphs: [
          "阿云骑着他那辆吱呀作响的电动自行车，穿过五层高架和两条废弃的地铁隧道，来到城市边缘的旧街区。这里的人在二十年前拒绝迁移，所以他们的房子没有被拆掉重建。",
          "他按信封背面的提示，找到一栋爬满爬山虎的三层小楼。门牌号是十七，但门铃已经坏了。他敲了三下，停顿，又敲两下。门开了一条缝，露出一只浑浊的眼睛。",
          "你找谁？老人的声音像是从很远的地方传来。阿云举起信封：有人给您写信。老人盯着那朵云看了很久，才缓缓把门打开。屋里堆满了旧书和报纸，空气里有樟脑和茶叶的味道。"
        ]
      },
      {
        id: 3,
        title: "信的归宿",
        subtitle: "第三章",
        paragraphs: [
          "老人让阿云在一张摇椅上坐下，自己戴上老花镜，颤抖着拆开信。信纸只有一页，字迹娟秀。阿云没有刻意去看，但眼角还是瞥见了几句：见字如面，院子里的石榴又开花了。",
          "读完信，老人把它按在胸口，闭着眼坐了许久。然后他从抽屉里取出一个铁盒，盒子里全是泛黄的信，每一封的右下角都画着一朵云。",
          "这是我老伴写的，老人说，她走了十年了。每年石榴花开，她都会寄一封信来。谢谢你把它送来。阿云不知道该说什么，只好鞠了一躬。走出小楼时，他抬头看了看天，发现雾气散了一些，阳光正照在旧街区的屋顶上。"
        ]
      }
    ]
  }
];

// 存储辅助
function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // 某些环境可能无法使用 localStorage
  }
}

function load(key, defaultValue) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

// 主题切换
function initTheme() {
  const savedTheme = load('jd-theme', 'light');
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeButtons = document.querySelectorAll('[data-set-theme]');
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-set-theme');
      document.documentElement.setAttribute('data-theme', theme);
      save('jd-theme', theme);
    });
  });
}

// 字号调节
function initFontSize() {
  const content = document.querySelector('.chapter-content');
  if (!content) return;

  let size = load('jd-font-size', 18);
  content.style.fontSize = size + 'px';

  const increaseBtn = document.getElementById('font-increase');
  const decreaseBtn = document.getElementById('font-decrease');
  const resetBtn = document.getElementById('font-reset');

  if (increaseBtn) {
    increaseBtn.addEventListener('click', () => {
      if (size < 28) {
        size += 2;
        content.style.fontSize = size + 'px';
        save('jd-font-size', size);
      }
    });
  }

  if (decreaseBtn) {
    decreaseBtn.addEventListener('click', () => {
      if (size > 14) {
        size -= 2;
        content.style.fontSize = size + 'px';
        save('jd-font-size', size);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      size = 18;
      content.style.fontSize = '';
      save('jd-font-size', size);
    });
  }
}

// 工具函数：从 URL 解析当前书和章节
function getCurrentIds() {
  const params = new URLSearchParams(window.location.search);
  let bookId = parseInt(params.get('book'), 10);
  let chapterId = parseInt(params.get('chapter'), 10);

  if (!bookId || bookId < 1 || bookId > books.length) bookId = 1;
  if (!chapterId || chapterId < 1) chapterId = 1;

  const book = books.find(b => b.id === bookId);
  if (!book) return { bookId: 1, chapterId: 1, book: books[0], chapter: books[0].chapters[0] };

  const chapter = book.chapters.find(c => c.id === chapterId) || book.chapters[0];
  return { bookId, chapterId: chapter.id, book, chapter };
}

function getBookById(id) {
  return books.find(b => b.id === id) || books[0];
}

// 阅读进度（按书记录）
function saveProgress(bookId, chapterId) {
  const book = getBookById(bookId);
  const progress = load('jd-progress', {});
  progress[bookId] = { chapterId, updatedAt: Date.now() };

  const totalChapters = books.reduce((sum, b) => sum + b.chapters.length, 0);
  const readChapters = books.reduce((sum, b) => {
    const saved = progress[b.id];
    if (!saved) return sum;
    return sum + b.chapters.filter(c => c.id <= saved.chapterId).length;
  }, 0);
  progress.percent = Math.round((readChapters / totalChapters) * 100);
  save('jd-progress', progress);
}

function loadProgress(bookId) {
  const all = load('jd-progress', {});
  if (bookId) {
    return all[bookId] || { chapterId: 1, percent: 0 };
  }
  return all;
}

// 首页：渲染书架
function renderBookshelf() {
  const shelf = document.getElementById('bookshelf');
  if (!shelf) return;

  const progress = loadProgress();
  shelf.innerHTML = '';

  books.forEach(book => {
    const saved = progress[book.id];
    const currentChapter = saved
      ? book.chapters.find(c => c.id === saved.chapterId)
      : book.chapters[0];
    const progressText = saved
      ? `读到 ${currentChapter.subtitle}`
      : `${book.chapters.length} 章 · 未开始`;

    const card = document.createElement('article');
    card.className = 'book-card';
    card.innerHTML = `
      <a class="book-cover" href="book.html?book=${book.id}" style="background: ${book.coverGradient}" aria-label="${book.title} 封面">
        <h2>${book.title}</h2>
        <span class="author">${book.author}</span>
      </a>
      <div class="book-card-info">
        <h2><a href="book.html?book=${book.id}">${book.title}</a></h2>
        <p class="book-meta">${book.author} · ${progressText}</p>
        <p class="book-synopsis">${book.synopsis}</p>
        <a class="btn btn-small" href="read.html?book=${book.id}&chapter=${saved ? saved.chapterId : 1}">
          ${saved ? '继续阅读' : '开始阅读'}
        </a>
      </div>
    `;
    shelf.appendChild(card);
  });
}

// 渲染总阅读进度
function updateProgressDisplay() {
  const card = document.getElementById('progress-card');
  const text = document.getElementById('progress-text');
  const bar = document.getElementById('progress-bar-fill');
  const link = document.getElementById('continue-link');

  if (!card) return;

  const allProgress = loadProgress();
  const percent = allProgress.percent || 0;

  let lastBookId = 1;
  let lastTime = 0;
  Object.entries(allProgress).forEach(([key, value]) => {
    if (key !== 'percent' && value.updatedAt > lastTime) {
      lastTime = value.updatedAt;
      lastBookId = parseInt(key, 10);
    }
  });

  const book = getBookById(lastBookId);
  const saved = allProgress[lastBookId];
  const chapter = saved ? book.chapters.find(c => c.id === saved.chapterId) : book.chapters[0];

  if (chapter) {
    card.classList.remove('hidden');
    text.textContent = `上次读到《${book.title}》${chapter.subtitle}：${chapter.title}（书架总进度 ${percent}%）`;
    bar.style.width = percent + '%';
    link.href = `read.html?book=${lastBookId}&chapter=${chapter.id}`;
  }
}

// 渲染单本书详情页
function renderBookDetail() {
  const { book } = getCurrentIds();
  if (!book) return;

  document.title = `${book.title} - 静读`;

  const cover = document.getElementById('book-detail-cover');
  const title = document.getElementById('book-detail-title');
  const author = document.getElementById('book-detail-author');
  const synopsis = document.getElementById('book-detail-synopsis');
  const startLink = document.getElementById('book-start-link');
  const tocLink = document.getElementById('book-toc-link');

  if (cover) cover.style.background = book.coverGradient;
  if (title) title.textContent = book.title;
  if (author) author.textContent = `${book.author} · ${book.chapters.length} 章`;
  if (synopsis) synopsis.textContent = book.synopsis;
  if (startLink) startLink.href = `read.html?book=${book.id}&chapter=1`;
  if (tocLink) tocLink.href = `toc.html?book=${book.id}`;

  const coverTitle = document.getElementById('book-detail-cover-title');
  const coverAuthor = cover ? cover.querySelector('.author') : null;
  if (coverTitle) coverTitle.textContent = book.title;
  if (coverAuthor) coverAuthor.textContent = book.author;

  const preview = document.getElementById('book-chapter-preview');
  if (preview) {
    preview.innerHTML = '';
    book.chapters.forEach(chapter => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="read.html?book=${book.id}&chapter=${chapter.id}">${chapter.subtitle} · ${chapter.title}</a>`;
      preview.appendChild(li);
    });
  }
}

// 渲染阅读页章节
function renderChapter() {
  const { bookId, chapterId, book, chapter } = getCurrentIds();
  if (!chapter) return;

  document.title = `${chapter.title} - ${book.title} - 静读`;

  const bookLink = document.getElementById('book-link');
  const titleEl = document.getElementById('chapter-title');
  const subtitleEl = document.getElementById('chapter-subtitle');
  const contentEl = document.getElementById('chapter-content');

  if (bookLink) {
    bookLink.href = `book.html?book=${book.id}`;
    bookLink.textContent = `《${book.title}》`;
  }
  if (titleEl) titleEl.textContent = chapter.title;
  if (subtitleEl) subtitleEl.textContent = chapter.subtitle;

  if (contentEl) {
    contentEl.innerHTML = '';
    chapter.paragraphs.forEach(text => {
      const p = document.createElement('p');
      p.textContent = text;
      contentEl.appendChild(p);
    });
  }

  const prevLink = document.getElementById('prev-chapter');
  const nextLink = document.getElementById('next-chapter');
  const tocLink = document.getElementById('toc-link');

  if (prevLink) {
    if (chapterId > 1) {
      prevLink.href = `read.html?book=${book.id}&chapter=${chapterId - 1}`;
      prevLink.classList.remove('disabled');
    } else {
      prevLink.href = '#';
      prevLink.classList.add('disabled');
    }
  }

  if (nextLink) {
    if (chapterId < book.chapters.length) {
      nextLink.href = `read.html?book=${book.id}&chapter=${chapterId + 1}`;
      nextLink.classList.remove('disabled');
    } else {
      nextLink.href = '#';
      nextLink.classList.add('disabled');
    }
  }

  if (tocLink) {
    tocLink.href = `toc.html?book=${book.id}`;
  }

  setTimeout(() => saveProgress(bookId, chapterId), 2000);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && chapterId < book.chapters.length) {
      window.location.href = `read.html?book=${book.id}&chapter=${chapterId + 1}`;
    } else if (e.key === 'ArrowLeft' && chapterId > 1) {
      window.location.href = `read.html?book=${book.id}&chapter=${chapterId - 1}`;
    }
  });
}

// 渲染目录页
function renderTOC() {
  const { book } = getCurrentIds();
  const list = document.getElementById('toc-list');
  const bookTitle = document.getElementById('toc-book-title');
  const bookLink = document.getElementById('toc-book-link');
  if (!list) return;

  if (bookTitle) bookTitle.textContent = book.title;
  if (bookLink) {
    bookLink.href = `book.html?book=${book.id}`;
    bookLink.textContent = book.title;
  }

  const saved = loadProgress(book.id);
  list.innerHTML = '';

  book.chapters.forEach(chapter => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `read.html?book=${book.id}&chapter=${chapter.id}`;

    const titleSpan = document.createElement('span');
    titleSpan.textContent = chapter.title;

    const numberSpan = document.createElement('span');
    numberSpan.className = 'chapter-number';
    numberSpan.textContent = chapter.subtitle;

    if (chapter.id === saved.chapterId) {
      titleSpan.textContent += ' · 继续阅读';
      a.style.fontWeight = '600';
    }

    a.appendChild(titleSpan);
    a.appendChild(numberSpan);
    li.appendChild(a);
    list.appendChild(li);
  });
}

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initFontSize();
  renderBookshelf();
  renderBookDetail();
  renderChapter();
  renderTOC();
  updateProgressDisplay();
});
