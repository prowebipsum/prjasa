export function useSocialShare() {
  const currentUrl = process.client ? window.location.href : ""

  const whatsapp = (text: string, url: string = currentUrl) =>
    `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`

  const telegram = (text: string, url: string = currentUrl) =>
    `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`

  const facebook = (url: string = currentUrl) =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`

  const twitter = (text: string, url: string = currentUrl) =>
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`

  return { whatsapp, telegram, facebook, twitter }
}
