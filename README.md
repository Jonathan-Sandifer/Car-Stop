# CarCar

Team:

* Jonathan Sandifer - Service Microservice 
* Shane Siebler - Sales Microservice 

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

For the sales microservice the assignment calls for an Add a sales person form, an Add a potential customer form, to Create a sale record, to List all Sales, and to List a sales person's sales history. I started with 2 simple models of a Salesperson and a Customer to be able to handle all the data needed for the first two forms of adding a sales person and adding a potential customer since all the data is local to the sales microservice. The last three items (Create a sale record, to List all Sales, and to List a sales person's sales history.) involves data from the local sales micro service, a new price property and boolean property to be able to show if a certain vehicle has been sold or not,  as well as the vin property from the inventory microservice; so to accommodate the data needed I made a Sales record model that will contain price, foreign keys to customers and sales person, then a foreign key to a VinVO model because that will be the one piece of data I need from the inventory microservice, the Vin # w/ its default boolean value set to true so signify its available to be sold. SO in total I will have 4 models a Vin ValueObject, SalesPerson, Customer, and Sales Record. With those models in place i will then create a poller to integrate the Vin# data I need from the inventory microservice.
