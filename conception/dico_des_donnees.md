<font color='red'> 

## USER
</font>

|`Champ`|`Type`|`Spécificités`|`Description`|
|-|-|-|-|
|email|VARCHAR(64)|NOT NULL|user's email|
|password|VARCHAR(10)|NOT NULL|user's password|
|pseudo|VARCHAR(64)|NOT NULL|username|
|avatar|VARCHAR(64)|NOT NULL|profil pic|
|Description|LONGTEXT|NULL|description|
|role_id|INT|NOT NULL|role|
|school|INT|NULL|role|
|rhythm_id|INT|NULL|rhythm|
|is_active|BOOL|NOT NULL|active|
|is_banned|BOOL|NOT NULL|ban|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|created time|
|updated_at|TIMESTAMP|NULL|updated time|
<br>
<font color='red'> 

---
## PROJECT 

</font>

|`Champ`|`Type`|`Spécificités`|`Description`|
|-|-|-|-|
|name|VARCHAR(64)|NOT NULL|name of the project|
|description|LONGTEXT|NOT NULL|description|
|owner(user_id)|INT|NOT NULL|project's owner|
|owner participe|BOOL|NOT NULL|does the owner participe ?|
|max_participant|INT|NOT NULL|max num of participants|
|capping|BOOL|NOT NULL|is the project full ? |
|is_moderated|BOOL|NOT NULL||
|is_accepted|BOOL|NOT NULL||
|image|VARCHAR(64)|NOT NULL||
|method_id|VARCHAR(64)|NOT NULL|wich method(SCRUM,SOLID,etc..)|
|techno_id|VARCHAR(64)|NOT NULL|wich techno(PHP, JS, DOCKER, REACT, etch)|
|communication_id|VARCHAR|NOT NULL|(Discord, Slack, etc)|
|link|VARCHAR|NULL|link to the website|
|created_at|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|created time|
|updated_at|TIMESTAMP|NULL|updated time
 
<br>
---
<font color='red'> 

## TECHNO

</font>
 
|`Champ`|`Type`|`Spécificités`|`Description`|
|-|-|-|-|
|name|VARCHAR(64)|NOT NULL|techno's name|
|logo|VARCHAR(64)|NULL|techno's icon|
 
<br>

---
<font color='red'> 

## LEVEL

</font>
 
|`Champ`|`Type`|`Spécificités`|`Description`|
|-|-|-|-|
|name|VARCHAR(64)|NOT NULL|level's name(begginer, some skills ,etc..)|
|description|VARCHAR(256)|NOT NULL|a little description to make it more fun|

<br>

---
<font color='red'> 

## RYTHM

</font>
 
|`Champ`|`Type`|`Spécificités`|`Description`|
|-|-|-|-|
|name|VARCHAR(64)|NOT NULL|rhythm's name(cool, try hard, etc..)|
|description|VARCHAR(256)|NOT NULL|a little description to make it more fun|
 
 <br>

 ---
<font color='red'> 

## ROLE

</font>
 
|`Champ`|`Type`|`Spécificités`|`Description`|
|-|-|-|-|
|name|VARCHAR(64)|NOT NULL|name of the role (USER,ADMIN,SUPER-ADMIN)|
 
 <br>

<font color='red'> 

## REALIZATION

</font>
 
|`Champ`|`Type`|`Spécificités`|`Description`|
|-|-|-|-|
|name|VARCHAR(64)|NOT NULL|name of the realization the user made|
|description|LONGTEXT|NOT NULL| descprition the realization the user made before|
|link_website|VARCHAR(64)|NULL| link to the website
|link_repo|VARCHAR(64)|NULL| link to the repo
|link_other|VARCHAR(64)|NULL| link to (YT,Twitch,etc..)
|screen1|VARCHAR(64)|NULL| screenshot | 
|screen2|VARCHAR(64)|NULL| screenshot |
 
 <br>