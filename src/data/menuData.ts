export interface MenuItem {
  name: string;
  price: string;
  description: string;
  weight: string;
  image: string;
  ingredients?: string;
  storage?: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Круглі круасани",
    items: [
      { name: 'Круасан "Манго-абрикос"', price: "150 ₴", description: "Круглий круасан з листкового тіста. Начинка: крем зі смаком манго-абрикос.", weight: "180г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_CZecj-DUULF-GoRpY.png" },
      { name: 'Круасан "Вибухова карамель"', price: "150 ₴", description: "Круглий круасан з листкового тіста. Начинка: крем із солоною карамеллю.", weight: "170г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_qchkp-bLrWH-vfPHB.png" },
      { name: 'Круасан "Фісташка-малина"', price: "150 ₴", description: "Вершково-фісташковий крем та малинове кюлі.", weight: "180г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_bTFQA-nIFeE-TWUCv.png" },
      { name: 'Круасан "Ягідний йогурт"', price: "150 ₴", description: "Йогуртово-ягідний крем з кольоровою глазур'ю.", weight: "190г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_ASJSH-vLceE-lcxVI.png" },
      { name: 'Круасан "Шоколадний цитрус"', price: "150 ₴", description: "Вершково-шоколадний крем з апельсиново-лимонним курдом.", weight: "190г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_FukqX-eToCs-zrcyz.png" },
    ],
  },
  {
    name: "Круасани",
    items: [
      { name: "Круасан шоколадний", price: "88 ₴", description: "Листкове тісто з вершковим маслом. Начинка: шоколадно-фундучна.", weight: "136г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_EPDpV-glrco-WsdAP.png" },
      { name: "Круасан вишневий", price: "82 ₴", description: "Листкове тісто з вершковим маслом. Начинка: цілі шматочки натуральної вишні.", weight: "136г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_HdLxY-ffsWK-ngiGC.png" },
      { name: "Круасан мигдалевий", price: "99 ₴", description: "Франжипан з мигдальним борошном, нотками апельсину та коньяку.", weight: "145г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_RdYbF-JBCdP-VhDyO.png" },
      { name: "Круасан кокосовий", price: "109 ₴", description: "На основі білого шоколаду та кокосового борошна.", weight: "150г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_nmsCG-sCsew-ZFCHY.png" },
      { name: "Круасан фісташковий", price: "99 ₴", description: "Фісташковий крем власного виробництва з фісташковою пастою.", weight: "165г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_gYfuH-WHeCI-BnIGT.png" },
      { name: "Круасан лимонний", price: "109 ₴", description: "Лимонний крем з кислинкою. Прикрашений італійською меренгою.", weight: "160г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_EFhRG-QONTe-gjFfD.png" },
    ],
  },
  {
    name: "Еклери",
    items: [
      { name: "Еклер ягідний", price: "79 ₴", description: "Заварне тісто, крем-муслін на основі білого шоколаду, сезонні ягоди.", weight: "85г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_KsAFb-qevzu-oFHRF.png" },
      { name: "Еклер манго-полуниця", price: "79 ₴", description: "Крем-муслін з натуральним манго та полуничним кюлі.", weight: "85г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_GrXXU-hApPP-PkCpn.png" },
      { name: "Еклер фісташковий", price: "99 ₴", description: "Крем-муслін з натуральним фісташковим маслом.", weight: "85г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_LmPIa-IxBAs-wmEDG.png" },
      { name: "Еклер шоколадний", price: "79 ₴", description: "Крем-муслін з додаванням чорного шоколаду.", weight: "85г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_IuSHQ-RIHHq-sCHnH.png" },
    ],
  },
  {
    name: "Торти",
    items: [
      { name: "Торт Шпинат-Смородина", price: "1 650 ₴", description: "Смарагдовий шпинатний бісквіт, смородинове кюлі та вершковий крем.", weight: "2,28кг", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_eIkFH-BEVVl-mYSsP.png" },
      { name: "Фісташка-малина", price: "1 500 ₴", description: "Фісташкові коржі, малинове конфі та фісташково-вершковий крем.", weight: "1900г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_xlCIe-iGIrk-kBAbR.png" },
      { name: "Медовик з вишнею", price: "1 400 ₴", description: "Медові коржі, вершковий сметанний крем та вишня.", weight: "2200г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_yGqIv-aClzA-JeWsk.png" },
      { name: "Снікерс", price: "1 680 ₴", description: "Шоколадні коржі, вершково-масляний крем, арахіс та тягуча карамель.", weight: "2300г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_VZWCB-MTElG-Xpwbz.png" },
      { name: "Класичний наполеон", price: "1 100 ₴", description: "Ніжне листкове тісто та заварний крем на ароматному вершковому маслі.", weight: "2кг", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_kycSt-uLqIa-XGwUR.png" },
    ],
  },
  {
    name: "Десерти",
    items: [
      { name: "Десерт Павлова", price: "95 ₴", description: "Ніжне безе, крем на основі вершкового сиру та малинове кюлі.", weight: "85г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_NlvgD-iEkSu-KICSS.jpeg" },
      { name: "Макарони в асортименті", price: "65 ₴", description: "Натуральні органічні продукти: шоколад, вершки, натуральна ваніль.", weight: "40-45г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_uKqWj-coqJQ-koIFY.jpeg" },
      { name: "Естерхазі", price: "150 ₴", description: "Мигдально-горіхові коржі, масляно-заварний крем з фундучним праліне.", weight: "165г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_kkRJk-flJeM-dQJIx.png" },
      { name: "Донати в асортименті", price: "58 ₴", description: "Бісквітне ніжне тісто з різними начинками.", weight: "70г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_xprik-Gulhr-QDNge.jpeg" },
    ],
  },
  {
    name: "Солоне меню",
    items: [
      { name: "Кіш з куркою та грибами", price: "830 ₴", description: "Вершкове листкове тісто, курка, гриби, сирно-вершкова заливка.", weight: "1200г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_KHUFI-qkFwl-fkUZJ.jpeg" },
      { name: 'Круасан з куркою "Теріякі"', price: "160 ₴", description: "Майонез, соус теріякі, салат, огірок, запечена курка.", weight: "220г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_rRSqa-XjJke-oRrLw.png" },
      { name: 'Круасан з куркою "Цезар"', price: "160 ₴", description: "Соус цезар, салат айсберг, помідор, запечена курка.", weight: "245г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_Ygbus-RFBiH-JRLQR.png" },
      { name: "Сендвіч хамон & помідор", price: "135 ₴", description: "Хліб гречаний на заквасці, хамон, рукола, моцарела, помідор.", weight: "200г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_IgJFLiz-tgAllIy-TgyZstf_F-r-S.jpeg" },
    ],
  },
  {
    name: "Хліб",
    items: [
      { name: "Гречаний", price: "75 ₴", description: "Хліб з гречаного борошна, характерний гречаний смак.", weight: "480г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_LyrWk-FHUDe-WmcgH.png" },
      { name: "Мультизерновий", price: "75 ₴", description: "На основі пшеничної закваски з кунжутом, насінням та пластівцями.", weight: "450г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_TehaX-KFrRI-PfCBF.jpeg" },
      { name: "Бездріжджовий", price: "65 ₴", description: "З житніми висівками та льоном на житній заквасці.", weight: "450г", image: "https://cdn-media.choiceqr.com/prod-eat-peremoga-bakery950/menu/thumbnail_iTPjT-GfGtQ-GHhCj.png" },
    ],
  },
];
