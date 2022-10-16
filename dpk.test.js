const { deterministicPartitionKey } = require("./dpk_refactor");
const {createSha3512Hash} = require("./utils");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the key by creating hash from the event data", () => {
    const event = {'test':1}
    const expectedPartitionKey = createSha3512Hash(event)
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe(expectedPartitionKey);
  });

  // Not sure its actually valid func but looks like a bug in case partitionKey is not of string type
  it("Returns the key by creating hash from the partitionKey when type is obj ", () => {
    const event = {'partitionKey':{}}
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe("{}");
  });

  it("Returns the same key when length is less than MAX_PARTITION_KEY_LENGTH", () => {
    const event = {'partitionKey':"1"}
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe("1");
  });

  it("Returns the same key when length is equal to MAX_PARTITION_KEY_LENGTH", () => {
    const key = 'a'.repeat(256)
    const event = {'partitionKey':key}
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe(key);
  });

  it("Returns the truncated key when length is greater than MAX_PARTITION_KEY_LENGTH", () => {
    const key = 'a'.repeat(257)
    const event = {'partitionKey':key}
    const expectedPartitionKey = createSha3512Hash(key)
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe(expectedPartitionKey);
  });
});


