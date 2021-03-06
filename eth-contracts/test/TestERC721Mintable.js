var ERC721Mint = artifacts.require('ERC721Mint');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            let self = this;
            self.contract = await ERC721Mint.new({from: account_one});

            // TODO: mint multiple tokens
            for(let i=0; i<10;i++){
                await this.contract.mint(accounts[i],i,"TokenURI");
            }
        })

        it('should return total supply', async function () { 
            let self = this;
            let totalSupply = await self.contract.totalSupply();
            assert.equal(totalSupply,10,"Total Supply Should Return 10");
        })

        it('should get token balance', async function () { 
            let self = this;
            let balance = await self.contract.balanceOf(account_two);
            assert.equal(balance,1,"Balance should return 1" )

        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let self = this;
            let tokenURI = await self.contract.tokenURI(1, {from: account_three});
            assert.equal(tokenURI,"https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1","Should return 1" );
        })

        it('should transfer token from one owner to another', async function () { 
            let self = this;
            let tokenOwner = await self.contract.ownerOf(6);
            assert.equal(tokenOwner, accounts[6], "Incorrect Owner");
            await self.contract.transferFrom(accounts[6],accounts[7],6, {from:accounts[6]}) 
            tokenOwner = await self.contract.ownerOf(7);
            assert.equal(tokenOwner, accounts[7], "Incorrect Owner");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            let self = this;
            self.contract = await ERC721Mint.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let self = this;
            let errorCount = 0;
            try{
                await self.contract.mint(accounts[20],20,"token", {from:accounts[20]});
            }
            catch(err)
            {
                errorCount++;
            }
            assert.equal(errorCount, 1, "Expected revert");

        })

        it('should return contract owner', async function () { 
            let ContractOwner = await this.contract.owner();
            assert.equal(ContractOwner, account_one, "Incorrect Owner");
        })

    });
})
