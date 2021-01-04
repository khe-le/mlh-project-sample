
# Resource Assigment Functionality for Events

This is a code sample from my group project.
The project's landing page: https://dawn.so

**What this code sample does**

During an online event, a host can post multiple resources to help attendees better understand the lesson. This code sample demonstrates the functionality to post, update and display resources during in-session events. Each resource consists of a name, URL, and media type. Attendees, regardless of when they enter the event, should be able to see all posted resources. A deleted resource should be removed for all attending that event. Attendees do not have the permission to either post or remove a resource, but currently, they have the same permission as the host for the sake of simplicity.

**How it works**

Using Hasura Cloud, I deployed a Hasura GraphQL engine with access to a Postgres database. The demo webpage subscribes to this database through a GraphQL endpoint to get real-time resource data with GraphQL subscription query. Whenever a resource is added or removed on the frontend, the page uses the GraphQL mutation queries to update the Hasura database. No backend server is needed. On the Hasura console, I also set up a future database schema for the functionality, but I only use part of it for this code sample.


## Setting Up 
You will have to set up **Hasura and React** to run this code sample.
1. Set up Hasura database migrations: https://hasura.io/docs/1.0/graphql/manual/migrations/config-v1/manage-migrations.html#manage-migrations-v1 (use notes for this section as some of the steps are not needed)
   * Note for step 2, I already have a hasura folder in the repo, so just run `cd hasura`
   * Skip step 3 because I already provided you with a migrations folder and files 
   * You can see what migrations are present in the folder but not in the database with `hasura migrate status` 
   * Step 4: run `hasura console`. From this point on you need to run hasura console to look at the database, and make changes so that the migration files will be created (see DBA before commiting any changes)
   * Step 5 and beyond are not necessary at this time
2. Set up React: `cd .. && npm install`
## Starting up Your Environment
All relative to project root directory
* Start Hasura in another terminal: `cd hasura && hasura console`
  * Should be on port 9695
  * Again, **only develop in this Hasura console, not port 8080**
* Start React in another terminal: `npm start`
  * Should be on port 3000 
## Tech Stack
There are 3 components to the stack of my real app: Front-end, GraphQL and business logic, but for now, Front-end and Hasura are enough for this code sample.
* Front-end is run on **React**
* GraphQL is run on **Hasura**.
