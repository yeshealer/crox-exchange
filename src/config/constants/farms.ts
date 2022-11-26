import contracts from "./contracts";
import { FarmConfig, QuoteToken } from "./types";

const farms: FarmConfig[] = [
  {
    pid: 0,
    pidv1: 12,
    risk: 5,
    lpSymbol: "BNB-CROX LP",
    lpAddresses: {
      97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
      56: "0xE38e899cc99ddeA9737e06f0A22046d0CA904D70",
    },
    tokenSymbol: "CROX",
    tokenAddresses: {
      97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
      56: "0x2c094F5A7D1146BB93850f629501eB749f6Ed491",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    title: "",
  },
  {
    pid: 1,
    pidv1: 13,
    risk: 5,
    lpSymbol: "BUSD-CROX LP",
    lpAddresses: {
      97: "",
      56: "0xe1d5c90e94d73625628b2E6B7AEAbF5f1c504872",
    },
    tokenSymbol: "CROX",
    tokenAddresses: {
      97: "",
      56: "0x2c094F5A7D1146BB93850f629501eB749f6Ed491",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    title: "",
  },
  {
    pid: 23,
    risk: 3,
    lpSymbol: "CROX-USDC LP",
    lpAddresses: {
      97: "",
      56: "0x62b8A593fcd8d743607Da8cA7ed05b1309298226",
    },
    tokenSymbol: "CROX",
    tokenAddresses: {
      97: "0x7F511033cFDa8dF0189f9c9BEaD981ae0496901C",
      56: "0x2c094F5A7D1146BB93850f629501eB749f6Ed491",
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
    title: "",
  },
  {
    pid: 2,
    pidv1: 14,
    risk: 3,
    lpSymbol: "CROX-CAKE LP",
    lpAddresses: {
      97: "",
      56: "0x2B64133686cC7297df941E972a90cEB2c957d7cb",
    },
    tokenSymbol: "CROX",
    tokenAddresses: {
      97: "",
      56: "0x2c094f5a7d1146bb93850f629501eb749f6ed491",
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    title: "",
  },
  {
    pid: 3,

    pidv1: 15,
    risk: 1,
    lpSymbol: "RASTA-CROX LP",
    lpAddresses: {
      97: "",
      56: "0x068025Cb947C59684D298F9ad8FE475E3944ae9f",
    },
    tokenSymbol: "RASTA",
    tokenAddresses: {
      97: "",
      56: "0xe3e8cc42da487d1116d26687856e9fb684817c52",
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    title: "",
  },
  {
    pid: 4,
    pidv1: 16,
    risk: 2,
    lpSymbol: "BNB-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    },
    tokenSymbol: "BNB",
    tokenAddresses: contracts.wbnb,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    title: "",
  },
  {
    pid: 12,
    risk: 5,
    lpSymbol: "CROX-USDT LP",
    lpAddresses: {
      97: "",
      56: "0x9CEEF5164081545C1989CD621C1f1d48E81Ba18A",
    },
    tokenSymbol: "CROX",
    tokenAddresses: {
      97: "",
      56: "0x2c094F5A7D1146BB93850f629501eB749f6Ed491",
    },
    quoteTokenSymbol: QuoteToken.UST,
    quoteTokenAdresses: contracts.usdt,
    title: "",
  },
  {
    pid: 5,
    pidv1: 17,
    risk: 2,
    lpSymbol: "BTCB-BNB LP",
    lpAddresses: {
      97: "",
      56: "0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082",
    },
    tokenSymbol: "BTCB",
    tokenAddresses: {
      97: "",
      56: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    title: "",
  },
  {
    pid: 6,
    pidv1: 18,
    risk: 2,
    lpSymbol: "ETH-BNB LP",
    lpAddresses: {
      97: "",
      56: "0x74E4716E431f45807DCF19f284c7aA99F18a4fbc",
    },
    tokenSymbol: "ETH",
    tokenAddresses: {
      97: "",
      56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    title: "",
  },
  {
    pid: 7,
    pidv1: 19,
    risk: 2,
    lpSymbol: "USDT-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x7EFaEf62fDdCCa950418312c6C91Aef321375A00",
    },
    tokenSymbol: "USDT",
    tokenAddresses: {
      97: "",
      56: "0x55d398326f99059ff775485246999027b3197955",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    title: "",
  },
  {
    pid: 8,
    pidv1: 20,
    risk: 1,
    lpSymbol: "DAI-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489",
    },
    tokenSymbol: "DAI",
    tokenAddresses: {
      97: "",
      56: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    title: "",
  },
  {
    pid: 9,
    pidv1: 21,
    risk: 1,
    lpSymbol: "CAKE-BNB LP",
    lpAddresses: {
      97: "",
      56: "0x0eD7e52944161450477ee417DE9Cd3a859b14fD0",
    },
    tokenSymbol: "CAKE",
    tokenAddresses: {
      97: "",
      56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    title: "",
  },
  {
    pid: 10,
    pidv1: 22,
    risk: 1,
    lpSymbol: "CAKE-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x804678fa97d91B974ec2af3c843270886528a9E6",
    },
    tokenSymbol: "CAKE",
    tokenAddresses: {
      97: "",
      56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    title: "",
  },
  {
    pid: 11,
    pidv1: 23,
    risk: 1,
    lpSymbol: "DOT-BNB LP",
    lpAddresses: {
      97: "",
      56: "0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF",
    },
    tokenSymbol: "DOT",
    tokenAddresses: {
      97: "",
      56: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    title: "",
  },
  // {
  //   pid: 12,
  //   risk: 5,
  //   lpSymbol: "CROX-USDT LP",
  //   lpAddresses: {
  //     97: "",
  //     56: "0x9CEEF5164081545C1989CD621C1f1d48E81Ba18A",
  //   },
  //   tokenSymbol: "CROX",
  //   tokenAddresses: {
  //     97: "",
  //     56: "0x2c094F5A7D1146BB93850f629501eB749f6Ed491",
  //   },
  //   quoteTokenSymbol: QuoteToken.UST,
  //   quoteTokenAdresses: contracts.usdt,
  //   title: "",
  // },
  {
    pid: 13,
    risk: 5,
    lpSymbol: "DOGE-BNB LP",
    lpAddresses: {
      97: "",
      56: "0xac109C8025F272414fd9e2faA805a583708A017f",
    },
    tokenSymbol: "DOGE",
    tokenAddresses: {
      97: "",
      56: "0xba2ae424d960c26247dd6c32edc70b295c744c43",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    title: "",
  },
  {
    pid: 14,
    risk: 3,
    lpSymbol: "ADA-BNB LP",
    lpAddresses: {
      97: "",
      56: "0x28415ff2C35b65B9E5c7de82126b4015ab9d031F",
    },
    tokenSymbol: "ADA",
    tokenAddresses: {
      97: "",
      56: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    title: "",
  },
  // {
  //   pid: 15,
  //   risk: 1,
  //   lpSymbol: 'RASTA-CROX LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x068025Cb947C59684D298F9ad8FE475E3944ae9f',
  //   },
  //   tokenSymbol: 'RASTA',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe3e8cc42da487d1116d26687856e9fb684817c52',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   title: 'Mr. Lion v2',
  // },
  // {
  //   pid: 16,
  //   risk: 2,
  //   lpSymbol: 'BNB-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //   },
  //   tokenSymbol: 'BNB',
  //   tokenAddresses: contracts.wbnb,
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   title: 'Mr. CZ v2',
  // },
  // {
  //   pid: 17,
  //   risk: 2,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   title: 'Mr. Satoshi v2',
  // },
  // {
  //   pid: 18,
  //   risk: 2,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   title: 'Mr. Vitalik v2',
  // },
  // {
  //   pid: 19,
  //   risk: 2,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   title: 'Mr. Crabs v2',
  // },
  // {
  //   pid: 20,
  //   risk: 1,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   title: 'Mr. Stingy v2',
  // },
  // {
  //   pid: 21,
  //   risk: 1,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   title: 'Birthday Party v2',
  // },
  // {
  //   pid: 22,
  //   risk: 1,
  //   lpSymbol: 'CAKE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x804678fa97d91B974ec2af3c843270886528a9E6',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   title: 'Wedding v2',
  // },
  // {
  //   pid: 23,
  //   risk: 1,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   title: 'Polka Dance v2',
  // },
];

export default farms;
