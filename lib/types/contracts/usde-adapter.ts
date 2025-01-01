const data = {
    name: "USDeOFTAdapter",
    address: "0x7dA8F2F7EF7760E086c2b862cdDeBEFa8d969aa2",
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "_token",
            type: "address"
          },
          {
            internalType: "address",
            name: "_lzEndpoint",
            type: "address"
          },
          {
            internalType: "address",
            name: "_delegate",
            type: "address"
          }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        inputs: [],
        name: "InvalidDelegate",
        type: "error"
      },
      {
        inputs: [],
        name: "InvalidEndpointCall",
        type: "error"
      },
      {
        inputs: [],
        name: "InvalidLocalDecimals",
        type: "error"
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "options",
            type: "bytes"
          }
        ],
        name: "InvalidOptions",
        type: "error"
      },
      {
        inputs: [],
        name: "LzTokenUnavailable",
        type: "error"
      },
      {
        inputs: [
          {
            internalType: "uint32",
            name: "eid",
            type: "uint32"
          }
        ],
        name: "NoPeer",
        type: "error"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "msgValue",
            type: "uint256"
          }
        ],
        name: "NotEnoughNative",
        type: "error"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "addr",
            type: "address"
          }
        ],
        name: "OnlyEndpoint",
        type: "error"
      },
      {
        inputs: [
          {
            internalType: "uint32",
            name: "eid",
            type: "uint32"
          },
          {
            internalType: "bytes32",
            name: "sender",
            type: "bytes32"
          }
        ],
        name: "OnlyPeer",
        type: "error"
      },
      {
        inputs: [],
        name: "OnlySelf",
        type: "error"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          }
        ],
        name: "OwnableInvalidOwner",
        type: "error"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address"
          }
        ],
        name: "OwnableUnauthorizedAccount",
        type: "error"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "token",
            type: "address"
          }
        ],
        name: "SafeERC20FailedOperation",
        type: "error"
      },
      {
        inputs: [
          {
            internalType: "bytes",
            name: "result",
            type: "bytes"
          }
        ],
        name: "SimulationResult",
        type: "error"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "amountLD",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "minAmountLD",
            type: "uint256"
          }
        ],
        name: "SlippageExceeded",
        type: "error"
      },
      {
        anonymous: false,
        inputs: [
          {
            components: [
              {
                internalType: "uint32",
                name: "eid",
                type: "uint32"
              },
              {
                internalType: "uint16",
                name: "msgType",
                type: "uint16"
              },
              {
                internalType: "bytes",
                name: "options",
                type: "bytes"
              }
            ],
            indexed: false,
            internalType: "struct EnforcedOptionParam[]",
            name: "_enforcedOptions",
            type: "tuple[]"
          }
        ],
        name: "EnforcedOptionSet",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "inspector",
            type: "address"
          }
        ],
        name: "MsgInspectorSet",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "guid",
            type: "bytes32"
          },
          {
            indexed: false,
            internalType: "uint32",
            name: "srcEid",
            type: "uint32"
          },
          {
            indexed: true,
            internalType: "address",
            name: "toAddress",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amountReceivedLD",
            type: "uint256"
          }
        ],
        name: "OFTReceived",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "guid",
            type: "bytes32"
          },
          {
            indexed: false,
            internalType: "uint32",
            name: "dstEid",
            type: "uint32"
          },
          {
            indexed: true,
            internalType: "address",
            name: "fromAddress",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amountSentLD",
            type: "uint256"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amountReceivedLD",
            type: "uint256"
          }
        ],
        name: "OFTSent",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address"
          }
        ],
        name: "OwnershipTransferred",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint32",
            name: "eid",
            type: "uint32"
          },
          {
            indexed: false,
            internalType: "bytes32",
            name: "peer",
            type: "bytes32"
          }
        ],
        name: "PeerSet",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "preCrimeAddress",
            type: "address"
          }
        ],
        name: "PreCrimeSet",
        type: "event"
      },
      {
        inputs: [],
        name: "SEND",
        outputs: [
          {
            internalType: "uint16",
            name: "",
            type: "uint16"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "SEND_AND_CALL",
        outputs: [
          {
            internalType: "uint16",
            name: "",
            type: "uint16"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "uint32",
                name: "srcEid",
                type: "uint32"
              },
              {
                internalType: "bytes32",
                name: "sender",
                type: "bytes32"
              },
              {
                internalType: "uint64",
                name: "nonce",
                type: "uint64"
              }
            ],
            internalType: "struct Origin",
            name: "origin",
            type: "tuple"
          }
        ],
        name: "allowInitializePath",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "approvalRequired",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "pure",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint32",
            name: "_eid",
            type: "uint32"
          },
          {
            internalType: "uint16",
            name: "_msgType",
            type: "uint16"
          },
          {
            internalType: "bytes",
            name: "_extraOptions",
            type: "bytes"
          }
        ],
        name: "combineOptions",
        outputs: [
          {
            internalType: "bytes",
            name: "",
            type: "bytes"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "decimalConversionRate",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "endpoint",
        outputs: [
          {
            internalType: "contract ILayerZeroEndpointV2",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint32",
            name: "eid",
            type: "uint32"
          },
          {
            internalType: "uint16",
            name: "msgType",
            type: "uint16"
          }
        ],
        name: "enforcedOptions",
        outputs: [
          {
            internalType: "bytes",
            name: "enforcedOption",
            type: "bytes"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "uint32",
                name: "srcEid",
                type: "uint32"
              },
              {
                internalType: "bytes32",
                name: "sender",
                type: "bytes32"
              },
              {
                internalType: "uint64",
                name: "nonce",
                type: "uint64"
              }
            ],
            internalType: "struct Origin",
            name: "",
            type: "tuple"
          },
          {
            internalType: "bytes",
            name: "",
            type: "bytes"
          },
          {
            internalType: "address",
            name: "_sender",
            type: "address"
          }
        ],
        name: "isComposeMsgSender",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint32",
            name: "_eid",
            type: "uint32"
          },
          {
            internalType: "bytes32",
            name: "_peer",
            type: "bytes32"
          }
        ],
        name: "isPeer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "uint32",
                name: "srcEid",
                type: "uint32"
              },
              {
                internalType: "bytes32",
                name: "sender",
                type: "bytes32"
              },
              {
                internalType: "uint64",
                name: "nonce",
                type: "uint64"
              }
            ],
            internalType: "struct Origin",
            name: "_origin",
            type: "tuple"
          },
          {
            internalType: "bytes32",
            name: "_guid",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "_message",
            type: "bytes"
          },
          {
            internalType: "address",
            name: "_executor",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "_extraData",
            type: "bytes"
          }
        ],
        name: "lzReceive",
        outputs: [],
        stateMutability: "payable",
        type: "function"
      },
      {
        inputs: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "uint32",
                    name: "srcEid",
                    type: "uint32"
                  },
                  {
                    internalType: "bytes32",
                    name: "sender",
                    type: "bytes32"
                  },
                  {
                    internalType: "uint64",
                    name: "nonce",
                    type: "uint64"
                  }
                ],
                internalType: "struct Origin",
                name: "origin",
                type: "tuple"
              },
              {
                internalType: "uint32",
                name: "dstEid",
                type: "uint32"
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address"
              },
              {
                internalType: "bytes32",
                name: "guid",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256"
              },
              {
                internalType: "address",
                name: "executor",
                type: "address"
              },
              {
                internalType: "bytes",
                name: "message",
                type: "bytes"
              },
              {
                internalType: "bytes",
                name: "extraData",
                type: "bytes"
              }
            ],
            internalType: "struct InboundPacket[]",
            name: "_packets",
            type: "tuple[]"
          }
        ],
        name: "lzReceiveAndRevert",
        outputs: [],
        stateMutability: "payable",
        type: "function"
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "uint32",
                name: "srcEid",
                type: "uint32"
              },
              {
                internalType: "bytes32",
                name: "sender",
                type: "bytes32"
              },
              {
                internalType: "uint64",
                name: "nonce",
                type: "uint64"
              }
            ],
            internalType: "struct Origin",
            name: "_origin",
            type: "tuple"
          },
          {
            internalType: "bytes32",
            name: "_guid",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "_message",
            type: "bytes"
          },
          {
            internalType: "address",
            name: "_executor",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "_extraData",
            type: "bytes"
          }
        ],
        name: "lzReceiveSimulate",
        outputs: [],
        stateMutability: "payable",
        type: "function"
      },
      {
        inputs: [],
        name: "msgInspector",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint32",
            name: "",
            type: "uint32"
          },
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32"
          }
        ],
        name: "nextNonce",
        outputs: [
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "oApp",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "oAppVersion",
        outputs: [
          {
            internalType: "uint64",
            name: "senderVersion",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "receiverVersion",
            type: "uint64"
          }
        ],
        stateMutability: "pure",
        type: "function"
      },
      {
        inputs: [],
        name: "oftVersion",
        outputs: [
          {
            internalType: "bytes4",
            name: "interfaceId",
            type: "bytes4"
          },
          {
            internalType: "uint64",
            name: "version",
            type: "uint64"
          }
        ],
        stateMutability: "pure",
        type: "function"
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint32",
            name: "eid",
            type: "uint32"
          }
        ],
        name: "peers",
        outputs: [
          {
            internalType: "bytes32",
            name: "peer",
            type: "bytes32"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "preCrime",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "uint32",
                name: "dstEid",
                type: "uint32"
              },
              {
                internalType: "bytes32",
                name: "to",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "amountLD",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "minAmountLD",
                type: "uint256"
              },
              {
                internalType: "bytes",
                name: "extraOptions",
                type: "bytes"
              },
              {
                internalType: "bytes",
                name: "composeMsg",
                type: "bytes"
              },
              {
                internalType: "bytes",
                name: "oftCmd",
                type: "bytes"
              }
            ],
            internalType: "struct SendParam",
            name: "_sendParam",
            type: "tuple"
          }
        ],
        name: "quoteOFT",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "minAmountLD",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "maxAmountLD",
                type: "uint256"
              }
            ],
            internalType: "struct OFTLimit",
            name: "oftLimit",
            type: "tuple"
          },
          {
            components: [
              {
                internalType: "int256",
                name: "feeAmountLD",
                type: "int256"
              },
              {
                internalType: "string",
                name: "description",
                type: "string"
              }
            ],
            internalType: "struct OFTFeeDetail[]",
            name: "oftFeeDetails",
            type: "tuple[]"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountSentLD",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "amountReceivedLD",
                type: "uint256"
              }
            ],
            internalType: "struct OFTReceipt",
            name: "oftReceipt",
            type: "tuple"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "uint32",
                name: "dstEid",
                type: "uint32"
              },
              {
                internalType: "bytes32",
                name: "to",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "amountLD",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "minAmountLD",
                type: "uint256"
              },
              {
                internalType: "bytes",
                name: "extraOptions",
                type: "bytes"
              },
              {
                internalType: "bytes",
                name: "composeMsg",
                type: "bytes"
              },
              {
                internalType: "bytes",
                name: "oftCmd",
                type: "bytes"
              }
            ],
            internalType: "struct SendParam",
            name: "_sendParam",
            type: "tuple"
          },
          {
            internalType: "bool",
            name: "_payInLzToken",
            type: "bool"
          }
        ],
        name: "quoteSend",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "lzTokenFee",
                type: "uint256"
              }
            ],
            internalType: "struct MessagingFee",
            name: "msgFee",
            type: "tuple"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "uint32",
                name: "dstEid",
                type: "uint32"
              },
              {
                internalType: "bytes32",
                name: "to",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "amountLD",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "minAmountLD",
                type: "uint256"
              },
              {
                internalType: "bytes",
                name: "extraOptions",
                type: "bytes"
              },
              {
                internalType: "bytes",
                name: "composeMsg",
                type: "bytes"
              },
              {
                internalType: "bytes",
                name: "oftCmd",
                type: "bytes"
              }
            ],
            internalType: "struct SendParam",
            name: "_sendParam",
            type: "tuple"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "lzTokenFee",
                type: "uint256"
              }
            ],
            internalType: "struct MessagingFee",
            name: "_fee",
            type: "tuple"
          },
          {
            internalType: "address",
            name: "_refundAddress",
            type: "address"
          }
        ],
        name: "send",
        outputs: [
          {
            components: [
              {
                internalType: "bytes32",
                name: "guid",
                type: "bytes32"
              },
              {
                internalType: "uint64",
                name: "nonce",
                type: "uint64"
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "nativeFee",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "lzTokenFee",
                    type: "uint256"
                  }
                ],
                internalType: "struct MessagingFee",
                name: "fee",
                type: "tuple"
              }
            ],
            internalType: "struct MessagingReceipt",
            name: "msgReceipt",
            type: "tuple"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountSentLD",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "amountReceivedLD",
                type: "uint256"
              }
            ],
            internalType: "struct OFTReceipt",
            name: "oftReceipt",
            type: "tuple"
          }
        ],
        stateMutability: "payable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_delegate",
            type: "address"
          }
        ],
        name: "setDelegate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "uint32",
                name: "eid",
                type: "uint32"
              },
              {
                internalType: "uint16",
                name: "msgType",
                type: "uint16"
              },
              {
                internalType: "bytes",
                name: "options",
                type: "bytes"
              }
            ],
            internalType: "struct EnforcedOptionParam[]",
            name: "_enforcedOptions",
            type: "tuple[]"
          }
        ],
        name: "setEnforcedOptions",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_msgInspector",
            type: "address"
          }
        ],
        name: "setMsgInspector",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint32",
            name: "_eid",
            type: "uint32"
          },
          {
            internalType: "bytes32",
            name: "_peer",
            type: "bytes32"
          }
        ],
        name: "setPeer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_preCrime",
            type: "address"
          }
        ],
        name: "setPreCrime",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [],
        name: "sharedDecimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "token",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address"
          }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }
    ]
  }

  export default data;