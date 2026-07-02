const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");

const client = new SecretsManagerClient({
  region: "us-east-1",
});

async function getSecret() {
  try {
    const command = new GetSecretValueCommand({
      SecretId: "secret",
    });

    const response = await client.send(command);

    if (response.SecretString) {
      return JSON.parse(response.SecretString);
    }

    throw new Error("Secret is empty");
  } catch (err) {
    console.error("Unable to fetch secret");
    console.error(err);
    throw err;
  }
}

module.exports = getSecret;
