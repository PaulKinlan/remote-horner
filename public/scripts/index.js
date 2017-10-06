document.addEventListener('DOMContentLoaded', function() {
  let endpointUrlWindow = document.getElementById('endpointUrlWindow');
  let honkEl = document.getElementById('honk');
  let presentationBtn = document.getElementById('presentationBtn');
  
  let airhorn;
  
  honkEl.onclick = function() {
    airhorn.start({ loop: false });
  }
  
  endpointUrlWindow.addEventListener("click", function() {
    let endpointWindow = window.open('', 'endpointUrlWindow');
    let processHandshake = async function(msgE) {
      console.log(msgE);
      let endpointUrl = new URL(endpointUrlWindow.href);
      if(msgE.origin === endpointUrl.origin && msgE.ports.length > 0) {
        window.removeEventListener('message', processHandshake);
        
        airhorn = Comlink.proxy(msgE.ports[0]);
      }
    };
    
    window.addEventListener('message', processHandshake);                       
  });
  
  
  presentationBtn.addEventListener("click", async function() {
    const pr = new PresentationRequest('https://airhorner.com/');
    connection = await pr.start();
    airhorn = Comlink.proxy(MessageChannelAdapter.wrap(connection));
  })
  
})