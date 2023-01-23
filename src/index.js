const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
let link = document.querySelectorAll("a");
link[0].textContent = siteContent.nav["nav-item-1"];
link[1].textContent = siteContent.nav["nav-item-2"];
link[2].textContent = siteContent.nav["nav-item-3"];
link[3].textContent = siteContent.nav["nav-item-4"];
link[4].textContent = siteContent.nav["nav-item-5"];
link[5].textContent = siteContent.nav["nav-item-6"];

link.forEach(function (italic) {
  italic.classList.add("italic");
});

let textNew = document.querySelector(".cta-text>h1");
textNew.textContent = siteContent.cta.h1;
textNew.textContent = siteContent.cta.button;

let text = document.querySelectorAll(".text-content>h4");
text[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
text[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
text[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
text[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
text[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];

let parg = document.querySelectorAll(".text-content>p");
parg[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
parg[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
parg[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
parg[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
parg[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

let text1 = document.querySelector(".contact>h4");
text1.textContent = siteContent["iletisim"]["iletişim-h4"];
let parg1 = document.querySelectorAll(".contact>p");
parg1[0].textContent = siteContent["iletisim"]["adres"];
parg1[1].textContent = siteContent["iletisim"]["telefon"];
parg1[2].textContent = siteContent["iletisim"]["email"];

let linkF = document.querySelector("footer>a");
linkF.classList.add("bold");
linkF.textContent = siteContent.footer.copyright;

let img1 = document.querySelector("#logo-img");
img1.setAttribute("src", siteContent.images["logo-img"]);

let img2 = document.querySelector("#cta-img");
img2.setAttribute("src", siteContent.images["cta-img"]);

let img3 = document.querySelector("#middle-img");
img3.setAttribute("src", siteContent.images["accent-img"]);

let baslık = document.querySelector("h1");
baslık.textContent = "Bu DOM Mükemmel";

let button = document.querySelector("button");
button.textContent = "Başlayın";
