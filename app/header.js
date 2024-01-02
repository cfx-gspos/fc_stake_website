const MAINNET ={
  url: 'https://main.confluxrpc.com',
  networkId: 1029,
  poolAddress: 'cfx:acbvy42ajnwz5kzpm5an9yz0uwm04ab2y2huhvvrkn',
  scanURL: 'https://confluxscan.io',
  nftAddress: 'cfxtest:achnjxz9rhvct9gsu87n54yept6zn9znt2mem6nmva',
  eSpaceAddress: '0xad3b585bb905fc06d64520bf1847022d06cf8844',
  eSpaceRpc: 'https://evm.confluxrpc.com',
  eNetId: 1030,
}


const TESTNET = {
  url: 'https://test.confluxrpc.com',
  networkId: 1,
  poolAddress: 'cfxtest:acg3079bzpe754w6tfdagyxhs79v6y2pxpj1aj4jav',
  scanURL: 'https://testnet.confluxscan.io',
  nftAddress: 'cfxtest:achnjxz9rhvct9gsu87n54yept6zn9znt2mem6nmva',
  eSpaceAddress: '0x13cCf9788ADCf0478CFBA9b7D54134f2693f1C58',
  eSpaceRpc: 'https://evmtestnet.confluxrpc.com',
  eNetId: 71,
}

/* const TESTNET = {
  url: 'https://net8888cfx.confluxrpc.com',
  networkId: 8888,
  poolAddress: '0x8e38f187da01d54936142a5f209d05c7e85fadff',
  scanURL: 'https://net8888cfx.confluxscan.net',
  nftAddress: "",
  eSpaceAddress: '0x295b281c3Ee3382C48f01E7bec841d85981cB7a3',
  eSpaceRpc: 'http://net8889eth.confluxrpc.com',
  eNetId: 8889,
} */

let CURRENT = MAINNET;

var spaceStore = Vue.reactive({
  value: 'Core'
});

const configStore = Vue.reactive({
  value: CURRENT,  // 默认值
});

const navbarOption = {
  data() {
    return {
      space: spaceStore,
      config: configStore,
    }
  },

  methods: {
    changeSpace(space) {
      this.space.value = space;
    }
  }
};

Vue.createApp(navbarOption).mount('#navbar');