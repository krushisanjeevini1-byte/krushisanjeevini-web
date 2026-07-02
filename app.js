/* ==========================================================================
   KrushiSanjeevini Main Logic & State Controller (app.js)
   ========================================================================== */

// 1. Core State & Default Guides Data
const DEFAULT_GUIDES = [
    {
        id: "default-1",
        title: "KrushiSanjeevini Mobile App: Complete Onboarding Tour",
        category: "tutorials",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // YouTube embed link
        coverUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80",
        description: "A complete step-by-step tour of the KrushiSanjeevini smart farming application. Learn how to navigate the home screen, switch languages, complete your farmer profile, and activate your premium subscription to unlock deep AI crop diagnostics."
    },
    {
        id: "default-2",
        title: "How to Diagnose Crop Leaf Diseases Instantly using AI",
        category: "crop-care",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        coverUrl: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80",
        description: "Watch how the mobile AI scanning feature works. Simply tap 'Diagnose Crop', hold your camera 15cm from the infected crop leaf, capture a clear picture, and receive organic and chemical solutions in 5 seconds to prevent crop failure."
    },
    {
        id: "default-3",
        title: "How to Check Live APMC Market Mandi Rates",
        category: "market",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        coverUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
        description: "This guide explains how to search for agricultural market commodity prices near Davanagere or other districts in Karnataka. Learn how state-level APMC portals sync live rates directly to your mobile app so you get the best deal."
    },
    {
        id: "default-4",
        title: "Renting Seeds Trays and Moisture Meters Near You",
        category: "tools",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        coverUrl: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80",
        description: "Unlock high-quality tools without buying them. This video guides you on using the 'Tools' section of KrushiSanjeevini to find rentals of seed trays, humidity meters, and heavy tractors with direct contact phone dialers."
    }
];

// i18n Translation Dictionary
const TRANSLATIONS = {
    en: {
        "app-subtitle": "Smart Farming for India 🇮🇳",
        "nav-home": "Home",
        "nav-simulator": "App Simulator",
        "nav-features": "Features",
        "nav-videos": "Video Guides",
        "nav-admin": "Admin Panel",
        "download-btn-top": "Click Here To",
        "download-btn-bottom": "Get The App",
        "hero-badge": "Empowering Indian Farmers",
        "hero-title": "Revolutionize Your Farming with <span>KrushiSanjeevini</span>",
        "hero-description": "An all-in-one mobile app designed to help farmers boost crop yields, diagnose plant diseases instantly, track market rates, find quality farm tools, and access expert agricultural advice in their native language.",
        "hero-btn-simulator": "Try App Simulator",
        "hero-btn-videos": "Watch Video Guides",
        "stat-features-txt": "Key Features",
        "stat-langs-txt": "Languages Supported",
        "stat-solutions-txt": "Organic Solutions",
        "sim-quick-actions": "QUICK ACTIONS",
        "sim-weather-cloudy": "Cloudy",
        "sim-weather-loc": "Davanagere",
        "sim-act-1-title": "Crop Suggestion",
        "sim-act-1-desc": "Get AI crop recommendations",
        "sim-act-2-title": "Diagnose Crop",
        "sim-act-2-desc": "Identify plant diseases",
        "sim-act-3-title": "Market Prices",
        "sim-act-3-desc": "Live APMC market rates",
        "sim-act-4-title": "Farming Tips",
        "sim-act-4-desc": "Expert farming advice",
        "sim-act-5-title": "Animal Tips",
        "sim-act-5-desc": "Livestock care guide",
        "sim-act-6-title": "Byproduct Tips",
        "sim-act-6-desc": "Waste to wealth ideas",
        "sim-act-7-title": "Gardening Tips",
        "sim-act-7-desc": "Home garden tips",
        "sim-act-8-title": "Organic Fertilizer",
        "sim-act-8-desc": "Natural fertilizers you can make",
        "sim-act-9-title": "Govt Schemes",
        "sim-act-9-desc": "Subsidies, insurance & loans",
        "sim-act-10-title": "Tools",
        "sim-act-10-desc": "Farm equipment & hire",
        "sim-nav-home": "Home",
        "sim-nav-tools": "Tools",
        "sim-nav-market": "Market Prices",
        "sim-nav-profile": "Profile",
        "sim-tools-title": "Tools",
        "sim-tools-placeholder": "Search Tools...",
        "sim-search-btn": "Search",
        "sim-tool-1-title": "Seed Germination Tray (50/100 Cell)",
        "sim-tool-1-desc": "Seed Germination Tray with 50 or 100 cells for starting seedlings. Made from reusable food-grade plastic. Fill with cocopeat or seedling mix, sow seeds, and water gently. Ideal...",
        "sim-tool-2-title": "Soil Moisture Meter",
        "sim-tool-2-desc": "Soil Moisture Meter gives instant moisture readings without batteries. Insert the probe 10-20 cm into soil to get a reading...",
        "sim-read-more": "Read more →",
        "sim-market-title": "Market Prices",
        "sim-market-search-btn": "Search Prices",
        "sim-market-empty-title": "No prices reported today",
        "sim-market-empty-desc": "No prices reported for Davanagere today. Many mandis update late in the day or stay closed on holidays. Please check back later, or search your state name (like Karnataka) to see other markets.",
        "sim-profile-premium": "Premium Active",
        "sim-profile-valid": "Valid till 27 Jun 2027",
        "sim-profile-select-lang": "Select Your Language",
        "sim-profile-logout": "Logout",
        "feat-tag": "Explore Capabilities",
        "feat-title": "Key Features Inside The Mobile App",
        "feat-desc": "Get to know the powerful utilities built inside KrushiSanjeevini designed to simplify farming.",
        "feat-1-title": "AI Crop Suggestions",
        "feat-1-desc": "Matches soil configuration, location-based climate profiles, and humidity indices to recommend the best cash crops and seasonal vegetables for maximum output.",
        "feat-2-title": "Pest & Disease Diagnosis",
        "feat-2-desc": "Upload or capture clear photos of affected crops. Advanced image-recognition model diagnoses root causes and outlines organic pest controls or targeted spray dosages.",
        "feat-3-title": "Live APMC Market Rates",
        "feat-3-desc": "Real-time updates directly from government APMC portals. Track current minimum, maximum, and average rates of grains, vegetables, and fruits in your closest mandis.",
        "feat-4-title": "Smart Tools Rentals",
        "feat-4-desc": "Rent high-quality farming devices and heavy equipment from nearby verified rental distributors. Reach them directly using built-in one-tap call dialing.",
        "feat-5-title": "Multi-language Assistance",
        "feat-5-desc": "Farming made accessible. Switch interface settings dynamically between English, Kannada, Hindi, Tamil, Telugu, Marathi, and other regional languages.",
        "feat-6-title": "Organic DIY Fertilizer Guide",
        "feat-6-desc": "Learn step-by-step methods to produce premium-grade organic compost, liquid bio-fertilizers, and insect repellent recipes right on your homestead.",
        "hub-tag": "Farmer Learning Hub",
        "hub-title": "App Guides & Recorded Walkthroughs",
        "hub-desc": "Watch recorded videos and detailed feature walkthroughs to master the mobile app.",
        "hub-filter-all": "All Videos",
        "hub-filter-tutorials": "App Tutorials",
        "hub-filter-crop": "Crop Care",
        "hub-filter-market": "Market Rates",
        "hub-filter-tools": "Tools & Equipment",
        "footer-pitch": "Bringing state-of-the-art agricultural technology, AI-driven diagnostics, and localized APMC mandi rates direct to India's farming communities.",
        "footer-connect": "Connect With Us",
        
        // Default Guides Translations
        "default-1-title": "KrushiSanjeevini Mobile App: Complete Onboarding Tour",
        "default-1-desc": "A complete step-by-step tour of the KrushiSanjeevini smart farming application. Learn how to navigate the home screen, switch languages, complete your farmer profile, and activate your premium subscription to unlock deep AI crop diagnostics.",
        "default-2-title": "How to Diagnose Crop Leaf Diseases Instantly using AI",
        "default-2-desc": "Watch how the mobile AI scanning feature works. Simply tap 'Diagnose Crop', hold your camera 15cm from the infected crop leaf, capture a clear picture, and receive organic and chemical solutions in 5 seconds to prevent crop failure.",
        "default-3-title": "How to Check Live APMC Market Mandi Rates",
        "default-3-desc": "This guide explains how to search for agricultural market commodity prices near Davanagere or other districts in Karnataka. Learn how state-level APMC portals sync live rates directly to your mobile app so you get the best deal.",
        "default-4-title": "Renting Seeds Trays and Moisture Meters Near You",
        "default-4-desc": "Unlock high-quality tools without buying them. This video guides you on using the 'Tools' section of KrushiSanjeevini to find rentals of seed trays, humidity meters, and heavy tractors with direct contact phone dialers."
    },
    hi: {
        "app-subtitle": "भारत के लिए स्मार्ट खेती 🇮🇳",
        "nav-home": "होम",
        "nav-simulator": "ऐप सिम्युलेटर",
        "nav-features": "विशेषताएं",
        "nav-videos": "वीडियो गाइड",
        "nav-admin": "एडमिन पैनल",
        "download-btn-top": "यहाँ क्लिक करें",
        "download-btn-bottom": "ऐप डाउनलोड करें",
        "hero-badge": "भारतीय किसानों को सशक्त बनाना",
        "hero-title": "अपनी खेती में क्रांति लाएं <span>कृषि संजीवनी</span> के साथ",
        "hero-description": "किसानों को फसल की पैदावार बढ़ाने, पौधों की बीमारियों का तुरंत निदान करने, बाजार दरों को ट्रैक करने, गुणवत्ता वाले कृषि उपकरण खोजने और उनकी मातृभाषा में विशेषज्ञ कृषि सलाह प्राप्त करने में मदद करने के लिए डिज़ाइन किया गया एक ऑल-इन-वन मोबाइल ऐप।",
        "hero-btn-simulator": "ऐप सिम्युलेटर आज़माएं",
        "hero-btn-videos": "वीडियो गाइड देखें",
        "stat-features-txt": "प्रमुख विशेषताएं",
        "stat-langs-txt": "समर्थित भाषाएँ",
        "stat-solutions-txt": "जैविक समाधान",
        "sim-quick-actions": "त्वरित विकल्प",
        "sim-weather-cloudy": "बादल छाए हैं",
        "sim-weather-loc": "दावणगेरे",
        "sim-act-1-title": "फसल सुझाव",
        "sim-act-1-desc": "AI फसल सिफारिशें प्राप्त करें",
        "sim-act-2-title": "फसल निदान",
        "sim-act-2-desc": "पौधों की बीमारियों की पहचान करें",
        "sim-act-3-title": "बाजार मूल्य",
        "sim-act-3-desc": "लाइव APMC बाजार दरें",
        "sim-act-4-title": "खेती के टिप्स",
        "sim-act-4-desc": "विशेषज्ञ खेती सलाह",
        "sim-act-5-title": "पशु टिप्स",
        "sim-act-5-desc": "पशुधन देखभाल गाइड",
        "sim-act-6-title": "बायप्रोडक्ट टिप्स",
        "sim-act-6-desc": "कचरे से कंचन बनाने के विचार",
        "sim-act-7-title": "बागवानी टिप्स",
        "sim-act-7-desc": "गृह वाटिका टिप्स",
        "sim-act-8-title": "जैविक खाद",
        "sim-act-8-desc": "प्राकृतिक खाद जो आप बना सकते हैं",
        "sim-act-9-title": "सरकारी योजनाएं",
        "sim-act-9-desc": "सब्सिडी, बीमा और ऋण",
        "sim-act-10-title": "कृषि उपकरण",
        "sim-act-10-desc": "कृषि उपकरण किराए पर लें",
        "sim-nav-home": "होम",
        "sim-nav-tools": "उपकरण",
        "sim-nav-market": "बाजार मूल्य",
        "sim-nav-profile": "प्रोफ़ाइल",
        "sim-tools-title": "उपकरण",
        "sim-tools-placeholder": "उपकरण खोजें...",
        "sim-search-btn": "खोजें",
        "sim-tool-1-title": "बीज अंकुरण ट्रे (50/100 सेल)",
        "sim-tool-1-desc": "पौधों को उगाने के लिए 50 या 100 सेल वाली बीज अंकुरण ट्रे। पुन: प्रयोज्य प्लास्टिक से बनी। कोकोपीट भरें, बीज बोएं, और धीरे से पानी दें।",
        "sim-tool-2-title": "मृदा नमी मीटर",
        "sim-tool-2-desc": "मृदा नमी मीटर बिना बैटरी के तुरंत नमी की रीडिंग देता है। रीडिंग प्राप्त करने के लिए जांच को मिट्टी में 10-20 सेमी डालें...",
        "sim-read-more": "और पढ़ें →",
        "sim-market-title": "बाजार मूल्य",
        "sim-market-search-btn": "दरें खोजें",
        "sim-market-empty-title": "आज कोई दरें नहीं मिलीं",
        "sim-market-empty-desc": "आज दावणगेरे के लिए कोई दरें दर्ज नहीं की गई हैं। कई मंडियां दिन में देर से अपडेट होती हैं या छुट्टियों पर बंद रहती हैं। कृपया बाद में दोबारा जांचें, या अन्य मंडियों को देखने के लिए अपने राज्य का नाम (जैसे कर्नाटक) खोजें।",
        "sim-profile-premium": "प्रीमियम सक्रिय है",
        "sim-profile-valid": "27 जून 2027 तक वैध",
        "sim-profile-select-lang": "अपनी भाषा चुनें",
        "sim-profile-logout": "लॉगआउट",
        "feat-tag": "क्षमताओं का अन्वेषण करें",
        "feat-title": "मोबाइल ऐप के अंदर प्रमुख विशेषताएं",
        "feat-desc": "खेती को आसान बनाने के लिए कृषि संजीवनी के अंदर निर्मित शक्तिशाली उपयोगिताओं को जानें।",
        "feat-1-title": "AI फसल सुझाव",
        "feat-1-desc": "अधिकतम उत्पादन के लिए सर्वोत्तम नकदी फसलों और मौसमी सब्जियों की सिफारिश करने के लिए मिट्टी की संरचना, स्थान-आधारित जलवायु और आर्द्रता सूचकांकों का मिलान करता है।",
        "feat-2-title": "कीट और रोग निदान",
        "feat-2-desc": "प्रभावित फसलों की स्पष्ट तस्वीरें अपलोड या कैप्चर करें। उन्नत छवि-पहचान मॉडल मूल कारणों का निदान करता है और उपचार की रूपरेखा तैयार करता है।",
        "feat-3-title": "लाइव APMC बाजार दरें",
        "feat-3-desc": "सरकारी APMC पोर्टलों से सीधे वास्तविक समय के अपडेट। अपनी निकटतम मंडियों में अनाज, सब्जियों और फलों की वर्तमान दरों को ट्रैक करें।",
        "feat-4-title": "स्मार्ट उपकरण किराए पर लें",
        "feat-4-desc": "आस-पास के सत्यापित किराए पर देने वाले वितरकों से उच्च गुणवत्ता वाले खेती के उपकरण और भारी मशीनरी किराए पर लें। ऐप से सीधे कॉल करें।",
        "feat-5-title": "बहुभाषी सहायता",
        "feat-5-desc": "खेती को सुलभ बनाया गया। अंग्रेजी, कन्नड़, हिंदी, तमिल, तेलुगु, मराठी और अन्य क्षेत्रीय भाषाओं के बीच इंटरफ़ेस सेटिंग्स को बदलें।",
        "feat-6-title": "जैविक खाद गाइड",
        "feat-6-desc": "अपने खेत पर ही प्रीमियम-ग्रेड जैविक खाद, तरल जैव-उर्वरक और कीट विकर्षक बनाने की चरण-दर-चरण विधियां सीखें।",
        "hub-tag": "किसान शिक्षण केंद्र",
        "hub-title": "ऐप गाइड और रिकॉर्ड किए गए वीडियो",
        "hub-desc": "मोबाइल ऐप में महारत हासिल करने के लिए रिकॉर्ड किए गए वीडियो और विस्तृत वॉकथ्रू देखें।",
        "hub-filter-all": "सभी वीडियो",
        "hub-filter-tutorials": "ऐप ट्यूटोरियल",
        "hub-filter-crop": "फसल देखभाल",
        "hub-filter-market": "बाजार दरें",
        "hub-filter-tools": "उपकरण और मशीनरी",
        "footer-pitch": "भारत के किसान समुदायों के लिए अत्याधुनिक कृषि तकनीक, AI-संचालित निदान और स्थानीयकृत APMC मंडी दरों को सीधे लाना।",
        "footer-connect": "हमसे जुड़ें",
        
        // Default Guides Translations
        "default-1-title": "कृषि संजीवनी मोबाइल ऐप: सम्पूर्ण ऑनबोर्डिंग टूर",
        "default-1-desc": "कृषि संजीवनी स्मार्ट फार्मिंग एप्लिकेशन का एक पूरा चरण-दर-चरण दौरा। होम स्क्रीन को नेविगेट करना, भाषा बदलना, अपना प्रोफाइल पूरा करना और प्रीमियम सदस्यता को सक्रिय करना सीखें।",
        "default-2-title": "AI का उपयोग करके फसल के पत्तों की बीमारियों का तुरंत निदान कैसे करें",
        "default-2-desc": "देखें कि मोबाइल AI स्कैनिंग सुविधा कैसे काम करती है। बस 'फसल निदान' पर टैप करें, अपने कैमरे को पत्ती से 15 सेमी की दूरी पर रखें, एक स्पष्ट तस्वीर लें, और उपचार पाएं।",
        "default-3-title": "लाइव APMC बाजार मंडी दरों की जांच कैसे करें",
        "default-3-desc": "यह मार्गदर्शिका दावणगेरे या कर्नाटक के अन्य जिलों के पास कृषि बाजार वस्तुओं की कीमतों की खोज करना समझाती है। जानें कि लाइव दरें सीधे आपके ऐप पर कैसे सिंक होती हैं।",
        "default-4-title": "अपने पास बीज ट्रे और नमी मीटर किराए पर लेना",
        "default-4-desc": "खरीदे बिना उच्च गुणवत्ता वाले उपकरणों का उपयोग करें। यह वीडियो आपको बीज ट्रे, नमी मीटर और ट्रैक्टरों के किराए खोजने के लिए 'कृषि उपकरण' अनुभाग का उपयोग करना सिखाता है।"
    },
    kn: {
        "app-subtitle": "ಭಾರತಕ್ಕಾಗಿ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ 🇮🇳",
        "nav-home": "ಮುಖಪುಟ",
        "nav-simulator": "ಆಪ್ ಸಿಮ್ಯುಲೇಟರ್",
        "nav-features": "ವೈಶಿಷ್ಟ್ಯಗಳು",
        "nav-videos": "ವಿಡಿಯೋ ಗೈಡ್ಸ್",
        "nav-admin": "ಅಡ್ಮಿನ್ ಪ್ಯಾನಲ್",
        "download-btn-top": "ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ",
        "download-btn-bottom": "ಆಪ್ ಪಡೆಯಿರಿ",
        "hero-badge": "ಭಾರತೀಯ ರೈತರ ಸಬಲೀಕರಣ",
        "hero-title": "ನಿಮ್ಮ ಕೃಷಿಯನ್ನು ಕ್ರಾಂತಿಕಾರಿಗೊಳಿಸಿ <span>ಕೃಷಿಸಂಜೀವಿನಿ</span> ಯೊಂದಿಗೆ",
        "hero-description": "ರೈತರಿಗೆ ಬೆಳೆ ಇಳುವರಿ ಹೆಚ್ಚಿಸಲು, ಸಸ್ಯ ರೋಗಗಳನ್ನು ತಕ್ಷಣವೇ ಪತ್ತೆಹಚ್ಚಲು, ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ತಿಳಿಯಲು, ಗುಣಮಟ್ಟದ ಕೃಷಿ ಉಪಕರಣಗಳನ್ನು ಹುಡುಕಲು ಮತ್ತು ಅವರ ಮಾತೃಭಾಷೆಯಲ್ಲಿ ತಜ್ಞರ ಸಲಹೆಯನ್ನು ಪಡೆಯಲು ಸಹಾಯ ಮಾಡುವ ಆಲ್-ಇನ್-ಒನ್ ಆಪ್.",
        "hero-btn-simulator": "ಸಿಮ್ಯುಲೇಟರ್ ಬಳಸಿ ನೋಡಿ",
        "hero-btn-videos": "ವಿಡಿಯೋ ಮಾರ್ಗದರ್ಶಿ ನೋಡಿ",
        "stat-features-txt": "ಮುಖ್ಯ ವೈಶಿಷ್ಟ್ಯಗಳು",
        "stat-langs-txt": "ಬೆಂಬಲಿತ ಭಾಷೆಗಳು",
        "stat-solutions-txt": "ಸಾವಯವ ಪರಿಹಾರಗಳು",
        "sim-quick-actions": "ತ್ವರಿತ ಕ್ರಮಗಳು",
        "sim-weather-cloudy": "ಮೋಡ ಕವಿದ ವಾತಾವರಣ",
        "sim-weather-loc": "ದಾವಣಗೆರೆ",
        "sim-act-1-title": "ಬೆಳೆ ಸಲಹೆ",
        "sim-act-1-desc": "AI ಬೆಳೆ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ",
        "sim-act-2-title": "ಬೆಳೆ ರೋಗ ಪತ್ತೆ",
        "sim-act-2-desc": "ಸಸ್ಯ ರೋಗಗಳನ್ನು ಗುರುತಿಸಿ",
        "sim-act-3-title": "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ",
        "sim-act-3-desc": "ಲೈವ್ APMC ಮಾರುಕಟ್ಟೆ ದರಗಳು",
        "sim-act-4-title": "ಕೃಷಿ ಸಲಹೆಗಳು",
        "sim-act-4-desc": "ತಜ್ಞರ ಕೃಷಿ ಸಲಹೆ",
        "sim-act-5-title": "ಪಶು ಸಲಹೆಗಳು",
        "sim-act-5-desc": "ಜಾನುವಾರು ಆರೈಕೆ ಮಾರ್ಗದರ್ಶಿ",
        "sim-act-6-title": "ಉಪ-ಉತ್ಪನ್ನ ಸಲಹೆ",
        "sim-act-6-desc": "ತ್ಯಾಜ್ಯದಿಂದ ಸಂಪತ್ತು ಮಾಡುವ ವಿಚಾರಗಳು",
        "sim-act-7-title": "ತೋಟಗಾರಿಕೆ ಸಲಹೆ",
        "sim-act-7-desc": "ಮನೆ ತೋಟದ ಸಲಹೆಗಳು",
        "sim-act-8-title": "ಸಾವಯವ ಗೊಬ್ಬರ",
        "sim-act-8-desc": "ನೀವೇ ತಯಾರಿಸಬಹುದಾದ ನೈಸರ್ಗಿಕ ಗೊಬ್ಬರ",
        "sim-act-9-title": "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        "sim-act-9-desc": "ಸಹಾಯಧನ, ವಿಮೆ ಮತ್ತು ಸಾಲಗಳು",
        "sim-act-10-title": "ಸಕರಣೆಗಳು",
        "sim-act-10-desc": "ಕೃಷಿ ಉಪಕರಣ ಬಾಡಿಗೆಗೆ",
        "sim-nav-home": "ಮುಖಪುಟ",
        "sim-nav-tools": "ಉಪಕರಣಗಳು",
        "sim-nav-market": "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ",
        "sim-nav-profile": "ಪ್ರೊಫೈಲ್",
        "sim-tools-title": "ಉಪಕರಣಗಳು",
        "sim-tools-placeholder": "ಉಪಕರಣಗಳನ್ನು ಹುಡುಕಿ...",
        "sim-search-btn": "ಹುಡುಕಿ",
        "sim-tool-1-title": "ಬೀಜ ಮೊಳಕೆಯೊಡೆಯುವ ಟ್ರೇ (50/100 ಸೆಲ್)",
        "sim-tool-1-desc": "ಸಸಿಗಳನ್ನು ಬೆಳೆಸಲು 50 ಅಥವಾ 100 ಕೋಶಗಳನ್ನು ಹೊಂದಿರುವ ಟ್ರೇ. ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ ಪ್ಲಾಸ್ಟಿಕ್‌ನಿಂದ ಮಾಡಲ್ಪಟ್ಟಿದೆ. ಕೊಕೊಪೀಟ್ ಹಾಕಿ ಬೀಜ ಬಿತ್ತಿ...",
        "sim-tool-2-title": "ಮಣ್ಣಿನ ತೇವಾಂಶ ಮಾಪಕ",
        "sim-tool-2-desc": "ಮಣ್ಣಿನ ತೇವಾಂಶ ಮಾಪಕವು ಬ್ಯಾಟರಿ ಇಲ್ಲದೆ ತಕ್ಷಣದ ತೇವಾಂಶವನ್ನು ತೋರಿಸುತ್ತದೆ. ಮಣ್ಣಿನಲ್ಲಿ 10-20 ಸೆಂ.ಮೀ ಆಳಕ್ಕೆ ಇಳಿಸಿ ನೋಡಿ...",
        "sim-read-more": "ಹೆಚ್ಚು ಓದಿ →",
        "sim-market-title": "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ",
        "sim-market-search-btn": "ಬೆಲೆ ಹುಡುಕಿ",
        "sim-market-empty-title": "ಇಂದು ಯಾವುದೇ ಬೆಲೆ ವರದಿಯಾಗಿಲ್ಲ",
        "sim-market-empty-desc": "ದಾವಣಗೆರೆಗೆ ಇಂದು ಯಾವುದೇ ಬೆಲೆಗಳು ವರದಿಯಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು ನಂತರ ಪರಿಶೀಲಿಸಿ, ಅಥವಾ ಇತರ ಮಾರುಕಟ್ಟೆಗಳನ್ನು ನೋಡಲು ನಿಮ್ಮ ರಾಜ್ಯದ ಹೆಸರನ್ನು (ಉದಾಹರಣೆಗೆ ಕರ್ನಾಟಕ) ಹುಡುಕಿ.",
        "sim-profile-premium": "ಪ್ರೀಮಿಯಂ ಸಕ್ರಿಯವಾಗಿದೆ",
        "sim-profile-valid": "27 ಜೂನ್ 2027 ರವರೆಗೆ ಮಾನ್ಯವಾಗಿದೆ",
        "sim-profile-select-lang": "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        "sim-profile-logout": "ಲಾಗ್ ಔಟ್",
        "feat-tag": "ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        "feat-title": "ಮೊಬೈಲ್ ಆಪ್ ಒಳಗೆ ಇರುವ ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳು",
        "feat-desc": "ಕೃಷಿಯನ್ನು ಸರಳಗೊಳಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಕೃಷಿಸಂಜೀವಿನಿ ಆಪ್ ಒಳಗಿನ ಶಕ್ತಿಶಾಲಿ ಉಪಯುಕ್ತತೆಗಳನ್ನು ತಿಳಿಯಿರಿ.",
        "feat-1-title": "AI ಬೆಳೆ ಸಲಹೆಗಳು",
        "feat-1-desc": "ಗರಿಷ್ಠ ಇಳುವರಿಗಾಗಿ ಅತ್ಯುತ್ತಮ ನಗದು ಬೆಳೆಗಳು ಮತ್ತು ಕಾಲೋಚಿತ ತರಕಾರಿಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡಲು ಮಣ್ಣಿನ ಸಂಯೋಜನೆ ಮತ್ತು ಹವಾಮಾನವನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ.",
        "feat-2-title": "ಕೀಟ ಮತ್ತು ರೋಗ ಪತ್ತೆ",
        "feat-2-desc": "ಬಾಧಿತ ಬೆಳೆಗಳ ಫೋಟೋಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ಮುಂಗಡ ಇಮೇಜ್ ಮಾಡೆಲ್ ರೋಗದ ಮೂಲ ಕಾರಣಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಿ ಸಾವಯವ ಪರಿಹಾರಗಳನ್ನು ನೀಡುತ್ತದೆ.",
        "feat-3-title": "ಲೈವ್ APMC ಮಾರುಕಟ್ಟೆ ದರಗಳು",
        "feat-3-desc": "ಸರ್ಕಾರಿ APMC ಪೋರ್ಟಲ್‌ಗಳಿಂದ ನೇರ ನವೀಕರಣಗಳು. ನಿಮ್ಮ ಹತ್ತಿರದ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಧಾನ್ಯಗಳು, ತರಕಾರಿಗಳ ಪ್ರಸ್ತುತ ದರಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",
        "feat-4-title": "ಸ್ಮಾರ್ಟ್ ಉಪಕರಣ ಬಾಡಿಗೆ",
        "feat-4-desc": "ಹತ್ತಿರದ ಬಾಡಿಗೆ ವಿತರಕರಿಂದ ಉತ್ತಮ ಕೃಷಿ ಉಪಕರಣಗಳು ಮತ್ತು ಯಂತ್ರೋಪಕರಣಗಳನ್ನು ಬಾಡಿಗೆಗೆ ಪಡೆಯಿರಿ. ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ ಸಂಪರ್ಕಿಸಿ.",
        "feat-5-title": "ಬಹುಭಾಷಾ ನೆರವು",
        "feat-5-desc": "ಕೃಷಿ ಎಲ್ಲರಿಗೂ ಸುಲಭ. ಇಂಗ್ಲಿಷ್, ಕನ್ನಡ, ಹಿಂದಿ, ತಮಿಳು, ತೆಲುಗು, ಮರಾಠಿ ಭಾಷೆಗಳಿಗೆ ಆಪ್ ಅನ್ನು ಬದಲಾಯಿಸಿಕೊಳ್ಳಿ.",
        "feat-6-title": "ಸಾವಯವ ಗೊಬ್ಬರ ಮಾರ್ಗದರ್ಶಿ",
        "feat-6-desc": "ನಿಮ್ಮ ತೋಟದಲ್ಲೇ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಸಾವಯವ ಗೊಬ್ಬರ ಮತ್ತು ನೈಸರ್ಗಿಕ ಕೀಟನಾಶಕಗಳನ್ನು ತಯಾರಿಸುವ ಹಂತ-ಹಂತದ ವಿಧಾನಗಳನ್ನು ತಿಳಿಯಿರಿ.",
        "hub-tag": "ರೈತ ಕಲಿಕಾ ಕೇಂದ್ರ",
        "hub-title": "ಆಪ್ ಮಾರ್ಗದರ್ಶಿಗಳು ಮತ್ತು ವಿಡಿಯೋಗಳು",
        "hub-desc": "ಮೊಬೈಲ್ ಆಪ್ ಅನ್ನು ಬಳಸಲು ಕಲಿಸುವ ವಿಡಿಯೋಗಳು ಮತ್ತು ವಿವರವಾದ ಮಾರ್ಗದರ್ಶಿಗಳನ್ನು ನೋಡಿ.",
        "hub-filter-all": "ಎಲ್ಲಾ ವಿಡಿಯೋಗಳು",
        "hub-filter-tutorials": "ಆಪ್ ಟ್ಯುಟೋರಿಯಲ್",
        "hub-filter-crop": "ಬೆಳೆ ಆರೈಕೆ",
        "hub-filter-market": "ಮಾರುಕಟ್ಟೆ ದರಗಳು",
        "hub-filter-tools": "ಉಪಕರಣ ಮತ್ತು ಬಾಡಿಗೆ",
        "footer-pitch": "ಅತ್ಯಾಧುನಿಕ ಕೃಷಿ ತಂತ್ರಜ್ಞಾನ, AI ರೋಗ ಪತ್ತೆ ಮತ್ತು ಸ್ಥಳೀಯ APMC ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ಭಾರತದ ರೈತ ಸಮುದಾಯಗಳಿಗೆ ನೇರವಾಗಿ ತಲುಪಿಸುವುದು.",
        "footer-connect": "ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರಿ",
        
        // Default Guides Translations
        "default-1-title": "ಕೃಷಿಸಂಜೀವಿನಿ ಮೊಬೈಲ್ ಆಪ್: ಸಂಪೂರ್ಣ ಮಾಹಿತಿ ಮಾರ್ಗದರ್ಶಿ",
        "default-1-desc": "ಕೃಷಿಸಂಜೀವಿನಿ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಅಪ್ಲಿಕೇಶನ್‌ನ ಸಂಪೂರ್ಣ ಹಂತ-ಹಂತದ ಮಾಹಿತಿ. ಹೋಮ್ ಸ್ಕ್ರೀನ್ ಬಳಸುವುದನ್ನು, ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸುವುದನ್ನು, ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಪೂರ್ಣಗೊಳಿಸುವುದನ್ನು ಮತ್ತು ಪ್ರೀಮಿಯಂ ಚಂದಾದಾರಿಕೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವುದನ್ನು ತಿಳಿಯಿರಿ.",
        "default-2-title": "AI ಬಳಸಿ ಬೆಳೆ ಎಲೆ ರೋಗಗಳನ್ನು ತಕ್ಷಣವೇ ಪತ್ತೆ ಮಾಡುವುದು ಹೇಗೆ",
        "default-2-desc": "ಮೊಬೈಲ್ AI ಸ್ಕ್ಯಾನಿಂಗ್ ವೈಶಿಷ್ಟ್ಯವು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ನೋಡಿ. ಬೆಳೆ ರೋಗ ಪತ್ತೆ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ, ಕ್ಯಾಮೆರಾವನ್ನು ಎಲೆಯಿಂದ 15 ಸೆಂ.ಮೀ ದೂರದಲ್ಲಿ ಹಿಡಿದು ಫೋಟೋ ತೆಗೆಯಿರಿ.",
        "default-3-title": "ಲೈವ್ APMC ಮಾರುಕಟ್ಟೆ ಮಂಡಿ ದರಗಳನ್ನು ಪರಿಶೀಲಿಸುವುದು ಹೇಗೆ",
        "default-3-desc": "ದಾವಣಗೆರೆ ಅಥವಾ ಕರ್ನಾಟಕದ ಇತರ ಜಿಲ್ಲೆಗಳ ಕೃಷಿ ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ಹೇಗೆ ಹುಡುಕುವುದು ಎಂದು ಈ ಮಾರ್ಗದರ್ಶಿ ವಿವರಿಸುತ್ತದೆ. ಲೈವ್ ದರಗಳು ನಿಮ್ಮ ಆಪ್‌ನಲ್ಲಿ ಹೇಗೆ ಸಿಂಕ್ ಆಗುತ್ತವೆ ಎಂದು ತಿಳಿಯಿರಿ.",
        "default-4-title": "ನಿಮ್ಮ ಹತ್ತಿರದ ಪ್ರದೇಶದಲ್ಲಿ ಬೀಜ ಟ್ರೇಗಳು ಮತ್ತು ತೇವಾंಶ ಮಾಪಕಗಳನ್ನು ಬಾಡಿಗೆಗೆ ಪಡೆಯುವುದು",
        "default-4-desc": "ಉಪಕರಣಗಳನ್ನು ಖರೀದಿಸದೆಯೇ ಬಳಸಿ. ಬೀಜದ ಟ್ರೇಗಳು, ತೇವಾಂಶ ಮಾಪಕಗಳು ಮತ್ತು ಟ್ರ್ಯಾಕ್ಟರ್‌ಗಳನ್ನು ಬಾಡಿಗೆಗೆ ಹುಡುಕಲು 'ಸಕರಣೆಗಳು' ವಿಭಾಗವನ್ನು ಹೇಗೆ ಬಳಸುವುದು ಎಂದು ತಿಳಿಯಿರಿ."
    },
    te: {
        "app-subtitle": "భారత్ కోసం స్మార్ట్ వ్యవసాయం 🇮🇳",
        "nav-home": "హోమ్",
        "nav-simulator": "యాప్ సిమ్యులేటర్",
        "nav-features": "ఫీచర్స్",
        "nav-videos": "వీడియో గైడ్స్",
        "nav-admin": "అడ్మిన్ ప్యానెల్",
        "download-btn-top": "ఇక్కడ క్లిక్ చేయండి",
        "download-btn-bottom": "యాప్ పొందండి",
        "hero-badge": "భారతీయ రైతులకు సాధికారత",
        "hero-title": "మీ వ్యవసాయాన్ని మార్చండి <span>కృషిసంజీవిని</span> యాప్‌తో",
        "hero-description": "రైతులు తమ పంట దిగుబడిని పెంచుకోవడానికి, మొక్కల వ్యాధులను తక్షణమే గుర్తించడానికి, మార్కెట్ ధరలను తెలుసుకోవడానికి మరియు వారి మాతృభాషలో నిపుణుల సలహాలను పొందడానికి రూపొందించిన యాప్.",
        "hero-btn-simulator": "సిమ్యులేటర్ ప్రయత్నించండి",
        "hero-btn-videos": "వీడియో గైడ్లు చూడండి",
        "stat-features-txt": "ముఖ్య ఫీచర్లు",
        "stat-langs-txt": "భాషల సపోర్ट",
        "stat-solutions-txt": "సేంద్రీయ పరిష్కారాలు",
        "sim-quick-actions": "త్వరిత ఎంపికలు",
        "sim-weather-cloudy": "మబ్బుగా ఉంది",
        "sim-weather-loc": "దావణగెరె",
        "sim-act-1-title": "పంట సూచనలు",
        "sim-act-1-desc": "AI పంట సిఫార్సులు పొందండి",
        "sim-act-2-title": "పంట రోగ నిర్ధారణ",
        "sim-act-2-desc": "మొక్కల వ్యాధులను గుర్తించండి",
        "sim-act-3-title": "మార్కెట్ ధరలు",
        "sim-act-3-desc": "లైవ్ APMC మార్కెట్ ధరలు",
        "sim-act-4-title": "వ్యవసాయ చిట్కాలు",
        "sim-act-4-desc": "నిపుణుల వ్యవసాయ సలహా",
        "sim-act-5-title": "పశువుల చిట్కాలు",
        "sim-act-5-desc": "పశువుల సంరక్షణ గైడ్",
        "sim-act-6-title": "ఉప-ఉత్పత్తి చిట్కాలు",
        "sim-act-6-desc": "వ్యర్థాల నుండి సంపద ఆలోచనలు",
        "sim-act-7-title": "తోటపని చిట్కాలు",
        "sim-act-7-desc": "ఇంటి తోట చిట్కాలు",
        "sim-act-8-title": "సేంద్రీయ ఎరువులు",
        "sim-act-8-desc": "మీరు తయారు చేయగల సేంద్రీయ ఎరువులు",
        "sim-act-9-title": "ప్రభుత్వ పథకాలు",
        "sim-act-9-desc": "సబ్సిడీలు, ఇన్సూరెన్స్ & రుణాలు",
        "sim-act-10-title": "పరికరాలు",
        "sim-act-10-desc": "వ్యవసాయ పరికరాలు అద్దెకు",
        "sim-nav-home": "హోమ్",
        "sim-nav-tools": "పరికరాలు",
        "sim-nav-market": "మార్కెట్ ధరలు",
        "sim-nav-profile": "ప్రొఫైల్",
        "sim-tools-title": "పరికరాలు",
        "sim-tools-placeholder": "పరికరాల కోసం వెతకండి...",
        "sim-search-btn": "వెతకండి",
        "sim-tool-1-title": "విత్తన మొలకల ట్రే (50/100 సెల్)",
        "sim-tool-1-desc": "మొక్కలను పెంచడానికి 50 లేదా 100 సెల్స్ ఉన్న విత్తన మొలకల ట్రే. తిరిగి ఉపయోగించదగిన ప్లాస్టిక్‌తో తయారు చేయబడింది...",
        "sim-tool-2-title": "మట్టి తేమ మీటర్",
        "sim-tool-2-desc": "మట్టి తేమ మీటర్ బ్యాటరీ లేకుండా తక్షణ తేమ రీడింగ్ ఇస్తుంది. 10-20 సెం.మీ లోతులో ఉంచి చూడండి...",
        "sim-read-more": "మరింత చదవండి →",
        "sim-market-title": "మార్కెట్ ధరలు",
        "sim-market-search-btn": "ధరలు వెతకండి",
        "sim-market-empty-title": "ఈరోజు ఎటువంటి ధరలు నమోదు కానవి",
        "sim-market-empty-desc": "ఈరోజు దావణగెరెకు ఎటువంటి ధరలు నమోదు కాలేదు. దయచేసి తర్వాత ప్రయత్నించండి, లేదా ఇతర మార్కెట్లను చూడటానికి మీ రాష్ట్రం పేరు (కర్ణాటక వంటివి) వెతకండి.",
        "sim-profile-premium": "ప్రీమియం యాక్టివ్",
        "sim-profile-valid": "27 జూన్ 2027 వరకు అందుబాటులో ఉంది",
        "sim-profile-select-lang": "మీ భాషను ఎంచుకోండి",
        "sim-profile-logout": "లాగ్అవుట్",
        "feat-tag": "సామర్థ్యాలను అన్వేషించండి",
        "feat-title": "యాప్ లోపల ఉన్న ప్రధాన ఫీచర్లు",
        "feat-desc": "వ్యవసాయాన్ని సులభతరం చేయడానికి రూపొందించిన కృషిసంజీవిని యాప్ లోపల ఉన్న ఫీచర్ల గురించి తెలుసుకోండి.",
        "feat-1-title": "AI పంట సూచనలు",
        "feat-1-desc": "గరిష్ట దిగుబడి కోసం నేల రకం, వాతావరణ పరిస్థితుల ఆధారంగా ఉత్తమ పంటలను సిఫార్సు చేస్తుంది.",
        "feat-2-title": "పంట తెగుళ్ల గుర్తింపు",
        "feat-2-desc": "తెగుళ్లు సోకిన పంట ఫొటోలను అప్‌లోడ్ చేయండి. మా AI ఇమేజ్ మోడల్ వ్యాధిని గుర్తించి సేంద్రీయ నివారణలను అందిస్తుంది.",
        "feat-3-title": "లైవ్ APMC మార్కెట్ ధరలు",
        "feat-3-desc": "ప్రభుత్వ మార్కెట్ పోర్టల్స్ నుండి నేరుగా లైవ్ అప్‌డేట్స్. మీ సమీప మార్కెట్లలో వివిధ పంటల ధరలను ట్రాక్ చేయండి.",
        "feat-4-title": "పరికరాల అద్దె",
        "feat-4-desc": "సమీపంలోని ధృవీకరించబడిన డీలర్ల నుండి నాణ్యమైన వ్యవసాయ పరికరాలను అద్దెకు తీసుకోండి. నేరుగా ఫోన్ చేసి మాట్లాడండి.",
        "feat-5-title": "బహుభాషా సహాయం",
        "feat-5-desc": "వ్యవసాయం అందరికీ సులభం. ఇంగ్లిష్, తెలుగు, కన్నడ, హిందీ తదితర ప్రాంతీయ భాషల్లో యాప్‌ను మార్చుకోండి.",
        "feat-6-title": "సేంద్రీయ ఎరువుల గైడ్",
        "feat-6-desc": "మీ సొంత పొలంలో నాణ్యమైన సేంద్రీయ ఎరువులు, సహజ కీటక నివారిణులను తయారుచేసే పద్ధతులను తెలుసుకోండి.",
        "hub-tag": "రైతు అభ్యాస కేంద్రం",
        "hub-title": "యాప్ గైడ్‌లు మరియు వీడియోలు",
        "hub-desc": "యాప్‌ను సులभంగా ఉపయోగించడం నేర్చుకోవడానికి అందుబాటులో ఉన్న వీడియో గైడ్‌లను చూడండి.",
        "hub-filter-all": "అన్ని వీడియోలు",
        "hub-filter-tutorials": "యాప్ ట్యుటోరియల్స్",
        "hub-filter-crop": "పంట సంరక్షణ",
        "hub-filter-market": "మార్కెట్ ధరలు",
        "hub-filter-tools": "పరికరాల అద్దె",
        "footer-pitch": "అత्याధునిక వ్యవసాయ సాంకేతికత, AI పంట రోగ నిర్ధారణ మరియు స్థానిక APMC మార్కెట్ ధరలను భారతీయ రైతులకు నేరుగా అందించడం.",
        "footer-connect": "మమ్మల్ని సంప్రదించండి",
        
        // Default Guides Translations
        "default-1-title": "కృషిసంజీవిని మొబైల్ యాప్: పూర్తి ఆన్‌బోర్డింగ్ టూర్",
        "default-1-desc": "కృషిసంజీవిని స్మార్ట్ వ్యవసాయ అప్లికేషన్ యొక్క పూర్తి దశల వారీ పర్యటన. హోమ్ స్క్రీన్‌ను నావిగేట్ చేయడం, భాషలను మార్చడం మరియు మీ ప్రొఫైల్ పూర్తి చేయడం ఎలాగో తెలుసుకోండి.",
        "default-2-title": "AI ఉపయోగించి పంట తెగుళ్లను తక్షణమే ఎలా గుర్తించాలి",
        "default-2-desc": "మొబైల్ AI స్కానింగ్ ఫీచర్ ఎలా పనిచేస్తుందో చూడండి. కేవలం పంట రోగ నిర్ధారణ పై నొక్కండి, ఆపై క్లియర్ ఫోటో తీసి చికిత్స మార్గదర్శకాలు పొందండి.",
        "default-3-title": "లైవ్ APMC మార్కెట్ ధరలను ఎలా తనిఖీ చేయాలి",
        "default-3-desc": "దావణగెరె లేదా ఇతర జిల్లాల సమీపంలో పంటల ధరలను ఎలా వెతకాలో ఈ గైడ్ వివరిస్తుంది. లైవ్ ధరలు మీ యాప్‌కు ఎలా సింక్ అవుతాయో తెలుసుకోండి.",
        "default-4-title": "మీ సమీపంలో విత్తనాల ట్రేలు మరియు తేమ మీటర్లను అద్దెకు తీసుకోవడం",
        "default-4-desc": "కొనుగోలు చేయకుండా నాణ్యమైన పరికరాలను ఉపయోగించండి. విత్తనాల ట్రేలు మరియు తేమ మీటర్లను అద్దెకు కనుగొనడానికి 'పరికరాలు' విభాగాన్ని ఎలా ఉపయోగించాలో ఈ వీడియో చూపుతుంది."
    },
    ta: {
        "app-subtitle": "இந்திய விவசாயத்திற்கான ஸ்மார்ட் செயலி 🇮🇳",
        "nav-home": "முகப்பு",
        "nav-simulator": "சிமுலேட்டர்",
        "nav-features": "அம்சங்கள்",
        "nav-videos": "வீடியோ வழிகாட்டி",
        "nav-admin": "அட்மின் பேனல்",
        "download-btn-top": "இங்கே கிளிக் செய்க",
        "download-btn-bottom": "செயலியைப் பெறுக",
        "hero-badge": "இந்திய விவசாயிகளை ஊக்குவித்தல்",
        "hero-title": "விவசாயத்தை நவீனமாக்குங்கள் <span>கிருஷ் சஞ்சீவினி</span> உடன்",
        "hero-description": "விவசாயிகள் தங்களின் பயிர் விளைச்சலை அதிகரிக்க, பயிர் நோய்களை உடனுக்குடன் கண்டறிய, சந்தை விலைகளை அறிய, மற்றும் அவர்களின் தாய்மொழியில் விவசாய ஆலோசனைகளை பெற உதவும் ஒரே செயலி.",
        "hero-btn-simulator": "சிமுலேட்டர் முயல்க",
        "hero-btn-videos": "வீடியோ வழிகாட்டி காண்க",
        "stat-features-txt": "முக்கிய அம்சங்கள்",
        "stat-langs-txt": "மொழிகள் ஆதரவு",
        "stat-solutions-txt": "இயற்கை தீர்வுகள்",
        "sim-quick-actions": "விரைவுச் செயல்பாடுகள்",
        "sim-weather-cloudy": "மேகமூட்டம்",
        "sim-weather-loc": "தாவணகரே",
        "sim-act-1-title": "பயிர் ஆலோசனை",
        "sim-act-1-desc": "AI பயிர் பரிந்துரைகளைப் பெறுக",
        "sim-act-2-title": "பயிர் நோய் கண்டறிதல்",
        "sim-act-2-desc": "பயிர் நோய்களைக் கண்டறிதல்",
        "sim-act-3-title": "சந்தை விலைகள்",
        "sim-act-3-desc": "APMC நேரடி சந்தை விலைகள்",
        "sim-act-4-title": "விவசாய குறிப்புகள்",
        "sim-act-4-desc": "நிபுணர் விவசாய ஆலோசனை",
        "sim-act-5-title": "கால்நடை குறிப்புகள்",
        "sim-act-5-desc": "கால்நடை பராமரிப்பு வழிகாட்டி",
        "sim-act-6-title": "பக்க விளைபொருள் குறிப்பு",
        "sim-act-6-desc": "கழிவிலிருந்து செல்வம் யோசனைகள்",
        "sim-act-7-title": "தோட்டக்கலை குறிப்புகள்",
        "sim-act-7-desc": "வீட்டுத் தோட்டக் குறிப்புகள்",
        "sim-act-8-title": "இயற்கை உரம்",
        "sim-act-8-desc": "நீங்கள் தயாரிக்கக்கூடிய இயற்கை உரங்கள்",
        "sim-act-9-title": "அரசு திட்டங்கள்",
        "sim-act-9-desc": "மானியம், காப்பீடு & கடன்கள்",
        "sim-act-10-title": "கருவிகள்",
        "sim-act-10-desc": "விவசாய கருவிகள் வாடகைக்கு",
        "sim-nav-home": "முகப்பு",
        "sim-nav-tools": "கருவிகள்",
        "sim-nav-market": "சந்தை விலைகள்",
        "sim-nav-profile": "சுயவிவரம்",
        "sim-tools-title": "கருவிகள்",
        "sim-tools-placeholder": "கருவிகளைத் தேடுக...",
        "sim-search-btn": "தேடுக",
        "sim-tool-1-title": "விதை முளைப்பயிர்ப் தட்டு (50/100)",
        "sim-tool-1-desc": "நாற்றுகளை வளர்ப்பதற்கான 50 அல்லது 100 குழிகள் கொண்ட தட்டு. மறுசுழற்சி செய்யக்கூடிய பிளாஸ்டிக்கால் செய்யப்பட்டது...",
        "sim-tool-2-title": "மண் ஈரப்பதம் மீட்டர்",
        "sim-tool-2-desc": "மண்ணின் ஈரப்பதத்தை பேட்டரி இன்றி உடனுக்குடன் காட்டும் மீட்டர். மண்ணில் 10-20 செ.மீ ஆழத்தில் செலுத்திப் பார்க்கவும்...",
        "sim-read-more": "மேலும் அறிய →",
        "sim-market-title": "சந்தை விலைகள்",
        "sim-market-search-btn": "விலையைத் தேடுக",
        "sim-market-empty-title": "இன்று விலை ஏதும் பதிவாகவில்லை",
        "sim-market-empty-desc": "இன்று தாவணகரேவிற்கு விலை விவரங்கள் ஏதும் வரவில்லை. தயவுசெய்து பின்னர் பார்க்கவும், அல்லது பிற சந்தை விலைகளுக்கு உங்கள் மாநில பெயரைத் தேடவும்.",
        "sim-profile-premium": "பிரீமியம் செயல்பாட்டில் உள்ளது",
        "sim-profile-valid": "27 ஜூன் 2027 வரை செல்லுபடியாகும்",
        "sim-profile-select-lang": "உங்கள் மொழியைத் தேர்வு செய்க",
        "sim-profile-logout": "வெளியேறு",
        "feat-tag": "செயல்பாடுகளை ஆராய்க",
        "feat-title": "செயலியில் உள்ள முக்கிய அம்சங்கள்",
        "feat-desc": "விவசாயத்தை எளிதாக்க வடிவமைக்கப்பட்டுள்ள கிரிஷ் சஞ்சೀวினி செயலியில் உள்ள வசதிகளை அறியுங்கள்.",
        "feat-1-title": "AI பயிர் ஆलोசனைகள்",
        "feat-1-desc": "அதிகபட்ச விளைச்சலுக்கு மண் மற்றும் வானிலைக்கேற்ப சிறந்த பயிர்களைப் பரிந்துரைக்கிறது.",
        "feat-2-title": "நோய் கண்டறிதல்",
        "feat-2-desc": "பாதிக்கப்பட்ட பயிர்களின் படங்களை பதிவேற்றவும். எங்களின் AI நோயைக் கண்டறிந்து இயற்கை தீர்வை வழங்குகிறது.",
        "feat-3-title": "சந்தை விலைகள்",
        "feat-3-desc": "அரசின் APMC போர்ட்டலில் இருந்து நேரடி விலைகள். உங்கள் அருகில் உள்ள சந்தை விலை நிலவரங்களை அறிந்து கொள்ளுங்கள்.",
        "feat-4-title": "விவசாய உபகரண வாடகை",
        "feat-4-desc": "அருகில் உள்ள சான்றளிக்கப்பட்ட விற்பனையாளர்களிடம் இருந்து விவசாயக் கருவிகளை வாடகைக்கு எடுக்கலாம்.",
        "feat-5-title": "பல்மொழி ஆதரவு",
        "feat-5-desc": "விவசாயம் அனைவருக்கும் எளிது. ஆங்கிலம், தமிழ், கன்னடம், இந்தி போன்ற மொழிகளில் செயலியைப் பயன்படுத்தலாம்.",
        "feat-6-title": "இயற்கை உர தயாரிப்பு",
        "feat-6-desc": "உங்களது சொந்த நிலத்தில் தரமான இயற்கை உரம் தயாரிக்கும் எளிய வழிகளைத் தெரிந்து கொள்ளுங்கள்.",
        "hub-tag": "விவசாயக் கற்றல் மையம்",
        "hub-title": "செயலி வழிகாட்டிகள் & வீடியோக்கள்",
        "hub-desc": "செயலியைப் பயன்படுத்தக் கற்றுக்கொள்ள வீடியோ வழிகாட்டிகளைக் காணுங்கள்.",
        "hub-filter-all": "அனைத்து வீடியோக்கள்",
        "hub-filter-tutorials": "செயலி பயிற்சிகள்",
        "hub-filter-crop": "பயிர் பாதுகாப்பு",
        "hub-filter-market": "சந்தை விலைகள்",
        "hub-filter-tools": "கருவிகள் வாடகை",
        "footer-pitch": "நவீன விவசாயத் தொழில்நுட்பம், AI நோய் கண்டறிதல் மற்றும் சந்தை விலைகளை இந்திய விவசாயிகளுக்கு நேரடியாகக் கொண்டு சேர்ப்பது.",
        "footer-connect": "எங்களைத் தொடர்பு கொள்க",
        
        // Default Guides Translations
        "default-1-title": "கிருஷ் சஞ்சீவினி மொபைல் செயலி: முழுமையான பயிற்சி வழிகாட்டி",
        "default-1-desc": "கிருஷ் சஞ்சீவினி ஸ்மார்ட் விவசாய செயலியைப் பயன்படுத்தக் கற்றுக்கொள்ள முழுமையான வழிகாட்டி. மெனுக்களை இயக்குதல் மற்றும் சுயவிவரத்தை நிரப்புதல் பற்றி அறிக.",
        "default-2-title": "AI தொழில்நுட்பத்தைப் பயன்படுத்தி பயிர் நோய்களை எவ்வாறு கண்டறிவது",
        "default-2-desc": "செயலியின் கேமரா எவ்வாறு செயல்படுகிறது என்பதைப் பாருங்கள். நோய் கண்டறிதல் என்பதைத் தட்டி, பாதிக்கப்பட்ட இலையைத் தெளிவாகப் படம் பிடிக்கவும்.",
        "default-3-title": "சந்தை விலைகளை எவ்வாறு சரிபார்ப்பது",
        "default-3-desc": "தாவணகரே அல்லது பிற மாவட்டங்களின் சந்தை பயிர் விலைகளைத் தேடுவது எப்படி என்பதை இந்த வழிகாட்டி விளக்குகிறது.",
        "default-4-title": "விதை தட்டுகள் மற்றும் ஈரப்பதம் மீட்டர்களை எவ்வாறு வாடகைக்கு எடுப்பது",
        "default-4-desc": "விலை உயர்ந்த கருவிகளை வாங்காமல் வாடகைக்கு எடுத்துப் பயன்படுத்தவும். கருவிகள் பிரிவைப் பயன்படுத்துவது எப்படி என்று இந்த வீடியோ விளக்குகிறது."
    },
    mr: {
        "app-subtitle": "भारतासाठी स्मार्ट शेती 🇮🇳",
        "nav-home": "होम",
        "nav-simulator": "अ‍ॅप सिम्युलेटर",
        "nav-features": "वैशिष्ट्ये",
        "nav-videos": "व्हिडिओ मार्गदर्शक",
        "nav-admin": "अ‍ॅडमीन पॅनेल",
        "download-btn-top": "येथे क्लिक करा",
        "download-btn-bottom": "अ‍ॅप मिळवा",
        "hero-badge": "भारतीय शेतकऱ्यांना सक्षम करणे",
        "hero-title": "तुमच्या शेतीमध्ये क्रांती आणा <span>कृषिसंजीविनी</span> सोबत",
        "hero-description": "शेतकऱ्यांना पीक उत्पादन वाढवण्यास, वनस्पती रोगांचे त्वरित निदान करण्यास, बाजारातील दर शोधण्यास आणि त्यांच्या मातृभाषेत शेती सल्ला मिळवण्यास मदत करणारे सर्वसमावेशक अ‍ॅप.",
        "hero-btn-simulator": "सिम्युलेटर वापरून पहा",
        "hero-btn-videos": "व्हिडिओ मार्गदर्शक पहा",
        "stat-features-txt": "प्रमुख वैशिष्ट्ये",
        "stat-langs-txt": "समर्थित भाषा",
        "stat-solutions-txt": "सेंद्रिय उपाय",
        "sim-quick-actions": "त्वरित पर्याय",
        "sim-weather-cloudy": "ढगाळ हवामान",
        "sim-weather-loc": "दावणगेरे",
        "sim-act-1-title": "पीक सल्ला",
        "sim-act-1-desc": "AI पीक शिफारसी मिळवा",
        "sim-act-2-title": "पीक रोग निदान",
        "sim-act-2-desc": "वनस्पती रोग ओळखा",
        "sim-act-3-title": "बाजार भाव",
        "sim-act-3-desc": "थेट APMC बाजार दर",
        "sim-act-4-title": "शेती टिप्स",
        "sim-act-4-desc": "तज्ज्ञ शेती सल्ला",
        "sim-act-5-title": "पशुपालन टिप्स",
        "sim-act-5-desc": "पशुधन काळजी मार्गदर्शक",
        "sim-act-6-title": "बायप्रॉडक्ट टिप्स",
        "sim-act-6-desc": "कचऱ्यातून संपत्ती कल्पना",
        "sim-act-7-title": "बागकाम टिप्स",
        "sim-act-7-desc": "गृह बागकाम टिप्स",
        "sim-act-8-title": "सेंद्रिय खत",
        "sim-act-8-desc": "नैसर्गिक खते स्वतः बनवा",
        "sim-act-9-title": "सरकारी योजना",
        "sim-act-9-desc": "अनुदान, विमा आणि कर्ज",
        "sim-act-10-title": "कृषी साधने",
        "sim-act-10-desc": "कृषी साधने भाड्याने मिळवा",
        "sim-nav-home": "होम",
        "sim-nav-tools": "साधने",
        "sim-nav-market": "बाजार भाव",
        "sim-nav-profile": "प्रोफाइल",
        "sim-tools-title": "साधने",
        "sim-tools-placeholder": "साधने शोधा...",
        "sim-search-btn": "शोधा",
        "sim-tool-1-title": "बीज अंकुरण ट्रे (50/100 सेल)",
        "sim-tool-1-desc": "रोपवाटिका तयार करण्यासाठी ५० किंवा १०० कप्प्यांचा ट्रे. पुनर्वापरयोग्य प्लास्टिकपासून बनवलेला...",
        "sim-tool-2-title": "माती ओलावा मापक",
        "sim-tool-2-desc": "बॅटरीशिवाय मातीमधील ओलावा मोजणारे यंत्र. मातीमध्ये १०-२० सेमी खोल घालून वाचन मिळवा...",
        "sim-read-more": "अधिक वाचा →",
        "sim-market-title": "बाजार भाव",
        "sim-market-search-btn": "दर शोधा",
        "sim-market-empty-title": "आज कोणतेही दर उपलब्ध नाहीत",
        "sim-market-empty-desc": "आज दावणगेरे बाजारातील दर उपलब्ध नाहीत. कृपया नंतर तपासा किंवा इतर बाजार पाहण्यासाठी राज्याचे नाव (उदा. कर्नाटक) शोधा.",
        "sim-profile-premium": "प्रीमियम सक्रिय आहे",
        "sim-profile-valid": "27 जून 2027 पर्यंत वैध",
        "sim-profile-select-lang": "तुमची भाषा निवडा",
        "sim-profile-logout": "लॉगआउट",
        "feat-tag": "क्षमतेचा शोध घ्या",
        "feat-title": "अ‍ॅपमधील प्रमुख वैशिष्ट्ये",
        "feat-desc": "शेती सोपी करण्यासाठी तयार केलेल्या कृषिसंजीविनी अ‍ॅपमधील वैशिष्ट्ये जाणून घ्या.",
        "feat-1-title": "AI पीक शिफारसी",
        "feat-1-desc": "भरपूर उत्पादनासाठी मातीची प्रत आणि हवामानानुसार योग्य पिकांची शिफारस करते.",
        "feat-2-title": "रोग निदान",
        "feat-2-desc": "बाधित पिकाचे फोटो अपलोड करा. आमचे AI मॉडेल रोगाचे अचूक निदान करून सेंद्रिय उपाय सुचवते.",
        "feat-3-title": "थेट APMC बाजार भाव",
        "feat-3-desc": "सरकारी APMC कडून थेट दर. तुमच्या जवळच्या बाजारपेठेतील शेतीमालाचे दर ट्रॅक करा.",
        "feat-4-title": "स्मार्ट कृषी साधने",
        "feat-4-desc": "जवळच्या विक्रेत्यांकडून आधुनिक शेतीची अवजारे भाड्याने मिळवा. थेट संपर्क साधा.",
        "feat-5-title": "बहुभाषिक सहाय्य",
        "feat-5-desc": "शेती सर्वांसाठी सोपी. मराठी, इंग्रजी, हिंदी, कन्नड अशा विविध भाषांमध्ये अ‍ॅप वापरा.",
        "feat-6-title": "सेंद्रिय खत निर्मिती मार्गदर्शक",
        "feat-6-desc": "तुमच्या स्वतःच्या शेतात दर्जेदार सेंद्रिय खत आणि नैसर्गिक कीटकनाशके बनवण्याची पद्धत शिका.",
        "hub-tag": "शेतकरी शिक्षण केंद्र",
        "hub-title": "अ‍ॅप मार्गदर्शक आणि व्हिडिओ",
        "hub-desc": "अ‍ॅपचा प्रभावी वापर शिकण्यासाठी मार्गदर्शन करणारे व्हिडिओ पहा.",
        "hub-filter-all": "सर्व व्हिडिओ",
        "hub-filter-tutorials": "अ‍ॅप ट्युटोरियल्स",
        "hub-filter-crop": "पिकाची काळजी",
        "hub-filter-market": "बाजार दर",
        "hub-filter-tools": "कृषी साधने भाड्याने",
        "footer-pitch": "अत्याधुनिक कृषी तंत्रज्ञान, AI रोग निदान आणि बाजार भाव थेट भारतीय शेतकऱ्यांपर्यंत पोहोचवणे.",
        "footer-connect": "आमच्याशी संपर्क साधा",
        
        // Default Guides Translations
        "default-1-title": "कृषिसंजीविनी अ‍ॅप: संपूर्ण माहिती मार्गदर्शक",
        "default-1-desc": "कृषिसंजीविनी अ‍ॅप वापरण्यासाठी आवश्यक असलेली संपूर्ण माहिती या व्हिडिओमध्ये दिली आहे. प्रोफाईल सेटअप आणि भाषा निवड कशी करावी ते शिका.",
        "default-2-title": "AI तंत्रज्ञान वापरून पिकावरील रोग कसे ओळखावे",
        "default-2-desc": "अ‍ॅपमधील कॅमेरा कसा कार्य करतो ते पहा. रोग निदान वर क्लिक करून पिकाच्या पानांचा स्पष्ट फोटो काढा आणि उपाय मिळवा.",
        "default-3-title": "बाजारातील दर आणि भाव कसे तपासावेत",
        "default-3-desc": "दावणगेरे किंवा इतर जिल्ह्यांमधील विविध शेतीमालाचे दर कसे शोधावेत याबद्दलचे हे मार्गदर्शक आहे.",
        "default-4-title": "बियाणे ट्रे आणि मातीमधील ओलावा मोजणारे यंत्र भाड्याने मिळवा",
        "default-4-desc": "महागडी साधने विकत न घेता भाड्याने मिळवा. साधने विभाग कसा वापरावा याबद्दल मार्गदर्शन करणारा हा व्हिडिओ पहा."
    },
    gu: {
        "app-subtitle": "ભારત માટે સ્માર્ટ ખેતી 🇮🇳",
        "nav-home": "હોમ",
        "nav-simulator": "એપ સિમ્યુલેટર",
        "nav-features": "સુવિધાઓ",
        "nav-videos": "વીડિયો માર્ગદર્શિકા",
        "nav-admin": "એડમિન પેનલ",
        "download-btn-top": "અહીં ક્લિક કરો",
        "download-btn-bottom": "એપ ડાઉનલોડ કરો",
        "hero-badge": "ભારતીય ખેડૂતોનું સશક્તિકરણ",
        "hero-title": "તમારી ખેતીમાં ક્રાંતિ લાવો <span>કૃષિ સંજીવની</span> સાથે",
        "hero-description": "ખેડૂતોને પાકની ઉપજ વધારવા, પાકના રોગોનું તુરંત નિદાન કરવા, બજાર ભાવો જાણવા અને તેમની માતૃભાષામાં નિષ્ણાતોની સલાહ મેળવવા માટે મદદ કરતી એપ.",
        "hero-btn-simulator": "એપ સિમ્યુલેટર જુઓ",
        "hero-btn-videos": "વીડિયો માર્ગદર્શિકા જુઓ",
        "stat-features-txt": "મુખ્ય સુવિધાઓ",
        "stat-langs-txt": "સમર્થિત ભાષાઓ",
        "stat-solutions-txt": "ઓર્ગેનિક ઉકેલો",
        "sim-quick-actions": "ઝડપી વિકલ્પો",
        "sim-weather-cloudy": "વાદળછાયું વાતાવરણ",
        "sim-weather-loc": "દાવણગેરે",
        "sim-act-1-title": "પાક સૂચન",
        "sim-act-1-desc": "AI પાકની ભલામણો મેળવો",
        "sim-act-2-title": "પાક રોગ નિદાન",
        "sim-act-2-desc": "પાકના રોગોની ઓળખ કરો",
        "sim-act-3-title": "બજાર ભાવ",
        "sim-act-3-desc": "લાઇવ APMC બજાર ભાવો",
        "sim-act-4-title": "ખેતી માટે ટિપ્સ",
        "sim-act-4-desc": "નિષ્ણાત ખેતી સલાહ",
        "sim-act-5-title": "પશુપાલન ટિપ્સ",
        "sim-act-5-desc": "પશુધનની સંભાળ માટે માર્ગદર્શિકા",
        "sim-act-6-title": "બાયપ્રોડક્ટ ટિપ્સ",
        "sim-act-6-desc": "કચરામાંથી કંચન બનાવવાની આઈડિયા",
        "sim-act-7-title": "બાગાયત ટિપ્સ",
        "sim-act-7-desc": "ઘર બેઠા બાગાયત ટિપ્સ",
        "sim-act-8-title": "ઓર્ગેનિક ખાતર",
        "sim-act-8-desc": "કુદરતી ખાતરો તમે જાતે બનાવો",
        "sim-act-9-title": "સરકારી યોજનાઓ",
        "sim-act-9-desc": "સબસિડી, વીમો અને લોન",
        "sim-act-10-title": "ખેતીના સાધનો",
        "sim-act-10-desc": "સાધનો ભાડે મેળવો",
        "sim-nav-home": "હોમ",
        "sim-nav-tools": "સાધનો",
        "sim-nav-market": "બજાર ભાવ",
        "sim-nav-profile": "પ્રોફાઇલ",
        "sim-tools-title": "સાધનો",
        "sim-tools-placeholder": "સાધનો શોધો...",
        "sim-search-btn": "શોધો",
        "sim-tool-1-title": "બીજ અંકુરણ ટ્રે (50/100 સેલ)",
        "sim-tool-1-desc": "રોપાઓ ઉગાડવા માટે 50 અથવા 100 સેલ વાળી બીજ અંકુરણ ટ્રે. ફરીથી વાપરી શકાય તેવા પ્લાસ્ટિકમાંથી બનાવેલી...",
        "sim-tool-2-title": "જમીનની ભેજ માપક",
        "sim-tool-2-desc": "જમીનની ભેજ માપક બેટરી વિના ભેજ દર્શાવે છે. તપાસ માટે જમીનમાં ૧૦-૨૦ સેમી ઊંડું મૂકો...",
        "sim-read-more": "વધુ વાંચો →",
        "sim-market-title": "બજાર ભાવ",
        "sim-market-search-btn": "ભાવ શોધો",
        "sim-market-empty-title": "આજે કોઈ ભાવો નોંધાયા નથી",
        "sim-market-empty-desc": "આજે દાવણગેરે માટે બજાર ભાવ મળ્યા નથી. કૃપા કરીને પછી પ્રયાસ કરો, અથવા અન્ય બજારો જોવા માટે તમારા રાજ્યનું નામ (જેમ કે કર્ણાટક) શોધો.",
        "sim-profile-premium": "પ્રીમિયમ સક્રિય છે",
        "sim-profile-valid": "27 જૂન 2027 સુધી માન્ય",
        "sim-profile-select-lang": "તમારી ભાષા પસંદ કરો",
        "sim-profile-logout": "લૉગઆઉટ",
        "feat-tag": "શક્તિઓનો પરિચય મેળવો",
        "feat-title": "મોબાઈલ એપની અંદર મુખ્ય સુવિધાઓ",
        "feat-desc": "ખેતી સરળ બનાવવા માટે કૃષિ સંજીવની એપની અંદર આપેલા ફીચર્સ વિશે જાણો.",
        "feat-1-title": "AI પાક ભલામણો",
        "feat-1-desc": "મહત્તમ ઉત્પાદન માટે જમીનની ફળદ્રુપતા અને વાતાવરણ મુજબ શ્રેષ્ઠ રોકડિયા પાકની ભલામણ કરે છે.",
        "feat-2-title": "રોગ નિદાન",
        "feat-2-desc": "અસરગ્રસ્ત પાકના ફોટા અપલોડ કરો. અમારું AI મોડેલ રોગનું નિદાન કરી ઓર્ગેનિક ઉપાય જણાવે છે.",
        "feat-3-title": "લાઇવ APMC બજાર ભાવ",
        "feat-3-desc": "સરકારી APMC તરફથી સીધા ભાવો. તમારી નજીકની મંડીમાં અનાજ, શાકભાજીના ભાવો મેળવો.",
        "feat-4-title": "સ્માર્ટ સાધનો ભાડે મેળવો",
        "feat-4-desc": "નજીકના ખેતીના સાધનો ભાડે આપતા ડીલર્સ પાસેથી આધુનિક મશીનરી ભાડે મેળવો. સીધો ફોન કરો.",
        "feat-5-title": "બહુભાષી મદદ",
        "feat-5-desc": "ખેડૂતો માટે એપનો ઉપયોગ સરળ બનાવવા માટે ગુજરાતી, હિન્દી, અંગ્રેજી, કન્નડ વગેરે ભાષાઓનો સપોર્ટ આપેલો છે.",
        "feat-6-title": "કુદરતી ખાતર માર્ગદર્શિકા",
        "feat-6-desc": "તમારા ખેતર પર ઉત્તમ ગુણવત્તાવાળું દેશી ખાતર અને કુદરતી જંતુનાશકો બનાવવાની પદ્ધતિ શીખો.",
        "hub-tag": "ખેડૂત તાલીમ કેન્દ્ર",
        "hub-title": "એપ ગાઇડ્સ અને વીડિયો",
        "hub-desc": "એપનો સરળ ઉપયોગ શીખવા માટે આપેલા વીડિયો જુઓ.",
        "hub-filter-all": "બધા વીડિયો",
        "hub-filter-tutorials": "એપ ટ્યુટોરિયલ્સ",
        "hub-filter-crop": "પાકની સંભાળ",
        "hub-filter-market": "બજાર ભાવો",
        "hub-filter-tools": "સાધનો ભાડે",
        "footer-pitch": "અદ્યતન કૃષિ ટેકનોલોજી, AI રોગ નિદાન અને બજાર ભાવ સીધા ભારતના ખેડૂતો સુધી પહોંચાડવા.",
        "footer-connect": "અમારો સંપર્ક કરો",
        
        // Default Guides Translations
        "default-1-title": "કૃષિ સંજીવની એપ: સંપૂર્ણ માહિતી વીડિયો",
        "default-1-desc": "એપનો ઉપયોગ કેવી રીતે કરવો તેની માર્ગદર્શિકા આપતો વીડિયો. મેનૂ અને સેટિંગ્સ વિશે માહિતી મેળવો.",
        "default-2-title": "AI નો ઉપયોગ કરીને પાકના રોગોનું નિદાન કેવી રીતે કરવું",
        "default-2-desc": "કેમેરા ફીચરનો ઉપયોગ કરવા માટે પાક રોગ નિદાન પર ક્લિક કરો અને અસરગ્રસ્ત પાંદડાનો ફોટો લો.",
        "default-3-title": "બજાર મંડી ભાવો કેવી રીતે ચેક કરવા",
        "default-3-desc": "તમારા સ્થાનિક વિસ્તાર અથવા અન્ય રાજ્યોના બજાર ભાવો સરળતાથી જાણો.",
        "default-4-title": "વાવણી ટ્રે અને ભેજ માપક યંત્રો ભાડે મેળવો",
        "default-4-desc": "સાધનો વિભાગમાંથી કિંમતી સાધનો ખરીદ્યા વિના ભાડે મેળવવાની પદ્ધતિ શીખો."
    },
    bn: {
        "app-subtitle": "ভারতের জন্য স্মার্ট কৃষি 🇮🇳",
        "nav-home": "হোম",
        "nav-simulator": "অ্যাপ সিমুলেটর",
        "nav-features": "বৈশিষ্ট্যসমূহ",
        "nav-videos": "ভিডিও নির্দেশিকা",
        "nav-admin": "অ্যাডমিন প্যানেল",
        "download-btn-top": "এখানে ক্লিক করুন",
        "download-btn-bottom": "অ্যাপটি ডাউনলোড করুন",
        "hero-badge": "ভারতীয় কৃষকদের ক্ষমতায়ন",
        "hero-title": "আপনার কৃষিকাজে বিপ্লব আনুন <span>কৃষি সঞ্জীবনী</span>র সাথে",
        "hero-description": "কৃষকদের ফসলের ফলন বাড়াতে, ফসলের রোগ দ্রুত শনাক্ত করতে, বাজারের দর জানতে এবং তাদের মাতৃভাষায় কৃষি পরামর্শ পেতে সহায়তা করার জন্য তৈরি একটি অ্যাপ.",
        "hero-btn-simulator": "অ্যাপ সিমুলেটর দেখুন",
        "hero-btn-videos": "ভিডিও নির্দেশিকা দেখুন",
        "stat-features-txt": "প্রধান বৈশিষ্ট্যসমূহ",
        "stat-langs-txt": "সমর্থিত ভাষা সমূহ",
        "stat-solutions-txt": "জৈব সমাধান সমূহ",
        "sim-quick-actions": "দ্রুত विकल्पসমূহ",
        "sim-weather-cloudy": "মেঘলা আকাশ",
        "sim-weather-loc": "দাবণগেরে",
        "sim-act-1-title": "فসল পরামর্শ",
        "sim-act-1-desc": "AI ফসল পরামর্শ পান",
        "sim-act-2-title": "ফসল রোগ নির্ণয়",
        "sim-act-2-desc": "গাছের রোগ শনাক্ত করুন",
        "sim-act-3-title": "বাজার মূল্য",
        "sim-act-3-desc": "লাইভ APMC বাজার দর",
        "sim-act-4-title": "कृषि পরামর্শ",
        "sim-act-4-desc": "বিশেষজ্ঞ কৃষি পরামর্শ",
        "sim-act-5-title": "পশু পরামর্শ",
        "sim-act-5-desc": "গবাদি পশু যত্ন নির্দেশিকা",
        "sim-act-6-title": "উপজাত দ্রব্য পরামর্শ",
        "sim-act-6-desc": "বর্জ্য থেকে সম্পদ তৈরির উপায়",
        "sim-act-7-title": "বাগান পরামর্শ",
        "sim-act-7-desc": "গৃহ উদ্যান পরামর্শ",
        "sim-act-8-title": "জৈব সার",
        "sim-act-8-desc": "প্রাকৃতিক সার নিজে তৈরি করুন",
        "sim-act-9-title": "সরকারি প্রকল্প",
        "sim-act-9-desc": "ভর্তুকি, বীমা এবং ঋণ সমূহ",
        "sim-act-10-title": "কৃষি যন্ত্রপাতি",
        "sim-act-10-desc": "যন্ত্রপাতি ভাড়া নিন",
        "sim-nav-home": "হোম",
        "sim-nav-tools": "যন্ত্রপাতি",
        "sim-nav-market": "বাজার দর",
        "sim-nav-profile": "প্রোফাইল",
        "sim-tools-title": "যন্ত্রপাতি",
        "sim-tools-placeholder": "যন্ত্রপাতি খুঁজুন...",
        "sim-search-btn": "খুঁজুন",
        "sim-tool-1-title": "বীজ অঙ্কুরোদগম ট্রে (৫০/১০০ সেল)",
        "sim-tool-1-desc": "চারা রোপণের জন্য ৫০ বা ১০০টি ঘর বিশিষ্ট বীজ অঙ্কুরোদগম ট্রে। পুনর্ব্যবহারযোগ্য প্লাস্টিক দ্বারা নির্মিত...",
        "sim-tool-2-title": "মাটির আর্দ্রতা পরিমাপক",
        "sim-tool-2-desc": "ব্যাটারি ছাড়াই মাটির আর্দ্রতা মাপা যায়। পরিমাপের জন্য এটি মাটিতে ১০-২০ সেমি গভীরে প্রবেশ করান...",
        "sim-read-more": "আরও পড়ুন →",
        "sim-market-title": "বাজার দর",
        "sim-market-search-btn": "দর খুঁজুন",
        "sim-market-empty-title": "আজ কোনো দর পাওয়া যায়নি",
        "sim-market-empty-desc": "আজ দাবণগেরের বাজারের কোনো দর পাওয়া যায়নি। অনুগ্রহ করে পরে চেষ্টা করুন, অথবা অন্য বাজারের দর দেখতে রাজ্যের নাম (যেমন কর্ণাটক) খুঁজুন।",
        "sim-profile-premium": "প্রিমিয়াম সক্রিয় আছে",
        "sim-profile-valid": "২৭ জুন २०२৭ পর্যন্ত বৈধ",
        "sim-profile-select-lang": "আপনার ভাষা নির্বাচন করুন",
        "sim-profile-logout": "লগআউট",
        "feat-tag": "ক্ষমতা আবিষ্কার করুন",
        "feat-title": "মোবাইল অ্যাপের প্রধান বৈশিষ্ট্যসমূহ",
        "feat-desc": "কৃষিকাজ সহজ করার জন্য কৃষি সঞ্জীবনী অ্যাপের ভেতরে থাকা সুনির্দিষ্ট বিষয়গুলো জেনে নিন।",
        "feat-1-title": "AI ফসল পরামর্শ",
        "feat-1-desc": "ভালো फलনের জন্য মাটির উর্বরতা ও আবহাওয়া অনুযায়ী সেরা ফসলের পরামর্শ প্রদান করে।",
        "feat-2-title": "রোগ নির্ণয়",
        "feat-2-desc": "আক্রান্ত ফসলের ছবি আপলোড করুন। আমাদের AI রোগ শনাক্ত করে সঠিক জৈব প্রতিকার নির্দেশ করবে।",
        "feat-3-title": "লাইভ APMC বাজার দর",
        "feat-3-desc": "সরকারি APMC পোর্টাল থেকে সরাসরি দর। আপনার নিকটবর্তী মণ্ডির ফসলের দর ট্র্যাক করুন।",
        "feat-4-title": "স্মার্ট যন্ত্রপাতি ভাড়া",
        "feat-4-desc": "নিকটবর্তী যাচাইকৃত ডিলারদের থেকে আধুনিক কৃষি যন্ত্রপাতি ভাড়া নিন। সরাসরি ফোন করুন।",
        "feat-5-title": "বহুভাষী সহায়তা",
        "feat-5-desc": "কৃষি এখন সবার জন্য সহজ। বাংলা, ইংরেজি, হিন্দি, কন্নড় ইত্যাদি ভাষায় অ্যাপটি ব্যবহার করুন।",
        "feat-6-title": "জৈব সার তৈরির গাইড",
        "feat-6-desc": "আপনার নিজের জমিতে উন্নতমানের জৈব সার এবং প্রাকৃতিক কীটনাশক তৈরির পদ্ধতি শিখে নিন।",
        "hub-tag": "কৃষক প্রশিক্ষণ কেন্দ্র",
        "hub-title": "অ্যাপ গাইড ও ভিডিও সমূহ",
        "hub-desc": "অ্যাপটি সহজে ব্যবহার করা শিখতে ভিডিও নির্দেশিকাসমূহ দেখুন।",
        "hub-filter-all": "সব ভিডিও",
        "hub-filter-tutorials": "অ্যাপ টিউটোরিয়াল",
        "hub-filter-crop": "ফসল যত্ন",
        "hub-filter-market": "বাজারের দর",
        "hub-filter-tools": "যন্ত্রপাতি ভাড়া",
        "footer-pitch": "অত্যাধুনিক কৃষি প্রযুক্তি, AI রোগ নির্ণয় এবং বাজারের ফসলের দর সরাসরি ভারতীয় কৃষকদের কাছে পৌঁছে দেওয়া।",
        "footer-connect": "আমাদের সাথে যোগাযোগ করুন",
        
        // Default Guides Translations
        "default-1-title": "কৃষি সঞ্জীবনী অ্যাপ: ব্যবহারের সম্পূর্ণ নির্দেশিকা",
        "default-1-desc": "অ্যাপটি কিভাবে ব্যবহার করবেন তা নিয়ে বিস্তারিত ভিডিও। বিভিন্ন মেনু এবং সেটিং ব্যবহারের নিয়ম শিখুন।",
        "default-2-title": "AI প্রযুক্তি ব্যবহার করে উদ্ভিদের রোগ কিভাবে নির্ণয় করবেন",
        "default-2-desc": "ক্যামেরা ফিচারের সাহায্যে উদ্ভিদের রোগ শনাক্ত করতে রোগের ক্ষতচিহ্ন যুক্ত পাতার ছবি তুলুন।",
        "default-3-title": "বাজারের শস্যের দর কিভাবে সহজে চেক করবেন",
        "default-3-desc": "আপনার স্থানীয় মণ্ডি অথবা অন্যান্য রাজ্যের শস্যের বাজার মূল্য জানার সহজ পদ্ধতি।",
        "default-4-title": "বীজের ট্রে এবং মাটির আর্দ্রতা পরিমাপক যন্ত্র ভাড়া নিন",
        "default-4-desc": "দামি যন্ত্রপাতি না কিনে সহজেই ভাড়া নেওয়ার পদ্ধতি দেখে নিন।"
    }
};

let appGuides = [];
let currentLanguage = "en";

// Initialize Guides from localStorage or use defaults
function initGuides() {
    const saved = localStorage.getItem("krushi_guides");
    if (saved) {
        try {
            appGuides = JSON.parse(saved);
        } catch (e) {
            console.error("Error parsing saved guides, using defaults.", e);
            appGuides = [...DEFAULT_GUIDES];
        }
    } else {
        appGuides = [...DEFAULT_GUIDES];
        localStorage.setItem("krushi_guides", JSON.stringify(appGuides));
    }
}

// 2. DOM Elements Cache
const elements = {
    // Simulator
    simTime: document.getElementById("simTime"),
    simScreenHome: document.getElementById("simScreenHome"),
    simScreenTools: document.getElementById("simScreenTools"),
    simScreenMarket: document.getElementById("simScreenMarket"),
    simScreenProfile: document.getElementById("simScreenProfile"),
    simDetailCropSuggestion: document.getElementById("simDetailCropSuggestion"),
    simDetailDiagnoseCrop: document.getElementById("simDetailDiagnoseCrop"),
    simNavItems: document.querySelectorAll(".sim-nav-item"),
    simActionCards: document.querySelectorAll(".action-card"),
    simBackBtns: document.querySelectorAll(".sim-back-btn"),
    simBackBtnDetails: document.querySelectorAll(".sim-back-btn-details"),
    simLangBtns: document.querySelectorAll(".lang-btn"),
    
    // Header & Mobile Nav
    menuToggle: document.getElementById("menuToggle"),
    navMenu: document.getElementById("navMenu"),
    adminNavBtn: document.getElementById("adminNavBtn"),
    headerLangPickerBtn: document.getElementById("headerLangPickerBtn"),
    headerLangText: document.getElementById("headerLangText"),
    headerLangDropdown: document.getElementById("headerLangDropdown"),
    
    // User Panel Video Hub
    videoGrid: document.getElementById("videoGrid"),
    filterBtns: document.querySelectorAll(".filter-btn"),
    
    // Admin Panel
    adminPortal: document.getElementById("admin-portal"),
    adminPinBox: document.getElementById("adminPinBox"),
    adminPinInput: document.getElementById("adminPin"),
    btnVerifyPin: document.getElementById("btnVerifyPin"),
    adminPanelContent: document.getElementById("adminPanelContent"),
    btnAdminLogout: document.getElementById("btnAdminLogout"),
    
    // Admin Upload Form
    uploadForm: document.getElementById("uploadForm"),
    formTitle: document.getElementById("formTitle"),
    editItemId: document.getElementById("editItemId"),
    guideTitle: document.getElementById("guideTitle"),
    guideCategory: document.getElementById("guideCategory"),
    videoUrl: document.getElementById("videoUrl"),
    coverImage: document.getElementById("coverImage"),
    coverImageUrl: document.getElementById("coverImageUrl"),
    imagePreview: document.getElementById("imagePreview"),
    guideDescription: document.getElementById("guideDescription"),
    btnSubmitForm: document.getElementById("btnSubmitForm"),
    btnCancelEdit: document.getElementById("btnCancelEdit"),
    adminGuidesList: document.getElementById("adminGuidesList"),
    
    // Video Player Modal
    videoModal: document.getElementById("videoModal"),
    closeVideoModal: document.getElementById("closeVideoModal"),
    videoPlayerContainer: document.getElementById("videoPlayerContainer"),
    modalVideoTitle: document.getElementById("modalVideoTitle"),
    modalVideoCategory: document.getElementById("modalVideoCategory"),
    modalVideoDescription: document.getElementById("modalVideoDescription")
};

// 3. Dynamic Agricultural Glossary Translator for Admin Uploads
function mockTranslateText(text, langCode) {
    if (langCode === "en") return text;
    
    const prefixes = {
        hi: "[अनुवादित]: ",
        kn: "[ಅನುವಾದಿಸಲಾಗಿದೆ]: ",
        te: "[అనువదించబడింది]: ",
        ta: "[மொழிபெயர்க்கப்பட்டது]: ",
        mr: "[अनुवादित]: ",
        gu: "[અનુવાદિત]: ",
        bn: "[অনূদিত]: "
    };
    
    const glossary = {
        hi: {
            "crop": "फसल", "crops": "फसलों", "soil": "मिट्टी", "disease": "बीमारी", "diseases": "बीमारियों",
            "fertilizer": "खाद", "market": "बाजार", "mandi": "मंडी", "tool": "उपकरण", "tools": "उपकरणों",
            "farmer": "किसान", "farmers": "किसानों", "farming": "खेती", "yield": "पैदावार", "pest": "कीट",
            "organic": "जैविक", "water": "पानी", "seed": "बीज", "seeds": "बीजों", "app": "ऐप", "mobile": "मोबाइल"
        },
        kn: {
            "crop": "ಬೆಳೆ", "crops": "ಬೆಳೆಗಳು", "soil": "ಮಣ್ಣು", "disease": "ರೋಗ", "diseases": "ರೋಗಗಳು",
            "fertilizer": "ಗೊಬ್ಬರ", "market": "ಮಾರುಕಟ್ಟೆ", "mandi": "ಮಂಡಿ", "tool": "ಉಪಕರಣ", "tools": "ಉಪಕರಣಗಳು",
            "farmer": "ರೈತ", "farmers": "ರೈತರು", "farming": "ಕೃಷಿ", "yield": "ಇಳುವರಿ", "pest": "ಕೀಟ",
            "organic": "ಸಾವಯವ", "water": "ನೀರು", "seed": "ಬೀಜ", "seeds": "ಬೀಜಗಳು", "app": "ಆಪ್", "mobile": "ಮೊಬೈಲ್"
        },
        te: {
            "crop": "పంట", "crops": "పంటలు", "soil": "మట్టి", "disease": "వ్యాధి", "diseases": "వ్యాధులు",
            "fertilizer": "ఎరువులు", "market": "మార్కెట్", "mandi": "మండి", "tool": "పరికరం", "tools": "పరికరాలు",
            "farmer": "రైతు", "farmers": "రైతులు", "farming": "వ్యవసాయం", "yield": "దిగుబడి", "pest": "తెగులు",
            "organic": "సేంద్రీయ", "water": "నీరు", "seed": "విత్తనం", "seeds": "విత్తనాలు", "app": "యాప్", "mobile": "మొబైల్"
        },
        ta: {
            "crop": "பயிர்", "crops": "பயிர்கள்", "soil": "மண்", "disease": "நோய்", "diseases": "நோய்கள்",
            "fertilizer": "உரம்", "market": "சந்தை", "mandi": "மண்டி", "tool": "கருவி", "tools": "கருவிகள்",
            "farmer": "விவசாயி", "farmers": "விவசாயிகள்", "farming": "விவசாயம்", "yield": "விளைச்சல்", "pest": "பூச்சி",
            "organic": "இயற்கை", "water": "தண்ணீர்", "seed": "விதை", "seeds": "விதைகள்", "app": "செயலி", "mobile": "மொபைல்"
        },
        mr: {
            "crop": "पीक", "crops": "पिके", "soil": "माती", "disease": "रोग", "diseases": "रोग",
            "fertilizer": "खत", "market": "बाजार", "mandi": "मंडी", "tool": "साधन", "tools": "साधने",
            "farmer": "शेतकरी", "farmers": "शेतकरी", "farming": "शेती", "yield": "उत्पादन", "pest": "कीड",
            "organic": "सेंद्रिय", "water": "पाणी", "seed": "बीज", "seeds": "बियाणे", "app": "अ‍ॅप", "mobile": "मोबाईल"
        },
        gu: {
            "crop": "પાક", "crops": "પાકો", "soil": "જમીન", "disease": "રોગ", "diseases": "રોગો",
            "fertilizer": "ખાતર", "market": "બજાર", "mandi": "મંડી", "tool": "સાધન", "tools": "સાધનો",
            "farmer": "ખેડૂત", "farmers": "ખેડૂતો", "farming": "ખેતી", "yield": "ઉપજ", "pest": "જીવાત",
            "organic": "સેન્દ્રિય", "water": "પાણી", "seed": "બીજ", "seeds": "બીજો", "app": "એપ", "mobile": "મોબાઇલ"
        },
        bn: {
            "crop": "ফসল", "crops": "ফসলের", "soil": "মাটি", "disease": "রোগ", "diseases": "রোগসমূহ",
            "fertilizer": "সার", "market": "বাজার", "mandi": "মন্ডি", "tool": "যন্ত্রপাতি", "tools": "যন্ত্রপাতি",
            "farmer": "কৃষক", "farmers": "কৃষকরা", "farming": "কৃষি", "yield": "ফলন", "pest": "পোকা",
            "organic": "জৈব", "water": "জল", "seed": "বীজ", "seeds": "বীজসমূহ", "app": "অ্যাপ", "mobile": "মোবাইল"
        }
    };

    let translated = text;
    const dict = glossary[langCode];
    if (dict) {
        Object.keys(dict).forEach(word => {
            const regex = new RegExp("\\b" + word + "\\b", "gi");
            translated = translated.replace(regex, (matched) => {
                const isCapital = matched[0] === matched[0].toUpperCase();
                const replacement = dict[word];
                return isCapital ? replacement[0].toUpperCase() + replacement.slice(1) : replacement;
            });
        });
    }

    return (prefixes[langCode] || "") + translated;
}

// 4. i18n Translation Engine
function translatePage(langCode) {
    currentLanguage = langCode;
    const langDict = TRANSLATIONS[langCode];
    if (!langDict) return;

    // Translate elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        if (langDict[key]) {
            const innerSpan = elem.querySelector("span");
            const innerIcon = elem.querySelector("i");
            
            if (innerIcon && !innerSpan) {
                elem.innerHTML = "";
                elem.appendChild(innerIcon);
                elem.appendChild(document.createTextNode(" " + langDict[key]));
            } else if (innerSpan) {
                innerSpan.innerHTML = langDict[key];
            } else {
                elem.innerHTML = langDict[key];
            }
        }
    });

    // Translate placeholder attributes
    document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
        const key = elem.getAttribute("data-i18n-placeholder");
        if (langDict[key]) {
            elem.setAttribute("placeholder", langDict[key]);
        }
    });

    // Update Header Select Language Text
    const langNameMap = {
        en: "English",
        hi: "हिन्दी",
        kn: "ಕನ್ನಡ",
        te: "తెలుగు",
        ta: "தமிழ்",
        mr: "मराठी",
        gu: "ગુજરાતી",
        bn: "বাংলা"
    };
    if (elements.headerLangText) {
        elements.headerLangText.textContent = langNameMap[langCode] || "English";
    }

    // Synchronize Simulator Language Active Buttons
    elements.simLangBtns.forEach(btn => {
        const btnLang = btn.getAttribute("data-lang");
        if (btnLang === langCode) {
            btn.classList.add("active");
            if (!btn.querySelector(".dot")) {
                elements.simLangBtns.forEach(b => {
                    const dot = b.querySelector(".dot");
                    if (dot) dot.remove();
                    b.classList.remove("active");
                });
                btn.classList.add("active");
                const dot = document.createElement("span");
                dot.className = "dot";
                btn.appendChild(dot);
            }
        }
    });

    // Translate dynamic walkthrough feeds & admin management lists
    renderVideoGrid(getActiveCategoryFilter());
    if (!elements.adminPanelContent.classList.contains("hidden")) {
        renderAdminGuidesList();
    }
}

// 5. Simulated Time Updater
function updateSimulatedTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    if (elements.simTime) {
        elements.simTime.textContent = `${hours}:${minutes}`;
    }
}
setInterval(updateSimulatedTime, 1000);
updateSimulatedTime();

// 6. Simulator Navigation & Click Handlers
function resetSimulatorScreens() {
    const screens = [
        elements.simScreenHome,
        elements.simScreenTools,
        elements.simScreenMarket,
        elements.simScreenProfile,
        elements.simDetailCropSuggestion,
        elements.simDetailDiagnoseCrop
    ];
    screens.forEach(s => {
        if (s) s.classList.remove("active");
    });
}

function handleSimulatorNav(targetId) {
    resetSimulatorScreens();
    
    // Activate target screen
    const targetScreen = document.getElementById(targetId);
    if (targetScreen) targetScreen.classList.add("active");
    
    // Highlight nav item
    elements.simNavItems.forEach(item => {
        if (item.getAttribute("data-target") === targetId) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

// Bind Simulator Events
function bindSimulatorEvents() {
    // Bottom Nav Click
    elements.simNavItems.forEach(item => {
        item.addEventListener("click", () => {
            const target = item.getAttribute("data-target");
            handleSimulatorNav(target);
        });
    });

    // Quick Action Card click (Home screen detail simulation)
    elements.simActionCards.forEach(card => {
        card.addEventListener("click", () => {
            const feature = card.getAttribute("data-feature");
            resetSimulatorScreens();
            
            if (feature === "crop-suggestion" && elements.simDetailCropSuggestion) {
                elements.simDetailCropSuggestion.classList.add("active");
            } else if (feature === "diagnose-crop" && elements.simDetailDiagnoseCrop) {
                elements.simDetailDiagnoseCrop.classList.add("active");
            } else if (feature === "market-prices") {
                handleSimulatorNav("simScreenMarket");
            } else if (feature === "tools-rent") {
                handleSimulatorNav("simScreenTools");
            } else {
                const title = card.querySelector('h5').innerText;
                alert(`Simulated App Action: Opening "${title}" feature page.`);
                elements.simScreenHome.classList.add("active");
            }
        });
    });

    // Back Buttons on sub-pages (e.g. Tools, Market back goes to Home)
    elements.simBackBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            handleSimulatorNav("simScreenHome");
        });
    });

    // Back Buttons on Detail screens
    elements.simBackBtnDetails.forEach(btn => {
        btn.addEventListener("click", () => {
            handleSimulatorNav("simScreenHome");
        });
    });

    // Language selection inside Simulator Profile Screen
    elements.simLangBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const langCode = btn.getAttribute("data-lang");
            translatePage(langCode);
        });
    });
}

// 7. Header Navigation & Mobile Menu & dropdowns
elements.menuToggle.addEventListener("click", () => {
    elements.navMenu.classList.toggle("active");
});

// Header language dropdown trigger
elements.headerLangPickerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    elements.headerLangDropdown.classList.toggle("active");
});

// Dropdown item selection logic
document.querySelectorAll("#headerLangDropdown .dropdown-item").forEach(item => {
    item.addEventListener("click", () => {
        const langCode = item.getAttribute("data-lang");
        translatePage(langCode);
        elements.headerLangDropdown.classList.remove("active");
    });
});

// Click outside close dropdown
document.addEventListener("click", () => {
    if (elements.headerLangDropdown) {
        elements.headerLangDropdown.classList.remove("active");
    }
});

// Smooth scroll adjustments & close menu on click
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
        elements.navMenu.classList.remove("active");
        
        // Remove active class from all links
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        
        // If clicking Admin Panel, handle visibility of admin section and don't scroll landing features
        if (link.id === "adminNavBtn") {
            elements.adminPortal.classList.remove("hidden");
            link.classList.add("active");
            return;
        }
        
        // Else target is scroll section
        link.classList.add("active");
    });
});

// 8. User Panel Video Guides Hub Logic
function renderVideoGrid(categoryFilter = "all") {
    elements.videoGrid.innerHTML = "";
    
    const filtered = categoryFilter === "all" 
        ? appGuides 
        : appGuides.filter(g => g.category === categoryFilter);
        
    if (filtered.length === 0) {
        elements.videoGrid.innerHTML = `
            <div class="col-span-full text-center py-12" style="grid-column: 1 / -1;">
                <i class="fa-regular fa-folder-open" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 12px;"></i>
                <h4 style="color: var(--text-muted);">No guides uploaded yet for this category.</h4>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 4px;">Admin can upload custom video tutorials from the admin panel.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(guide => {
        const card = document.createElement("div");
        card.className = "video-card";
        
        // Get translated elements
        const langDict = TRANSLATIONS[currentLanguage];
        let displayTitle = guide.title;
        let displayDesc = guide.description;

        if (langDict) {
            const titleKey = `${guide.id}-title`;
            const descKey = `${guide.id}-desc`;
            
            // Try specific predefined translations first, otherwise fallback to mock agricultural glossary translator
            displayTitle = langDict[titleKey] || mockTranslateText(guide.title, currentLanguage);
            displayDesc = langDict[descKey] || mockTranslateText(guide.description, currentLanguage);
        }
        
        // Render beautiful category badge
        let catLabel = "General";
        if (guide.category === "tutorials") catLabel = "App Tutorial";
        if (guide.category === "crop-care") catLabel = "Crop Care";
        if (guide.category === "market") catLabel = "Market Prices";
        if (guide.category === "tools") catLabel = "Tools & Equipment";

        card.innerHTML = `
            <div class="video-thumbnail-container" onclick="openVideoPlayer('${guide.id}')">
                <img src="${guide.coverUrl || 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80'}" alt="${displayTitle}" class="video-thumbnail">
                <div class="video-overlay-play">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>
            <div class="video-card-body">
                <span class="badge">${catLabel}</span>
                <h4>${displayTitle}</h4>
                <p>${displayDesc}</p>
            </div>
        `;
        elements.videoGrid.appendChild(card);
    });
}

// Bind Category Filters
elements.filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        elements.filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const cat = btn.getAttribute("data-category");
        renderVideoGrid(cat);
    });
});

// 9. Video Player Modal Logic
window.openVideoPlayer = function(id) {
    const guide = appGuides.find(g => g.id === id);
    if (!guide) return;

    // Translate modal contents
    const langDict = TRANSLATIONS[currentLanguage];
    let displayTitle = guide.title;
    let displayDesc = guide.description;

    if (langDict) {
        const titleKey = `${guide.id}-title`;
        const descKey = `${guide.id}-desc`;
        displayTitle = langDict[titleKey] || mockTranslateText(guide.title, currentLanguage);
        displayDesc = langDict[descKey] || mockTranslateText(guide.description, currentLanguage);
    }

    elements.modalVideoTitle.textContent = displayTitle;
    
    let catLabel = "General";
    if (guide.category === "tutorials") catLabel = "App Tutorial";
    if (guide.category === "crop-care") catLabel = "Crop Care";
    if (guide.category === "market") catLabel = "Market Prices";
    if (guide.category === "tools") catLabel = "Tools & Equipment";
    elements.modalVideoCategory.textContent = catLabel;
    
    elements.modalVideoDescription.textContent = displayDesc;

    // Build the iframe/video element
    let embedUrl = guide.videoUrl;
    if (embedUrl.includes("youtube.com/watch?v=")) {
        const videoId = embedUrl.split("watch?v=")[1].split("&")[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (embedUrl.includes("youtu.be/")) {
        const videoId = embedUrl.split("youtu.be/")[1].split("?")[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }

    if (embedUrl.includes("youtube.com") || embedUrl.includes("youtu.be")) {
        elements.videoPlayerContainer.innerHTML = `
            <iframe src="${embedUrl}?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    } else {
        elements.videoPlayerContainer.innerHTML = `
            <video src="${embedUrl}" controls autoplay style="width:100%; height:100%; object-fit:contain;"></video>
        `;
    }

    elements.videoModal.classList.add("active");
};

function closePlayerModal() {
    elements.videoModal.classList.remove("active");
    elements.videoPlayerContainer.innerHTML = ""; // Clear source to stop playback
}

elements.closeVideoModal.addEventListener("click", closePlayerModal);
elements.videoModal.addEventListener("click", (e) => {
    if (e.target === elements.videoModal) {
        closePlayerModal();
    }
});

// 10. Admin Portal Verification & Login
elements.btnVerifyPin.addEventListener("click", verifyAdminPin);
elements.adminPinInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") verifyAdminPin();
});

function verifyAdminPin() {
    const pin = elements.adminPinInput.value;
    if (pin === "1234") {
        elements.adminPinBox.classList.add("hidden");
        elements.adminPanelContent.classList.remove("hidden");
        renderAdminGuidesList();
    } else {
        alert("Incorrect PIN passcode. Please try again! (Hint: Default is 1234)");
        elements.adminPinInput.value = "";
        elements.adminPinInput.focus();
    }
}

elements.btnAdminLogout.addEventListener("click", () => {
    elements.adminPanelContent.classList.add("hidden");
    elements.adminPinBox.classList.remove("hidden");
    elements.adminPinInput.value = "";
    elements.adminPortal.classList.add("hidden");
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    document.querySelector(".nav-link[href='#hero']").classList.add("active");
});

// 11. Admin Upload / Edit Form Actions & CRUD
let uploadedImageBase64 = "";

elements.coverImage.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        uploadedImageBase64 = evt.target.result;
        elements.imagePreview.innerHTML = `<img src="${uploadedImageBase64}" alt="Preview">`;
        elements.coverImageUrl.value = "";
    };
    reader.readAsDataURL(file);
});

elements.coverImageUrl.addEventListener("input", (e) => {
    const val = e.target.value.trim();
    if (val !== "") {
        elements.coverImage.value = "";
        uploadedImageBase64 = "";
        elements.imagePreview.innerHTML = `<img src="${val}" alt="Preview" onerror="this.src=''; elements.imagePreview.innerHTML='Invalid Image URL';">`;
    } else {
        elements.imagePreview.innerHTML = "No image selected";
    }
});

elements.uploadForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = elements.editItemId.value;
    const title = elements.guideTitle.value.trim();
    const category = elements.guideCategory.value;
    const videoUrl = elements.videoUrl.value.trim();
    const description = elements.guideDescription.value.trim();
    
    let finalCoverUrl = "";
    if (uploadedImageBase64) {
        finalCoverUrl = uploadedImageBase64;
    } else if (elements.coverImageUrl.value.trim()) {
        finalCoverUrl = elements.coverImageUrl.value.trim();
    } else {
        finalCoverUrl = "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80";
    }

    if (id) {
        const idx = appGuides.findIndex(g => g.id === id);
        if (idx !== -1) {
            appGuides[idx] = {
                id,
                title,
                category,
                videoUrl,
                coverUrl: finalCoverUrl,
                description
            };
            alert("Guide updated successfully!");
        }
    } else {
        const newGuide = {
            id: "guide-" + Date.now(),
            title,
            category,
            videoUrl,
            coverUrl: finalCoverUrl,
            description
        };
        appGuides.unshift(newGuide);
        alert("New guide published successfully!");
    }

    saveGuides();
    resetUploadForm();
    renderVideoGrid(getActiveCategoryFilter());
    renderAdminGuidesList();
});

function getActiveCategoryFilter() {
    const activeBtn = document.querySelector(".filter-btn.active");
    return activeBtn ? activeBtn.getAttribute("data-category") : "all";
}

function saveGuides() {
    localStorage.setItem("krushi_guides", JSON.stringify(appGuides));
}

function resetUploadForm() {
    elements.uploadForm.reset();
    elements.editItemId.value = "";
    uploadedImageBase64 = "";
    elements.imagePreview.innerHTML = "No image selected";
    elements.formTitle.textContent = "Upload New Guide / Video";
    elements.btnSubmitForm.textContent = "Publish Guide";
    elements.btnCancelEdit.classList.add("hidden");
}

elements.btnCancelEdit.addEventListener("click", resetUploadForm);

// Render Admin list table
function renderAdminGuidesList() {
    elements.adminGuidesList.innerHTML = "";
    
    if (appGuides.length === 0) {
        elements.adminGuidesList.innerHTML = `
            <tr>
                <td colspan="4" class="text-center" style="text-align: center; padding: 24px; color: var(--text-muted);">
                    No guides uploaded yet. Upload your first guide using the form!
                </td>
            </tr>
        `;
        return;
    }

    appGuides.forEach(guide => {
        const tr = document.createElement("tr");
        
        // Translate title and description for admin panel list
        const langDict = TRANSLATIONS[currentLanguage];
        let displayTitle = guide.title;
        let displayDesc = guide.description;

        if (langDict) {
            const titleKey = `${guide.id}-title`;
            const descKey = `${guide.id}-desc`;
            displayTitle = langDict[titleKey] || mockTranslateText(guide.title, currentLanguage);
            displayDesc = langDict[descKey] || mockTranslateText(guide.description, currentLanguage);
        }

        let catLabel = "General";
        if (guide.category === "tutorials") catLabel = "App Tutorial";
        if (guide.category === "crop-care") catLabel = "Crop Care";
        if (guide.category === "market") catLabel = "Market Prices";
        if (guide.category === "tools") catLabel = "Tools & Equipment";

        tr.innerHTML = `
            <td>
                <img src="${guide.coverUrl || 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=150&q=80'}" class="manage-preview-img" alt="">
            </td>
            <td>
                <div class="manage-title-box">
                    <h5>${displayTitle}</h5>
                    <p class="description-preview" style="max-width:260px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${displayDesc}</p>
                </div>
            </td>
            <td>
                <span class="badge">${catLabel}</span>
            </td>
            <td>
                <div class="action-btn-row">
                    <button class="action-btn action-edit" onclick="editGuide('${guide.id}')" title="Edit"><i class="fa-solid fa-pen"></i></button>
                    <button class="action-btn action-delete" onclick="deleteGuide('${guide.id}')" title="Delete"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        `;
        elements.adminGuidesList.appendChild(tr);
    });
}

window.editGuide = function(id) {
    const guide = appGuides.find(g => g.id === id);
    if (!guide) return;

    elements.editItemId.value = guide.id;
    elements.guideTitle.value = guide.title;
    elements.guideCategory.value = guide.category;
    elements.videoUrl.value = guide.videoUrl;
    elements.guideDescription.value = guide.description;
    
    if (guide.coverUrl.startsWith("data:image")) {
        uploadedImageBase64 = guide.coverUrl;
        elements.coverImageUrl.value = "";
    } else {
        uploadedImageBase64 = "";
        elements.coverImageUrl.value = guide.coverUrl;
    }
    
    elements.imagePreview.innerHTML = `<img src="${guide.coverUrl}" alt="Preview">`;
    elements.formTitle.textContent = "Edit Guide Details";
    elements.btnSubmitForm.textContent = "Save Changes";
    elements.btnCancelEdit.classList.remove("hidden");
    
    document.querySelector(".upload-form-card").scrollIntoView({ behavior: 'smooth' });
};

window.deleteGuide = function(id) {
    if (confirm("Are you sure you want to delete this guide walkthrough? This action is permanent and cannot be undone.")) {
        appGuides = appGuides.filter(g => g.id !== id);
        saveGuides();
        renderVideoGrid(getActiveCategoryFilter());
        renderAdminGuidesList();
        
        if (elements.editItemId.value === id) {
            resetUploadForm();
        }
    }
};

// 12. Initialization Runner
function startApp() {
    initGuides();
    bindSimulatorEvents();
    renderVideoGrid();
    
    // Default system language translation loading
    translatePage("en");
}

window.addEventListener("DOMContentLoaded", startApp);
