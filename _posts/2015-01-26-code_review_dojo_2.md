---
layout: post
title: Code Review Dojo Seance 2
author: rgoyard
categories: [Coding Dojo]
tags: [TDD, Junit, easyMock, PowerMock, Mockito]
shortinfo: Premiére séance du code review Dojo
---


## Personnes présentes : 

 * Youssef El Jaoujat
 * Youssef Ait bya
 * Bouchra Taj
 * Abdellah Aherbil

## Déroulement de la séance ...

Abdellah avait son ordinateur branché sur l'écran commun.
Il présente la classe a revoir  : **`TrCapturePaiementAction`**
- Pourquoi cette classe ?
   + Classe à lui (voulait pas heurter qqn)
   +  il n'aime pas cette classe !

### Tour de table pour définir des points d'amélioration : 

 * Bcp de if / else : Complexité cyclomatique 
 * Messages en dur (messages d'erreur)
 * Manque de commentaire (Abdellah est contre les commentaires)
 * Méthode top longue
 * On peut faire ça en une ligne, mais c'est déconseillé pourkoi ?
 * Manque de log sur une transaction nulle 

### Refacto effectué : 

- Extraction d'une partie de l'algortitheme (execution de la capture ogone) dans une méthode séparée.

> Pendant le refacto, un *"oubli"*, donc une *pré-anomalie* (tant que non déclarée, ... ce n'et pas une anomalie), a été detecté !

- Renommage d'une methode (`isValidTransaction`) pas nécessaire, mais cela augmente la lisibilité de l'algorithme (`isPaymentTransactionValid`), car cela apporte une information fonctionnelle à l'algo.

#### Conclusion 

- A la fin du refacto, l'algorithme été plus clair et donc la nécessité des commentaires moins évidentes
- Le découpage de la méthode en plusieurs (2) petites méthodes à corrigé le pb de *"méthode trop longue*.
- Certains points relevés n'ont pas été traité (timeboxing de la séance), les plus important oui
- Le code est plus propre.

## Discussions annexes

Pendant la revue, nous avons traité plusieurs point dont *Talking about the Clean Code* ... à propos des commentaires.
Rappel des principes de clean code (cf. présentation faite à Benjamin Berton)

## Conclusion

### Conseils pour orgnaisation de Dojo / Workshops 
 * En faire régulierement (de 18h à 19h).
 * Au début juste les 4 présents à ce dojo
 * Chaque séance avec un "presenter"
 * Ce concentrer sur le projet ... 
 * Commencer à mettre en place un Workshop pour l'équipe (entre midi et deux), cela ne doit pas être obligatoire, juste du volontariat.
    * sujets interessants :
        - Les Tests d'intégrations sur les process (Code de Youssef A)
        - Un example concret sur la réalisation d'un code en TDD dans hybris (code de bouchra)
        - Des sessions d'exemple de clean code (Youssef E) : catch (Exception e)
        - Refaire un refacto, comme durant cette séance, mais en ayant préparer le test : Présenter : Voila comment on doit faire, quelle est la cible (on montre l'exemple,  on accompane pour faire, on essait, on se trompe, on re essait ... on y arrive !!!)


---
_[26/01/2015]()_

![Printemps](http://www.printemps.com/medias/?context=bWFzdGVyfGltYWdlc3w0MjA4fGltYWdlL3BuZ3xpbWFnZXMvaGNkL2g4Yi84Nzk4MDUxNDY3Mjk0LnBuZ3xiYjcxMmM3MzY4MmZiZTYwNTAxNjQxNGQ3N2M1YTM2OGVlMWUxMDFhOTM2MDUyZTViZmI0Yzc2YzFkZTQyOTk5) **TEAM** @ ![SQli](http://www.sqli.com/var/sqli/storage/images/parametrages/1989-5-fre-FR/Parametrages_logo_small.png)