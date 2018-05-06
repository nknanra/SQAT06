# SQAT06-test
1. TEST OBJECTIVE: The test objective is to test the web application 'https://figure1.com/' registration form
   available at url:'https://app.figure1.com/account/register' by using selenium tool(Web application test       automation tool).        

2. TEST TOOLS:Following test tools are required to download on local machine to work with Selenium(Portable         software-testing framework for web applications):

 (1) GIT:-Git is a free and open source distributed version control system designed to handle everything from        small to very large projects with speed and efficiency.

     -> Download Git from 'https://git-scm.com/downloads'.Download it as per operating system installed on your computer i.e. Mac OS X, Windows, Linux/Unix.
     -> After download it,check version of the git installed on system by using command 'git --version' at command prompt.

 (2) GITHUB:-GitHub is a distributed version-control platform where users can collaborate on or adopt open           source code projects, fork code, share ideas and more.

     -> Create personal account at github.com(url:https://github.com/join?source=header-home)
 
 (3) VISUAL STUDIO CODE:-Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux        and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code       completion, snippets, and code refactoring.
    
     ->Download  and install Visual Studio Code from 'https://code.visualstudio.com/Download'on your system.

 (4) NODE.JS:- Node.js is an open-source, cross-platform JavaScript run-time environment that executes               JavaScript code server-side.

     ->Download and install node from https://nodejs.org. Go to url:https://nodejs.org/en/download/. Click on      Previous Releases link at the bottom of the webpage. Click on downloads link parelled to version Node.js    7.8.0. Click on node-v7.8.0-x64.msi to download it (https://nodejs.org/download/release/v7.8.0/). 
     -> Check version installed on system using command in command prompt: 'node -v'
 
 (5) SELENIUM STANDALONE SERVER:-Selenium server is needed to run older Selenium RC tests or to run WebDriver        tests in remote machines through Selenium Grid.

     ->Install Selenium server globally in your system by run this command at command prompt:'npm install          selenium-standalone -g'
     ->Then run second command:selenium-standalone install

 (6) NPM:-npm is a package manager for the JavaScript programming language. It is the default package manager        for the JavaScript runtime environment Node.js.

     ->Install npm on your system under drive which contain javascript files.Run this command under command        prompt: 'npm install'.

 (7) JAVA:- Download and install java software on your computer from 'https://java.com/en/download/' if not           avaliable on your computer.

3. TEST PROCEDURE:Do the following steps to test application'Figure1' registration form using selenium tool:

 (1) To start Selenium server on your system, run this command at command prompt:'selenium-standalone start'

 (2) Login to your github personal account and search the name 'IzzatBamieh' and from available results,click on     link'Users' on left side of web page.And then click on user profile available 'IzzatBamieh'->Click on the       project'SQAT06'.

    ->To download all code available under this project on your local machine,Click on Clone or Download which     shows link to copy (clone with HTTPS or clone with SSH) and paste it using following command in command      prompt:'git clone "paste the link copied"'.

 (3) To work with code downloaded on your machine.Change the drive which contains the code in another command        prompt using command:'cd "drive name"' i.e. cd SQAT06

 (4) Install npm at command line under drive 'SQAT06' only at first time to install all node modules.

 (5) Open Visual Studio Code application on your computer and then go to File->Open File-> Select all file under     folder 'SQAT06' and click on Open button.Click on web_basic.js file to explore the javascript code              available under it. Alter the code to fill up the valid credentials available on 'Figure1' Registration         form one by one,save it and test it using following command in command prompt:'node web_basic.js'
            
 ---------------------------------------------------------------------------------------------------------------
      Above specified test tools and procedure is required to test web application with Selenium tool
 ---------------------------------------------------------------------------------------------------------------

 -------------PUSH THE UPDATED CODE TO GITHUB AND USE PULL REQUEST TO SHARE THE UPDATED CODE--------------------
  PUSH CODE TO GITHUB: Do the following steps to push the updated code from local machine back to github at                           your account.

 1) Login to your github account.Go to user'IZZAT BAMIEH'->project 'SQAT06'->Click on Fork at top-right corner      of the web page. It will show all code under your account.

 2) Click on Clone or Download which shows link to copy (clone with HTTPS or clone with SSH) and paste it using    following command in command prompt:'git remote add navjot "paste the link copied"'.It added files under        your name.

 3) Then enter the command:'git remote -v' to confirm if your account is added sucessfully for fetch and push       the updated code.It connects to your local files to the origin.

 4) Use the command:'git add -p'.It interact all changes and ask to for make changes say yes or no. Y for yes       or N for no.

 5) Enter command: 'git commit -m "message"' at command prompt to add message for the commit. if it shows the       message'please tell me who you are' and run the following commands to give your email address and your name:
     -> git config --global user.email "you@example.com"
     -> git config --global user.name "Your Name"
    and then again run the command:'git commit -m "message"'.It will show how many files are changed, how many   insertion and deletion made.

 6) Enter command: 'git push navjot master' at command prompt to push commit made on local machine to the           remote repository.

 7) Check your github account, you will see the commit made by you under your account and you can see the           updated code.

 PULL REQUEST: It is used to share your updated code or commit to anyone. For this, do the following:

   -> Click on New pull request under your github account-> Write the comment for the commit-> click on create pull request.It will share your updated code to the person whom you made the pull request.

---------------TEST WEB APPLICATION FIGURE1 REGISTRATION FORM IN CUCUMBER USING SELENIUM TOOL-----------------

(1) Open Command Prompt and start the Selenium server using command:Selenium-standalone start

(2) Open another Command Prompt and change drive to SQAT06 by using command: cd SQAT06

(3) Open Visual Studio Code application on your computer and then go to File->Open File-> Select all file under     folder 'SQAT06' and click on Open button. Under SQAT06 folder, open folder feature ->open support sub-folder,    which conatins:
  (a) hooks.js-Hooks are used for setup and teardown the environment before and after each scenario.
  (b) steps.js-This file contains code to execute all steps written in scenario.
  (c) world.js-World is an isolated context for each scenario, exposed to the hooks and steps.
  (d) scenario.feature-A feature file can contain a scenario or can contain many scenarios in a single feature file but it usually contains a list of scenarios.

  These all files are required to work in cucumber.      

(4) Write Scenario to test for registration of Figure1 web application in simple english language in(GIVEN,WHEN,THEN)form in scenario.feature file under feature folder.

(5) Write code inside steps.js file to execute all steps written in scenario.feature file. Save the code written.

(6) Write code to assert any element which should be visible or exist on resulting registered account web page in steps.js using chai. 

(7) Run the code written in steps.js one by one as per steps written in scenario.feature file in command prompt using command: .\node_modules\.bin\cucumber-js

(8) If your code run sucessfully, you should see your account is registered on figure1 website and scenario and all steps under it should be pass. 

(9) Push the code changed in step.js,scenario.feature file under feature folder and read me file by using steps specified from line no. 61 to 72 above in readme file.

(10) Pull the request on github to share the updated code-For this, do the following:

   -> Click on New pull request under your github account-> Write the comment for the commit-> click on create pull request.It will share your updated code to the person whom you made the pull request.
   ----------------------------------------END OF READ ME FILE---------------------------------------------------




