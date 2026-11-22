const toast = document.querySelector('.toast');
let timer;
function notify(message){toast.textContent=message;toast.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove('show'),2200)}
document.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',()=>{
 const destination=button.dataset.go;
 if(destination==='community') document.querySelector('.community-preview').scrollIntoView({behavior:'smooth'});
 else if(destination==='discover') window.scrollTo({top:0,behavior:'smooth'});
 else notify(destination==='profile'?'Your profile and wardrobe tools will be added in the next build stage.':'The shop will be connected after product features are built.');
}));
document.querySelectorAll('.heart').forEach(button=>button.addEventListener('click',()=>{
 const saved=button.textContent==='♥';button.textContent=saved?'♡':'♥';button.style.color=saved?'var(--wine)':'#a11b48';notify(saved?'Removed from saved styles':'Saved to your favourites');
}));
document.querySelectorAll('.category').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('.category').forEach(item=>item.classList.remove('active'));button.classList.add('active');notify(`${button.textContent} styles selected`);
}));
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));}
