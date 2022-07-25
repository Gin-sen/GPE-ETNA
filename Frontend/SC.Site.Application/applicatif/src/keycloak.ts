import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak({
  url: 'https://scssokeycloak:8443/auth',
  realm: 'applifront',
  clientId: 'scapplifront',
});

export default keycloak;