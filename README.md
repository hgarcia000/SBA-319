# SBA-319

### Description
This back-end server application communicates with a MongoDB database that stores user data, songs, and playlists. You can perform various CRUD operations across each user, song, and playlist collection. This application also supports a user login feature, which is required for a user to create a playlist. The modules to install on this application can be found in the project's <code>package.json</code> file under the <code>dependencies</code> property.

### API Routes

###### User Routes

<code>GET /api/users/</code><br>
<code>GET /api/users/:id</code><br>
<code>POST /api/users/signup</code><br>
<code>POST /api/users/login</code><br>
<code>POST /api/users/logout</code><br>
<code>DELETE /api/users/delete/:id</code><br>

###### Song Routes

<code>GET /api/songs/</code><br>
<code>GET /api/songs/:id</code><br>
<code>POST /api/songs/add</code><br>
<code>PUT /api/songs/edit/:id</code><br>
<code>PATCH /api/songs/updatescore/:id</code><br>
<code>DELETE /api/songs/delete/:id</code><br>

###### Playlist Routes

<code>GET /api/playlists/</code><br>
<code>GET /api/playlists/:id</code><br>
<code>POST /api/playlists/add</code><br>
<code>PUT /api/playlists/edit/:id</code><br>
<code>PATCH /api/playlists/insertsong/:id</code><br>
<code>PATCH /api/playlists/removesong/:id</code><br>
<code>DELETE /api/playlists/delete/:id</code><br>