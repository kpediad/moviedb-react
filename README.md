# MovieDB-React

A react-redux based client app together with a rails based API server to list movies.

A movie has:

* a title
* a release year
* a synopsis and
* a score

Movies can be created, listed, edited, viewed, deleted, upvoted and downvoted.

## Usage

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To use this app in a development environment, after forking and/or cloning the repository, run `bundle install`, `rails db:migrate` and `rails db:seed` within the main project directory to setup the server side. Then `cd client` and run `npm install`.

A rake batch job has been setup to start server and client at the same time. Just run `rake start`.

## Contributing Bugfixes or Features

For submitting something back, be it a patch, some documentation, or new feature requires some level of community interactions.

Committing code is easy:

- Fork the this repository
- Create a local development branch for the bugfix or feature
- Commit and push changes to github
- Submit a pull request for your changes to be included

## License
MovieDB is licensed under the [MIT license](http://opensource.org/licenses/MIT).
