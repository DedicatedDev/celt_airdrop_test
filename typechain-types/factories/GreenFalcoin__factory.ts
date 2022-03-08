/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GreenFalcoin, GreenFalcoinInterface } from "../GreenFalcoin";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600c81526020017f477265656e46616c636f696e00000000000000000000000000000000000000008152506040518060400160405280600381526020017f46616c0000000000000000000000000000000000000000000000000000000000815250816003908051906020019062000096929190620001a6565b508060049080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002bb565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000256565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b600060028204905060018216806200026f57607f821691505b602082108114156200028657620002856200028c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6119e880620002cb6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d714610276578063a9059cbb146102a6578063dd62ed3e146102d6578063f2fde38b14610306576100f5565b806370a0823114610200578063715018a6146102305780638da5cb5b1461023a57806395d89b4114610258576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806340c10f19146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610322565b60405161010f91906113a8565b60405180910390f35b610132600480360381019061012d919061115f565b6103b4565b60405161013f919061138d565b60405180910390f35b6101506103d7565b60405161015d919061150a565b60405180910390f35b610180600480360381019061017b919061110c565b6103e1565b60405161018d919061138d565b60405180910390f35b61019e610410565b6040516101ab9190611525565b60405180910390f35b6101ce60048036038101906101c9919061115f565b610419565b6040516101db919061138d565b60405180910390f35b6101fe60048036038101906101f9919061115f565b6104c3565b005b61021a6004803603810190610215919061109f565b61054d565b604051610227919061150a565b60405180910390f35b610238610595565b005b61024261061d565b60405161024f9190611372565b60405180910390f35b610260610647565b60405161026d91906113a8565b60405180910390f35b610290600480360381019061028b919061115f565b6106d9565b60405161029d919061138d565b60405180910390f35b6102c060048036038101906102bb919061115f565b6107c3565b6040516102cd919061138d565b60405180910390f35b6102f060048036038101906102eb91906110cc565b6107e6565b6040516102fd919061150a565b60405180910390f35b610320600480360381019061031b919061109f565b61086d565b005b6060600380546103319061163a565b80601f016020809104026020016040519081016040528092919081815260200182805461035d9061163a565b80156103aa5780601f1061037f576101008083540402835291602001916103aa565b820191906000526020600020905b81548152906001019060200180831161038d57829003601f168201915b5050505050905090565b6000806103bf610965565b90506103cc81858561096d565b600191505092915050565b6000600254905090565b6000806103ec610965565b90506103f9858285610b38565b610404858585610bc4565b60019150509392505050565b60006012905090565b600080610424610965565b90506104b8818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104b3919061155c565b61096d565b600191505092915050565b6104cb610965565b73ffffffffffffffffffffffffffffffffffffffff166104e961061d565b73ffffffffffffffffffffffffffffffffffffffff161461053f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105369061146a565b60405180910390fd5b6105498282610e45565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61059d610965565b73ffffffffffffffffffffffffffffffffffffffff166105bb61061d565b73ffffffffffffffffffffffffffffffffffffffff1614610611576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106089061146a565b60405180910390fd5b61061b6000610fa5565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546106569061163a565b80601f01602080910402602001604051908101604052809291908181526020018280546106829061163a565b80156106cf5780601f106106a4576101008083540402835291602001916106cf565b820191906000526020600020905b8154815290600101906020018083116106b257829003601f168201915b5050505050905090565b6000806106e4610965565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838110156107aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a1906114ca565b60405180910390fd5b6107b7828686840361096d565b60019250505092915050565b6000806107ce610965565b90506107db818585610bc4565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610875610965565b73ffffffffffffffffffffffffffffffffffffffff1661089361061d565b73ffffffffffffffffffffffffffffffffffffffff16146108e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e09061146a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610959576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610950906113ea565b60405180910390fd5b61096281610fa5565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d4906114aa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a449061140a565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b2b919061150a565b60405180910390a3505050565b6000610b4484846107e6565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610bbe5781811015610bb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba79061142a565b60405180910390fd5b610bbd848484840361096d565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2b9061148a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ca4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9b906113ca565b60405180910390fd5b610caf83838361106b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2c9061144a565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dc8919061155c565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e2c919061150a565b60405180910390a3610e3f848484611070565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610eb5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eac906114ea565b60405180910390fd5b610ec16000838361106b565b8060026000828254610ed3919061155c565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f28919061155c565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f8d919061150a565b60405180910390a3610fa160008383611070565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b60008135905061108481611984565b92915050565b6000813590506110998161199b565b92915050565b6000602082840312156110b5576110b46116ca565b5b60006110c384828501611075565b91505092915050565b600080604083850312156110e3576110e26116ca565b5b60006110f185828601611075565b925050602061110285828601611075565b9150509250929050565b600080600060608486031215611125576111246116ca565b5b600061113386828701611075565b935050602061114486828701611075565b92505060406111558682870161108a565b9150509250925092565b60008060408385031215611176576111756116ca565b5b600061118485828601611075565b92505060206111958582860161108a565b9150509250929050565b6111a8816115b2565b82525050565b6111b7816115c4565b82525050565b60006111c882611540565b6111d2818561154b565b93506111e2818560208601611607565b6111eb816116cf565b840191505092915050565b600061120360238361154b565b915061120e826116e0565b604082019050919050565b600061122660268361154b565b91506112318261172f565b604082019050919050565b600061124960228361154b565b91506112548261177e565b604082019050919050565b600061126c601d8361154b565b9150611277826117cd565b602082019050919050565b600061128f60268361154b565b915061129a826117f6565b604082019050919050565b60006112b260208361154b565b91506112bd82611845565b602082019050919050565b60006112d560258361154b565b91506112e08261186e565b604082019050919050565b60006112f860248361154b565b9150611303826118bd565b604082019050919050565b600061131b60258361154b565b91506113268261190c565b604082019050919050565b600061133e601f8361154b565b91506113498261195b565b602082019050919050565b61135d816115f0565b82525050565b61136c816115fa565b82525050565b6000602082019050611387600083018461119f565b92915050565b60006020820190506113a260008301846111ae565b92915050565b600060208201905081810360008301526113c281846111bd565b905092915050565b600060208201905081810360008301526113e3816111f6565b9050919050565b6000602082019050818103600083015261140381611219565b9050919050565b600060208201905081810360008301526114238161123c565b9050919050565b600060208201905081810360008301526114438161125f565b9050919050565b6000602082019050818103600083015261146381611282565b9050919050565b60006020820190508181036000830152611483816112a5565b9050919050565b600060208201905081810360008301526114a3816112c8565b9050919050565b600060208201905081810360008301526114c3816112eb565b9050919050565b600060208201905081810360008301526114e38161130e565b9050919050565b6000602082019050818103600083015261150381611331565b9050919050565b600060208201905061151f6000830184611354565b92915050565b600060208201905061153a6000830184611363565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611567826115f0565b9150611572836115f0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156115a7576115a661166c565b5b828201905092915050565b60006115bd826115d0565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561162557808201518184015260208101905061160a565b83811115611634576000848401525b50505050565b6000600282049050600182168061165257607f821691505b602082108114156116665761166561169b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61198d816115b2565b811461199857600080fd5b50565b6119a4816115f0565b81146119af57600080fd5b5056fea2646970667358221220489d3c629b41742836d340313f735ce8f1a458f0a76a64ae7862405ae58e7c3864736f6c63430008070033";

type GreenFalcoinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GreenFalcoinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GreenFalcoin__factory extends ContractFactory {
  constructor(...args: GreenFalcoinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GreenFalcoin";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GreenFalcoin> {
    return super.deploy(overrides || {}) as Promise<GreenFalcoin>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GreenFalcoin {
    return super.attach(address) as GreenFalcoin;
  }
  connect(signer: Signer): GreenFalcoin__factory {
    return super.connect(signer) as GreenFalcoin__factory;
  }
  static readonly contractName: "GreenFalcoin";
  public readonly contractName: "GreenFalcoin";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreenFalcoinInterface {
    return new utils.Interface(_abi) as GreenFalcoinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GreenFalcoin {
    return new Contract(address, _abi, signerOrProvider) as GreenFalcoin;
  }
}