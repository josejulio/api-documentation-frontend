// Auto generated file, do not modify directly.
// See api-documentation-frontend/transform for more info on how to generate this file.

import { OpenAPIV3 } from "openapi-types";

import APIConfigurationIcons from "./APIConfigurationIcons";

export interface APIConfiguration {
  displayName: string;
  icon: keyof typeof APIConfigurationIcons;
  description: string;
  getApi: () => Promise<OpenAPIV3.Document>;
}

export const apiConfigurations: Array<APIConfiguration> = [
  {
    displayName: "Advisor",
    description: "The API of the Advisor project in Insights",
    icon: "InsightsIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/insights/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Cost Management",
    description:
      "The API for Project Koku and OpenShift cost management. You can find out more about Project Koku at https://github.com/project-koku",
    icon: "OpenShiftIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/cost-management/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Drift Backend Service",
    description: "Service that returns differences between systems.",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/drift/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Drift Baseline",
    description: "Service that returns system baselines",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/system-baseline/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Drift Historical Systems Profile Service ",
    description: "Service that returns system baselines",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/historical-system-profiles/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Image Builder",
    description: "Service that relays image build requests",
    icon: "InsightsIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/image-builder/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Integrations",
    description: "The API for Integrations",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/integrations/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Managed Inventory",
    description:
      "REST interface for the Insights Platform Host Inventory application",
    icon: "InsightsIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/inventory/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Notifications",
    description: "The API for Notifications",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/notifications/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Operator Gathering Conditions Service",
    description: "Gathering Conditions Services to Insights Operator",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/gathering/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Results Aggregator",
    description:
      "Aggregation service for the results of running Insights rules",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/insights-results-aggregator/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Patch",
    description: "API of the Patch application on console.redhat.com",
    icon: "InsightsIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/patch/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Playbook Dispatcher",
    description:
      "Playbook Dispatcher is a service for running Ansible Playbooks on hosts connected via Cloud Connector",
    icon: "AnsibleIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/playbook-dispatcher/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Policies",
    description: "The API for Policies",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/policies/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Red Hat Connector",
    description: "Config manager service",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/config-manager/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Remediations",
    description: "Insights Remediations Service",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/remediations/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Resource Optimization",
    description: "Flask Backend API for Resource Optimization Service",
    icon: "InsightsIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/ros/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "RHEL for Edge",
    description: "RHEL for Edge API",
    icon: "EdgeIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/edge/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Role-based Access Control",
    description: "The API for Role Based Access Control",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/rbac/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Sources",
    description: "Sources API",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/sources/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Subscriptions",
    description:
      "REST interface for the rhsm-subscriptions service. Please note any deprecated APIs. Our current deprecation policy is to keep deprecated APIs around for at least 6 months",
    icon: "SubscriptionsIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/rhsm-subscriptions/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Vulnerability Management",
    description: "Vulnerability API",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/hcc-insights/vulnerability/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Account Management Service",
    description: "Manage user subscriptions and clusters",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/openshift/accounts-management-service/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Authorization Service",
    description: "Enables access control on resources of OCM services",
    icon: "OpenShiftIcon",
    getApi: () =>
      import(
        "./apis/openshift/authorization-service/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Connector Management",
    description: "Connector Management API is a REST API to manage connectors.",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/openshift/connector-management/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Kafka Service Fleet Manager Service",
    description: "Kafka Management API is a REST API to manage Kafka instances",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/openshift/kafka-service-fleet-manager-service/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "RHACS Service Fleet Manager",
    description:
      "Red Hat Advanced Cluster Security (RHACS) Service Fleet Manager is a Rest API to manage instances of ACS components.",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/openshift/rhacs-service-fleet-manager/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Service Logs",
    description:
      "Receives and maintains logs from internal sources related to OpenShift clusters.",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/openshift/service-logs/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Service Registry Management",
    description:
      "Service Registry Management API is a REST API for managing Service Registry instances. Service Registry is a datastore for event schemas and API designs, which is based on the open source Apicurio Registry project",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/openshift/service-registry-management/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Upgrades Information Service",
    description: "Upgrades Information Service API",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/openshift/upgrades-information-service/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
  {
    displayName: "Web-RCA Service",
    description: "Web-RCA Service API",
    icon: "GenericIcon",
    getApi: () =>
      import(
        "./apis/openshift/web-rca-service/openapi.json"
      ) as unknown as Promise<OpenAPIV3.Document>,
  },
];
