
# Resource Assigment Functionality for In-session Events
**What this code sample does**

During an online event, a host can post multiple resources to help attendees better understand the lesson. Each resource consists of a name, URL(optional), and media type. Attendees, regardless of when they enter the event, should be able to see all posted resources. A deleted resource should be removed for all attending that event. Attendees do not have the permission to either post or remove a resource, but currently, they have the same permission as the host for the sake of simplicity.

**How it works**


## Setting Up 
You will have to set up **Hasura and React**.
1. Set up Hasura database migrations: https://hasura.io/docs/1.0/graphql/manual/migrations/config-v1/manage-migrations.html#manage-migrations-v1 (use notes for this section as some of the steps are not needed)
   * Note for step 2, we already have a hasura folder in the repo, so just run `cd hasura`
   * Skip step 3 because we provide you with a migrations folder and files 
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
There are 3 components to our stack: front-end, GraphQL and business logic.
* Front-end is run on **React**
* GraphQL is run on **Hasura**.


GraphQL Endpoint: https://white-jupiter.hasura.app/v1/graphql
