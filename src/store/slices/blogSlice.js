import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      date: "17.10.2023",
      title: "Güvenle Sürüş: Düzenli Araç Bakımının Hayati Rolü",
      description: [
        "Aracınız, sadece A noktasından B noktasına gitmekten daha fazlasıdır; günlük yolculuğunuzda güvenilir bir yol arkadaşıdır.",
        "Her güvenilir arkadaş gibi, aracınızın da düzenli bakım ihtiyacı vardır. Bu bakım, aracınızın uzun ömürlü olmasını ve yolculuklarınızın güvenli ve sorunsuz geçmesini sağlar.",
        "Özellikle şehir içi trafiğinde, aracınızın her zaman en iyi performansı göstermesi için düzenli kontrol ve bakım şarttır.",
        "Düzenli araç bakımı, düzenli araç bakımının neden bu kadar önemli olduğunu ve bu bakımı nasıl sürdürebileceğinizi ele alıyoruz.",
        "Unutmayın, küçük bir bakım ihmali büyük masraflara yol açabilir. Düzenli araç bakımı, güvenli sürüş, şehir içi trafiği, araç performansı.",
      ],
      imageUrl: "/assets/img/blog-show.jpg",
      slug: "guvenle-surus-duzenli-arac-bakiminin-hayati-rolu",
    },
    {
      id: 2,
      date: "17.10.2023",
      title: "Düzenli Araç Bakımının Önemi",
      description: [
        "Düzenli araç bakımı, bir aracın uzun ömürlü olması ve performansını en üst düzeyde tutması için kritik öneme sahiptir.",
        "Aracınızın yağ değişimi, fren kontrolleri, lastik basınçları gibi rutin kontrolleri zamanında yapılmalıdır.",
        "Bu bakım işlemleri, aracınızın yolda daha güvenli olmasını sağlar ve olası kazaların önüne geçer.",
        "Ayrıca, düzenli bakım, aracınızın yakıt verimliliğini artırır ve uzun vadede tasarruf sağlar.",
        "Düzenli araç bakımı, düzenli araç bakımının ne kadar önemli olduğunu ve hangi adımların atılması gerektiğini tartışıyoruz.",
        "Düzenli bakım, araç performansı, yakıt verimliliği, güvenli sürüş.",
      ],
      imageUrl: "/assets/img/blog_4.jpg",
      slug: "duzenli-arac-bakiminin-onemi",
    },
    {
      id: 3,
      date: "05.11.2023",
      title: "Güvenilirliğe Giden Yol: Temel Araç Bakım İpuçları",
      description: [
        "Aracınızın her zaman güvenilir olmasını sağlamak, düzenli bakım ve özen gerektirir.",
        "Araç güvenliği, aracınızın güvenilirliğini artırmak için temel bakım ipuçlarını ele alıyoruz.",
        "Yağ değişimlerinden lastik kontrollerine, aracınızın her zaman yola çıkmaya hazır olması için neler yapmanız gerektiğini öğrenin.",
        "Unutmayın, düzenli bakım sadece aracınızın ömrünü uzatmakla kalmaz, aynı zamanda yolda güvenliğinizi de sağlar.",
        "Güvenilir araç bakımı, temel bakım ipuçları, düzenli bakım, araç ömrü.",
      ],
      imageUrl: "/assets/img/blog_5.jpg",
      slug: "guvenilirlige-giden-yol-temel-arac-bakim-ipuclari",
    },
    {
      id: 4,
      date: "12.11.2023",
      title: "From Garage to Glory: Transform Your Vehicle's Health",
      title: "Garajdan Zafere: Araç Sağlığınızı Dönüştürün",
      description: [
        "Araç sağlığınız, ona sağladığınız bakım ve özenin bir yansımasıdır.",
        "Düzenli bakım, düzenli bakımın aracınızın performansını ve ömrünü nasıl dönüştürebileceğini keşfedeceksiniz.",
        "Rutin yağ değişimlerinden büyük sistem kontrollerine kadar, aracınızın her zaman en iyi durumda kalmasını sağlamak için neler yapabileceğinizi öğrenin.",
        "Unutmayın, iyi bakılmış bir araç sadece daha pürüzsüz çalışmakla kalmaz, aynı zamanda uzun vadede size tasarruf sağlar.",
        "Araç bakımı, araç sağlığı, performans artırımı, uzun ömür.",
      ],

      imageUrl: "/assets/img/blog_6.jpg",
      slug: "from-garage-to-glory-transform-your-vehicles-health",
    },
    {
      id: 5,
      date: "20.11.2023",
      title: "Araç Performansını Arttırmanın Yolları",
      description: [
        "Aracınızın performansını artırmak için bazı basit ama etkili yöntemler vardır.",
        "Motor bakımı, motor bakımı, lastik seçimi ve yakıt kalitesi gibi faktörlerin aracınızın performansını nasıl etkilediğini keşfedeceksiniz.",
        "Ayrıca, düzenli bakım ve doğru sürüş tekniklerinin de performansı nasıl artırabileceğini öğreneceksiniz.",
        "Araç performansı, motor bakımı, yakıt kalitesi, sürüş teknikleri.",
      ],
      imageUrl: "/assets/img/blog_7.jpg",
      slug: "arac-performansini-arttirmanin-yollari",
    },
    {
      id: 6,
      date: "25.11.2023",
      title: "Mevsim Değişikliklerinde Araç Bakımı",
      description: [
        "Mevsim değişiklikleri, aracınızın performansı ve güvenliği üzerinde büyük bir etkiye sahip olabilir.",
        "Performas istikrarı, kış aylarına hazırlanmak için yapılması gerekenlerden, yaz aylarında aracınızı serin tutmanın yollarına kadar pek çok önemli bakım ipucunu bulacaksınız.",
        "Mevsimsel araç bakımı, kış hazırlıkları, yaz bakımı, araç güvenliği.",
      ],
      imageUrl: "/assets/img/blog_8.jpg",
      slug: "mevsim-degisikliklerinde-arac-bakimi",
    },
    {
      id: 7,
      date: "01.12.2023",
      title: "Yakıt Tasarrufu İçin İpuçları",
      description: [
        "Yakıt fiyatlarının artmasıyla birlikte, yakıt tasarrufu sağlamak her zamankinden daha önemli hale geldi.",
        "En etkili yollar, yakıt tasarrufu için en etkili yöntemleri öğrenin.",
        "Doğru lastik basıncından, uygun hızda seyretmeye kadar birçok ipucu, yakıt tüketiminizi azaltmanıza yardımcı olabilir.",
        "Yakıt tasarrufu, ekonomik sürüş, lastik basıncı, hız kontrolü.",
      ],
      imageUrl: "/assets/img/blog_9.jpg",
      slug: "yakit-tasarrufu-icin-ipuclari",
    },
  ],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    // Define your reducers here
  },
});

export default blogSlice.reducer;
