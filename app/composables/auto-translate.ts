import { useI18n } from "vue-i18n";

interface TranslateOptions {
  fallback?: boolean;
  save?: boolean; // simpan ke file json
}

export function useAutoTranslate() {
  const { t, locale } = useI18n();

  const cache = new Map<string, string>();

  async function autoTranslate(text: string, targetLang: string): Promise<string> {
    const cacheKey = `${targetLang}:${text}`;
    if (cache.has(cacheKey)) return cache.get(cacheKey)!;

    const res = await $fetch<{ translatedText: string }>("https://libretranslate.com/translate", {
      method: "POST",
      body: {
        q: text,
        source: "en",
        target: targetLang,
        format: "text"
      }
    });

    cache.set(cacheKey, res.translatedText);
    return res.translatedText;
  }

  async function saveTranslation(lang: string, key: string, value: string) {
    await $fetch("/api/save-translation", {
      method: "POST",
      body: { lang, key, value }
    });
  }

  async function translate(key: string, options: TranslateOptions = {}): Promise<string> {
    const translated = t(key);

    if (options.fallback && translated === key) {
      const result = await autoTranslate(key, locale.value);

      if (options.save) {
        await saveTranslation(locale.value, key, result);
      }

      return result;
    }

    return translated;
  }

  return { translate };
}
