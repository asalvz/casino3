function notificarCarga() {
  fetch('https://discordapp.com/api/webhooks/1065639854324588574/Iu0dfAhK_XeuoLysZSCuxfc79cFpRYvMk9xAueMycoxKijo_gEjoyGT6-6e3MRWFiSnT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      pagina: 'index.html',
      fecha: new Date()
    })
  })
}
