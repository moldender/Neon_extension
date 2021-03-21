# Neon bővítmény

A Neon bővítmény dokummentációját innentől megpróbálom verzióról verzióra leírni.

## Előző verziók összefoglalásban:

### V1.0

Ez a verzó a legkönnyebb, a popup.js requestelt az api-ról szóval a weboldal kontentjébe nem lehetett semmit látni, nem volt okos :p. Azért természetesen ez is nehéz volt hisz ez volt az első alkalmam sima javascriptel, eddig csak pythonnal, html, css és php-val dolgoztam.

### V2.0
Ebbe fektettem azért több időt, legalább 300 óra. Mivel a content.js requestelt ezért ezt már Cross-Origin-Request nek vette. Olyan 100 órát spórolhattam volna hogyha előbb észreveszem hogy a ~12-es sorba küldtem egy preflight headert :(. Itt már látszódott a weboldal contentjébe hogy rossz-e a weboldal. De a stílusa nem mindenhol ugyanaz, még azt meg kell csinálnom.

## Mostmár dokumentált verziók:

### V2.1

Bekerült a jelentés gomb, adatbázisba menti az adatokat és egyenlőre csak azt a hármat amit megadtál, de a jövőben fog IP-t és User Agent adatokat gyűjteni minden jelentésnél (mondjuk így kéne egy adatvédelmi tájékoztató gomb.) A weboldal jelentése gomb nem a bővítmény kódjába van beleírva hanem új felugró ablakot nyit meg, ha nem az adatbázis miatt adatvédelmi gondokat vethetne fel. Helyette átirányítja őket egy weboldalra ami 392x362 -es felbontásra van optimalizálva, az ablakot is ekkorában nyitja meg. Oh és hát megtanultam a markdown-t ^^