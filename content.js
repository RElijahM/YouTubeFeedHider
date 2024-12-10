function hideRecommends() {
    const recommends = document.querySelector('[id="contents"]'); 
    if (recommends) {
      recommends.style.display = 'none';
    }
  }
  
  hideRecommends();
  
  const observer = new MutationObserver(hideNewsfeed);
  observer.observe(document.body, { childList: true, subtree: true });