To run the backend and frontend together:

0) Ensure that you have the Node.js runtime installed
    a) If you don't see Node.js listed in Apps & features on your computer, go to https://nodejs.org/en/download/

1) Ensure that you have all packages installed.
    a) Open the terminal (VS Code) or developer command prompt (VS)
    b) Change the active directory to ExpressBackend (the folder containing the backend project)
    c) Run the command: npm install
    d) Change the active directory to VueFrontend (the folder containing the frontend project)
    e) Run the command: npm install

2) Run the backend
    a) Open the terminal (VS Code) or developer command prompt (VS)
    b) Change the active directory to ExpressBackend
    c) Run the command: npm run start
    d) Leave the command window open

3) Run the frontend
    a) Open a separate terminal (VS Code) or developer command prompt (VS)
    b) Change the active directory to VueFrontend
    c) Run the command: npm run serve
    d) Leave the command window open

4) Access the website
    a) Open a web browser and go to http://localhost:8080/
    b) Login with 'admin@test.com' and 'password' or create your own account
    c) Click OK on the notification box, and the home page for the website should be displayed

NOTES: As of 6/5/20, the backend runs on port 3000 and the frontend runs on 8080. Therefore, GET requests
       in the backend can be tested by browsing to the corresponding URL (e.g. http://localhost:3000/games
       should display raw data from the database for games). The frontend did originally run on 1337, and
       there may be vestigial references to that in the project, which should be removed if possible.

       If you have Visual Studio, you should be able to run either project using Debug -> Start Debugging,
       which will subsequently enable a "Web Server" button with the play icon for ease of use. Theoretically
       you could use two instances of Visual Studio, one open to each project, and avoid having to run them
       using commands.

       Changes to the frontend will take effect immediately upon saving. As long as the command window is
       left open when running the frontend, you are free to edit code, save, and view the changes in your
       web browser (you may need to refresh, you may not).

       Since VS Code users will not be editing the .nsproj files, new files and folders may not appear in
       the solution explorer for Visual Studio users. When this happens, right click the directory in the
       solution explorer containing the missing item(s), then select Add -> Existing item/folder, and
       select file(s)/folder to add. This will update the .nsproj file, so once it is pushed to the repo,
       the issue will be resolved for all Visual Studio users who pull the update.