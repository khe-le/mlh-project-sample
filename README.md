
# Resource Assigment Functionality for Events

This is a code sample from my group project.
The project's landing page: https://dawn.so

**What this code sample does**

During an online event, a host can post multiple resources to help attendees better understand the lesson. This code sample demonstrates the functionality to post and remove resources during an in-session event. Each resource consists of a name, URL, and media type. Attendees, regardless of when they enter the event, should be able to see all posted resources. A deleted resource should be removed for all attending that event. Attendees do not have the permission to either post or remove a resource. In this sample, for the sake of simplicity, host and attendee views are the same and they both have the permission to either post or remove resources.

**How it works**

Using Hasura Cloud, I deployed a Hasura GraphQL engine with access to a Postgres database. The demo webpage subscribes to this database through a GraphQL endpoint to get real-time resource data with GraphQL Subscription query. Whenever a resource is added or removed on the frontend, the page generates GraphQL Mutation queries to update the database. No backend server is needed. On the Hasura console at http://localhost:9695/console/data/schema/public, I also set up a database schema with tables related to event information, but this sample only concerns with the table Resources_Data.


## Setting Up 
All relative to project root directory
You will have to set up **Hasura and React** to run this code sample.
1. Set up Hasura database migrations: https://hasura.io/docs/1.0/graphql/manual/migrations/config-v1/manage-migrations.html#manage-migrations-v1 (use notes for this section as some of the steps are not needed)
   * Skip step 0, the environment variable is already set to false
   * Note for step 2, I already have a hasura folder in the repo, so just run `cd hasura`
   * Skip step 3 because I already provided you with a migrations folder and files 
   * You can see what migrations are present in the folder but not in the database with `hasura migrate status` 
   * Step 4: run `hasura console`. From this point on you need to run hasura console to look at the database, and make changes so that the migration files will be created
   * Step 5 and beyond are not necessary at this time
2. Set up React: `npm install`
## Starting up Your Environment
All relative to project root directory
* Start Hasura in another terminal: `cd hasura && hasura console`
  * Should be on port 9695 (Only develop in this Hasura console)
* Start React in another terminal: `npm start`
  * Should be on port 3000 
## Tech Stack
There are 3 components to the stack of my real app: Front-end, GraphQL and business logic, but for now, Front-end and Hasura are enough for this code sample.
* Front-end is run on **React** and written in Typescript in the actual app.
* GraphQL is run on **Hasura**.
