# Not Property24 Severless API

## Getting started

### Database
1. Ensure you have created the database using the scripts in the `database/data` directory.
2. Make sure you create an environment(`.env`) file with the relevant properties needed to connect to your local database i.e
    ```
    DB_USER="your_username"
    DB_PASSWORD="your_password"
    DB_NAME="NotProperty24_DB"
    DB_SERVER='localhost'
    DB_PORT=1433
    ```
### Serverless API
1. Install the required packages:

    `npm i`
2. Start the offline Serverless API:

    `serverless offline`



## Endpoints
Replace {domain} with the relevant domain where the server is hosted. if working local it will be `http://localhost:4000`.

1. Listing Type
    * {domain}/dev/api/listingType  
2. Property type
    * {domain}/dev/api/propertyType 