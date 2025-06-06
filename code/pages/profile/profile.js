// profile.js
Page({
  data: {
    userInfo: {
      avatarUrl: '',
      nickName: '',
      userId: '123456'
    },
    stats: {
      favoriteCount: 12,
      historyCount: 28,
      createdCount: 3
    },
    isPlaying: false,
    showPanel: false,
    masterVolume: 80,
    timerDuration: 0,
    timerRemaining: 0,
    timerInterval: null,
    selectedSounds: [],
    audioContext: null,
    audioSources: {}
  },

  onLoad: function() {
    // 初始化音频上下文
    this.initAudioContext();
    
    // 获取用户信息
    this.getUserInfo();
    
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

  // 获取用户信息
  getUserInfo: function() {
    // 这里可以添加获取用户信息的逻辑
    // 由于微信小程序的限制，这里只是模拟用户信息
    // 实际应用中，可以使用wx.getUserProfile获取用户信息
    
    // 模拟用户未登录状态
    this.setData({
      userInfo: {
        avatarUrl: '',
        nickName: '',
        userId: ''
      }
    });
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

  // 登录
  login: function() {
    // 这里可以添加登录逻辑
    // 由于微信小程序的限制，这里只是模拟登录
    wx.showToast({
      title: '登录功能暂未实现',
      icon: 'none'
    });
    
    // 模拟登录成功
    this.setData({
      userInfo: {
        avatarUrl: '/images/default_avatar.png',
        nickName: '用户123456',
        userId: '123456'
      }
    });
  },

  // 编辑头像
  editAvatar: function() {
    // 这里可以添加编辑头像逻辑
    // 由于微信小程序的限制，这里只是模拟编辑头像
    wx.showToast({
      title: '编辑头像功能暂未实现',
      icon: 'none'
    });
  },

  // 导航到其他页面
  navigateTo: function(e) {
    const url = e.currentTarget.dataset.url;
    // 这里可以添加导航逻辑
    // 由于微信小程序的限制，这里只是模拟导航
    wx.showToast({
      title: `导航到${url}`,
      icon: 'none'
    });
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
    
    this.setData({
      selectedSounds
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
      
      this.setData({
        selectedSounds
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
    
    this.setData({
      selectedSounds,
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
    
    // 获取对应的音频实例并停止播放
    const audio = this.audioInstances[id];
    if (audio) {
      audio.stop();
    }
    
    // 更新音频源状态
    const audioSources = this.data.audioSources;
    if (audioSources[id]) {
      delete audioSources[id];
      
      this.setData({
        audioSources: audioSources,
        isPlaying: Object.keys(audioSources).length > 0
      });
    }
  },

  // 暂停声音
  pauseSound: function(id) {
    console.log(`暂停声音: ID ${id}`);
    
    // 获取对应的音频实例并暂停播放
    const audio = this.audioInstances[id];
    if (audio) {
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
    
    // 获取对应的音频实例并恢复播放
    const audio = this.audioInstances[id];
    if (audio) {
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
    
    // 计算实际音量（个体音量 * 主音量）
    const master = masterVolume !== undefined ? masterVolume : this.data.masterVolume;
    const actualVolume = volume / 100 * (master / 100);
    
    // 获取对应的音频实例并调整音量
    const audio = this.audioInstances[id];
    if (audio) {
      audio.volume = actualVolume;
    }
    
    // 更新音频源状态
    const audioSources = this.data.audioSources;
    if (audioSources[id]) {
      audioSources[id].volume = actualVolume;
      
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