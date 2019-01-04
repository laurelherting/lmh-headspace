GraphQL is complicated. It's the topic of aggregating calls in to the idea of a single query

An API standard, not database
Query language for APIs
Declarative way of fetching & updating data

It only has one route
Using POST requests
Data is the object 
Get nested and related data:
Use the resolve func to take the parent, to find the author, based on that parent, just to get the name of that author, bc that’s all we asked for. We could get other stuff too, like the age or id (all played in graphiql)
Author: {
    Type: AuthorType,
Resolve(parent, args){
    Return _.find(authors);

GraphQL app: in iTerm do:
# env
## export MLAB_USERNAME=''
## export MLAB_PASSWORD=‘'
#npm start

### MongoDB: basically you're creating a dependency. The app doesn't need to have the values in the code - but it expects to have those variables in the shell environment. so you have to export those variables every time.

## Shortcomings of RESTful routing
### a lot of queries throughout app for specific endpoints/ spec users

PUT request
# completely reface existing record on other database, overriding step

PATCH request
# only overrides the properties that is in the request body
