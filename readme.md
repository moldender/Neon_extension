# Neon bővítmény

A Neon bővítmény dokummentációját innentől megpróbálom verzióról verzióra leírni.

## Előző verziók összefoglalásban:

### V1.0

Ez a verzó a legkönnyebb, a popup.js requestelt az api-ról szóval a weboldal kontentjébe nem lehetett semmit látni, nem volt okos :p. Azért természetesen ez is nehéz volt hisz ez volt az első alkalmam sima javascriptel, eddig csak pythonnal, html, css és php-val dolgoztam.

### V2.0
Ebbe fektettem azért több időt, legalább 300 óra. Mivel a content.js requestelt ezért ezt már Cross-Origin-Request nek vette. Olyan 100 órát spórolhattam volna hogyha előbb észreveszem hogy a ~12-es sorba küldtem egy preflight headert :(. Itt már látszódott a weboldal contentjébe hogy rossz-e a weboldal. De a stílusa nem mindenhol ugyanaz, még azt meg kell csinálnom.

## Mostmár dokumentált verziók:

### V2.1

Bekerült a jelentés gomb, adatbázisba menti az adatokat és egyenlőre csak azt a hármat amit megadtál, de a jövőben fog IP-t és User Agent adatokat gyűjteni minden jelentésnél (mondjuk így kéne egy adatvédelmi tájékoztató gomb.) A weboldal jelentése gomb nem a bővítmény kódjába van beleírva hanem új felugró ablakba egy [linket](https://neoncommunity.ml/extension/requestpage.html) nyit meg, ha nem az adatbázis miatt adatvédelmi gondokat vethetne fel. Helyette átirányítja őket egy weboldalra ami 392x362 -es felbontásra van optimalizálva, az ablakot is ekkorában nyitja meg. Oh és hát megtanultam a markdown-t ^^

### V2.15

Létrejött egy beállítások gomb. Ez átirányít megint csak egy neonos [linkre](https://neoncommunity.ml/extension/index.php), az adatbázis mostmár tárolja a felhasználókat hisz a weboldalak jelentése fiók alapon működik. Minden egyes jelentéshez már lementi a jelentő ip cimét és a user-agentet. A jelszavak még nem hash formátumban vannak tárolva de még csak én vagyok regisztrálva szóval ez nem probléma. A beállítások része (3 oldal) csak egy kezdő UI-t kapott és még nincsenek nagyon beállítások, mivel a html nem volt opció a MySQL miatt ezért PHP-ba csináltam meg. Bugfix pedig az volt hogyha egy file-t nyitottunk meg akkor a file megnyitását (file://) úgy érzékelte hogy benne volt a listába a 0-ik pozícióba. Még vannak hibái ezért nem egy V2.2-t commitoltam de az alap koncepció miatt kellett. Az egyik hibája az hogyha úgy akarjuk reportolni hogy nem vagyunk bejelentkezve / regisztrálva akkor ezzel végezve ugye bedob a report ablakba de a link az nincs ott (a linkjében található egy query "linkie" néven, amit ide beírunk aztán frissítjük az oldalt akkor a query-be írt szót teszi be a weboldal címéhez).

### V2.2

Hát ez is elérkezett. Kedden kaptuk a levelet hogy a mi ötletünk nem jutott tovább. (persze a növény ültetős ötlet továbbjutott...) Szóval pár bugfixen kívül commitolok egy utolsót és így fel is adjuk ezt a bővítményt hisz semmi értelme nincs így hogy nincs meg a "reklámja" amit mondjuk a zsűriben lévő pamkutyáék adtak volna. Na mindegy, ezzel a projektel megtanultam a php-t és a javascriptet és élveztem készíteni. Körülbelül 800-1000 órát fektettem bele, de szerintem megérte.