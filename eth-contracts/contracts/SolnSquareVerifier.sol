pragma solidity >=0.4.21 <0.6.0;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "../contracts/verifier.sol";
import "../contracts/ERC721Mintable.sol";

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721Mint {

// TODO define a solutions struct that can hold an index & an address
struct solutions{
    uint256 index;
    address solutionAddress;
}

// TODO define an array of the above struct

solutions[] private SolutionArray;

// TODO define a mapping to store unique solutions submitted

mapping(bytes32 => solutions) solutionArray;

// TODO Create an event to emit when a solution is added

event addSolution(uint256 index, address solutionAddress);

// TODO Create a function to add the solutions to the array and emit the event
function add(address _solutionAddress, uint256 _index, bytes32 _key) internal {
    solutionArray[_key] = solutions({
        index : _index,
        solutionAddress : _solutionAddress
    });
    emit addSolution(_index, _solutionAddress);
}

// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly
Verifier public contractVerifier;
constructor(address contractVerifierAddress) public {
    contractVerifier = Verifier(contractVerifierAddress);
}

function getSolution(uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) internal pure returns(bytes32){    
    return keccak256(abi.encodePacked(a,b,c,input));
}
function mintNFT(address to, uint256 tokenId, uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input)public returns(uint256){

    bytes32 key = getSolution(a,b,c,input);
    require(solutionArray[key].solutionAddress == address(0),"Require a Unique Solution!.");
    require(contractVerifier.verifyTx(a,b,c,input),"Cannot Verify");
    add(to, tokenId, key);
    return super.mint(to, tokenId,"https://rinkeby.opensea.io/assets/0xabbb5f9c75f81ec2a2ffebf9a91c93fb311e42ae/1");

    }
}