function playsound(e) {
    
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

   if(!audio) return; //stop the function from running!
   audio.currentTime = 0; //replay when we click over n over agin
   audio.play();
   key.classList.add('playing');
};

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; 
    console.log(e.propertyName);
    this.classList.remove('playing');

};
const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playsound);
