# welcome to the perion lab code test!

## Deployment url link:
[deployment-url-link](https://perion-test-frontend.netlify.app/)

## How to use the App?

### 1. input your steamId:
- make sure you input your steamid with all number digits, shown as image below:
![image](https://github.com/DAHUO-Melbourne/perion-lab-code-test/blob/main/frontend/public/readme_screenshots/step1/input_steamId.jpg)

- Or you will see an error state and error message below the input:
![image](https://github.com/DAHUO-Melbourne/perion-lab-code-test/blob/main/frontend/public/readme_screenshots/step1/input_error.jpg)

- you can press enter after you enter you steamId, or you can click the 'right arrow' to get into steam user summary page.
![image](https://github.com/DAHUO-Melbourne/perion-lab-code-test/blob/main/frontend/public/readme_screenshots/step1/submit.jpg)

### 2. watch your steam account summary with info *Total number of games owned*, *Total playtime across all games* and *Most played game* as shown below
![image](https://github.com/DAHUO-Melbourne/perion-lab-code-test/blob/main/frontend/public/readme_screenshots/step2/successful_summary.jpg)

- you might see error message if your steam id doesn't exist, then you need to go back to previous page to re input your correct steam id:
![image](https://github.com/DAHUO-Melbourne/perion-lab-code-test/blob/main/frontend/public/readme_screenshots/step2/error_summary.jpg)

### 3. check your full games list with *Game name* and *Playtime (in hours)*
![image](https://github.com/DAHUO-Melbourne/perion-lab-code-test/blob/main/frontend/public/readme_screenshots/step3/success_games_list.jpg)

## Bonus cool feature enhancement:

### Filter and get all unplayed games:
According to my own personal experience, I have more than 200 games, and I know I haven't played some of them before. But I don't know what are the games I haven't played before
So I added a filter checkbox here to pick up all the games I haven't before, and I believe this function is very helpful because I find there is no similar function as I just mentioned.
![image](https://github.com/DAHUO-Melbourne/perion-lab-code-test/blob/main/frontend/public/readme_screenshots/step3/games_list_filter.jpg)

## How to run the app on local?

1. git clone the app, and cd into folder `perion-lab-code-test`
![image](https://github.com/DAHUO-Melbourne/perion-lab-code-test/blob/main/frontend/public/readme_screenshots/local/steps/folder_step1.jpg)

2. **_IMPORTANT!!!_** make sure you create a `.env` file at the root folder of `backend`, and put a field called `API_KEY` into the .env file, **_`I will offer the value of API_KEY in the email for security considerations`_**:
![image](https://github.com/DAHUO-Melbourne/perion-lab-code-test/blob/main/frontend/public/readme_screenshots/local/steps/env_step2.jpg)

3. open the first terminal, and make sure you are in the folder `perion-lab-code-test`, then run `npm run backend` to start the backend.
![image](https://github.com/DAHUO-Melbourne/perion-lab-code-test/blob/main/frontend/public/readme_screenshots/local/steps/run_backend_step3.jpg)

4. open the second terminal, and make sure you are in the folder `perion-lab-code-test`, then run `npm run frontend` to start the frontend.
![image](https://github.com/DAHUO-Melbourne/perion-lab-code-test/blob/main/frontend/public/readme_screenshots/local/steps/run_frontend_step4.jpg)

5. open `http://localhost:3000/`, then you will see the app is running as shown below:
![image](https://github.com/DAHUO-Melbourne/perion-lab-code-test/blob/main/frontend/public/readme_screenshots/local/steps/browser_step5.jpg)

6. open the third terminal, and make sure you are in the folder `perion-lab-code-test`, then run `npm run frontend-test` to run the frontend unit tests, you will see the tests result as shown below:
![image](https://github.com/DAHUO-Melbourne/perion-lab-code-test/blob/main/frontend/public/readme_screenshots/local/test_result/testing_result.jpg)

## What's next plan?
- I can also add new functions to ranking the games based on played time Decreasingly.
- I can add lazyloading to the games list if user has a massive game list for more than 1000 games in repo.
- I can also add onClick functions try to retrieve some games basic info when user clicks on game on the page.