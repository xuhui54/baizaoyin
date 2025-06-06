// discover.js
Page({
  data: {
    currentCategory: 'all',
    isPlaying: false,
    showPanel: false,
    masterVolume: 80,
    timerDuration: 0,
    timerRemaining: 0,
    timerInterval: null,
    searchQuery: '',
    featuredSounds: [
      {
        id: 101,
        name: '雨夜咖啡厅',
        description: '雨声与咖啡厅环境的完美融合',
        cover: '/images/covers/rainy_cafe.jpg',
        audio: '/sounds/collections/rainy_cafe.mp3',
        category: 'featured',
        selected: false,
        volume: 80,
        paused: false
      },
      {
        id: 102,
        name: '森林晨曦',
        description: '清晨森林中的鸟鸣与微风',
        cover: '/images/covers/forest_morning.jpg',
        audio: '/sounds/collections/forest_morning.mp3',
        category: 'featured',
        selected: false,
        volume: 80,
        paused: false
      },
      {
        id: 103,
        name: '海边日落',
        description: '傍晚海浪拍打沙滩的声音',
        cover: '/images/covers/beach_sunset.jpg',
        audio: '/sounds/collections/beach_sunset.mp3',
        category: 'featured',
        selected: false,
        volume: 80,
        paused: false
      }
    ],
    popularSounds: [
      {
        id: 1,
        name: '雨声',
        icon: '/images/sounds/rain.png',
        audio: '/sounds/rain.mp3',
        category: 'rain',
        selected: false,
        volume: 80,
        paused: false
      },
      {
        id: 3,
        name: '森林',
        icon: '/images/sounds/forest.png',
        audio: '/sounds/forest.mp3',
        category: 'nature',
        selected: false,
        volume: 80,
        paused: false
      },
      {
        id: 4,
        name: '海浪',
        icon: '/images/sounds/waves.png',
        audio: '/sounds/waves.mp3',
        category: 'nature',
        selected: false,
        volume: 80,
        paused: false
      },
      {
        id: 7,
        name: '咖啡厅',
        icon: '/images/sounds/cafe.png',
        audio: '/sounds/cafe.mp3',
        category: 'city',
        selected: false,
        volume: 80,
        paused: false
      },
      {
        id: 5,
        name: '鸟鸣',
        icon: '/images/sounds/birds.png',
        audio: '/sounds/birds.mp3',
        category: 'animal',
        selected: false,
        volume: 80,
        paused: false
      },
      {
        id: 9,
        name: '钢琴',
        icon: '/images/sounds/piano.png',
        audio: '/sounds/piano.mp3',
        category: 'instrument',
        selected: false,
        volume: 80,
        paused: false
      }
    ],
    collections: [
      {
        id: 201,
        name: '专注学习',
        cover: '/images/collections/study.jpg',
        soundCount: 5
      },
      {
        id: 202,
        name: '深度睡眠',
        cover: '/images/collections/sleep.jpg',
        soundCount: 6
      },
      {
        id: 203,
        name: '放松冥想',
        cover: '/images/collections/meditation.jpg',
        soundCount: 4
      },
      {
        id: 204,
        name: '自然之声',
        cover: '/images/collections/nature.jpg',
        soundCount: 8
      }
    ],
    selectedSounds: [],
    audioContext: null,
    audioSources: {}
  },

  onLoad: function() {
    // 初始化音频上下文
    this.initAudioContext();
    
    // 获取全局数据
    this.getGlobalData();
  },

  onShow: function() {
    // 页面显示时，如果有正在播放的声音，恢复播放
    if (this.data.isPlaying) {
      this.resumeAllAudio();
    }
    
    // 获取全局数据
    this.getGlobalData();
  },

  onHide: function() {
    // 页面隐藏时，暂停所有声音
    this.pauseAllAudio();
    
    // 保存全局数据
    this.saveGlobalData();
  },

  onUnload: function() {
    // 页面卸载时，停止所有声音和定时器
    this.stopAllAudio();
    this.clearTimer();
    
    // 保存全局数据
    this.saveGlobalData();
  },

  // 初始化音频上下文
  initAudioContext: function() {
    // 创建音频实例字典，用于存储每个声音的音频实例
    const audioInstances = {};
    
    // 初始化每个声音的音频实例
    this.data.sounds.forEach(sound => {
      const audio = wx.createInnerAudioContext();
      audio.src = sound.audio;
      audio.loop = true; // 循环播放
      audio.volume = sound.volume / 100 * (this.data.masterVolume / 100);
      audioInstances[sound.id] = audio;
    });
    
    this.audioInstances = audioInstances;
  },

  // 获取全局数据
  getGlobalData: function() {
    // 从全局数据中获取已选声音和播放状态
    // 这里需要通过getApp()获取全局数据
    const app = getApp();
    if (app.globalData && app.globalData.selectedSounds) {
      this.setData({
        selectedSounds: app.globalData.selectedSounds,
        isPlaying: app.globalData.isPlaying || false,
        masterVolume: app.globalData.masterVolume || 80,
        timerDuration: app.globalData.timerDuration || 0,
        timerRemaining: app.globalData.timerRemaining || 0
      });
      
      // 更新声音选中状态
      this.updateSoundsSelectedState();
    }
  },

  // 保存全局数据
  saveGlobalData: function() {
    // 将当前状态保存到全局数据
    const app = getApp();
    if (app.globalData) {
      app.globalData.selectedSounds = this.data.selectedSounds;
      app.globalData.isPlaying = this.data.isPlaying;
      app.globalData.masterVolume = this.data.masterVolume;
      app.globalData.timerDuration = this.data.timerDuration;
      app.globalData.timerRemaining = this.data.timerRemaining;
    }
  },

  // 更新声音选中状态
  updateSoundsSelectedState: function() {
    const selectedIds = this.data.selectedSounds.map(sound => sound.id);
    
    // 更新精选推荐声音的选中状态
    const featuredSounds = this.data.featuredSounds.map(sound => {
      sound.selected = selectedIds.includes(sound.id);
      return sound;
    });
    
    // 更新热门声音的选中状态
    const popularSounds = this.data.popularSounds.map(sound => {
      sound.selected = selectedIds.includes(sound.id);
      return sound;
    });
    
    this.setData({
      featuredSounds: featuredSounds,
      popularSounds: popularSounds
    });
  },

  // 搜索输入
  onSearchInput: function(e) {
    this.setData({
      searchQuery: e.detail.value
    });
    
    // 这里可以添加搜索逻辑
  },

  // 切换分类
  switchCategory: function(e) {
    const category = e.currentTarget.dataset.category;
    this.setData({
      currentCategory: category
    });
    
    // 这里可以添加根据分类过滤内容的逻辑
  },

  // 切换声音选择状态
  toggleSound: function(e) {
    const id = e.currentTarget.dataset.id;
    let sound = null;
    let soundType = '';
    
    // 查找声音
    const featuredSound = this.data.featuredSounds.find(s => s.id === id);
    if (featuredSound) {
      sound = featuredSound;
      soundType = 'featured';
    } else {
      const popularSound = this.data.popularSounds.find(s => s.id === id);
      if (popularSound) {
        sound = popularSound;
        soundType = 'popular';
      }
    }
    
    if (sound) {
      // 更新选中状态
      const selected = !sound.selected;
      sound.selected = selected;
      
      // 更新选中的声音列表
      let selectedSounds = [];
      if (selected) {
        // 添加到选中列表
        selectedSounds = [...this.data.selectedSounds, sound];
        // 加载并播放声音
        this.loadAndPlaySound(sound);
      } else {
        // 从选中列表中移除
        selectedSounds = this.data.selectedSounds.filter(s => s.id !== id);
        // 停止声音
        this.stopSound(id);
      }
      
      // 更新数据
      if (soundType === 'featured') {
        const featuredSounds = this.data.featuredSounds.map(s => {
          if (s.id === id) {
            s.selected = selected;
          }
          return s;
        });
        this.setData({ featuredSounds });
      } else if (soundType === 'popular') {
        const popularSounds = this.data.popularSounds.map(s => {
          if (s.id === id) {
            s.selected = selected;
          }
          return s;
        });
        this.setData({ popularSounds });
      }
      
      this.setData({
        selectedSounds: selectedSounds,
        isPlaying: selectedSounds.length > 0 ? this.data.isPlaying : false
      });
      
      // 保存全局数据
      this.saveGlobalData();
    }
  },

  // 导航到更多内容
  navigateToMore: function(e) {
    const section = e.currentTarget.dataset.section;
    wx.showToast({
      title: `查看更多${section === 'featured' ? '精选推荐' : section === 'popular' ? '热门白噪音' : '白噪音合集'}`,
      icon: 'none'
    });
    
    // 这里可以添加导航逻辑
  },

  // 导航到合集详情
  navigateToCollection: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({
      title: `查看合集ID: ${id}`,
      icon: 'none'
    });
    
    // 这里可以添加导航逻辑
  },

  // 调整已选声音的音量
  adjustSelectedVolume: function(e) {
    const id = e.currentTarget.dataset.id;
    const volume = e.detail.value;
    
    // 更新选中的声音列表
    const selectedSounds = this.data.selectedSounds.map(sound => {
      if (sound.id === id) {
        sound.volume = volume;
      }
      return sound;
    });
    
    // 更新精选推荐和热门声音的音量
    const featuredSounds = this.data.featuredSounds.map(sound => {
      if (sound.id === id) {
        sound.volume = volume;
      }
      return sound;
    });
    
    const popularSounds = this.data.popularSounds.map(sound => {
      if (sound.id === id) {
        sound.volume = volume;
      }
      return sound;
    });
    
    this.setData({
      selectedSounds,
      featuredSounds,
      popularSounds
    });
    
    // 调整音频音量
    this.adjustSoundVolume(id, volume);
    
    // 保存全局数据
    this.saveGlobalData();
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
    
    // 保存全局数据
    this.saveGlobalData();
  },

  // 切换声音的播放/暂停状态
  toggleSoundPlayPause: function(e) {
    const id = e.currentTarget.dataset.id;
    const selectedSounds = this.data.selectedSounds;
    const soundIndex = selectedSounds.findIndex(sound => sound.id === id);
    
    if (soundIndex !== -1) {
      const paused = !selectedSounds[soundIndex].paused;
      selectedSounds[soundIndex].paused = paused;
      
      // 更新精选推荐和热门声音的暂停状态
      const featuredSounds = this.data.featuredSounds.map(sound => {
        if (sound.id === id) {
          sound.paused = paused;
        }
        return sound;
      });
      
      const popularSounds = this.data.popularSounds.map(sound => {
        if (sound.id === id) {
          sound.paused = paused;
        }
        return sound;
      });
      
      this.setData({
        selectedSounds,
        featuredSounds,
        popularSounds
      });
      
      // 暂停或恢复声音
      if (paused) {
        this.pauseSound(id);
      } else {
        this.resumeSound(id);
      }
      
      // 保存全局数据
      this.saveGlobalData();
    }
  },

  // 移除声音
  removeSound: function(e) {
    const id = e.currentTarget.dataset.id;
    
    // 从选中列表中移除
    const selectedSounds = this.data.selectedSounds.filter(sound => sound.id !== id);
    
    // 更新精选推荐和热门声音的选中状态
    const featuredSounds = this.data.featuredSounds.map(sound => {
      if (sound.id === id) {
        sound.selected = false;
      }
      return sound;
    });
    
    const popularSounds = this.data.popularSounds.map(sound => {
      if (sound.id === id) {
        sound.selected = false;
      }
      return sound;
    });
    
    this.setData({
      selectedSounds,
      featuredSounds,
      popularSounds,
      isPlaying: selectedSounds.length > 0 ? this.data.isPlaying : false
    });
    
    // 停止声音
    this.stopSound(id);
    
    // 保存全局数据
    this.saveGlobalData();
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
    
    // 保存全局数据
    this.saveGlobalData();
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
    
    // 保存全局数据
    this.saveGlobalData();
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
        
        // 保存全局数据
        this.saveGlobalData();
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

  // 加载并播放声音
  loadAndPlaySound: function(sound) {
    console.log(`加载并播放声音: ${sound.name}`);
    
    // 获取对应的音频实例
    const audio = this.audioInstances[sound.id];
    if (audio) {
      // 设置音量并播放
      audio.volume = sound.volume / 100 * (this.data.masterVolume / 100);
      audio.play();
      
      // 更新音频源状态
      const audioSources = this.data.audioSources;
      audioSources[sound.id] = {
        playing: true,
        volume: sound.volume / 100 * (this.data.masterVolume / 100)
      };
      
      this.setData({
        audioSources: audioSources,
        isPlaying: true
      });
    }
  },

  // 停止声音
  stopSound: function(id) {
    console.log(`停止声音: ID ${id}`);
    
    // 获取对应的音频实例
    const audio = this.audioInstances[id];
    if (audio) {
      // 停止播放
      audio.stop();
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
    console.log(`暂停声音: ID ${id}`);
    
    // 获取对应的音频实例
    const audio = this.audioInstances[id];
    if (audio) {
      // 暂停播放
      audio.pause();
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
    console.log(`恢复声音: ID ${id}`);
    
    // 获取对应的音频实例
    const audio = this.audioInstances[id];
    if (audio) {
      // 恢复播放
      audio.play();
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
      audio.volume = actualVolume;
    }
    
    // 更新音频源状态
    const audioSources = this.data.audioSources;
    if (audioSources[id]) {
      const master = masterVolume !== undefined ? masterVolume : this.data.masterVolume;
      audioSources[id].volume = volume / 100 * (master / 100);
      
      this.setData({
        audioSources: audioSources
      });
    }
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
  }
});