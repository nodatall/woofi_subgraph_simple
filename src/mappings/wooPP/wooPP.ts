import { ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts";

export function handleWooPPV2WooSwap_2(event: WooPPV2WooSwap_2): void {
    handleWooSwap(
        event, event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount, event.params.from,
        event.params.swapVol, event.params.swapFee, false
    );
    handleWooPPV2WooSwapRebateTo(event, event.params.swapFee, event.params.rebateTo);
}
