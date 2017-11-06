# GCP Cloud Functions Starter for Typescript
## Overview
## Initial setup
### Install Gcloud
Gcloud is a basic Google Cloud CLI that allows deployment, 
test & configuration of various Google Cloud services. 

To install it follow [Gcloud installation instructions](https://cloud.google.com/sdk/downloads#interactive).

### Reinstall Yarn
Next step requires change how Yarn is bounded to the node. We need to separate it from the node version 
to make it play nicely with NVM (tool we will setup later).

Execute this: 
```bash
brew install yarn --without-node
```

### Install Node Version Manager
Most of dev environments uses quite recent version of node. 
Google functions is a production-grade service so it cant progress with version of node as fast as end-user - current 
version is always a bit behind. To test functions is ame environment as production please switch 
node version to same as google recommends.

Node Version Manager (or NVM) allows you to do that effortlesly.
Full documentation can be found on [NVM github page](https://github.com/creationix/nvm/blob/master/README.md)

To install NVM, execute:
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
```

If developer uses zsh for their bash profile, nvm can automatically switch versions of node per 
directory (if config .nvmrc exists in the dir). Put this into your $HOME/.zshrc to call nvm 
use automatically whenever you enter a directory that contains an .nvmrc file with a string 
telling nvm which node to use:
```bash
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

**Important:** please see required node version - its listed in .nvmrc config file.

### Install Cloud Functions Local Emulator
Local function emulator allows to test function before deploying it.
Full documentation what you can do with emulator can be found [here](https://cloud.google.com/functions/docs/emulator).

**Important:** to prevent clashes with other packages that are executed in bash as 'functions' 
this package uses 'functions-emulator' command.

To install Cloud Functions Local Emulator, execute:
```bash
yarn add @google-cloud/functions-emulator --dev
```

### Clone repository & install packages
To install packages for cloned repo, execute:
```bash
yarn install
```

##Commands
### Build project
```bash
yarn build
```
### Watch changes, build & deploy to emulator
```bash
yarn watch
```
### Start Cloud Functions Local Emulator
```bash
yarn emulator-start
```
### Stop Cloud Functions Local Emulator 
```bash
yarn emulator-stop
```
### Kill Cloud Functions Local Emulator
```bash
yarn emulator-kill
```
### Get status of Cloud Functions Local Emulator
```bash
yarn emulator-status
```
### Deploy to Cloud Functions Local Emulator
```bash
yarn emulator-deploy
```
### Start debugging session
```bash
yarn emulator-debug
```
### Execute tests
```bash
yarn test
```

