# Spreadshare local install instructions:

### Frontend
1. Clone this repo
2. `npm install`
3. Create ENV file at root with: `PORT=3001`
4. `npm start`

More details about [Create React App](https://github.com/facebookincubator/create-react-app).

### Backend
1. Clone this repo: https://github.com/patwalls/spreadshare-api
2. `bundle install` (postgres might be a pain)
3. `rake db:reset` - this resets and seeds the database
4. `rails s`

## Go to localhost:3001

Click on My Account -> Submit Spreadsheet and sign in with the following credentials:

Email: test@test.com
Password: abc

Then you should be able to play around. This part looks really bad just waiting on designs and such.
