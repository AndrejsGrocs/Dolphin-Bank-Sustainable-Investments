# references-crud-assignment
In this exercise we will practice pagination and references. 

## Assignment
Let's build an order management API. 😊

### Install the following modules: 
+ mongoose 
+ express
+ dotenv
+ cors

`npm install mongoose express dotenv cors`

### 1. Set up your server
Set up the `server.js` and configure everything accordingly. You will notice some things are missing, try to find what and wire up. 
+ Set up the .env for mongodb and PORT number
+ Configure imports  
+ Get it up and running 

### 2. Thinking out our Schemas 
First we need to setup our database schemas, this application needs two schemas a `CustomerSchema` and an `OrderSchema`. For each order being made we would like to track which customer made this order. We would like to do this by reference. 


#### Task 1. Creating our Customer Schema  
Open inside folder `models` the `Customer.js` file. Modify this file in such way that the customerschema has a `firstname`, `lastname` and `email`. 
You can add in more fields if you like. 

#### Task 2. Creating our Order Schema  
Open inside folder `models` the `Order.js` file. Modify this file in such way that the orderSchema has a `order_description`, `productname`, `price`, `vat` and `total_incl_vat` and a `customer` field. Make sure the customer field is a reference to our Customer Schema. 

Example of a reference: 

````javascript
   user:{type: Schema.Types.ObjectId, ref:'User'}
````



### 3. Assignment CRUD 
Let's build our API for order management. The following functionality is required: 

#### Task 1. Inserting customers 
Create a new `post` route which allows you to add a new customer into the database. 


#### Task 2. Updating customers by id 
Create a new `patch` route which allows you to update the customer by ID.  

#### Task 3. List customers
Create a new `get` route which allows you to get a list from all the customers. 
Use the `limit` and `skip` methods to paginate the results. 

#### Task 4 . Inserting orders
Create a new `post` route which allows you to create a new order into the database. 
Make sure there's a reference to the User who ordered the order.

#### Task 5. List orders
Create a new `get` route which allows you to fetch a list of all the orders in the system. 
Use the `limit` and `skip` methods to paginate the results. 

#### Task 6. List orders by Customer
Create a new `get` route which allows you to fetch a list of all the orders by customer. Make sure you include the customer using the `populate` function.

Example of query using `skip`, `limit` and `populate`.
````javascript
    const results = await mySchema.find({})
    .populate('other')
    .skip(3)
    .limit(3)
````

### 3. OPTIONAL Bonus - adding inventory records 
+ Inserting Inventory records
+ Check how many products are left in the inventory by product ID .
+ Update the inventory with inStock field -1 when order is sold. 

Each bonus functionality will be one route with logic. You are free to organize it the way you like. 
Use the previous example projects as a base to build the above functionality. 

**Note: multiple solutions are possible, you can choose which solution you prefer.**








