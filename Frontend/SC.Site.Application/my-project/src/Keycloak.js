import Keycloak from "keycloak-js";
const keycloakConf = {
    realm: "applifront",
    clientId: "scapplifront",
    url: "http://scssokeycloak:8080/auth"
};
const keycloak = new Keycloak(keycloakConf);
export default keycloak;