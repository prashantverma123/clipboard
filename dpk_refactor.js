const {createSha3512Hash} = require("./utils");

exports.deterministicPartitionKey = (event) => {
    const TRIVIAL_PARTITION_KEY = "0";
    const MAX_PARTITION_KEY_LENGTH = 256;
    let candidate = TRIVIAL_PARTITION_KEY;

    if (event) {
        candidate = event?.partitionKey || createSha3512Hash(JSON.stringify(event));
    }

    if (typeof candidate !== "string") {
        candidate = JSON.stringify(candidate);
    }

    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
        candidate =createSha3512Hash(candidate);
    }
    return candidate;
};