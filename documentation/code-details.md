# Some Code Details
We decided to play around with our routes, having the new route take the place of the home page, an exit interview for each timer take the place of the edit route, and a history page representing our index route.

Our new route was originally a place to name your timer and set a specific time within it. However, after more consideration of the Pomodoro technique, we decided to just give the user the options of:
- Pomodoro timer
- Short break
- Long break

This streamlines the UX, with fewer options comes less need for instruction.

Redirection plays a sizable role in the functionality of our site. Redirecting to a login page if there is no req.session.currentUser keeps the database clear of unnecessary data. Redirecting to an interview page once a timer is complete allows for more depth and usability for the user.

# REST Layout Ref
| #   | Action        | URL                    | HTTP Verb | EJS view filename | mongoose method                 | Redirect       |
| --- | ------------- | ---------------------- | --------- | ----------------- | ------------------------------- | -------------- |
| 1   | Index-Home    | /saltbae               | GET       | index.ejs         | Projects.find()                 | /saltbae/login |
| 2   | Show          | /saltbae/:id           | GET       | show.ejs          | Projects.findById()             |                |
| 3   | New           | /saltbae/new           | GET       | new.ejs           | -                               |                |
| 4   | Create        | /saltbae               | POST      | -none-            | Projects.create(...)            |                |
| 5   | Edit          | /saltbae/:id/edit      | GET       | edit.ejs          | Projects.findById()             |                |
| 6   | Update        | /saltbae/:id/interview | PUT       | -none-            | Projects.findByIdAndUpdate(...) |                |
| 7   | Destroy       | /saltbae/:id           | DELETE    | -none-            | Projects.deleteOne(...)         |                |
| -   | -             | -                      | -         | -                 | -                               |                |
| +   | Index-History | /saltbae/history       | GET       | history.ejs       | Projects.find()                 |                |
| +   | Login         | /saltbae/login         | GET       | login.ejs         | User.findOne()                  |                |
| +   | Register      | /saltbae/register      | GET       | register.ejs      | -                               |                |
| +   | User Create   | /saltbae/              | POST      | -                 | User.create(...)                |                |
| +   | Login         | /saltbae/              | POST      | -                 | User.findOne()                  |                |
|     |               |                        |           |                   |                                 |                |

---
[**HOME**](../README.md)
