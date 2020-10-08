 
# IDEE AL  
 <br>

<font color='gree'> 

### Users  
 </font>


| Routes | Nom de la route | Méthodes (HTTP) | Controller | méthode |
|--|--|--|--|--|
| `/` | `homepage` | `GET|POST` | `App\Controller\MainController` | #homepage | - |
| `/signin` | `create_account` | `GET|POST` | `App\Controller\UserController` | #signin | - |
| `/login` | `login` | `GET|POST` | `App\Controller\UserController` | #login | - |
| `/logout` | `logout` | `GET|POST` | `App\Controller\UserController` | #logout | - |
| `/user/{id}/delete` | `delete_account` | `DELETE` | `App\Controller\UserController` | #delete| - |
| `/user/{id}/ban` | `ban_account` | `PATCH` | `App\Controller\UserController` | #ban| - |
| `/users` | `users_list` | `GET` | `App\Controller\UserController` | #list | #list |
| `/user/add` | `user_add` | `POST` | `App\Controller\UserController` | #add |  |
| `/user/{id}` | `user_read` | `GET` | `App\Controller\UserController` | #read |  |
| `/dashboard/{id}` | `user_dashboard` | `GET` | `App\Controller\UserController` | #read |  |
| `/user/{id}\update` | `user_update` | `GET|POST ou PATCH` | `App\Controller\UserController` | #update |
| `/user/{id}\delete` | `user_delete` | `GET|POST ou PATCH` | `App\Controller\UserController` | #delete |
| `/users/{id}/friends` | `friends_list` | `GET` | `App\Controller\FriendController` | #friendList |
|     |
| <font color='lightblue'> API |
|     |
| `/api/v1/user/{id}/request/{id}/friends` | `friends_request` | `POST` | `App\Controller\FriendController` | #friendRequest |
| `/api/v1/user/{id}/contest/{id}/friends` | `friends_contest` | `POST` | `App\Controller\FriendController` | #friendContest |
| `/api/v1/user/{id}/favorites` | `user_fav_list` | `GET` | `App\Controller\Api\V1\UserController` | #favList |
| `/api/v1/user/{id}/favorite/{id}/user` | `user_add_fav_user` | `GET` | `App\Controller\Api\V1\UserController` | #addFavUser |
| `/api/v1/user/{id}/favorite/{id}/user` | `user_delete_fav_user` | `DELETE` | `App\Controller\Api\V1\UserController` | #deleteFavUser |
| `/api/v1/user/{id}/favorite/{id}/project` | `user_add_fav_project` | `GET` | `App\Controller\Api\V1\UserController` | #addFavUser |
| `/api/v1/user/{id}/favorite/{id}/project` | `user_delete_fav_project` | `DELETE` | `App\Controller\Api\V1\UserController` | #deleteFavProject |

 <br>

  <font color='gree'>

  ## Project

  </font>

| Routes | Nom de la route | Méthodes (HTTP) | Controller | méthode |
|--|--|--|--|--|
| `/projects` | `projects_list` | `GET` | `App\Controller\ProjectController` | #list |
| `/project/add` | `project_add` | `POST` | `App\Controller\ProjectController` | #add | 
| `/project/{id}` | `project_read` | `GET` | `App\Controller\ProjectController` | #read |
| `/project/{id}\update` | `project_update` | `GET|POST ou PATCH` | `App\Controller\ProjectController` | #update | - |
| `/project/{id}/user/{id}/request` | `project_user_request` | `POST` | `App\Controller\ProjectController` | #read |  |
| `/project/{id}/user/{id}/request` | `project_user_req` | `GET` | `App\Controller\ProjectController` | #read |  |

<br>

 <font color='gree'> 

### MODERATION

</font>

| Routes | Nom de la route | Méthodes (HTTP) | Controller | méthode |
|--|--|--|--|--|
| `/admin` | `admin_login` | `GET` | `App\Controller\Api\V1\AdminController` | #home |
| `/admin/projects` | `admin_moderation_projects` | `GET` | `App\Controller\Api\V1\AdminController` | #projectslist |
| `/admin/project/{id}` | `admin_moderation_project` | `GET` | `App\Controller\Api\V1\AdminController` | #projectdetail |
| `/admin/users` | `admin_moderation_users` | `GET` | `App\Controller\Api\V1\AdminController` | #userslist |
| `/admin/user/{id}` | `admin_moderation_user` | `GET` | `App\Controller\Api\V1\AdminController` | #userdetail |