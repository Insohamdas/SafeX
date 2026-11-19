export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
  urgentAlert: string;
  safeRouteInstruction: string;
  sosStatus: string;
}

export const LANGUAGES: Record<string, LanguageOption> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    dir: "ltr",
    urgentAlert: "Heavy crowd surge detected near Gate 4. Diverting flow to Corridor Green.",
    safeRouteInstruction: "Keep moving toward East Concourse. Follow illuminated ground path.",
    sosStatus: "Emergency broadcast received. Field responder unit dispatched (ETA 90s).",
  },
  hi: {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    dir: "ltr",
    urgentAlert: "गेट 4 के पास अत्यधिक भीड़ दर्ज की गई। निकास के लिए ग्रीन कॉरिडोर का उपयोग करें।",
    safeRouteInstruction: "पूर्वी कॉनकोर्स की ओर बढ़ते रहें। जमीन पर प्रदीप्त संकेतकों का पालन करें।",
    sosStatus: "आपातकालीन संकेत प्राप्त हुआ। सुरक्षा दल रवाना कर दिया गया है (अनुमानित समय 90s)।",
  },
  bn: {
    code: "bn",
    name: "Bengali",
    nativeName: "বাংলা",
    dir: "ltr",
    urgentAlert: "গেট ৪ এর কাছে অতিরিক্ত ভিড় সনাক্ত করা হয়েছে। করিডোর গ্রিন দিয়ে প্রস্থান করুন।",
    safeRouteInstruction: "পূর্ব কনকোর্সের দিকে এগিয়ে চলুন। নির্দেশিত সবুজ পথ অনুসরণ করুন।",
    sosStatus: "জরুরী সংকেত গৃহীত। ফিল্ড রেসপন্ডার ইউনিট পাঠানো হয়েছে (সময় ৯০ সে.)।",
  },
  ta: {
    code: "ta",
    name: "Tamil",
    nativeName: "தமிழ்",
    dir: "ltr",
    urgentAlert: "கேட் 4 அருகில் அதிக மக்கள் நெரிசல். வெளியேற பச்சை வழித்தடத்தை பயன்படுத்தவும்.",
    safeRouteInstruction: "கிழக்கு தளத்தை நோக்கி செல்லவும். ஒளிரும் வழிகாட்டி பாதையை பின்தொடரவும்.",
    sosStatus: "அவசர அழைப்பு பெறப்பட்டது. மீட்பு குழு அனுப்பப்பட்டுள்ளது (நேரம் 90s).",
  },
  ar: {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    dir: "rtl",
    urgentAlert: "تم رصد تدفق حشود كثيف عند البوابة 4. يرجى التوجه إلى الممر الأخضر للإخلاء.",
    safeRouteInstruction: "استمر في التحرك نحو البهو الشرقي. اتبع المسار الأرضي المضيء.",
    sosStatus: "تم استلام نداء الطوارئ. وحدة الاستجابة الميدانية في الطريق (الوقت المقدر 90 ثانية).",
  },
  es: {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    dir: "ltr",
    urgentAlert: "Congestión extrema detectada cerca de Puerta 4. Desviando flujo hacia Corredor Verde.",
    safeRouteInstruction: "Continúe hacia el Vestíbulo Este. Siga el camino iluminado en el suelo.",
    sosStatus: "Señal de auxilio recibida. Unidad de respuesta desplegada (ETA 90s).",
  },
  fr: {
    code: "fr",
    name: "French",
    nativeName: "Français",
    dir: "ltr",
    urgentAlert: "Forte affluence détectée près de la Porte 4. Déviation vers le Couloir Vert.",
    safeRouteInstruction: "Continuez vers le Hall Est. Suivez le cheminement au sol éclairé.",
    sosStatus: "Signal d'urgence reçu. Équipe d'intervention en route (ETA 90s).",
  },
};

