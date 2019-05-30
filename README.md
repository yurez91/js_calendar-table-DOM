# Base template for Gulp

Template to start from before starting frontend projects.

## Task

You need to create function that will be generate calendar for given pair 
(year, month).
Calendar must be table with `thead` and `tbody`, where day it's `TD`.

Function `calendarTable(year, month)`

## Workflow

- Fork the repository with task
- Clone forked repository 
    ```bash
    git clone git@github.com:<user_name>>/<task_repository>.git
    ```
- Create separate branch for the solution. Name of the branch should be the same 
as name of your channel in slack. 
    ```bash
    git checkout -b fs_on_apr19_sasha
    ```
- Run `npm install` to install dependencies.
- Then `Develope`

## Development mode 

- Run `npm run start` to start `http-server` on `http://localhost:8080`
    When you run server the command line window will no longer be available for 
    writing commands until you stop server (`ctrl + c`). All other commands you 
    need to run in new command line window.
- Make sure the code is clean. Run linters (`npm run lint`)
- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified)
- Follow [HTML, CSS styleguide](https://mate-academy.github.io/style-guides/htmlcss.html)
- When you finished `Deploy on gh-pages`

## Deploy on gh-pages

- Build the project
  ```bash
  $ npm run build
  ```
- Commit and push all recent changes
  ```bash
  $ git add .
  $ git commit -m 'commit message'
  $ git push origin branch-name
  ```
- Execute `npm run deploy`. This command will push the `/dist` folder to branch
  `gh-pages` in your remote repository. 
- Add links to your demo in readme.md
- Create `Pull Request` from forked repo `(<branch_name>)` to original repo 
(`master`).
- Add links to created `PR`. `PR` must include updated `readme.md` with `Demo`.

## Project structure

- `src/` - directory for html, css, sass, js, image, fonts files
- `dist/` - directory for built pages

You should be writing code in `src/` directory.

### Livereload and syncronization with browsers

Task `$ npm run start`

When task is executed, gulp starts local web server BrowserSync and opens index.html.  

[About BrowserSync](http://www.browsersync.io/)  

Server uses `dist/` as a project root.

### Demo link

Add link here: `[Demo link](https://<your_account>.github.io/<repo_name>/)`

### Screenshot of the card
![screenshot](./example/example-calendar.png)

