const STEMS = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const STEMS_HANJA = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const BRANCHES = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
const BRANCHES_HANJA = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

const ARTWORK_BASE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

const RESULT_DATA = {
  갑: {
    theme: "theme-wood",
    pokemonName: "나무지기",
    img: `${ARTWORK_BASE}/252.png`,
    subtitle: "목표를 향해 곧게 뻗어 나가는 개척자 리더",
    keywords: ["#추진력", "#솔직담백", "#성장캐"],
    desc: "새로운 일을 시작할 때 가장 먼저 앞장서는 에너지를 가졌습니다. 눈치를 보기보다 정면 돌파하는 편이며, 한번 목표를 정하면 끝까지 밀고 나가는 힘이 있습니다.",
    hap: { target: "기", label: "천간합 · 갑기합토", reason: "거침없는 추진력을 현실적으로 다듬어주는 짝꿍" },
    sangsaeng: { target: "임", label: "상생 · 수생목", reason: "넓은 시야와 아이디어로 성장을 돕는 조력자" }
  },
  을: {
    theme: "theme-wood",
    pokemonName: "나몰빼미",
    img: `${ARTWORK_BASE}/722.png`,
    subtitle: "어떤 환경에서도 뿌리를 내리는 유연한 전략가",
    keywords: ["#섬세함", "#끈기", "#적응력만렙"],
    desc: "겉으로는 부드럽고 친화력이 좋지만 내면에는 쉽게 꺾이지 않는 단단한 심지가 있습니다. 상황을 빠르게 읽고 현실적인 해법을 찾아내는 감각이 뛰어납니다.",
    hap: { target: "경", label: "천간합 · 을경합금", reason: "유연함에 단단한 결단력을 더해주는 환상의 짝" },
    sangsaeng: { target: "계", label: "상생 · 수생목", reason: "섬세한 직관으로 필요한 순간마다 영감을 주는 존재" }
  },
  병: {
    theme: "theme-fire",
    pokemonName: "파이리",
    img: `${ARTWORK_BASE}/4.png`,
    subtitle: "어디서든 분위기를 밝히는 태양 에너지 센터",
    keywords: ["#화려함", "#긍정에너지", "#직진본능"],
    desc: "주변 분위기를 단숨에 환하게 만드는 매력이 있습니다. 감정이 투명하고 표현력이 풍부해 사람들이 자연스럽게 모여드는 중심 역할을 자주 맡습니다.",
    hap: { target: "신", label: "천간합 · 병신합수", reason: "뜨거운 열정에 세련된 디테일을 입혀주는 파트너" },
    sangsaeng: { target: "갑", label: "상생 · 목생화", reason: "열정이 꺼지지 않도록 꾸준히 에너지를 보태주는 존재" }
  },
  정: {
    theme: "theme-fire",
    pokemonName: "식스테일",
    img: `${ARTWORK_BASE}/37.png`,
    subtitle: "차분함 속에 뜨거운 몰입력을 품은 디테일 장인",
    keywords: ["#집중력", "#감수성", "#반전매력"],
    desc: "평소에는 차분하고 사려 깊지만, 자신이 좋아하는 분야에 빠지면 누구보다 뜨거운 집중력을 발휘합니다. 섬세한 관찰력으로 남들이 놓치는 포인트를 잘 짚어냅니다.",
    hap: { target: "임", label: "천간합 · 정임합목", reason: "깊은 통찰과 섬세한 몰입이 만나 시너지를 내는 짝" },
    sangsaeng: { target: "을", label: "상생 · 목생화", reason: "지치지 않게 곁에서 은은하게 힘을 실어주는 조력자" }
  },
  무: {
    theme: "theme-earth",
    pokemonName: "잠만보",
    img: `${ARTWORK_BASE}/143.png`,
    subtitle: "흔들리지 않는 묵직한 존재감의 든든한 버팀목",
    keywords: ["#신뢰감", "#포용력", "#스케일"],
    desc: "주변의 변화에 쉽게 휘둘리지 않고 자기 페이스를 지킵니다. 스케일이 크고 믿음직스러워 중요한 순간에 사람들이 가장 먼저 의지하는 중심축이 됩니다.",
    hap: { target: "계", label: "천간합 · 무계합화", reason: "묵직한 안정감에 기발한 아이디어를 더해주는 짝" },
    sangsaeng: { target: "병", label: "상생 · 화생토", reason: "활기찬 에너지로 잠재력을 깨워주는 든든한 응원군" }
  },
  기: {
    theme: "theme-earth",
    pokemonName: "이브이",
    img: `${ARTWORK_BASE}/133.png`,
    subtitle: "무엇이든 내 것으로 흡수해 키워내는 올라운더",
    keywords: ["#실용주의", "#배려심", "#다재다능"],
    desc: "현실 감각이 뛰어나고 손재주나 실무 능력이 좋습니다. 주변 사람들을 세심하게 챙기면서도 자신의 몫을 야무지게 완성해 내는 균형 감각을 갖추고 있습니다.",
    hap: { target: "갑", label: "천간합 · 갑기합토", reason: "새로운 판을 열어주면 야무지게 완성해 내는 호흡" },
    sangsaeng: { target: "정", label: "상생 · 화생토", reason: "따뜻한 배려와 섬세한 조언으로 마음을 채워주는 존재" }
  },
  경: {
    theme: "theme-metal",
    pokemonName: "루카리오",
    img: `${ARTWORK_BASE}/448.png`,
    subtitle: "기준이 명확하고 의리 있는 단단한 승부사",
    keywords: ["#결단력", "#의리", "#깔끔한일처리"],
    desc: "기준이 명확하고 옳고 그름이 분명한 성격입니다. 한번 마음먹으면 군더더기 없이 깔끔하게 실행에 옮기며, 맡은 일에 대한 책임감이 매우 강합니다.",
    hap: { target: "을", label: "천간합 · 을경합금", reason: "단호한 결단력을 부드럽게 감싸주는 최고의 파트너" },
    sangsaeng: { target: "무", label: "상생 · 토생금", reason: "흔들릴 때마다 묵직하게 뒷받침해 주는 버팀목" }
  },
  신: {
    theme: "theme-metal",
    pokemonName: "님피아",
    img: `${ARTWORK_BASE}/700.png`,
    subtitle: "예리한 감각으로 완성도를 끌어올리는 보석 세공사",
    keywords: ["#완벽주의", "#미적감각", "#날카로운직관"],
    desc: "섬세하고 정교한 감각을 지녀 결과물의 퀄리티를 높이는 데 강점이 있습니다. 자존심이 강하고 자기 관리가 철저해 어디서든 세련된 인상을 남깁니다.",
    hap: { target: "병", label: "천간합 · 병신합수", reason: "예리한 감각을 환하게 빛내주는 태양 같은 짝꿍" },
    sangsaeng: { target: "기", label: "상생 · 토생금", reason: "실속 있게 챙겨주며 능력을 꽃피우게 돕는 조력자" }
  },
  임: {
    theme: "theme-water",
    pokemonName: "꼬부기",
    img: `${ARTWORK_BASE}/7.png`,
    subtitle: "틀에 갇히지 않고 유연하게 돌파하는 탐험가",
    keywords: ["#아이디어뱅크", "#유연함", "#통찰력"],
    desc: "고정관념에 얽매이지 않고 새로운 분야를 빠르게 흡수합니다. 상황을 넓게 조망하는 시야가 있어 복잡한 문제에서도 의외의 돌파구를 잘 찾아냅니다.",
    hap: { target: "정", label: "천간합 · 정임합목", reason: "넓은 시야에 섬세한 집중력을 더해 결과를 만드는 짝" },
    sangsaeng: { target: "경", label: "상생 · 금생수", reason: "명확한 방향을 잡아주어 흐름을 힘차게 이끄는 존재" }
  },
  계: {
    theme: "theme-water",
    pokemonName: "팽도리",
    img: `${ARTWORK_BASE}/393.png`,
    subtitle: "조용하지만 강한 직관과 기획력을 지닌 감성파",
    keywords: ["#직관력", "#기획감각", "#자존심"],
    desc: "상황과 사람의 마음을 읽는 센스가 뛰어납니다. 겉으로 드러내지 않아도 머릿속에서 치밀하게 그림을 그리며, 섬세한 아이디어로 주변에 영감을 줍니다.",
    hap: { target: "무", label: "천간합 · 무계합화", reason: "섬세한 아이디어를 현실로 구현해 주는 든든한 짝" },
    sangsaeng: { target: "신", label: "상생 · 금생수", reason: "예리한 감각으로 생각의 완성도를 높여주는 파트너" }
  }
};

function getDayPillar(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const baseUtc = Date.UTC(2000, 0, 1);
  const targetUtc = Date.UTC(year, month - 1, day);
  const diffDays = Math.floor((targetUtc - baseUtc) / (1000 * 60 * 60 * 24));

  const index60 = ((54 + diffDays) % 60 + 60) % 60;
  const stemIdx = index60 % 10;
  const branchIdx = index60 % 12;

  return makePillar(stemIdx, branchIdx);
}

function makePillar(stemIdx, branchIdx) {
  return {
    stemIdx,
    branchIdx,
    stem: STEMS[stemIdx],
    branch: BRANCHES[branchIdx],
    hanja: `${STEMS_HANJA[stemIdx]}${BRANCHES_HANJA[branchIdx]}`
  };
}

/* ───────── 년주 · 월주 · 시주 (절기 기준) ───────── */

const KST_OFFSET_MS = 9 * 60 * 60 * 1000;

const HOUR_CENTER = {
  자: 0.5, 축: 2.5, 인: 4.5, 묘: 6.5, 진: 8.5, 사: 10.5,
  오: 12.5, 미: 14.5, 신: 16.5, 유: 18.5, 술: 20.5, 해: 22.5, unknown: 12
};

function sunLongitude(utcMs) {
  const jd = utcMs / 86400000 + 2440587.5 + 69 / 86400;
  const T = (jd - 2451545) / 36525;
  const rad = Math.PI / 180;
  const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
  const M = (357.52911 + 35999.05029 * T - 0.0001537 * T * T) * rad;
  const C =
    (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M) +
    (0.019993 - 0.000101 * T) * Math.sin(2 * M) +
    0.000289 * Math.sin(3 * M);
  const omega = (125.04 - 1934.136 * T) * rad;
  const lon = L0 + C - 0.00569 - 0.00478 * Math.sin(omega);
  return ((lon % 360) + 360) % 360;
}

function monthIndexAt(utcMs) {
  return Math.floor(((sunLongitude(utcMs) - 315 + 360) % 360) / 30);
}

function kstToUtcMs(y, m, d, hours) {
  return Date.UTC(y, m - 1, d) + hours * 3600000 - KST_OFFSET_MS;
}

function getFourPillars(dateStr, birthTime) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const moment = kstToUtcMs(y, m, d, HOUR_CENTER[birthTime]);

  const monthIdx = monthIndexAt(moment);

  const sajuYear = m <= 2 && monthIdx >= 10 ? y - 1 : y;
  const yearStemIdx = (((sajuYear - 4) % 10) + 10) % 10;
  const yearBranchIdx = (((sajuYear - 4) % 12) + 12) % 12;
  const yearP = makePillar(yearStemIdx, yearBranchIdx);

  const monthStemIdx = ((yearStemIdx % 5) * 2 + 2 + monthIdx) % 10;
  const monthBranchIdx = (monthIdx + 2) % 12;
  const monthP = makePillar(monthStemIdx, monthBranchIdx);

  const dayP = getDayPillar(dateStr);

  let hourP = null;
  if (birthTime !== "unknown") {
    const hourBranchIdx = BRANCHES.indexOf(birthTime);
    const hourStemIdx = ((dayP.stemIdx % 5) * 2 + hourBranchIdx) % 10;
    hourP = makePillar(hourStemIdx, hourBranchIdx);
  }

  const boundaryDay =
    birthTime === "unknown" &&
    monthIndexAt(kstToUtcMs(y, m, d, 0)) !== monthIndexAt(kstToUtcMs(y, m, d, 23.99));

  return { year: yearP, month: monthP, day: dayP, hour: hourP, boundaryDay };
}

/* ───────── 오행 ───────── */

const ELEMENTS = [
  { key: "wood", name: "목", hanja: "木", trait: "성장·기획" },
  { key: "fire", name: "화", hanja: "火", trait: "열정·표현" },
  { key: "earth", name: "토", hanja: "土", trait: "안정·신뢰" },
  { key: "metal", name: "금", hanja: "金", trait: "결단·원칙" },
  { key: "water", name: "수", hanja: "水", trait: "지혜·유연" }
];

const STEM_ELEMENT = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
const BRANCH_ELEMENT = [4, 2, 0, 0, 2, 1, 1, 2, 3, 3, 2, 4];

function countElements(pillars) {
  const counts = [0, 0, 0, 0, 0];
  [pillars.year, pillars.month, pillars.day, pillars.hour].forEach((p) => {
    if (!p) return;
    counts[STEM_ELEMENT[p.stemIdx]]++;
    counts[BRANCH_ELEMENT[p.branchIdx]]++;
  });
  return counts;
}

function renderPillarTable(pillars) {
  const cols = [
    { label: "시주", p: pillars.hour },
    { label: "일주", p: pillars.day, me: true },
    { label: "월주", p: pillars.month },
    { label: "년주", p: pillars.year }
  ];

  const cell = (idx, hanja, hangul, elementIdx) =>
    idx === null
      ? `<div class="glyph glyph-empty"><span class="glyph-hanja">?</span><span class="glyph-hangul">모름</span></div>`
      : `<div class="glyph el-${ELEMENTS[elementIdx].key}">
           <span class="glyph-hanja">${hanja}</span>
           <span class="glyph-hangul">${hangul}${ELEMENTS[elementIdx].name}</span>
         </div>`;

  document.getElementById("pillar-table").innerHTML = cols
    .map(({ label, p, me }) => {
      const stem = p ? cell(p.stemIdx, STEMS_HANJA[p.stemIdx], p.stem, STEM_ELEMENT[p.stemIdx]) : cell(null);
      const branch = p
        ? cell(p.branchIdx, BRANCHES_HANJA[p.branchIdx], p.branch, BRANCH_ELEMENT[p.branchIdx])
        : cell(null);
      return `<div class="pillar-col${me ? " is-me" : ""}">
                <span class="pillar-label">${label}${me ? " · 나" : ""}</span>
                ${stem}${branch}
              </div>`;
    })
    .join("");
}

function renderElementChart(counts, total) {
  const max = Math.max(...counts);
  document.getElementById("element-chart").innerHTML = ELEMENTS.map((el, i) => {
    const pct = Math.round((counts[i] / total) * 100);
    return `<div class="el-row">
              <span class="el-name">${el.name}<small>${el.hanja}</small></span>
              <div class="el-track"><div class="el-bar el-${el.key}" style="width:${pct}%"></div></div>
              <span class="el-count${counts[i] === max ? " is-max" : ""}">${counts[i]}개</span>
            </div>`;
  }).join("");

  const strongest = ELEMENTS.filter((_, i) => counts[i] === max);
  const missing = ELEMENTS.filter((_, i) => counts[i] === 0);
  let summary = `<strong>${strongest.map((e) => `${e.name}(${e.hanja})`).join("·")}</strong> 기운이 가장 강해요 — ${strongest
    .map((e) => e.trait)
    .join(", ")}이 나의 무기!`;
  if (missing.length) {
    summary += ` 반면 <strong>${missing.map((e) => `${e.name}(${e.hanja})`).join("·")}</strong> 기운은 비어 있어서, 이 기운을 가진 파트너가 큰 힘이 돼요.`;
  } else {
    summary += " 다섯 가지 기운이 모두 있는 균형 잡힌 사주예요.";
  }
  document.getElementById("element-summary").innerHTML = summary;
}

const YANG_STEMS = ["갑", "병", "무", "경", "임"];

const YINYANG_TEXT = {
  same: {
    tag: "음양 일치형",
    text: "타고난 기운과 성별의 음양이 같은 방향이에요. 꾸밈없이 본래 성향이 그대로 드러나서, 처음 만난 사람도 '딱 보이는 그대로'라고 느끼는 타입입니다."
  },
  cross: {
    tag: "반전 매력형",
    text: "타고난 기운과 성별의 음양이 서로 엇갈려요. 첫인상과 알고 난 뒤의 모습이 달라서, 친해질수록 의외의 면모가 튀어나오는 반전 매력 타입입니다."
  }
};

/* ───────── 오늘의 일진 & 십신 운세 ───────── */

const FORTUNE_DATA = {
  비견: {
    overall: "주관이 뚜렷해지고 내 페이스를 지키기 좋은 날이에요. 남과 비교하기보다 내 목표에 집중하면 성과가 따릅니다.",
    money: { level: "안정", tone: "steady", text: "큰 지출은 없지만 친구나 모임으로 인한 소소한 소비가 생길 수 있어요. 예산 선을 먼저 정해두세요." },
    love: { level: "무난", tone: "steady", text: "편안한 친구 같은 대화가 잘 통합니다. 다만 고집을 세우면 사소한 신경전이 될 수 있으니 한 발 양보해 보세요." },
    study: { level: "상승", tone: "good", text: "혼자 집중해서 밀고 나가는 힘이 강해집니다. 미뤄둔 과제나 개인 공부 분량을 끝내기에 딱 좋은 날이에요." }
  },
  겁재: {
    overall: "승부욕과 에너지가 올라오지만 충동적인 결정은 조심해야 하는 날이에요. 속도를 조절하면 위기를 기회로 바꿀 수 있습니다.",
    money: { level: "주의", tone: "care", text: "충동구매나 예상치 못한 지출이 생기기 쉽습니다. 결제 버튼을 누르기 전 하루만 더 고민해 보세요." },
    love: { level: "신중", tone: "care", text: "질투심이나 경쟁심이 올라올 수 있어요. 솔직한 마음을 차분하게 표현하는 편이 오해를 줄여줍니다." },
    study: { level: "상승", tone: "good", text: "라이벌 의식이 좋은 자극이 됩니다. 스터디나 타임어택 방식으로 목표치를 설정하면 평소보다 속도가 붙어요." }
  },
  식신: {
    overall: "마음에 여유가 생기고 아이디어와 표현력이 자연스럽게 흘러나오는 기분 좋은 날입니다.",
    money: { level: "상승", tone: "good", text: "재능이나 꾸준한 노력이 작은 보상으로 돌아옵니다. 나를 위한 맛있는 한 끼나 기분 전환 소비는 길해요." },
    love: { level: "매우 좋음", tone: "high", text: "다정하고 유쾌한 매력이 돋보여 주변에 사람이 모입니다. 자연스러운 대화 속에서 호감이 싹트기 좋아요." },
    study: { level: "매우 좋음", tone: "high", text: "한 가지 주제에 깊게 몰입하는 집중력이 발휘됩니다. 암기보다는 직접 써보고 정리하는 공부가 효과적이에요." }
  },
  상관: {
    overall: "감각이 예리해지고 기존의 틀을 깨는 기발한 발상이 떠오르는 날이에요. 말 한마디의 톤만 부드럽게 다듬어 보세요.",
    money: { level: "변동", tone: "steady", text: "새로운 수입 아이디어나 부수입 기회가 보이지만, 기분에 따른 소비도 함께 커질 수 있어 균형이 필요합니다." },
    love: { level: "매력 상승", tone: "good", text: "센스 있는 리액션과 솔직한 표현으로 시선을 끕니다. 직설적인 농담만 조금 조심하면 분위기가 최고예요." },
    study: { level: "매우 좋음", tone: "high", text: "기획·발표·창작 작업에서 두각을 나타냅니다. 막히던 문제도 새로운 관점으로 접근하면 의외로 쉽게 풀려요." }
  },
  편재: {
    overall: "활동 반경이 넓어지고 새로운 기회와 정보가 빠르게 들어오는 역동적인 날입니다.",
    money: { level: "매우 좋음", tone: "high", text: "뜻밖의 혜택이나 이벤트, 용돈 등 기분 좋은 재물 흐름이 들어옵니다. 다만 들어온 만큼 크게 쓰지 않도록 관리하세요." },
    love: { level: "상승", tone: "good", text: "새로운 장소나 모임에서 설레는 인연을 만날 가능성이 높습니다. 먼저 가볍게 말을 건네보세요." },
    study: { level: "무난", tone: "steady", text: "주변에 신경 쓸 일이 많아 집중력이 흩어질 수 있어요. 짧은 단위로 계획을 쪼개어 체크하는 것이 유리합니다." }
  },
  정재: {
    overall: "성실하게 쌓아온 노력이 현실적인 결과로 이어지는 안정적이고 든든한 날이에요.",
    money: { level: "매우 좋음", tone: "high", text: "계획적인 소비와 저축에 최적화된 날입니다. 가계부를 점검하거나 필요한 물건을 합리적으로 구매하기 좋아요." },
    love: { level: "안정", tone: "good", text: "진중하고 믿음직한 태도가 상대에게 깊은 신뢰를 줍니다. 소소하지만 확실한 약속을 지키면 관계가 단단해져요." },
    study: { level: "매우 좋음", tone: "high", text: "꼼꼼함과 지구력이 빛을 발합니다. 오답 노트 정리나 밀린 실무 처리처럼 디테일이 중요한 작업에 강해요." }
  },
  편관: {
    overall: "책임감이 커지고 바쁘게 움직여야 하는 날이지만, 돌파해 내면 한 단계 성장하는 계기가 됩니다.",
    money: { level: "안정", tone: "steady", text: "돈을 쓰기보다 맡은 일을 처리하느라 바쁜 하루입니다. 체력 관리나 건강을 위한 지출은 아끼지 마세요." },
    love: { level: "설렘", tone: "good", text: "카리스마 있거나 평소와 다른 스타일의 사람에게 끌릴 수 있어요. 과한 긴장만 풀면 좋은 흐름이 이어집니다." },
    study: { level: "상승", tone: "good", text: "마감 기한이 있는 과제나 시험 대비에서 강한 추진력이 나옵니다. 우선순위 1가지를 정해 정면 돌파해 보세요." }
  },
  정관: {
    overall: "주변의 신뢰와 인정을 받기 좋은 반듯한 기운의 날이에요. 원칙대로 차분하게 움직이면 모든 일이 순조롭습니다.",
    money: { level: "안정", tone: "good", text: "정당한 대가나 안정적인 수입 흐름이 유지됩니다. 불필요한 변칙 없이 정석대로 관리할수록 유리해요." },
    love: { level: "매우 좋음", tone: "high", text: "예의 바르고 진정성 있는 태도가 좋은 인연을 부릅니다. 소개팅이나 진지한 대화를 나누기에 더없이 좋은 날이에요." },
    study: { level: "매우 좋음", tone: "high", text: "규칙적인 루틴이 완벽하게 작동합니다. 계획표대로 차근차근 진도를 나가면 기대 이상의 성취감을 얻어요." }
  },
  편인: {
    overall: "직관력과 통찰이 깊어지는 날이에요. 겉으로 드러나는 분주함보다 내면의 생각과 아이디어를 정리하는 데 유리합니다.",
    money: { level: "주의", tone: "care", text: "정보가 많을수록 판단이 흔들릴 수 있어요. 큰 금액이 오가는 결정이나 충동적인 구독·결제는 미루는 편이 좋습니다." },
    love: { level: "신중", tone: "steady", text: "혼자만의 시간이 필요하거나 생각이 많아질 수 있어요. 상대에게 미리 솔직한 컨디션을 공유하면 편안해집니다." },
    study: { level: "상승", tone: "good", text: "남들이 보지 못하는 핵심 원리를 꿰뚫어 보는 날입니다. 심화 개념 이해나 자료 리서치에서 뛰어난 집중력을 발휘해요." }
  },
  정인: {
    overall: "주변의 도움과 따뜻한 응원이 따라주는 편안한 날이에요. 배움과 휴식을 통해 에너지를 충전하기 좋습니다.",
    money: { level: "상승", tone: "good", text: "윗사람이나 주변으로부터 기분 좋은 선물을 받거나 실질적인 도움을 얻기 쉽습니다. 자기계발 투자가 길해요." },
    love: { level: "매우 좋음", tone: "high", text: "상대의 마음을 잘 헤아려 주는 배려심 덕분에 관계가 한층 따뜻해집니다. 진심이 담긴 응원 한마디를 건네보세요." },
    study: { level: "매우 좋음", tone: "high", text: "이해력과 흡수력이 최고조에 달하는 날입니다. 강의 수강, 독서, 자격증·시험 공부 모두 막힘없이 머리에 잘 들어와요." }
  }
};

function getTenGod(myStemIdx, targetStemIdx) {
  const myEl = Math.floor(myStemIdx / 2);
  const targetEl = Math.floor(targetStemIdx / 2);
  const samePol = myStemIdx % 2 === targetStemIdx % 2;
  const diff = (targetEl - myEl + 5) % 5;

  const table = [
    ["비견", "겁재"],
    ["식신", "상관"],
    ["편재", "정재"],
    ["편관", "정관"],
    ["편인", "정인"]
  ];
  return table[diff][samePol ? 0 : 1];
}

function renderTodayFortune(myStemIdx) {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");

  const todayPillar = getDayPillar(`${y}-${m}-${d}`);
  const tenGod = getTenGod(myStemIdx, todayPillar.stemIdx);
  const f = FORTUNE_DATA[tenGod];

  document.getElementById("today-pillar-tag").textContent =
    `${now.getMonth() + 1}.${now.getDate()} ${todayPillar.stem}${todayPillar.branch}(${todayPillar.hanja})일 · ${tenGod}`;
  document.getElementById("fortune-overall").textContent = f.overall;

  const setItem = (key, data) => {
    const badge = document.getElementById(`fortune-${key}-badge`);
    badge.textContent = data.level;
    badge.className = `fortune-badge badge-${data.tone}`;
    document.getElementById(`fortune-${key}-text`).textContent = data.text;
  };

  setItem("money", f.money);
  setItem("love", f.love);
  setItem("study", f.study);
}

/* ───────── 입력 폼 초기화 및 이벤트 ───────── */

const YEAR_MIN = 1930;
const YEAR_MAX = 2050;

const form = document.getElementById("test-form");
const inputSection = document.getElementById("input-section");
const resultSection = document.getElementById("result-section");

const yearSel = document.getElementById("birth-year");
const monthSel = document.getElementById("birth-month");
const daySel = document.getElementById("birth-day");
const leapWrap = document.getElementById("leap-wrap");
const leapCheck = document.getElementById("is-leap");
const dateError = document.getElementById("date-error");

function getRadio(name) {
  return document.querySelector(`input[name="${name}"]:checked`).value;
}

function fillSelect(sel, from, to, suffix, selected) {
  sel.innerHTML = "";
  const step = from <= to ? 1 : -1;
  for (let v = from; step > 0 ? v <= to : v >= to; v += step) {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = `${v}${suffix}`;
    if (v === selected) opt.selected = true;
    sel.appendChild(opt);
  }
}

function refreshDays() {
  const y = Number(yearSel.value);
  const m = Number(monthSel.value);
  const current = Number(daySel.value) || 1;
  const maxDay =
    getRadio("calendar") === "lunar" ? 30 : new Date(Date.UTC(y, m, 0)).getUTCDate();
  fillSelect(daySel, 1, maxDay, "일", Math.min(current, maxDay));
}

fillSelect(yearSel, YEAR_MAX, YEAR_MIN, "년", 2000);
fillSelect(monthSel, 1, 12, "월", 1);
fillSelect(daySel, 1, 31, "일", 1);

yearSel.addEventListener("change", refreshDays);
monthSel.addEventListener("change", refreshDays);
document.querySelectorAll('input[name="calendar"]').forEach((r) =>
  r.addEventListener("change", () => {
    const isLunar = getRadio("calendar") === "lunar";
    leapWrap.classList.toggle("hidden", !isLunar);
    if (!isLunar) leapCheck.checked = false;
    dateError.classList.add("hidden");
    refreshDays();
  })
);

function showDateError(msg) {
  dateError.textContent = msg;
  dateError.classList.remove("hidden");
}

function toSolarDate(calendar, y, m, d, isLeap) {
  const pad = (n) => String(n).padStart(2, "0");
  if (calendar === "solar") return `${y}-${pad(m)}-${pad(d)}`;

  if (typeof KoreanLunarCalendar === "undefined") {
    showDateError("음력 변환 기능을 불러오지 못했어요. 인터넷 연결을 확인해 주세요.");
    return null;
  }
  const cal = new KoreanLunarCalendar();
  if (!cal.setLunarDate(y, m, d, isLeap)) {
    showDateError(
      isLeap
        ? `음력 ${y}년에는 윤${m}월이 없거나, 해당 날짜가 존재하지 않아요.`
        : `음력 ${y}년 ${m}월에는 ${d}일이 없어요. (작은 달은 29일까지)`
    );
    return null;
  }
  const s = cal.getSolarCalendar();
  return `${s.year}-${pad(s.month)}-${pad(s.day)}`;
}

function setPokemonImage(el, src, alt) {
  el.crossOrigin = "anonymous";
  el.src = src;
  el.alt = alt;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  dateError.classList.add("hidden");

  const userName = document.getElementById("user-name").value.trim() || "당신";
  const gender = getRadio("gender");
  const calendar = getRadio("calendar");
  const isLeap = calendar === "lunar" && leapCheck.checked;
  const y = Number(yearSel.value);
  const m = Number(monthSel.value);
  const d = Number(daySel.value);
  const birthTime = document.getElementById("birth-time").value;

  const birthDate = toSolarDate(calendar, y, m, d, isLeap);
  if (!birthDate) return;

  const pillars = getFourPillars(birthDate, birthTime);
  const pillar = pillars.day;
  const info = RESULT_DATA[pillar.stem];

  // 사주 명식 + 오행 분포
  renderPillarTable(pillars);
  const counts = countElements(pillars);
  renderElementChart(counts, pillars.hour ? 8 : 6);
  const notes = [];
  if (!pillars.hour) notes.push("태어난 시간을 모르면 시주를 뺀 6글자로 분석해요.");
  if (pillars.boundaryDay)
    notes.push("이날은 절기가 바뀌는 날이라, 태어난 시간에 따라 월주가 달라질 수 있어요.");
  const noteEl = document.getElementById("saju-note");
  noteEl.textContent = notes.join(" ");
  noteEl.classList.toggle("hidden", notes.length === 0);

  // 1. 메인 결과 정보 세팅
  const timeText = birthTime === "unknown" ? "" : ` · ${birthTime}시생`;
  document.getElementById("result-pillar").textContent =
    `${pillar.stem}${pillar.branch}(${pillar.hanja})일주${timeText}`;

  const genderText = gender === "male" ? "남성" : "여성";
  const inputText =
    calendar === "lunar"
      ? `음력${isLeap ? "(윤달)" : ""} ${y}.${m}.${d}`
      : `양력 ${y}.${m}.${d}`;
  const [sy, sm, sd] = birthDate.split("-").map(Number);
  const solarNote = calendar === "lunar" ? ` → 양력 ${sy}.${sm}.${sd}` : "";
  document.getElementById("result-birth").textContent =
    `${genderText} · ${inputText}${solarNote}`;

  const stemIsYang = YANG_STEMS.includes(pillar.stem);
  const genderIsYang = gender === "male";
  const yy = YINYANG_TEXT[stemIsYang === genderIsYang ? "same" : "cross"];
  document.getElementById("yinyang-tag").textContent =
    `${stemIsYang ? "양(陽)" : "음(陰)"} 일간 · ${genderText} · ${yy.tag}`;
  document.getElementById("yinyang-text").textContent = yy.text;

  setPokemonImage(document.getElementById("result-img"), info.img, info.pokemonName);

  document.getElementById("result-user").textContent = `${userName}님의 파트너 포켓몬`;
  document.getElementById("result-title").textContent = info.pokemonName;
  document.getElementById("result-subtitle").textContent = info.subtitle;
  document.getElementById("result-desc").textContent = info.desc;

  const keywordContainer = document.getElementById("result-keywords");
  keywordContainer.innerHTML = info.keywords
    .map((kw) => `<span class="keyword-chip">${kw}</span>`)
    .join("");

  document.getElementById("result-card").className = `result-box ${info.theme}`;

  // 2. 천간합 파트너 세팅
  const hapPokemon = RESULT_DATA[info.hap.target];
  document.getElementById("hap-badge").textContent = info.hap.label;
  setPokemonImage(document.getElementById("hap-img"), hapPokemon.img, hapPokemon.pokemonName);
  document.getElementById("hap-name").textContent = hapPokemon.pokemonName;
  document.getElementById("hap-reason").textContent = info.hap.reason;

  // 3. 오행 상생 파트너 세팅
  const sangsaengPokemon = RESULT_DATA[info.sangsaeng.target];
  document.getElementById("sangsaeng-badge").textContent = info.sangsaeng.label;
  setPokemonImage(document.getElementById("sangsaeng-img"), sangsaengPokemon.img, sangsaengPokemon.pokemonName);
  document.getElementById("sangsaeng-name").textContent = sangsaengPokemon.pokemonName;
  document.getElementById("sangsaeng-reason").textContent = info.sangsaeng.reason;

  // 4. 오늘의 운세 세팅
  renderTodayFortune(pillar.stemIdx);

  // 화면 전환
  inputSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
});

document.getElementById("retry-btn").addEventListener("click", () => {
  document.getElementById("copy-msg").classList.add("hidden");
  resultSection.classList.add("hidden");
  inputSection.classList.remove("hidden");
});

document.getElementById("copy-btn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    document.getElementById("copy-msg").classList.remove("hidden");
  } catch {
    alert("주소창의 URL을 직접 복사해 주세요.");
  }
});

// 결과 카드 PNG 이미지 저장 (PC·모바일 호환 Blob 다운로드)
const saveImgBtn = document.getElementById("save-img-btn");
saveImgBtn.addEventListener("click", async () => {
  if (typeof html2canvas === "undefined") {
    alert("이미지 저장 기능을 불러오지 못했어요. 새로고침 후 다시 시도해 주세요.");
    return;
  }

  const target = document.getElementById("result-card");
  const userName = document.getElementById("user-name").value.trim() || "나의";
  const pokemonName = document.getElementById("result-title").textContent.trim() || "포켓몬";
  const fileName = `${userName}_파트너포켓몬_${pokemonName}.png`;

  const originalLabel = saveImgBtn.textContent;
  saveImgBtn.disabled = true;
  saveImgBtn.textContent = "이미지 생성 중...";

  try {
    const canvas = await html2canvas(target, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: "#ffffff"
    });

    await new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Blob creation failed"));
          return;
        }
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
        resolve();
      }, "image/png");
    });
  } catch (err) {
    alert("이미지 저장 중 오류가 발생했어요. 화면 캡처 기능을 이용해 주세요.");
  } finally {
    saveImgBtn.disabled = false;
    saveImgBtn.textContent = originalLabel;
  }
});
