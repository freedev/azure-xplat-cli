// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['successbricks.cleardb', 'microsoft.insights'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.ApiManagement\",\"namespace\":\"Microsoft.ApiManagement\",\"resourceTypes\":[{\"resourceType\":\"service\",\"locations\":[\"North Central US\",\"East US\",\"West US\",\"North Europe\",\"West Europe\",\"East Asia\"],\"apiVersions\":[\"2014-02-14\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.AppService\",\"namespace\":\"Microsoft.AppService\",\"resourceTypes\":[{\"resourceType\":\"apiapps\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-alpha\"]},{\"resourceType\":\"appIdentities\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-alpha\"]},{\"resourceType\":\"gateways\",\"locations\":[\"East US\",\"West US\",\"South Central US\",\"North Europe\",\"East Asia\",\"Japan East\",\"West Europe\",\"Southeast Asia\",\"Japan West\",\"North Central US\",\"Central US\",\"Brazil South\",\"East US 2\",\"Australia Southeast\",\"Australia East\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-alpha\"]},{\"resourceType\":\"deploymenttemplates\",\"locations\":[],\"apiVersions\":[\"2015-03-01-preview\",\"2015-03-01-alpha\"]}],\"registrationState\":\"Unregistering\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/microsoft.batch\",\"namespace\":\"microsoft.batch\",\"resourceTypes\":[{\"resourceType\":\"batchAccounts\",\"locations\":[\"West US\",\"East US\",\"East US 2\",\"North Central US\",\"South Central US\",\"Central US\",\"West Europe\",\"North Europe\",\"East Asia\",\"Southeast Asia\",\"Japan West\",\"Japan East\",\"Brazil South\"],\"apiVersions\":[\"2014-05-01-privatepreview\"]}],\"registrationState\":\"Unregistered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/microsoft.cache\",\"namespace\":\"microsoft.cache\",\"resourceTypes\":[{\"resourceType\":\"Redis\",\"locations\":[\"North Central US\",\"South Central US\",\"Central US\",\"West Europe\",\"North Europe\",\"West US\",\"East US\",\"East US 2\",\"Japan East\",\"Japan West\",\"Brazil South\",\"Southeast Asia\",\"East Asia\",\"Australia East\",\"Australia Southeast\"],\"apiVersions\":[\"2014-04-01-preview\",\"2014-04-01-alpha\",\"2014-04-01\"]},{\"resourceType\":\"checkNameAvailability\",\"locations\":[],\"apiVersions\":[\"2014-04-01-preview\",\"2014-04-01-alpha\"]},{\"resourceType\":\"Redis/metrics\",\"locations\":[\"North Central US\",\"South Central US\",\"East US\",\"East US 2\",\"West US\",\"Central US\",\"East Asia\",\"Southeast Asia\",\"North Europe\",\"West Europe\",\"Japan East\",\"Japan West\",\"Brazil South\",\"Australia East\",\"Australia Southeast\"],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"Redis/metricDefinitions\",\"locations\":[\"North Central US\",\"South Central US\",\"East US\",\"East US 2\",\"West US\",\"Central US\",\"East Asia\",\"Southeast Asia\",\"North Europe\",\"West Europe\",\"Japan East\",\"Japan West\",\"Brazil South\",\"Australia Southeast\",\"Australia East\"],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"Redis/diagnosticSettings\",\"locations\":[\"East US\",\"East US 2\",\"North Central US\",\"North Europe\",\"West Europe\",\"Brazil South\",\"West US\",\"Central US\",\"South Central US\",\"Japan East\",\"Japan West\",\"East Asia\",\"Southeast Asia\",\"Australia East\",\"Australia Southeast\"],\"apiVersions\":[\"2014-04-01\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/microsoft.insights\",\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"components\",\"locations\":[\"Central US\",\"Central US (Stage)\"],\"apiVersions\":[\"2014-08-01\",\"2014-07-31-beta\",\"2014-07-31-alpha\",\"2014-07-01-01dp\",\"2014-04-01\",\"2014-04\",\"2014-03-31-beta\",\"2014-03-31-alpha\"]},{\"resourceType\":\"webtests\",\"locations\":[\"Central US\",\"Central US (Stage)\"],\"apiVersions\":[\"2014-08-01\",\"2014-07-31-beta\",\"2014-07-31-alpha\",\"2014-04-01\",\"2014-04\",\"2014-03-31-beta\",\"2014-03-31-alpha\"]},{\"resourceType\":\"queries\",\"locations\":[\"Central US\"],\"apiVersions\":[\"2014-08-01\",\"2014-07-31-beta\",\"2014-07-31-alpha\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"West US\",\"East US\",\"North Europe\",\"West Europe\",\"East Asia\",\"Southeast Asia\",\"Japan East\",\"Japan West\",\"North Central US\",\"South Central US\",\"East US 2\",\"Central US\",\"Australia East\",\"Australia Southeast\"],\"apiVersions\":[\"2014-04-01\",\"2014-04\"]},{\"resourceType\":\"autoscalesettings\",\"locations\":[\"West US\",\"East US\",\"North Europe\",\"West Europe\",\"East Asia\",\"Southeast Asia\",\"Japan East\",\"Japan West\",\"North Central US\",\"South Central US\",\"East US 2\",\"Central US\",\"Australia East\",\"Australia Southeast\"],\"apiVersions\":[\"2014-04-01\",\"2014-04\"]},{\"resourceType\":\"eventtypes\",\"locations\":[],\"apiVersions\":[\"2014-11-01\",\"2014-04-01\",\"2014-04\"]},{\"resourceType\":\"metricDefinitionNamespace\",\"locations\":[],\"apiVersions\":[\"2014-01\"]},{\"resourceType\":\"metricDefinitions\",\"locations\":[],\"apiVersions\":[\"2014-04-01\",\"2014-01\"]},{\"resourceType\":\"metricNamespace\",\"locations\":[],\"apiVersions\":[\"2014-01\"]},{\"resourceType\":\"metrics\",\"locations\":[],\"apiVersions\":[\"2014-04-01\",\"2014-01\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2014-06-01\",\"2014-04-01\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.KeyVault\",\"namespace\":\"Microsoft.KeyVault\",\"resourceTypes\":[{\"resourceType\":\"vaults\",\"locations\":[\"North Central US\",\"East US\",\"North Europe\",\"West Europe\",\"East Asia\",\"Southeast Asia\",\"East US 2\",\"Central US\",\"South Central US\",\"West US\",\"Japan East\",\"Japan West\",\"Australia East\",\"Australia Southeast\",\"Brazil South\"],\"apiVersions\":[\"2014-12-19-preview\"]},{\"resourceType\":\"vaults/secrets\",\"locations\":[\"North Central US\",\"East US\",\"North Europe\",\"West Europe\",\"East Asia\",\"Southeast Asia\",\"East US 2\",\"Central US\",\"South Central US\",\"West US\",\"Japan East\",\"Japan West\",\"Australia East\",\"Australia Southeast\",\"Brazil South\"],\"apiVersions\":[\"2014-12-19-preview\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.OperationalInsights\",\"namespace\":\"Microsoft.OperationalInsights\",\"resourceTypes\":[{\"resourceType\":\"workspaces\",\"locations\":[\"East US\"],\"apiVersions\":[\"2014-11-10\",\"2014-10-10\"]},{\"resourceType\":\"storageInsightConfigs\",\"locations\":[],\"apiVersions\":[\"2014-10-10\"]},{\"resourceType\":\"linkTargets\",\"locations\":[\"East US\"],\"apiVersions\":[\"2014-10-10\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2014-11-10\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/microsoft.sql\",\"namespace\":\"microsoft.sql\",\"resourceTypes\":[{\"resourceType\":\"servers\",\"locations\":[\"Brazil South\",\"Central US\",\"East Asia\",\"East US\",\"East US 2\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"Southeast Asia\",\"West Europe\",\"West US\",\"Australia East\",\"Australia Southeast\"],\"apiVersions\":[]},{\"resourceType\":\"servers/databases\",\"locations\":[\"Brazil South\",\"Central US\",\"East Asia\",\"East US\",\"East US 2\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"Southeast Asia\",\"West Europe\",\"West US\",\"Australia East\",\"Australia Southeast\"],\"apiVersions\":[]},{\"resourceType\":\"servers/serviceObjectives\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/restorableDroppedDatabases\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/recoverableDatabases\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/import\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/importExportOperationResults\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/operationResults\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/firewallrules\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/databaseSecurityPolicies\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/databaseSecurityMetrics\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/auditingPolicies\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/databases/auditingPolicies\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/databases/connectionPolicies\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/databases/securityMetrics\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/databases/dataMaskingPolicies\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/databases/dataMaskingPolicies/rules\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/usages\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"servers/databases/metricDefinitions\",\"locations\":[\"North Central US\",\"South Central US\",\"East US\",\"East US 2\",\"West US\",\"Central US\",\"East Asia\",\"Southeast Asia\",\"Australia East\",\"Australia Southeast\",\"North Europe\",\"West Europe\",\"Japan East\",\"Japan West\",\"Brazil South\"],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"servers/databases/metrics\",\"locations\":[\"North Central US\",\"South Central US\",\"East US\",\"East US 2\",\"West US\",\"Central US\",\"East Asia\",\"Southeast Asia\",\"North Europe\",\"West Europe\",\"Japan East\",\"Japan West\",\"Brazil South\"],\"apiVersions\":[\"2014-04-01\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/microsoft.visualstudio\",\"namespace\":\"microsoft.visualstudio\",\"resourceTypes\":[{\"resourceType\":\"account\",\"locations\":[\"North Central US\",\"South Central US\",\"East US\",\"West US\",\"Central US\",\"North Europe\",\"West Europe\",\"East Asia\",\"Southeast Asia\",\"Japan East\",\"Japan West\",\"Brazil South\"],\"apiVersions\":[\"2014-04-01-preview\",\"2014-02-26\"]},{\"resourceType\":\"account/project\",\"locations\":[\"North Central US\",\"South Central US\",\"East US\",\"West US\",\"Central US\",\"North Europe\",\"West Europe\",\"East Asia\",\"Southeast Asia\",\"Japan East\",\"Japan West\",\"Brazil South\"],\"apiVersions\":[\"2014-04-01-preview\",\"2014-02-26\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Web\",\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"sites/extensions\",\"locations\":[\"Brazil South\",\"East Asia\",\"East US\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"West Europe\",\"West US\",\"Southeast Asia\",\"Central US\",\"East US 2\",\"MSFT West US\",\"MSFT East US\",\"MSFT East Asia\",\"MSFT North Europe\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\"],\"apiVersions\":[]},{\"resourceType\":\"sites/slots/extensions\",\"locations\":[\"Brazil South\",\"East Asia\",\"East US\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"West Europe\",\"West US\",\"Southeast Asia\",\"Central US\",\"East US 2\",\"MSFT West US\",\"MSFT East US\",\"MSFT East Asia\",\"MSFT North Europe\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\"],\"apiVersions\":[]},{\"resourceType\":\"sites/instances\",\"locations\":[\"Brazil South\",\"East Asia\",\"East US\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"West Europe\",\"West US\",\"Southeast Asia\",\"Central US\",\"East US 2\",\"MSFT West US\",\"MSFT East US\",\"MSFT East Asia\",\"MSFT North Europe\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\"],\"apiVersions\":[]},{\"resourceType\":\"sites/slots/instances\",\"locations\":[\"Brazil South\",\"East Asia\",\"East US\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"West Europe\",\"West US\",\"Southeast Asia\",\"Central US\",\"East US 2\",\"MSFT West US\",\"MSFT East US\",\"MSFT East Asia\",\"MSFT North Europe\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\"],\"apiVersions\":[]},{\"resourceType\":\"sites/instances/extensions\",\"locations\":[\"Brazil South\",\"East Asia\",\"East US\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"West Europe\",\"West US\",\"Southeast Asia\",\"Central US\",\"East US 2\",\"MSFT West US\",\"MSFT East US\",\"MSFT East Asia\",\"MSFT North Europe\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\"],\"apiVersions\":[]},{\"resourceType\":\"sites/slots/instances/extensions\",\"locations\":[\"Brazil South\",\"East Asia\",\"East US\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"West Europe\",\"West US\",\"Southeast Asia\",\"Central US\",\"East US 2\",\"MSFT West US\",\"MSFT East US\",\"MSFT East Asia\",\"MSFT North Europe\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\"],\"apiVersions\":[]},{\"resourceType\":\"publishingUsers\",\"locations\":[\"Brazil South\",\"East Asia\",\"East US\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"West Europe\",\"West US\",\"Southeast Asia\",\"Central US\",\"East US 2\",\"MSFT West US\",\"MSFT East US\",\"MSFT East Asia\",\"MSFT North Europe\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\"],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01-preview\",\"2014-04-01\"]},{\"resourceType\":\"ishostnameavailable\",\"locations\":[\"Brazil South\",\"East Asia\",\"East US\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"West Europe\",\"West US\",\"Southeast Asia\",\"Central US\",\"East US 2\",\"MSFT West US\",\"MSFT East US\",\"MSFT East Asia\",\"MSFT North Europe\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\"],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01-preview\",\"2014-04-01\"]},{\"resourceType\":\"sourceControls\",\"locations\":[\"Brazil South\",\"East Asia\",\"East US\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"West Europe\",\"West US\",\"Southeast Asia\",\"Central US\",\"East US 2\",\"MSFT West US\",\"MSFT East US\",\"MSFT East Asia\",\"MSFT North Europe\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\"],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01-preview\",\"2014-04-01\"]},{\"resourceType\":\"certificates\",\"locations\":[\"Brazil South\",\"East Asia\",\"East US\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"West Europe\",\"West US\",\"Southeast Asia\",\"Central US\",\"East US 2\",\"MSFT West US\",\"MSFT East US\",\"MSFT East Asia\",\"MSFT North Europe\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\"],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01-preview\",\"2014-04-01\"]},{\"resourceType\":\"serverFarms\",\"locations\":[\"Brazil South\",\"East Asia\",\"East US\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"West Europe\",\"West US\",\"Southeast Asia\",\"Central US\",\"East US 2\",\"MSFT West US\",\"MSFT East US\",\"MSFT East Asia\",\"MSFT North Europe\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\"],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01-preview\",\"2014-04-01\"]},{\"resourceType\":\"sites\",\"locations\":[\"Brazil South\",\"East Asia\",\"East US\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"West Europe\",\"West US\",\"Southeast Asia\",\"Central US\",\"East US 2\",\"MSFT West US\",\"MSFT East US\",\"MSFT East Asia\",\"MSFT North Europe\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\"],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01-preview\",\"2014-04-01\"]},{\"resourceType\":\"sites/slots\",\"locations\":[\"Brazil South\",\"East Asia\",\"East US\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"West Europe\",\"West US\",\"Southeast Asia\",\"Central US\",\"East US 2\",\"MSFT West US\",\"MSFT East US\",\"MSFT East Asia\",\"MSFT North Europe\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\"],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01-preview\",\"2014-04-01\"]},{\"resourceType\":\"runtimes\",\"locations\":[],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01\"]},{\"resourceType\":\"sites/metrics\",\"locations\":[],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01\"]},{\"resourceType\":\"sites/metricDefinitions\",\"locations\":[],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01\"]},{\"resourceType\":\"serverFarms/metrics\",\"locations\":[],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01\"]},{\"resourceType\":\"serverFarms/metricDefinitions\",\"locations\":[],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01\"]},{\"resourceType\":\"georegions\",\"locations\":[],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01-preview\",\"2014-04-01\"]},{\"resourceType\":\"hostingEnvironments\",\"locations\":[\"Brazil South\",\"East Asia\",\"East US\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"South Central US\",\"West Europe\",\"West US\",\"Southeast Asia\",\"Central US\",\"East US 2\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\"],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01\"]},{\"resourceType\":\"deploymentLocations\",\"locations\":[],\"apiVersions\":[\"2015-04-01\",\"2015-02-01\",\"2014-11-01\",\"2014-06-01\",\"2014-04-01-preview\",\"2014-04-01\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/successbricks.cleardb\",\"namespace\":\"successbricks.cleardb\",\"resourceTypes\":[{\"resourceType\":\"databases\",\"locations\":[\"Brazil South\",\"Central US\",\"East Asia\",\"East US\",\"East US 2\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"Southeast Asia\",\"West Europe\",\"West US\",\"Australia Southeast\",\"Australia East\",\"South Central US\"],\"apiVersions\":[]},{\"resourceType\":\"clusters\",\"locations\":[\"Brazil South\",\"Central US\",\"East Asia\",\"East US\",\"East US 2\",\"Japan East\",\"Japan West\",\"North Central US\",\"North Europe\",\"Southeast Asia\",\"West Europe\",\"West US\",\"Australia Southeast\",\"Australia East\",\"South Central US\"],\"apiVersions\":[]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.ADHybridHealthService\",\"namespace\":\"Microsoft.ADHybridHealthService\",\"resourceTypes\":[{\"resourceType\":\"services\",\"locations\":[\"West US\"],\"apiVersions\":[]},{\"resourceType\":\"configuration\",\"locations\":[\"West US\"],\"apiVersions\":[]},{\"resourceType\":\"agents\",\"locations\":[\"West US\"],\"apiVersions\":[]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Authorization\",\"namespace\":\"Microsoft.Authorization\",\"resourceTypes\":[{\"resourceType\":\"roleAssignments\",\"locations\":[],\"apiVersions\":[\"2014-10-01-preview\",\"2014-07-01-preview\",\"2014-04-01-preview\"]},{\"resourceType\":\"roleDefinitions\",\"locations\":[],\"apiVersions\":[\"2014-10-01-preview\",\"2014-07-01-preview\",\"2014-04-01-preview\"]},{\"resourceType\":\"classicAdministrators\",\"locations\":[],\"apiVersions\":[\"2014-10-01-preview\",\"2014-07-01-preview\",\"2014-04-01-preview\"]},{\"resourceType\":\"permissions\",\"locations\":[],\"apiVersions\":[\"2014-10-01-preview\",\"2014-07-01-preview\",\"2014-04-01-preview\"]},{\"resourceType\":\"locks\",\"locations\":[],\"apiVersions\":[\"2015-01-01\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-01-01\",\"2014-10-01-preview\",\"2014-06-01\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Backup\",\"namespace\":\"Microsoft.Backup\",\"resourceTypes\":[{\"resourceType\":\"BackupVault\",\"locations\":[\"East US\",\"West US\",\"North Europe\",\"West Europe\",\"East Asia\",\"Southeast Asia\",\"Japan East\",\"Japan West\",\"Australia East\",\"Australia Southeast\"],\"apiVersions\":[\"2015-03-15\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.BizTalkServices\",\"namespace\":\"Microsoft.BizTalkServices\",\"resourceTypes\":[{\"resourceType\":\"BizTalk\",\"locations\":[\"East US\",\"West US\",\"North Europe\",\"West Europe\",\"Southeast Asia\",\"East Asia\",\"North Central US\",\"Japan West\",\"Japan East\",\"South Central US\"],\"apiVersions\":[]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.ClassicCompute\",\"namespace\":\"Microsoft.ClassicCompute\",\"resourceTypes\":[{\"resourceType\":\"domainNames\",\"locations\":[\"East Asia\",\"Southeast Asia\",\"East US\",\"East US 2\",\"West US\",\"North Central US\",\"South Central US\",\"Central US\",\"North Europe\",\"West Europe\",\"Japan East\",\"Japan West\",\"Brazil South\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\",\"North Central US (Stage)\"],\"apiVersions\":[\"2014-06-01\",\"2014-01-01\"]},{\"resourceType\":\"checkDomainNameAvailability\",\"locations\":[],\"apiVersions\":[\"2014-06-01\",\"2014-01-01\"]},{\"resourceType\":\"domainNames/slots\",\"locations\":[\"East Asia\",\"Southeast Asia\",\"East US\",\"East US 2\",\"West US\",\"North Central US\",\"South Central US\",\"Central US\",\"North Europe\",\"West Europe\",\"Japan East\",\"Japan West\",\"Brazil South\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\",\"North Central US (Stage)\"],\"apiVersions\":[\"2014-06-01\",\"2014-01-01\"]},{\"resourceType\":\"domainNames/slots/roles\",\"locations\":[\"East Asia\",\"Southeast Asia\",\"East US\",\"East US 2\",\"West US\",\"North Central US\",\"South Central US\",\"Central US\",\"North Europe\",\"West Europe\",\"Japan East\",\"Japan West\",\"Brazil South\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\",\"North Central US (Stage)\"],\"apiVersions\":[\"2014-06-01\",\"2014-01-01\"]},{\"resourceType\":\"domainNames/slots/roles/metricDefinitions\",\"locations\":[],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"domainNames/slots/roles/metrics\",\"locations\":[],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"virtualMachines\",\"locations\":[\"East Asia\",\"Southeast Asia\",\"East US\",\"East US 2\",\"West US\",\"North Central US\",\"South Central US\",\"Central US\",\"North Europe\",\"West Europe\",\"Japan East\",\"Japan West\",\"Brazil South\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\",\"North Central US (Stage)\"],\"apiVersions\":[\"2014-06-01\",\"2014-04-01\",\"2014-01-01\"]},{\"resourceType\":\"capabilities\",\"locations\":[],\"apiVersions\":[\"2014-06-01\"]},{\"resourceType\":\"quotas\",\"locations\":[],\"apiVersions\":[\"2014-06-01\",\"2014-01-01\"]},{\"resourceType\":\"virtualMachines/diagnosticSettings\",\"locations\":[\"East US\",\"East US 2\",\"North Central US\",\"North Europe\",\"West Europe\",\"Brazil South\",\"West US\",\"Central US\",\"South Central US\",\"Japan East\",\"Japan West\",\"East Asia\",\"Southeast Asia\",\"Australia East\",\"Australia Southeast\"],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"virtualMachines/metricDefinitions\",\"locations\":[\"East US\",\"East US 2\",\"North Central US\",\"North Europe\",\"West Europe\",\"Brazil South\",\"West US\",\"Central US\",\"South Central US\",\"Japan East\",\"Japan West\",\"East Asia\",\"Southeast Asia\",\"Australia East\",\"Australia Southeast\"],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"virtualMachines/metrics\",\"locations\":[\"North Central US\",\"South Central US\",\"East US\",\"East US 2\",\"West US\",\"Central US\",\"East Asia\",\"Southeast Asia\",\"North Europe\",\"West Europe\",\"Japan East\",\"Japan West\",\"Brazil South\",\"Australia East\",\"Australia Southeast\"],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2014-06-01\",\"2014-04-01\",\"2014-01-01\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.ClassicNetwork\",\"namespace\":\"Microsoft.ClassicNetwork\",\"resourceTypes\":[{\"resourceType\":\"virtualNetworks\",\"locations\":[\"East Asia\",\"Southeast Asia\",\"East US\",\"East US 2\",\"West US\",\"North Central US\",\"South Central US\",\"Central US\",\"North Europe\",\"West Europe\",\"Japan East\",\"Japan West\",\"Brazil South\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\",\"North Central US (Stage)\"],\"apiVersions\":[\"2014-06-01\",\"2014-01-01\"]},{\"resourceType\":\"reservedIps\",\"locations\":[\"East Asia\",\"Southeast Asia\",\"East US\",\"East US 2\",\"West US\",\"North Central US\",\"South Central US\",\"Central US\",\"North Europe\",\"West Europe\",\"Japan East\",\"Japan West\",\"Brazil South\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\",\"North Central US (Stage)\"],\"apiVersions\":[\"2014-06-01\",\"2014-01-01\"]},{\"resourceType\":\"quotas\",\"locations\":[],\"apiVersions\":[\"2014-06-01\",\"2014-01-01\"]},{\"resourceType\":\"gatewaySupportedDevices\",\"locations\":[],\"apiVersions\":[\"2014-06-01\",\"2014-01-01\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2014-06-01\",\"2014-04-01\",\"2014-01-01\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.ClassicStorage\",\"namespace\":\"Microsoft.ClassicStorage\",\"resourceTypes\":[{\"resourceType\":\"storageAccounts\",\"locations\":[\"East Asia\",\"Southeast Asia\",\"East US\",\"East US 2\",\"West US\",\"North Central US\",\"South Central US\",\"Central US\",\"North Europe\",\"West Europe\",\"Japan East\",\"Japan West\",\"Brazil South\",\"Australia East\",\"Australia Southeast\",\"East US 2 (Stage)\",\"North Central US (Stage)\"],\"apiVersions\":[\"2014-06-01\",\"2014-04-01-beta\",\"2014-04-01\",\"2014-01-01\"]},{\"resourceType\":\"quotas\",\"locations\":[],\"apiVersions\":[\"2014-06-01\",\"2014-01-01\"]},{\"resourceType\":\"checkStorageAccountAvailability\",\"locations\":[],\"apiVersions\":[\"2014-06-01\",\"2014-01-01\"]},{\"resourceType\":\"storageAccounts/services\",\"locations\":[\"West US\",\"Central US\",\"South Central US\",\"Japan East\",\"Japan West\",\"East Asia\",\"Southeast Asia\",\"Australia East\",\"Australia Southeast\",\"East US\",\"East US 2\",\"North Central US\",\"North Europe\",\"West Europe\",\"Brazil South\"],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"storageAccounts/services/metricDefinitions\",\"locations\":[],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"storageAccounts/services/metrics\",\"locations\":[],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"storageAccounts/metricDefinitions\",\"locations\":[],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"storageAccounts/metrics\",\"locations\":[],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"capabilities\",\"locations\":[],\"apiVersions\":[\"2014-06-01\"]},{\"resourceType\":\"disks\",\"locations\":[],\"apiVersions\":[\"2014-06-01\"]},{\"resourceType\":\"images\",\"locations\":[],\"apiVersions\":[\"2014-06-01\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2014-06-01\",\"2014-04-01\",\"2014-01-01\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.DataFactory\",\"namespace\":\"Microsoft.DataFactory\",\"resourceTypes\":[{\"resourceType\":\"dataFactories\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-01-01-preview\",\"2014-12-01-preview\",\"2014-10-01-preview\",\"2014-09-01-preview\",\"2014-04-01\"]},{\"resourceType\":\"dataFactories/diagnosticSettings\",\"locations\":[\"East US\",\"East US 2\",\"North Central US\",\"North Europe\",\"West Europe\",\"Brazil South\",\"West US\",\"Central US\",\"South Central US\",\"Japan East\",\"Japan West\",\"East Asia\",\"Southeast Asia\"],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"dataFactories/metricDefinitions\",\"locations\":[\"East US\",\"East US 2\",\"North Central US\",\"North Europe\",\"West Europe\",\"Brazil South\",\"West US\",\"Central US\",\"South Central US\",\"Japan East\",\"Japan West\",\"East Asia\",\"Southeast Asia\"],\"apiVersions\":[\"2014-04-01\"]},{\"resourceType\":\"checkDataFactoryNameAvailability\",\"locations\":[],\"apiVersions\":[\"2015-01-01-preview\",\"2014-09-01-preview\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.DocumentDB\",\"namespace\":\"Microsoft.DocumentDB\",\"resourceTypes\":[{\"resourceType\":\"databaseAccounts\",\"locations\":[\"West US\",\"North Europe\",\"West Europe\",\"East US\",\"East Asia\",\"Southeast Asia\"],\"apiVersions\":[\"2015-04-08\",\"2014-08-21\",\"2014-07-10\",\"2014-04-01\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Features\",\"namespace\":\"Microsoft.Features\",\"resourceTypes\":[{\"resourceType\":\"features\",\"locations\":[],\"apiVersions\":[\"2014-08-01-preview\"]},{\"resourceType\":\"providers\",\"locations\":[],\"apiVersions\":[\"2014-08-01-preview\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.IntelligentSystems\",\"namespace\":\"Microsoft.IntelligentSystems\",\"resourceTypes\":[{\"resourceType\":\"accounts\",\"locations\":[\"West US\",\"North Europe\"],\"apiVersions\":[\"2014-04-28-preview\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Logic\",\"namespace\":\"Microsoft.Logic\",\"resourceTypes\":[{\"resourceType\":\"workflows\",\"locations\":[\"North Central US\",\"South Central US\",\"North Europe\",\"West Europe\",\"East Asia\",\"Southeast Asia\",\"West US\",\"East US\",\"Japan West\",\"Japan East\",\"Brazil South\"],\"apiVersions\":[\"2015-02-01-preview\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.NotificationHubs\",\"namespace\":\"Microsoft.NotificationHubs\",\"resourceTypes\":[{\"resourceType\":\"namespaces\",\"locations\":[\"Australia East\",\"Australia Southeast\",\"Central US\",\"East US\",\"East US 2\",\"West US\",\"North Central US\",\"South Central US\",\"East Asia\",\"Southeast Asia\",\"Brazil South\",\"Japan East\",\"Japan West\",\"North Europe\",\"West Europe\"],\"apiVersions\":[\"2014-09-01\"]},{\"resourceType\":\"namespaces/notificationHubs\",\"locations\":[\"Australia East\",\"Australia Southeast\",\"Central US\",\"East US\",\"East US 2\",\"West US\",\"North Central US\",\"South Central US\",\"East Asia\",\"Southeast Asia\",\"Brazil South\",\"Japan East\",\"Japan West\",\"North Europe\",\"West Europe\"],\"apiVersions\":[\"2014-09-01\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.PowerApps\",\"namespace\":\"Microsoft.PowerApps\",\"resourceTypes\":[{\"resourceType\":\"apps\",\"locations\":[\"United States\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-02-01-preview\"]},{\"resourceType\":\"generateTransientStorage\",\"locations\":[\"United States\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-02-01-preview\"]},{\"resourceType\":\"objectIds\",\"locations\":[\"United States\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-02-01-preview\"]},{\"resourceType\":\"objectIds/apps\",\"locations\":[\"United States\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-02-01-preview\"]},{\"resourceType\":\"galleries\",\"locations\":[\"United States\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-02-01-preview\"]},{\"resourceType\":\"galleries/items\",\"locations\":[\"United States\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-02-01-preview\"]},{\"resourceType\":\"tenants\",\"locations\":[\"United States\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-02-01-preview\"]},{\"resourceType\":\"enroll\",\"locations\":[\"United States\"],\"apiVersions\":[\"2015-03-01-preview\",\"2015-02-01-preview\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Resources\",\"namespace\":\"Microsoft.Resources\",\"resourceTypes\":[{\"resourceType\":\"subscriptions\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"subscriptions/providers\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"subscriptions/operationresults\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"resourceGroups\",\"locations\":[\"Central US\",\"East Asia\",\"Southeast Asia\",\"East US\",\"East US 2\",\"West US\",\"North Central US\",\"South Central US\",\"North Europe\",\"West Europe\",\"Japan East\",\"Japan West\",\"Brazil South\",\"Australia Southeast\",\"Australia East\"],\"apiVersions\":[]},{\"resourceType\":\"subscriptions/locations\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"subscriptions/tagnames\",\"locations\":[],\"apiVersions\":[]},{\"resourceType\":\"links\",\"locations\":[],\"apiVersions\":[]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Scheduler\",\"namespace\":\"Microsoft.Scheduler\",\"resourceTypes\":[{\"resourceType\":\"jobcollections\",\"locations\":[\"North Central US\",\"South Central US\",\"North Europe\",\"West Europe\",\"East Asia\",\"Southeast Asia\",\"West US\",\"East US\",\"Japan West\",\"Japan East\",\"Brazil South\",\"Central US\",\"East US 2\",\"Australia East\",\"Australia Southeast\"],\"apiVersions\":[\"2014-08-01-preview\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Search\",\"namespace\":\"Microsoft.Search\",\"resourceTypes\":[{\"resourceType\":\"searchServices\",\"locations\":[\"West US\",\"East US\",\"North Europe\",\"West Europe\",\"Southeast Asia\",\"East Asia\",\"North Central US\",\"South Central US\"],\"apiVersions\":[\"2015-02-28\",\"2014-07-31-Preview\"]},{\"resourceType\":\"checkServiceNameAvailability\",\"locations\":[],\"apiVersions\":[\"2015-02-28\",\"2014-07-31-Preview\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/microsoft.support\",\"namespace\":\"microsoft.support\",\"resourceTypes\":[{\"resourceType\":\"actions\",\"locations\":[\"North Central US\",\"South Central US\",\"Central US\",\"West Europe\",\"North Europe\",\"West US\",\"East US\",\"East US 2\",\"Japan East\",\"Japan West\",\"Brazil South\",\"Southeast Asia\",\"East Asia\",\"Australia East\",\"Australia Southeast\"],\"apiVersions\":[\"2015-03-01\",\"2014-04-01\"]},{\"resourceType\":\"supporttickets\",\"locations\":[\"North Central US\",\"South Central US\",\"Central US\",\"West Europe\",\"North Europe\",\"West US\",\"East US\",\"East US 2\",\"Japan East\",\"Japan West\",\"Brazil South\",\"Southeast Asia\",\"East Asia\",\"Australia East\",\"Australia Southeast\"],\"apiVersions\":[\"2015-03-01\",\"2014-04-01\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/NewRelic.APM\",\"namespace\":\"NewRelic.APM\",\"resourceTypes\":[{\"resourceType\":\"accounts\",\"locations\":[\"North Central US\",\"South Central US\",\"West US\",\"East US\",\"North Europe\",\"West Europe\",\"Southeast Asia\",\"East Asia\"],\"apiVersions\":[\"2014-10-01\",\"2014-04-01\"]}],\"registrationState\":\"NotRegistered\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-request-id': '03328c14-aa05-4515-a198-4cfd234015c7',
  'x-ms-correlation-request-id': '03328c14-aa05-4515-a198-4cfd234015c7',
  'x-ms-routing-request-id': 'WESTUS:20150403T164525Z:03328c14-aa05-4515-a198-4cfd234015c7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 03 Apr 2015 16:45:24 GMT',
  'content-length': '33345' });
 return result; }]];