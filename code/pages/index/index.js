// index.js
const { AUDIO_BASE_URL, QUALITY_OPTIONS, CURRENT_QUALITY } = require('../../utils/config.js');

Page({
  data: {
    // 音频元素列表
    audioElements: {},
    
    categories: [
      { id: 'all', name: '全部' },
      { id: 'nature', name: '自然' },
      { id: 'life', name: '生活' }
    ],
    currentCategory: 'all',
    isPlaying: false,
    showPanel: false,
    masterVolume: 80,
    timerDuration: 0,
    timerRemaining: 0,
    timerInterval: null,
    sounds: [
      {
        id: 'rain',
        name: '雨声',
        icon: 'cloud-rain-fill',
        category: 'nature',
        folder: 'Rain_fa-cloud-showers-heavy',
        variants: [
          { id: 'Rain', name: '雨声 1' },
          { id: 'Rain 2', name: '雨声 2' },
          { id: 'Rain 3', name: '雨声 3' },
          { id: 'Rain on the tent', name: '帐篷雨声' },
          { id: 'rain on the window', name: '窗上雨声' },
          { id: 'Rain over un umbrella', name: '伞上雨声' },
          { id: 'Rain with thunderstorm', name: '雷雨' }
        ],
        selected: false,
        volume: 80,
        paused: false,
        currentVariant: 0
      },
      {
        id: 'thunder',
        name: '雷声',
        icon: 'cloud-lightning-fill',
        category: 'nature',
        folder: 'Thunder_fa-bolt',
        variants: [
          { id: 'Thunder 2', name: '雷声 1' },
          { id: 'Thunder 3', name: '雷声 2' },
          { id: 'Thunderstorm with rain', name: '雷雨' }
        ],
        selected: false,
        volume: 80,
        paused: false,
        currentVariant: 0
      },
      {
        id: 'forest',
        name: '森林',
        icon: 'tree-fill',
        category: 'nature',
        folder: 'Forest_fa-tree',
        variants: [
          { id: 'Forest 1', name: '森林 1' },
          { id: 'Forest 2', name: '森林 2' },
          { id: 'Forest 3', name: '森林 3' },
          { id: 'Forest 4', name: '森林 4' },
          { id: 'Forest 5', name: '森林 5' }
        ],
        selected: false,
        volume: 80,
        paused: false,
        currentVariant: 0
      },
      {
        id: 'waves',
        name: '海浪',
        icon: 'water',
        category: 'nature',
        folder: 'Waves_fa-water',
        variants: [
          { id: 'Beach', name: '海浪 1' },
          { id: 'Beach 2', name: '海浪 2' },
          { id: 'Beach 3', name: '海浪 3' },
          { id: 'Coastal cave', name: '海岸洞穴' },
          { id: 'Rocky coast', name: '岩石海岸' },
          { id: 'Storm', name: '风暴' }
        ],
        selected: false,
        volume: 80,
        paused: false,
        currentVariant: 0
      },
      {
        id: 'birds',
        name: '鸟鸣',
        icon: 'twitter',
        category: 'nature',
        folder: 'Birdsong_fa-dove',
        variants: [
          { id: 'Birdsong 1', name: '鸟鸣 1' },
          { id: 'Birdsong 2', name: '鸟鸣 2' },
          { id: 'Birdsong 3', name: '鸟鸣 3' },
          { id: 'Birdsong 4', name: '鸟鸣 4' }
        ],
        selected: false,
        volume: 80,
        paused: false,
        currentVariant: 0
      },
      {
        id: 'fire',
        name: '篝火',
        icon: 'fire',
        category: 'nature',
        folder: 'Bonfire_fa-fire',
        variants: [
          { id: 'Bonfire 1', name: '篝火 1' },
          { id: 'Bonfire 2', name: '篝火 2' },
          { id: 'Bonfire 3', name: '篝火 3' },
          { id: 'Bonfire 4', name: '篝火 4' },
          { id: 'Bonfire 5', name: '篝火 5' },
          { id: 'Fireplace', name: '壁炉' },
          { id: 'Smouldering coals', name: '余烬' }
        ],
        selected: false,
        volume: 80,
        paused: false,
        currentVariant: 0
      },
      {
        id: 'stream',
        name: '溪流',
        icon: 'water',
        category: 'nature',
        folder: 'Stream_fa-bars-staggered',
        variants: [
          { id: 'Stream', name: '溪流' },
          { id: 'Stream 2', name: '溪流 2' },
          { id: 'Stream 3', name: '溪流 3' },
          { id: 'Cave stream', name: '洞穴溪流' },
          { id: 'Mountain creek', name: '山涧' }
        ],
        selected: false,
        volume: 80,
        paused: false,
        currentVariant: 0
      },
      {
        id: 'village',
        name: '乡村生活',
        icon: 'house-fill',
        category: 'life',
        folder: 'Country life_fa-house',
        variants: [
          { id: 'Country life', name: '生活 1' },
          { id: 'Country life 2', name: '生活 2' },
          { id: 'Country life 3', name: '生活 3' }
        ],
        selected: false,
        volume: 80,
        paused: false,
        currentVariant: 0
      },
      {
        id: 'wind',
        name: '风声',
        icon: 'wind',
        category: 'nature',
        folder: 'Wind_fa-wind',
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
        selected: false,
        volume: 80,
        paused: false,
        currentVariant: 0
      },
      {
        id: 'road',
        name: '道路',
        icon: 'signpost-2-fill',
        category: 'life',
        folder: 'Road_fa-road',
        variants: [
          { id: 'Road', name: '道路 1' },
          { id: 'Road 2', name: '道路 2' },
          { id: 'Snowy road', name: '雪路' },
          { id: 'Cars, trains', name: '火车' }
        ],
        selected: false,
        volume: 80,
        paused: false,
        currentVariant: 0
      },
      {
        id: 'frog',
        name: '青蛙',
        icon: 'bug-fill',
        category: 'nature',
        folder: 'Frog_fa-frog',
        variants: [
          { id: 'Frogs and cicadas', name: '青蛙和蝉 1' },
          { id: 'Frogs and cicadas 2', name: '青蛙和蝉 2' }
        ],
        selected: false,
        volume: 80,
        paused: false,
        currentVariant: 0
      },
      {
        id: 'night',
        name: '夜晚',
        icon: 'moon-stars-fill',
        category: 'nature',
        folder: 'Night_fa-moon',
        variants: [
          { id: 'Night', name: '夜晚 1' },
          { id: 'Night 2', name: '夜晚 2' },
          { id: 'Night in city', name: '城市夜晚 1' },
          { id: 'Night in city 2', name: '城市夜晚 2' }
        ],
        selected: false,
        volume: 80,
        paused: false,
        currentVariant: 0
      },
      {
        id: 'waterfall',
        name: '瀑布',
        icon: 'water',
        category: 'nature',
        folder: 'Waterfall_fa-mountains',
        variants: [
          { id: 'Waterfall', name: '瀑布 1' },
          { id: 'Waterfall 2', name: '瀑布 2' },
          { id: 'Underground waterfall', name: '地下瀑布' }
        ],
        selected: false,
        volume: 80,
        paused: false,
        currentVariant: 0
      }
    ],
    filteredSounds: [],
    selectedSounds: [],
    audioContext: null,
    audioSources: {}
  },

  onLoad: function() {
    console.log('页面加载');
    
    // 初始化音频上下文
    try {
      this.initAudioContext();
      console.log('音频上下文初始化成功');
    } catch (error) {
      console.error('音频上下文初始化失败:', error);
      wx.showToast({
        title: '音频初始化失败',
        icon: 'none'
      });
    }
    
    // 初始化过滤后的声音列表
    this.filterSounds();
    console.log('过滤后的声音列表:', this.data.filteredSounds);
  },

  onShow: function() {
    // 页面显示时，如果有正在播放的声音，恢复播放
    if (this.data.isPlaying) {
      this.resumeAllAudio();
    }
  },

  onHide: function() {
    // 页面隐藏时，暂停所有声音
    this.pauseAllAudio();
  },

  onUnload: function() {
    // 页面卸载时，停止所有声音和定时器
    this.stopAllAudio();
    this.clearTimer();
  },

  // 初始化音频上下文
  initAudioContext: function() {
    console.log('开始初始化音频上下文');
    
    // 创建音频实例字典，用于存储每个声音的音频实例
    const audioInstances = {};
    
    // 初始化每个声音的音频实例
    this.data.sounds.forEach(sound => {
      try {
        // 创建音频实例
        const audio = wx.createInnerAudioContext();
        
        // 使用当前选中的变体的音频地址
        const currentVariant = sound.variants[sound.currentVariant];
        // 构建音频URL
        const audioUrl = `${AUDIO_BASE_URL}${sound.folder}/${currentVariant.id}_${QUALITY_OPTIONS[CURRENT_QUALITY]}.m4a`;
        console.log(`设置音频源 [${sound.id}]:`, audioUrl);
        
        // 设置音频属性
        audio.src = audioUrl;
        audio.loop = true;
        audio.volume = sound.volume / 100 * (this.data.masterVolume / 100);
        
        audioInstances[sound.id] = audio;
        
        console.log(`音频实例创建成功 [${sound.id}]`);
      } catch (error) {
        console.error(`音频实例创建失败 [${sound.id}]:`, error);
        wx.showToast({
          title: '音频创建失败',
          icon: 'none'
        });
      }
    });
    
    this.audioInstances = audioInstances;
    console.log('音频上下文初始化完成');
  },

  // 根据分类过滤声音
  filterSounds: function() {
    let filtered = [];
    if (this.data.currentCategory === 'all') {
      filtered = this.data.sounds;
    } else {
      filtered = this.data.sounds.filter(sound => sound.category === this.data.currentCategory);
    }
    this.setData({
      filteredSounds: filtered
    });
  },

  // 切换分类
  switchCategory: function(e) {
    const category = e.currentTarget.dataset.category;
    this.setData({
      currentCategory: category
    }, () => {
      this.filterSounds();
    });
  },

  // 切换声音选择状态
  toggleSound: function(e) {
    const id = e.currentTarget.dataset.id;
    console.log('切换声音状态:', id);
    
    const sounds = this.data.sounds;
    const soundIndex = sounds.findIndex(sound => sound.id === id);
    
    if (soundIndex !== -1) {
      // 更新选中状态
      const selected = !sounds[soundIndex].selected;
      sounds[soundIndex].selected = selected;
      sounds[soundIndex].paused = false; // 重置暂停状态
      
      // 更新选中的声音列表
      let selectedSounds = [];
      if (selected) {
        console.log('选中声音:', sounds[soundIndex].name);
        // 添加到选中列表
        selectedSounds = [...this.data.selectedSounds, sounds[soundIndex]];
        
        // 确保音频实例存在
        if (!this.audioInstances || !this.audioInstances[id]) {
          console.log('重新初始化音频实例');
          this.initAudioContext();
        }
        
        // 加载并播放声音
        this.loadAndPlaySound(sounds[soundIndex]);
      } else {
        console.log('取消选中声音:', sounds[soundIndex].name);
        // 从选中列表中移除
        selectedSounds = this.data.selectedSounds.filter(sound => sound.id !== id);
        // 停止声音
        this.stopSound(id);
      }
      
      this.setData({
        sounds: sounds,
        filteredSounds: this.data.currentCategory === 'all' ? 
          sounds : 
          sounds.filter(sound => sound.category === this.data.currentCategory),
        selectedSounds: selectedSounds,
        isPlaying: selectedSounds.length > 0
      }, () => {
        console.log('更新后的选中声音列表:', this.data.selectedSounds);
      });
    }
  },

  // 阻止事件冒泡
  stopPropagation: function(e) {
    e.stopPropagation();
  },

  // 调整声音音量
  adjustVolume: function(e) {
    const id = e.currentTarget.dataset.id;
    const volume = e.detail.value;
    const sounds = this.data.sounds;
    const soundIndex = sounds.findIndex(sound => sound.id === id);
    
    if (soundIndex !== -1) {
      sounds[soundIndex].volume = volume;
      
      // 更新选中的声音列表
      const selectedSounds = this.data.selectedSounds.map(sound => {
        if (sound.id === id) {
          sound.volume = volume;
        }
        return sound;
      });
      
      this.setData({
        sounds: sounds,
        filteredSounds: this.data.currentCategory === 'all' ? 
          sounds : 
          sounds.filter(sound => sound.category === this.data.currentCategory),
        selectedSounds: selectedSounds
      });
      
      // 调整音频音量
      this.adjustSoundVolume(id, volume);
    }
  },

  // 调整已选声音的音量
  adjustSelectedVolume: function(e) {
    const id = e.currentTarget.dataset.id;
    const volume = e.detail.value;
    
    // 更新声音列表和选中的声音列表
    const sounds = this.data.sounds.map(sound => {
      if (sound.id === id) {
        sound.volume = volume;
      }
      return sound;
    });
    
    const selectedSounds = this.data.selectedSounds.map(sound => {
      if (sound.id === id) {
        sound.volume = volume;
      }
      return sound;
    });
    
    this.setData({
      sounds: sounds,
      filteredSounds: this.data.currentCategory === 'all' ? 
        sounds : 
        sounds.filter(sound => sound.category === this.data.currentCategory),
      selectedSounds: selectedSounds
    });
    
    // 调整音频音量
    this.adjustSoundVolume(id, volume);
  },

  // 调整主音量
  adjustMasterVolume: function(e) {
    const volume = e.detail.value;
    this.setData({
      masterVolume: volume
    });
    
    // 调整所有选中声音的音量
    this.data.selectedSounds.forEach(sound => {
      this.adjustSoundVolume(sound.id, sound.volume, volume);
    });
  },

  // 切换声音的播放/暂停状态
  toggleSoundPlayPause: function(e) {
    const id = e.currentTarget.dataset.id;
    const selectedSounds = this.data.selectedSounds;
    const soundIndex = selectedSounds.findIndex(sound => sound.id === id);
    
    if (soundIndex !== -1) {
      const paused = !selectedSounds[soundIndex].paused;
      selectedSounds[soundIndex].paused = paused;
      
      // 更新声音列表
      const sounds = this.data.sounds.map(sound => {
        if (sound.id === id) {
          sound.paused = paused;
        }
        return sound;
      });
      
      this.setData({
        sounds: sounds,
        filteredSounds: this.data.currentCategory === 'all' ? 
          sounds : 
          sounds.filter(sound => sound.category === this.data.currentCategory),
        selectedSounds: selectedSounds
      });
      
      // 暂停或恢复声音
      if (paused) {
        this.pauseSound(id);
      } else {
        this.resumeSound(id);
      }
    }
  },

  // 移除声音
  removeSound: function(e) {
    const id = e.currentTarget.dataset.id;
    
    // 从选中列表中移除
    const selectedSounds = this.data.selectedSounds.filter(sound => sound.id !== id);
    
    // 更新声音列表
    const sounds = this.data.sounds.map(sound => {
      if (sound.id === id) {
        sound.selected = false;
      }
      return sound;
    });
    
    this.setData({
      sounds: sounds,
      filteredSounds: this.data.currentCategory === 'all' ? 
        sounds : 
        sounds.filter(sound => sound.category === this.data.currentCategory),
      selectedSounds: selectedSounds,
      isPlaying: selectedSounds.length > 0 ? this.data.isPlaying : false
    });
    
    // 停止声音
    this.stopSound(id);
  },

  // 切换播放/暂停所有声音
  togglePlayPause: function() {
    if (this.data.selectedSounds.length === 0) {
      return;
    }
    
    const isPlaying = !this.data.isPlaying;
    this.setData({
      isPlaying: isPlaying
    });
    
    if (isPlaying) {
      this.resumeAllAudio();
    } else {
      this.pauseAllAudio();
    }
  },

  // 显示播放控制面板
  showPlayerPanel: function() {
    this.setData({
      showPanel: true
    });
  },

  // 隐藏播放控制面板
  hidePlayerPanel: function() {
    this.setData({
      showPanel: false
    });
  },

  // 设置定时器
  setTimer: function(e) {
    const duration = parseInt(e.currentTarget.dataset.duration);
    
    // 清除现有定时器
    this.clearTimer();
    
    if (duration > 0) {
      // 设置新的定时器
      const timerRemaining = duration * 60; // 转换为秒
      this.setData({
        timerDuration: duration,
        timerRemaining: timerRemaining
      });
      
      // 启动定时器
      this.startTimer();
    } else {
      // 关闭定时器
      this.setData({
        timerDuration: 0,
        timerRemaining: 0
      });
    }
  },

  // 启动定时器
  startTimer: function() {
    if (this.data.timerRemaining <= 0) {
      return;
    }
    
    const timerInterval = setInterval(() => {
      let remaining = this.data.timerRemaining - 1;
      
      if (remaining <= 0) {
        // 定时结束，停止所有声音
        this.stopAllAudio();
        this.clearTimer();
        this.setData({
          isPlaying: false,
          timerRemaining: 0
        });
      } else {
        this.setData({
          timerRemaining: remaining
        });
      }
    }, 1000);
    
    this.setData({
      timerInterval: timerInterval
    });
  },

  // 清除定时器
  clearTimer: function() {
    if (this.data.timerInterval) {
      clearInterval(this.data.timerInterval);
      this.setData({
        timerInterval: null
      });
    }
  },

  // 切换音源变体
  switchVariant: function(soundId, variantIndex) {
    const sounds = this.data.sounds;
    const soundIndex = sounds.findIndex(sound => sound.id === soundId);
    
    if (soundIndex !== -1) {
      const sound = sounds[soundIndex];
      sound.currentVariant = variantIndex;
      
      // 如果声音正在播放，需要重新加载并播放新的变体
      const audioSource = this.data.audioSources[soundId];
      if (audioSource && audioSource.playing) {
        this.stopSound(soundId);
        this.loadAndPlaySound(sound);
      }
      
      this.setData({
        sounds: sounds,
        filteredSounds: this.data.currentCategory === 'all' ? 
          sounds : 
          sounds.filter(sound => sound.category === this.data.currentCategory)
      });
    }
  },

  // 加载并播放声音
  loadAndPlaySound: function(sound) {
    console.log('开始加载并播放声音:', sound.name);
    console.log('开始加载并播放声音:', sound.currentVariant);

    const audio = this.audioInstances[sound.id];
    if (audio) {
      try {
        // 构建音频URL
        const variant = sound.variants[sound.currentVariant];
        const audioUrl = `${AUDIO_BASE_URL}${sound.folder}/${variant.id}_${QUALITY_OPTIONS[CURRENT_QUALITY]}.m4a`;
        console.log('Audio URL:', audioUrl);
        
        // 设置音频源
        this.setData({
          [`audioElements.${sound.id}.src`]: audioUrl
        });
        
        // 设置音量
        const volume = sound.volume / 100 * (this.data.masterVolume / 100);
        this.setData({
          [`audioElements.${sound.id}.volume`]: volume
        });
        
        // 播放音频
        audio.play();
        console.log('音频开始播放:', sound.name);
      } catch (error) {
        console.error('播放音频失败:', error);
        wx.showToast({
          title: '播放失败',
          icon: 'none'
        });
      }
    } else {
      console.error('未找到音频实例:', sound.id);
    }
  },

  // 停止声音
  stopSound: function(id) {
    console.log('停止声音:', id);
    const audio = this.audioInstances[id];
    if (audio) {
      try {
        audio.seek(0);
        audio.pause();
        console.log('声音已停止:', id);
      } catch (error) {
        console.error('停止声音失败:', error);
      }
    } else {
      console.error('未找到音频实例:', id);
    }
    
    // 更新音频源状态
    const audioSources = this.data.audioSources;
    if (audioSources[id]) {
      delete audioSources[id];
      
      this.setData({
        audioSources: audioSources
      });
    }
  },

  // 暂停声音
  pauseSound: function(id) {
    console.log('暂停声音:', id);
    const audio = this.audioInstances[id];
    if (audio) {
      try {
        audio.pause();
        console.log('声音已暂停:', id);
      } catch (error) {
        console.error('暂停声音失败:', error);
      }
    } else {
      console.error('未找到音频实例:', id);
    }
    
    // 更新音频源状态
    const audioSources = this.data.audioSources;
    if (audioSources[id]) {
      audioSources[id].playing = false;
      
      this.setData({
        audioSources: audioSources
      });
    }
  },

  // 恢复声音
  resumeSound: function(id) {
    console.log('恢复声音:', id);
    const audio = this.audioInstances[id];
    if (audio) {
      try {
        audio.play();
        console.log('声音已恢复播放:', id);
      } catch (error) {
        console.error('恢复播放失败:', error);
      }
    } else {
      console.error('未找到音频实例:', id);
    }
    
    // 更新音频源状态
    const audioSources = this.data.audioSources;
    if (audioSources[id]) {
      audioSources[id].playing = true;
      
      this.setData({
        audioSources: audioSources
      });
    }
  },

  // 调整声音音量
  adjustSoundVolume: function(id, volume, masterVolume) {
    console.log(`调整声音音量: ID ${id}, 音量 ${volume}`);
    
    // 获取对应的音频实例
    const audio = this.audioInstances[id];
    if (audio) {
      // 计算实际音量（考虑主音量）
      const master = masterVolume !== undefined ? masterVolume : this.data.masterVolume;
      const actualVolume = volume / 100 * (master / 100);
      
      // 设置音频音量
      if (audio.volume !== undefined) {
        audio.volume = actualVolume;
      }
    }
    
    // 更新音频源状态
    const audioSources = {...this.data.audioSources};
    if (!audioSources[id]) {
      audioSources[id] = {};
    }
    audioSources[id].volume = volume;
    
    // 更新声音列表中的音量
    const sounds = this.data.sounds.map(sound => {
      if (sound.id === id) {
        return {...sound, volume: volume};
      }
      return sound;
    });
    
    // 更新选中的声音列表中的音量
    const selectedSounds = this.data.selectedSounds.map(sound => {
      if (sound.id === id) {
        return {...sound, volume: volume};
      }
      return sound;
    });
    
    this.setData({
      audioSources,
      sounds,
      selectedSounds,
      filteredSounds: this.data.currentCategory === 'all' ? 
        sounds : 
        sounds.filter(sound => sound.category === this.data.currentCategory)
    });
  },

  // 暂停所有声音
  pauseAllAudio: function() {
    console.log('暂停所有声音');
    
    // 暂停所有音频实例
    for (const id in this.audioInstances) {
      const audio = this.audioInstances[id];
      if (audio) {
        audio.pause();
      }
    }
    
    // 更新音频源状态
    const audioSources = this.data.audioSources;
    for (const id in audioSources) {
      audioSources[id].playing = false;
    }
    
    this.setData({
      audioSources: audioSources
    });
  },

  // 恢复所有声音
  resumeAllAudio: function() {
    console.log('恢复所有声音');
    
    // 恢复所有已选中的音频实例
    const selectedSounds = this.data.selectedSounds;
    for (const sound of selectedSounds) {
      if (!sound.paused) {
        const audio = this.audioInstances[sound.id];
        if (audio) {
          audio.play();
        }
      }
    }
    
    // 更新音频源状态
    const audioSources = this.data.audioSources;
    for (const id in audioSources) {
      if (!this.data.sounds.find(s => s.id == id && s.paused)) {
        audioSources[id].playing = true;
      }
    }
    
    this.setData({
      audioSources: audioSources
    });
  },

  // 停止所有声音
  stopAllAudio: function() {
    console.log('停止所有声音');
    
    // 停止所有音频实例
    for (const id in this.audioInstances) {
      const audio = this.audioInstances[id];
      if (audio) {
        audio.stop();
      }
    }
    
    this.setData({
      audioSources: {},
      isPlaying: false
    });
  },

  // 阻止事件冒泡
  stopPropagation: function(e) {
    // 阻止事件冒泡，防止点击滑块时触发父元素的点击事件
  }
});
