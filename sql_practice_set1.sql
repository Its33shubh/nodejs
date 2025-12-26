-- SQL QUERY PRACTISE SET 1
1) Insert a new customer with customerNumber 111, customerName 'ABCCorp', contactLastName 'Smith', contactFirstName 'John', phone '123-456-7890', and addressLine1 '123 Main St'.

-> insert into customers(customerNumber,customerName,contactLastName,contactFirstName,phone,addressLine1) value(111,'ABCCorp','Smith','John','123-456-7890','123 Main St');

2) Insert a new employee with employeeNumber 601, lastName 'Doe',firstName 'Jane', extension '1234', email 'jane.doe@email.com', OfficeCode'1', reportsTo 1001, and jobTitle 'Manager'.
 
-> insert into employees(employeeNumber,lastName,firstName,extension,email,OfficeCode,reportsTo,jobTitle) value(601,'Doe','jane','1234','jane.doe@email.com','1',1001,'Manager');

3) Insert a new office with OfficeCode '4', city 'Houston', phone '555-123-4567',and addressLine1 '789 Elm St'.

 -> insert into Offices(officeCode,city,phone,addressLine1) value(8,'Houston','555-123-4567','789 Elm St');

4) Insert a new orderdetail with orderNumber 201, productCode 'P101',quantityOrdered 10, priceEach 29.99, and orderLineNumber 1.

-> insert into orderdetails(orderNumber,productCode,quantityOrdered,priceEach,orderLineNumber) value(201,'P101',10,29.99,1);
5) Insert a new order with orderNumber 301, orderDate '2023-11-10',requiredDate '2023-11-20', shippedDate '2023-11-15', status 'Shipped',comments 'New order for ABC Corp', and customerNumber 102.

-> insert into orders(orderNumber,orderDate,requiredDate,shippedDate,status,comments,customerNumber) value(301,'2023-11-10','2023-11-20','2023-11-15','Shipped','New order for ABC Corp',102);

6) Insert a new payment with customerNumber 104, checkNumber'CH456789', paymentDate '2023-11-12', and amount 1500.00.
-> insert into payments(customerNumber,checkNumber,paymentDate,amount) value(104,'CH456789','2023-11-12',1500.00);

7) Insert a new productline with productLine 'Electronics', textDescription' Products related to electronics', and htmlDescription 'Electronic products description'.

-> insert into productLine(productLine,textDescription,htmlDescription) value('Electronics',' Products related to electronics','Electronic products description');

8) Insert a new product with productCode 'P104', productName 'DigitalCamera', productLine 'Electronics', productScale '1:24', productVendor 'TechCo', productDescription 'High-quality digital camera', quantityInStock 50, buyPrice 299.99, and MSRP 399.99. 

->insert into products(productCode,productName,productLine,productScale,productVendor,productDescription,quantityInStock,buyPrice,MSRP) value('P104','DigitalCamera','Electronics','1:24','TechCo','High-quality digital camera',50,299.99,399.99);

-- Certainly, here are three UPDATE exercises for each of the tables in your database:
9) Update the customer with customerNumber 101 and change their contactFirstName to 'Jennifer'.
-> update table customers
10) Update the customer with customerNumber 102 and change their customerName to 'XYZ Corporation'.
11) Update the customer with customerNumber 103 and change their phone to '555-987-6543'.
12) Update the employee with employeeNumber 1002 and change their jobTitle to 'Sales Associate'.
13) Update the employee with employeeNumber 1003 and change their extension to '4321'.
14) Update the employee with employeeNumber 1004 and change their OfficeCode to '2'.
15) Update the office with officeCode '2' and change its phone to '555-987- 6543'.
16) Update the office with OfficeCode '3' and change its city to 'Chicago'.
17) Update the office with OfficeCode '4' and change its postalCode to '60601'.
18) Update the order detail with orderNumber 202 and productCode 'P102' and change the quantityOrdered to 15.
19) Update the order detail with orderNumber 203 and productCode 'P103' and change the priceEach to 39.99.
20) Update the order detail with orderNumber 204 and productCode 'P104' and change the orderLineNumber to 2.
21) Update the order with orderNumber 302 and change its status to 'Delivered'.
22) Update the order with orderNumber 303 and change the requiredDate to '2023-11-25'.
23) Update the order with orderNumber 304 and change the comments to 'Urgent shipment required'.
24) Update the payment with customerNumber 105 and checkNumber 'CH987654' and change the amount to 2000.00.
25) Update the payment with customerNumber 106 and checkNumber 'CH123456' and change the paymentDate to '2023-11-14'.
26) Update the payment with customerNumber 107 and checkNumber 'CH789012' and change the customerNumber to 108.
27) Update the product line with productLine 'Toys' and change its textDescription to 'Products related to toys'.
28) Update the product line with productLine 'Oce Supplies' and change its htmlDescription to 'Oce supplies description'.
29) Update the product line with productLine 'Electronics' and change the image (if applicable) to a new image.
30) Update the product with productCode 'P105' and change its productDescription to 'Compact digital camera'.
31) Update the product with productCode 'P106' and change its buyPrice to 199.99.
32) Update the product with productCode 'P107' and change its quantityInStock, increate it by 75.
33) Delete a customer with the customerNumber of 103.
34) Delete an employee with the employeeNumber of 1055.
35) Delete an office with the OfficeCode '4'.
36) Delete an order detail where the orderNumber is 10200 and the productCode is 'S18_3232'.
37) Delete an order between orderNumber of 10200 and 10250.
38) Delete a payment record where the customerNumber is 101 and the checkNumber is 'AB12345'.
39) Delete a product line with the productLine 'Vintage Cars'.
40) Delete a product with the productCode 'S18_3232'.
41) Select all customers from the USA (country) who have a credit Limit greater than 50,000. Limit the result to 10 rows. 
42) Select the customer with the highest creditLimit
43) Select all customers from France (country) in ascending order of their customerName. exercise: Write a SELECT query to retrieve all customers from France and order the results by customerName in ascending order.
41) Select employees who report to another employee (reportsTo is not NULL) and order the results by their jobTitle. Limit the result to 5 rows.
42) Select all employees in the Boston office (OfficeCode) and order the results by their lastName in descending order.
43) Select employees whose jobTitle is 'Sales Rep' and have an email address containing 'company.com'.
41) Select office located in the USA (country) and order the results by the city in ascending order.
42) Select the first 3 office in the list, ordered by their Office Code.
43) Select the office with the highest number of employees and display its city and phone number.
44) Fetch customer name, his city, state and country and his all order detail of those customer whose customer number between 100 to 200
45) Fetch customer name and his payment detail of those customer whose name has wheel at anywhere. 
46) Fetch cancelled order detail along with customer detail, display such  record customername wise in asecnding order 
47) Fetch only 10 record from office table, display only those record of office which are in any city of usa
48) Display customername & number of those customer who have made highest payment 
49) Display customer average payment & his name & number from usa country. 	
50) Display product which has been never ordered in any order given by customers 
51) Display detail of that customer who has never given order 
52) Display year wise total payment received by each customer.
53) Display country of customers for each and every country. 
54) Display that office detail in which no empoyees are working

