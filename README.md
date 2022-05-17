SSss# not_property_24_BE

1. Set up DB: Run setup_db.sql in your MYSQL DBMS and update dbconfig.js to use your local db

2. run npm i

3. run : npm run dev

You can currently hit the following endpoints:
  http://localhost:5001/api/propertytype
  http://localhost:5001/api/listingtype
  
You can add new endpoints by:
1. Adding a route in routes/api
2. Use the route in index.js
3. Create a query that the route will need in query.js
