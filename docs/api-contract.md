# Backend API Contract

Base URL: `https://api.example.com` (Environment Variable: `VITE_API_BASE_URL`)

## Authentication

### Login

- **Endpoint**: `POST /api/auth/login`
- **Payload**:
  ```json
  {
    "usernameOrEmail": "admin",
    "password": "password"
  }
  ```
- **Response** (200 OK):
  ```json
  {
    "accessToken": "jwt_token_here",
    "user": {
      "id": "user_id",
      "name": "Admin Name",
      "role": "admin",
      "email": "admin@example.com"
    }
  }
  ```
- **Note**: Should also set an `HttpOnly` cookie for refresh token.

### Logout

- **Endpoint**: `POST /api/auth/logout`
- **Response** (204 No Content)

### Refresh Token

- **Endpoint**: `POST /api/auth/refresh`
- **Response** (200 OK):
  ```json
  {
    "accessToken": "new_jwt_token_here"
  }
  ```

### Me (Current User)

- **Endpoint**: `GET /api/auth/me`
- **Headers**: `Authorization: Bearer <token>`
- **Response**: User object.

---

## Posts (Protected)

headers: `Authorization: Bearer <token>`

### List Posts

- **Endpoint**: `GET /api/posts`
- **Query Params**:
  - `page`: number (default 1)
  - `limit`: number (default 10)
  - `type`: string (optional)
  - `status`: string (optional)
  - `search`: string (optional)
- **Response**:
  ```json
  {
    "items": [...],
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
  ```

### Get Post

- **Endpoint**: `GET /api/posts/:id`
- **Response**: Post object.

### Create Post

- **Endpoint**: `POST /api/posts`
- **Payload**: Partial Post object.
- **Response**: Created Post object.

### Update Post

- **Endpoint**: `PUT /api/posts/:id`
- **Payload**: Partial Post object.
- **Response**: Updated Post object.

### Delete Post

- **Endpoint**: `DELETE /api/posts/:id`
- **Response**: 204 No Content.

### Publish/Unpublish

- **Endpoint**: `POST /api/posts/:id/publish`
- **Endpoint**: `POST /api/posts/:id/unpublish`
- **Response**: Updated Post object.

---

## Uploads (Protected)

### Upload Image

- **Endpoint**: `POST /api/uploads`
- **Content-Type**: `multipart/form-data`
- **Field**: `file` (binary)
- **Response**:
  ```json
  {
    "id": "file_id",
    "url": "https://cdn.example.com/image.jpg",
    "filename": "image.jpg",
    "mimetype": "image/jpeg",
    "size": 1024
  }
  ```

### Delete Upload

- **Endpoint**: `DELETE /api/uploads/:id`
- **Response**: 204 No Content.
