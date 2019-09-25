# setup-git-token

This action sets the `GITHUB_TOKEN` as credentials for git, allowing `git push` in successive steps. Additionally, the committer's `email` and `name` are also set.

# Usage

See [action.yml](action.yml)

Basic:

```yaml
steps:
- uses: actions/checkout@master
- uses: fregante/setup-git-token@v1
  with:
    token: ${{ secret.GITHUB_TOKEN }}
- run: git branch new-branch
- run: git push origin new-branch
```

By default, new commits and tags will be assigned to the [@actions](https://github.com/actions) user. If you wish to customize the committer, specify that using `with.email` and `with.name`:

```yaml
- uses: fregante/setup-git-token@v1
  with:
    name: The Bot
    email: bot@example.com
```
