# Instructions To Contribute

For questions, please contact Cam, Colin or Elliot on our Discord server.

# Step 1 - Fork The Recommended Resources Repo

- On the repo, click “Fork” in the options above the files. This will open a new version (fork) of the repository on your personal github account.
- Make sure git is installed on your machine. If not, install it - instructions here: [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

# Step 2 - Make Your Changes Locally

- On your new personal repo, clone the repo to your local machine. To do this, run this command in your terminal at the location where you want the local repo to be

```jsx
git clone https://github.com/<YOUR_GITHUB_USERNAME>/recommended-resources.git
```

- Once you’ve done this, the files are on your machine! Use a code editor (we recommend Visual Studio Code, which is free) to open it.
- Create a new branch for your changes that is descriptive of what you plan to do. To do this, run

```jsx
git checkout -b <my-changes>
```

You can’t have spaces - usually people use “-” as a way of showing spaces.

- Make the changes you require. Don’t delete any other contributions to the list, just add what you would like to see included.

# Step 3 - Committing

- In your repo, add your changes to your commit using (note the “.” - this means add all changed files)

```jsx
git add .
```

- Commit your changes with a relevant message by using this command - replace the example message with what you’ve done.

```jsx
git commit -m "Added The Coder Career to list of recommended podcasts"
```

# Step 4 - Push Your Changes to Github

The changes are on your machine! Now, you need to push them to your GitHub Repo. To do this, run the following command:

```jsx
git push origin <YOUR BRANCH>
```

If it’s your first time pushing to this repo, you will need to run it with these flags to create the new branch remotely

```jsx
git push --set-upstream origin <YOUR BRANCH>
```

Your changes will now be on Github!

- Open up your Github repo, you should see a prompt about your new branch having changes. Click “Compare and Pull Request”
- Open up the Pull Request. Review your changes, and check everything looks as expected. If not, go and change it locally and push it up again.
- Once you’re satisfied, click “Merge Pull Request”.
- Now you’re ready to open a Pull Request to the main repo!

# Step 5 - Open up a PR Against The Main Repo

- On YOUR repo, navigate to “Pull Requests”. Click New Pull Request.
- The “base repository should be set as "The-Coder-Career/recommended/resources”. If it isn’t make sure you change it to that.
- Click “Create pull request”
- Enter a title and comments with an adequate description of your changes and reasoning.
- Wait for a review! We may come back with questions.

Once we’re satisfied, we’ll merge your changes! 

This repo is designed to give you a simple way to contribute to a project and to learn version control. We hope you enjoyed it!