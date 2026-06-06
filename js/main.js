
(function(){
  const disclaimer = '本網站為原創升中適應漫畫及學習輔助內容，並非學校或任何官方教材。內容以故事和角色經歷協助學生理解升中生活，如有錯漏或建議，歡迎私訊回報。';
  window.TL = {
    episodes: () => (window.EPISODES_DATA || []),
    published: () => (window.EPISODES_DATA || []).filter(e => e.status === 'published'),
    findEpisode: (id) => (window.EPISODES_DATA || []).find(e => e.id === id),
    disclaimer,
    pad: (num) => String(num).padStart(2, '0')
  };

  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('dragstart', e => { if(e.target.tagName === 'IMG') e.preventDefault(); });
})();
