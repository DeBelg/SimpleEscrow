import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
    chain,
    configureChains,
    createClient,
    WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';



export const { chains, provider } = configureChains(
    [chain.goerli],
    [
        alchemyProvider({ apiKey: process.env.aSTaMSyHdamzrPFXl91kv8nsvlYp_843 }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'simple-escrow',
    chains
});

export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})
