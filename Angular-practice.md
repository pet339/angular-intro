# 1.1 Javascript algoritmikus feladatok
Adott egy objektumlista, amelyben 7 ügyfél található, akik foglaltak a hotelben. Le szeretnénk szűrni ezeket a vendégeket két szempont szerint:

- becsekkolt-e már
 - hányan érkeznek - az érkezők száma nagyobb vagy egyenlő, mint a vizsgált érték
 
 Egy metódust kell megírnod:
- a hotelFilter() metódust.
- A metódus három paramétert kap: az eredeti listát, az érkezők számát, és azt, hogy megérkezett-e már a vendég. 
- A metódus a szűrést követően adja vissza egy szűrt listában a vendégek neveit!
- Törekedj a funkcionális elvek használatára
- Feldathoz tartozó lista:
```
    { guestName: 'John Doe', country: 'England', numberOfGuests: 4, alreadyCheckedIn: true },
    { guestName: 'Jane Harmon', country: 'USA', numberOfGuests: 7, alreadyCheckedIn: true },
    { guestName: 'Sarah Johnson', country: 'England', numberOfGuests: 2, alreadyCheckedIn: true },
    { guestName: 'Hanna Kovács', country: 'Hungary', numberOfGuests: 4, alreadyCheckedIn: false },
    { guestName: 'Tim Olson', country: 'Sweden', numberOfGuests: 1, alreadyCheckedIn: true },
    { guestName: 'Robert Wegener', country: 'Deutschland', numberOfGuests: 4, alreadyCheckedIn: true },
    { guestName: 'Tom Hardy', country: 'England', numberOfGuests: 8, alreadyCheckedIn: false }
```

# 1.2 Rxjs feladatok

Az Rxjs könyvtár használatával valósítják meg az observable pattern-t az Angular projektekben. Ezért célszerű az alapjait ismerni mielőtt mélyebben belekezdessz egy projektben. 

- Tekintsd át a [bemutató oldalt](https://www.learnrxjs.io/)
- [Játsz egy kicsit](https://www.rxjs-fruits.com/subscribe)

# 2 Angular bevezető projekt 
- [Projekthez tartozó melléklet](https://sharepoint.lechnerkozpont.hu/projects/astrum/Kosztly/Forms/AllItems.aspx?id=%2Fprojects%2Fastrum%2FKosztly%2FFE%20Onboarding)
- Készíts egy új projektet és telepítsd a szükséges függőségeket
- Csatold a projektedhez a mellékletben található json servert és indítsd el
- Add hozzá az Angular Materialt a projekthez 
- Hozz létre egy repository-t a saját git oldaladon
- Push-old fel a dev nevű branchbe és csinálj egy PR-t (Dev->Main)
- Minden feladatrészt egy PR-ban adj be ezután. (pl.: 2.1FELADAT->Main)

## 2.1.FELADAT
### Routing (Hotel, Restaurant)
- Készíts egy nav-bar-t, amelyhez két tab tartozik: 'Hotel', 'Restaurant'
- A 'Hotel' oldala a '/hotel' elérési úton legyen elérhető.
- A 'Restaurant' oldala a '/restaurant' elérési úton legyen elérhető.
- Amennyiben rossz az elérési út, egy '404 not found' oldalra navigáljon.

## 2.2. FELADAT
### Űrlapok és validátorok használata (Hotel)
1. Készíts Material segítségével egy form-ot, amivel szálláshelyeket lehet regisztrálni.
2. Formázd saját ízlésed szerint
3. Form beviteli mezők a következők legyenek:
- name
- city
- category
-- Választható opciók és értékek a select mező esetében: "Hotel", "Apartman", "GuestHouse"
4. Helyezz el egy gombot a formon belül.
 - Felirata: 'Save'
- Ha a form 'invalid' (bármelyik mezője nem kap értéket), akkor a gomb 'disabled', vagyis nem kattintható.
- A gomb alatt jelenjen meg egy tájékozató üzenet, hogy miért nem kattintható
5. Készíts a egy reaktivForm-ot a következő validátorokkal:
- name: min 5, max 30 karakter és nagybetűvel kezdődjön.
- city:  min 5, max 30 karakter. Csak betűket és szóközt tartalmazhat!
- category: kijelöltnek kell lennie (választania kell a felhasználónak)
6.  Adott egy "saveHotel" metódus. Visszatérési értékei legyenek a form értékei.
 - Ha minden beviteli mező helyesen van kitöltve, és rákattint a felhasználó a 'Save' gombra, akkor le kell futnia a metódusnak.
![image info](https://sharepoint.lechnerkozpont.hu/projects/astrum/Kosztly/FE%20Onboarding/hotel%20form.png)
 
# 2.3. FELADAT
### HTTP hívás, és renderelés (Hotel)
#### A mellékletben található, elindított server felé tudsz kéréseket indítani.
1. Készíts egy Materialos táblázatot az alábbi elemekkel:
    -  'Name', 'City', 'Category'
2. Készíts egy Service osztályt, ahol a hotelhez tartozó lekérdezéseket fogod tárolni.
- Készíts a Service osztályon belül egy "saveHotel" metódust és kösd össze a korábban elkészített hotel formmal.(/hotel)
- Készíts a Service osztályon belül egy "getHotelList" lekérdezést. (/hotel)
3. Kösd össze a megjelenítő komponenst a service osztállyal, és rendereld ki a táblázatot.
4. Formázd ízlésed szerint a táblázatot.
![image info](https://sharepoint.lechnerkozpont.hu/projects/astrum/Kosztly/FE%20Onboarding/hotel%20table.png?csf=1&e=ymwCWk)

# 2.4. FELADAT
### Szülő-Gyerek komponens interakció, adatkötések, dírektívák és service osztály (Restaurant)
#### A mellékletben található, elindított server felé tudsz kéréseket indítani.
1. Készíts egy szülő komponenst.
    - Készíts egy restaurant service osztályt, ahol majd a HTTP hívásokat is kezeled.
    - Injektáld be a restaurant service osztályt a szülő komponensbe.
2. Készíts egy gyerek komponenst, amely az ételek táblázatban való listázásáért, és a rendelés felvételéért felelős.(/restaurant)
    - A rendelés felvétele, az adott étel képére kattintással történjen meg.
3. Készíts egy gyerek komponenst, amely a már megrendelt ételeket listázza és az árukat összesíti.

![image info](https://sharepoint.lechnerkozpont.hu/projects/astrum/Kosztly/FE%20Onboarding/restaurant%20order.png?csf=1&e=twkKYh)

# 2.5 Bejelentkezés
### Tokenkezelés, AuthGuard, Interceptor
#### A mellékletben található, elindított server felé tudsz kéréseket indítani.
1. Indítsd el a Json servert az auth [middleware-el](https://github.com/jeremyben/json-server-auth/blob/master/README.MDv)
    - Regisztrálj egy felhasználót a szerverre. (pl.: Postman használatával)
    - Győzödj meg róla hogy egy post kéréssel be tudsz jelentkezni. (pl.: Postman használatával)
2. Készíts egy komponenst
    - Legyen benne egy form, ami tartalmazza a felhasználó jelszó párost (admin/admin)
    - Legyen egy bejelentkezés gomb, amivel elküldi a login végpontra a form tartalmát
3. Tarsd számon a bejelentkezett felhasználót
    - Implementálj egy AuthService-t ami nyilvántarja a bejelentkezett felhasználó adatait és a JWT-tokent
4. Azonosísd magad minden kérésnél
    - Implementálj egy interceptor, ami minden kérésbe fejlécébe beleteszi a tokent
5. Ne lehessen elnavigálni a login oldalról, amíg nincs bejelentkezve a felhasználó vagy lejárt a token
    - Implementálj egy AuthGuardService-t ami nem enged navigálni ha nincs érvényes tokened

# 2.6 Struktúra
### Mappastruktúra, Modularizálás, Lazy-loading
1. Gondolkoztál már mi az optimális és fenttarható mappastruktúra az Angularos alkalmazásokhoz? Sok jó megoldás lehet és persze függ a projekttől is. [Itt lehetséges megoldás](https://medium.com/@shijin_nath/angular-right-file-structure-and-best-practices-that-help-to-scale-2020-52ce8d967df5). Alakisd át az alkalmazásod hogy hosszútávon fenttartható maradjon.
    - Használj fenttartható mappastruktúrát az alkalmazáshoz.
    - Használj több modult az alkalmazás felépítéshez.
    - Használj lazy-loadingot a modulok betöltéséhez.
    - Ha használtál szineket a css-be szervezd ki azokat.
    - Ha talász olyan dolgot a css fájlokban, amit többször újra tudsz használni, azokat is szervezd ki.

# 2.7 Projekt beállítások 
### Enviroment fájl, angular.json, package.json
1. Egy alkalmazás általában több környezetben is fut, mint például: dev, test, prod. Ilyenkor általában változik pár dolog környezetenként amit az enviroment fájlban tudunk megadni.Tekinsd át a fentebb felsorolt fájlokat. Milyen konfigurációk lehetnek bennük?
    - Mik azok a dolgok amik változhatnak környezetenként? Vedd fel őket az enviroment fájlba!

2. Készisd fel a programot több környezetre
    - Készits 3 enviroment fájlt a különböző környezetekhez.
    - Vegyél fel az angular.jsonbe configurációt az enviroment fájlok használatára
    - Készits script-et package.json-be, hogy mindegyik konfigurációhoz tartozzzon egy parancs, amivel könnyedén lehet őket használni


# 2.8 Angular ChangeDetection

1. Gondolkoztál már azon hogy mikor rendereli újra az oldalt a keretrendszer?
    - [Olvass utána kicsit](https://medium.com/ngconf/simplified-angular-change-detection-e74809ff804d)
2. Használ OnPush cd-t az alkalmazásodban!
