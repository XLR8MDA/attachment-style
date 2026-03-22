// ══════════════════════════════════════════
// LANGUAGES & TRANSLATIONS
// ══════════════════════════════════════════

const LANGS = [
  { code: 'en', label: 'English',  flag: '🇬🇧', rtl: false },
  { code: 'hi', label: 'हिंदी',    flag: '🇮🇳', rtl: false },
  // bn, ta, te, mr removed until translations are available
  { code: 'ur', label: 'اردو',     flag: '🇵🇰', rtl: true  },
  { code: 'ar', label: 'العربية',  flag: '🇸🇦', rtl: true  },
  { code: 'ru', label: 'Русский',  flag: '🇷🇺', rtl: false },
  { code: 'zh', label: '中文',     flag: '🇨🇳', rtl: false },
];

const TR = {
  en: {
    heroSub:    'Free · Science-Based · 2 Minutes',
    heroTitle:  'Understand <em>how you love.</em><br>Grow toward security.',
    heroDesc:   'Answer 10 questions to discover your attachment style — the pattern behind how you connect, communicate, and handle closeness in relationships.',
    discTitle:  '🌱 A note before you begin',
    discText:   'Your attachment style is <strong>not</strong> a diagnosis, a disorder, or a permanent label. It is a pattern your nervous system learned to keep you safe — often in childhood. With awareness and intentional practice, it can absolutely change. This quiz is only here to help you understand yourself better.',
    startBtn:   'Take the Free Quiz →',
    noData:     'No data collected',
    twoMin:     '~2 minutes',
    freeRes:    'Free resources included',
    back:       '← Back',
    next:       'Next →',
    submit:     'See My Results →',
    selectWarn: 'Please select an answer to continue.',
    qOf:        (n, t) => 'Question ' + n + ' of ' + t,
    qLbl:       (n)    => 'Question ' + n,
    aLabels:    ['Not at all like me', 'Slightly like me', 'Neutral', 'Mostly like me', 'Completely like me'],
    resultsNote:'✨ This reflects a pattern, not a permanent truth. Attachment styles can and do change with intentional work.',
    mapTitle:   'Your Position on the Attachment Map',
    mapNote:    'X = Avoidance (discomfort with closeness)  ·  Y = Anxiety (fear of abandonment)',
    anxLbl:     'Anxiety Score',
    avoLbl:     'Avoidance Score',
    tabAbout:   'About You',
    tabEx:      'Exercises',
    tabPath:    'Your Path',
    tabRes:     'Resources',
    allStylesH: 'The Four Attachment Styles',
    retakeText: 'Attachment patterns can shift over time. Retake this whenever you want a fresh check-in.',
    retakeBtn:  'Retake the Quiz',
    tapHint:    'Tap an answer to continue',
    dlTitle:    'Download Full Assessment',
    dlSub:      'Clinical guide · PDF · Free',
  },

  ur: {
    heroSub:    'مفت · سائنس پر مبنی · 2 منٹ',
    heroTitle:  '<em>آپ کیسے محبت کرتے ہیں</em> یہ سمجھیں۔<br>سکیورٹی کی طرف بڑھیں۔',
    heroDesc:   '10 سوالات کے جواب دے کر اپنا اٹیچمنٹ اسٹائل دریافت کریں — وہ پیٹرن جو آپ کے جڑنے اور قربت سنبھالنے کے طریقے کو ظاہر کرتا ہے۔',
    discTitle:  '🌱 شروع کرنے سے پہلے ایک بات',
    discText:   'آپ کا اٹیچمنٹ اسٹائل کوئی <strong>بیماری، عارضہ یا مستقل لیبل نہیں ہے</strong>۔ یہ وہ پیٹرن ہے جو آپ کے اعصابی نظام نے آپ کو محفوظ رکھنے کے لیے سیکھا — اکثر بچپن میں۔ آگاہی اور مشق سے یہ بدل سکتا ہے۔ یہ کوئز صرف آپ کو خود کو بہتر سمجھنے میں مدد کے لیے ہے۔',
    startBtn:   'مفت کوئز شروع کریں',
    noData:     'کوئی ڈیٹا جمع نہیں',
    twoMin:     '~2 منٹ',
    freeRes:    'مفت وسائل شامل',
    back:       'واپس',
    next:       'اگلا',
    submit:     'میرے نتائج دیکھیں',
    selectWarn: 'براہ کرم جاری رکھنے کے لیے ایک جواب منتخب کریں۔',
    qOf:        function(n, t) { return 'سوال ' + n + ' / ' + t; },
    qLbl:       function(n)    { return 'سوال ' + n; },
    aLabels:    ['بالکل نہیں', 'تھوڑا', 'غیر جانبدار', 'زیادہ تر', 'بالکل'],
    resultsNote:'✨ یہ ایک پیٹرن کی عکاسی ہے، کوئی مستقل سچائی نہیں۔ اٹیچمنٹ اسٹائل بدل سکتے ہیں۔',
    mapTitle:   'اٹیچمنٹ نقشے پر آپ کی پوزیشن',
    mapNote:    'X = پرہیز · Y = اضطراب',
    anxLbl:     'اضطراب سکور',
    avoLbl:     'پرہیز سکور',
    tabAbout:   'آپ کے بارے میں',
    tabEx:      'مشقیں',
    tabPath:    'آپ کا راستہ',
    tabRes:     'وسائل',
    allStylesH: 'چار اٹیچمنٹ اسٹائل',
    retakeText: 'اٹیچمنٹ پیٹرن وقت کے ساتھ بدل سکتے ہیں۔ جب بھی ضرورت ہو دوبارہ لیں۔',
    retakeBtn:  'کوئز دوبارہ لیں',
    tapHint:    'جاری رکھنے کے لیے ایک جواب چنیں',
    dlTitle:    'مکمل اسیسمنٹ ڈاؤنلوڈ کریں',
    dlSub:      'کلینیکل گائیڈ · PDF · مفت',
  },

  ar: {
    heroSub:    'مجاني · مبني على العلم · دقيقتان',
    heroTitle:  'افهم <em>كيف تحب.</em><br>تقدّم نحو الأمان العاطفي.',
    heroDesc:   'أجب على 10 أسئلة لاكتشاف أسلوب تعلقك — النمط الذي يشكّل طريقة تواصلك وتعاملك مع العلاقات الحميمة.',
    discTitle:  '🌱 ملاحظة قبل البدء',
    discText:   'أسلوب التعلق <strong>ليس</strong> تشخيصاً أو اضطراباً أو تصنيفاً دائماً. إنه نمط تعلّمه جهازك العصبي لحمايتك — في الغالب في مرحلة الطفولة. مع الوعي والممارسة، يمكن أن يتغير. هذا الاختبار هنا فقط لمساعدتك على فهم نفسك بشكل أفضل.',
    startBtn:   'ابدأ الاختبار المجاني',
    noData:     'لا يتم جمع البيانات',
    twoMin:     '~دقيقتان',
    freeRes:    'موارد مجانية مضمّنة',
    back:       'رجوع',
    next:       'التالي',
    submit:     'اعرض نتائجي',
    selectWarn: 'يرجى اختيار إجابة للمتابعة.',
    qOf:        function(n, t) { return 'السؤال ' + n + ' من ' + t; },
    qLbl:       function(n)    { return 'السؤال ' + n; },
    aLabels:    ['لا ينطبق عليّ أبداً', 'ينطبق قليلاً', 'محايد', 'ينطبق غالباً', 'ينطبق تماماً'],
    resultsNote:'✨ هذا يعكس نمطاً، وليس حقيقة دائمة. أساليب التعلق تتغير مع العمل المقصود.',
    mapTitle:   'موقعك على خريطة التعلق',
    mapNote:    'X = التجنب (عدم الارتياح من القرب) · Y = القلق (الخوف من الهجر)',
    anxLbl:     'درجة القلق',
    avoLbl:     'درجة التجنب',
    tabAbout:   'عنك',
    tabEx:      'تمارين',
    tabPath:    'طريقك',
    tabRes:     'موارد',
    allStylesH: 'أساليب التعلق الأربعة',
    retakeText: 'يمكن أن تتغير أنماط التعلق مع الوقت. أعد الاختبار متى شئت.',
    retakeBtn:  'إعادة الاختبار',
    tapHint:    'اختر إجابة للمتابعة',
    dlTitle:    'تحميل التقييم الكامل',
    dlSub:      'دليل سريري · PDF · مجاني',
  },

  hi: {
    heroSub:    'निःशुल्क · विज्ञान-आधारित · 2 मिनट',
    heroTitle:  'समझें <em>आप कैसे प्यार करते हैं।</em><br>सुरक्षा की ओर बढ़ें।',
    heroDesc:   '10 प्रश्नों के उत्तर देकर अपनी अटैचमेंट शैली जानें — वह पैटर्न जो आपके जुड़ने और निकटता संभालने के तरीके को दर्शाता है।',
    discTitle:  '🌱 शुरू करने से पहले एक बात',
    discText:   'आपकी अटैचमेंट शैली कोई <strong>बीमारी, विकार या स्थायी लेबल नहीं है</strong>। यह वह पैटर्न है जो आपके तंत्रिका तंत्र ने आपको सुरक्षित रखने के लिए सीखा। जागरूकता और अभ्यास से यह बदल सकता है। यह प्रश्नोत्तरी केवल आपको बेहतर समझने में मदद के लिए है।',
    startBtn:   'निःशुल्क प्रश्नोत्तरी लें →',
    noData:     'कोई डेटा एकत्र नहीं',
    twoMin:     '~2 मिनट',
    freeRes:    'मुफ्त संसाधन शामिल',
    back:       '← वापस',
    next:       'अगला →',
    submit:     'मेरे परिणाम देखें →',
    selectWarn: 'कृपया जारी रखने के लिए एक उत्तर चुनें।',
    qOf:        (n, t) => 'प्रश्न ' + n + ' / ' + t,
    qLbl:       (n)    => 'प्रश्न ' + n,
    aLabels:    ['बिल्कुल नहीं', 'थोड़ा', 'तटस्थ', 'अधिकतर', 'पूरी तरह'],
    resultsNote:'✨ यह एक पैटर्न है, कोई स्थायी सच्चाई नहीं। अटैचमेंट शैलियाँ बदल सकती हैं।',
    mapTitle:   'अटैचमेंट मानचित्र पर आपकी स्थिति',
    mapNote:    'X = परिहार · Y = चिंता',
    anxLbl:     'चिंता स्कोर',
    avoLbl:     'परिहार स्कोर',
    tabAbout:   'आपके बारे में',
    tabEx:      'अभ्यास',
    tabPath:    'आपका मार्ग',
    tabRes:     'संसाधन',
    allStylesH: 'चार अटैचमेंट शैलियाँ',
    retakeText: 'अटैचमेंट पैटर्न समय के साथ बदल सकते हैं। जब भी जरूरत हो, दोबारा लें।',
    retakeBtn:  'प्रश्नोत्तरी दोबारा लें',
    dlTitle:    'पूरी असेसमेंट डाउनलोड करें',
    dlSub:      'क्लिनिकल गाइड · PDF · मुफ्त',
  },

  ru: {
    heroSub:    'Бесплатно · На основе науки · 2 минуты',
    heroTitle:  'Поймите, <em>как вы любите.</em><br>Двигайтесь к безопасности.',
    heroDesc:   'Ответьте на 10 вопросов, чтобы узнать свой стиль привязанности — паттерн, определяющий вашу близость с другими.',
    discTitle:  '🌱 Важное замечание',
    discText:   'Стиль привязанности — это <strong>не</strong> диагноз и не постоянный ярлык. Это паттерн, которому научилась ваша нервная система. Он может меняться. Этот тест создан только для того, чтобы помочь вам лучше понять себя.',
    startBtn:   'Пройти тест →',
    noData:     'Данные не собираются',
    twoMin:     '~2 минуты',
    freeRes:    'Ресурсы бесплатно',
    back:       '← Назад',
    next:       'Далее →',
    submit:     'Увидеть результат →',
    selectWarn: 'Пожалуйста, выберите ответ.',
    qOf:        (n, t) => 'Вопрос ' + n + ' из ' + t,
    qLbl:       (n)    => 'Вопрос ' + n,
    aLabels:    ['Совсем не про меня', 'Немного', 'Нейтрально', 'В основном про меня', 'Полностью про меня'],
    resultsNote:'✨ Это паттерн, а не постоянная истина. Стили привязанности меняются.',
    mapTitle:   'Ваша позиция на карте привязанности',
    mapNote:    'X = Избегание · Y = Тревожность',
    anxLbl:     'Тревожность',
    avoLbl:     'Избегание',
    tabAbout:   'О вас',
    tabEx:      'Упражнения',
    tabPath:    'Ваш путь',
    tabRes:     'Ресурсы',
    allStylesH: 'Четыре стиля привязанности',
    retakeText: 'Паттерны привязанности меняются. Пройдите тест снова в любое время.',
    retakeBtn:  'Пройти ещё раз',
    dlTitle:    'Скачать полную оценку',
    dlSub:      'Клиническое руководство · PDF · Бесплатно',
  },

  zh: {
    heroSub:    '免费 · 基于科学 · 2分钟',
    heroTitle:  '了解<em>你如何去爱。</em><br>走向安全型依恋。',
    heroDesc:   '回答10个问题，发现你的依恋风格——影响你如何建立连接、沟通和处理亲密关系的模式。',
    discTitle:  '🌱 开始之前请注意',
    discText:   '依恋风格<strong>不是</strong>诊断、障碍或永久标签。它是你的神经系统学到的保护模式，通常始于童年。通过意识和练习，它是可以改变的。这个测验只是帮助你更好地了解自己。',
    startBtn:   '免费测验 →',
    noData:     '不收集数据',
    twoMin:     '约2分钟',
    freeRes:    '包含免费资源',
    back:       '← 返回',
    next:       '下一题 →',
    submit:     '查看结果 →',
    selectWarn: '请选择一个答案继续。',
    qOf:        (n, t) => '问题 ' + n + ' / ' + t,
    qLbl:       (n)    => '问题 ' + n,
    aLabels:    ['完全不像我', '有点像', '中立', '大部分像', '完全像我'],
    resultsNote:'✨ 这反映的是一种模式，不是永久真相。依恋风格可以改变。',
    mapTitle:   '你在依恋地图上的位置',
    mapNote:    'X = 回避（对亲密感的不适）· Y = 焦虑（对被抛弃的恐惧）',
    anxLbl:     '焦虑指数',
    avoLbl:     '回避指数',
    tabAbout:   '关于你',
    tabEx:      '练习',
    tabPath:    '你的路径',
    tabRes:     '资源',
    allStylesH: '四种依恋风格',
    retakeText: '依恋模式会随时间改变。随时重新测验。',
    retakeBtn:  '重新测验',
    dlTitle:    '下载完整评估报告',
    dlSub:      '临床指南 · PDF · 免费',
  },
};


var RTL_LANGS = { ur: true, ar: true };

// ══════════════════════════════════════════
// QUIZ QUESTIONS (QAD-10 from the PDF)
// ══════════════════════════════════════════

var QS = {
  en: [
    'I feel comfortable being vulnerable and sharing my private thoughts and feelings with my partner.',
    'I often worry that my partner does not really care for me or will not want to stay with me.',
    'I find it difficult to allow myself to depend on others, and I prefer to be self-sufficient.',
    'When I\'m not with my partner, I feel anxious and find myself needing frequent reassurance of their love.',
    'I feel uncomfortable or suffocated when a partner wants to get too emotionally close to me.',
    'I can effectively manage my emotions during disagreements and work toward a collaborative resolution.',
    'I find myself over-analyzing text messages, tone of voice, or body language for signs of rejection.',
    'I tend to withdraw or shut down emotionally when a relationship becomes too intense or conflict-heavy.',
    'I desire closeness with others but simultaneously fear that I will be hurt if I let them in too far.',
    'I am comfortable being alone and do not feel a sense of abandonment or unworthiness when without a relationship.',
  ],
  hi: [
    'मुझे अपने साथी के साथ कमज़ोर होना और अपनी निजी भावनाएं साझा करना आरामदायक लगता है।',
    'मुझे अक्सर चिंता रहती है कि मेरे साथी को मेरी परवाह नहीं है या वे मेरे साथ नहीं रहना चाहते।',
    'मुझे दूसरों पर निर्भर होना मुश्किल लगता है, और मैं आत्मनिर्भर रहना पसंद करता हूं।',
    'जब मैं अपने साथी के साथ नहीं होता, तो मैं चिंतित महसूस करता हूं और उनके प्यार के बारे में बार-बार आश्वासन चाहता हूं।',
    'जब कोई साथी भावनात्मक रूप से बहुत करीब आना चाहता है, तो मुझे असहजता या घुटन महसूस होती है।',
    'मैं असहमति के दौरान अपनी भावनाओं को प्रभावी ढंग से संभाल सकता हूं और मिलकर समाधान की दिशा में काम कर सकता हूं।',
    'मैं खुद को टेक्स्ट संदेशों, आवाज़ के लहजे या शारीरिक भाषा का अत्यधिक विश्लेषण करते हुए पाता हूं।',
    'जब रिश्ता बहुत गहरा या संघर्षपूर्ण हो जाता है, तो मैं भावनात्मक रूप से पीछे हट जाता हूं।',
    'मैं दूसरों के साथ निकटता चाहता हूं, लेकिन साथ ही डरता हूं कि करीब आने दिया तो चोट लगेगी।',
    'मैं अकेले रहने में सहज हूं और बिना किसी रिश्ते के भी परित्याग या अयोग्यता का अहसास नहीं होता।',
  ],
  ru: [
    'Мне комфортно быть уязвимым и делиться своими мыслями и чувствами с партнёром.',
    'Я часто беспокоюсь, что партнёр не заботится обо мне по-настоящему или захочет уйти.',
    'Мне трудно позволить себе зависеть от других, я предпочитаю самодостаточность.',
    'Когда я не с партнёром, я тревожусь и нуждаюсь в частых заверениях в его любви.',
    'Мне некомфортно или душно, когда партнёр хочет стать слишком близким эмоционально.',
    'Я умею управлять своими эмоциями во время разногласий и работать над совместным решением.',
    'Я ловлю себя на чрезмерном анализе сообщений, тона голоса или языка тела в поисках признаков отвержения.',
    'Я склонен замыкаться эмоционально, когда отношения становятся слишком интенсивными.',
    'Я хочу близости, но одновременно боюсь, что меня ранят, если я впущу кого-то слишком близко.',
    'Мне комфортно быть одному и я не чувствую брошенности или ненужности без отношений.',
  ],
  zh: [
    '我很愿意对伴侣展示脆弱的一面，分享我的私密想法和感受。',
    '我经常担心伴侣并不真正在乎我，或者不想继续和我在一起。',
    '我发现很难依赖别人，我更喜欢自给自足。',
    '当我不在伴侣身边时，我会感到焦虑，需要频繁确认他们的爱。',
    '当伴侣想要在情感上过于亲近时，我会感到不舒服或窒息。',
    '在争吵期间，我能有效管理自己的情绪，并朝着共同解决方案努力。',
    '我发现自己过度分析短信、语气或肢体语言，寻找被拒绝的迹象。',
    '当关系变得太紧张或充满冲突时，我倾向于情感上退缩或关闭。',
    '我渴望与他人亲近，但同时又害怕如果让他们太靠近，我会受到伤害。',
    '我独处时感到自在，没有伴侣时也不会感到被遗弃或不值得被爱。',
  ],
  ur: [
    'مجھے اپنے ساتھی کے ساتھ کمزور ہونا اور اپنے نجی خیالات اور احساسات شیئر کرنا آرام دہ لگتا ہے۔',
    'مجھے اکثر فکر رہتی ہے کہ میرے ساتھی کو واقعی میری پرواہ نہیں ہے یا وہ میرے ساتھ نہیں رہنا چاہتے۔',
    'مجھے دوسروں پر انحصار کرنا مشکل لگتا ہے، اور میں خود کفیل رہنا پسند کرتا ہوں۔',
    'جب میں اپنے ساتھی کے ساتھ نہیں ہوتا، تو میں پریشان محسوس کرتا ہوں اور ان کی محبت کی بار بار یقین دہانی چاہتا ہوں۔',
    'جب کوئی ساتھی جذباتی طور پر بہت قریب آنا چاہتا ہے تو مجھے بے چینی یا گھٹن محسوس ہوتی ہے۔',
    'میں اختلافات کے دوران اپنے جذبات کو مؤثر طریقے سے سنبھال سکتا ہوں اور مل کر حل کی طرف کام کر سکتا ہوں۔',
    'میں خود کو ٹیکسٹ پیغامات، آواز کے لہجے یا جسمانی زبان کا ضرورت سے زیادہ تجزیہ کرتے ہوئے پاتا ہوں۔',
    'جب رشتہ بہت گہرا یا تنازعاتی ہو جاتا ہے تو میں جذباتی طور پر پیچھے ہٹ جاتا ہوں۔',
    'میں دوسروں کے ساتھ قربت چاہتا ہوں لیکن ساتھ ہی ڈرتا ہوں کہ اگر انہیں قریب آنے دیا تو تکلیف ہوگی۔',
    'میں اکیلے رہنے میں آرام دہ ہوں اور بغیر کسی رشتے کے بھی ترک کیے جانے یا ناقابل قبول ہونے کا احساس نہیں ہوتا۔',
  ],
  ar: [
    'أشعر بالراحة عند الضعف ومشاركة أفكاري ومشاعري الخاصة مع شريكي.',
    'أقلق كثيراً من أن شريكي لا يهتم بي حقاً أو لا يريد البقاء معي.',
    'أجد صعوبة في الاعتماد على الآخرين، وأفضل الاعتماد على نفسي.',
    'عندما لا أكون مع شريكي، أشعر بالقلق وأحتاج إلى تأكيدات متكررة على حبه لي.',
    'أشعر بعدم الارتياح أو الاختناق عندما يريد الشريك الاقتراب مني عاطفياً بشكل مفرط.',
    'أستطيع إدارة مشاعري بفعالية خلال الخلافات والعمل نحو حل مشترك.',
    'أجد نفسي أحلل الرسائل ونبرة الصوت ولغة الجسد بشكل مفرط بحثاً عن علامات الرفض.',
    'أميل إلى الانسحاب عاطفياً أو الانغلاق عندما تصبح العلاقة مكثفة أو مليئة بالصراعات.',
    'أرغب في الاقتراب من الآخرين لكنني في الوقت نفسه أخشى أن أُجرح إذا سمحت لهم بالدخول.',
    'أشعر بالراحة عند الوحدة ولا أشعر بالهجر أو انعدام القيمة عندما لا أكون في علاقة.',
  ],
};


// ══════════════════════════════════════════
// STYLE DATA
// ══════════════════════════════════════════

var STYLES = {
  secure: {
    key: 'secure', color: '#6B9E78', bg: '#EBF4EE',
    name: 'Secure',
    tagline: '"I am worthy of love. Others can be trusted."',
    short: 'Comfortable with intimacy and independence.',
    about: [
      { type: 'text', content: 'You approach relationships with confidence and openness. Being vulnerable, trusting others, and giving space do not feel threatening. This does not mean you do not feel pain — it means you have the emotional tools to navigate it without losing yourself.' },
      { type: 'belief', content: '"I am worthy of love. My needs matter. Others are generally trustworthy."' },
      { type: 'heading', content: 'How this shows up' },
      { type: 'text', content: '• You communicate needs without excessive fear of rejection\n• You handle temporary distance without catastrophizing\n• You feel whole within yourself — relationships add to you, not complete you\n• You navigate conflict without shutting down or escalating' },
      { type: 'heading', content: 'Your superpower' },
      { type: 'text', content: 'Emotional regulation. You are a natural stabilizer — you can be a secure base for partners and friends, and your consistency is one of the most healing things someone with an insecure style can experience.' },
    ],
    exercises: [
      { goal: 'Connection',  name: 'Be a Secure Base',            desc: 'Practice being emotionally available for a friend or partner when they are distressed — without trying to fix them. Just witness and validate.' },
      { goal: 'Growth',      name: 'Deepen Emotional Vocabulary',  desc: 'Once a day, name 5 specific emotions you felt. Go beyond good or bad — try wistful, grounded, overstimulated.' },
      { goal: 'Awareness',   name: 'Learn Insecure Patterns',      desc: 'If you are with an anxious or avoidant partner, study their triggers. Your consistency and patience is one of the most powerful healing tools available.' },
    ],
    steps: [
      { title: 'Maintain your foundation',     desc: 'Continue investing in friendships, self-reflection, and therapy if you use it. Security is not a destination — it is a daily practice.' },
      { title: 'Learn about insecure styles',  desc: 'Understanding how anxious and avoidant patterns work helps you be a more compassionate partner and friend — without losing yourself.' },
      { title: 'Share what you know',          desc: 'Your lived experience of security is a gift. Talking openly about feelings and boundaries creates emotional safety for everyone around you.' },
    ],
    books: [
      { name: 'Secure Love',    author: 'Julie Menanno',          desc: 'Advanced guide for couples — communication and breaking unhealthy cycles.' },
      { name: 'Hold Me Tight',  author: 'Sue Johnson',            desc: 'Building deeper emotional bonds through Emotionally Focused Therapy (EFT).' },
    ],
    media: [
      { name: 'Being Well Podcast',            author: 'Rick & Forrest Hanson', desc: 'Science of attachment and hardwiring happiness into the brain.',      url: 'https://www.youtube.com/watch?v=ha0hfK9QWR4' },
      { name: 'The School of Life (YouTube)',  author: 'Alain de Botton',       desc: 'Philosophical, aesthetic overviews of how attachment shapes modern love.', url: 'https://www.youtube.com/@theschooloflifetv' },
    ],
  },

  anxious: {
    key: 'anxious', color: '#D97757', bg: '#FAEDE8',
    name: 'Anxious-Preoccupied',
    tagline: '"I need you close. But what if you leave?"',
    short: 'Craves closeness, fears abandonment.',
    about: [
      { type: 'text', content: 'You love deeply and feel deeply. Your attachment system is highly tuned — you are extraordinarily sensitive to your partner\'s emotions, tone, and availability. This sensitivity is genuinely a gift. But when it drives constant reassurance-seeking, it can exhaust both you and the people you love.' },
      { type: 'belief', content: '"I need closeness to feel okay. But I\'m not sure I\'m lovable enough to keep someone around."' },
      { type: 'heading', content: 'How this shows up' },
      { type: 'text', content: '• Over-analyzing texts, calls, and tone for signs of rejection\n• A strong need for reassurance that your partner still cares\n• Difficulty being alone — it can feel like abandonment\n• Protest behaviors when ignored (texting more, raising emotional stakes)\n• Giving more than you receive, then feeling quietly resentful' },
      { type: 'heading', content: 'Where this came from' },
      { type: 'text', content: 'Anxious attachment often develops when a caregiver was sometimes warm but inconsistent. Your nervous system learned: I have to work hard to get love, and stay vigilant or it disappears.' },
    ],
    exercises: [
      { goal: 'Regulation',  name: 'The 10-Minute Rule',       desc: 'When you feel the urge to text or call for reassurance, wait 10 minutes. Use that time to self-soothe: breathe deeply, ground yourself (name 5 things you see), or write in a journal.' },
      { goal: 'Boundaries',  name: 'The Independence Evening', desc: 'Spend one evening per week alone or with friends — intentionally not checking in with your partner. Practice tolerating the discomfort without acting on it.' },
      { goal: 'Cognition',   name: 'Worth Affirmation',        desc: 'Each morning, write: My needs matter and I can express them calmly. I do not have to earn love. Write it — do not just think it.' },
    ],
    steps: [
      { title: 'Build your inner container',    desc: 'The goal is self-soothing — calming your nervous system without always needing external reassurance. Therapy (somatic or IFS) is especially effective here.' },
      { title: 'Name the core wound',           desc: 'The belief underneath is often I am not enough or I have to earn love. Identifying and gently challenging these beliefs is the heart of the healing work.' },
      { title: 'Seek corrective experiences',   desc: 'Find relationships — romantic or platonic — where someone shows up consistently. A good therapist can also serve as this secure base.' },
      { title: 'Notice, then pause',            desc: 'When activated (heart racing, urge to pursue), practice naming it: My attachment system is triggered right now. I am actually safe. Pause before responding.' },
    ],
    books: [
      { name: 'Attached',                       author: 'Amir Levine & Rachel Heller', desc: 'The foundational primer for identifying attachment styles and navigating adult dating.' },
      { name: 'Insecure in Love',               author: 'Leslie Becker-Phelps',        desc: 'Actionable strategies for anxiously attached individuals to build genuine self-worth.' },
      { name: 'The Attachment Theory Workbook', author: 'Annie Chen',                   desc: 'Interactive exercises designed to move from insecurity toward security.' },
    ],
    media: [
      { name: 'On Attachment (Podcast)',               author: 'Stephanie Rigg', desc: 'Roadmaps for anxious attachment healing and dating from a place of self-worth.',        url: 'https://podcasts.apple.com/us/podcast/on-attachment/id1620471393' },
      { name: 'Personal Development School (YouTube)', author: 'Thais Gibson',   desc: 'Comprehensive Integrated Attachment Theory — worksheets and daily healing exercises.', url: 'https://www.youtube.com/@ThePersonalDevelopmentSchool' },
    ],
  },

  dismissive: {
    key: 'dismissive', color: '#5B8CB5', bg: '#E8F0F8',
    name: 'Dismissive-Avoidant',
    tagline: '"I\'m fine on my own. I don\'t need this."',
    short: 'Values independence, avoids emotional reliance.',
    about: [
      { type: 'text', content: 'You have a strong sense of self-sufficiency. You are capable, competent, and handle things on your own. In relationships, emotional closeness can feel like a threat to your autonomy — like someone is trying to absorb or control you. So you pull back.' },
      { type: 'belief', content: '"I am capable and self-sufficient. Needing others is weakness. I prefer to handle things alone."' },
      { type: 'heading', content: 'How this shows up' },
      { type: 'text', content: '• Pulling back or becoming cold when a relationship gets intense\n• Feeling suffocated or irritated when a partner needs emotional attention\n• Intellectualizing emotions rather than actually feeling them\n• Focusing on a partner\'s flaws to create emotional distance (deactivating)\n• Difficulty saying we — a strong sense of I, not us' },
      { type: 'heading', content: 'Where this came from' },
      { type: 'text', content: 'Dismissive avoidance typically develops when a caregiver was emotionally unavailable or dismissed the child\'s distress. You learned: My emotional needs are not welcome here. The safest thing is to not need anyone.' },
    ],
    exercises: [
      { goal: 'Connection',    name: 'The Daily Check-In', desc: 'Set a daily 10-minute time to discuss feelings with a partner or friend. Practice naming three emotions you felt that day — not events, emotions.' },
      { goal: 'Vulnerability', name: 'The Weekly Risk',    desc: 'Once a week, share one thought or feeling that feels unsafe — a fear, a moment of doubt. With one safe person only.' },
      { goal: 'Cognition',     name: 'Use We Language',    desc: 'Intentionally use we and us when discussing future plans or decisions. Notice the resistance — that resistance is information about your nervous system, not reality.' },
    ],
    steps: [
      { title: 'Sit with the discomfort',          desc: 'Emotional closeness feels threatening — but the threat is not real. Practice tolerating the discomfort of vulnerability without fleeing. Breathing and somatic work build this capacity.' },
      { title: 'Name the core wound',              desc: 'The belief underneath is often needing others is weakness or others will control or disappoint me. Therapy helps trace where these came from and gently challenge them.' },
      { title: 'Practice small acts of reliance',  desc: 'Ask for help with something small. Accept comfort when offered. Let someone know something affected you. These steps rewire the belief that dependence is dangerous.' },
      { title: 'Recognize deactivating strategies', desc: 'When you notice yourself focusing on a partner\'s flaws or fantasizing about leaving — that is avoidance activating. Name it. Stay present for a few moments longer than feels comfortable.' },
    ],
    books: [
      { name: 'Running on Empty', author: 'Jonice Webb',                  desc: 'Specific insights for avoidant patterns rooted in childhood emotional neglect.' },
      { name: 'Attached',         author: 'Amir Levine & Rachel Heller',  desc: 'The foundational guide for understanding all attachment styles.' },
      { name: 'Hold Me Tight',    author: 'Sue Johnson',                  desc: 'Building emotional bonds through Emotionally Focused Therapy (EFT).' },
    ],
    media: [
      { name: 'Heidi Priebe (YouTube)',                author: 'Heidi Priebe', desc: 'Compassionate clarity for avoidant attachment — self-responsibility and emotional integration.', url: 'https://www.youtube.com/@HeidiPriebe1' },
      { name: 'Personal Development School (YouTube)', author: 'Thais Gibson', desc: 'Deep dives on avoidant patterns and what healing actually looks like.',                        url: 'https://www.youtube.com/@ThePersonalDevelopmentSchool' },
    ],
  },

  fearful: {
    key: 'fearful', color: '#9370B8', bg: '#F2EBF9',
    name: 'Fearful-Avoidant',
    tagline: '"I want love. But love means getting hurt."',
    short: 'Deeply desires and deeply fears intimacy.',
    about: [
      { type: 'text', content: 'You are living with one of the most complex and courageous attachment styles. You genuinely want deep connection — but something in you simultaneously fears it will destroy you. This creates a painful push-pull: pursuing closeness, then retreating when it becomes real.' },
      { type: 'belief', content: '"I want to be loved. But I also believe I will be hurt or abandoned if I let someone truly in."' },
      { type: 'heading', content: 'How this shows up' },
      { type: 'text', content: '• Intense attraction followed by sudden emotional withdrawal\n• Both distance AND closeness feel threatening — there is no safe position\n• Emotional flooding or dissociation when conflicts arise\n• Feeling simultaneously desperate for love and convinced you do not deserve it\n• Relationships that cycle through hope, hurt, and disconnection' },
      { type: 'heading', content: 'Where this came from' },
      { type: 'text', content: 'Fearful-avoidant attachment often has roots in experiences where the caregiver was both a source of safety and a source of fear — unpredictability, neglect, or trauma. Your brain received contradictory programming: go to this person for safety — but this person is also dangerous.' },
    ],
    exercises: [
      { goal: 'Safety',      name: 'The Two Parts Practice', desc: 'When you feel pushed and pulled, name both parts: One part of me wants to get closer. Another part is scared of being hurt. Acknowledge both without judgment — they are both trying to protect you.' },
      { goal: 'Regulation',  name: 'Somatic Grounding',      desc: 'When emotionally activated, place both feet flat on the ground, feel the weight of your body, and take 5 slow breaths. This signals safety to the nervous system at a biological level.' },
      { goal: 'Trust',       name: 'Small Steps, Safe People', desc: 'Choose one person you feel relatively safe with. Practice one small act of vulnerability per week with them — not your most charged relationship.' },
    ],
    steps: [
      { title: 'Professional support is strongly encouraged', desc: 'Fearful-avoidant patterns — especially those with trauma roots — respond best to therapeutic support. EMDR, somatic therapy, and IFS (Internal Family Systems) are particularly effective.' },
      { title: 'Regulate the nervous system first',          desc: 'Before working on relationship patterns, build capacity to tolerate emotional intensity. Breathwork, mindfulness, and body-based practices create the physiological safety that makes healing possible.' },
      { title: 'Build a coherent narrative',                 desc: 'Making sense of your past — not to excuse harm, but to understand how your patterns formed — is core to building earned security. Therapy helps enormously here.' },
      { title: 'Practice self-compassion above all',         desc: 'You developed this pattern because you had to. It kept you safe once. It deserves understanding, not shame. The goal is not to fix yourself — it is to feel safe enough to let yourself be known.' },
    ],
    books: [
      { name: 'The Body Keeps the Score',       author: 'Bessel van der Kolk',         desc: 'How attachment trauma lives in the nervous system — and how to heal it.' },
      { name: 'The Attachment Theory Workbook', author: 'Annie Chen',                   desc: 'Interactive exercises to move from insecurity toward security.' },
      { name: 'Attached',                       author: 'Amir Levine & Rachel Heller',  desc: 'The foundational primer for understanding all four attachment styles.' },
    ],
    media: [
      { name: 'Personal Development School (YouTube)', author: 'Thais Gibson',  desc: 'Most comprehensive resource on fearful-avoidant healing — Integrated Attachment Theory.', url: 'https://www.youtube.com/watch?v=-j2GtVMmX1s' },
      { name: 'Attachment Theory in Action (Podcast)', author: 'Kirsty Nolan',  desc: 'How trauma shapes behavior across the lifespan — focused and practical.',               url: 'https://attachmenttheoryinaction.podbean.com' },
    ],
  },
};

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════

var lang   = 'en';
var qIdx   = 0;
var answers = new Array(10).fill(null);

// ══════════════════════════════════════════
// TRANSLATION HELPERS
// ══════════════════════════════════════════

function t(k) {
  var tr = TR[lang] || TR.en;
  return (tr[k] !== undefined ? tr[k] : TR.en[k]) || k;
}

function tFn(k, a, b) {
  var tr = TR[lang] || TR.en;
  var fn = tr[k] || TR.en[k];
  return typeof fn === 'function' ? fn(a, b) : String(a);
}

function applyTR() {
  var tr = TR[lang] || TR.en;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.dataset.i18n;
    var val = (tr[key] !== undefined ? tr[key] : TR.en[key]);
    if (val && typeof val === 'string') el.innerHTML = val;
  });
}

// ══════════════════════════════════════════
// LANGUAGE SWITCHER
// ══════════════════════════════════════════

function buildLangMenu() {
  var menu = document.getElementById('langMenu');
  menu.innerHTML = LANGS.map(function(l) {
    return '<div class="lang-option ' + (l.code === lang ? 'active' : '') +
           '" onclick="setLang(\'' + l.code + '\')">' + l.flag + ' ' + l.label + '</div>';
  }).join('');
}

function toggleLang() {
  document.getElementById('langMenu').classList.toggle('open');
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.lang-switcher')) {
    document.getElementById('langMenu').classList.remove('open');
  }
});

function setLang(code) {
  lang = code;
  document.getElementById('langLabel').textContent = code.toUpperCase();
  document.getElementById('langMenu').classList.remove('open');
  // RTL support for Arabic and Urdu
  document.documentElement.dir = RTL_LANGS[code] ? 'rtl' : 'ltr';
  buildLangMenu();
  applyTR();
  if (document.getElementById('quiz').classList.contains('active')) renderQ();
}

// ══════════════════════════════════════════
// QUIZ
// ══════════════════════════════════════════

function startQuiz() {
  document.getElementById('hero').style.display = 'none';
  document.getElementById('quiz').classList.add('active');
  qIdx = 0;
  answers = new Array(10).fill(null);
  renderQ();
}

function renderQ() {
  var qs     = QS[lang] || QS.en;
  var tr     = TR[lang] || TR.en;
  var aLabels = tr.aLabels || TR.en.aLabels;
  var total  = qs.length;
  var num    = qIdx + 1;
  var pct    = Math.round((num / total) * 100);

  document.getElementById('progFill').style.width = pct + '%';
  document.getElementById('progLabel').textContent = tFn('qOf', num, total);
  document.getElementById('progPct').textContent   = pct + '%';
  document.getElementById('qNum').textContent      = tFn('qLbl', num);
  document.getElementById('qText').textContent     = qs[qIdx];
  document.getElementById('inlineWarn').style.display = 'none';

  var grp = document.getElementById('answerGroup');
  grp.innerHTML = '';
  aLabels.forEach(function(lbl, i) {
    var v   = i + 1;
    var btn = document.createElement('button');
    btn.className = 'answer-btn' + (answers[qIdx] === v ? ' selected' : '');
    btn.setAttribute('type', 'button');
    btn.onclick = function() { selectA(v); };
    btn.innerHTML = '<span class="answer-num">' + v + '</span><span class="answer-label">' + lbl + '</span>';
    grp.appendChild(btn);
  });

  document.getElementById('backBtn').style.visibility = qIdx === 0 ? 'hidden' : 'visible';

  var card = document.getElementById('qCard');
  card.classList.remove('fade-in');
  void card.offsetWidth; // force reflow
  card.classList.add('fade-in');
}

function selectA(v) {
  answers[qIdx] = v;
  document.getElementById('inlineWarn').style.display = 'none';
  document.querySelectorAll('.answer-btn').forEach(function(btn, i) {
    btn.classList.toggle('selected', i + 1 === v);
  });
  // Auto-advance after a brief pause so the selection is visible
  setTimeout(function() { nextQ(); }, 400);
}

function nextQ() {
  if (answers[qIdx] === null) return; // shouldn't happen with auto-advance
  var total = (QS[lang] || QS.en).length;
  if (qIdx < total - 1) {
    qIdx++;
    renderQ();
  } else {
    showResults();
  }
}

function prevQ() {
  if (qIdx > 0) {
    qIdx--;
    renderQ();
  }
}

// ══════════════════════════════════════════
// SCORING  (from QAD-10 in the PDF)
// Anxiety  = Q2 + Q4 + (6−Q6) + Q7        [indices 1,3,5,6]
// Avoidance= (6−Q1) + Q3 + Q5 + Q8        [indices 0,2,4,7]
// Q9 (index 8) = disorganized marker
// ══════════════════════════════════════════

function calcScores() {
  var a        = answers;
  var anxiety  = a[1] + a[3] + (6 - a[5]) + a[6];
  var avoidance = (6 - a[0]) + a[2] + a[4] + a[7];
  var q9       = a[8];
  return { anxiety: anxiety, avoidance: avoidance, q9: q9 };
}

function classify(anx, avo, q9) {
  if (anx > 14 && avo > 14)  return 'fearful';
  if (anx > 14)              return 'anxious';
  if (avo > 14)              return 'dismissive';
  if (anx < 8  && avo < 8)  return 'secure';
  // middle ground
  if (q9 >= 4 && anx >= 11 && avo >= 11) return 'fearful';
  if (anx > avo)  return 'anxious';
  if (avo > anx)  return 'dismissive';
  return 'secure';
}

// ══════════════════════════════════════════
// RESULTS
// ══════════════════════════════════════════

function showResults() {
  document.getElementById('quiz').classList.remove('active');
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('results').classList.add('active');

  var scores = calcScores();
  var sk     = classify(scores.anxiety, scores.avoidance, scores.q9);
  var s      = STYLES[sk];

  // Badge & header
  var badge = document.getElementById('styleBadge');
  badge.textContent = s.name;
  badge.style.background = s.bg;
  badge.style.color = s.color;

  document.getElementById('styleTitle').textContent = s.name;
  document.getElementById('styleTitle').style.color = s.color;
  document.getElementById('styleTagline').textContent = s.tagline;

  // Scores
  document.getElementById('anxScore').innerHTML = scores.anxiety + '<span class="score-max">/20</span>';
  document.getElementById('anxScore').style.color = s.color;
  document.getElementById('avoScore').innerHTML = scores.avoidance + '<span class="score-max">/20</span>';

  // 2D map
  drawMap(scores.anxiety, scores.avoidance, sk);

  // About tab
  document.getElementById('tab-about').innerHTML = buildAbout(s.about);

  // Exercises tab
  document.getElementById('tab-exercises').innerHTML =
    '<div class="exercise-list">' +
    s.exercises.map(function(e) {
      return '<div class="ex-item">' +
             '<div class="ex-goal">' + e.goal + '</div>' +
             '<div class="ex-name">' + e.name + '</div>' +
             '<div class="ex-desc">' + e.desc + '</div>' +
             '</div>';
    }).join('') +
    '</div>';

  // Path tab
  document.getElementById('tab-path').innerHTML =
    '<div class="steps-list">' +
    s.steps.map(function(step, i) {
      return '<div class="step">' +
             '<div class="step-num">' + (i + 1) + '</div>' +
             '<div><div class="step-title">' + step.title + '</div>' +
             '<div class="step-desc">' + step.desc + '</div></div>' +
             '</div>';
    }).join('') +
    '</div>';

  // Resources tab
  document.getElementById('tab-resources').innerHTML = buildResources(s);

  // All 4 styles
  document.getElementById('stylesGrid').innerHTML = Object.values(STYLES).map(function(st) {
    var isYou = st.key === sk;
    return '<div class="style-mini" style="border-color:' + (isYou ? st.color : 'var(--border)') +
           ';background:' + (isYou ? st.bg : 'var(--card)') + '">' +
           '<div class="style-mini-name"><span class="style-dot" style="background:' + st.color + '"></span>' +
           st.name + (isYou ? '<span class="you-tag">← You</span>' : '') + '</div>' +
           '<div class="style-mini-desc">' + st.short + '</div>' +
           '</div>';
  }).join('');

  setTab('about');
  applyTR();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildAbout(blocks) {
  return blocks.map(function(b) {
    if (b.type === 'text')    return '<p class="tab-text">' + b.content.replace(/\n/g, '<br>') + '</p>';
    if (b.type === 'belief')  return '<div class="belief-card">' + b.content + '</div>';
    if (b.type === 'heading') return '<div class="tab-h">' + b.content + '</div>';
    return '';
  }).join('');
}

function buildResources(s) {
  var books = s.books.map(function(r) {
    return '<div class="res-item"><div class="res-icon">📖</div><div>' +
           '<div class="res-name">' + r.name + '</div>' +
           '<div class="res-meta">' + r.author + ' — ' + r.desc + '</div>' +
           '</div></div>';
  }).join('');

  var media = s.media.map(function(r) {
    var inner = '<div class="res-icon">🎬</div><div>' +
                '<div class="res-name">' + r.name + '</div>' +
                '<div class="res-meta">' + r.author + ' — ' + r.desc + '</div>' +
                '</div><div class="res-arrow">↗</div>';
    return '<a class="res-item res-link" href="' + r.url + '" target="_blank" rel="noopener noreferrer">' + inner + '</a>';
  }).join('');

  return '<div class="res-section">' +
         '<div class="res-section-title">📚 Recommended Books</div>' +
         '<div class="res-list">' + books + '</div>' +
         '</div>' +
         '<div class="res-section">' +
         '<div class="res-section-title">🎧 YouTube & Podcasts</div>' +
         '<div class="res-list">' + media + '</div>' +
         '</div>' +
         '<div class="res-section">' +
         '<div class="res-section-title">💡 Remember</div>' +
         '<div class="res-item"><div class="res-icon">🌱</div><div>' +
         '<div class="res-name">Earned Security is Real</div>' +
         '<div class="res-meta">Research shows adults can move toward secure attachment through intentional work — therapy, self-reflection, and corrective relationships. It takes time, but it genuinely happens.</div>' +
         '</div></div>' +
         '</div>';
}

// ══════════════════════════════════════════
// 2D ATTACHMENT MAP (SVG)
// ══════════════════════════════════════════

function drawMap(anx, avo, sk) {
  var svg = document.getElementById('attachMap');
  var W = 300, H = 300, PAD = 44;
  var PW = W - PAD * 2;
  var PH = H - PAD * 2;
  var MX = PAD + PW / 2;
  var MY = PAD + PH / 2;

  // Score range 4–20 → normalized 0–1
  var nx = (avo - 4) / 16;
  var ny = 1 - (anx - 4) / 16; // invert: high anxiety = top of SVG
  var dx = PAD + nx * PW;
  var dy = PAD + ny * PH;
  var sc = STYLES[sk].color;

  svg.innerHTML =
    // Quadrant fills
    '<rect x="' + PAD + '" y="' + PAD + '" width="' + (PW/2) + '" height="' + (PH/2) + '" fill="#FAEDE8" opacity="0.6" rx="3"/>' +
    '<rect x="' + MX  + '" y="' + PAD + '" width="' + (PW/2) + '" height="' + (PH/2) + '" fill="#F2EBF9" opacity="0.6" rx="3"/>' +
    '<rect x="' + PAD + '" y="' + MY  + '" width="' + (PW/2) + '" height="' + (PH/2) + '" fill="#EBF4EE" opacity="0.6" rx="3"/>' +
    '<rect x="' + MX  + '" y="' + MY  + '" width="' + (PW/2) + '" height="' + (PH/2) + '" fill="#E8F0F8" opacity="0.6" rx="3"/>' +
    // Axis lines
    '<line x1="' + MX  + '" y1="' + PAD      + '" x2="' + MX         + '" y2="' + (PAD+PH) + '" stroke="#D8D2C9" stroke-width="1.5" stroke-dasharray="4,3"/>' +
    '<line x1="' + PAD + '" y1="' + MY        + '" x2="' + (PAD+PW)   + '" y2="' + MY       + '" stroke="#D8D2C9" stroke-width="1.5" stroke-dasharray="4,3"/>' +
    // Quadrant labels
    '<text x="' + (PAD+PW*0.25) + '" y="' + (PAD+PH*0.22) + '" text-anchor="middle" font-size="10" font-weight="700" fill="#D97757" font-family="Nunito,sans-serif">Anxious</text>' +
    '<text x="' + (PAD+PW*0.75) + '" y="' + (PAD+PH*0.22) + '" text-anchor="middle" font-size="10" font-weight="700" fill="#9370B8" font-family="Nunito,sans-serif">Fearful</text>' +
    '<text x="' + (PAD+PW*0.25) + '" y="' + (PAD+PH*0.78) + '" text-anchor="middle" font-size="10" font-weight="700" fill="#6B9E78" font-family="Nunito,sans-serif">Secure</text>' +
    '<text x="' + (PAD+PW*0.75) + '" y="' + (PAD+PH*0.78) + '" text-anchor="middle" font-size="10" font-weight="700" fill="#5B8CB5" font-family="Nunito,sans-serif">Dismissive</text>' +
    // Axis arrow labels
    '<text x="' + (W/2) + '" y="' + (H-6) + '" text-anchor="middle" font-size="10" fill="#9E9890" font-family="Nunito,sans-serif">Avoidance →</text>' +
    '<text x="11" y="' + (H/2) + '" text-anchor="middle" font-size="10" fill="#9E9890" font-family="Nunito,sans-serif" transform="rotate(-90,11,' + (H/2) + ')">← Anxiety</text>' +
    // User dot
    '<circle cx="' + dx + '" cy="' + dy + '" r="16" fill="' + sc + '" opacity="0.15"/>' +
    '<circle cx="' + dx + '" cy="' + dy + '" r="10" fill="' + sc + '" stroke="white" stroke-width="2.5"/>' +
    '<text x="' + dx + '" y="' + (dy - 17) + '" text-anchor="middle" font-size="10" font-weight="700" fill="' + sc + '" font-family="Nunito,sans-serif">You</text>';
}

// ══════════════════════════════════════════
// TABS
// ══════════════════════════════════════════

function setTab(id) {
  var ids = ['about', 'exercises', 'path', 'resources'];
  document.querySelectorAll('.tab-btn').forEach(function(b, i) {
    b.classList.toggle('active', ids[i] === id);
  });
  document.querySelectorAll('.tab-pane').forEach(function(p) {
    p.classList.remove('active');
  });
  document.getElementById('tab-' + id).classList.add('active');
}

// ══════════════════════════════════════════
// RESET
// ══════════════════════════════════════════

function resetQuiz() {
  document.getElementById('results').classList.remove('active');
  document.getElementById('hero').style.display = '';
  answers = new Array(10).fill(null);
  qIdx = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════

buildLangMenu();
applyTR();
