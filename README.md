# Spreadshare local install instructions:

### Frontend
1. Clone this repo
2. `npm install`
3. Create `.env` file at root with: `PORT=3001`
4. `npm start`

More details about [Create React App](https://github.com/facebookincubator/create-react-app).

### Backend
1. Clone this repo: https://github.com/patwalls/spreadshare-api
2. `bundle install` (postgres is sometimes a pain to install on the first time - google around or lmk i can try to help)
3. `rake db:reset` - reset and seed the database
4. `rails s`

### Login and play around

1. Go to localhost:3001
2. Click on My Account -> Submit Spreadsheet and sign in with the following credentials:

```
Email: test@test.com
Password: abc
```
Then you should be able to play around. This part looks really bad just waiting on designs and such.
