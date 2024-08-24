
# **Writesphere Blog Application**

## **Overview**

Writesphere is a full-stack blog application that allows users to create, read, update, and delete blog posts. The frontend is built with React.js and deployed on Netlify, while the backend is built with Node.js and Express, deployed on Render. This application demonstrates a complete implementation of a blog with a RESTful API and a responsive user interface.

## **Live Demo**

- **Frontend (User Interface):** [Writesphere Blog Frontend](https://your-frontend-site.netlify.app)
- **Backend (API):** [Writesphere Backend API](https://your-backend-service.onrender.com)

## **Features**

- **View Posts:** Users can view a list of all blog posts with their titles and excerpts.
- **View Post Details:** Clicking on a post title navigates to a detailed view of the post.
- **Create New Posts:** Users can create new blog posts using a simple form.
- **Edit Posts:** Users can edit existing posts.
- **Delete Posts:** Users can delete posts they no longer want to keep.

## **Frontend Usage**

### **Home Page**

- **URL:** [https://your-frontend-site.netlify.app](https://your-frontend-site.netlify.app)
- **Description:** Displays a list of all blog posts. Click on a post title to view more details.

### **Create a New Blog Post**

- **URL:** [https://your-frontend-site.netlify.app/new](https://your-frontend-site.netlify.app/new)
- **Description:** Click on the "New Post" link in the header navigation to open a form for creating a new blog post.

### **Edit or Delete a Blog Post**

- **How to Access:** On the post details page, use the "Edit" button to modify a post or the "Delete" button to remove it.

## **Backend API Documentation**

The Writesphere API provides endpoints to manage blog posts. These endpoints are typically used by the frontend but can be accessed directly for testing or integration.

### **Endpoints:**

- **GET /posts**

  - **Description:** Fetches a list of all blog posts.
  - **Example:**
    ```bash
    curl https://your-backend-service.onrender.com/posts
    ```
- **GET /posts/:id**

  - **Description:** Fetches a specific blog post by ID.
  - **Example:**
    ```bash
    curl https://your-backend-service.onrender.com/posts/1
    ```
- **POST /posts**

  - **Description:** Creates a new blog post.
  - **Example:**
    ```bash
    curl -X POST https://your-backend-service.onrender.com/posts -H "Content-Type: application/json" -d '{"title": "New Post", "content": "This is the content of the new post."}'
    ```
- **PUT /posts/:id**

  - **Description:** Updates an existing blog post by ID.
  - **Example:**
    ```bash
    curl -X PUT https://your-backend-service.onrender.com/posts/1 -H "Content-Type: application/json" -d '{"title": "Updated Title", "content": "Updated content."}'
    ```
- **DELETE /posts/:id**

  - **Description:** Deletes a specific blog post by ID.
  - **Example:**
    ```bash
    curl -X DELETE https://your-backend-service.onrender.com/posts/1
    ```

## **Environment Variables**

For the frontend to correctly connect to the backend, ensure the following environment variable is set in Netlify:

- **REACT_APP_API_BASE_URL**: This should be set to your Render backend URL (`https://your-backend-service.onrender.com`).

## **Deployment**

- **Frontend (Netlify):** Automatically deployed from the `blog-frontend` directory whenever changes are pushed to the main branch.
- **Backend (Render):** Automatically deployed from the `backend` directory whenever changes are pushed to the main branch.

## **Common Issues and Troubleshooting**

- **CORS Errors:** Ensure your backend allows requests from your Netlify domain.
- **API URL Issues:** Double-check the environment variable `REACT_APP_API_BASE_URL` on Netlify.
- **Network Errors:** Use browser developer tools to inspect network requests and identify errors.

## **Support**

For any issues or questions, please contact [support@writesphere.com](mailto:support@writesphere.com).
