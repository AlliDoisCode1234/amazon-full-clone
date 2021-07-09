# My Awesome Project

## Fully Functional and Responsive E-Commerce Amazon Clone

**Link to project:** https://full-clone-cd754.web.app/

![alt tag](https://i.imgur.com/vf7mGq4.png)

## How It's Made:

**Tech used:** ReactJS, Express, Firebase, NodeJS, Cloud Functions, Axios, and Stripe 

Creating an Amazon look-a-like, I focused on Amazon's customer obsession to bring a front and backend together with the possibility to scale and incorporate system design patterns. Using the BEM naming convention, I created efficient arrow function components and hooks for state management. You can sign up, sign in, purchase, and review past orders.

## System Design Choices For Scalability:

**Functional Requirements**

- search for desired products
- add products to shopping cart
- products can be saved on favorite list
- checkout 
- view past orders

**Non-functional Requirements**

- Low latency across most of the user interface
- High availability especially for orders and searching (five nines)
- High consistency for faster user adoption especially for payments and user info

**Database**

- Elasticsearch CLUSTER - Automatically reorganizes itself and evenly distributes data across available nodes whenever a node joins or leaves a cluster.

- CASSANDRA Cluster - peer-to-peer distributed system consisting of node clusters of which any node can accept a read or write request.

- REDIS Cluster - in-memory data structure store, used as a database, cache, and message broker

- ITEM DB MONGO Cluster - Distributed configurations of MongoDB for redundancy protection against failure "replica set" and spread fragments of data across several servers to achieve higher performance and carry bigger data sets. 

- KAFKA Cluster - Used for stream processing, website activity tracking, metrics collection and monitoring, log aggregation, real-time analytics, CEP, ingesting data into Spark, ingesting data into Hadoop, CQRS, replay messages, error recovery, and guaranteed distributed commit log for in memory computing (microservices).

- Kafka consumer - Scale topic consumption by distributing partitions among a consumer group (set of consumers sharing a common group identifier)

- Spark jobs - parallel computation consisting of multiple tasks that get spawned in response to a Spark action (save, collect etc.)

- REST service - Restful Web Service is a lightweight, maintainable, and scalable service that is built on the REST architecture to expose API from app in a secure, uniform, stateless manner to the calling client who can perform predefined operations using the Restful service.

- Load balancer - Distributed tasks over several resources to efficiency.

## Lessons Learned:

I learned that firebase is more powerful than I previously had thought it to be as well as really useful. I also learned that no matter if things were able to work before, something will always break and my patience is never-ending.

## Examples:

Take a look at these couple examples that I have in my own portfolio:

**Twitch Clone:** https://github.com/AlliDoisCode1234/twitch-clone

**Tesla Clone:** https://github.com/AlliDoisCode1234/tesla-clone

**Solar Flower App:** https://www.smartflower.com
