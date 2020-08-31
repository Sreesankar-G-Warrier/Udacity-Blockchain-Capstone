# UDACITY BLOCKCHAIN CAPSTONE PROJECT
> This is a Real-World Project using blockchain. Here Blockchain is solving the problem in **Real-Estate Industry** to sell or buy properties. We're using **OpenSea** as a market place.
> The Token that we're using in this project is **ERC721**, it is a non-fungible token. The one of the major problem is the authencity of the owner, for solving this issue, we're using
> **zk-SNARKs**. So **zk-SNARKs** will help us to verify the owner and the other issue is the details of the property, here is the major role of **OpenSea**, this marketplace will give 
> all the details of the property and provides a easy transaction of money. Therefore, by using this project we can easly resolve the problems that are facing in the **Real-Estate Industry**

## How to Install
  > This repository contains Smart Contract code in Solidity (using Truffle), tests (also using Truffle)
  - To install, download or clone the repo, then:
   ```
  cd Capstone
  npm i
  ```
  - To run ganache:
  ```
  ganache-cli
  ```
  - In a separate terminal window,from inside the directory eth-contracts/ Compile smart contracts:
  `truffle.cmd compile`
  > This will create the smart contract artifacts in folder build\contracts.
  - To Deploy the Application

  `truffle migrate --network <Select a Network>`
  
  - To Test the Application

  `truffle test`
  
  ![CapstoneTest](https://github.com/Sreesankar-G-Warrier/Udacity-Blockchain-Capstone/blob/master/CapstoneTest.png)
  
  - Create ZK-Snarks Proof using Zokrates
  > Install Docker Community Edition here (https://docs.docker.com/install/). Virtualization should be enabled for Docker to work. 
  - Run this docker command

  `docker run -v <path to your project folder>:/home/zokrates/code -ti zokrates/zokrates:0.3.0 /bin/bash`
  - Change Directory to

  `cd code/zokrates/code/square/`
  - Then compile

  `/path/to/zokrates compile -i square.code`
  - Compute Witness

  `/path/to/zokrates compute-witness -a 3 9`
  - After that Generate Proof

  `/path/to/zokrates generate-proof`
  - Then Export Verifier

  `path/to/zokrates export-verifier`

## On Etherscan and OpenSea Demo
  
  - Transaction:https://rinkeby.etherscan.io/address/0xb7fc722f8319bef1fc65bea32933e1ff36bb551d#tokentxnsErc721
  
  - Demo of OpenSea: 
  
    1. https://rinkeby.opensea.io/assets/0xabbb5f9c75f81ec2a2ffebf9a91c93fb311e42ae/1              
    2. https://rinkeby.opensea.io/assets/0xabbb5f9c75f81ec2a2ffebf9a91c93fb311e42ae/2
    3. https://rinkeby.opensea.io/assets/0xabbb5f9c75f81ec2a2ffebf9a91c93fb311e42ae/3             
    4. https://rinkeby.opensea.io/assets/0xabbb5f9c75f81ec2a2ffebf9a91c93fb311e42ae/4              
    5. https://rinkeby.opensea.io/assets/0xabbb5f9c75f81ec2a2ffebf9a91c93fb311e42ae/5
  
## Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
