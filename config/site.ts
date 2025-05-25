export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "WEB3导航",
  description: "一个WEB3的导航网站",
  mainNav: [],
  links: {
    twitter: "https://x.com/neilljun",
    github: "https://github.com/neilljun"
  }
}

export interface NavLink {
  /** 站点图标 */
  icon: string
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData = [
	{
		title: "Web3钱包",
		items: [
			{
				icon: "/icons/metamask.png",
				title: "MetaMask",
				desc: "以太坊生态最流行的浏览器插件钱包",
				link: "https://metamask.io"
			},
			{
				icon: "/icons/phantom.png",
				title: "Phantom",
				desc: "支持多个主流链钱包(SOL,ETH,BTC,SUI)等",
				link: "https://phantom.app"
			},
			{
				icon: "/icons/keplr.png",
				title: "Keplr",
				desc: "支持Cosmos生态系列钱包",
				link: "https://www.keplr.app"
			},
			{
				icon: "/icons/trust.png",
				title: "Trust Wallet",
				desc: "多链的移动端/浏览器钱包",
				link: "https://trustwallet.com"
			},
			{
				icon: "/icons/rabby.png",
				title: "Rabby Wallet",
				desc: "专为 DeFi 用户设计的浏览器钱包，支持多链自动切换",
				link: "https://rabby.io"
			},
			{
				icon: "/icons/coinbase.png",
				title: "Coinbase Wallet",
				desc: "Coinbase 推出的非托管钱包，支持移动端和浏览器插件",
				link: "https://www.coinbase.com/wallet"
			},
			{
				icon: "/icons/okxwallet.png",
				title: "OKX Web3 Wallet",
				desc: "OKX 推出的 Web3 钱包，支持 EVM、BTC、Solana、Cosmos 等多链",
				link: "https://www.okx.com/web3"
			},
			{
				icon: "/icons/ledger.png",
				title: "Ledger",
				desc: "知名硬件钱包，支持多链，安全性极高",
				link: "https://www.ledger.com"
			},
			{
				icon: "/icons/onekey.png",
				title: "OneKey",
				desc: "国产硬件钱包品牌，也提供软件钱包版本，支持多链",
				link: "https://onekey.so"
			},
			{
				icon: "https://web3.bitget.com/favicon.ico",
				title: "Bitget Wallet",
				desc: "多链钱包，支持内置 Swap、NFT、DeFi 等功能",
				link: "https://web3.bitget.com"
			},
		]
	},
	{
		title: "交易平台",
		items: [
			{
				icon: "/icons/binance.png",
				title: "Binance",
				desc: "全球最大中心化交易所",
				link: "https://www.binance.com"
			},
			{
				icon: "https://www.okx.com/favicon.ico",
				title: "OKX",
				desc: "多功能交易平台，支持 CEX + DEX",
				link: "https://www.okx.com"
			},
			{
				icon: "https://www.coinbase.com/favicon.ico",
				title: "Coinbase",
				desc: "面向全球用户的合规 CEX，支持法币交易",
				link: "https://www.coinbase.com"
			},
			{
				icon: "https://www.bybit.com/favicon.ico",
				title: "Bybit",
				desc: "衍生品交易活跃的中心化平台，也支持现货和 DEX",
				link: "https://www.bybit.com"
			},
			{
				icon: "https://www.bitget.com/favicon.ico",
				title: "Bitget",
				desc: "新兴合约及现货交易平台，主打跟单交易",
				link: "https://www.bitget.com"
			},
			{
				icon: "https://app.uniswap.org/favicon.ico",
				title: "Uniswap",
				desc: "以太坊上最大的去中心化交易所（AMM 模式）",
				link: "https://uniswap.org"
			},
			{
				icon: "https://pancakeswap.finance/favicon.ico",
				title: "PancakeSwap",
				desc: "BNB Chain 上的热门 DEX",
				link: "https://pancakeswap.finance"
			},
			{
				icon: "https://app.sushi.com/favicon.ico",
				title: "SushiSwap",
				desc: "多链支持的 DEX，Uniswap 的早期分叉",
				link: "https://sushi.com"
			},
			{
				icon: "https://traderjoexyz.com/favicon.png",
				title: "Trader Joe",
				desc: "Avalanche 上最活跃的去中心化交易平台",
				link: "https://traderjoexyz.com"
			},
			{
				icon: "https://app.dodoex.io/favicon.ico",
				title: "DODO",
				desc: "创新的主动做市商 (PMM) 模型 DEX，支持跨链",
				link: "https://dodoex.io"
			},
			{
				icon: "https://osmosis.zone/favicon.ico",
				title: "Osmosis",
				desc: "Cosmos 生态内最大 DEX，支持 IBC 多链交互",
				link: "https://osmosis.zone"
			},
			{
				icon: "https://jup.ag/favicon.ico",
				title: "Jupiter",
				desc: "Solana 上的聚合类 DEX，汇总多个流动性来源",
				link: "https://jup.ag"
			},
			{
				icon: "/icons/hype.png",
				title: "Hypeliquid",
				desc: "无需许可的 L2 上的原生永续合约 DEX",
				link: "https://hyperfoundation.org/"
			}
		]
	},
	{
		title: "区块浏览器",
		items: [
			{
				icon: "https://etherscan.io/images/favicon3.ico",
				title: "Etherscan",
				desc: "以太坊区块链浏览器",
				link: "https://etherscan.io"
			},
			{
				icon: "https://bscscan.com/images/favicon.ico",
				title: "BscScan",
				desc: "BNB Chain 浏览器",
				link: "https://bscscan.com"
			},
			{
				icon: "https://polygonscan.com/images/favicon.ico",
				title: "PolygonScan",
				desc: "Polygon (MATIC) 网络区块浏览器",
				link: "https://polygonscan.com"
			},
			{
				icon: "https://arbiscan.io/images/favicon.ico",
				title: "Arbiscan",
				desc: "Arbitrum 网络浏览器",
				link: "https://arbiscan.io"
			},
			{
				icon: "https://optimistic.etherscan.io/images/favicon.ico",
				title: "Optimistic Etherscan",
				desc: "Optimism 网络浏览器",
				link: "https://optimistic.etherscan.io"
			},
			{
				icon: "https://solscan.io/favicon.ico",
				title: "Solscan",
				desc: "Solana 区块链浏览器",
				link: "https://solscan.io"
			},
			{
				icon: "/icons/sui.png",
				title: "Sui Explorer",
				desc: "Sui 区块链浏览器",
				link: "https://explorer.sui.io"
			},
			{
				icon: "https://explorer.aptoslabs.com/favicon.ico",
				title: "Aptos Explorer",
				desc: "Aptos 官方区块链浏览器",
				link: "https://explorer.aptoslabs.com"
			},
			{
				icon: "https://www.mintscan.io/favicon.ico",
				title: "Mintscan",
				desc: "Cosmos Hub 生态浏览器，支持多个基于cosmos的区块链",
				link: "https://www.mintscan.io"
			},
			{
				icon: "https://basescan.org/images/favicon.ico",
				title: "BaseScan",
				desc: "Base（Coinbase L2）官方浏览器",
				link: "https://basescan.org"
			},
			{
				icon: "https://celoscan.io/images/favicon.ico",
				title: "CeloScan",
				desc: "Celo 网络区块浏览器",
				link: "https://celoscan.io"
			},
			{
				icon: "https://explorer.zksync.io/favicon.ico",
				title: "zkSync Explorer",
				desc: "zkSync Era Layer 2 区块浏览器",
				link: "https://explorer.zksync.io"
			},
		]
	},
	{
		title: "DeFi 协议",
		items: [
			{
				icon: "/icons/aave.png",
				title: "Aave",
				desc: "去中心化借贷协议",
				link: "https://aave.com"
			},
			{
				icon: "/icons/compound.png",
				title: "Compound",
				desc: "基于以太坊的借贷协议",
				link: "https://compound.finance"
			},
			{
				icon: "/icons/lido.jpeg",
				title: "Lido",
				desc: "流动性质押解决方案",
				link: "https://lido.fi"
			}
		]
	},
	{
		title: "NFT 平台",
		items: [
			{
				icon: "/icons/opensea.png",
				title: "OpenSea",
				desc: "全球最大 NFT 交易平台",
				link: "https://opensea.io"
			},
			{
				icon: "/icons/blur.png",
				title: "Blur",
				desc: "专业级 NFT 交易市场",
				link: "https://blur.io"
			},
			{
				icon: "/icons/magiceden.png",
				title: "Magic Eden",
				desc: "Solana 上的 NFT 平台",
				link: "https://magiceden.io"
			}
		]
	},
	{
		title: "开发工具",
		items: [
			{
				icon: "https://www.alchemy.com/favicon.ico",
				title: "Alchemy",
				desc: "区块链基础设施开发平台",
				link: "https://www.alchemy.com"
			},
			{
				icon: "/icons/infura.png",
				title: "Infura",
				desc: "提供可靠的以太坊和 IPFS 接口",
				link: "https://infura.io"
			},
			{
				icon: "https://thirdweb.com/favicon.ico",
				title: "Thirdweb",
				desc: "Web3 应用开发工具",
				link: "https://thirdweb.com"
			}
		]
	},
	{
		title: "数据分析",
		items: [
			{
				icon: "https://dune.com/favicon.ico",
				title: "Dune",
				desc: "链上数据可视化查询平台",
				link: "https://dune.com"
			},
			{
				icon: "https://tokenterminal.com/favicon.ico",
				title: "Token Terminal",
				desc: "Web3 财务数据分析",
				link: "https://tokenterminal.com"
			},
			{
				icon: "/icons/defillama.png",
				title: "DefiLlama",
				desc: "DeFi 数据和 TVL 分析",
				link: "https://defillama.com"
			}
		]
	}
];
