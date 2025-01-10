const {
    struct,
    s32,
    u8,
    u16,
    seq,
    blob,
    Layout,
    bits,
    u32,
    publicKey,
    uint64,
    u64,
    uint128,
    u128,
    option,
} = require("./layout-base");

const JITO_VAULT = struct([
    u8("discriminator"),
    publicKey("base"),
    publicKey("vrtMint"),
    publicKey("supportedMint"),
    u64("vrtSupply"),
    u64("tokensDeposited"),
    u64("depositCapacity"),
    struct(DELEGATION_STATE),
    u64(additionalAssetsNeedUnstaking),
    u64(vrtEnqueuedForCooldownAmount),
    u64(vrtCoolingDownAmount),
    u64(vrtReadyToClaimAmount),
    publickKey(admin),
    publicKey(delegationAdmin),
    publicKey(operatorAdmin),
    publicKey(ncnAdmin),
    publicKey(slasherAdmin),
    publicKey(capacityAdmin),
    publicKey(feeAdmin),
    publicKey(delegateAssetAdmin),
    publicKey(feeWallet),
    publicKey(mintBurnAdmin),
    publicKey(metadataAdmin),
    u64(vaultIndex),
    u64(ncnCount),
    u64(operatorCount),
    u64(slasherCount),
    u64(lastFeeChangeSlot),
    u64(lastFullStateUpdateSlot),
    u16(depositFeeBps),
    u16(withdrawalFeeBps),
    u16(nextWithdrawalFeeBps),
    u16(rewardFeeBps),
    u16(programFeeBps),
    u16(bump),
    Boolean(isPaused),
    u64(lastStartStateUpdateSlot),
    Array(251),
]);

const DELEGATION_STATE = [

]

const parseSanctumLstStateList = (account) => {
    const { data, space } = account;
    const buffer = Buffer.from(data);
    const length = space / 80;
    return seq(
        JITO_VAULT,
        length,
        "lstStateList"
    ).decode(buffer);
}


module.exports = {
    parseSanctumLstStateList,
};