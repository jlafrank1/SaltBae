# SaltBae  
GA726 08-2021
["Project One" Assignment](https://git.generalassemb.ly/wc-seir-726/project-one)

> ***A 'salty' pomodoro-style app that you will want to use.***


<img src="documentation/docs-assets/../../public/assets/saltbae1.png" width="200">


- *A slick interface that stays out of your way!*
- *Track your session history!*
---
## Team SaltBae: 

- [Alexv Alves](https://github.com/alxalves)
- [Julia Silver](https://github.com/joulesoix)
- [Jay Thurber](https://github.com/jthurber87)
---

## Project Details
- [Project Details](/documentation/project-details.md)
- [Some information on Pomodoro](/documentation/about-pomodoro.md)
- [User Story](/documentation/user-story.md)
- [Wireframe, Framework, & Styling](documentation/framework-styling.md)
- [Code details](documentation/code-details.md)
- [Styling details](documentation/styling-details.md)

---
## Inspiration Credits:
- [pomofocus](https://pomofocus.io/)



# Node Configuration
*for m1 mac desktop environments*

*copy the following shell input notes and paste into your terminal to recover local node modules and remove them from the repo*

```sh
# remove node modules from your local repo
git rm -r node_modules
```


```sh
# re-install node modules into your project (that you're using)
# saltBae's modules:

npm init -y
npm install \
    tailwindcss \
    autoprefixer \
    bcrypt \
    body-parser \
    debug \
    dotenv \
    ejs \
    express \
    express-session \
    method-override \
    mongoose \
    postcss \
    postcss-cli \
    tailwindcss
```


```sh
# example removal of other common junk files
# take care!
git rm -r .DS_Store
git rm -r .vscode
```

[reference source](https://gist.github.com/subfuzion/db7f57fff2fb6998a16c)
example global gitignore file:
```sh
# Node
npm-debug.log
node_modules

# env
.env

# Mac
.DS_Store

# Windows
Thumbs.db

# WebStorm
.idea/

# vi
*~

# General
log/
*.log

# VS Code
.vscode
```