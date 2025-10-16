export default defineNuxtPlugin(() => {
  if (process.client) {
    // Buat elemen notifikasi sekali saja
    const showNotice = (() => {
      let timeout: ReturnType<typeof setTimeout> | null = null
      let notice = document.getElementById('no-right-click-notice')

      if (!notice) {
        notice = document.createElement('div')
        notice.id = 'no-right-click-notice'
        Object.assign(notice.style, {
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '10px 16px',
          borderRadius: '8px',
          fontSize: '14px',
          fontFamily: 'sans-serif',
          transition: 'opacity 0.3s',
          opacity: '0',
          pointerEvents: 'none',
          zIndex: '9999'
        })
        document.body.appendChild(notice)
      }

      return (message: string) => {
        if (!notice) return
        notice.textContent = message
        notice.style.opacity = '1'
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
          notice!.style.opacity = '0'
        }, 2000)
      }
    })()

    // Blok klik kanan + tampilkan pesan
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      showNotice('⚠️ Mohon maaf, klik kanan dinonaktifkan di situs ini.')
    })

    // Blok shortcut umum (opsional)
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault()
        showNotice('Konten sumber dilindungi.')
      }
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault()
        showNotice('Developer tools dinonaktifkan.')
      }
      if (e.key === 'F12') {
        e.preventDefault()
        showNotice('Akses developer tools dibatasi.')
      }
    })
  }
})
