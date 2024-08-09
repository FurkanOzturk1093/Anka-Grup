// src/redux/servicesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [
    {
      href: "/services/performans-artisi",
      imgSrc: "/assets/img/service_1.jpg",
      title: "Performans Yükseltmeleri ve Özelleştirme",
      description:
        "Araç performansınızı artırarak, kişisel ihtiyaçlarınıza uygun özelleştirme seçenekleri sunuyoruz.",
      detailedDescription:
        "Performans yükseltmeleri ve özelleştirme hizmetimiz, aracınızın motor gücünü, yakıt verimliliğini ve genel performansını artırmayı amaçlar. İlk olarak, aracınızın mevcut durumunu detaylı bir şekilde analiz ediyoruz. Bu analiz sonuçlarına göre, performans iyileştirmeleri için gerekli modifikasyonları belirliyoruz. Modifikasyonlar arasında motor ayarları, egzoz sistemi değişiklikleri ve yazılım güncellemeleri bulunabilir. Özelleştirme sürecinde ise, aracınızı kişisel tercihleriniz doğrultusunda modifiye ediyoruz. Bu, iç mekan tasarımı, dış görünüm değişiklikleri ve diğer kişisel eklemeleri içerebilir. Sonuç olarak, aracınız hem performans hem de estetik açıdan tamamen sizin ihtiyaçlarınıza uygun hale gelir.",
      FAQ: [
        {
          question: "Performans yükseltmeleri ne tür avantajlar sunar?",
          answer:
            "Performans yükseltmeleri, aracınızın motor gücünü, yakıt verimliliğini ve genel performansını artırabilir. Bu, aracınızın daha hızlı ve daha güçlü olmasını sağlar. Ayrıca, performans yükseltmeleri, aracınızın daha iyi bir sürüş deneyimi sunmasına yardımcı olabilir.",
        },
        {
          question: "Performans yükseltmeleri ne kadar sürer?",
          answer:
            "Performans yükseltmeleri, aracınızın mevcut durumuna ve seçilen modifikasyonlara bağlı olarak değişebilir. Bazı performans yükseltmeleri birkaç saat içinde tamamlanabilirken, diğerleri birkaç gün sürebilir. Uzmanlarımız, performans yükseltmelerinin ne kadar süreceği konusunda size daha fazla bilgi verebilir.",
        },
        {
          question:
            "Performans yükseltmeleri aracımın garanti kapsamını etkiler mi?",
          answer:
            "Performans yükseltmeleri, aracınızın garanti kapsamını etkileyebilir. Bazı yükseltmeler, üretici garantisini geçersiz kılabilir. Yükseltme yapmadan önce, aracınızın garanti koşullarını gözden geçirmeniz ve uzmanlarımızla bu konuyu detaylı olarak konuşmanız önemlidir.",
        },
      ],
    },
    {
      href: "/services/elektrik-elektronik",
      imgSrc: "/assets/img/service_2.jpg",
      title: "Elektrik ve Elektronik Sistemler",
      description:
        "Araç elektrik ve elektronik sistemlerinde uzmanlaşmış ekibimizle, sorunlarınıza hızlı ve etkili çözümler sunuyoruz.",
      detailedDescription:
        "Elektrik ve elektronik sistemler hizmetimiz, aracınızdaki elektriksel ve elektronik problemleri çözmeye odaklanır. İlk aşamada, aracınızın elektrik ve elektronik sistemleri detaylı bir şekilde kontrol edilir. Bu kontrol sırasında, batarya durumu, kabloların bağlantıları, sigortalar ve elektronik kontrol üniteleri gibi unsurlar incelenir. Sorunlar tespit edildikten sonra, gerekli tamir ve değişiklikler yapılır. Bu işlemler arasında arıza tespiti, parça değişimi ve sistem güncellemeleri bulunabilir. Uzman teknisyenlerimiz, aracınızın elektriksel ve elektronik sistemlerinin en iyi performansı göstermesi için gerekli tüm adımları atar ve tüm işlemleri dikkatlice test ederek hizmeti tamamlar.",
      FAQ: [
        {
          question: "Elektrik sistemindeki arızalar nasıl tespit edilir?",
          answer:
            "Elektrik sistemindeki arızalar, aracın elektronik kontrol üniteleri ve sensörleri tarafından yapılan detaylı analizlerle tespit edilir. Test ekipmanları kullanılarak, batarya, kablolar, sigortalar ve diğer elektriksel bileşenler incelenir. Tespit edilen arızalar, uzman teknisyenler tarafından hızlı ve etkili bir şekilde giderilir.",
        },
        {
          question: "Elektrik sistemindeki arızalar nasıl onarılır?",
          answer:
            "Elektrik sistemindeki arızalar, genellikle arızalı parçaların değiştirilmesi veya tamir edilmesi yoluyla onarılır. Bu işlemler arasında kablo değişimi, sigorta yenileme, batarya testi ve elektronik kontrol ünitelerinin yeniden programlanması gibi işlemler yer alabilir. Uzmanlarımız, tüm onarımları titizlikle gerçekleştirir.",
        },
        {
          question: "Elektrik sistemlerindeki sorunlar nasıl önlenir?",
          answer:
            "Elektrik sistemlerindeki sorunları önlemek için düzenli bakım ve kontrol yapılması önerilir. Bataryanın durumu, kabloların bağlantıları ve sigortaların kontrolü düzenli aralıklarla yapılmalıdır. Ayrıca, aracınızın elektrik sistemlerini etkileyebilecek aşırı ısınma veya nem gibi çevresel faktörlere karşı dikkatli olmanız önemlidir.",
        },
      ],
    },
    {
      href: "/services/motor-tamir",
      imgSrc: "/assets/img/service_3.jpg",
      title: "Motor Diagnostik ve Onarım",
      description:
        "Motorunuzun sağlığını korumak için kapsamlı teşhis ve onarım hizmetleri sağlıyoruz.",
      detailedDescription:
        "Motor diagnostik ve onarım hizmetimiz, motorunuzun en yüksek verimlilikte çalışmasını sağlamak için kapsamlı bir analiz ve onarım süreci sunar. İlk olarak, motorunuz detaylı bir şekilde teşhis edilir. Bu aşamada, motorun performansı, yakıt tüketimi ve egzoz emisyonları gibi kriterler değerlendirilir. Teşhis sonucunda, motorun sorunlu bölümleri belirlenir. Belirlenen sorunlara göre gerekli onarımlar yapılır. Bu onarımlar arasında, motor parçalarının değiştirilmesi, sızıntıların giderilmesi ve motorun genel bakımının yapılması bulunabilir. Onarımlar tamamlandıktan sonra, motorunuzun performansını test etmek için bir dizi test gerçekleştirilir. Böylece motorunuz, hem güvenli hem de yüksek performanslı şekilde çalışmaya devam eder.",
      FAQ: [
        {
          question: "Motor diagnostik işlemi ne kadar sürer?",
          answer:
            "Motor diagnostik işlemi, aracın motorunun durumuna bağlı olarak değişebilir. Genellikle, detaylı bir teşhis işlemi birkaç saat sürebilir. Ancak, motorun durumuna göre bu süre uzayabilir. Uzmanlarımız, teşhis süreci hakkında size net bir zaman aralığı sağlayabilir.",
        },
        {
          question: "Motor onarımları hangi aşamalardan oluşur?",
          answer:
            "Motor onarımları, genellikle teşhis, parça değişimi ve test aşamalarından oluşur. İlk olarak, motorun detaylı teşhisi yapılır. Sorunlar belirlendikten sonra, gerekli parçalar değiştirilir veya tamir edilir. Onarımlar tamamlandıktan sonra, motorun performansı test edilerek tüm işlerin düzgün yapıldığı doğrulanır.",
        },
        {
          question: "Motor onarımları sonrası garanti sunuluyor mu?",
          answer:
            "Motor onarımları sonrası genellikle bir garanti sunulur. Garanti süresi, yapılan onarımların türüne ve kullanılan parçalara bağlı olarak değişebilir. Uzmanlarımız, onarımlar sonrası sağlanan garanti hakkında size detaylı bilgi verebilir ve garanti kapsamını açıklayabilir.",
        },
      ],
    },
  ],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
});

export default servicesSlice.reducer;
