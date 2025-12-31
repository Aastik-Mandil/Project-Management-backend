
# Project Management

This project is about managing different projects and their related tasks.


## Tech Stack

**Server:** Node.js, Express.js, 

**Database:** MongoDB

## API Reference

#### Get all projects

```http
  GET /projects
```

#### Get project

```http
  GET /projects/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of project to fetch |

#### Create new project

```http
  POST /projects
  Body: {name: String, description: String}
```


#### Get tasks

```http
  GET /tasks/${projectId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `projectId`      | `string` | **Required** projectId of tasks to fetch |


#### Create new task

```http
  POST /projects
  Body: {title: String, description: String, projectId: String, status: String}
```


#### Update task

```http
  PATCH /tasks/${id}
  Body: {title: String, description: String, projectId: String, status: String}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required** taskId to update |
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

If the .env file does not exist then create it at the root level of the project.

`MONGO_URL` = `KEEP_YOUR_MONODB_CONNECTION_URL`

`PORT` = 5000


## Run Locally

Clone the project

```bash
  git clone https://github.com/Aastik-Mandil/Project-Management-backend.git
```

Go to the project directory

```bash
  cd Project-Management-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Authors

- [@Aastik-Mandil](https://www.github.com/Aastik-Mandil)

