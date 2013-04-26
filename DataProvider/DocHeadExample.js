﻿d = {
   Body: {
    t:"Книшко винни пух",   // Название, в данном случае название книги
    s:0,                    // Номер первого блока в общем индексе
    e:120,                  // Номер последнего блока в общем индексе - в нашем случае размер
    c:[                     // Дочерние ноды
      {
          t:"Глава адын",
          s:0,              // Номер первого блока в общем индексе
          e:20              // Номер последнего блока в общем индексе
      },
      {                     // А бывают да, блоки без заголовка. Юзеру в содержании
          s:21,             //  не покажем, но в остальном блок как блок,
          e:36              //  даже разрыв страницы даст, если надо
      },
      {
          t:"Глава тыры",   // В диапазон 37-98 впишется этот раздел и все его подразделы
          s:37,
          e:98,
          c:[
            {
                t:"Подзаголовок 1",
                s:38,
                e:55
            },
            {
                t:"Подзаголовок 2",
                s:56,
                e:98
            }
          ]
      },
      {
          t:"Коментарии",   // Сноски оконечные (не путать с подстраничные, те по месту ссылки будут встроены)
          s:99,
          e:120
      }
    ]
   },
   Parts: [                 // Физическое размещение блоков на сервере
       { s: 0, e: 22, url: 'part01.json' },
       { s: 23, e: 50, url: 'part02.json' },
       { s: 51, e: 86, url: 'part03.json' },
       { s: 87, e: 120, url: 'part04.json' },
   ]
}