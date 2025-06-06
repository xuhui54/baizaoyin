// 音效数据
const sounds = [
    
    // 背景
    {
        id: 'waves',
        name: '海浪',
        icon: 'water',
        category: 'background',  // 改为 background
        variants: [
            { id: 'Beach', name: '海浪 1' },
            { id: 'Beach 2', name: '海浪 2' },
            { id: 'Beach 3', name: '海浪 3' },
            { id: 'Coastal cave', name: '海岸洞穴' },
            { id: 'Rocky coast', name: '岩石海岸' },
            { id: 'Storm', name: '风暴' }
        ],
        folder: 'Waves_fa-water',
        loop: true,
        volume: 0.5
    },
    {
        id: 'birds',
        name: '鸟鸣',
        icon: 'twitter',
        category: 'background',  // 改为 background
        variants: [
            { id: 'Birdsong 1', name: '鸟鸣 1' },
            { id: 'Birdsong 2', name: '鸟鸣 2' },
            { id: 'Birdsong 3', name: '鸟鸣 3' },
            { id: 'Birdsong 4', name: '鸟鸣 4' }
        ],
        folder: 'Birdsong_fa-dove',
        loop: true,
        volume: 0.5
    },
    {
        id: 'fire',
        name: '篝火',
        icon: 'fire',
        category: 'background',  // 改为 background
        variants: [
            { id: 'Bonfire 1', name: '篝火 1' },
            { id: 'Bonfire 2', name: '篝火 2' },
            { id: 'Bonfire 3', name: '篝火 3' },
            { id: 'Bonfire 4', name: '篝火 4' },
            { id: 'Bonfire 5', name: '篝火 5' },
            { id: 'Fireplace', name: '壁炉' },
            { id: 'Smouldering coals', name: '余烬' }
        ],
        folder: 'Bonfire_fa-fire',
        loop: true,
        volume: 0.5
    },
    {
        id: 'rain',
        name: '雨声',
        icon: 'cloud-rain-fill',
        category: 'background',  // 改为 background
        variants: [
            { id: 'Rain', name: '雨声 1' },
            { id: 'Rain 2', name: '雨声 2' },
            { id: 'Rain 3', name: '雨声 3' },
            { id: 'Rain on the tent', name: '帐篷雨声' },
            { id: 'rain on the window', name: '窗上雨声' },
            { id: 'Rain over un umbrella', name: '伞上雨声' },
            { id: 'Rain with thunderstorm', name: '雷雨' }
        ],
        folder: 'Rain_fa-cloud-showers-heavy',
        loop: true,
        volume: 0.5
    },
    {
        id: 'stream',
        name: '溪流',
        icon: 'water',
        category: 'background',  // 改为 background
        variants: [
            { id: 'Stream', name: '溪流' },
            { id: 'Stream 2', name: '溪流 2' },
            { id: 'Stream 3', name: '溪流 3' },
            { id: 'Cave stream', name: '洞穴溪流' },
            { id: 'Mountain creek', name: '山涧' }
        ],
        folder: 'Stream_fa-bars-staggered',
        loop: true,
        volume: 0.5
    },
    {
        id: 'village',
        name: '乡村生活',
        icon: 'house-fill',
        category: 'background',  // 改为 background
        variants: [
            { id: 'Country life', name: '生活 1' },
            { id: 'Country life 2', name: '生活 2' },
            { id: 'Country life 3', name: '生活 3' }
        ],
        folder: 'Country life_fa-house',
        loop: true,
        volume: 0.5
    },
    {
        id: 'wind',
        name: '风声',
        icon: 'wind',
        category: 'background',  // 改为 background
        variants: [
            { id: 'Light', name: '微风' },
            { id: 'Medium', name: '中风' },
            { id: 'Medium 2', name: '中风 2' },
            { id: 'Strong', name: '强风' },
            { id: 'Howling', name: '呼啸' },
            { id: 'Whistling', name: '啸叫' },
            { id: 'Ominous', name: '阴森' },
            { id: 'Desert', name: '沙漠'},
            { id: 'Far', name: '远方' }
        ],
        folder: 'Wind_fa-wind',
        loop: true,
        volume: 0.5
    },
    {
        id: 'forest',
        name: '森林',
        icon: 'tree-fill',
        category: 'background',  // 改为 background
        variants: [
            { id: 'Forest 1', name: '森林 1' },
            { id: 'Forest 2', name: '森林 2' },
            { id: 'Forest 3', name: '森林 3' },
            { id: 'Forest 4', name: '森林 4' },
            { id: 'Forest 5', name: '森林 5' }
        ],
        folder: 'Forest_fa-tree',
        loop: true,
        volume: 0.5
    },
    {
        id: 'road',
        name: '道路',
        icon: 'signpost-2-fill',
        category: 'background',  // 改为 background
        variants: [
            { id: 'Road', name: '道路 1' },
            { id: 'Road 2', name: '道路 2' },
            { id: 'Snowy road', name: '雪路' },
            { id: 'Cars, trains', name: '火车' }
        ],
        folder: 'Road_fa-road',
        loop: true,
        volume: 0.5
    },
    {
        id: 'frog',
        name: '青蛙',
        icon: 'bug-fill',
        category: 'background',  // 改为 background
        variants: [
            { id: 'Frogs and cicadas', name: '青蛙和蝉 1' },
            { id: 'Frogs and cicadas 2', name: '青蛙和蝉 2' }
        ],
        folder: 'Frog_fa-frog',
        loop: true,
        volume: 0.5
    },
    {
        id: 'night',
        name: '夜晚',
        icon: 'moon-stars-fill',
        category: 'background',  // 改为 background
        variants: [
            { id: 'Night', name: '夜晚 1' },
            { id: 'Night 2', name: '夜晚 2' },
            { id: 'Night in city', name: '城市夜晚 1' },
            { id: 'Night in city 2', name: '城市夜晚 2' }
        ],
        folder: 'Night_fa-moon',
        loop: true,
        volume: 0.5
    },
    {
        id: 'thunder',
        name: '雷声',
        icon: 'cloud-lightning-fill',
        category: 'background',  // 改为 background
        variants: [
            { id: 'Thunder 2', name: '雷声 1' },
            { id: 'Thunder 3', name: '雷声 2' },
            { id: 'Thunderstorm with rain', name: '雷雨' }
        ],
        folder: 'Thunder_fa-bolt',
        loop: true,
        volume: 0.5
    },
    {
        id: 'waterfall',
        name: '瀑布',
        icon: 'water',
        category: 'background',  // 改为 background
        variants: [
            { id: 'Waterfall', name: '瀑布 1' },
            { id: 'Waterfall 2', name: '瀑布 2' },
            { id: 'Underground waterfall', name: '地下瀑布' }
        ],
        folder: 'Waterfall_fa-mountains',
        loop: true,
        volume: 0.5
    },
];

// 音频质量选项
const QUALITY_OPTIONS = {
    high: '_320.m4a',
    medium: '_128.m4a',
    low: '_64.m4a'
};

// 当前选择的音质
let currentQuality = 'low';

// 预设场景
const presets = {
    work: {
        name: '工作',
        sounds: {
            'rain': 0.4,          // 雨声（会自动选择窗上的雨声）
            'lofi_chill': 0.3     // lofi 轻松
        }
    },
    sleep: {
        name: '助眠',
        sounds: {
            'rain': 0.4,          // 雨声
            'wind': 0.2,          // 风声
            'waves': 0.3,         // 海浪
            'white_noise': 0.1,   // 白噪音
            'stream': 0.2         // 溪流
        }
    },
    meditation: {
        name: '冥想',
        sounds: {
            'forest': 0.3,        // 森林
            'birds': 0.2,         // 鸟鸣
            'waves': 0.2,         // 海浪
            'stream': 0.2,        // 溪流
            'wind': 0.1           // 风声
        }
    }
};

// 音效上下文和音源
let audioContext;
let audioSources = {};
let audioBuffers = {};
let activeAudios = new Set();
let currentCategory = 'all';

// 更新 DOM 元素引用
const soundsGrid = document.getElementById('sounds-grid');
const masterVolume = document.getElementById('master-volume');
const timerSelect = document.getElementById('timer-select');
const activeSoundsDisplay = document.getElementById('active-sounds');
const darkModeToggle = document.getElementById('darkModeToggle');
const notification = document.getElementById('notification');
const timerDisplay = document.getElementById('timer-display');

// 景主题状态
let currentTheme = localStorage.getItem('bgTheme') || 'default';
let currentAnimation = null;

// 添加定时器变量
let timerInterval;
let timerEndTime;

// 声音可视化相关变量
let analyser;
let dataArray;
let visualizerCanvas;
let visualizerCtx;

// 专注计时器相关变量
let focusInterval;
let focusTime = 25 * 60; // 25分钟
let isFocusing = false;

// 全局变量
let isAllPaused = false;
let pausedSounds = new Set();

// 番茄钟相关变量
let pomodoroPhase = 'work'; // 'work' | 'shortBreak' | 'longBreak'
let pomodoroCount = 0; // 今日完成的番数
let cycleCount = 0; // 当前循环次数（4次一个大循环）

// 番茄钟配置
const POMODORO_CONFIG = {
    work: 25 * 60, // 25分钟工作
    shortBreak: 5 * 60, // 5分钟短休息
    longBreak: 15 * 60, // 15分钟长休息
    cyclesBeforeLongBreak: 4 // 4个番茄后长休息
};

// 动画视频相关变量
const animations = [
    { src: 'videos/rain.mp4', nightSrc: 'videos/rain_night.mp4', type: 'video/mp4', name: '雨景' },
    { src: 'videos/forest.mp4', nightSrc: 'videos/forest_night.mp4', type: 'video/mp4', name: '森林' },
    { src: 'videos/waves.mp4', nightSrc: 'videos/waves_night.mp4', type: 'video/mp4', name: '海浪' },
    { src: 'videos/fireplace.mp4', nightSrc: 'videos/fireplace_night.mp4', type: 'video/mp4', name: '壁炉' },
    { src: 'videos/clouds.mp4', nightSrc: 'videos/clouds_night.mp4', type: 'video/mp4', name: '云海' }
];
let currentAnimationIndex = 0;
let isNightMode = false;

// 创建提醒音效
function createNotificationSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime); // A5音
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1);
}

// 渲染音卡片
function renderSoundCards() {
    const filteredSounds = currentCategory === 'all' 
        ? sounds 
        : sounds.filter(sound => sound.category === currentCategory);

    soundsGrid.innerHTML = filteredSounds.map(sound => `
        <div class="sound-item rounded-xl p-4">
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                    <i class="bi bi-${sound.icon} text-lg text-gray-600 dark:text-gray-400 mr-2"></i>
                    <span class="font-medium text-gray-900 dark:text-white">${sound.name}</span>
                </div>
                <div class="flex items-center gap-2">
                    ${sound.category !== 'lofi' ? `
                        <select class="sound-variant bg-transparent border border-gray-200 dark:border-gray-700 rounded-md text-sm px-2 py-1" data-sound-id="${sound.id}" onchange="changeVariant('${sound.id}', this.value)">
                            ${sound.variants.map(variant => 
                                `<option value="${variant.id}">${variant.name}</option>`
                            ).join('')}
                        </select>
                    ` : ''}
                    <button onclick="toggleSound('${sound.id}')" class="play-btn w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30" data-sound-id="${sound.id}">
                        <i class="bi bi-${activeAudios.has(sound.id) ? 'pause' : 'play'}-fill text-lg leading-none"></i>
                    </button>
                </div>
            </div>
            <input type="range" 
                class="sound-volume w-full h-1.5 rounded-lg appearance-none cursor-pointer" 
                min="0" 
                max="1" 
                step="0.01" 
                value="${sound.volume}"
                data-sound-id="${sound.id}"
                oninput="updateVolume('${sound.id}', this.value)">
        </div>
    `).join('');

    // 恢复正在播放的声音的音量值
    activeAudios.forEach(soundId => {
        const volumeSlider = document.querySelector(`.sound-volume[data-sound-id="${soundId}"]`);
        if (volumeSlider && audioSources[soundId] && audioSources[soundId].audio) {
            volumeSlider.value = audioSources[soundId].audio.volume / masterVolume.value;
        }
    });
}

// 切换声音变体
async function changeVariant(soundId, variantId) {
    if (activeAudios.has(soundId)) {
        // 如果声音正在播放，停止当前声音并播放新变体
        stopSound(soundId);
        await playSound(soundId);
        const btn = document.querySelector(`.play-btn[data-sound-id="${soundId}"]`);
        if (btn) {
            btn.innerHTML = '<i class="bi bi-pause-fill"></i>';
        }
    }
}

// 播放声音
async function playSound(soundId) {
    const sound = sounds.find(s => s.id === soundId);
    if (!sound) return;

    try {
        const variantSelect = document.querySelector(`.sound-variant[data-sound-id="${soundId}"]`);
        const variant = variantSelect ? sound.variants.find(v => v.id === variantSelect.value) : sound.variants[0];
        
        // 根据声音类别决定音频路径
        //https://xxhh.online/static/
        const audioPath = sound.category === 'lofi'
            ? `audio/Lofi/${sound.folder}/${variant.id}.m4a`  // lofi 类别使用固定格式
            : sound.category === 'place'
                ? `audio/Locations/${sound.folder}/${variant.id}${QUALITY_OPTIONS[currentQuality]}`  // 场所类别在 Locations 目录下
            : sound.category === 'background'
                ? `https://xxhh.online/static/audio/Background/${sound.folder}/${variant.id}${QUALITY_OPTIONS[currentQuality]}`  // 背景类别在 Background 目录下
            : sound.category === 'ambient'
                ? `audio/Tweak/${sound.folder}/${variant.id}${QUALITY_OPTIONS[currentQuality]}`  // 环境类别在 Tweak 目录下
            : sound.category === 'noise'
                ? `audio/Color noise/${sound.folder}/${variant.id}${QUALITY_OPTIONS[currentQuality]}`  // 噪声类别在 Color noise 目录下
            : sound.category === 'asmr'
                ? `audio/ASMR/${sound.folder}/${variant.id}${QUALITY_OPTIONS[currentQuality]}`  // ASMR 类别在 ASMR 目录下
            : `audio/Others/${sound.folder}/${variant.id}${QUALITY_OPTIONS[currentQuality]}`; // 其他类别在 Others 目录下

        

        const audio = new Audio(audioPath);
        audio.loop = sound.loop;
        
        const volumeSlider = document.querySelector(`.sound-volume[data-sound-id="${soundId}"]`);
        audio.volume = volumeSlider.value * masterVolume.value;
        
        await audio.play();
        
        audioSources[soundId] = { audio };
        activeAudios.add(soundId);

        // 当有声音开始播放时，更新全部暂停按钮状态
        if (activeAudios.size > 0 && isAllPaused) {
            const toggleAllBtn = document.getElementById('toggleAll');
            toggleAllBtn.innerHTML = '<i class="bi bi-pause-circle text-xl"></i>';
            toggleAllBtn.title = '全部暂停 [Space]';
            isAllPaused = false;
        }

    } catch (error) {
        
        showNotification('播放失败', `无法加载音频文件: ${sound.name}`);
    }
}

// 更新音频质量
function updateAudioQuality(quality) {
    if (QUALITY_OPTIONS[quality]) {
        currentQuality = quality;
        // 重新加载所有正在播放的非 lofi 类别的声音
        const playingSounds = new Set(activeAudios);
        stopAllSounds();
        playingSounds.forEach(soundId => {
            const sound = sounds.find(s => s.id === soundId);
            if (sound && sound.category !== 'lofi') {  // 只重新加载非 lofi 声音
                playSound(soundId);
                const btn = document.querySelector(`.play-btn[data-sound-id="${soundId}"]`);
                if (btn) {
                    btn.innerHTML = '<i class="bi bi-pause-fill"></i>';
                }
            }
        });
        showNotification('音质已更改', `已切换到${quality === 'high' ? '高音质' : quality === 'medium' ? '中音质' : '低音质'}`);
    }
}

// 初始化分类按钮
function initCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            currentCategory = button.textContent.includes('全部') ? 'all' :
                            button.textContent.includes('场所') ? 'place' :
                            button.textContent.includes('背景') ? 'background' :
                            button.textContent.includes('环境') ? 'ambient' :
                            button.textContent.includes('其他') ? 'other' :
                            button.textContent.includes('Lofi') ? 'lofi' : 'all';

            renderSoundCards();
        });
    });
}

// 初始化应用 async
async function init() {
    // 渲染声音卡片
    renderSoundCards();

    // 初始化主音量
    masterVolume.addEventListener('input', updateMasterVolume);

    // 初始化定时器
    timerSelect.addEventListener('change', startTimer);

    // 初始化深色模式
    initDarkMode();

    // 初始化预设按钮
    initPresetButtons();

    // 初始化分类按钮
    initCategoryButtons();

    // 初始化背景主题
    initBackgroundTheme();

    // 初始化专注计时器
    initFocusTimer();
    
    // 初始化混音保存功能
    initMixSaving();

    // 初始化键盘快捷键和播放控制
    initPlaybackControls();

    // 初始化动画控制
    // initAnimationControl();
    
     // 初始化电子木鱼
    // initWoodenFish();
}

// 初始化背景主题
function initBackgroundTheme() {
    const bgThemeBtn = document.getElementById('bgTheme');
    const bgThemeModal = document.getElementById('bgThemeModal');
    const closeBgThemeModal = document.getElementById('closeBgThemeModal');
    const themeButtons = document.querySelectorAll('.bg-theme-btn');

    bgThemeBtn.addEventListener('click', () => {
        bgThemeModal.classList.remove('hidden');
    });

    closeBgThemeModal.addEventListener('click', () => {
        bgThemeModal.classList.add('hidden');
    });

    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            setBackgroundTheme(theme);
            bgThemeModal.classList.add('hidden');
        });
    });

    // 应用保存的主题
    setBackgroundTheme(currentTheme);
}

// 设置背景主题
function setBackgroundTheme(theme) {
    const bg = document.getElementById('dynamic-bg');
    
    // 清除当前动画
    if (currentAnimation) {
        clearInterval(currentAnimation);
    }
    bg.innerHTML = '';
    
    currentTheme = theme;
    localStorage.setItem('bgTheme', theme);

    switch (theme) {
        case 'gradient':
            bg.style.background = 'linear-gradient(-45deg, #1a365d, #2d3748)';
            bg.style.backgroundSize = '400% 400%';
            bg.style.animation = 'none';
            break;
            
        case 'particles':
            bg.style.background = '';
            initParticles();
            break;
            
        case 'waves':
            bg.style.background = '';
            initWaves();
            break;
            
        default:
            bg.style.background = '';
            bg.style.animation = '';
    }
}

// 初始化粒子效果
function initParticles() {
    const bg = document.getElementById('dynamic-bg');
    bg.innerHTML = '<div id="particles-js"></div>';
    
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#7c3aed' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#7c3aed',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
    });
}

// 初始化波浪效果
function initWaves() {
    const bg = document.getElementById('dynamic-bg');
    const wave = document.createElement('div');
    wave.className = 'wave';
    bg.appendChild(wave);
}

// 根据声音类型设置动态背景
function setDynamicBackground(soundId) {
    if (!activeAudios.has(soundId)) return;

    const bg = document.getElementById('dynamic-bg');
    bg.innerHTML = '';

    switch (soundId) {
        case 'rain':
            createRaindrops();
            break;
        case 'waves':
            createWaves();
            break;
        // 以添加更多音类型的背景效果
    }
}

// 创建雨滴效果
function createRaindrops() {
    const bg = document.getElementById('dynamic-bg');
    for (let i = 0; i < 100; i++) {
        const raindrop = document.createElement('div');
        raindrop.className = 'rain';
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        raindrop.style.opacity = Math.random();
        bg.appendChild(raindrop);
    }
}

// 创建波浪效果
function createWaves() {
    const bg = document.getElementById('dynamic-bg');
    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.className = 'wave';
        wave.style.bottom = `${i * 40}px`;
        wave.style.opacity = 1 - (i * 0.3);
        wave.style.animationDelay = `${i * 0.5}s`;
        bg.appendChild(wave);
    }
}

// 更新播放声音的函数
const originalPlaySound = playSound;
playSound = function(soundId) {
    originalPlaySound(soundId);
    setDynamicBackground(soundId);
};

// 更新停止声音的函数
const originalStopSound = stopSound;
stopSound = function(soundId) {
    originalStopSound(soundId);
    if (activeAudios.size === 0) {
        setBackgroundTheme(currentTheme);
    }
};

// 深模式
function initDarkMode() {
    // 检测系统主题和本地存储
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        darkModeToggle.checked = true;
    }

    // 监听切换
    darkModeToggle.addEventListener('change', () => {
        const root = document.documentElement;
        if (darkModeToggle.checked) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
}

// 应用预设
function applyPreset(preset) {
    // 停止所有当前播放的声音
    stopAllSounds();
    
    // 应用预设的声音组合
    Object.entries(preset.sounds).forEach(([soundId, volume]) => {
        const volumeSlider = document.querySelector(`.sound-volume[data-sound-id="${soundId}"]`);
        if (volumeSlider) {
            volumeSlider.value = volume;
            
            // 如果是雨声，选择窗上的雨声
            if (soundId === 'rain') {
                const variantSelect = document.querySelector(`.sound-variant[data-sound-id="${soundId}"]`);
                if (variantSelect) {
                    const windowRainOption = Array.from(variantSelect.options)
                        .find(option => option.text.includes('窗上'));
                    if (windowRainOption) {
                        variantSelect.value = windowRainOption.value;
                    }
                }
            }
            
            playSound(soundId);
            const btn = document.querySelector(`.play-btn[data-sound-id="${soundId}"]`);
            if (btn) {
                btn.innerHTML = '<i class="bi bi-pause-fill text-lg leading-none"></i>';
            }
        }
    });
    
    showNotification('应用预设', `已切换到${preset.name}模式`);
}

// 停止所有声音
function stopAllSounds() {
    activeAudios.forEach(soundId => {
        const btn = document.querySelector(`.play-btn[data-sound-id="${soundId}"]`);
        btn.innerHTML = '<i class="bi bi-play-fill"></i>';
        stopSound(soundId);
    });
    // 当没有声音播放时，将全部暂停按钮设置为播放状态
    const toggleAllBtn = document.getElementById('toggleAll');
    toggleAllBtn.innerHTML = '<i class="bi bi-play-circle text-xl"></i>';
    toggleAllBtn.title = '继续播放 [Space]';
    isAllPaused = true;
}

// 更新在播放显示
function updateActiveSoundsDisplay() {
    if (activeAudios.size === 0) {
        activeSoundsDisplay.textContent = '无';
        return;
    }
    
    const activeNames = Array.from(activeAudios)
        .map(id => sounds.find(s => s.id === id).name)
        .join('、');
    
    activeSoundsDisplay.textContent = activeNames;
}

// 更新定时器相关代码
function startTimer() {
    clearInterval(timerInterval);
    
    const minutes = parseInt(timerSelect.value);
    if (minutes === 0) {
        timerDisplay.textContent = '--:--';
        return;
    }
    
    timerEndTime = Date.now() + minutes * 60 * 1000;
    
    updateTimerDisplay();
    showNotification('定时开始', `将在 ${minutes} 分钟后停止播放`);
    
    timerInterval = setInterval(() => {
        if (Date.now() >= timerEndTime) {
            stopAllSounds();
            clearInterval(timerInterval);
            timerSelect.value = "0";
            timerDisplay.textContent = '--:--';
            showNotification('定时结束', '白噪音已自动停止');
        } else {
            updateTimerDisplay();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const remaining = Math.max(0, timerEndTime - Date.now());
    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// 播放/暂停声音
function toggleSound(soundId) {
    const btn = document.querySelector(`.play-btn[data-sound-id="${soundId}"]`);
    const isPlaying = activeAudios.has(soundId);

    if (isPlaying) {
        stopSound(soundId);
        btn.innerHTML = '<i class="bi bi-play-fill"></i>';
    } else {
        playSound(soundId);
        btn.innerHTML = '<i class="bi bi-pause-fill"></i>';
    }
}

// 停止声音
function stopSound(soundId) {
    if (audioSources[soundId]) {
        if (audioSources[soundId].audio) {
            audioSources[soundId].audio.pause();
            audioSources[soundId].audio = null;
        }
        delete audioSources[soundId];
        activeAudios.delete(soundId);
    }
}

// 更新音量
function updateVolume(soundId, value) {
    if (audioSources[soundId] && audioSources[soundId].audio) {
        audioSources[soundId].audio.volume = value * masterVolume.value;
    }
}

// 更新主音量
function updateMasterVolume() {
    const value = masterVolume.value;
    activeAudios.forEach(soundId => {
        const volumeSlider = document.querySelector(`.sound-volume[data-sound-id="${soundId}"]`);
        if (audioSources[soundId] && audioSources[soundId].audio) {
            audioSources[soundId].audio.volume = volumeSlider.value * value;
        }
    });
}

// 显示通知
function showNotification(title, message) {
    const notificationTitle = document.getElementById('notification-title');
    const notificationMessage = document.getElementById('notification-message');
    
    notificationTitle.textContent = title;
    notificationMessage.textContent = message;
    
    notification.style.transform = 'translate(-50%, 0)';
    notification.style.opacity = '1';
    
    setTimeout(() => {
        notification.style.transform = 'translate(-50%, -100%)';
        notification.style.opacity = '0';
    }, 3000);
}

// 初始化预设按钮
function initPresetButtons() {
    const presetButtons = document.querySelectorAll('.preset-btn');
    presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const presetId = btn.dataset.preset;
            if (presets[presetId]) {
                // 移除其他预设按钮的激活状态
                presetButtons.forEach(b => {
                    b.classList.remove('active');
                    b.classList.remove('bg-primary-50');
                    b.classList.remove('dark:bg-primary-900/20');
                    b.classList.remove('text-primary-600');
                    b.classList.remove('dark:text-primary-400');
                    b.classList.add('bg-white');
                    b.classList.add('dark:bg-gray-800');
                    b.classList.add('text-gray-700');
                    b.classList.add('dark:text-gray-300');
                });
                
                // 添加当前预设按钮的激活状态
                btn.classList.add('active');
                btn.classList.remove('bg-white');
                btn.classList.remove('dark:bg-gray-800');
                btn.classList.remove('text-gray-700');
                btn.classList.remove('dark:text-gray-300');
                btn.classList.add('bg-primary-50');
                btn.classList.add('dark:bg-primary-900/20');
                btn.classList.add('text-primary-600');
                btn.classList.add('dark:text-primary-400');
                
                applyPreset(presets[presetId]);
                showNotification('应用预设', `已切换到${presets[presetId].name}模式`);
            }
        });
    });
}

// 初始化专注计时器
function initFocusTimer() {
    const startBtn = document.getElementById('startFocus');
    const pauseBtn = document.getElementById('pauseFocus');
    const resetBtn = document.getElementById('resetFocus');
    const skipBtn = document.getElementById('skipPhase');
    const display = document.getElementById('focus-timer');
    const phaseText = document.getElementById('phaseText');
    const pomodoroCountDisplay = document.getElementById('pomodoroCount');
    
    // 从localStorage加载今日番茄数
    const today = new Date().toDateString();
    const savedData = JSON.parse(localStorage.getItem('pomodoroData') || '{}');
    if (savedData.date === today) {
        pomodoroCount = savedData.count;
        pomodoroCountDisplay.textContent = pomodoroCount;
    }
    
    function updateDisplay() {
        const minutes = Math.floor(focusTime / 60);
        const seconds = focusTime % 60;
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function updatePhaseIndicator() {
        const indicators = document.querySelectorAll('#cycleIndicator span');
        indicators.forEach((indicator, index) => {
            if (index < cycleCount) {
                indicator.classList.remove('bg-primary-200', 'dark:bg-primary-900');
                indicator.classList.add('bg-primary-600', 'dark:bg-primary-400');
            } else {
                indicator.classList.remove('bg-primary-600', 'dark:bg-primary-400');
                indicator.classList.add('bg-primary-200', 'dark:bg-primary-900');
            }
        });

        // 更新阶段文本
        phaseText.textContent = pomodoroPhase === 'work' ? '工作中' :
                               pomodoroPhase === 'shortBreak' ? '短休息' : '长休息';
    }

    function savePomodoroCount() {
        const today = new Date().toDateString();
        localStorage.setItem('pomodoroData', JSON.stringify({
            date: today,
            count: pomodoroCount
        }));
    }

    function moveToNextPhase() {
        if (pomodoroPhase === 'work') {
            // 工作阶段结束
            pomodoroCount++;
            pomodoroCountDisplay.textContent = pomodoroCount;
            savePomodoroCount();
            cycleCount++;
            
            if (cycleCount >= POMODORO_CONFIG.cyclesBeforeLongBreak) {
                // 进入长休息
                pomodoroPhase = 'longBreak';
                focusTime = POMODORO_CONFIG.longBreak;
                cycleCount = 0;
            } else {
                // 进入短休息
                pomodoroPhase = 'shortBreak';
                focusTime = POMODORO_CONFIG.shortBreak;
            }
        } else {
            // 休息结束，开始新的工作阶段
            pomodoroPhase = 'work';
            focusTime = POMODORO_CONFIG.work;
        }
        
        updatePhaseIndicator();
        updateDisplay();
        showNotification(
            pomodoroPhase === 'work' ? '开始新的番茄钟' :
            pomodoroPhase === 'shortBreak' ? '来休息一下吧' : '来个长休息吧',
            pomodoroPhase === 'work' ? '保持专注，你可以的！' :
            '休息一下，放松身心'
        );
    }
    
    startBtn.addEventListener('click', () => {
        if (!isFocusing) {
            isFocusing = true;
            focusInterval = setInterval(() => {
                if (focusTime > 0) {
                    focusTime--;
                    updateDisplay();
                } else {
                    clearInterval(focusInterval);
                    isFocusing = false;
                    // 播放提醒音效
                    createNotificationSound();
                    moveToNextPhase();
                    startBtn.classList.remove('bg-gray-200', 'dark:bg-gray-700');
                    startBtn.classList.add('bg-primary-600');
                }
            }, 1000);
            startBtn.classList.add('bg-gray-200', 'dark:bg-gray-700');
            startBtn.classList.remove('bg-primary-600');
        }
    });
    
    pauseBtn.addEventListener('click', () => {
        clearInterval(focusInterval);
        isFocusing = false;
        startBtn.classList.remove('bg-gray-200', 'dark:bg-gray-700');
        startBtn.classList.add('bg-primary-600');
    });
    
    resetBtn.addEventListener('click', () => {
        clearInterval(focusInterval);
        isFocusing = false;
        pomodoroPhase = 'work';
        focusTime = POMODORO_CONFIG.work;
        cycleCount = 0;
        updateDisplay();
        updatePhaseIndicator();
        startBtn.classList.remove('bg-gray-200', 'dark:bg-gray-700');
        startBtn.classList.add('bg-primary-600');
    });

    skipBtn.addEventListener('click', () => {
        if (isFocusing) {
            clearInterval(focusInterval);
            isFocusing = false;
        }
        moveToNextPhase();
        startBtn.classList.remove('bg-gray-200', 'dark:bg-gray-700');
        startBtn.classList.add('bg-primary-600');
    });

    // 添加键盘快捷键
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        if (e.key.toLowerCase() === 's') {
            e.preventDefault();
            skipBtn.click();
        }
    });

    // 初始化显示
    updatePhaseIndicator();
    updateDisplay();
}

// 初始化混音保存功能
function initMixSaving() {
    const saveMixBtn = document.getElementById('saveMixBtn');
    const mixPanel = document.getElementById('mixPanel');
    const saveMix = document.getElementById('saveMix');
    const mixNameInput = document.getElementById('mixName');
    const savedMixesSelect = document.getElementById('savedMixes');
    
    // 加载已保存的混音
    const savedMixes = JSON.parse(localStorage.getItem('savedMixes') || '{}');
    Object.keys(savedMixes).forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        savedMixesSelect.appendChild(option);
    });
    
    // 切换面板显示/隐藏
    saveMixBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mixPanel.classList.toggle('hidden');
    });
    
    // 点击其他地方关闭面板
    // document.addEventListener('click', (e) => {
    //     if (!mixPanel.contains(e.target) && e.target !== saveMixBtn) {
    //         mixPanel.classList.add('hidden');
    //     }
    // });
    
    // 当前混音
    saveMix.addEventListener('click', () => {
        const name = mixNameInput.value.trim();
        if (!name) {
            showNotification('保存失败', '请输入混音名称');
            return;
        }
        
        const currentMix = {};
        activeAudios.forEach(soundId => {
            const volumeSlider = document.querySelector(`.sound-volume[data-sound-id="${soundId}"]`);
            currentMix[soundId] = parseFloat(volumeSlider.value);
        });
        
        if (Object.keys(currentMix).length === 0) {
            showNotification('保存失败', '请先播放一些声音');
            return;
        }
        
        const savedMixes = JSON.parse(localStorage.getItem('savedMixes') || '{}');
        
        // 如更新已有混音，先询问
        if (savedMixes[name] && !confirm(`混音"${name}"已存在，是否覆盖？`)) {
            return;
        }
        
        savedMixes[name] = currentMix;
        localStorage.setItem('savedMixes', JSON.stringify(savedMixes));
        
        // 更新选择框
        const existingOption = Array.from(savedMixesSelect.options).find(opt => opt.value === name);
        if (!existingOption) {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            savedMixesSelect.appendChild(option);
        }
        
        mixNameInput.value = '';
        showNotification('保存成功', `已保存混音"${name}"`);
        mixPanel.classList.add('hidden');
    });
    
    // 加载已保存的混音
    savedMixesSelect.addEventListener('change', () => {
        const name = savedMixesSelect.value;
        if (!name) return;
        
        const savedMixes = JSON.parse(localStorage.getItem('savedMixes') || '{}');
        const mix = savedMixes[name];
        
        // 停止所有声音
        stopAllSounds();
        
        // 应用保存的混音
        Object.entries(mix).forEach(([soundId, volume]) => {
            const volumeSlider = document.querySelector(`.sound-volume[data-sound-id="${soundId}"]`);
            if (volumeSlider) {
                volumeSlider.value = volume;
                playSound(soundId);
                const btn = document.querySelector(`.play-btn[data-sound-id="${soundId}"]`);
                if (btn) {
                    btn.innerHTML = '<i class="bi bi-pause-fill text-lg leading-none"></i>';
                }
            }
        });
        
        showNotification('加载成功', `已加载混音"${name}"`);
        mixPanel.classList.add('hidden');
        savedMixesSelect.value = ''; // 重置选择框
    });
    
    // ESC关闭面板
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mixPanel.classList.contains('hidden')) {
            mixPanel.classList.add('hidden');
        }
    });
}

// 初始化键盘快捷键和播放控制
function initPlaybackControls() {
    const toggleAllBtn = document.getElementById('toggleAll');
    const randomPlayBtn = document.getElementById('randomPlay');

    // 初始化时设置为播放状态
    toggleAllBtn.innerHTML = '<i class="bi bi-play-circle text-xl"></i>';
    toggleAllBtn.title = '继续播放 [Space]';
    isAllPaused = true;

    // 全部暂停/继续
    toggleAllBtn.addEventListener('click', toggleAllSounds);

    // 随机播放
    randomPlayBtn.addEventListener('click', playRandomSounds);

    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
        // 如果正在输入，不触发快捷键
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        switch (e.key.toLowerCase()) {
            case ' ': // 空格键：暂停/继续所有声音
                e.preventDefault();
                toggleAllSounds();
                break;
            case 'r': // R键：随机播放
                e.preventDefault();
                playRandomSounds();
                break;
            case 'm': // M键：静音/取消静音
                e.preventDefault();
                toggleMute();
                break;
            case 'escape': // ESC键：停止所有声音
                e.preventDefault();
                stopAllSounds();
                break;
            // 数字键1-9：快速调整音量
            case '1': case '2': case '3': case '4': case '5': 
            case '6': case '7': case '8': case '9':
                e.preventDefault();
                const volume = parseInt(e.key) / 10;
                setMasterVolume(volume);
                break;
            case '0': // 0键：音量最大
                e.preventDefault();
                setMasterVolume(1);
                break;
        }
    });
}

// 暂停/继续所有声音
function toggleAllSounds() {
    const toggleAllBtn = document.getElementById('toggleAll');
    
    if (activeAudios.size === 0) {
        return; // 如果没有正在播放的声音，不执行任何操作
    }
    
    if (!isAllPaused) {
        // 记录当前播放的声音并暂停
        pausedSounds = new Set(activeAudios);
        activeAudios.forEach(soundId => {
            if (audioSources[soundId] && audioSources[soundId].audio) {
                audioSources[soundId].audio.pause();
                // 更新声音卡片的播放按钮为播放状态
                const btn = document.querySelector(`.play-btn[data-sound-id="${soundId}"]`);
                if (btn) {
                    btn.innerHTML = '<i class="bi bi-play-fill"></i>';
                }
            }
        });
        toggleAllBtn.innerHTML = '<i class="bi bi-play-circle text-xl"></i>';
        toggleAllBtn.title = '继续播放 [Space]';
    } else {
        // 恢复之前暂停的声音
        pausedSounds.forEach(soundId => {
            if (audioSources[soundId] && audioSources[soundId].audio) {
                audioSources[soundId].audio.play();
                // 更新声音卡片的播放按钮为暂停状态
                const btn = document.querySelector(`.play-btn[data-sound-id="${soundId}"]`);
                if (btn) {
                    btn.innerHTML = '<i class="bi bi-pause-fill"></i>';
                }
            } else {
                playSound(soundId).then(() => {
                    const btn = document.querySelector(`.play-btn[data-sound-id="${soundId}"]`);
                    if (btn) {
                        btn.innerHTML = '<i class="bi bi-pause-fill"></i>';
                    }
                });
            }
        });
        toggleAllBtn.innerHTML = '<i class="bi bi-pause-circle text-xl"></i>';
        toggleAllBtn.title = '全部暂停 [Space]';
    }
    
    isAllPaused = !isAllPaused;
}

// 随机播放
function playRandomSounds() {
    // 停止当前播放的声音
    stopAllSounds();
    
    // 随机选择2-4个声音播放
    const count = Math.floor(Math.random() * 3) + 2;
    const availableSounds = [...sounds];
    
    for (let i = 0; i < count; i++) {
        if (availableSounds.length === 0) break;
        
        // 随机选择一个声音
        const index = Math.floor(Math.random() * availableSounds.length);
        const sound = availableSounds.splice(index, 1)[0];
        
        // 随机音量 (0.3-0.7)
        const volume = Math.random() * 0.4 + 0.3;
        
        // 播放声音
        const volumeSlider = document.querySelector(`.sound-volume[data-sound-id="${sound.id}"]`);
        if (volumeSlider) {
            volumeSlider.value = volume;
            playSound(sound.id);
            const btn = document.querySelector(`.play-btn[data-sound-id="${sound.id}"]`);
            if (btn) {
                btn.innerHTML = '<i class="bi bi-pause-fill"></i>';
            }
        }
    }
    
    showNotification('随机播放', `正在播放 ${count} 个随机声音`);
}

// 设置主音量
function setMasterVolume(value) {
    masterVolume.value = value;
    updateMasterVolume();
    showNotification('音量调整', `音量已设置为 ${Math.round(value * 100)}%`);
}

// 静音/取消静音
function toggleMute() {
    const currentVolume = parseFloat(masterVolume.value);
    if (currentVolume > 0) {
        previousVolume = currentVolume;
        setMasterVolume(0);
    } else {
        setMasterVolume(previousVolume || 1);
    }
}

// 初始化动画控制
function initAnimationControl() {
    // const video = document.getElementById('relaxVideo');
    // const videoCard = video.parentElement;
    const dayNightBtn = document.getElementById('dayNightBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const fullscreenContainer = document.getElementById('fullscreenContainer');
    const fullscreenVideo = document.getElementById('fullscreenVideo');
    const fullscreenDayNightBtn = document.getElementById('fullscreenDayNightBtn');
    const exitFullscreenBtn = document.getElementById('exitFullscreenBtn');
    
    // 确保视频自动播放
    video.play().catch(err => {
        console.log('视频自动播放初始化失败:', err);
        // 当用户与页面交互时尝试播放
        document.addEventListener('click', () => {
            video.play().catch(err => console.log('视频播放失败:', err));
        }, { once: true });
    });
    
    // 切换日夜模式
    function toggleDayNight() {
        isNightMode = !isNightMode;
        const icon = isNightMode ? '<i class="bi bi-moon-fill"></i>' : '<i class="bi bi-sun-fill"></i>';
        dayNightBtn.innerHTML = icon;
        fullscreenDayNightBtn.innerHTML = icon;
        
        const currentAnimation = animations[currentAnimationIndex];
        const newSrc = isNightMode ? currentAnimation.nightSrc : currentAnimation.src;
        video.src = newSrc;
        fullscreenVideo.src = newSrc;
        
        video.play().catch(err => console.log('视频播放失败:', err));
        fullscreenVideo.play().catch(err => console.log('视频播放失败:', err));
        
        showNotification('切换模式', `已切换到${isNightMode ? '夜间' : '日间'}模式`);
    }
    
    // 进入全屏模式
    function enterFullscreen() {
        fullscreenContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        // 同步视频进度和播放状态
        fullscreenVideo.currentTime = video.currentTime;
        fullscreenVideo.play();
    }
    
    // 退出全屏模式
    function exitFullscreen() {
        fullscreenContainer.classList.add('hidden');
        document.body.style.overflow = '';
        // 同步视频进度
        video.currentTime = fullscreenVideo.currentTime;
    }
    
    // 事件监听
    dayNightBtn.addEventListener('click', toggleDayNight);
    fullscreenDayNightBtn.addEventListener('click', toggleDayNight);
    
    fullscreenBtn.addEventListener('click', enterFullscreen);
    exitFullscreenBtn.addEventListener('click', exitFullscreen);
    
    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        if (e.key.toLowerCase() === 'f') {
            // F 键切换全屏
            if (fullscreenContainer.classList.contains('hidden')) {
                enterFullscreen();
            } else {
                exitFullscreen();
            }
        } else if (e.key === 'Escape' && !fullscreenContainer.classList.contains('hidden')) {
            // ESC 键退出全屏
            exitFullscreen();
        }
    });
    
    // 在切换动画时同步更新全屏视频
    const originalSetAnimation = window.setAnimation;
    window.setAnimation = function(index) {
        originalSetAnimation(index);
        const currentAnimation = animations[currentAnimationIndex];
        fullscreenVideo.src = isNightMode ? currentAnimation.nightSrc : currentAnimation.src;
        fullscreenVideo.play().catch(err => console.log('全屏视频播放失败:', err));
    };
}

function initWoodenFish() {
    // 获取DOM元素
    const woodenFish = document.getElementById('woodenFish');
    const autoWoodenFish = document.getElementById('autoWoodenFish');
    const resetWoodenFish = document.getElementById('resetWoodenFish');
    const meritCount = document.getElementById('meritCount');
    
    // 从localStorage加载今日功德
    const today = new Date().toDateString();
    const savedData = JSON.parse(localStorage.getItem('woodenFishData') || '{}');
    let merit = savedData.date === today ? savedData.count : 0;
    meritCount.textContent = merit;
    
    // 创建Web Audio Context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // 创建木鱼音效
    function createWoodenFishSound() {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    // 保存功德
    function saveMerit() {
        localStorage.setItem('woodenFishData', JSON.stringify({
            date: today,
            count: merit
        }));
    }
    
    // 敲击木鱼
    function hitWoodenFish() {
        merit++;
        meritCount.textContent = merit;
        createWoodenFishSound();
        saveMerit();
        
        // 添加按下动画效果
        woodenFish.classList.add('scale-95');
        setTimeout(() => {
            woodenFish.classList.remove('scale-95');
        }, 100);
        
        // 创建并显示功德+1的浮动文字效果
        const meritText = document.createElement('div');
        meritText.textContent = '+1';
        meritText.className = 'absolute text-primary-600 dark:text-primary-400 text-xl font-bold pointer-events-none';
        meritText.style.top = '50%';
        meritText.style.left = '50%';
        meritText.style.transform = 'translate(-50%, -50%)';
        meritText.style.animation = 'meritFloat 1s ease-out forwards';
        woodenFish.appendChild(meritText);
        
        setTimeout(() => {
            meritText.remove();
        }, 1000);
    }
    
    // 自动敲击功能
    let autoHitInterval;
    function toggleAutoHit() {
        if (autoHitInterval) {
            clearInterval(autoHitInterval);
            autoHitInterval = null;
            autoWoodenFish.innerHTML = '<i class="bi bi-play-fill"></i>';
            autoWoodenFish.title = '自动敲击';
        } else {
            autoHitInterval = setInterval(hitWoodenFish, 1000);
            autoWoodenFish.innerHTML = '<i class="bi bi-pause-fill"></i>';
            autoWoodenFish.title = '停止自动';
        }
    }
    
    // 重置功德
    function resetMerit() {
        if (confirm('确定要重置今日功德吗？')) {
            merit = 0;
            meritCount.textContent = merit;
            saveMerit();
            showNotification('重置功德', '功德已重置');
        }
    }
    
    // 事件监听
    woodenFish.addEventListener('click', hitWoodenFish);
    autoWoodenFish.addEventListener('click', toggleAutoHit);
    resetWoodenFish.addEventListener('click', resetMerit);
    
    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        if (e.key.toLowerCase() === 'k') {
            e.preventDefault();
            hitWoodenFish();
        }
    });
}

// 初始化应用
window.addEventListener('load', init); 