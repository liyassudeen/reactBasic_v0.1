 git init - For Initialization
 git add . - Add the files
 git commit -m 'Initialized' - Commits the local files
 git remote add origin https://Liyassudeen@bitbucket.org/Liyassudeen/reactbasic.git - Link with existing repository
 git pull origin master - Pull already existing files
 git push -u origin master - Push latest changes
 git pull origin master --allow-unrelate-histories - Pull already existing files (If unrelated history b/w local & repository)
 git push -u origin master - Push the latest changes


 [git configuration](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)
* "git merge" used to allow merging two branches that have no common
   base by default, which led to a brand new history of an existing
   project created and then get pulled by an unsuspecting maintainer,
   which allowed an unnecessary parallel history merged into the
   existing project.  The command has been taught not to allow this by
   default, with an escape hatch "--allow-unrelated-histories" option
   to be used in a rare event that merges histories of two projects
   that started their lives independently.
 * "git pull" has been taught to pass the "--allow-unrelated-histories"
   option to underlying "git merge".
   
  * [git merge two branches](https://github.com/git/git/blob/master/Documentation/RelNotes/2.9.0.txt#L58-L68)