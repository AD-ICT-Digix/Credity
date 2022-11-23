# Credity

<img src="./logo.png" alt="logo" class="logo"/>

Credity is a simple and easy to use web application that allows you to
create and manage events and their participants. Frontend is built with
[React](https://reactjs.org/) and [Next.js](https://nextjs.org/).
Backend is built with [aws-lambda](https://aws.amazon.com/lambda/) and [serverless](https://serverless.com/).
where python is used as the main programming language. The database is [dynamodb](https://aws.amazon.com/dynamodb/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Python3](https://www.python.org/)
- [AWS CLI](https://aws.amazon.com/cli/)
- [Serverless](https://serverless.com/)
- [AWS Account](https://aws.amazon.com/)
- [AWS IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)

### Entities

| Name | Description |
|---|---|
| Expo | An expo-event |
| Inbox | A submittable form template |
| Submission | A form submission |

### GSI

We'll be using a GSI to index on other columns, in contrast to SQL DDB does not support joins.

### Api
<<<<<<< HEAD

[API-SPEC](https://nahnova.github.io/Credity/)

### Deployment

The application is deployed on [AWS](https://aws.amazon.com/).

### Development

=======
[API-SPEC](https://nahnova.github.io/Credity/)

### Deployment
The application is deployed on [AWS](https://aws.amazon.com/).

### Development
>>>>>>> e7c3fc473ca884f17ecd938eba7fc7d127d01bbd
To run the application locally, you need to have [Node.js](https://nodejs.org/en/) installed.

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the application with `npm run dev`

<<<<<<< HEAD
### Testing

To run the tests locally, you need to have [Node.js](https://nodejs.org/en/) installed.

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the tests with `npm run test`

=======
>>>>>>> e7c3fc473ca884f17ecd938eba7fc7d127d01bbd
