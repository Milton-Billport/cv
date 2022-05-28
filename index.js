window.addEventListener('load', () => {
  // Configure template with global vars
  document.title = FULL_NAME
  document.getElementById('who-am-i').textContent += FULL_NAME.substring(0, FULL_NAME.indexOf(' '))
  document.getElementById('linkedin-url').href = LINKEDIN_URL
  document.getElementById('twitter-url').href  = TWITTER_URL
  document.getElementById('website-url').href  = WEBSITE_URL
  document.getElementById('copyright').textContent += FULL_NAME
})