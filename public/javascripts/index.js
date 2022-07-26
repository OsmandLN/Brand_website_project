
const brandValue = document.querySelector('#brand-value')
const submitBtn = document.querySelector('.submit-btn')
const leaveAMessage = document.querySelector('#leave-a-message')

// slogan slide-in effect
window.addEventListener('load', function sloganSlideInEffectAdded() {
  brandValue.classList.add('slide-in')
})


submitBtn.addEventListener('click', () => {
  // clear the form after submitted
  leaveAMessage.reset()
  alert('Message submitted!')
})
